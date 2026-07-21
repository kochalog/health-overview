#!/usr/bin/env python3
from __future__ import annotations

import argparse
import base64
import gzip
import json
import os
import statistics
import subprocess
import sys
from collections import defaultdict
from dataclasses import dataclass
from datetime import datetime, date, time, timedelta, timezone
from pathlib import Path
from zoneinfo import ZoneInfo


ROOT = Path(__file__).resolve().parents[1]
CLOUDFLARE_DIR = ROOT / "cloudflare-worker"
REPORTS_DIR = ROOT / "reports"
STATE_PATH = REPORTS_DIR / ".daily-health-report-state.json"
JST = ZoneInfo("Asia/Tokyo")
RINGCONN_PACKAGE = "com.gdjztech.ringconn"
WALKING_EXERCISE_TYPE = 79
INFERRED_WALK_MIN_STEPS = 200
INFERRED_WALK_MIN_MINUTES = 2
INFERRED_WALK_MIN_CADENCE = 60
INFERRED_WALK_MAX_RECORD_MINUTES = 30
INFERRED_WALK_MERGE_GAP_MINUTES = 3
SLEEP_STAGE_AWAKE = 1
SLEEP_STAGE_OUT_OF_BED = 3
SLEEP_STAGE_LIGHT = 4
SLEEP_STAGE_DEEP = 5
SLEEP_STAGE_REM = 6
SLEEP_GOAL_MINUTES = 450

COUNT_LABELS = {
    "WeightRecord": "体重",
    "BodyFatRecord": "体脂肪率",
    "LeanBodyMassRecord": "除脂肪体重",
    "BasalMetabolicRateRecord": "基礎代謝",
    "HeartRateRecord": "心拍",
    "RestingHeartRateRecord": "安静時心拍",
    "HeartRateVariabilityRmssdRecord": "HRV",
    "OxygenSaturationRecord": "血中酸素",
    "RespiratoryRateRecord": "呼吸数",
    "SleepSessionRecord": "睡眠",
    "StepsRecord": "歩数",
    "ActiveCaloriesBurnedRecord": "活動カロリー",
    "ExerciseSessionRecord": "運動",
}


@dataclass
class LatestExport:
    export_hash: str
    device_id: str
    exported_at: str
    received_at: str
    payload: dict


def parse_instant(value: str) -> datetime:
    normalized = value.replace("Z", "+00:00")
    return datetime.fromisoformat(normalized)


def local_date(value: str) -> date:
    return parse_instant(value).astimezone(JST).date()


def format_minutes(minutes: float | None) -> str:
    if minutes is None:
        return "-"
    rounded = int(round(minutes))
    hours, mins = divmod(rounded, 60)
    return f"{hours}h{mins:02d}m"


def format_delta(value: float | None, unit: str = "", signed: bool = True, decimals: int = 0) -> str:
    if value is None:
        return "-"
    sign = "+" if signed and value > 0 else ""
    if decimals == 0:
        return f"{sign}{value:.0f}{unit}"
    return f"{sign}{value:.{decimals}f}{unit}"


def format_number(value: float | None, unit: str = "", decimals: int = 0) -> str:
    if value is None:
        return "-"
    if decimals == 0:
        return f"{value:,.0f}{unit}"
    return f"{value:,.{decimals}f}{unit}"


def run_wrangler_query(sql: str) -> list[dict]:
    command = [
        "npx",
        "wrangler",
        "d1",
        "execute",
        "health_receiver",
        "--remote",
        "--command",
        sql,
    ]
    env = {**os.environ, "HOME": str(CLOUDFLARE_DIR / ".wrangler-home")}
    result = subprocess.run(
        command,
        cwd=CLOUDFLARE_DIR,
        env=env,
        text=True,
        stdout=subprocess.PIPE,
        stderr=subprocess.STDOUT,
        check=False,
    )
    if result.returncode != 0:
        raise RuntimeError(result.stdout.strip())

    output = result.stdout
    start = output.rfind("\n[")
    if start != -1:
        start += 1
    else:
        start = output.find("[{")
    end = output.rfind("]")
    if start == -1 or end == -1 or end < start:
        raise RuntimeError(f"Wrangler output did not contain JSON:\n{output}")
    data = json.loads(output[start : end + 1])
    if not data or not data[0].get("success"):
        raise RuntimeError(f"D1 query failed:\n{output}")
    return data[0].get("results", [])


def decode_payload(row: dict) -> dict:
    payload = json.loads(row["payload_json"])
    if payload.get("payloadEncoding") == "gzip+base64":
        compressed = base64.b64decode(payload["payloadData"])
        return json.loads(gzip.decompress(compressed).decode("utf-8"))
    return payload


def load_latest_export() -> LatestExport | None:
    rows = run_wrangler_query(
        "SELECT export_hash, device_id, exported_at, received_at, payload_json "
        "FROM exports WHERE device_id != 'codex-smoke-test' "
        "ORDER BY received_at DESC LIMIT 1"
    )
    if not rows:
        return None
    row = rows[0]
    return LatestExport(
        export_hash=row["export_hash"],
        device_id=row["device_id"],
        exported_at=row["exported_at"],
        received_at=row["received_at"],
        payload=decode_payload(row),
    )


def load_state() -> dict:
    if not STATE_PATH.exists():
        return {}
    return json.loads(STATE_PATH.read_text(encoding="utf-8"))


def save_state(latest: LatestExport, report_path: Path) -> None:
    REPORTS_DIR.mkdir(parents=True, exist_ok=True)
    STATE_PATH.write_text(
        json.dumps(
            {
                "lastExportHash": latest.export_hash,
                "lastExportedAt": latest.exported_at,
                "lastReportPath": str(report_path.relative_to(ROOT)),
            },
            ensure_ascii=False,
            indent=2,
        )
        + "\n",
        encoding="utf-8",
    )


