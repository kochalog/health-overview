import base64
import gzip
import json
import unittest
from datetime import datetime
from pathlib import Path
import sys

sys.path.insert(0, str(Path(__file__).resolve().parent))
import build_health_site as site


class BuildHealthSiteTests(unittest.TestCase):
    def test_decode_payload_supports_compressed_rows(self):
        payload = {"deviceId": "test-device", "export": {"records": []}}
        compressed = base64.b64encode(
            gzip.compress(json.dumps(payload).encode("utf-8"))
        ).decode("ascii")

        self.assertEqual(
            site.report.decode_payload(
                {
                    "payload_json": json.dumps(
                        {
                            "payloadEncoding": "gzip+base64",
                            "payloadData": compressed,
                        }
                    ),
                }
            ),
            payload,
        )

    def test_workout_details_extracts_menu_and_body_parts(self):
        menus, body_parts = site.workout_details(
            {
                "title": "Push day",
                "notes": "Bench Press (Barbell)\nIncline Bench Press\nLateral Raise",
                "segments": [],
            }
        )

        self.assertEqual(
            menus,
            ["ベンチプレス", "インクラインベンチプレス", "ラテラルレイズ"],
        )
        self.assertEqual(body_parts, ["胸", "肩"])

    def test_build_activities_separates_strength_and_walking(self):
        export = {
            "rangeStart": "2026-06-01T00:00:00Z",
            "rangeEnd": "2026-06-04T00:00:00Z",
            "records": [
                {
                    "type": "ExerciseSessionRecord",
                    "id": "strength-1",
                    "sourcePackage": "com.hevy",
                    "startTime": "2026-06-02T09:00:00Z",
                    "endTime": "2026-06-02T10:00:00Z",
                    "exerciseType": 70,
                    "title": "Pull day",
                    "notes": "Seated Cable Row\nChin Up",
                },
                {
                    "type": "ExerciseSessionRecord",
                    "id": "walk-1",
                    "sourcePackage": "com.example.walk",
                    "startTime": "2026-06-03T01:00:00Z",
                    "endTime": "2026-06-03T01:35:00Z",
                    "exerciseType": 79,
                },
            ],
        }
        activities = site.build_activities(
            [
                {
                    "exportedAt": "2026-06-04T00:00:00Z",
                    "receivedAt": "2026-06-04T00:00:01Z",
                    "export": export,
                }
            ]
        )

        self.assertEqual(len(activities), 2)
        self.assertEqual(activities[0]["strengthMinutes"], 60)
        self.assertEqual(activities[0]["workouts"][0]["bodyParts"], ["背中"])
        self.assertEqual(activities[1]["walkingMinutes"], 35)
        self.assertEqual(activities[1]["workouts"], [])

    def test_build_days_uses_latest_completed_day_even_after_noon(self):
        export = {
            "rangeStart": "2026-06-03T00:00:00Z",
            "rangeEnd": "2026-06-04T04:00:00Z",
            "records": [
                {
                    "type": "StepsRecord",
                    "sourcePackage": "com.example",
                    "startTime": "2026-06-03T03:00:00Z",
                    "endTime": "2026-06-03T03:10:00Z",
                    "count": 8000,
                },
                {
                    "type": "StepsRecord",
                    "sourcePackage": "com.example",
                    "startTime": "2026-06-04T03:00:00Z",
                    "endTime": "2026-06-04T03:10:00Z",
                    "count": 1200,
                },
            ],
        }

        days = site.build_days(
            [
                {
                    "exportedAt": "2026-06-04T04:00:00Z",
                    "receivedAt": "2026-06-04T04:00:01Z",
                    "export": export,
                }
            ]
        )

        self.assertEqual([day["date"] for day in days], ["2026-06-03"])
        self.assertEqual(days[0]["steps"], 8000)

    def test_fixed_update_time_uses_8am_jst(self):
        update_time = site.fixed_update_time(
            datetime(2026, 6, 4, 15, 30, tzinfo=site.report.JST)
        )

        self.assertEqual(update_time.isoformat(), "2026-06-04T08:00:00+09:00")

    def test_other_workout_with_strength_menu_is_treated_as_strength(self):
        self.assertTrue(
            site.is_strength_record(
                {
                    "exerciseType": 0,
                    "title": "Hevy workout",
                    "notes": "T-Bar Row\nLat Pulldown",
                }
            )
        )

    def test_merge_workouts_combines_hevy_exercise_fragments(self):
        base = {
            "sourcePackage": "com.hevy",
            "title": "午後のトレーニング💪",
            "bodyParts": ["胸"],
        }
        merged = site.merge_workouts(
            [
                {
                    **base,
                    "id": "1",
                    "startTime": "2026-06-01T06:50:00Z",
                    "endTime": "2026-06-01T07:00:00Z",
                    "minutes": 10,
                    "menus": ["ベンチプレス"],
                },
                {
                    **base,
                    "id": "2",
                    "startTime": "2026-06-01T07:05:00Z",
                    "endTime": "2026-06-01T07:15:00Z",
                    "minutes": 10,
                    "menus": ["チェストフライ"],
                },
            ]
        )

        self.assertEqual(len(merged), 1)
        self.assertEqual(merged[0]["minutes"], 20)
        self.assertEqual(merged[0]["menus"], ["ベンチプレス", "チェストフライ"])


if __name__ == "__main__":
    unittest.main()
