import base64
import gzip
import json
import unittest
from datetime import date, datetime, timedelta
from pathlib import Path
import sys

sys.path.insert(0, str(Path(__file__).resolve().parent))
import build_health_site as site


class BuildHealthSiteTests(unittest.TestCase):
    def test_infers_ringconn_walk_from_dense_step_interval(self):
        records = [
            {
                "type": "StepsRecord",
                "sourcePackage": site.report.RINGCONN_PACKAGE,
                "startTime": "2026-06-02T01:00:00Z",
                "endTime": "2026-06-02T01:10:00Z",
                "count": 850,
            },
            {
                "type": "StepsRecord",
                "sourcePackage": site.report.RINGCONN_PACKAGE,
                "startTime": "2026-06-02T03:00:00Z",
                "endTime": "2026-06-02T03:10:00Z",
                "count": 90,
            },
        ]

        inferred = site.report.infer_walking_sessions(records)

        self.assertEqual(len(inferred), 1)
        self.assertEqual(inferred[0]["date"], date(2026, 6, 2))
        self.assertEqual(inferred[0]["minutes"], 10)
        self.assertEqual(inferred[0]["steps"], 850)
        self.assertEqual(inferred[0]["cadence"], 85)
        self.assertTrue(inferred[0]["inferred"])
        metrics, _ = site.report.aggregate({"records": records})
        self.assertEqual(metrics[date(2026, 6, 2)]["walkingMinutes"], 10)
        self.assertEqual(metrics[date(2026, 6, 2)]["inferredWalkingSteps"], 850)
        walking_row = next(
            row
            for row in site.report.build_rows(metrics, date(2026, 6, 2))
            if row["key"] == "walkingMinutes"
        )
        self.assertEqual(walking_row["today"], 10)

    def test_does_not_infer_walk_overlapping_explicit_exercise(self):
        records = [
            {
                "type": "StepsRecord",
                "sourcePackage": site.report.RINGCONN_PACKAGE,
                "startTime": "2026-06-02T01:00:00Z",
                "endTime": "2026-06-02T01:10:00Z",
                "count": 850,
            },
            {
                "type": "ExerciseSessionRecord",
                "sourcePackage": site.report.RINGCONN_PACKAGE,
                "startTime": "2026-06-02T00:58:00Z",
                "endTime": "2026-06-02T01:12:00Z",
                "exerciseType": site.WALKING_EXERCISE_TYPE,
            },
        ]

        self.assertEqual(site.report.infer_walking_sessions(records), [])

    def test_build_activities_includes_inferred_ringconn_walk(self):
        export = {
            "rangeStart": "2026-06-01T00:00:00Z",
            "rangeEnd": "2026-06-04T00:00:00Z",
            "records": [
                {
                    "type": "StepsRecord",
                    "sourcePackage": site.report.RINGCONN_PACKAGE,
                    "startTime": "2026-06-02T01:00:00Z",
                    "endTime": "2026-06-02T01:12:00Z",
                    "count": 960,
                }
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

        self.assertEqual(len(activities), 1)
        self.assertEqual(activities[0]["date"], "2026-06-02")
        self.assertEqual(activities[0]["walkingMinutes"], 12)
        self.assertTrue(activities[0]["walks"][0]["inferred"])

    def test_aggregate_calculates_sleep_quality_inputs(self):
        metrics, _ = site.report.aggregate(
            {
                "records": [
                    {
                        "type": "SleepSessionRecord",
                        "sourcePackage": site.report.RINGCONN_PACKAGE,
                        "startTime": "2026-06-01T14:00:00Z",
                        "endTime": "2026-06-01T22:00:00Z",
                        "stages": [
                            {"startTime": "2026-06-01T14:00:00Z", "endTime": "2026-06-01T14:30:00Z", "stage": 1},
                            {"startTime": "2026-06-01T14:30:00Z", "endTime": "2026-06-01T18:30:00Z", "stage": 4},
                            {"startTime": "2026-06-01T18:30:00Z", "endTime": "2026-06-01T20:00:00Z", "stage": 5},
                            {"startTime": "2026-06-01T20:00:00Z", "endTime": "2026-06-01T22:00:00Z", "stage": 6},
                        ],
                    }
                ]
            }
        )

        sleep_day = date(2026, 6, 2)
        self.assertEqual(metrics[sleep_day]["sleepMinutes"], 450)
        self.assertEqual(metrics[sleep_day]["sleepInBedMinutes"], 480)
        self.assertAlmostEqual(metrics[sleep_day]["sleepEfficiency"], 93.75)
        self.assertEqual(metrics[sleep_day]["deepSleepMinutes"], 90)
        self.assertEqual(metrics[sleep_day]["remSleepMinutes"], 120)

    def test_phone_steps_are_never_used_even_as_fallback(self):
        ringconn_day = date(2026, 6, 2)
        phone_only_day = date(2026, 6, 3)
        metrics, by_type = site.report.aggregate(
            {
                "records": [
                    {
                        "type": "StepsRecord",
                        "sourcePackage": "android",
                        "startTime": "2026-06-02T01:00:00Z",
                        "endTime": "2026-06-02T01:10:00Z",
                        "count": 10000,
                    },
                    {
                        "type": "StepsRecord",
                        "sourcePackage": site.report.RINGCONN_PACKAGE,
                        "startTime": "2026-06-02T01:00:00Z",
                        "endTime": "2026-06-02T01:10:00Z",
                        "count": 500,
                    },
                    {
                        "type": "StepsRecord",
                        "sourcePackage": "android",
                        "startTime": "2026-06-03T01:00:00Z",
                        "endTime": "2026-06-03T01:10:00Z",
                        "count": 12000,
                    },
                ]
            }
        )

        self.assertEqual(metrics[ringconn_day]["steps"], 500)
        self.assertNotIn("steps", metrics.get(phone_only_day, {}))
        self.assertEqual(len(by_type["StepsRecord"]), 1)

    def test_phone_sleep_is_excluded_from_analysis(self):
        metrics, by_type = site.report.aggregate(
            {
                "records": [
                    {
                        "type": "SleepSessionRecord",
                        "sourcePackage": "android",
                        "startTime": "2026-06-01T14:00:00Z",
                        "endTime": "2026-06-01T22:00:00Z",
                    },
                    {
                        "type": "SleepSessionRecord",
                        "sourcePackage": site.report.RINGCONN_PACKAGE,
                        "startTime": "2026-06-02T14:00:00Z",
                        "endTime": "2026-06-02T21:00:00Z",
                    },
                ]
            }
        )

        self.assertNotIn("sleepMinutes", metrics.get(date(2026, 6, 2), {}))
        self.assertEqual(metrics[date(2026, 6, 3)]["sleepMinutes"], 420)
        self.assertEqual(len(by_type["SleepSessionRecord"]), 1)

    def test_body_measurements_only_use_omron(self):
        target = date(2026, 6, 2)
        metrics, _ = site.report.aggregate(
            {
                "records": [
                    {
                        "type": "WeightRecord",
                        "sourcePackage": "android",
                        "time": "2026-06-02T01:00:00Z",
                        "kilograms": 99,
                    },
                    {
                        "type": "WeightRecord",
                        "sourcePackage": site.report.OMRON_PACKAGE,
                        "time": "2026-06-02T02:00:00Z",
                        "kilograms": 70,
                    },
                    {
                        "type": "BodyFatRecord",
                        "sourcePackage": site.report.OMRON_PACKAGE,
                        "time": "2026-06-02T02:00:00Z",
                        "percentage": 18,
                    },
                ]
            }
        )

        self.assertEqual(metrics[target]["weight"], 70)
        self.assertEqual(metrics[target]["bodyFat"], 18)

    def test_ringconn_basal_metabolic_rate_is_allowed(self):
        self.assertTrue(
            site.report.is_allowed_analysis_record(
                {
                    "type": "BasalMetabolicRateRecord",
                    "sourcePackage": site.report.RINGCONN_PACKAGE,
                }
            )
        )
        self.assertTrue(
            site.report.is_allowed_analysis_record(
                {
                    "type": "BasalMetabolicRateRecord",
                    "sourcePackage": site.report.OMRON_PACKAGE,
                }
            )
        )
        self.assertFalse(
            site.report.is_allowed_analysis_record(
                {
                    "type": "BasalMetabolicRateRecord",
                    "sourcePackage": "android",
                }
            )
        )

    def test_phone_exercise_does_not_block_ringconn_walk_inference(self):
        records = [
            {
                "type": "StepsRecord",
                "sourcePackage": site.report.RINGCONN_PACKAGE,
                "startTime": "2026-06-02T01:00:00Z",
                "endTime": "2026-06-02T01:10:00Z",
                "count": 850,
            },
            {
                "type": "ExerciseSessionRecord",
                "sourcePackage": "android",
                "startTime": "2026-06-02T00:58:00Z",
                "endTime": "2026-06-02T01:12:00Z",
                "exerciseType": site.WALKING_EXERCISE_TYPE,
            },
        ]

        self.assertEqual(len(site.report.infer_walking_sessions(records)), 1)

    def test_coaching_summary_combines_recovery_signals_into_actions(self):
        target = date(2026, 6, 30)
        metrics = {}
        for offset in range(29):
            day = target - timedelta(days=offset)
            metrics[day] = {
                "sleepMinutes": 450 if offset else 330,
                "sleepInBedMinutes": 480 if offset else 420,
                "sleepEfficiency": 93.75 if offset else 78.6,
                "deepSleepMinutes": 80 if offset else 35,
                "remSleepMinutes": 100 if offset else 55,
                "awakeMinutes": 20 if offset else 90,
                "steps": 7000,
                "activeCalories": 350,
                "exerciseMinutes": 35,
                "restingHeartRate": 50 if offset else 57,
                "hrv": 45 if offset else 30,
                "respiratoryRate": 14.5,
                "oxygenAvg": 98,
            }

        summary = site.report.build_coaching_summary(metrics, target)

        self.assertLess(summary["recoveryScore"], 50)
        self.assertEqual(summary["recoveryBand"], "low")
        self.assertIn("HRVが通常より低い", summary["warnings"])
        self.assertIn("安静時心拍が通常より高い", summary["warnings"])
        self.assertTrue(any("20〜30分" in action for action in summary["actions"]))

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
                    "sourcePackage": site.report.RINGCONN_PACKAGE,
                    "startTime": "2026-06-03T01:00:00Z",
                    "endTime": "2026-06-03T01:35:00Z",
                    "exerciseType": 79,
                },
                {
                    "type": "ExerciseSessionRecord",
                    "id": "phone-walk",
                    "sourcePackage": "android",
                    "startTime": "2026-06-03T02:00:00Z",
                    "endTime": "2026-06-03T02:50:00Z",
                    "exerciseType": 79,
                },
                {
                    "type": "ExerciseSessionRecord",
                    "id": "phone-strength",
                    "sourcePackage": "android",
                    "startTime": "2026-06-03T03:00:00Z",
                    "endTime": "2026-06-03T04:00:00Z",
                    "exerciseType": 70,
                    "title": "Bench Press",
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
                    "sourcePackage": site.report.RINGCONN_PACKAGE,
                    "startTime": "2026-06-03T03:00:00Z",
                    "endTime": "2026-06-03T03:10:00Z",
                    "count": 8000,
                },
                {
                    "type": "StepsRecord",
                    "sourcePackage": site.report.RINGCONN_PACKAGE,
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