def report_exists_for(latest: LatestExport) -> bool:
    state = load_state()
    if state.get("lastExportHash") == latest.export_hash:
        return True
    needle = latest.export_hash
    for path in REPORTS_DIR.glob("health-report-*.md"):
        try:
            if needle in path.read_text(encoding="utf-8"):
                return True
        except UnicodeDecodeError:
            continue
    return False


def merge_minutes(intervals: list[tuple[datetime, datetime]]) -> float:
    if not intervals:
        return 0
    intervals = sorted(intervals)
    merged = []
    current_start, current_end = intervals[0]
    for start, end in intervals[1:]:
        if start <= current_end:
            current_end = max(current_end, end)
        else:
            merged.append((current_start, current_end))
            current_start, current_end = start, end
    merged.append((current_start, current_end))
    return sum((end - start).total_seconds() / 60 for start, end in merged)


def split_interval_by_date(start: datetime, end: datetime) -> dict[date, float]:
    values = defaultdict(float)
    cursor = start.astimezone(JST)
    local_end = end.astimezone(JST)
    while cursor < local_end:
        next_midnight = datetime.combine(cursor.date() + timedelta(days=1), time.min, JST)
        segment_end = min(local_end, next_midnight)
        values[cursor.date()] += (segment_end - cursor).total_seconds() / 60
        cursor = segment_end
    return values


def sleep_day_for(start: datetime, end: datetime) -> date:
    local_start = start.astimezone(JST)
    local_end = end.astimezone(JST)
    if local_start.date() == local_end.date() and local_start.hour >= 18:
        return local_start.date() + timedelta(days=1)
    return local_end.date()


def usable_sleep_intervals(record: dict) -> list[tuple[datetime, datetime]]:
    stages = record.get("stages") or []
    if len(stages) == 1 and stages[0].get("stage") in {SLEEP_STAGE_AWAKE, SLEEP_STAGE_OUT_OF_BED}:
        return []
    if len(stages) > 1:
        intervals = []
        for stage in stages:
            if stage.get("stage") in {SLEEP_STAGE_AWAKE, SLEEP_STAGE_OUT_OF_BED}:
                continue
            start_raw = stage.get("startTime")
            end_raw = stage.get("endTime")
            if start_raw and end_raw:
                intervals.append((parse_instant(start_raw), parse_instant(end_raw)))
        if intervals:
            return intervals

    start_raw = record.get("startTime")
    end_raw = record.get("endTime")
    if not start_raw or not end_raw:
        return []
    return [(parse_instant(start_raw), parse_instant(end_raw))]


def remove_nested_intervals(intervals: list[tuple[datetime, datetime]]) -> list[tuple[datetime, datetime]]:
    kept = []
    for start, end in sorted(intervals, key=lambda item: (item[1] - item[0]), reverse=True):
        if any(start >= kept_start and end <= kept_end for kept_start, kept_end in kept):
            continue
        kept.append((start, end))
    return kept


def average(values: list[float]) -> float | None:
    clean = [value for value in values if value is not None]
    if not clean:
        return None
    return sum(clean) / len(clean)


def clamp(value: float, minimum: float = 0, maximum: float = 100) -> float:
    return max(minimum, min(maximum, value))


def weighted_average(parts: list[tuple[float | None, float]]) -> float | None:
    available = [(value, weight) for value, weight in parts if value is not None]
    if not available:
        return None
    total_weight = sum(weight for _, weight in available)
    return sum(value * weight for value, weight in available) / total_weight


def intervals_overlap(
    first_start: datetime,
    first_end: datetime,
    second_start: datetime,
    second_end: datetime,
) -> bool:
    return first_start < second_end and second_start < first_end


def infer_walking_sessions(records: list[dict]) -> list[dict]:
    """Infer purposeful RingConn walks from dense step intervals.

    The 60 steps/min floor intentionally includes relaxed walking. A final bout
    still needs at least 200 steps over two minutes, which filters out most
    incidental movement. Any overlap with an explicit exercise session is
    excluded so RingConn/Health Connect workouts are not counted twice.
    """
    exercise_intervals = []
    for record in records:
        if record.get("type") != "ExerciseSessionRecord":
            continue
        start_raw = record.get("startTime")
        end_raw = record.get("endTime")
        if not start_raw or not end_raw:
            continue
        exercise_intervals.append((parse_instant(start_raw), parse_instant(end_raw)))

    candidates = defaultdict(list)
    for record in records:
        if record.get("type") != "StepsRecord":
            continue
        if record.get("sourcePackage") != RINGCONN_PACKAGE:
            continue
        start_raw = record.get("startTime")
        end_raw = record.get("endTime")
        count = record.get("count")
        if not start_raw or not end_raw or not isinstance(count, (int, float)) or count <= 0:
            continue
        start = parse_instant(start_raw)
        end = parse_instant(end_raw)
        minutes = (end - start).total_seconds() / 60
        if minutes <= 0 or minutes > INFERRED_WALK_MAX_RECORD_MINUTES:
            continue
        cadence = count / minutes
        if cadence < INFERRED_WALK_MIN_CADENCE:
            continue
        if any(intervals_overlap(start, end, other_start, other_end) for other_start, other_end in exercise_intervals):
            continue
        candidates[start.astimezone(JST).date()].append(
            {"start": start, "end": end, "steps": round(float(count))}
        )

    inferred = []
    for day, intervals in candidates.items():
        groups = []
        for item in sorted(intervals, key=lambda value: value["start"]):
            if groups:
                gap = (item["start"] - groups[-1][-1]["end"]).total_seconds() / 60
                if 0 <= gap <= INFERRED_WALK_MERGE_GAP_MINUTES:
                    groups[-1].append(item)
                    continue
            groups.append([item])

        for group in groups:
            start = group[0]["start"]
            end = max(item["end"] for item in group)
            steps = sum(item["steps"] for item in group)
            minutes = (end - start).total_seconds() / 60
            cadence = steps / minutes if minutes > 0 else 0
            if (
                steps < INFERRED_WALK_MIN_STEPS
                or minutes < INFERRED_WALK_MIN_MINUTES
                or cadence < INFERRED_WALK_MIN_CADENCE
            ):
                continue
            inferred.append(
                {
                    "id": f"inferred-ringconn-walk-{day.isoformat()}-{int(start.timestamp())}",
                    "date": day,
                    "startTime": start.isoformat(),
                    "endTime": end.isoformat(),
                    "minutes": max(round(minutes), 1),
                    "steps": steps,
                    "cadence": round(cadence),
                    "sourcePackage": RINGCONN_PACKAGE,
                    "inferred": True,
                }
            )
    return sorted(inferred, key=lambda value: value["startTime"])


