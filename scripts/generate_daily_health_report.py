#!/usr/bin/env python3
import argparse
import base64
import gzip
import json
import os
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
SLEEP_STAGE_AWAKE = 1
SLEEP_STAGE_OUT_OF_BED = 3

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
                metrics[start_day]["exerciseSessions"] += 1
                metrics[start_day]["exerciseMinutes"] += max((end - start).total_seconds() / 60, 0)
            elif record_type == "HeartRateRecord":
                for sample in record.get("samples", []):
                    bpm = sample.get("beatsPerMinute")
                    sample_time = sample.get("time")
                    if isinstance(bpm, (int, float)) and sample_time:
                        heart_samples[local_date(sample_time)].append(float(bpm))
        elif record_type == "SleepSessionRecord":
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

    for day, source_values in steps_by_source.items():
        if source_values.get(RINGCONN_PACKAGE):
            metrics[day]["steps"] = source_values[RINGCONN_PACKAGE]
        else:
            metrics[day]["steps"] = sum(source_values.values())

    for day, intervals in sleep_intervals.items():
        metrics[day]["sleepMinutes"] = merge_minutes(remove_nested_intervals(intervals))
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
        ("歩数", "steps", "count", "日中の活動量", True),
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


def build_report(latest: LatestExport) -> tuple[str, Path]:
    export = latest.payload["export"]
    metrics, by_type = aggregate(export)
    target = choose_target_day(export, metrics)
    rows = build_rows(metrics, target)
    conclusion = build_conclusion(rows)
    focus = build_focus(rows)
    actions = build_actions(rows)
    counts = export.get("counts", {})

    report_date = parse_instant(latest.exported_at).astimezone(JST).date()
    report_path = REPORTS_DIR / f"health-report-{report_date:%Y%m%d}.md"

    lines = [
        f"# 体調管理レポート - {report_date:%Y-%m-%d}",
        "",
        "## 今日の結論",
        *[f"- {line}" for line in conclusion],
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
            *[f"- {line}" for line in actions],
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
