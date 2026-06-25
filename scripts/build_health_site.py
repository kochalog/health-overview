#!/usr/bin/env python3
import json
import re
import sys
from collections import defaultdict
from datetime import date, datetime, timedelta
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
SITE_DIR = ROOT / "site"
DATA_PATH = SITE_DIR / "data.js"

sys.path.insert(0, str(ROOT / "scripts"))
import generate_daily_health_report as report  # noqa: E402


METRICS = [
    {
        "key": "weight",
        "label": "体重",
        "unit": "kg",
        "decimals": 1,
        "color": "#2f7d6d",
        "accent": "#dff2ec",
    },
    {
        "key": "bodyFat",
        "label": "体脂肪率",
        "unit": "%",
        "decimals": 1,
        "color": "#94612d",
        "accent": "#f6ead8",
    },
    {
        "key": "activeCalories",
        "label": "活動カロリー",
        "unit": "kcal",
        "decimals": 0,
        "color": "#c65f45",
        "accent": "#f8e4dd",
    },
    {
        "key": "heartRateAvg",
        "label": "平均心拍",
        "unit": "bpm",
        "decimals": 0,
        "color": "#b54661",
        "accent": "#f7dfe6",
    },
    {
        "key": "sleepMinutes",
        "label": "睡眠",
        "unit": "h",
        "decimals": 1,
        "color": "#3f64a8",
        "accent": "#e2e9f8",
    },
    {
        "key": "steps",
        "label": "歩数",
        "unit": "歩",
        "decimals": 0,
        "color": "#5a6f2d",
        "accent": "#e8efd9",
    },
]

DETAIL_METRICS = [
    {"key": "sleepMinutes", "label": "睡眠", "unit": "h", "decimals": 1},
    {"key": "steps", "label": "歩数", "unit": "歩", "decimals": 0},
    {"key": "activeCalories", "label": "活動カロリー", "unit": "kcal", "decimals": 0},
    {"key": "exerciseMinutes", "label": "運動時間", "unit": "h", "decimals": 1},
    {"key": "heartRateAvg", "label": "平均心拍", "unit": "bpm", "decimals": 0},
    {"key": "restingHeartRate", "label": "安静時心拍", "unit": "bpm", "decimals": 0},
    {"key": "hrv", "label": "HRV", "unit": "ms", "decimals": 0},
    {"key": "respiratoryRate", "label": "呼吸", "unit": "/min", "decimals": 1},
    {"key": "oxygenAvg", "label": "血中酸素", "unit": "%", "decimals": 1},
    {"key": "weight", "label": "体重", "unit": "kg", "decimals": 1},
    {"key": "bodyFat", "label": "体脂肪率", "unit": "%", "decimals": 1},
]

ALL_METRICS = {item["key"]: item for item in [*METRICS, *DETAIL_METRICS]}.values()

STRENGTH_EXERCISE_TYPES = {70, 81}
WALKING_EXERCISE_TYPE = 79