def latest_value(records: list[dict], key: str, target: date) -> float | None:
    candidates = []
    for record in records:
        record_time = record.get("time")
        if not record_time or local_date(record_time) != target:
            continue
        value = record.get(key)
        if isinstance(value, (int, float)):
            candidates.append((parse_instant(record_time), float(value)))
    if not candidates:
        return None
    return sorted(candidates)[-1][1]


def aggregate(export: dict) -> tuple[dict, dict]:
    records = export.get("records", [])
    by_type = defaultdict(list)
    for record in records:
        by_type[record.get("type")].append(record)

    metrics = defaultdict(lambda: defaultdict(float))
    heart_samples = defaultdict(list)
    oxygen_values = defaultdict(list)
    resting_values = defaultdict(list)
    hrv_values = defaultdict(list)
    respiratory_values = defaultdict(list)
    sleep_intervals = defaultdict(list)
    sleep_in_bed_intervals = defaultdict(list)
    sleep_stage_intervals = defaultdict(lambda: defaultdict(list))
    steps_by_source = defaultdict(lambda: defaultdict(float))

    for record in records:
        record_type = record.get("type")
        if record_type in {"StepsRecord", "ActiveCaloriesBurnedRecord", "ExerciseSessionRecord", "HeartRateRecord"}:
            start_raw = record.get("startTime")
            end_raw = record.get("endTime")
            if not start_raw or not end_raw:
                continue
            start = parse_instant(start_raw)
            end = parse_instant(end_raw)
            if record_type == "StepsRecord":
                for day, share in split_interval_by_date(start, end).items():
                    total_minutes = max((end - start).total_seconds() / 60, 1)
                    source = record.get("sourcePackage") or "unknown"
                    steps_by_source[day][source] += record.get("count", 0) * (share / total_minutes)
            elif record_type == "ActiveCaloriesBurnedRecord":
                for day, share in split_interval_by_date(start, end).items():
                    total_minutes = max((end - start).total_seconds() / 60, 1)
                    metrics[day]["activeCalories"] += record.get("kilocalories", 0) * (share / total_minutes)
            elif record_type == "ExerciseSessionRecord":
                start_day = start.astimezone(JST).date()
                duration = max((end - start).total_seconds() / 60, 0)
                metrics[start_day]["exerciseSessions"] += 1
                metrics[start_day]["exerciseMinutes"] += duration
                if record.get("exerciseType") == WALKING_EXERCISE_TYPE:
                    metrics[start_day]["walkingMinutes"] += duration
            elif record_type == "HeartRateRecord":
                for sample in record.get("samples", []):
                    bpm = sample.get("beatsPerMinute")
                    sample_time = sample.get("time")
                    if isinstance(bpm, (int, float)) and sample_time:
                        heart_samples[local_date(sample_time)].append(float(bpm))
        elif record_type == "SleepSessionRecord":
            start_raw = record.get("startTime")
            end_raw = record.get("endTime")
            if start_raw and end_raw:
                session_start = parse_instant(start_raw)
                session_end = parse_instant(end_raw)
                session_day = sleep_day_for(session_start, session_end)
                sleep_in_bed_intervals[session_day].append((session_start, session_end))
                for stage in record.get("stages") or []:
                    stage_start_raw = stage.get("startTime")
                    stage_end_raw = stage.get("endTime")
                    stage_type = stage.get("stage")
                    if not stage_start_raw or not stage_end_raw:
                        continue
                    if stage_type not in {
                        SLEEP_STAGE_AWAKE,
                        SLEEP_STAGE_OUT_OF_BED,
                        SLEEP_STAGE_LIGHT,
                        SLEEP_STAGE_DEEP,
                        SLEEP_STAGE_REM,
                    }:
                        continue
                    sleep_stage_intervals[session_day][stage_type].append(
                        (parse_instant(stage_start_raw), parse_instant(stage_end_raw))
                    )
            for start, end in usable_sleep_intervals(record):
                sleep_day = sleep_day_for(start, end)
                sleep_intervals[sleep_day].append((start, end))
        elif record_type == "OxygenSaturationRecord":
            value = record.get("percentage")
            record_time = record.get("time")
            if isinstance(value, (int, float)) and record_time:
                oxygen_values[local_date(record_time)].append(float(value))
        elif record_type == "RestingHeartRateRecord":
            value = record.get("beatsPerMinute")
            record_time = record.get("time")
            if isinstance(value, (int, float)) and record_time:
                resting_values[local_date(record_time)].append(float(value))
        elif record_type == "HeartRateVariabilityRmssdRecord":
            value = record.get("milliseconds")
            record_time = record.get("time")
            if isinstance(value, (int, float)) and record_time:
                hrv_values[local_date(record_time)].append(float(value))
        elif record_type == "RespiratoryRateRecord":
            value = record.get("rate")
            record_time = record.get("time")
            if isinstance(value, (int, float)) and record_time:
                respiratory_values[local_date(record_time)].append(float(value))

    for session in infer_walking_sessions(records):
        metrics[session["date"]]["walkingMinutes"] += session["minutes"]
        metrics[session["date"]]["inferredWalkingMinutes"] += session["minutes"]
        metrics[session["date"]]["inferredWalkingSteps"] += session["steps"]

    for day, source_values in steps_by_source.items():
        if source_values.get(RINGCONN_PACKAGE):
            metrics[day]["steps"] = source_values[RINGCONN_PACKAGE]
        else:
            metrics[day]["steps"] = sum(source_values.values())

    for day, intervals in sleep_intervals.items():
        metrics[day]["sleepMinutes"] = merge_minutes(remove_nested_intervals(intervals))
    for day, intervals in sleep_in_bed_intervals.items():
        in_bed = merge_minutes(remove_nested_intervals(intervals))
        asleep = metrics[day].get("sleepMinutes", 0)
        metrics[day]["sleepInBedMinutes"] = in_bed
        if in_bed > 0 and asleep > 0:
            metrics[day]["sleepEfficiency"] = clamp(asleep / in_bed * 100)
    for day, stages in sleep_stage_intervals.items():
        stage_keys = {
            SLEEP_STAGE_AWAKE: "awakeMinutes",
            SLEEP_STAGE_OUT_OF_BED: "outOfBedMinutes",
            SLEEP_STAGE_LIGHT: "lightSleepMinutes",
            SLEEP_STAGE_DEEP: "deepSleepMinutes",
            SLEEP_STAGE_REM: "remSleepMinutes",
        }
        for stage_type, key in stage_keys.items():
            intervals = stages.get(stage_type) or []
            if intervals:
                metrics[day][key] = merge_minutes(remove_nested_intervals(intervals))
    for day, values in heart_samples.items():
        metrics[day]["heartRateAvg"] = average(values) or 0
    for day, values in oxygen_values.items():
        metrics[day]["oxygenAvg"] = average(values) or 0
    for day, values in resting_values.items():
        metrics[day]["restingHeartRate"] = average(values) or 0
    for day, values in hrv_values.items():
        metrics[day]["hrv"] = average(values) or 0
    for day, values in respiratory_values.items():
        metrics[day]["respiratoryRate"] = average(values) or 0

    body_measure_days = {
        local_date(record["time"])
        for record in [*by_type["WeightRecord"], *by_type["BodyFatRecord"]]
        if record.get("time")
    }
    for day in set(metrics) | body_measure_days:
        metrics[day]["weight"] = latest_value(by_type["WeightRecord"], "kilograms", day) or 0
        metrics[day]["bodyFat"] = latest_value(by_type["BodyFatRecord"], "percentage", day) or 0

    return metrics, by_type