MENU_PATTERNS = [
    (r"(?:incline bench press|インクライン(?:・|ベンチ)?プレス)", "インクラインベンチプレス", "胸"),
    (r"(?:bench press|ベンチプレス)", "ベンチプレス", "胸"),
    (r"(?:decline (?:dumbbell )?fly|ダンベルデクラインフライ|デクライン.*フライ)", "ダンベルデクラインフライ", "胸"),
    (r"(?:chest (?:fly|press)|pec deck|チェスト(?:フライ|プレス)|ペックデック)", "チェストフライ", "胸"),
    (r"(?:cable crossover|チューブクロスオーバー|ケーブルクロスオーバー)", "クロスオーバー", "胸"),
    (r"(?:dips?|ディップス)", "ディップス", "胸"),
    (r"(?:push[ -]?up|プッシュアップ|腕立て)", "プッシュアップ", "胸"),
    (r"(?:overhead press|shoulder press|オーバーヘッドプレス|ショルダープレス)", "オーバーヘッドプレス", "肩"),
    (r"(?:lateral raise|ラテラル?レイズ|サイドレイズ)", "ラテラルレイズ", "肩"),
    (r"(?:front raise|フロントレイズ)", "フロントレイズ", "肩"),
    (r"(?:face pull|フェイスプル)", "フェイスプル", "肩"),
    (r"(?:t[ -]?bar row|tバーロウ|ティーバーロウ)", "Tバーロウ", "背中"),
    (r"(?:seated cable row|シーテッドケーブルロウ)", "シーテッドケーブルロウ", "背中"),
    (r"(?:lat pull[ -]?down|ラットプルダウン)", "ラットプルダウン", "背中"),
    (r"(?:chin[ -]?up|チンアップ)", "チンアップ", "背中"),
    (r"(?:pull[ -]?up|プルアップ|懸垂)", "プルアップ", "背中"),
    (r"(?:deadlift|デッドリフト)", "デッドリフト", "背中"),
    (r"(?:good morning|グッドモーニング)", "グッドモーニング", "脚"),
    (r"(?:hack squat|ハックスクワット)", "ハックスクワット", "脚"),
    (r"(?:squat|スクワット)", "スクワット", "脚"),
    (r"(?:leg press|レッグプレス)", "レッグプレス", "脚"),
    (r"(?:leg extension|レッグエクステンション)", "レッグエクステンション", "脚"),
    (r"(?:leg curl|レッグカール)", "レッグカール", "脚"),
    (r"(?:lunge|ランジ)", "ランジ", "脚"),
    (r"(?:hip thrust|ヒップスラスト)", "ヒップスラスト", "脚"),
    (r"(?:calf (?:raise|press)|カーフ(?:レイズ|　?プレス))", "カーフレイズ", "脚"),
    (r"(?:biceps? curl|dumbbell curl|アームカール|ダンベルカール)", "アームカール", "腕"),
    (r"(?:triceps?|push[ -]?down|トライセプス|プッシュダウン)", "トライセプス", "腕"),
    (r"(?:plank|プランク)", "プランク", "体幹"),
    (r"(?:crunch|クランチ)", "クランチ", "体幹"),
]

SEGMENT_MENUS = {
    1: ("アームカール", "腕"),
    4: ("オーバーヘッドプレス", "肩"),
    5: ("ベンチプレス", "胸"),
    10: ("クランチ", "体幹"),
    11: ("デッドリフト", "背中"),
    16: ("ラテラルレイズ", "肩"),
    17: ("ダンベルロウ", "背中"),
    25: ("ヒップスラスト", "脚"),
    30: ("ラテラルレイズ", "肩"),
    31: ("ラットプルダウン", "背中"),
    32: ("レッグカール", "脚"),
    33: ("レッグエクステンション", "脚"),
    34: ("レッグプレス", "脚"),
    36: ("ランジ", "脚"),
    41: ("プランク", "体幹"),
    42: ("プルアップ", "背中"),
    48: ("ショルダープレス", "肩"),
    51: ("スクワット", "脚"),
}


def load_exports() -> list[dict]:
    rows = report.run_wrangler_query(
        "SELECT export_hash, exported_at, received_at, payload_json "
        "FROM exports WHERE device_id != 'codex-smoke-test' "
        "ORDER BY received_at ASC"
    )
    exports = []
    for row in rows:
        payload = report.decode_payload(row)
        exports.append(
            {
                "exportHash": row["export_hash"],
                "exportedAt": row["exported_at"],
                "receivedAt": row["received_at"],
                "export": payload["export"],
            }
        )
    return exports


def value_for_site(key: str, value: float | None) -> float | None:
    if value is None:
        return None
    if key in {"sleepMinutes", "exerciseMinutes"}:
        return round(value / 60, 2)
    return round(value, 2)


def completed_day_cutoff(export: dict) -> date:
    range_end = report.parse_instant(export["rangeEnd"]).astimezone(report.JST)
    return range_end.date() - timedelta(days=1)


def fixed_update_time(now: datetime | None = None) -> datetime:
    base = now.astimezone(report.JST) if now else datetime.now(report.JST)
    return base.replace(hour=8, minute=0, second=0, microsecond=0)