def metric_value(metrics: dict, day: date, key: str) -> float | None:
    value = metrics.get(day, {}).get(key)
    if value in (None, 0):
        return None
    return float(value)


def seven_day_average(metrics: dict, target: date, key: str) -> float | None:
    days = [target - timedelta(days=offset) for offset in range(1, 8)]
    return average([metric_value(metrics, day, key) for day in days])


def history_values(metrics: dict, target: date, key: str, window: int = 28) -> list[float]:
    values = []
    for offset in range(1, window + 1):
        value = metric_value(metrics, target - timedelta(days=offset), key)
        if value is not None:
            values.append(value)
    return values


def baseline_for(metrics: dict, target: date, key: str, window: int = 28) -> dict:
    values = history_values(metrics, target, key, window)
    if not values:
        return {"average": None, "deviation": None, "days": 0}
    return {
        "average": average(values),
        "deviation": statistics.pstdev(values) if len(values) >= 2 else 0,
        "days": len(values),
    }


def baseline_status(metrics: dict, target: date, key: str) -> dict:
    today = metric_value(metrics, target, key)
    baseline = baseline_for(metrics, target, key)
    result = {**baseline, "value": today, "status": "insufficient", "delta": None}
    if today is None or baseline["average"] is None:
        return result
    result["delta"] = today - baseline["average"]
    if baseline["days"] < 3:
        return result
    minimum_bands = {
        "sleepMinutes": 30,
        "restingHeartRate": 2,
        "hrv": 5,
        "respiratoryRate": 0.7,
        "oxygenAvg": 0.5,
        "steps": 1000,
        "activeCalories": 80,
        "exerciseMinutes": 20,
    }
    band = max(baseline["deviation"] or 0, minimum_bands.get(key, 1))
    if result["delta"] > band:
        result["status"] = "above"
    elif result["delta"] < -band:
        result["status"] = "below"
    else:
        result["status"] = "usual"
    return result


def range_score(value: float | None, low: float, high: float, tolerance: float) -> float | None:
    if value is None:
        return None
    if low <= value <= high:
        return 100
    distance = low - value if value < low else value - high
    return clamp(100 - distance / tolerance * 100)


def build_sleep_score(metrics: dict, target: date) -> dict:
    asleep = metric_value(metrics, target, "sleepMinutes")
    efficiency = metric_value(metrics, target, "sleepEfficiency")
    deep = metric_value(metrics, target, "deepSleepMinutes")
    rem = metric_value(metrics, target, "remSleepMinutes")
    awake = metric_value(metrics, target, "awakeMinutes")
    in_bed = metric_value(metrics, target, "sleepInBedMinutes")

    duration_score = None if asleep is None else clamp(asleep / SLEEP_GOAL_MINUTES * 100)
    efficiency_score = None if efficiency is None else clamp((efficiency - 70) / 20 * 100)
    deep_share = None if asleep is None or deep is None else deep / asleep * 100
    rem_share = None if asleep is None or rem is None else rem / asleep * 100
    stage_score = weighted_average(
        [
            (range_score(deep_share, 13, 23, 13), 1),
            (range_score(rem_share, 18, 27, 18), 1),
        ]
    )
    continuity_score = None
    if awake is not None and in_bed:
        continuity_score = clamp(100 - awake / in_bed * 200)

    score = weighted_average(
        [
            (duration_score, 50),
            (efficiency_score, 25),
            (stage_score, 15),
            (continuity_score, 10),
        ]
    )
    return {
        "score": None if score is None else round(score),
        "durationMinutes": asleep,
        "efficiency": None if efficiency is None else round(efficiency, 1),
        "deepMinutes": deep,
        "remMinutes": rem,
        "awakeMinutes": awake,
        "availableFactors": sum(
            value is not None
            for value in (duration_score, efficiency_score, stage_score, continuity_score)
        ),
    }


def baseline_component(status: dict, higher_is_better: bool | None) -> float | None:
    value = status.get("value")
    baseline = status.get("average")
    if value is None or baseline is None or status.get("days", 0) < 3:
        return None
    floors = {
        "higher": max(abs(baseline) * 0.1, 1),
        "lower": max(abs(baseline) * 0.05, 1),
        "stable": max(abs(baseline) * 0.05, 0.5),
    }
    delta = value - baseline
    if higher_is_better is True:
        return clamp(55 + delta / floors["higher"] * 15)
    if higher_is_better is False:
        return clamp(55 - delta / floors["lower"] * 15)
    return clamp(80 - abs(delta) / floors["stable"] * 20)


def build_activity_load(metrics: dict, target: date) -> dict:
    parts = []
    factors = []
    for key, weight in (("activeCalories", 40), ("exerciseMinutes", 35), ("steps", 25)):
        today = metric_value(metrics, target, key)
        baseline = baseline_for(metrics, target, key)
        typical = baseline["average"]
        if today is None or typical in (None, 0):
            continue
        component = clamp(today / typical * 50)
        parts.append((component, weight))
        factors.append(key)
    score = weighted_average(parts)
    return {
        "score": None if score is None else round(score),
        "availableFactors": factors,
    }


def score_band(score: float | None, high: int = 75, low: int = 50) -> str:
    if score is None:
        return "unknown"
    if score >= high:
        return "high"
    if score < low:
        return "low"
    return "moderate"


def build_coaching_summary(metrics: dict, target: date) -> dict:
    sleep = build_sleep_score(metrics, target)
    monitor_keys = {
        "hrv": ("HRV", True),
        "restingHeartRate": ("安静時心拍", False),
        "respiratoryRate": ("呼吸数", None),
        "oxygenAvg": ("血中酸素", True),
    }
    monitor = {}
    recovery_parts = [(sleep["score"], 35)]
    physiology_components = 0
    factor_weights = {"hrv": 25, "restingHeartRate": 20, "respiratoryRate": 10, "oxygenAvg": 10}
    for key, (label, direction) in monitor_keys.items():
        status = baseline_status(metrics, target, key)
        status["label"] = label
        monitor[key] = status
        component = baseline_component(status, direction)
        if component is not None:
            physiology_components += 1
        recovery_parts.append((component, factor_weights[key]))

    recovery_value = weighted_average(recovery_parts) if physiology_components else None
    recovery_score = None if recovery_value is None else round(recovery_value)
    recovery_band = score_band(recovery_score)
    activity = build_activity_load(metrics, target)
    load_score = activity["score"]
    if recovery_band == "high":
        target_load = [60, 80]
    elif recovery_band == "low":
        target_load = [20, 45]
    else:
        target_load = [40, 65]

    sleep_bank = 0.0
    sleep_days = 0
    for offset in range(0, 7):
        value = metric_value(metrics, target - timedelta(days=offset), "sleepMinutes")
        if value is not None:
            sleep_bank += value - SLEEP_GOAL_MINUTES
            sleep_days += 1
    sleep_bank_value = round(sleep_bank) if sleep_days >= 3 else None
    debt = max(0, -(sleep_bank_value or 0))
    tonight_need = SLEEP_GOAL_MINUTES + min(90, debt / 3)
    if load_score is not None and load_score >= 75:
        tonight_need += 20
    tonight_need = round(clamp(tonight_need, 420, 570))

    warnings = []
    positives = []
    hrv_status = monitor["hrv"]
    rhr_status = monitor["restingHeartRate"]
    rr_status = monitor["respiratoryRate"]
    oxygen_status = monitor["oxygenAvg"]
    if sleep["score"] is not None:
        (positives if sleep["score"] >= 75 else warnings if sleep["score"] < 55 else positives).append(
            f"睡眠スコア {sleep['score']}"
        )
    if hrv_status["status"] == "below":
        warnings.append("HRVが通常より低い")
    elif hrv_status["status"] == "above":
        positives.append("HRVが通常より高い")
    if rhr_status["status"] == "above":
        warnings.append("安静時心拍が通常より高い")
    elif rhr_status["status"] == "below":
        positives.append("安静時心拍が通常より低い")
    if rr_status["status"] == "above":
        warnings.append("呼吸数が通常より高い")
    oxygen_value = oxygen_status["value"]
    if oxygen_value is not None and oxygen_value < 95:
        warnings.append("血中酸素が95%未満")
    elif oxygen_status["status"] == "below":
        warnings.append("血中酸素が通常より低い")

    if recovery_band == "high":
        headline = "回復状態は良好。普段通りか、少し強度を上げられる日です。"
    elif recovery_band == "low":
        headline = "回復サインが弱め。今日は負荷より回復を優先しましょう。"
    elif recovery_band == "unknown":
        headline = "回復度は較正中。今日は睡眠と活動量を中心に判断します。"
    else:
        headline = "回復状態は中間。普段通りでよいものの、追い込みすぎには注意です。"

    actions = []
    if recovery_band == "low":
        actions.append("高強度運動は見送り、20〜30分の散歩か軽いモビリティにする。")
    elif load_score is not None and load_score < target_load[0]:
        actions.append("余力があれば30分前後の散歩または中強度の運動で、活動負荷を目安範囲へ近づける。")
    elif load_score is not None and load_score > target_load[1]:
        actions.append("今日の負荷は十分。追加の高強度運動は不要です。")
    else:
        actions.append("運動は普段通りでOK。活動負荷は目安範囲内を狙う。")
    if sleep_bank_value is not None and sleep_bank_value < -90:
        actions.append(f"直近7日の睡眠負債は約{round(abs(sleep_bank_value) / 60, 1)}時間。今夜は{format_minutes(tonight_need)}を目安にする。")
    else:
        actions.append(f"今夜の睡眠目安は{format_minutes(tonight_need)}。就寝前30分は光と刺激を抑える。")
    if len(warnings) >= 2:
        actions.append("複数の回復サインが同時に外れています。一単日で判断せず、明日も続くか確認する。")

    confidence_count = 1 + sum(
        value.get("value") is not None and value.get("days", 0) >= 3
        for value in monitor.values()
    )
    confidence = "high" if confidence_count >= 4 else "medium" if confidence_count >= 2 else "low"
    return {
        "date": target.isoformat(),
        "recoveryScore": recovery_score,
        "recoveryBand": recovery_band,
        "sleep": sleep,
        "activityLoad": activity,
        "targetLoad": target_load,
        "sleepBankMinutes": sleep_bank_value,
        "tonightSleepNeedMinutes": tonight_need,
        "headline": headline,
        "warnings": warnings,
        "positives": positives,
        "actions": actions[:3],
        "monitor": monitor,
        "confidence": confidence,
        "baselineWindowDays": 28,
    }