def build_days(exports: list[dict]) -> list[dict]:
    by_day = {}
    for item in exports:
        metrics, _ = report.aggregate(item["export"])
        cutoff = completed_day_cutoff(item["export"])
        for day, values in metrics.items():
            if day > cutoff:
                continue
            summary = by_day.setdefault(
                day.isoformat(),
                {
                    "date": day.isoformat(),
                    "sourceExportedAt": item["exportedAt"],
                    "sourceReceivedAt": item["receivedAt"],
                },
            )
            if item["receivedAt"] >= summary["sourceReceivedAt"]:
                summary["sourceExportedAt"] = item["exportedAt"]
                summary["sourceReceivedAt"] = item["receivedAt"]
                for metric in ALL_METRICS:
                    value = report.metric_value(metrics, day, metric["key"])
                    summary[metric["key"]] = value_for_site(metric["key"], value)
    return [by_day[key] for key in sorted(by_day)]


def moving_average(days: list[dict], index: int, key: str, window: int = 7) -> float | None:
    values = []
    for item in days[max(0, index - window) : index]:
        value = item.get(key)
        if isinstance(value, (int, float)):
            values.append(float(value))
    if not values:
        return None
    return round(sum(values) / len(values), 2)


def enrich(days: list[dict]) -> list[dict]:
    enriched = []
    for index, item in enumerate(days):
        next_item = dict(item)
        comparisons = {}
        for metric in ALL_METRICS:
            key = metric["key"]
            today = item.get(key)
            previous = days[index - 1].get(key) if index > 0 else None
            avg7 = moving_average(days, index, key)
            comparisons[key] = {
                "previousDelta": None if today is None or previous is None else round(today - previous, 2),
                "avg7": avg7,
                "avg7Delta": None if today is None or avg7 is None else round(today - avg7, 2),
            }
        next_item["comparisons"] = comparisons
        enriched.append(next_item)
    return enriched


def workout_details(record: dict) -> tuple[list[str], list[str]]:
    text = "\n".join(
        value for value in (record.get("title"), record.get("notes")) if isinstance(value, str)
    )
    menus = []
    body_parts = []
    for line in re.split(r"[\n\r;]+", text):
        for pattern, menu, body_part in MENU_PATTERNS:
            if re.search(pattern, line, re.IGNORECASE):
                if menu not in menus:
                    menus.append(menu)
                if body_part not in body_parts:
                    body_parts.append(body_part)
                break

    for segment in record.get("segments") or []:
        detail = SEGMENT_MENUS.get(segment.get("segmentType"))
        if not detail:
            continue
        menu, body_part = detail
        if menu not in menus:
            menus.append(menu)
        if body_part not in body_parts:
            body_parts.append(body_part)

    title = (record.get("title") or "").strip()
    generic_titles = {"", "workout", "strength training", "weightlifting", "筋力トレーニング", "ワークアウト"}
    if not menus and title.lower() not in generic_titles:
        menus.append(title)
    if not menus:
        menus.append("筋力トレーニング")
    if not body_parts:
        body_parts.append("全身")
    return menus, body_parts


def is_strength_record(record: dict) -> bool:
    if record.get("exerciseType") in STRENGTH_EXERCISE_TYPES:
        return True
    text = "\n".join(
        value for value in (record.get("title"), record.get("notes")) if isinstance(value, str)
    )
    if any(re.search(pattern, text, re.IGNORECASE) for pattern, _, _ in MENU_PATTERNS):
        return True
    return any(segment.get("segmentType") in SEGMENT_MENUS for segment in record.get("segments") or [])


def activity_session(record: dict) -> dict:
    start = report.parse_instant(record["startTime"])
    end = report.parse_instant(record["endTime"])
    minutes = max(round((end - start).total_seconds() / 60), 0)
    result = {
        "id": record.get("id"),
        "startTime": record["startTime"],
        "endTime": record["endTime"],
        "minutes": minutes,
        "sourcePackage": record.get("sourcePackage"),
    }
    if is_strength_record(record):
        menus, body_parts = workout_details(record)
        result.update(
            {
                "title": record.get("title") or "筋力トレーニング",
                "menus": menus,
                "bodyParts": body_parts,
            }
        )
    return result