def choose_target_day(export: dict, metrics: dict) -> date:
    range_end = parse_instant(export["rangeEnd"]).astimezone(JST)
    candidate = range_end.date()
    if range_end.time() < time(12, 0):
        candidate -= timedelta(days=1)
    available_days = [day for day, values in metrics.items() if any(value for value in values.values())]
    if candidate in available_days:
        return candidate
    return max(available_days) if available_days else candidate


def build_rows(metrics: dict, target: date) -> list[dict]:
    definitions = [
        ("睡眠", "sleepMinutes", "minutes", "7h以上を目安", True),
        ("睡眠効率", "sleepEfficiency", "percent", "寝床で実際に眠れた割合", True),
        ("深い睡眠", "deepSleepMinutes", "minutes", "単日より傾向を見る", True),
        ("REM睡眠", "remSleepMinutes", "minutes", "単日より傾向を見る", True),
        ("歩数", "steps", "count", "日中の活動量", True),
        ("ウォーキング", "walkingMinutes", "minutes", "明示記録+歩数密度から推定", True),
        ("活動カロリー", "activeCalories", "kcal", "活動量の補助指標", True),
        ("安静時心拍", "restingHeartRate", "bpm", "高い日は疲労寄り", False),
        ("平均心拍", "heartRateAvg", "bpm", "全体の心拍傾向", False),
        ("血中酸素", "oxygenAvg", "percent", "大きな低下に注意", True),
        ("運動", "exerciseMinutes", "minutes", "セッション時間", True),
        ("体重", "weight", "kg", "7日平均中心で見る", False),
        ("体脂肪率", "bodyFat", "percent", "7日平均中心で見る", False),
        ("HRV", "hrv", "ms", "高いほど回復寄り", True),
        ("呼吸数", "respiratoryRate", "rate", "回復・睡眠の補助", False),
    ]
    rows = []
    for label, key, unit, note, higher_is_better in definitions:
        yesterday = metric_value(metrics, target - timedelta(days=1), key)
        today = metric_value(metrics, target, key)
        avg7 = seven_day_average(metrics, target, key)
        previous_avg7 = seven_day_average(metrics, target - timedelta(days=1), key)
        delta_day = None if today is None or yesterday is None else today - yesterday
        delta_avg = None if today is None or avg7 is None else today - avg7
        trend = None if avg7 is None or previous_avg7 is None else avg7 - previous_avg7
        rows.append(
            {
                "label": label,
                "key": key,
                "unit": unit,
                "note": note,
                "higher_is_better": higher_is_better,
                "today": today,
                "yesterday": yesterday,
                "avg7": avg7,
                "delta_day": delta_day,
                "delta_avg": delta_avg,
                "trend": trend,
            }
        )
    return rows


def score_rows(rows: list[dict]) -> list[tuple[int, str]]:
    points = []
    by_key = {row["key"]: row for row in rows}

    sleep = by_key["sleepMinutes"]
    if sleep["today"] is not None:
        if sleep["today"] < 360:
            points.append((3, "睡眠が6時間未満です。今日は回復を優先した方がよさそうです。"))
        elif sleep["today"] >= 420:
            points.append((1, "睡眠は7時間以上で、回復の土台は作れています。"))

    resting = by_key["restingHeartRate"]
    if resting["delta_avg"] is not None:
        if resting["delta_avg"] >= 5:
            points.append((3, "安静時心拍が7日平均より高めです。疲労やストレスのサインとして見ます。"))
        elif resting["delta_avg"] <= -3:
            points.append((1, "安静時心拍は7日平均より低めで、回復寄りの状態です。"))

    steps = by_key["steps"]
    if steps["today"] is not None and steps["avg7"] is not None:
        if steps["today"] < steps["avg7"] * 0.7:
            points.append((2, "歩数が7日平均を大きく下回っています。軽い散歩で底上げできます。"))
        elif steps["today"] > steps["avg7"] * 1.2:
            points.append((1, "歩数は7日平均を上回り、活動量は十分です。"))

    hrv = by_key["hrv"]
    if hrv["today"] is not None and hrv["delta_avg"] is not None:
        if hrv["delta_avg"] <= -10:
            points.append((3, "HRVが7日平均より低めです。強度を上げる日は慎重に。"))
        elif hrv["delta_avg"] >= 10:
            points.append((1, "HRVは7日平均より高めで、回復寄りです。"))

    return sorted(points, key=lambda item: item[0], reverse=True)


def format_value(row: dict, value: float | None) -> str:
    unit = row["unit"]
    if unit == "minutes":
        return format_minutes(value)
    if unit == "count":
        return format_number(value)
    if unit == "kcal":
        return format_number(value, "kcal")
    if unit == "bpm":
        return format_number(value, "bpm")
    if unit == "kg":
        return format_number(value, "kg", 1)
    if unit == "percent":
        return format_number(value, "%", 1)
    if unit == "ms":
        return format_number(value, "ms")
    if unit == "rate":
        return format_number(value, "/min", 1)
    return format_number(value)


def format_delta_for_row(row: dict, value: float | None) -> str:
    unit = row["unit"]
    if unit == "minutes":
        return format_delta(value, "m")
    if unit == "count":
        return format_delta(value)
    if unit == "kcal":
        return format_delta(value, "kcal")
    if unit == "bpm":
        return format_delta(value, "bpm")
    if unit == "kg":
        return format_delta(value, "kg", decimals=1)
    if unit == "percent":
        return format_delta(value, "pt", decimals=1)
    if unit == "ms":
        return format_delta(value, "ms")
    if unit == "rate":
        return format_delta(value, "/min", decimals=1)
    return format_delta(value)


def build_conclusion(rows: list[dict]) -> list[str]:
    points = score_rows(rows)
    warnings = [text for severity, text in points if severity >= 2]
    positives = [text for severity, text in points if severity == 1]
    if not warnings:
        lines = ["大きな問題サインはありません。今日は通常運転でよさそうです。"]
        if positives:
            lines.append(positives[0])
        lines.append("体重系は日々の上下より、7日平均の流れを中心に見ます。")
        return lines[:3]
    lines = warnings[:2]
    if positives:
        lines.append(positives[0])
    else:
        lines.append("今日は無理に強度を上げず、睡眠・歩数・回復のどれか1つを整える日にします。")
    return lines[:3]


def build_focus(rows: list[dict]) -> list[str]:
    priority = [
        "sleepMinutes",
        "restingHeartRate",
        "hrv",
        "steps",
        "activeCalories",
        "exerciseMinutes",
        "weight",
    ]
    by_key = {row["key"]: row for row in rows}
    focus = []
    for key in priority:
        row = by_key[key]
        if row["today"] is None:
            continue
        focus.append(
            "{label}: {today}（前日比 {delta_day}、7日平均比 {delta_avg}）".format(
                label=row["label"],
                today=format_value(row, row["today"]),
                delta_day=format_delta_for_row(row, row["delta_day"]),
                delta_avg=format_delta_for_row(row, row["delta_avg"]),
            )
        )
        if len(focus) >= 3:
            break
    return focus


def build_actions(rows: list[dict]) -> list[str]:
    by_key = {row["key"]: row for row in rows}
    actions = []
    sleep = by_key["sleepMinutes"]
    resting = by_key["restingHeartRate"]
    steps = by_key["steps"]
    if sleep["today"] is not None and sleep["today"] < 360:
        actions.append("今日はトレーニング強度を少し抑え、就寝時刻を優先。")
    if resting["delta_avg"] is not None and resting["delta_avg"] >= 5:
        actions.append("カフェイン・夜更かし・高強度運動を控えめに。")
    if steps["today"] is not None and steps["avg7"] is not None and steps["today"] < steps["avg7"] * 0.8:
        actions.append("昼か夕方に短い散歩を入れて活動量を補う。")
    if not actions:
        actions.append("特別な制限は不要。普段どおりでOK。")
    return actions[:3]


def build_monitor_rows(coaching: dict, rows: list[dict]) -> list[str]:
    by_key = {row["key"]: row for row in rows}
    labels = {
        "above": "通常より高い",
        "below": "通常より低い",
        "usual": "通常範囲",
        "insufficient": "較正中",
    }
    lines = []
    for key in ("hrv", "restingHeartRate", "respiratoryRate", "oxygenAvg"):
        item = coaching["monitor"][key]
        row = by_key[key]
        baseline = item.get("average")
        baseline_text = format_value(row, baseline)
        if baseline is not None:
            baseline_text += f" ({item.get('days', 0)}日)"
        lines.append(
            f"| {item['label']} | {format_value(row, item.get('value'))} | "
            f"{baseline_text} | {labels.get(item.get('status'), '-')} |"
        )
    return lines