def merge_workouts(workouts: list[dict]) -> list[dict]:
    merged = []
    for workout in sorted(workouts, key=lambda value: value["startTime"]):
        if merged:
            previous = merged[-1]
            gap_minutes = (
                report.parse_instant(workout["startTime"])
                - report.parse_instant(previous["endTime"])
            ).total_seconds() / 60
            same_workout = (
                workout.get("sourcePackage") == previous.get("sourcePackage")
                and workout.get("title") == previous.get("title")
                and 0 <= gap_minutes <= 30
            )
            if same_workout:
                previous["endTime"] = max(previous["endTime"], workout["endTime"])
                previous["minutes"] += workout["minutes"]
                for key in ("menus", "bodyParts"):
                    for value in workout.get(key) or []:
                        if value not in previous[key]:
                            previous[key].append(value)
                continue
        merged.append({**workout, "menus": list(workout.get("menus") or []), "bodyParts": list(workout.get("bodyParts") or [])})
    return merged


def build_activities(exports: list[dict]) -> list[dict]:
    by_day = {}
    for item in exports:
        export = item["export"]
        metrics, _ = report.aggregate(export)
        cutoff = completed_day_cutoff(export)
        range_start_raw = export.get("rangeStart")
        range_start = report.local_date(range_start_raw) if range_start_raw else cutoff - timedelta(days=30)

        sessions = defaultdict(lambda: {"workouts": [], "walks": []})
        for record in export.get("records", []):
            if record.get("type") != "ExerciseSessionRecord":
                continue
            start_raw = record.get("startTime")
            end_raw = record.get("endTime")
            if not start_raw or not end_raw:
                continue
            day = report.local_date(start_raw)
            if day > cutoff:
                continue
            exercise_type = record.get("exerciseType")
            if is_strength_record(record):
                sessions[day]["workouts"].append(activity_session(record))
            elif exercise_type == WALKING_EXERCISE_TYPE:
                sessions[day]["walks"].append(activity_session(record))

        cursor = range_start
        while cursor <= cutoff:
            key = cursor.isoformat()
            existing = by_day.get(key)
            if existing is None or item["receivedAt"] >= existing["sourceReceivedAt"]:
                day_sessions = sessions[cursor]
                workouts = merge_workouts(day_sessions["workouts"])
                walks = sorted(day_sessions["walks"], key=lambda value: value["startTime"])
                by_day[key] = {
                    "date": key,
                    "sourceReceivedAt": item["receivedAt"],
                    "strengthMinutes": sum(value["minutes"] for value in workouts),
                    "walkingMinutes": sum(value["minutes"] for value in walks),
                    "workouts": workouts,
                    "walks": walks,
                }
            cursor += timedelta(days=1)

    return [
        {key: value for key, value in item.items() if key != "sourceReceivedAt"}
        for _, item in sorted(by_day.items())
        if item["workouts"] or item["walks"]
    ]


def build_payload(exports: list[dict]) -> dict:
    days = enrich(build_days(exports))
    latest = days[-1] if days else None
    return {
        "generatedAt": fixed_update_time().isoformat(),
        "metrics": METRICS,
        "detailMetrics": DETAIL_METRICS,
        "latest": latest,
        "days": days,
        "activityDays": build_activities(exports),
        "exports": {
            "count": len(exports),
            "latestExportedAt": exports[-1]["exportedAt"] if exports else None,
            "latestReceivedAt": exports[-1]["receivedAt"] if exports else None,
        },
    }


def main() -> int:
    exports = load_exports()
    payload = build_payload(exports)
    SITE_DIR.mkdir(parents=True, exist_ok=True)
    DATA_PATH.write_text(
        "window.HEALTH_SITE_DATA = "
        + json.dumps(payload, ensure_ascii=False, indent=2)
        + ";\n",
        encoding="utf-8",
    )
    print(f"サイトデータを生成しました: {DATA_PATH}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