def build_report(latest: LatestExport) -> tuple[str, Path]:
    export = latest.payload["export"]
    metrics, by_type = aggregate(export)
    target = choose_target_day(export, metrics)
    rows = build_rows(metrics, target)
    coaching = build_coaching_summary(metrics, target)
    conclusion = build_conclusion(rows)
    focus = build_focus(rows)
    actions = build_actions(rows)
    counts = export.get("counts", {})

    report_date = parse_instant(latest.exported_at).astimezone(JST).date()
    report_path = REPORTS_DIR / f"health-report-{report_date:%Y%m%d}.md"

    score_text = lambda value: "-" if value is None else f"{value}/100"
    target_load_text = f"{coaching['targetLoad'][0]}〜{coaching['targetLoad'][1]}"
    sleep_bank = coaching["sleepBankMinutes"]
    sleep_bank_text = "-"
    if sleep_bank is not None:
        sleep_bank_text = (
            f"+{format_minutes(sleep_bank)}の余裕"
            if sleep_bank >= 0
            else f"{format_minutes(abs(sleep_bank))}の睡眠負債"
        )

    reasons = [*coaching["warnings"], *coaching["positives"]]
    if not reasons:
        reasons = ["現在取得できる指標は、おおむね個人の通常範囲内です。"]

    lines = [
        f"# 体調管理レポート - {report_date:%Y-%m-%d}",
        "",
        "## 今日の結論",
        f"- {coaching['headline']}",
        *[f"- {line}" for line in conclusion if line != coaching["headline"]][:2],
        "",
        "## コンディション・サマリー",
        "",
        "| 回復度 | 睡眠 | 活動負荷 | 今日の負荷目安 | 判定信頼度 |",
        "|---:|---:|---:|---:|---|",
        f"| {score_text(coaching['recoveryScore'])} | {score_text(coaching['sleep']['score'])} | {score_text(coaching['activityLoad']['score'])} | {target_load_text} | {coaching['confidence']} |",
        "",
        "> スコアはBevelの独自値の複製ではなく、取得済みデータと最大28日の個人基準から算出するこのプロジェクトの参考値です。",
        "",
        "## 判断理由",
        *[f"- {line}" for line in reasons[:5]],
        "",
        "## 注目ポイント",
        *[f"- {line}" for line in focus],
        "",
        "## 主要指標",
        "",
        "| 指標 | 対象日 | 前日比 | 7日平均比 | 7日平均 | メモ |",
        "|---|---:|---:|---:|---:|---|",
    ]

    for row in rows:
        if row["today"] is None and row["avg7"] is None:
            continue
        lines.append(
            "| {label} | {today} | {delta_day} | {delta_avg} | {avg7} | {note} |".format(
                label=row["label"],
                today=format_value(row, row["today"]),
                delta_day=format_delta_for_row(row, row["delta_day"]),
                delta_avg=format_delta_for_row(row, row["delta_avg"]),
                avg7=format_value(row, row["avg7"]),
                note=row["note"],
            )
        )

    missing = [
        COUNT_LABELS.get(key, key)
        for key, value in counts.items()
        if key in {"HeartRateVariabilityRmssdRecord", "RespiratoryRateRecord", "LeanBodyMassRecord"}
        and value == 0
    ]
    if not missing:
        missing_text = "主要な未取得項目はありません。"
    else:
        missing_text = "未取得: " + "、".join(missing)

    lines.extend(
        [
            "",
            "## 今日のアクション",
            *[f"- {line}" for line in coaching["actions"]],
            "",
            "## 今夜の睡眠プラン",
            f"- 推奨睡眠時間: {format_minutes(coaching['tonightSleepNeedMinutes'])}",
            f"- 直近7日の睡眠バンク: {sleep_bank_text}",
            "",
            "## ヘルスモニター",
            "",
            "| 指標 | 当日 | 個人基準 | 判定 |",
            "|---|---:|---:|---|",
            *build_monitor_rows(coaching, rows),
            "",
            "## 収集状況",
            "",
            f"- 対象期間: {parse_instant(export['rangeStart']).astimezone(JST):%Y-%m-%d %H:%M} から {parse_instant(export['rangeEnd']).astimezone(JST):%Y-%m-%d %H:%M} JST",
            f"- レポート対象日: {target:%Y-%m-%d}",
            f"- レコード総数: {len(export.get('records', [])):,}",
            f"- {missing_text}",
            "",
            "| データ種別 | 件数 |",
            "|---|---:|",
        ]
    )
    for key, label in COUNT_LABELS.items():
        if key in counts:
            lines.append(f"| {label} | {counts[key]:,} |")

    lines.extend(
        [
            "",
            "## メタデータ",
            "",
            f"- export_hash: `{latest.export_hash}`",
            f"- exported_at: `{latest.exported_at}`",
            f"- received_at: `{latest.received_at}`",
            f"- device_id: `{latest.device_id}`",
            "",
            "> このレポートは日々の傾向確認用です。医療上の診断ではありません。",
        ]
    )
    return "\n".join(lines) + "\n", report_path


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--force", action="store_true", help="同じexportでもレポートを再生成します。")
    args = parser.parse_args()

    latest = load_latest_export()
    if latest is None:
        print("Cloudflare D1にHealth Connectデータがまだありません。")
        return 0

    if not args.force and report_exists_for(latest):
        print(f"最新exportは既にレポート化済みです: {latest.exported_at}")
        return 0

    markdown, report_path = build_report(latest)
    REPORTS_DIR.mkdir(parents=True, exist_ok=True)
    if report_path.exists() and not args.force:
        stem = report_path.stem
        report_path = report_path.with_name(f"{stem}-{latest.export_hash[:8]}.md")
    report_path.write_text(markdown, encoding="utf-8")
    save_state(latest, report_path)
    print(f"レポートを生成しました: {report_path}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
