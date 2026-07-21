window.HEALTH_SITE_DATA = {
  "generatedAt": "2026-07-21T08:00:00+09:00",
  "metrics": [
    {
      "key": "weight",
      "label": "体重",
      "unit": "kg",
      "decimals": 1,
      "color": "#2f7d6d",
      "accent": "#dff2ec"
    },
    {
      "key": "bodyFat",
      "label": "体脂肪率",
      "unit": "%",
      "decimals": 1,
      "color": "#94612d",
      "accent": "#f6ead8"
    },
    {
      "key": "activeCalories",
      "label": "活動カロリー",
      "unit": "kcal",
      "decimals": 0,
      "color": "#c65f45",
      "accent": "#f8e4dd"
    },
    {
      "key": "heartRateAvg",
      "label": "平均心拍",
      "unit": "bpm",
      "decimals": 0,
      "color": "#b54661",
      "accent": "#f7dfe6"
    },
    {
      "key": "sleepMinutes",
      "label": "睡眠",
      "unit": "h",
      "decimals": 1,
      "color": "#3f64a8",
      "accent": "#e2e9f8"
    },
    {
      "key": "steps",
      "label": "歩数",
      "unit": "歩",
      "decimals": 0,
      "color": "#5a6f2d",
      "accent": "#e8efd9"
    }
  ],
  "detailMetrics": [
    {
      "key": "sleepMinutes",
      "label": "睡眠",
      "unit": "h",
      "decimals": 1
    },
    {
      "key": "sleepEfficiency",
      "label": "睡眠効率",
      "unit": "%",
      "decimals": 1
    },
    {
      "key": "deepSleepMinutes",
      "label": "深い睡眠",
      "unit": "h",
      "decimals": 1
    },
    {
      "key": "remSleepMinutes",
      "label": "REM睡眠",
      "unit": "h",
      "decimals": 1
    },
    {
      "key": "steps",
      "label": "歩数",
      "unit": "歩",
      "decimals": 0
    },
    {
      "key": "walkingMinutes",
      "label": "ウォーキング",
      "unit": "h",
      "decimals": 1
    },
    {
      "key": "activeCalories",
      "label": "活動カロリー",
      "unit": "kcal",
      "decimals": 0
    },
    {
      "key": "exerciseMinutes",
      "label": "運動時間",
      "unit": "h",
      "decimals": 1
    },
    {
      "key": "heartRateAvg",
      "label": "平均心拍",
      "unit": "bpm",
      "decimals": 0
    },
    {
      "key": "restingHeartRate",
      "label": "安静時心拍",
      "unit": "bpm",
      "decimals": 0
    },
    {
      "key": "hrv",
      "label": "HRV",
      "unit": "ms",
      "decimals": 0
    },
    {
      "key": "respiratoryRate",
      "label": "呼吸",
      "unit": "/min",
      "decimals": 1
    },
    {
      "key": "oxygenAvg",
      "label": "血中酸素",
      "unit": "%",
      "decimals": 1
    },
    {
      "key": "weight",
      "label": "体重",
      "unit": "kg",
      "decimals": 1
    },
    {
      "key": "bodyFat",
      "label": "体脂肪率",
      "unit": "%",
      "decimals": 1
    }
  ],
  "latest": {
    "date": "2026-07-20",
    "sourceExportedAt": "2026-07-21T00:27:20.917614Z",
    "sourceReceivedAt": "2026-07-21T00:27:21.575Z",
    "coach": {
      "date": "2026-07-20",
      "recoveryScore": 88,
      "recoveryBand": "high",
      "sleep": {
        "score": 98,
        "durationMinutes": 570.0,
        "efficiency": 95.0,
        "deepMinutes": 130.0,
        "remMinutes": 165.0,
        "awakeMinutes": 45.0,
        "availableFactors": 4
      },
      "activityLoad": {
        "score": 42,
        "availableFactors": [
          "activeCalories",
          "steps"
        ]
      },
      "targetLoad": [
        60,
        80
      ],
      "sleepBankMinutes": 10,
      "tonightSleepNeedMinutes": 450,
      "headline": "回復状態は良好。普段通りか、少し強度を上げられる日です。",
      "warnings": [],
      "positives": [
        "睡眠スコア 98"
      ],
      "actions": [
        "余力があれば30分前後の散歩または中強度の運動で、活動負荷を目安範囲へ近づける。",
        "今夜の睡眠目安は7h30m。就寝前30分は光と刺激を抑える。"
      ],
      "monitor": {
        "hrv": {
          "average": null,
          "deviation": null,
          "days": 0,
          "value": null,
          "status": "insufficient",
          "delta": null,
          "label": "HRV"
        },
        "restingHeartRate": {
          "average": 49.39473684210526,
          "deviation": 4.06713059128145,
          "days": 19,
          "value": null,
          "status": "insufficient",
          "delta": null,
          "label": "安静時心拍"
        },
        "respiratoryRate": {
          "average": null,
          "deviation": null,
          "days": 0,
          "value": null,
          "status": "insufficient",
          "delta": null,
          "label": "呼吸数"
        },
        "oxygenAvg": {
          "average": 98.34600488055639,
          "deviation": 0.19227662256726127,
          "days": 28,
          "value": 98.09677419354838,
          "status": "usual",
          "delta": -0.24923068700800854,
          "label": "血中酸素"
        }
      },
      "confidence": "medium",
      "baselineWindowDays": 28
    },
    "weight": 56.6,
    "bodyFat": 11.0,
    "activeCalories": 256.0,
    "heartRateAvg": 62.74,
    "sleepMinutes": 9.5,
    "steps": 5878.0,
    "sleepEfficiency": 95.0,
    "deepSleepMinutes": 2.17,
    "remSleepMinutes": 2.75,
    "walkingMinutes": null,
    "exerciseMinutes": null,
    "restingHeartRate": null,
    "hrv": null,
    "respiratoryRate": null,
    "oxygenAvg": 98.1,
    "comparisons": {
      "weight": {
        "previousDelta": null,
        "avg7": 57.3,
        "avg7Delta": -0.7
      },
      "bodyFat": {
        "previousDelta": null,
        "avg7": 10.38,
        "avg7Delta": 0.62
      },
      "activeCalories": {
        "previousDelta": -215.0,
        "avg7": 283.0,
        "avg7Delta": -27.0
      },
      "heartRateAvg": {
        "previousDelta": -3.78,
        "avg7": 61.15,
        "avg7Delta": 1.59
      },
      "sleepMinutes": {
        "previousDelta": 3.25,
        "avg7": 7.13,
        "avg7Delta": 2.37
      },
      "steps": {
        "previousDelta": -4365.0,
        "avg7": 6360.43,
        "avg7Delta": -482.43
      },
      "sleepEfficiency": {
        "previousDelta": 7.28,
        "avg7": 92.5,
        "avg7Delta": 2.5
      },
      "deepSleepMinutes": {
        "previousDelta": 0.42,
        "avg7": 1.7,
        "avg7Delta": 0.47
      },
      "remSleepMinutes": {
        "previousDelta": 1.42,
        "avg7": 1.77,
        "avg7Delta": 0.98
      },
      "walkingMinutes": {
        "previousDelta": null,
        "avg7": 0.5,
        "avg7Delta": null
      },
      "exerciseMinutes": {
        "previousDelta": null,
        "avg7": 0.91,
        "avg7Delta": null
      },
      "restingHeartRate": {
        "previousDelta": null,
        "avg7": 50.0,
        "avg7Delta": null
      },
      "hrv": {
        "previousDelta": null,
        "avg7": null,
        "avg7Delta": null
      },
      "respiratoryRate": {
        "previousDelta": null,
        "avg7": null,
        "avg7Delta": null
      },
      "oxygenAvg": {
        "previousDelta": -0.21,
        "avg7": 98.47,
        "avg7Delta": -0.37
      }
    }
  },
  "days": [
    {
      "date": "2026-06-01",
      "sourceExportedAt": "2026-06-26T22:50:48.458698Z",
      "sourceReceivedAt": "2026-06-26T22:50:50.161Z",
      "coach": {
        "date": "2026-06-01",
        "recoveryScore": null,
        "recoveryBand": "unknown",
        "sleep": {
          "score": null,
          "durationMinutes": null,
          "efficiency": null,
          "deepMinutes": null,
          "remMinutes": null,
          "awakeMinutes": null,
          "availableFactors": 0
        },
        "activityLoad": {
          "score": null,
          "availableFactors": []
        },
        "targetLoad": [
          40,
          65
        ],
        "sleepBankMinutes": null,
        "tonightSleepNeedMinutes": 450,
        "headline": "回復度は較正中。今日は睡眠と活動量を中心に判断します。",
        "warnings": [],
        "positives": [],
        "actions": [
          "運動は普段通りでOK。活動負荷は目安範囲内を狙う。",
          "今夜の睡眠目安は7h30m。就寝前30分は光と刺激を抑える。"
        ],
        "monitor": {
          "hrv": {
            "average": null,
            "deviation": null,
            "days": 0,
            "value": null,
            "status": "insufficient",
            "delta": null,
            "label": "HRV"
          },
          "restingHeartRate": {
            "average": null,
            "deviation": null,
            "days": 0,
            "value": null,
            "status": "insufficient",
            "delta": null,
            "label": "安静時心拍"
          },
          "respiratoryRate": {
            "average": null,
            "deviation": null,
            "days": 0,
            "value": null,
            "status": "insufficient",
            "delta": null,
            "label": "呼吸数"
          },
          "oxygenAvg": {
            "average": null,
            "deviation": null,
            "days": 0,
            "value": null,
            "status": "insufficient",
            "delta": null,
            "label": "血中酸素"
          }
        },
        "confidence": "low",
        "baselineWindowDays": 28
      },
      "weight": 56.0,
      "bodyFat": null,
      "activeCalories": null,
      "heartRateAvg": null,
      "sleepMinutes": null,
      "steps": null,
      "sleepEfficiency": null,
      "deepSleepMinutes": null,
      "remSleepMinutes": null,
      "walkingMinutes": null,
      "exerciseMinutes": 0.7,
      "restingHeartRate": null,
      "hrv": null,
      "respiratoryRate": null,
      "oxygenAvg": null,
      "comparisons": {
        "weight": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "bodyFat": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "activeCalories": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "heartRateAvg": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "sleepMinutes": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "steps": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "sleepEfficiency": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "deepSleepMinutes": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "remSleepMinutes": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "walkingMinutes": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "exerciseMinutes": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "restingHeartRate": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "hrv": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "respiratoryRate": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "oxygenAvg": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        }
      }
    },
    {
      "date": "2026-06-02",
      "sourceExportedAt": "2026-06-26T22:50:48.458698Z",
      "sourceReceivedAt": "2026-06-26T22:50:50.161Z",
      "coach": {
        "date": "2026-06-02",
        "recoveryScore": null,
        "recoveryBand": "unknown",
        "sleep": {
          "score": null,
          "durationMinutes": null,
          "efficiency": null,
          "deepMinutes": null,
          "remMinutes": null,
          "awakeMinutes": null,
          "availableFactors": 0
        },
        "activityLoad": {
          "score": null,
          "availableFactors": []
        },
        "targetLoad": [
          40,
          65
        ],
        "sleepBankMinutes": null,
        "tonightSleepNeedMinutes": 450,
        "headline": "回復度は較正中。今日は睡眠と活動量を中心に判断します。",
        "warnings": [],
        "positives": [],
        "actions": [
          "運動は普段通りでOK。活動負荷は目安範囲内を狙う。",
          "今夜の睡眠目安は7h30m。就寝前30分は光と刺激を抑える。"
        ],
        "monitor": {
          "hrv": {
            "average": null,
            "deviation": null,
            "days": 0,
            "value": null,
            "status": "insufficient",
            "delta": null,
            "label": "HRV"
          },
          "restingHeartRate": {
            "average": null,
            "deviation": null,
            "days": 0,
            "value": null,
            "status": "insufficient",
            "delta": null,
            "label": "安静時心拍"
          },
          "respiratoryRate": {
            "average": null,
            "deviation": null,
            "days": 0,
            "value": null,
            "status": "insufficient",
            "delta": null,
            "label": "呼吸数"
          },
          "oxygenAvg": {
            "average": null,
            "deviation": null,
            "days": 0,
            "value": null,
            "status": "insufficient",
            "delta": null,
            "label": "血中酸素"
          }
        },
        "confidence": "low",
        "baselineWindowDays": 28
      },
      "weight": 57.0,
      "bodyFat": 10.6,
      "activeCalories": null,
      "heartRateAvg": null,
      "sleepMinutes": null,
      "steps": null,
      "sleepEfficiency": null,
      "deepSleepMinutes": null,
      "remSleepMinutes": null,
      "walkingMinutes": null,
      "exerciseMinutes": null,
      "restingHeartRate": null,
      "hrv": null,
      "respiratoryRate": null,
      "oxygenAvg": null,
      "comparisons": {
        "weight": {
          "previousDelta": 1.0,
          "avg7": 56.0,
          "avg7Delta": 1.0
        },
        "bodyFat": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "activeCalories": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "heartRateAvg": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "sleepMinutes": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "steps": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "sleepEfficiency": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "deepSleepMinutes": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "remSleepMinutes": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "walkingMinutes": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "exerciseMinutes": {
          "previousDelta": null,
          "avg7": 0.7,
          "avg7Delta": null
        },
        "restingHeartRate": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "hrv": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "respiratoryRate": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "oxygenAvg": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        }
      }
    },
    {
      "date": "2026-06-03",
      "sourceExportedAt": "2026-06-26T22:50:48.458698Z",
      "sourceReceivedAt": "2026-06-26T22:50:50.161Z",
      "coach": {
        "date": "2026-06-03",
        "recoveryScore": null,
        "recoveryBand": "unknown",
        "sleep": {
          "score": null,
          "durationMinutes": null,
          "efficiency": null,
          "deepMinutes": null,
          "remMinutes": null,
          "awakeMinutes": null,
          "availableFactors": 0
        },
        "activityLoad": {
          "score": 64,
          "availableFactors": [
            "exerciseMinutes"
          ]
        },
        "targetLoad": [
          40,
          65
        ],
        "sleepBankMinutes": null,
        "tonightSleepNeedMinutes": 450,
        "headline": "回復度は較正中。今日は睡眠と活動量を中心に判断します。",
        "warnings": [],
        "positives": [],
        "actions": [
          "運動は普段通りでOK。活動負荷は目安範囲内を狙う。",
          "今夜の睡眠目安は7h30m。就寝前30分は光と刺激を抑える。"
        ],
        "monitor": {
          "hrv": {
            "average": null,
            "deviation": null,
            "days": 0,
            "value": null,
            "status": "insufficient",
            "delta": null,
            "label": "HRV"
          },
          "restingHeartRate": {
            "average": null,
            "deviation": null,
            "days": 0,
            "value": null,
            "status": "insufficient",
            "delta": null,
            "label": "安静時心拍"
          },
          "respiratoryRate": {
            "average": null,
            "deviation": null,
            "days": 0,
            "value": null,
            "status": "insufficient",
            "delta": null,
            "label": "呼吸数"
          },
          "oxygenAvg": {
            "average": null,
            "deviation": null,
            "days": 0,
            "value": null,
            "status": "insufficient",
            "delta": null,
            "label": "血中酸素"
          }
        },
        "confidence": "low",
        "baselineWindowDays": 28
      },
      "weight": 56.9,
      "bodyFat": 13.0,
      "activeCalories": null,
      "heartRateAvg": null,
      "sleepMinutes": null,
      "steps": null,
      "sleepEfficiency": null,
      "deepSleepMinutes": null,
      "remSleepMinutes": null,
      "walkingMinutes": null,
      "exerciseMinutes": 0.9,
      "restingHeartRate": null,
      "hrv": null,
      "respiratoryRate": null,
      "oxygenAvg": null,
      "comparisons": {
        "weight": {
          "previousDelta": -0.1,
          "avg7": 56.5,
          "avg7Delta": 0.4
        },
        "bodyFat": {
          "previousDelta": 2.4,
          "avg7": 10.6,
          "avg7Delta": 2.4
        },
        "activeCalories": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "heartRateAvg": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "sleepMinutes": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "steps": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "sleepEfficiency": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "deepSleepMinutes": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "remSleepMinutes": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "walkingMinutes": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "exerciseMinutes": {
          "previousDelta": null,
          "avg7": 0.7,
          "avg7Delta": 0.2
        },
        "restingHeartRate": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "hrv": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "respiratoryRate": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "oxygenAvg": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        }
      }
    },
    {
      "date": "2026-06-04",
      "sourceExportedAt": "2026-07-03T21:39:36.840032Z",
      "sourceReceivedAt": "2026-07-03T21:39:37.372Z",
      "coach": {
        "date": "2026-06-04",
        "recoveryScore": null,
        "recoveryBand": "unknown",
        "sleep": {
          "score": null,
          "durationMinutes": null,
          "efficiency": null,
          "deepMinutes": null,
          "remMinutes": null,
          "awakeMinutes": null,
          "availableFactors": 0
        },
        "activityLoad": {
          "score": null,
          "availableFactors": []
        },
        "targetLoad": [
          40,
          65
        ],
        "sleepBankMinutes": null,
        "tonightSleepNeedMinutes": 450,
        "headline": "回復度は較正中。今日は睡眠と活動量を中心に判断します。",
        "warnings": [],
        "positives": [],
        "actions": [
          "運動は普段通りでOK。活動負荷は目安範囲内を狙う。",
          "今夜の睡眠目安は7h30m。就寝前30分は光と刺激を抑える。"
        ],
        "monitor": {
          "hrv": {
            "average": null,
            "deviation": null,
            "days": 0,
            "value": null,
            "status": "insufficient",
            "delta": null,
            "label": "HRV"
          },
          "restingHeartRate": {
            "average": null,
            "deviation": null,
            "days": 0,
            "value": null,
            "status": "insufficient",
            "delta": null,
            "label": "安静時心拍"
          },
          "respiratoryRate": {
            "average": null,
            "deviation": null,
            "days": 0,
            "value": null,
            "status": "insufficient",
            "delta": null,
            "label": "呼吸数"
          },
          "oxygenAvg": {
            "average": null,
            "deviation": null,
            "days": 0,
            "value": null,
            "status": "insufficient",
            "delta": null,
            "label": "血中酸素"
          }
        },
        "confidence": "low",
        "baselineWindowDays": 28
      },
      "weight": 56.4,
      "bodyFat": 10.0,
      "activeCalories": null,
      "heartRateAvg": null,
      "sleepMinutes": null,
      "steps": null,
      "sleepEfficiency": null,
      "deepSleepMinutes": null,
      "remSleepMinutes": null,
      "walkingMinutes": null,
      "exerciseMinutes": null,
      "restingHeartRate": null,
      "hrv": null,
      "respiratoryRate": null,
      "oxygenAvg": null,
      "comparisons": {
        "weight": {
          "previousDelta": -0.5,
          "avg7": 56.63,
          "avg7Delta": -0.23
        },
        "bodyFat": {
          "previousDelta": -3.0,
          "avg7": 11.8,
          "avg7Delta": -1.8
        },
        "activeCalories": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "heartRateAvg": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "sleepMinutes": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "steps": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "sleepEfficiency": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "deepSleepMinutes": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "remSleepMinutes": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "walkingMinutes": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "exerciseMinutes": {
          "previousDelta": null,
          "avg7": 0.8,
          "avg7Delta": null
        },
        "restingHeartRate": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "hrv": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "respiratoryRate": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "oxygenAvg": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        }
      }
    },
    {
      "date": "2026-06-05",
      "sourceExportedAt": "2026-07-03T21:39:36.840032Z",
      "sourceReceivedAt": "2026-07-03T21:39:37.372Z",
      "coach": {
        "date": "2026-06-05",
        "recoveryScore": null,
        "recoveryBand": "unknown",
        "sleep": {
          "score": null,
          "durationMinutes": null,
          "efficiency": null,
          "deepMinutes": null,
          "remMinutes": null,
          "awakeMinutes": null,
          "availableFactors": 0
        },
        "activityLoad": {
          "score": null,
          "availableFactors": []
        },
        "targetLoad": [
          40,
          65
        ],
        "sleepBankMinutes": null,
        "tonightSleepNeedMinutes": 450,
        "headline": "回復度は較正中。今日は睡眠と活動量を中心に判断します。",
        "warnings": [],
        "positives": [],
        "actions": [
          "運動は普段通りでOK。活動負荷は目安範囲内を狙う。",
          "今夜の睡眠目安は7h30m。就寝前30分は光と刺激を抑える。"
        ],
        "monitor": {
          "hrv": {
            "average": null,
            "deviation": null,
            "days": 0,
            "value": null,
            "status": "insufficient",
            "delta": null,
            "label": "HRV"
          },
          "restingHeartRate": {
            "average": null,
            "deviation": null,
            "days": 0,
            "value": null,
            "status": "insufficient",
            "delta": null,
            "label": "安静時心拍"
          },
          "respiratoryRate": {
            "average": null,
            "deviation": null,
            "days": 0,
            "value": null,
            "status": "insufficient",
            "delta": null,
            "label": "呼吸数"
          },
          "oxygenAvg": {
            "average": null,
            "deviation": null,
            "days": 0,
            "value": null,
            "status": "insufficient",
            "delta": null,
            "label": "血中酸素"
          }
        },
        "confidence": "low",
        "baselineWindowDays": 28
      },
      "weight": 56.9,
      "bodyFat": 12.1,
      "activeCalories": null,
      "heartRateAvg": null,
      "sleepMinutes": null,
      "steps": null,
      "sleepEfficiency": null,
      "deepSleepMinutes": null,
      "remSleepMinutes": null,
      "walkingMinutes": null,
      "exerciseMinutes": null,
      "restingHeartRate": null,
      "hrv": null,
      "respiratoryRate": null,
      "oxygenAvg": null,
      "comparisons": {
        "weight": {
          "previousDelta": 0.5,
          "avg7": 56.58,
          "avg7Delta": 0.32
        },
        "bodyFat": {
          "previousDelta": 2.1,
          "avg7": 11.2,
          "avg7Delta": 0.9
        },
        "activeCalories": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "heartRateAvg": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "sleepMinutes": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "steps": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "sleepEfficiency": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "deepSleepMinutes": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "remSleepMinutes": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "walkingMinutes": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "exerciseMinutes": {
          "previousDelta": null,
          "avg7": 0.8,
          "avg7Delta": null
        },
        "restingHeartRate": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "hrv": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "respiratoryRate": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "oxygenAvg": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        }
      }
    },
    {
      "date": "2026-06-06",
      "sourceExportedAt": "2026-07-03T21:39:36.840032Z",
      "sourceReceivedAt": "2026-07-03T21:39:37.372Z",
      "coach": {
        "date": "2026-06-06",
        "recoveryScore": null,
        "recoveryBand": "unknown",
        "sleep": {
          "score": null,
          "durationMinutes": null,
          "efficiency": null,
          "deepMinutes": null,
          "remMinutes": null,
          "awakeMinutes": null,
          "availableFactors": 0
        },
        "activityLoad": {
          "score": null,
          "availableFactors": []
        },
        "targetLoad": [
          40,
          65
        ],
        "sleepBankMinutes": null,
        "tonightSleepNeedMinutes": 450,
        "headline": "回復度は較正中。今日は睡眠と活動量を中心に判断します。",
        "warnings": [],
        "positives": [],
        "actions": [
          "運動は普段通りでOK。活動負荷は目安範囲内を狙う。",
          "今夜の睡眠目安は7h30m。就寝前30分は光と刺激を抑える。"
        ],
        "monitor": {
          "hrv": {
            "average": null,
            "deviation": null,
            "days": 0,
            "value": null,
            "status": "insufficient",
            "delta": null,
            "label": "HRV"
          },
          "restingHeartRate": {
            "average": null,
            "deviation": null,
            "days": 0,
            "value": 49.0,
            "status": "insufficient",
            "delta": null,
            "label": "安静時心拍"
          },
          "respiratoryRate": {
            "average": null,
            "deviation": null,
            "days": 0,
            "value": null,
            "status": "insufficient",
            "delta": null,
            "label": "呼吸数"
          },
          "oxygenAvg": {
            "average": null,
            "deviation": null,
            "days": 0,
            "value": 98.5,
            "status": "insufficient",
            "delta": null,
            "label": "血中酸素"
          }
        },
        "confidence": "low",
        "baselineWindowDays": 28
      },
      "weight": 56.0,
      "bodyFat": 13.4,
      "activeCalories": 62.0,
      "heartRateAvg": 55.95,
      "sleepMinutes": null,
      "steps": 1552.0,
      "sleepEfficiency": null,
      "deepSleepMinutes": null,
      "remSleepMinutes": null,
      "walkingMinutes": null,
      "exerciseMinutes": null,
      "restingHeartRate": 49.0,
      "hrv": null,
      "respiratoryRate": null,
      "oxygenAvg": 98.5,
      "comparisons": {
        "weight": {
          "previousDelta": -0.9,
          "avg7": 56.64,
          "avg7Delta": -0.64
        },
        "bodyFat": {
          "previousDelta": 1.3,
          "avg7": 11.43,
          "avg7Delta": 1.97
        },
        "activeCalories": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "heartRateAvg": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "sleepMinutes": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "steps": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "sleepEfficiency": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "deepSleepMinutes": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "remSleepMinutes": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "walkingMinutes": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "exerciseMinutes": {
          "previousDelta": null,
          "avg7": 0.8,
          "avg7Delta": null
        },
        "restingHeartRate": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "hrv": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "respiratoryRate": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "oxygenAvg": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        }
      }
    },
    {
      "date": "2026-06-07",
      "sourceExportedAt": "2026-07-03T21:39:36.840032Z",
      "sourceReceivedAt": "2026-07-03T21:39:37.372Z",
      "coach": {
        "date": "2026-06-07",
        "recoveryScore": null,
        "recoveryBand": "unknown",
        "sleep": {
          "score": 95,
          "durationMinutes": 495.0,
          "efficiency": 94.7,
          "deepMinutes": 140.0,
          "remMinutes": 119.96666666666667,
          "awakeMinutes": 47.55,
          "availableFactors": 4
        },
        "activityLoad": {
          "score": 100,
          "availableFactors": [
            "activeCalories",
            "steps"
          ]
        },
        "targetLoad": [
          40,
          65
        ],
        "sleepBankMinutes": null,
        "tonightSleepNeedMinutes": 470,
        "headline": "回復度は較正中。今日は睡眠と活動量を中心に判断します。",
        "warnings": [],
        "positives": [
          "睡眠スコア 95"
        ],
        "actions": [
          "今日の負荷は十分。追加の高強度運動は不要です。",
          "今夜の睡眠目安は7h50m。就寝前30分は光と刺激を抑える。"
        ],
        "monitor": {
          "hrv": {
            "average": null,
            "deviation": null,
            "days": 0,
            "value": null,
            "status": "insufficient",
            "delta": null,
            "label": "HRV"
          },
          "restingHeartRate": {
            "average": 49.0,
            "deviation": 0,
            "days": 1,
            "value": 54.0,
            "status": "insufficient",
            "delta": 5.0,
            "label": "安静時心拍"
          },
          "respiratoryRate": {
            "average": null,
            "deviation": null,
            "days": 0,
            "value": null,
            "status": "insufficient",
            "delta": null,
            "label": "呼吸数"
          },
          "oxygenAvg": {
            "average": 98.5,
            "deviation": 0,
            "days": 1,
            "value": 98.31111111111112,
            "status": "insufficient",
            "delta": -0.1888888888888829,
            "label": "血中酸素"
          }
        },
        "confidence": "low",
        "baselineWindowDays": 28
      },
      "weight": null,
      "bodyFat": null,
      "activeCalories": 195.0,
      "heartRateAvg": 55.44,
      "sleepMinutes": 8.25,
      "steps": 5910.0,
      "sleepEfficiency": 94.73,
      "deepSleepMinutes": 2.33,
      "remSleepMinutes": 2.0,
      "walkingMinutes": null,
      "exerciseMinutes": null,
      "restingHeartRate": 54.0,
      "hrv": null,
      "respiratoryRate": null,
      "oxygenAvg": 98.31,
      "comparisons": {
        "weight": {
          "previousDelta": null,
          "avg7": 56.53,
          "avg7Delta": null
        },
        "bodyFat": {
          "previousDelta": null,
          "avg7": 11.82,
          "avg7Delta": null
        },
        "activeCalories": {
          "previousDelta": 133.0,
          "avg7": 62.0,
          "avg7Delta": 133.0
        },
        "heartRateAvg": {
          "previousDelta": -0.51,
          "avg7": 55.95,
          "avg7Delta": -0.51
        },
        "sleepMinutes": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "steps": {
          "previousDelta": 4358.0,
          "avg7": 1552.0,
          "avg7Delta": 4358.0
        },
        "sleepEfficiency": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "deepSleepMinutes": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "remSleepMinutes": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "walkingMinutes": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "exerciseMinutes": {
          "previousDelta": null,
          "avg7": 0.8,
          "avg7Delta": null
        },
        "restingHeartRate": {
          "previousDelta": 5.0,
          "avg7": 49.0,
          "avg7Delta": 5.0
        },
        "hrv": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "respiratoryRate": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "oxygenAvg": {
          "previousDelta": -0.19,
          "avg7": 98.5,
          "avg7Delta": -0.19
        }
      }
    },
    {
      "date": "2026-06-08",
      "sourceExportedAt": "2026-07-08T05:20:18.880117Z",
      "sourceReceivedAt": "2026-07-08T05:20:19.459Z",
      "coach": {
        "date": "2026-06-08",
        "recoveryScore": null,
        "recoveryBand": "unknown",
        "sleep": {
          "score": null,
          "durationMinutes": null,
          "efficiency": null,
          "deepMinutes": null,
          "remMinutes": null,
          "awakeMinutes": null,
          "availableFactors": 0
        },
        "activityLoad": {
          "score": null,
          "availableFactors": []
        },
        "targetLoad": [
          40,
          65
        ],
        "sleepBankMinutes": null,
        "tonightSleepNeedMinutes": 450,
        "headline": "回復度は較正中。今日は睡眠と活動量を中心に判断します。",
        "warnings": [],
        "positives": [],
        "actions": [
          "運動は普段通りでOK。活動負荷は目安範囲内を狙う。",
          "今夜の睡眠目安は7h30m。就寝前30分は光と刺激を抑える。"
        ],
        "monitor": {
          "hrv": {
            "average": null,
            "deviation": null,
            "days": 0,
            "value": null,
            "status": "insufficient",
            "delta": null,
            "label": "HRV"
          },
          "restingHeartRate": {
            "average": null,
            "deviation": null,
            "days": 0,
            "value": 47.0,
            "status": "insufficient",
            "delta": null,
            "label": "安静時心拍"
          },
          "respiratoryRate": {
            "average": null,
            "deviation": null,
            "days": 0,
            "value": null,
            "status": "insufficient",
            "delta": null,
            "label": "呼吸数"
          },
          "oxygenAvg": {
            "average": null,
            "deviation": null,
            "days": 0,
            "value": 98.05555555555556,
            "status": "insufficient",
            "delta": null,
            "label": "血中酸素"
          }
        },
        "confidence": "low",
        "baselineWindowDays": 28
      },
      "weight": null,
      "bodyFat": null,
      "activeCalories": 58.0,
      "heartRateAvg": 61.27,
      "sleepMinutes": null,
      "steps": 1599.0,
      "sleepEfficiency": null,
      "deepSleepMinutes": null,
      "remSleepMinutes": null,
      "walkingMinutes": null,
      "exerciseMinutes": null,
      "restingHeartRate": 47.0,
      "hrv": null,
      "respiratoryRate": null,
      "oxygenAvg": 98.06,
      "comparisons": {
        "weight": {
          "previousDelta": null,
          "avg7": 56.53,
          "avg7Delta": null
        },
        "bodyFat": {
          "previousDelta": null,
          "avg7": 11.82,
          "avg7Delta": null
        },
        "activeCalories": {
          "previousDelta": -137.0,
          "avg7": 128.5,
          "avg7Delta": -70.5
        },
        "heartRateAvg": {
          "previousDelta": 5.83,
          "avg7": 55.7,
          "avg7Delta": 5.57
        },
        "sleepMinutes": {
          "previousDelta": null,
          "avg7": 8.25,
          "avg7Delta": null
        },
        "steps": {
          "previousDelta": -4311.0,
          "avg7": 3731.0,
          "avg7Delta": -2132.0
        },
        "sleepEfficiency": {
          "previousDelta": null,
          "avg7": 94.73,
          "avg7Delta": null
        },
        "deepSleepMinutes": {
          "previousDelta": null,
          "avg7": 2.33,
          "avg7Delta": null
        },
        "remSleepMinutes": {
          "previousDelta": null,
          "avg7": 2.0,
          "avg7Delta": null
        },
        "walkingMinutes": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "exerciseMinutes": {
          "previousDelta": null,
          "avg7": 0.8,
          "avg7Delta": null
        },
        "restingHeartRate": {
          "previousDelta": -7.0,
          "avg7": 51.5,
          "avg7Delta": -4.5
        },
        "hrv": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "respiratoryRate": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "oxygenAvg": {
          "previousDelta": -0.25,
          "avg7": 98.41,
          "avg7Delta": -0.35
        }
      }
    },
    {
      "date": "2026-06-09",
      "sourceExportedAt": "2026-07-08T05:20:18.880117Z",
      "sourceReceivedAt": "2026-07-08T05:20:19.459Z",
      "coach": {
        "date": "2026-06-09",
        "recoveryScore": null,
        "recoveryBand": "unknown",
        "sleep": {
          "score": 98,
          "durationMinutes": 510.0,
          "efficiency": 92.7,
          "deepMinutes": 110.0,
          "remMinutes": 120.0,
          "awakeMinutes": 65.18333333333334,
          "availableFactors": 4
        },
        "activityLoad": {
          "score": 100,
          "availableFactors": [
            "activeCalories",
            "steps"
          ]
        },
        "targetLoad": [
          40,
          65
        ],
        "sleepBankMinutes": null,
        "tonightSleepNeedMinutes": 470,
        "headline": "回復度は較正中。今日は睡眠と活動量を中心に判断します。",
        "warnings": [],
        "positives": [
          "睡眠スコア 98"
        ],
        "actions": [
          "今日の負荷は十分。追加の高強度運動は不要です。",
          "今夜の睡眠目安は7h50m。就寝前30分は光と刺激を抑える。"
        ],
        "monitor": {
          "hrv": {
            "average": null,
            "deviation": null,
            "days": 0,
            "value": null,
            "status": "insufficient",
            "delta": null,
            "label": "HRV"
          },
          "restingHeartRate": {
            "average": 47.0,
            "deviation": 0,
            "days": 1,
            "value": 58.0,
            "status": "insufficient",
            "delta": 11.0,
            "label": "安静時心拍"
          },
          "respiratoryRate": {
            "average": null,
            "deviation": null,
            "days": 0,
            "value": null,
            "status": "insufficient",
            "delta": null,
            "label": "呼吸数"
          },
          "oxygenAvg": {
            "average": 98.05555555555556,
            "deviation": 0,
            "days": 1,
            "value": 98.1590909090909,
            "status": "insufficient",
            "delta": 0.10353535353534937,
            "label": "血中酸素"
          }
        },
        "confidence": "low",
        "baselineWindowDays": 28
      },
      "weight": 56.8,
      "bodyFat": 12.9,
      "activeCalories": 567.22,
      "heartRateAvg": 67.42,
      "sleepMinutes": 8.5,
      "steps": 10775.0,
      "sleepEfficiency": 92.67,
      "deepSleepMinutes": 1.83,
      "remSleepMinutes": 2.0,
      "walkingMinutes": 0.38,
      "exerciseMinutes": 0.64,
      "restingHeartRate": 58.0,
      "hrv": null,
      "respiratoryRate": null,
      "oxygenAvg": 98.16,
      "comparisons": {
        "weight": {
          "previousDelta": null,
          "avg7": 56.64,
          "avg7Delta": 0.16
        },
        "bodyFat": {
          "previousDelta": null,
          "avg7": 11.82,
          "avg7Delta": 1.08
        },
        "activeCalories": {
          "previousDelta": 509.22,
          "avg7": 105.0,
          "avg7Delta": 462.22
        },
        "heartRateAvg": {
          "previousDelta": 6.15,
          "avg7": 57.55,
          "avg7Delta": 9.87
        },
        "sleepMinutes": {
          "previousDelta": null,
          "avg7": 8.25,
          "avg7Delta": 0.25
        },
        "steps": {
          "previousDelta": 9176.0,
          "avg7": 3020.33,
          "avg7Delta": 7754.67
        },
        "sleepEfficiency": {
          "previousDelta": null,
          "avg7": 94.73,
          "avg7Delta": -2.06
        },
        "deepSleepMinutes": {
          "previousDelta": null,
          "avg7": 2.33,
          "avg7Delta": -0.5
        },
        "remSleepMinutes": {
          "previousDelta": null,
          "avg7": 2.0,
          "avg7Delta": 0.0
        },
        "walkingMinutes": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "exerciseMinutes": {
          "previousDelta": null,
          "avg7": 0.9,
          "avg7Delta": -0.26
        },
        "restingHeartRate": {
          "previousDelta": 11.0,
          "avg7": 50.0,
          "avg7Delta": 8.0
        },
        "hrv": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "respiratoryRate": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "oxygenAvg": {
          "previousDelta": 0.1,
          "avg7": 98.29,
          "avg7Delta": -0.13
        }
      }
    },
    {
      "date": "2026-06-10",
      "sourceExportedAt": "2026-07-08T05:20:18.880117Z",
      "sourceReceivedAt": "2026-07-08T05:20:19.459Z",
      "coach": {
        "date": "2026-06-10",
        "recoveryScore": null,
        "recoveryBand": "unknown",
        "sleep": {
          "score": 95,
          "durationMinutes": 460.6666666666667,
          "efficiency": 95.8,
          "deepMinutes": 102.5,
          "remMinutes": 167.5,
          "awakeMinutes": 35.41666666666667,
          "availableFactors": 4
        },
        "activityLoad": {
          "score": 37,
          "availableFactors": [
            "activeCalories",
            "exerciseMinutes",
            "steps"
          ]
        },
        "targetLoad": [
          40,
          65
        ],
        "sleepBankMinutes": null,
        "tonightSleepNeedMinutes": 450,
        "headline": "回復度は較正中。今日は睡眠と活動量を中心に判断します。",
        "warnings": [],
        "positives": [
          "睡眠スコア 95"
        ],
        "actions": [
          "余力があれば30分前後の散歩または中強度の運動で、活動負荷を目安範囲へ近づける。",
          "今夜の睡眠目安は7h30m。就寝前30分は光と刺激を抑える。"
        ],
        "monitor": {
          "hrv": {
            "average": null,
            "deviation": null,
            "days": 0,
            "value": null,
            "status": "insufficient",
            "delta": null,
            "label": "HRV"
          },
          "restingHeartRate": {
            "average": 52.5,
            "deviation": 5.5,
            "days": 2,
            "value": 50.0,
            "status": "insufficient",
            "delta": -2.5,
            "label": "安静時心拍"
          },
          "respiratoryRate": {
            "average": null,
            "deviation": null,
            "days": 0,
            "value": null,
            "status": "insufficient",
            "delta": null,
            "label": "呼吸数"
          },
          "oxygenAvg": {
            "average": 98.10732323232324,
            "deviation": 0.051767676767674686,
            "days": 2,
            "value": 98.06382978723404,
            "status": "insufficient",
            "delta": -0.04349344508919728,
            "label": "血中酸素"
          }
        },
        "confidence": "low",
        "baselineWindowDays": 28
      },
      "weight": 56.1,
      "bodyFat": 13.8,
      "activeCalories": 249.41,
      "heartRateAvg": 68.44,
      "sleepMinutes": 7.68,
      "steps": 6618.0,
      "sleepEfficiency": 95.76,
      "deepSleepMinutes": 1.71,
      "remSleepMinutes": 2.79,
      "walkingMinutes": 0.28,
      "exerciseMinutes": 0.28,
      "restingHeartRate": 50.0,
      "hrv": null,
      "respiratoryRate": null,
      "oxygenAvg": 98.06,
      "comparisons": {
        "weight": {
          "previousDelta": -0.7,
          "avg7": 56.6,
          "avg7Delta": -0.5
        },
        "bodyFat": {
          "previousDelta": 0.9,
          "avg7": 12.28,
          "avg7Delta": 1.52
        },
        "activeCalories": {
          "previousDelta": -317.81,
          "avg7": 220.56,
          "avg7Delta": 28.85
        },
        "heartRateAvg": {
          "previousDelta": 1.02,
          "avg7": 60.02,
          "avg7Delta": 8.42
        },
        "sleepMinutes": {
          "previousDelta": -0.82,
          "avg7": 8.38,
          "avg7Delta": -0.7
        },
        "steps": {
          "previousDelta": -4157.0,
          "avg7": 4959.0,
          "avg7Delta": 1659.0
        },
        "sleepEfficiency": {
          "previousDelta": 3.09,
          "avg7": 93.7,
          "avg7Delta": 2.06
        },
        "deepSleepMinutes": {
          "previousDelta": -0.12,
          "avg7": 2.08,
          "avg7Delta": -0.37
        },
        "remSleepMinutes": {
          "previousDelta": 0.79,
          "avg7": 2.0,
          "avg7Delta": 0.79
        },
        "walkingMinutes": {
          "previousDelta": -0.1,
          "avg7": 0.38,
          "avg7Delta": -0.1
        },
        "exerciseMinutes": {
          "previousDelta": -0.36,
          "avg7": 0.77,
          "avg7Delta": -0.49
        },
        "restingHeartRate": {
          "previousDelta": -8.0,
          "avg7": 52.0,
          "avg7Delta": -2.0
        },
        "hrv": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "respiratoryRate": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "oxygenAvg": {
          "previousDelta": -0.1,
          "avg7": 98.26,
          "avg7Delta": -0.2
        }
      }
    },
    {
      "date": "2026-06-11",
      "sourceExportedAt": "2026-07-11T11:27:24.032709Z",
      "sourceReceivedAt": "2026-07-11T11:27:24.691Z",
      "coach": {
        "date": "2026-06-11",
        "recoveryScore": null,
        "recoveryBand": "unknown",
        "sleep": {
          "score": null,
          "durationMinutes": null,
          "efficiency": null,
          "deepMinutes": null,
          "remMinutes": null,
          "awakeMinutes": null,
          "availableFactors": 0
        },
        "activityLoad": {
          "score": null,
          "availableFactors": []
        },
        "targetLoad": [
          40,
          65
        ],
        "sleepBankMinutes": null,
        "tonightSleepNeedMinutes": 450,
        "headline": "回復度は較正中。今日は睡眠と活動量を中心に判断します。",
        "warnings": [],
        "positives": [],
        "actions": [
          "運動は普段通りでOK。活動負荷は目安範囲内を狙う。",
          "今夜の睡眠目安は7h30m。就寝前30分は光と刺激を抑える。"
        ],
        "monitor": {
          "hrv": {
            "average": null,
            "deviation": null,
            "days": 0,
            "value": null,
            "status": "insufficient",
            "delta": null,
            "label": "HRV"
          },
          "restingHeartRate": {
            "average": null,
            "deviation": null,
            "days": 0,
            "value": 51.0,
            "status": "insufficient",
            "delta": null,
            "label": "安静時心拍"
          },
          "respiratoryRate": {
            "average": null,
            "deviation": null,
            "days": 0,
            "value": null,
            "status": "insufficient",
            "delta": null,
            "label": "呼吸数"
          },
          "oxygenAvg": {
            "average": null,
            "deviation": null,
            "days": 0,
            "value": 98.28571428571429,
            "status": "insufficient",
            "delta": null,
            "label": "血中酸素"
          }
        },
        "confidence": "low",
        "baselineWindowDays": 28
      },
      "weight": null,
      "bodyFat": null,
      "activeCalories": 10.0,
      "heartRateAvg": 49.52,
      "sleepMinutes": null,
      "steps": 289.0,
      "sleepEfficiency": null,
      "deepSleepMinutes": null,
      "remSleepMinutes": null,
      "walkingMinutes": null,
      "exerciseMinutes": null,
      "restingHeartRate": 51.0,
      "hrv": null,
      "respiratoryRate": null,
      "oxygenAvg": 98.29,
      "comparisons": {
        "weight": {
          "previousDelta": null,
          "avg7": 56.44,
          "avg7Delta": null
        },
        "bodyFat": {
          "previousDelta": null,
          "avg7": 12.44,
          "avg7Delta": null
        },
        "activeCalories": {
          "previousDelta": -239.41,
          "avg7": 226.33,
          "avg7Delta": -216.33
        },
        "heartRateAvg": {
          "previousDelta": -18.92,
          "avg7": 61.7,
          "avg7Delta": -12.18
        },
        "sleepMinutes": {
          "previousDelta": null,
          "avg7": 8.14,
          "avg7Delta": null
        },
        "steps": {
          "previousDelta": -6329.0,
          "avg7": 5290.8,
          "avg7Delta": -5001.8
        },
        "sleepEfficiency": {
          "previousDelta": null,
          "avg7": 94.39,
          "avg7Delta": null
        },
        "deepSleepMinutes": {
          "previousDelta": null,
          "avg7": 1.96,
          "avg7Delta": null
        },
        "remSleepMinutes": {
          "previousDelta": null,
          "avg7": 2.26,
          "avg7Delta": null
        },
        "walkingMinutes": {
          "previousDelta": null,
          "avg7": 0.33,
          "avg7Delta": null
        },
        "exerciseMinutes": {
          "previousDelta": null,
          "avg7": 0.46,
          "avg7Delta": null
        },
        "restingHeartRate": {
          "previousDelta": 1.0,
          "avg7": 51.6,
          "avg7Delta": -0.6
        },
        "hrv": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "respiratoryRate": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "oxygenAvg": {
          "previousDelta": 0.23,
          "avg7": 98.22,
          "avg7Delta": 0.07
        }
      }
    },
    {
      "date": "2026-06-12",
      "sourceExportedAt": "2026-07-11T11:27:24.032709Z",
      "sourceReceivedAt": "2026-07-11T11:27:24.691Z",
      "coach": {
        "date": "2026-06-12",
        "recoveryScore": null,
        "recoveryBand": "unknown",
        "sleep": {
          "score": 96,
          "durationMinutes": 470.0,
          "efficiency": 93.1,
          "deepMinutes": 125.0,
          "remMinutes": 125.0,
          "awakeMinutes": 55.0,
          "availableFactors": 4
        },
        "activityLoad": {
          "score": 100,
          "availableFactors": [
            "activeCalories",
            "steps"
          ]
        },
        "targetLoad": [
          40,
          65
        ],
        "sleepBankMinutes": null,
        "tonightSleepNeedMinutes": 470,
        "headline": "回復度は較正中。今日は睡眠と活動量を中心に判断します。",
        "warnings": [],
        "positives": [
          "睡眠スコア 96"
        ],
        "actions": [
          "今日の負荷は十分。追加の高強度運動は不要です。",
          "今夜の睡眠目安は7h50m。就寝前30分は光と刺激を抑える。"
        ],
        "monitor": {
          "hrv": {
            "average": null,
            "deviation": null,
            "days": 0,
            "value": null,
            "status": "insufficient",
            "delta": null,
            "label": "HRV"
          },
          "restingHeartRate": {
            "average": 51.0,
            "deviation": 0,
            "days": 1,
            "value": 50.0,
            "status": "insufficient",
            "delta": -1.0,
            "label": "安静時心拍"
          },
          "respiratoryRate": {
            "average": null,
            "deviation": null,
            "days": 0,
            "value": null,
            "status": "insufficient",
            "delta": null,
            "label": "呼吸数"
          },
          "oxygenAvg": {
            "average": 98.28571428571429,
            "deviation": 0,
            "days": 1,
            "value": 98.15555555555555,
            "status": "insufficient",
            "delta": -0.13015873015874035,
            "label": "血中酸素"
          }
        },
        "confidence": "low",
        "baselineWindowDays": 28
      },
      "weight": 56.6,
      "bodyFat": 12.7,
      "activeCalories": 238.0,
      "heartRateAvg": 64.06,
      "sleepMinutes": 7.83,
      "steps": 5195.0,
      "sleepEfficiency": 93.07,
      "deepSleepMinutes": 2.08,
      "remSleepMinutes": 2.08,
      "walkingMinutes": null,
      "exerciseMinutes": null,
      "restingHeartRate": 50.0,
      "hrv": null,
      "respiratoryRate": null,
      "oxygenAvg": 98.16,
      "comparisons": {
        "weight": {
          "previousDelta": null,
          "avg7": 56.45,
          "avg7Delta": 0.15
        },
        "bodyFat": {
          "previousDelta": null,
          "avg7": 13.05,
          "avg7Delta": -0.35
        },
        "activeCalories": {
          "previousDelta": 228.0,
          "avg7": 190.27,
          "avg7Delta": 47.73
        },
        "heartRateAvg": {
          "previousDelta": 14.54,
          "avg7": 59.67,
          "avg7Delta": 4.39
        },
        "sleepMinutes": {
          "previousDelta": null,
          "avg7": 8.14,
          "avg7Delta": -0.31
        },
        "steps": {
          "previousDelta": 4906.0,
          "avg7": 4457.17,
          "avg7Delta": 737.83
        },
        "sleepEfficiency": {
          "previousDelta": null,
          "avg7": 94.39,
          "avg7Delta": -1.32
        },
        "deepSleepMinutes": {
          "previousDelta": null,
          "avg7": 1.96,
          "avg7Delta": 0.12
        },
        "remSleepMinutes": {
          "previousDelta": null,
          "avg7": 2.26,
          "avg7Delta": -0.18
        },
        "walkingMinutes": {
          "previousDelta": null,
          "avg7": 0.33,
          "avg7Delta": null
        },
        "exerciseMinutes": {
          "previousDelta": null,
          "avg7": 0.46,
          "avg7Delta": null
        },
        "restingHeartRate": {
          "previousDelta": -1.0,
          "avg7": 51.5,
          "avg7Delta": -1.5
        },
        "hrv": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "respiratoryRate": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "oxygenAvg": {
          "previousDelta": -0.13,
          "avg7": 98.23,
          "avg7Delta": -0.07
        }
      }
    },
    {
      "date": "2026-06-13",
      "sourceExportedAt": "2026-07-11T11:27:24.032709Z",
      "sourceReceivedAt": "2026-07-11T11:27:24.691Z",
      "coach": {
        "date": "2026-06-13",
        "recoveryScore": null,
        "recoveryBand": "unknown",
        "sleep": {
          "score": 96,
          "durationMinutes": 430.0,
          "efficiency": 90.5,
          "deepMinutes": 95.0,
          "remMinutes": 100.0,
          "awakeMinutes": 52.516666666666666,
          "availableFactors": 4
        },
        "activityLoad": {
          "score": 100,
          "availableFactors": [
            "activeCalories",
            "steps"
          ]
        },
        "targetLoad": [
          40,
          65
        ],
        "sleepBankMinutes": null,
        "tonightSleepNeedMinutes": 470,
        "headline": "回復度は較正中。今日は睡眠と活動量を中心に判断します。",
        "warnings": [],
        "positives": [
          "睡眠スコア 96"
        ],
        "actions": [
          "今日の負荷は十分。追加の高強度運動は不要です。",
          "今夜の睡眠目安は7h50m。就寝前30分は光と刺激を抑える。"
        ],
        "monitor": {
          "hrv": {
            "average": null,
            "deviation": null,
            "days": 0,
            "value": null,
            "status": "insufficient",
            "delta": null,
            "label": "HRV"
          },
          "restingHeartRate": {
            "average": 50.5,
            "deviation": 0.5,
            "days": 2,
            "value": 50.0,
            "status": "insufficient",
            "delta": -0.5,
            "label": "安静時心拍"
          },
          "respiratoryRate": {
            "average": null,
            "deviation": null,
            "days": 0,
            "value": null,
            "status": "insufficient",
            "delta": null,
            "label": "呼吸数"
          },
          "oxygenAvg": {
            "average": 98.22063492063492,
            "deviation": 0.06507936507937018,
            "days": 2,
            "value": 98.1590909090909,
            "status": "insufficient",
            "delta": -0.06154401154401512,
            "label": "血中酸素"
          }
        },
        "confidence": "low",
        "baselineWindowDays": 28
      },
      "weight": null,
      "bodyFat": null,
      "activeCalories": 487.19,
      "heartRateAvg": 64.15,
      "sleepMinutes": 7.17,
      "steps": 10020.0,
      "sleepEfficiency": 90.52,
      "deepSleepMinutes": 1.58,
      "remSleepMinutes": 1.67,
      "walkingMinutes": 0.29,
      "exerciseMinutes": 0.62,
      "restingHeartRate": 50.0,
      "hrv": null,
      "respiratoryRate": null,
      "oxygenAvg": 98.16,
      "comparisons": {
        "weight": {
          "previousDelta": null,
          "avg7": 56.38,
          "avg7Delta": null
        },
        "bodyFat": {
          "previousDelta": null,
          "avg7": 13.2,
          "avg7Delta": null
        },
        "activeCalories": {
          "previousDelta": 249.19,
          "avg7": 197.09,
          "avg7Delta": 290.1
        },
        "heartRateAvg": {
          "previousDelta": 0.09,
          "avg7": 60.3,
          "avg7Delta": 3.85
        },
        "sleepMinutes": {
          "previousDelta": -0.66,
          "avg7": 8.06,
          "avg7Delta": -0.89
        },
        "steps": {
          "previousDelta": 4825.0,
          "avg7": 4562.57,
          "avg7Delta": 5457.43
        },
        "sleepEfficiency": {
          "previousDelta": -2.55,
          "avg7": 94.06,
          "avg7Delta": -3.54
        },
        "deepSleepMinutes": {
          "previousDelta": -0.5,
          "avg7": 1.99,
          "avg7Delta": -0.41
        },
        "remSleepMinutes": {
          "previousDelta": -0.41,
          "avg7": 2.22,
          "avg7Delta": -0.55
        },
        "walkingMinutes": {
          "previousDelta": null,
          "avg7": 0.33,
          "avg7Delta": -0.04
        },
        "exerciseMinutes": {
          "previousDelta": null,
          "avg7": 0.46,
          "avg7Delta": 0.16
        },
        "restingHeartRate": {
          "previousDelta": 0.0,
          "avg7": 51.29,
          "avg7Delta": -1.29
        },
        "hrv": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "respiratoryRate": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "oxygenAvg": {
          "previousDelta": 0.0,
          "avg7": 98.22,
          "avg7Delta": -0.06
        }
      }
    },
    {
      "date": "2026-06-14",
      "sourceExportedAt": "2026-07-11T11:27:24.032709Z",
      "sourceReceivedAt": "2026-07-11T11:27:24.691Z",
      "coach": {
        "date": "2026-06-14",
        "recoveryScore": 81,
        "recoveryBand": "high",
        "sleep": {
          "score": 98,
          "durationMinutes": 475.0,
          "efficiency": 96.9,
          "deepMinutes": 115.0,
          "remMinutes": 90.0,
          "awakeMinutes": 32.5,
          "availableFactors": 4
        },
        "activityLoad": {
          "score": 92,
          "availableFactors": [
            "activeCalories",
            "exerciseMinutes",
            "steps"
          ]
        },
        "targetLoad": [
          60,
          80
        ],
        "sleepBankMinutes": 25,
        "tonightSleepNeedMinutes": 470,
        "headline": "回復状態は良好。普段通りか、少し強度を上げられる日です。",
        "warnings": [],
        "positives": [
          "睡眠スコア 98"
        ],
        "actions": [
          "今日の負荷は十分。追加の高強度運動は不要です。",
          "今夜の睡眠目安は7h50m。就寝前30分は光と刺激を抑える。"
        ],
        "monitor": {
          "hrv": {
            "average": null,
            "deviation": null,
            "days": 0,
            "value": null,
            "status": "insufficient",
            "delta": null,
            "label": "HRV"
          },
          "restingHeartRate": {
            "average": 50.333333333333336,
            "deviation": 0.4714045207910317,
            "days": 3,
            "value": 49.0,
            "status": "usual",
            "delta": -1.3333333333333357,
            "label": "安静時心拍"
          },
          "respiratoryRate": {
            "average": null,
            "deviation": null,
            "days": 0,
            "value": null,
            "status": "insufficient",
            "delta": null,
            "label": "呼吸数"
          },
          "oxygenAvg": {
            "average": 98.20012025012024,
            "deviation": 0.0605413295642493,
            "days": 3,
            "value": 97.93333333333334,
            "status": "usual",
            "delta": -0.2667869167868986,
            "label": "血中酸素"
          }
        },
        "confidence": "medium",
        "baselineWindowDays": 28
      },
      "weight": 55.9,
      "bodyFat": 11.1,
      "activeCalories": 599.45,
      "heartRateAvg": 64.56,
      "sleepMinutes": 7.92,
      "steps": 8945.0,
      "sleepEfficiency": 96.94,
      "deepSleepMinutes": 1.92,
      "remSleepMinutes": 1.5,
      "walkingMinutes": 0.33,
      "exerciseMinutes": 1.06,
      "restingHeartRate": 49.0,
      "hrv": null,
      "respiratoryRate": null,
      "oxygenAvg": 97.93,
      "comparisons": {
        "weight": {
          "previousDelta": null,
          "avg7": 56.5,
          "avg7Delta": -0.6
        },
        "bodyFat": {
          "previousDelta": null,
          "avg7": 13.13,
          "avg7Delta": -2.03
        },
        "activeCalories": {
          "previousDelta": 112.26,
          "avg7": 257.83,
          "avg7Delta": 341.62
        },
        "heartRateAvg": {
          "previousDelta": 0.41,
          "avg7": 61.47,
          "avg7Delta": 3.09
        },
        "sleepMinutes": {
          "previousDelta": 0.75,
          "avg7": 7.89,
          "avg7Delta": 0.03
        },
        "steps": {
          "previousDelta": -1075.0,
          "avg7": 5772.29,
          "avg7Delta": 3172.71
        },
        "sleepEfficiency": {
          "previousDelta": 6.42,
          "avg7": 93.35,
          "avg7Delta": 3.59
        },
        "deepSleepMinutes": {
          "previousDelta": 0.34,
          "avg7": 1.91,
          "avg7Delta": 0.01
        },
        "remSleepMinutes": {
          "previousDelta": -0.17,
          "avg7": 2.11,
          "avg7Delta": -0.61
        },
        "walkingMinutes": {
          "previousDelta": 0.04,
          "avg7": 0.32,
          "avg7Delta": 0.01
        },
        "exerciseMinutes": {
          "previousDelta": 0.44,
          "avg7": 0.51,
          "avg7Delta": 0.55
        },
        "restingHeartRate": {
          "previousDelta": -1.0,
          "avg7": 51.43,
          "avg7Delta": -2.43
        },
        "hrv": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "respiratoryRate": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "oxygenAvg": {
          "previousDelta": -0.23,
          "avg7": 98.17,
          "avg7Delta": -0.24
        }
      }
    },
    {
      "date": "2026-06-15",
      "sourceExportedAt": "2026-07-11T11:27:24.032709Z",
      "sourceReceivedAt": "2026-07-11T11:27:24.691Z",
      "coach": {
        "date": "2026-06-15",
        "recoveryScore": 78,
        "recoveryBand": "high",
        "sleep": {
          "score": 90,
          "durationMinutes": 420.0,
          "efficiency": 95.5,
          "deepMinutes": 115.0,
          "remMinutes": 50.0,
          "awakeMinutes": 42.5,
          "availableFactors": 4
        },
        "activityLoad": {
          "score": 52,
          "availableFactors": [
            "activeCalories",
            "steps"
          ]
        },
        "targetLoad": [
          60,
          80
        ],
        "sleepBankMinutes": -5,
        "tonightSleepNeedMinutes": 452,
        "headline": "回復状態は良好。普段通りか、少し強度を上げられる日です。",
        "warnings": [],
        "positives": [
          "睡眠スコア 90"
        ],
        "actions": [
          "余力があれば30分前後の散歩または中強度の運動で、活動負荷を目安範囲へ近づける。",
          "今夜の睡眠目安は7h32m。就寝前30分は光と刺激を抑える。"
        ],
        "monitor": {
          "hrv": {
            "average": null,
            "deviation": null,
            "days": 0,
            "value": null,
            "status": "insufficient",
            "delta": null,
            "label": "HRV"
          },
          "restingHeartRate": {
            "average": 50.0,
            "deviation": 0.7071067811865476,
            "days": 4,
            "value": 48.0,
            "status": "usual",
            "delta": -2.0,
            "label": "安静時心拍"
          },
          "respiratoryRate": {
            "average": null,
            "deviation": null,
            "days": 0,
            "value": null,
            "status": "insufficient",
            "delta": null,
            "label": "呼吸数"
          },
          "oxygenAvg": {
            "average": 98.13342352092351,
            "deviation": 0.1268633142231448,
            "days": 4,
            "value": 98.16279069767442,
            "status": "usual",
            "delta": 0.029367176750909607,
            "label": "血中酸素"
          }
        },
        "confidence": "medium",
        "baselineWindowDays": 28
      },
      "weight": 55.7,
      "bodyFat": 11.7,
      "activeCalories": 319.0,
      "heartRateAvg": 62.95,
      "sleepMinutes": 7.0,
      "steps": 7290.0,
      "sleepEfficiency": 95.45,
      "deepSleepMinutes": 1.92,
      "remSleepMinutes": 0.83,
      "walkingMinutes": null,
      "exerciseMinutes": null,
      "restingHeartRate": 48.0,
      "hrv": null,
      "respiratoryRate": null,
      "oxygenAvg": 98.16,
      "comparisons": {
        "weight": {
          "previousDelta": -0.2,
          "avg7": 56.35,
          "avg7Delta": -0.65
        },
        "bodyFat": {
          "previousDelta": 0.6,
          "avg7": 12.63,
          "avg7Delta": -0.93
        },
        "activeCalories": {
          "previousDelta": -280.45,
          "avg7": 315.61,
          "avg7Delta": 3.39
        },
        "heartRateAvg": {
          "previousDelta": -1.61,
          "avg7": 62.77,
          "avg7Delta": 0.18
        },
        "sleepMinutes": {
          "previousDelta": -0.92,
          "avg7": 7.82,
          "avg7Delta": -0.82
        },
        "steps": {
          "previousDelta": -1655.0,
          "avg7": 6205.86,
          "avg7Delta": 1084.14
        },
        "sleepEfficiency": {
          "previousDelta": -1.49,
          "avg7": 93.79,
          "avg7Delta": 1.66
        },
        "deepSleepMinutes": {
          "previousDelta": 0.0,
          "avg7": 1.82,
          "avg7Delta": 0.1
        },
        "remSleepMinutes": {
          "previousDelta": -0.67,
          "avg7": 2.01,
          "avg7Delta": -1.18
        },
        "walkingMinutes": {
          "previousDelta": null,
          "avg7": 0.32,
          "avg7Delta": null
        },
        "exerciseMinutes": {
          "previousDelta": null,
          "avg7": 0.65,
          "avg7Delta": null
        },
        "restingHeartRate": {
          "previousDelta": -1.0,
          "avg7": 50.71,
          "avg7Delta": -2.71
        },
        "hrv": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "respiratoryRate": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "oxygenAvg": {
          "previousDelta": 0.23,
          "avg7": 98.12,
          "avg7Delta": 0.04
        }
      }
    },
    {
      "date": "2026-06-16",
      "sourceExportedAt": "2026-07-11T11:27:24.032709Z",
      "sourceReceivedAt": "2026-07-11T11:27:24.691Z",
      "coach": {
        "date": "2026-06-16",
        "recoveryScore": 83,
        "recoveryBand": "high",
        "sleep": {
          "score": 98,
          "durationMinutes": 500.0,
          "efficiency": 93.9,
          "deepMinutes": 115.0,
          "remMinutes": 120.0,
          "awakeMinutes": 52.516666666666666,
          "availableFactors": 4
        },
        "activityLoad": {
          "score": 71,
          "availableFactors": [
            "activeCalories",
            "exerciseMinutes",
            "steps"
          ]
        },
        "targetLoad": [
          60,
          80
        ],
        "sleepBankMinutes": 45,
        "tonightSleepNeedMinutes": 450,
        "headline": "回復状態は良好。普段通りか、少し強度を上げられる日です。",
        "warnings": [],
        "positives": [
          "睡眠スコア 98",
          "安静時心拍が通常より低い"
        ],
        "actions": [
          "運動は普段通りでOK。活動負荷は目安範囲内を狙う。",
          "今夜の睡眠目安は7h30m。就寝前30分は光と刺激を抑える。"
        ],
        "monitor": {
          "hrv": {
            "average": null,
            "deviation": null,
            "days": 0,
            "value": null,
            "status": "insufficient",
            "delta": null,
            "label": "HRV"
          },
          "restingHeartRate": {
            "average": 49.6,
            "deviation": 1.019803902718557,
            "days": 5,
            "value": 47.0,
            "status": "below",
            "delta": -2.6000000000000014,
            "label": "安静時心拍"
          },
          "respiratoryRate": {
            "average": null,
            "deviation": null,
            "days": 0,
            "value": null,
            "status": "insufficient",
            "delta": null,
            "label": "呼吸数"
          },
          "oxygenAvg": {
            "average": 98.1392969562737,
            "deviation": 0.11407641898216869,
            "days": 5,
            "value": 97.81395348837209,
            "status": "usual",
            "delta": -0.32534346790160384,
            "label": "血中酸素"
          }
        },
        "confidence": "medium",
        "baselineWindowDays": 28
      },
      "weight": 55.9,
      "bodyFat": 11.6,
      "activeCalories": 565.99,
      "heartRateAvg": 61.01,
      "sleepMinutes": 8.33,
      "steps": 7964.0,
      "sleepEfficiency": 93.89,
      "deepSleepMinutes": 1.92,
      "remSleepMinutes": 2.0,
      "walkingMinutes": 0.26,
      "exerciseMinutes": 0.99,
      "restingHeartRate": 47.0,
      "hrv": null,
      "respiratoryRate": null,
      "oxygenAvg": 97.81,
      "comparisons": {
        "weight": {
          "previousDelta": 0.2,
          "avg7": 56.22,
          "avg7Delta": -0.32
        },
        "bodyFat": {
          "previousDelta": -0.1,
          "avg7": 12.44,
          "avg7Delta": -0.84
        },
        "activeCalories": {
          "previousDelta": 246.99,
          "avg7": 352.9,
          "avg7Delta": 213.09
        },
        "heartRateAvg": {
          "previousDelta": -1.94,
          "avg7": 63.01,
          "avg7Delta": -2.0
        },
        "sleepMinutes": {
          "previousDelta": 1.33,
          "avg7": 7.68,
          "avg7Delta": 0.65
        },
        "steps": {
          "previousDelta": 674.0,
          "avg7": 7018.86,
          "avg7Delta": 945.14
        },
        "sleepEfficiency": {
          "previousDelta": -1.56,
          "avg7": 94.07,
          "avg7Delta": -0.18
        },
        "deepSleepMinutes": {
          "previousDelta": 0.0,
          "avg7": 1.84,
          "avg7Delta": 0.08
        },
        "remSleepMinutes": {
          "previousDelta": 1.17,
          "avg7": 1.81,
          "avg7Delta": 0.19
        },
        "walkingMinutes": {
          "previousDelta": null,
          "avg7": 0.32,
          "avg7Delta": -0.06
        },
        "exerciseMinutes": {
          "previousDelta": null,
          "avg7": 0.65,
          "avg7Delta": 0.34
        },
        "restingHeartRate": {
          "previousDelta": -1.0,
          "avg7": 50.86,
          "avg7Delta": -3.86
        },
        "hrv": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "respiratoryRate": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "oxygenAvg": {
          "previousDelta": -0.35,
          "avg7": 98.13,
          "avg7Delta": -0.32
        }
      }
    },
    {
      "date": "2026-06-17",
      "sourceExportedAt": "2026-07-16T21:31:10.738599Z",
      "sourceReceivedAt": "2026-07-16T21:31:11.147Z",
      "coach": {
        "date": "2026-06-17",
        "recoveryScore": null,
        "recoveryBand": "unknown",
        "sleep": {
          "score": null,
          "durationMinutes": null,
          "efficiency": null,
          "deepMinutes": null,
          "remMinutes": null,
          "awakeMinutes": null,
          "availableFactors": 0
        },
        "activityLoad": {
          "score": null,
          "availableFactors": []
        },
        "targetLoad": [
          40,
          65
        ],
        "sleepBankMinutes": null,
        "tonightSleepNeedMinutes": 450,
        "headline": "回復度は較正中。今日は睡眠と活動量を中心に判断します。",
        "warnings": [],
        "positives": [],
        "actions": [
          "運動は普段通りでOK。活動負荷は目安範囲内を狙う。",
          "今夜の睡眠目安は7h30m。就寝前30分は光と刺激を抑える。"
        ],
        "monitor": {
          "hrv": {
            "average": null,
            "deviation": null,
            "days": 0,
            "value": null,
            "status": "insufficient",
            "delta": null,
            "label": "HRV"
          },
          "restingHeartRate": {
            "average": null,
            "deviation": null,
            "days": 0,
            "value": 48.0,
            "status": "insufficient",
            "delta": null,
            "label": "安静時心拍"
          },
          "respiratoryRate": {
            "average": null,
            "deviation": null,
            "days": 0,
            "value": null,
            "status": "insufficient",
            "delta": null,
            "label": "呼吸数"
          },
          "oxygenAvg": {
            "average": null,
            "deviation": null,
            "days": 0,
            "value": 98.29032258064517,
            "status": "insufficient",
            "delta": null,
            "label": "血中酸素"
          }
        },
        "confidence": "low",
        "baselineWindowDays": 28
      },
      "weight": 56.1,
      "bodyFat": 11.3,
      "activeCalories": 222.25,
      "heartRateAvg": 62.62,
      "sleepMinutes": null,
      "steps": 5506.0,
      "sleepEfficiency": null,
      "deepSleepMinutes": null,
      "remSleepMinutes": null,
      "walkingMinutes": 0.27,
      "exerciseMinutes": 0.27,
      "restingHeartRate": 48.0,
      "hrv": null,
      "respiratoryRate": null,
      "oxygenAvg": 98.29,
      "comparisons": {
        "weight": {
          "previousDelta": 0.2,
          "avg7": 56.04,
          "avg7Delta": 0.06
        },
        "bodyFat": {
          "previousDelta": -0.3,
          "avg7": 12.18,
          "avg7Delta": -0.88
        },
        "activeCalories": {
          "previousDelta": -343.74,
          "avg7": 352.72,
          "avg7Delta": -130.47
        },
        "heartRateAvg": {
          "previousDelta": 1.61,
          "avg7": 62.1,
          "avg7Delta": 0.52
        },
        "sleepMinutes": {
          "previousDelta": null,
          "avg7": 7.66,
          "avg7Delta": null
        },
        "steps": {
          "previousDelta": -2458.0,
          "avg7": 6617.29,
          "avg7Delta": -1111.29
        },
        "sleepEfficiency": {
          "previousDelta": null,
          "avg7": 94.27,
          "avg7Delta": null
        },
        "deepSleepMinutes": {
          "previousDelta": null,
          "avg7": 1.86,
          "avg7Delta": null
        },
        "remSleepMinutes": {
          "previousDelta": null,
          "avg7": 1.81,
          "avg7Delta": null
        },
        "walkingMinutes": {
          "previousDelta": 0.01,
          "avg7": 0.29,
          "avg7Delta": -0.02
        },
        "exerciseMinutes": {
          "previousDelta": -0.72,
          "avg7": 0.74,
          "avg7Delta": -0.47
        },
        "restingHeartRate": {
          "previousDelta": 1.0,
          "avg7": 49.29,
          "avg7Delta": -1.29
        },
        "hrv": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "respiratoryRate": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "oxygenAvg": {
          "previousDelta": 0.48,
          "avg7": 98.08,
          "avg7Delta": 0.21
        }
      }
    },
    {
      "date": "2026-06-18",
      "sourceExportedAt": "2026-07-16T21:31:10.738599Z",
      "sourceReceivedAt": "2026-07-16T21:31:11.147Z",
      "coach": {
        "date": "2026-06-18",
        "recoveryScore": null,
        "recoveryBand": "unknown",
        "sleep": {
          "score": 88,
          "durationMinutes": 355.0,
          "efficiency": 95.3,
          "deepMinutes": 60.0,
          "remMinutes": 95.0,
          "awakeMinutes": 32.5,
          "availableFactors": 4
        },
        "activityLoad": {
          "score": 86,
          "availableFactors": [
            "activeCalories",
            "exerciseMinutes",
            "steps"
          ]
        },
        "targetLoad": [
          40,
          65
        ],
        "sleepBankMinutes": null,
        "tonightSleepNeedMinutes": 470,
        "headline": "回復度は較正中。今日は睡眠と活動量を中心に判断します。",
        "warnings": [],
        "positives": [
          "睡眠スコア 88"
        ],
        "actions": [
          "今日の負荷は十分。追加の高強度運動は不要です。",
          "今夜の睡眠目安は7h50m。就寝前30分は光と刺激を抑える。"
        ],
        "monitor": {
          "hrv": {
            "average": null,
            "deviation": null,
            "days": 0,
            "value": null,
            "status": "insufficient",
            "delta": null,
            "label": "HRV"
          },
          "restingHeartRate": {
            "average": 48.0,
            "deviation": 0,
            "days": 1,
            "value": 47.0,
            "status": "insufficient",
            "delta": -1.0,
            "label": "安静時心拍"
          },
          "respiratoryRate": {
            "average": null,
            "deviation": null,
            "days": 0,
            "value": null,
            "status": "insufficient",
            "delta": null,
            "label": "呼吸数"
          },
          "oxygenAvg": {
            "average": 98.29032258064517,
            "deviation": 0,
            "days": 1,
            "value": 98.0,
            "status": "insufficient",
            "delta": -0.29032258064516725,
            "label": "血中酸素"
          }
        },
        "confidence": "low",
        "baselineWindowDays": 28
      },
      "weight": 55.6,
      "bodyFat": 10.5,
      "activeCalories": 433.78,
      "heartRateAvg": 59.22,
      "sleepMinutes": 5.92,
      "steps": 5060.0,
      "sleepEfficiency": 95.3,
      "deepSleepMinutes": 1.0,
      "remSleepMinutes": 1.58,
      "walkingMinutes": 0.32,
      "exerciseMinutes": 0.97,
      "restingHeartRate": 47.0,
      "hrv": null,
      "respiratoryRate": null,
      "oxygenAvg": 98.0,
      "comparisons": {
        "weight": {
          "previousDelta": -0.5,
          "avg7": 56.04,
          "avg7Delta": -0.44
        },
        "bodyFat": {
          "previousDelta": -0.8,
          "avg7": 11.68,
          "avg7Delta": -1.18
        },
        "activeCalories": {
          "previousDelta": 211.53,
          "avg7": 348.84,
          "avg7Delta": 84.94
        },
        "heartRateAvg": {
          "previousDelta": -3.4,
          "avg7": 61.27,
          "avg7Delta": -2.05
        },
        "sleepMinutes": {
          "previousDelta": null,
          "avg7": 7.65,
          "avg7Delta": -1.73
        },
        "steps": {
          "previousDelta": -446.0,
          "avg7": 6458.43,
          "avg7Delta": -1398.43
        },
        "sleepEfficiency": {
          "previousDelta": null,
          "avg7": 93.97,
          "avg7Delta": 1.33
        },
        "deepSleepMinutes": {
          "previousDelta": null,
          "avg7": 1.88,
          "avg7Delta": -0.88
        },
        "remSleepMinutes": {
          "previousDelta": null,
          "avg7": 1.62,
          "avg7Delta": -0.04
        },
        "walkingMinutes": {
          "previousDelta": 0.05,
          "avg7": 0.29,
          "avg7Delta": 0.03
        },
        "exerciseMinutes": {
          "previousDelta": 0.7,
          "avg7": 0.73,
          "avg7Delta": 0.24
        },
        "restingHeartRate": {
          "previousDelta": -1.0,
          "avg7": 49.0,
          "avg7Delta": -2.0
        },
        "hrv": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "respiratoryRate": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "oxygenAvg": {
          "previousDelta": -0.29,
          "avg7": 98.11,
          "avg7Delta": -0.11
        }
      }
    },
    {
      "date": "2026-06-19",
      "sourceExportedAt": "2026-07-16T21:31:10.738599Z",
      "sourceReceivedAt": "2026-07-16T21:31:11.147Z",
      "coach": {
        "date": "2026-06-19",
        "recoveryScore": null,
        "recoveryBand": "unknown",
        "sleep": {
          "score": 98,
          "durationMinutes": 520.0,
          "efficiency": 94.1,
          "deepMinutes": 110.0,
          "remMinutes": 115.0,
          "awakeMinutes": 52.5,
          "availableFactors": 4
        },
        "activityLoad": {
          "score": 49,
          "availableFactors": [
            "activeCalories",
            "exerciseMinutes",
            "steps"
          ]
        },
        "targetLoad": [
          40,
          65
        ],
        "sleepBankMinutes": null,
        "tonightSleepNeedMinutes": 450,
        "headline": "回復度は較正中。今日は睡眠と活動量を中心に判断します。",
        "warnings": [],
        "positives": [
          "睡眠スコア 98"
        ],
        "actions": [
          "運動は普段通りでOK。活動負荷は目安範囲内を狙う。",
          "今夜の睡眠目安は7h30m。就寝前30分は光と刺激を抑える。"
        ],
        "monitor": {
          "hrv": {
            "average": null,
            "deviation": null,
            "days": 0,
            "value": null,
            "status": "insufficient",
            "delta": null,
            "label": "HRV"
          },
          "restingHeartRate": {
            "average": 47.5,
            "deviation": 0.5,
            "days": 2,
            "value": 51.0,
            "status": "insufficient",
            "delta": 3.5,
            "label": "安静時心拍"
          },
          "respiratoryRate": {
            "average": null,
            "deviation": null,
            "days": 0,
            "value": null,
            "status": "insufficient",
            "delta": null,
            "label": "呼吸数"
          },
          "oxygenAvg": {
            "average": 98.14516129032259,
            "deviation": 0.14516129032258362,
            "days": 2,
            "value": 98.06521739130434,
            "status": "insufficient",
            "delta": -0.07994389901824661,
            "label": "血中酸素"
          }
        },
        "confidence": "low",
        "baselineWindowDays": 28
      },
      "weight": 56.4,
      "bodyFat": 11.5,
      "activeCalories": 332.16,
      "heartRateAvg": 64.29,
      "sleepMinutes": 8.67,
      "steps": 8632.0,
      "sleepEfficiency": 94.12,
      "deepSleepMinutes": 1.83,
      "remSleepMinutes": 1.92,
      "walkingMinutes": 0.3,
      "exerciseMinutes": 0.3,
      "restingHeartRate": 51.0,
      "hrv": null,
      "respiratoryRate": null,
      "oxygenAvg": 98.07,
      "comparisons": {
        "weight": {
          "previousDelta": 0.8,
          "avg7": 55.97,
          "avg7Delta": 0.43
        },
        "bodyFat": {
          "previousDelta": 1.0,
          "avg7": 11.48,
          "avg7Delta": 0.02
        },
        "activeCalories": {
          "previousDelta": -101.62,
          "avg7": 409.38,
          "avg7Delta": -77.22
        },
        "heartRateAvg": {
          "previousDelta": 5.07,
          "avg7": 62.65,
          "avg7Delta": 1.64
        },
        "sleepMinutes": {
          "previousDelta": 2.75,
          "avg7": 7.36,
          "avg7Delta": 1.31
        },
        "steps": {
          "previousDelta": 3572.0,
          "avg7": 7140.0,
          "avg7Delta": 1492.0
        },
        "sleepEfficiency": {
          "previousDelta": -1.18,
          "avg7": 94.19,
          "avg7Delta": -0.07
        },
        "deepSleepMinutes": {
          "previousDelta": 0.83,
          "avg7": 1.74,
          "avg7Delta": 0.09
        },
        "remSleepMinutes": {
          "previousDelta": 0.34,
          "avg7": 1.61,
          "avg7Delta": 0.31
        },
        "walkingMinutes": {
          "previousDelta": -0.02,
          "avg7": 0.29,
          "avg7Delta": 0.01
        },
        "exerciseMinutes": {
          "previousDelta": -0.67,
          "avg7": 0.78,
          "avg7Delta": -0.48
        },
        "restingHeartRate": {
          "previousDelta": 4.0,
          "avg7": 48.43,
          "avg7Delta": 2.57
        },
        "hrv": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "respiratoryRate": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "oxygenAvg": {
          "previousDelta": 0.07,
          "avg7": 98.07,
          "avg7Delta": 0.0
        }
      }
    },
    {
      "date": "2026-06-20",
      "sourceExportedAt": "2026-07-16T21:31:10.738599Z",
      "sourceReceivedAt": "2026-07-16T21:31:11.147Z",
      "coach": {
        "date": "2026-06-20",
        "recoveryScore": 79,
        "recoveryBand": "high",
        "sleep": {
          "score": 97,
          "durationMinutes": 445.0,
          "efficiency": 95.2,
          "deepMinutes": 95.0,
          "remMinutes": 75.0,
          "awakeMinutes": 40.0,
          "availableFactors": 4
        },
        "activityLoad": {
          "score": 43,
          "availableFactors": [
            "activeCalories",
            "steps"
          ]
        },
        "targetLoad": [
          60,
          80
        ],
        "sleepBankMinutes": -30,
        "tonightSleepNeedMinutes": 460,
        "headline": "回復状態は良好。普段通りか、少し強度を上げられる日です。",
        "warnings": [],
        "positives": [
          "睡眠スコア 97"
        ],
        "actions": [
          "余力があれば30分前後の散歩または中強度の運動で、活動負荷を目安範囲へ近づける。",
          "今夜の睡眠目安は7h40m。就寝前30分は光と刺激を抑える。"
        ],
        "monitor": {
          "hrv": {
            "average": null,
            "deviation": null,
            "days": 0,
            "value": null,
            "status": "insufficient",
            "delta": null,
            "label": "HRV"
          },
          "restingHeartRate": {
            "average": 48.666666666666664,
            "deviation": 1.699673171197595,
            "days": 3,
            "value": 48.0,
            "status": "usual",
            "delta": -0.6666666666666643,
            "label": "安静時心拍"
          },
          "respiratoryRate": {
            "average": null,
            "deviation": null,
            "days": 0,
            "value": null,
            "status": "insufficient",
            "delta": null,
            "label": "呼吸数"
          },
          "oxygenAvg": {
            "average": 98.11851332398317,
            "deviation": 0.12437079651374996,
            "days": 3,
            "value": 98.17021276595744,
            "status": "usual",
            "delta": 0.05169944197427867,
            "label": "血中酸素"
          }
        },
        "confidence": "medium",
        "baselineWindowDays": 28
      },
      "weight": 56.4,
      "bodyFat": 10.9,
      "activeCalories": 250.0,
      "heartRateAvg": 59.1,
      "sleepMinutes": 7.42,
      "steps": 6398.0,
      "sleepEfficiency": 95.19,
      "deepSleepMinutes": 1.58,
      "remSleepMinutes": 1.25,
      "walkingMinutes": null,
      "exerciseMinutes": null,
      "restingHeartRate": 48.0,
      "hrv": null,
      "respiratoryRate": null,
      "oxygenAvg": 98.17,
      "comparisons": {
        "weight": {
          "previousDelta": 0.0,
          "avg7": 55.93,
          "avg7Delta": 0.47
        },
        "bodyFat": {
          "previousDelta": -0.6,
          "avg7": 11.28,
          "avg7Delta": -0.38
        },
        "activeCalories": {
          "previousDelta": -82.16,
          "avg7": 422.83,
          "avg7Delta": -172.83
        },
        "heartRateAvg": {
          "previousDelta": -5.19,
          "avg7": 62.69,
          "avg7Delta": -3.59
        },
        "sleepMinutes": {
          "previousDelta": -1.25,
          "avg7": 7.5,
          "avg7Delta": -0.08
        },
        "steps": {
          "previousDelta": -2234.0,
          "avg7": 7631.0,
          "avg7Delta": -1233.0
        },
        "sleepEfficiency": {
          "previousDelta": 1.07,
          "avg7": 94.37,
          "avg7Delta": 0.82
        },
        "deepSleepMinutes": {
          "previousDelta": -0.25,
          "avg7": 1.7,
          "avg7Delta": -0.12
        },
        "remSleepMinutes": {
          "previousDelta": -0.67,
          "avg7": 1.58,
          "avg7Delta": -0.33
        },
        "walkingMinutes": {
          "previousDelta": null,
          "avg7": 0.29,
          "avg7Delta": null
        },
        "exerciseMinutes": {
          "previousDelta": null,
          "avg7": 0.7,
          "avg7Delta": null
        },
        "restingHeartRate": {
          "previousDelta": -3.0,
          "avg7": 48.57,
          "avg7Delta": -0.57
        },
        "hrv": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "respiratoryRate": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "oxygenAvg": {
          "previousDelta": 0.1,
          "avg7": 98.06,
          "avg7Delta": 0.11
        }
      }
    },
    {
      "date": "2026-06-21",
      "sourceExportedAt": "2026-07-21T00:27:20.917614Z",
      "sourceReceivedAt": "2026-07-21T00:27:21.575Z",
      "coach": {
        "date": "2026-06-21",
        "recoveryScore": null,
        "recoveryBand": "unknown",
        "sleep": {
          "score": null,
          "durationMinutes": null,
          "efficiency": null,
          "deepMinutes": null,
          "remMinutes": null,
          "awakeMinutes": null,
          "availableFactors": 0
        },
        "activityLoad": {
          "score": null,
          "availableFactors": []
        },
        "targetLoad": [
          40,
          65
        ],
        "sleepBankMinutes": null,
        "tonightSleepNeedMinutes": 450,
        "headline": "回復度は較正中。今日は睡眠と活動量を中心に判断します。",
        "warnings": [],
        "positives": [],
        "actions": [
          "運動は普段通りでOK。活動負荷は目安範囲内を狙う。",
          "今夜の睡眠目安は7h30m。就寝前30分は光と刺激を抑える。"
        ],
        "monitor": {
          "hrv": {
            "average": null,
            "deviation": null,
            "days": 0,
            "value": null,
            "status": "insufficient",
            "delta": null,
            "label": "HRV"
          },
          "restingHeartRate": {
            "average": null,
            "deviation": null,
            "days": 0,
            "value": 45.0,
            "status": "insufficient",
            "delta": null,
            "label": "安静時心拍"
          },
          "respiratoryRate": {
            "average": null,
            "deviation": null,
            "days": 0,
            "value": null,
            "status": "insufficient",
            "delta": null,
            "label": "呼吸数"
          },
          "oxygenAvg": {
            "average": null,
            "deviation": null,
            "days": 0,
            "value": 98.43478260869566,
            "status": "insufficient",
            "delta": null,
            "label": "血中酸素"
          }
        },
        "confidence": "low",
        "baselineWindowDays": 28
      },
      "weight": null,
      "bodyFat": null,
      "activeCalories": 525.0,
      "heartRateAvg": 68.67,
      "sleepMinutes": null,
      "steps": 6489.0,
      "sleepEfficiency": null,
      "deepSleepMinutes": null,
      "remSleepMinutes": null,
      "walkingMinutes": null,
      "exerciseMinutes": 0.76,
      "restingHeartRate": 45.0,
      "hrv": null,
      "respiratoryRate": null,
      "oxygenAvg": 98.43,
      "comparisons": {
        "weight": {
          "previousDelta": null,
          "avg7": 56.0,
          "avg7Delta": null
        },
        "bodyFat": {
          "previousDelta": null,
          "avg7": 11.23,
          "avg7Delta": null
        },
        "activeCalories": {
          "previousDelta": 275.0,
          "avg7": 388.95,
          "avg7Delta": 136.05
        },
        "heartRateAvg": {
          "previousDelta": 9.57,
          "avg7": 61.96,
          "avg7Delta": 6.71
        },
        "sleepMinutes": {
          "previousDelta": null,
          "avg7": 7.54,
          "avg7Delta": null
        },
        "steps": {
          "previousDelta": 91.0,
          "avg7": 7113.57,
          "avg7Delta": -624.57
        },
        "sleepEfficiency": {
          "previousDelta": null,
          "avg7": 95.15,
          "avg7Delta": null
        },
        "deepSleepMinutes": {
          "previousDelta": null,
          "avg7": 1.7,
          "avg7Delta": null
        },
        "remSleepMinutes": {
          "previousDelta": null,
          "avg7": 1.51,
          "avg7Delta": null
        },
        "walkingMinutes": {
          "previousDelta": null,
          "avg7": 0.3,
          "avg7Delta": null
        },
        "exerciseMinutes": {
          "previousDelta": null,
          "avg7": 0.72,
          "avg7Delta": 0.04
        },
        "restingHeartRate": {
          "previousDelta": -3.0,
          "avg7": 48.29,
          "avg7Delta": -3.29
        },
        "hrv": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "respiratoryRate": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "oxygenAvg": {
          "previousDelta": 0.26,
          "avg7": 98.06,
          "avg7Delta": 0.37
        }
      }
    },
    {
      "date": "2026-06-22",
      "sourceExportedAt": "2026-07-21T00:27:20.917614Z",
      "sourceReceivedAt": "2026-07-21T00:27:21.575Z",
      "coach": {
        "date": "2026-06-22",
        "recoveryScore": null,
        "recoveryBand": "unknown",
        "sleep": {
          "score": 93,
          "durationMinutes": 450.0,
          "efficiency": 87.4,
          "deepMinutes": 90.0,
          "remMinutes": 97.5,
          "awakeMinutes": 87.5,
          "availableFactors": 4
        },
        "activityLoad": {
          "score": 38,
          "availableFactors": [
            "activeCalories",
            "exerciseMinutes",
            "steps"
          ]
        },
        "targetLoad": [
          40,
          65
        ],
        "sleepBankMinutes": null,
        "tonightSleepNeedMinutes": 450,
        "headline": "回復度は較正中。今日は睡眠と活動量を中心に判断します。",
        "warnings": [],
        "positives": [
          "睡眠スコア 93"
        ],
        "actions": [
          "余力があれば30分前後の散歩または中強度の運動で、活動負荷を目安範囲へ近づける。",
          "今夜の睡眠目安は7h30m。就寝前30分は光と刺激を抑える。"
        ],
        "monitor": {
          "hrv": {
            "average": null,
            "deviation": null,
            "days": 0,
            "value": null,
            "status": "insufficient",
            "delta": null,
            "label": "HRV"
          },
          "restingHeartRate": {
            "average": 45.0,
            "deviation": 0,
            "days": 1,
            "value": 45.0,
            "status": "insufficient",
            "delta": 0.0,
            "label": "安静時心拍"
          },
          "respiratoryRate": {
            "average": null,
            "deviation": null,
            "days": 0,
            "value": null,
            "status": "insufficient",
            "delta": null,
            "label": "呼吸数"
          },
          "oxygenAvg": {
            "average": 98.43478260869566,
            "deviation": 0,
            "days": 1,
            "value": 98.30232558139535,
            "status": "insufficient",
            "delta": -0.13245702730030473,
            "label": "血中酸素"
          }
        },
        "confidence": "low",
        "baselineWindowDays": 28
      },
      "weight": 57.0,
      "bodyFat": 12.3,
      "activeCalories": 340.03,
      "heartRateAvg": 59.33,
      "sleepMinutes": 7.5,
      "steps": 8119.0,
      "sleepEfficiency": 87.38,
      "deepSleepMinutes": 1.5,
      "remSleepMinutes": 1.62,
      "walkingMinutes": 0.4,
      "exerciseMinutes": 0.4,
      "restingHeartRate": 45.0,
      "hrv": null,
      "respiratoryRate": null,
      "oxygenAvg": 98.3,
      "comparisons": {
        "weight": {
          "previousDelta": null,
          "avg7": 56.02,
          "avg7Delta": 0.98
        },
        "bodyFat": {
          "previousDelta": null,
          "avg7": 11.25,
          "avg7Delta": 1.05
        },
        "activeCalories": {
          "previousDelta": -184.97,
          "avg7": 378.31,
          "avg7Delta": -38.28
        },
        "heartRateAvg": {
          "previousDelta": -9.34,
          "avg7": 62.55,
          "avg7Delta": -3.22
        },
        "sleepMinutes": {
          "previousDelta": null,
          "avg7": 7.47,
          "avg7Delta": 0.03
        },
        "steps": {
          "previousDelta": 1630.0,
          "avg7": 6762.71,
          "avg7Delta": 1356.29
        },
        "sleepEfficiency": {
          "previousDelta": null,
          "avg7": 94.79,
          "avg7Delta": -7.41
        },
        "deepSleepMinutes": {
          "previousDelta": null,
          "avg7": 1.65,
          "avg7Delta": -0.15
        },
        "remSleepMinutes": {
          "previousDelta": null,
          "avg7": 1.52,
          "avg7Delta": 0.1
        },
        "walkingMinutes": {
          "previousDelta": null,
          "avg7": 0.29,
          "avg7Delta": 0.11
        },
        "exerciseMinutes": {
          "previousDelta": -0.36,
          "avg7": 0.66,
          "avg7Delta": -0.26
        },
        "restingHeartRate": {
          "previousDelta": 0.0,
          "avg7": 47.71,
          "avg7Delta": -2.71
        },
        "hrv": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "respiratoryRate": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "oxygenAvg": {
          "previousDelta": -0.13,
          "avg7": 98.13,
          "avg7Delta": 0.17
        }
      }
    },
    {
      "date": "2026-06-23",
      "sourceExportedAt": "2026-07-21T00:27:20.917614Z",
      "sourceReceivedAt": "2026-07-21T00:27:21.575Z",
      "coach": {
        "date": "2026-06-23",
        "recoveryScore": null,
        "recoveryBand": "unknown",
        "sleep": {
          "score": 91,
          "durationMinutes": 440.0,
          "efficiency": 90.7,
          "deepMinutes": 140.0,
          "remMinutes": 90.0,
          "awakeMinutes": 60.0,
          "availableFactors": 4
        },
        "activityLoad": {
          "score": 63,
          "availableFactors": [
            "activeCalories",
            "exerciseMinutes",
            "steps"
          ]
        },
        "targetLoad": [
          40,
          65
        ],
        "sleepBankMinutes": null,
        "tonightSleepNeedMinutes": 450,
        "headline": "回復度は較正中。今日は睡眠と活動量を中心に判断します。",
        "warnings": [],
        "positives": [
          "睡眠スコア 91"
        ],
        "actions": [
          "運動は普段通りでOK。活動負荷は目安範囲内を狙う。",
          "今夜の睡眠目安は7h30m。就寝前30分は光と刺激を抑える。"
        ],
        "monitor": {
          "hrv": {
            "average": null,
            "deviation": null,
            "days": 0,
            "value": null,
            "status": "insufficient",
            "delta": null,
            "label": "HRV"
          },
          "restingHeartRate": {
            "average": 45.0,
            "deviation": 0.0,
            "days": 2,
            "value": 45.0,
            "status": "insufficient",
            "delta": 0.0,
            "label": "安静時心拍"
          },
          "respiratoryRate": {
            "average": null,
            "deviation": null,
            "days": 0,
            "value": null,
            "status": "insufficient",
            "delta": null,
            "label": "呼吸数"
          },
          "oxygenAvg": {
            "average": 98.36855409504551,
            "deviation": 0.06622851365015237,
            "days": 2,
            "value": 98.16279069767442,
            "status": "insufficient",
            "delta": -0.2057633973710864,
            "label": "血中酸素"
          }
        },
        "confidence": "low",
        "baselineWindowDays": 28
      },
      "weight": 56.8,
      "bodyFat": 12.4,
      "activeCalories": 471.27,
      "heartRateAvg": 61.66,
      "sleepMinutes": 7.33,
      "steps": 10792.0,
      "sleepEfficiency": 90.72,
      "deepSleepMinutes": 2.33,
      "remSleepMinutes": 1.5,
      "walkingMinutes": 0.74,
      "exerciseMinutes": 0.74,
      "restingHeartRate": 45.0,
      "hrv": null,
      "respiratoryRate": null,
      "oxygenAvg": 98.16,
      "comparisons": {
        "weight": {
          "previousDelta": -0.2,
          "avg7": 56.23,
          "avg7Delta": 0.57
        },
        "bodyFat": {
          "previousDelta": 0.1,
          "avg7": 11.35,
          "avg7Delta": 1.05
        },
        "activeCalories": {
          "previousDelta": 131.24,
          "avg7": 381.32,
          "avg7Delta": 89.95
        },
        "heartRateAvg": {
          "previousDelta": 2.33,
          "avg7": 62.03,
          "avg7Delta": -0.37
        },
        "sleepMinutes": {
          "previousDelta": -0.17,
          "avg7": 7.57,
          "avg7Delta": -0.24
        },
        "steps": {
          "previousDelta": 2673.0,
          "avg7": 6881.14,
          "avg7Delta": 3910.86
        },
        "sleepEfficiency": {
          "previousDelta": 3.34,
          "avg7": 93.18,
          "avg7Delta": -2.46
        },
        "deepSleepMinutes": {
          "previousDelta": 0.83,
          "avg7": 1.57,
          "avg7Delta": 0.76
        },
        "remSleepMinutes": {
          "previousDelta": -0.12,
          "avg7": 1.67,
          "avg7Delta": -0.17
        },
        "walkingMinutes": {
          "previousDelta": 0.34,
          "avg7": 0.31,
          "avg7Delta": 0.43
        },
        "exerciseMinutes": {
          "previousDelta": 0.34,
          "avg7": 0.61,
          "avg7Delta": 0.13
        },
        "restingHeartRate": {
          "previousDelta": 0.0,
          "avg7": 47.29,
          "avg7Delta": -2.29
        },
        "hrv": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "respiratoryRate": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "oxygenAvg": {
          "previousDelta": -0.14,
          "avg7": 98.15,
          "avg7Delta": 0.01
        }
      }
    },
    {
      "date": "2026-06-24",
      "sourceExportedAt": "2026-07-21T00:27:20.917614Z",
      "sourceReceivedAt": "2026-07-21T00:27:21.575Z",
      "coach": {
        "date": "2026-06-24",
        "recoveryScore": 65,
        "recoveryBand": "moderate",
        "sleep": {
          "score": 92,
          "durationMinutes": 425.0,
          "efficiency": 92.4,
          "deepMinutes": 125.0,
          "remMinutes": 80.0,
          "awakeMinutes": 40.0,
          "availableFactors": 4
        },
        "activityLoad": {
          "score": 71,
          "availableFactors": [
            "activeCalories",
            "exerciseMinutes",
            "steps"
          ]
        },
        "targetLoad": [
          40,
          65
        ],
        "sleepBankMinutes": -35,
        "tonightSleepNeedMinutes": 462,
        "headline": "回復状態は中間。普段通りでよいものの、追い込みすぎには注意です。",
        "warnings": [
          "安静時心拍が通常より高い"
        ],
        "positives": [
          "睡眠スコア 92"
        ],
        "actions": [
          "今日の負荷は十分。追加の高強度運動は不要です。",
          "今夜の睡眠目安は7h42m。就寝前30分は光と刺激を抑える。"
        ],
        "monitor": {
          "hrv": {
            "average": null,
            "deviation": null,
            "days": 0,
            "value": null,
            "status": "insufficient",
            "delta": null,
            "label": "HRV"
          },
          "restingHeartRate": {
            "average": 45.0,
            "deviation": 0.0,
            "days": 3,
            "value": 50.0,
            "status": "above",
            "delta": 5.0,
            "label": "安静時心拍"
          },
          "respiratoryRate": {
            "average": null,
            "deviation": null,
            "days": 0,
            "value": null,
            "status": "insufficient",
            "delta": null,
            "label": "呼吸数"
          },
          "oxygenAvg": {
            "average": 98.2999662959218,
            "deviation": 0.11105276399443238,
            "days": 3,
            "value": 98.5,
            "status": "usual",
            "delta": 0.20003370407819432,
            "label": "血中酸素"
          }
        },
        "confidence": "medium",
        "baselineWindowDays": 28
      },
      "weight": 56.5,
      "bodyFat": 12.9,
      "activeCalories": 587.87,
      "heartRateAvg": 57.66,
      "sleepMinutes": 7.08,
      "steps": 6377.0,
      "sleepEfficiency": 92.39,
      "deepSleepMinutes": 2.08,
      "remSleepMinutes": 1.33,
      "walkingMinutes": 0.34,
      "exerciseMinutes": 1.3,
      "restingHeartRate": 50.0,
      "hrv": null,
      "respiratoryRate": null,
      "oxygenAvg": 98.5,
      "comparisons": {
        "weight": {
          "previousDelta": -0.3,
          "avg7": 56.38,
          "avg7Delta": 0.12
        },
        "bodyFat": {
          "previousDelta": 0.5,
          "avg7": 11.48,
          "avg7Delta": 1.42
        },
        "activeCalories": {
          "previousDelta": 116.6,
          "avg7": 367.78,
          "avg7Delta": 220.09
        },
        "heartRateAvg": {
          "previousDelta": -4.0,
          "avg7": 62.13,
          "avg7Delta": -4.47
        },
        "sleepMinutes": {
          "previousDelta": -0.25,
          "avg7": 7.37,
          "avg7Delta": -0.29
        },
        "steps": {
          "previousDelta": -4415.0,
          "avg7": 7285.14,
          "avg7Delta": -908.14
        },
        "sleepEfficiency": {
          "previousDelta": 1.67,
          "avg7": 92.54,
          "avg7Delta": -0.15
        },
        "deepSleepMinutes": {
          "previousDelta": -0.25,
          "avg7": 1.65,
          "avg7Delta": 0.43
        },
        "remSleepMinutes": {
          "previousDelta": -0.17,
          "avg7": 1.57,
          "avg7Delta": -0.24
        },
        "walkingMinutes": {
          "previousDelta": -0.4,
          "avg7": 0.41,
          "avg7Delta": -0.07
        },
        "exerciseMinutes": {
          "previousDelta": 0.56,
          "avg7": 0.57,
          "avg7Delta": 0.73
        },
        "restingHeartRate": {
          "previousDelta": 5.0,
          "avg7": 47.0,
          "avg7Delta": 3.0
        },
        "hrv": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "respiratoryRate": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "oxygenAvg": {
          "previousDelta": 0.34,
          "avg7": 98.2,
          "avg7Delta": 0.3
        }
      }
    },
    {
      "date": "2026-06-25",
      "sourceExportedAt": "2026-07-21T00:27:20.917614Z",
      "sourceReceivedAt": "2026-07-21T00:27:21.575Z",
      "coach": {
        "date": "2026-06-25",
        "recoveryScore": 66,
        "recoveryBand": "moderate",
        "sleep": {
          "score": 94,
          "durationMinutes": 615.0,
          "efficiency": 87.2,
          "deepMinutes": 125.0,
          "remMinutes": 160.0,
          "awakeMinutes": 105.0,
          "availableFactors": 4
        },
        "activityLoad": {
          "score": 17,
          "availableFactors": [
            "activeCalories",
            "steps"
          ]
        },
        "targetLoad": [
          40,
          65
        ],
        "sleepBankMinutes": 130,
        "tonightSleepNeedMinutes": 450,
        "headline": "回復状態は中間。普段通りでよいものの、追い込みすぎには注意です。",
        "warnings": [
          "安静時心拍が通常より高い"
        ],
        "positives": [
          "睡眠スコア 94"
        ],
        "actions": [
          "余力があれば30分前後の散歩または中強度の運動で、活動負荷を目安範囲へ近づける。",
          "今夜の睡眠目安は7h30m。就寝前30分は光と刺激を抑える。"
        ],
        "monitor": {
          "hrv": {
            "average": null,
            "deviation": null,
            "days": 0,
            "value": null,
            "status": "insufficient",
            "delta": null,
            "label": "HRV"
          },
          "restingHeartRate": {
            "average": 46.25,
            "deviation": 2.165063509461097,
            "days": 4,
            "value": 51.5,
            "status": "above",
            "delta": 5.25,
            "label": "安静時心拍"
          },
          "respiratoryRate": {
            "average": null,
            "deviation": null,
            "days": 0,
            "value": null,
            "status": "insufficient",
            "delta": null,
            "label": "呼吸数"
          },
          "oxygenAvg": {
            "average": 98.34997472194135,
            "deviation": 0.12942976980571338,
            "days": 4,
            "value": 98.5,
            "status": "usual",
            "delta": 0.1500252780586493,
            "label": "血中酸素"
          }
        },
        "confidence": "medium",
        "baselineWindowDays": 28
      },
      "weight": 56.4,
      "bodyFat": 12.3,
      "activeCalories": 127.0,
      "heartRateAvg": 58.47,
      "sleepMinutes": 10.25,
      "steps": 3715.0,
      "sleepEfficiency": 87.23,
      "deepSleepMinutes": 2.08,
      "remSleepMinutes": 2.67,
      "walkingMinutes": null,
      "exerciseMinutes": null,
      "restingHeartRate": 51.5,
      "hrv": null,
      "respiratoryRate": null,
      "oxygenAvg": 98.5,
      "comparisons": {
        "weight": {
          "previousDelta": -0.1,
          "avg7": 56.45,
          "avg7Delta": -0.05
        },
        "bodyFat": {
          "previousDelta": -0.6,
          "avg7": 11.75,
          "avg7Delta": 0.55
        },
        "activeCalories": {
          "previousDelta": -460.87,
          "avg7": 420.02,
          "avg7Delta": -293.02
        },
        "heartRateAvg": {
          "previousDelta": 0.81,
          "avg7": 61.42,
          "avg7Delta": -2.95
        },
        "sleepMinutes": {
          "previousDelta": 3.17,
          "avg7": 7.32,
          "avg7Delta": 2.93
        },
        "steps": {
          "previousDelta": -2662.0,
          "avg7": 7409.57,
          "avg7Delta": -3694.57
        },
        "sleepEfficiency": {
          "previousDelta": -5.16,
          "avg7": 92.52,
          "avg7Delta": -5.29
        },
        "deepSleepMinutes": {
          "previousDelta": 0.0,
          "avg7": 1.72,
          "avg7Delta": 0.36
        },
        "remSleepMinutes": {
          "previousDelta": 1.34,
          "avg7": 1.53,
          "avg7Delta": 1.14
        },
        "walkingMinutes": {
          "previousDelta": null,
          "avg7": 0.42,
          "avg7Delta": null
        },
        "exerciseMinutes": {
          "previousDelta": null,
          "avg7": 0.74,
          "avg7Delta": null
        },
        "restingHeartRate": {
          "previousDelta": 1.5,
          "avg7": 47.29,
          "avg7Delta": 4.21
        },
        "hrv": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "respiratoryRate": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "oxygenAvg": {
          "previousDelta": 0.0,
          "avg7": 98.23,
          "avg7Delta": 0.27
        }
      }
    },
    {
      "date": "2026-06-26",
      "sourceExportedAt": "2026-07-21T00:27:20.917614Z",
      "sourceReceivedAt": "2026-07-21T00:27:21.575Z",
      "coach": {
        "date": "2026-06-26",
        "recoveryScore": 83,
        "recoveryBand": "high",
        "sleep": {
          "score": 91,
          "durationMinutes": 420.0,
          "efficiency": 88.9,
          "deepMinutes": 100.0,
          "remMinutes": 67.5,
          "awakeMinutes": 65.0,
          "availableFactors": 4
        },
        "activityLoad": {
          "score": 57,
          "availableFactors": [
            "activeCalories",
            "exerciseMinutes",
            "steps"
          ]
        },
        "targetLoad": [
          60,
          80
        ],
        "sleepBankMinutes": 100,
        "tonightSleepNeedMinutes": 450,
        "headline": "回復状態は良好。普段通りか、少し強度を上げられる日です。",
        "warnings": [],
        "positives": [
          "睡眠スコア 91"
        ],
        "actions": [
          "余力があれば30分前後の散歩または中強度の運動で、活動負荷を目安範囲へ近づける。",
          "今夜の睡眠目安は7h30m。就寝前30分は光と刺激を抑える。"
        ],
        "monitor": {
          "hrv": {
            "average": null,
            "deviation": null,
            "days": 0,
            "value": null,
            "status": "insufficient",
            "delta": null,
            "label": "HRV"
          },
          "restingHeartRate": {
            "average": 47.3,
            "deviation": 2.85657137141714,
            "days": 5,
            "value": null,
            "status": "insufficient",
            "delta": null,
            "label": "安静時心拍"
          },
          "respiratoryRate": {
            "average": null,
            "deviation": null,
            "days": 0,
            "value": null,
            "status": "insufficient",
            "delta": null,
            "label": "呼吸数"
          },
          "oxygenAvg": {
            "average": 98.37997977755307,
            "deviation": 0.13039503709351682,
            "days": 5,
            "value": 98.32558139534883,
            "status": "usual",
            "delta": -0.05439838220424065,
            "label": "血中酸素"
          }
        },
        "confidence": "medium",
        "baselineWindowDays": 28
      },
      "weight": 56.6,
      "bodyFat": 12.5,
      "activeCalories": 496.0,
      "heartRateAvg": 62.38,
      "sleepMinutes": 7.0,
      "steps": 8070.0,
      "sleepEfficiency": 88.89,
      "deepSleepMinutes": 1.67,
      "remSleepMinutes": 1.12,
      "walkingMinutes": null,
      "exerciseMinutes": 0.83,
      "restingHeartRate": null,
      "hrv": null,
      "respiratoryRate": null,
      "oxygenAvg": 98.33,
      "comparisons": {
        "weight": {
          "previousDelta": 0.2,
          "avg7": 56.58,
          "avg7Delta": 0.02
        },
        "bodyFat": {
          "previousDelta": 0.2,
          "avg7": 12.05,
          "avg7Delta": 0.45
        },
        "activeCalories": {
          "previousDelta": 369.0,
          "avg7": 376.19,
          "avg7Delta": 119.81
        },
        "heartRateAvg": {
          "previousDelta": 3.91,
          "avg7": 61.31,
          "avg7Delta": 1.07
        },
        "sleepMinutes": {
          "previousDelta": -3.25,
          "avg7": 8.04,
          "avg7Delta": -1.04
        },
        "steps": {
          "previousDelta": 4355.0,
          "avg7": 7217.43,
          "avg7Delta": 852.57
        },
        "sleepEfficiency": {
          "previousDelta": 1.66,
          "avg7": 91.17,
          "avg7Delta": -2.28
        },
        "deepSleepMinutes": {
          "previousDelta": -0.41,
          "avg7": 1.9,
          "avg7Delta": -0.23
        },
        "remSleepMinutes": {
          "previousDelta": -1.55,
          "avg7": 1.71,
          "avg7Delta": -0.59
        },
        "walkingMinutes": {
          "previousDelta": null,
          "avg7": 0.45,
          "avg7Delta": null
        },
        "exerciseMinutes": {
          "previousDelta": null,
          "avg7": 0.7,
          "avg7Delta": 0.13
        },
        "restingHeartRate": {
          "previousDelta": null,
          "avg7": 47.93,
          "avg7Delta": null
        },
        "hrv": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "respiratoryRate": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "oxygenAvg": {
          "previousDelta": -0.17,
          "avg7": 98.3,
          "avg7Delta": 0.03
        }
      }
    },
    {
      "date": "2026-06-27",
      "sourceExportedAt": "2026-07-21T00:27:20.917614Z",
      "sourceReceivedAt": "2026-07-21T00:27:21.575Z",
      "coach": {
        "date": "2026-06-27",
        "recoveryScore": 65,
        "recoveryBand": "moderate",
        "sleep": {
          "score": null,
          "durationMinutes": null,
          "efficiency": null,
          "deepMinutes": null,
          "remMinutes": null,
          "awakeMinutes": null,
          "availableFactors": 0
        },
        "activityLoad": {
          "score": 41,
          "availableFactors": [
            "activeCalories",
            "steps"
          ]
        },
        "targetLoad": [
          40,
          65
        ],
        "sleepBankMinutes": 100,
        "tonightSleepNeedMinutes": 450,
        "headline": "回復状態は中間。普段通りでよいものの、追い込みすぎには注意です。",
        "warnings": [],
        "positives": [],
        "actions": [
          "運動は普段通りでOK。活動負荷は目安範囲内を狙う。",
          "今夜の睡眠目安は7h30m。就寝前30分は光と刺激を抑える。"
        ],
        "monitor": {
          "hrv": {
            "average": null,
            "deviation": null,
            "days": 0,
            "value": null,
            "status": "insufficient",
            "delta": null,
            "label": "HRV"
          },
          "restingHeartRate": {
            "average": 47.3,
            "deviation": 2.85657137141714,
            "days": 5,
            "value": 45.0,
            "status": "usual",
            "delta": -2.299999999999997,
            "label": "安静時心拍"
          },
          "respiratoryRate": {
            "average": null,
            "deviation": null,
            "days": 0,
            "value": null,
            "status": "insufficient",
            "delta": null,
            "label": "呼吸数"
          },
          "oxygenAvg": {
            "average": 98.37091338051904,
            "deviation": 0.12074788828275268,
            "days": 6,
            "value": 98.26190476190476,
            "status": "usual",
            "delta": -0.10900861861428268,
            "label": "血中酸素"
          }
        },
        "confidence": "medium",
        "baselineWindowDays": 28
      },
      "weight": 57.2,
      "bodyFat": 12.2,
      "activeCalories": 275.0,
      "heartRateAvg": 60.94,
      "sleepMinutes": null,
      "steps": 7917.0,
      "sleepEfficiency": null,
      "deepSleepMinutes": null,
      "remSleepMinutes": null,
      "walkingMinutes": null,
      "exerciseMinutes": null,
      "restingHeartRate": 45.0,
      "hrv": null,
      "respiratoryRate": null,
      "oxygenAvg": 98.26,
      "comparisons": {
        "weight": {
          "previousDelta": 0.6,
          "avg7": 56.62,
          "avg7Delta": 0.58
        },
        "bodyFat": {
          "previousDelta": -0.3,
          "avg7": 12.22,
          "avg7Delta": -0.02
        },
        "activeCalories": {
          "previousDelta": -221.0,
          "avg7": 399.6,
          "avg7Delta": -124.6
        },
        "heartRateAvg": {
          "previousDelta": -1.44,
          "avg7": 61.04,
          "avg7Delta": -0.1
        },
        "sleepMinutes": {
          "previousDelta": null,
          "avg7": 7.76,
          "avg7Delta": null
        },
        "steps": {
          "previousDelta": -153.0,
          "avg7": 7137.14,
          "avg7Delta": 779.86
        },
        "sleepEfficiency": {
          "previousDelta": null,
          "avg7": 90.3,
          "avg7Delta": null
        },
        "deepSleepMinutes": {
          "previousDelta": null,
          "avg7": 1.87,
          "avg7Delta": null
        },
        "remSleepMinutes": {
          "previousDelta": null,
          "avg7": 1.58,
          "avg7Delta": null
        },
        "walkingMinutes": {
          "previousDelta": null,
          "avg7": 0.49,
          "avg7Delta": null
        },
        "exerciseMinutes": {
          "previousDelta": null,
          "avg7": 0.81,
          "avg7Delta": null
        },
        "restingHeartRate": {
          "previousDelta": null,
          "avg7": 47.42,
          "avg7Delta": -2.42
        },
        "hrv": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "respiratoryRate": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "oxygenAvg": {
          "previousDelta": -0.07,
          "avg7": 98.34,
          "avg7Delta": -0.08
        }
      }
    },
    {
      "date": "2026-06-28",
      "sourceExportedAt": "2026-07-21T00:27:20.917614Z",
      "sourceReceivedAt": "2026-07-21T00:27:21.575Z",
      "coach": {
        "date": "2026-06-28",
        "recoveryScore": 87,
        "recoveryBand": "high",
        "sleep": {
          "score": 96,
          "durationMinutes": 460.0,
          "efficiency": 94.8,
          "deepMinutes": 125.0,
          "remMinutes": 105.0,
          "awakeMinutes": 45.0,
          "availableFactors": 4
        },
        "activityLoad": {
          "score": 30,
          "availableFactors": [
            "activeCalories",
            "steps"
          ]
        },
        "targetLoad": [
          60,
          80
        ],
        "sleepBankMinutes": 110,
        "tonightSleepNeedMinutes": 450,
        "headline": "回復状態は良好。普段通りか、少し強度を上げられる日です。",
        "warnings": [],
        "positives": [
          "睡眠スコア 96"
        ],
        "actions": [
          "余力があれば30分前後の散歩または中強度の運動で、活動負荷を目安範囲へ近づける。",
          "今夜の睡眠目安は7h30m。就寝前30分は光と刺激を抑える。"
        ],
        "monitor": {
          "hrv": {
            "average": null,
            "deviation": null,
            "days": 0,
            "value": null,
            "status": "insufficient",
            "delta": null,
            "label": "HRV"
          },
          "restingHeartRate": {
            "average": 46.916666666666664,
            "deviation": 2.7449448486667674,
            "days": 6,
            "value": null,
            "status": "insufficient",
            "delta": null,
            "label": "安静時心拍"
          },
          "respiratoryRate": {
            "average": null,
            "deviation": null,
            "days": 0,
            "value": null,
            "status": "insufficient",
            "delta": null,
            "label": "呼吸数"
          },
          "oxygenAvg": {
            "average": 98.355340720717,
            "deviation": 0.11811957618537527,
            "days": 7,
            "value": 98.39024390243902,
            "status": "usual",
            "delta": 0.03490318172202933,
            "label": "血中酸素"
          }
        },
        "confidence": "medium",
        "baselineWindowDays": 28
      },
      "weight": 56.8,
      "bodyFat": 10.3,
      "activeCalories": 206.0,
      "heartRateAvg": 55.37,
      "sleepMinutes": 7.67,
      "steps": 5541.0,
      "sleepEfficiency": 94.85,
      "deepSleepMinutes": 2.08,
      "remSleepMinutes": 1.75,
      "walkingMinutes": null,
      "exerciseMinutes": null,
      "restingHeartRate": null,
      "hrv": null,
      "respiratoryRate": null,
      "oxygenAvg": 98.39,
      "comparisons": {
        "weight": {
          "previousDelta": -0.4,
          "avg7": 56.75,
          "avg7Delta": 0.05
        },
        "bodyFat": {
          "previousDelta": -1.9,
          "avg7": 12.43,
          "avg7Delta": -2.13
        },
        "activeCalories": {
          "previousDelta": -69.0,
          "avg7": 403.17,
          "avg7Delta": -197.17
        },
        "heartRateAvg": {
          "previousDelta": -5.57,
          "avg7": 61.3,
          "avg7Delta": -5.93
        },
        "sleepMinutes": {
          "previousDelta": null,
          "avg7": 7.83,
          "avg7Delta": -0.16
        },
        "steps": {
          "previousDelta": -2376.0,
          "avg7": 7354.14,
          "avg7Delta": -1813.14
        },
        "sleepEfficiency": {
          "previousDelta": null,
          "avg7": 89.32,
          "avg7Delta": 5.53
        },
        "deepSleepMinutes": {
          "previousDelta": null,
          "avg7": 1.93,
          "avg7Delta": 0.15
        },
        "remSleepMinutes": {
          "previousDelta": null,
          "avg7": 1.65,
          "avg7Delta": 0.1
        },
        "walkingMinutes": {
          "previousDelta": null,
          "avg7": 0.49,
          "avg7Delta": null
        },
        "exerciseMinutes": {
          "previousDelta": null,
          "avg7": 0.81,
          "avg7Delta": null
        },
        "restingHeartRate": {
          "previousDelta": null,
          "avg7": 46.92,
          "avg7Delta": null
        },
        "hrv": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "respiratoryRate": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "oxygenAvg": {
          "previousDelta": 0.13,
          "avg7": 98.35,
          "avg7Delta": 0.04
        }
      }
    },
    {
      "date": "2026-06-29",
      "sourceExportedAt": "2026-07-21T00:27:20.917614Z",
      "sourceReceivedAt": "2026-07-21T00:27:21.575Z",
      "coach": {
        "date": "2026-06-29",
        "recoveryScore": 55,
        "recoveryBand": "moderate",
        "sleep": {
          "score": null,
          "durationMinutes": null,
          "efficiency": null,
          "deepMinutes": null,
          "remMinutes": null,
          "awakeMinutes": null,
          "availableFactors": 0
        },
        "activityLoad": {
          "score": 59,
          "availableFactors": [
            "activeCalories",
            "exerciseMinutes",
            "steps"
          ]
        },
        "targetLoad": [
          40,
          65
        ],
        "sleepBankMinutes": 110,
        "tonightSleepNeedMinutes": 450,
        "headline": "回復状態は中間。普段通りでよいものの、追い込みすぎには注意です。",
        "warnings": [],
        "positives": [],
        "actions": [
          "運動は普段通りでOK。活動負荷は目安範囲内を狙う。",
          "今夜の睡眠目安は7h30m。就寝前30分は光と刺激を抑える。"
        ],
        "monitor": {
          "hrv": {
            "average": null,
            "deviation": null,
            "days": 0,
            "value": null,
            "status": "insufficient",
            "delta": null,
            "label": "HRV"
          },
          "restingHeartRate": {
            "average": 46.916666666666664,
            "deviation": 2.7449448486667674,
            "days": 6,
            "value": null,
            "status": "insufficient",
            "delta": null,
            "label": "安静時心拍"
          },
          "respiratoryRate": {
            "average": null,
            "deviation": null,
            "days": 0,
            "value": null,
            "status": "insufficient",
            "delta": null,
            "label": "呼吸数"
          },
          "oxygenAvg": {
            "average": 98.35970361843225,
            "deviation": 0.11109207500426116,
            "days": 8,
            "value": 98.36363636363636,
            "status": "usual",
            "delta": 0.003932745204110688,
            "label": "血中酸素"
          }
        },
        "confidence": "medium",
        "baselineWindowDays": 28
      },
      "weight": 57.4,
      "bodyFat": 10.2,
      "activeCalories": 541.0,
      "heartRateAvg": 64.04,
      "sleepMinutes": null,
      "steps": 7205.0,
      "sleepEfficiency": null,
      "deepSleepMinutes": null,
      "remSleepMinutes": null,
      "walkingMinutes": 0.5,
      "exerciseMinutes": 0.82,
      "restingHeartRate": null,
      "hrv": null,
      "respiratoryRate": null,
      "oxygenAvg": 98.36,
      "comparisons": {
        "weight": {
          "previousDelta": 0.6,
          "avg7": 56.76,
          "avg7Delta": 0.64
        },
        "bodyFat": {
          "previousDelta": -0.1,
          "avg7": 12.13,
          "avg7Delta": -1.93
        },
        "activeCalories": {
          "previousDelta": 335.0,
          "avg7": 357.6,
          "avg7Delta": 183.4
        },
        "heartRateAvg": {
          "previousDelta": 8.67,
          "avg7": 59.4,
          "avg7Delta": 4.64
        },
        "sleepMinutes": {
          "previousDelta": null,
          "avg7": 7.8,
          "avg7Delta": null
        },
        "steps": {
          "previousDelta": 1664.0,
          "avg7": 7218.71,
          "avg7Delta": -13.71
        },
        "sleepEfficiency": {
          "previousDelta": null,
          "avg7": 90.24,
          "avg7Delta": null
        },
        "deepSleepMinutes": {
          "previousDelta": null,
          "avg7": 1.96,
          "avg7Delta": null
        },
        "remSleepMinutes": {
          "previousDelta": null,
          "avg7": 1.67,
          "avg7Delta": null
        },
        "walkingMinutes": {
          "previousDelta": null,
          "avg7": 0.49,
          "avg7Delta": 0.01
        },
        "exerciseMinutes": {
          "previousDelta": null,
          "avg7": 0.82,
          "avg7Delta": 0.0
        },
        "restingHeartRate": {
          "previousDelta": null,
          "avg7": 47.3,
          "avg7Delta": null
        },
        "hrv": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "respiratoryRate": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "oxygenAvg": {
          "previousDelta": -0.03,
          "avg7": 98.35,
          "avg7Delta": 0.01
        }
      }
    },
    {
      "date": "2026-06-30",
      "sourceExportedAt": "2026-07-21T00:27:20.917614Z",
      "sourceReceivedAt": "2026-07-21T00:27:21.575Z",
      "coach": {
        "date": "2026-06-30",
        "recoveryScore": 55,
        "recoveryBand": "moderate",
        "sleep": {
          "score": null,
          "durationMinutes": null,
          "efficiency": null,
          "deepMinutes": null,
          "remMinutes": null,
          "awakeMinutes": null,
          "availableFactors": 0
        },
        "activityLoad": {
          "score": 40,
          "availableFactors": [
            "activeCalories",
            "steps"
          ]
        },
        "targetLoad": [
          40,
          65
        ],
        "sleepBankMinutes": 120,
        "tonightSleepNeedMinutes": 450,
        "headline": "回復状態は中間。普段通りでよいものの、追い込みすぎには注意です。",
        "warnings": [],
        "positives": [],
        "actions": [
          "運動は普段通りでOK。活動負荷は目安範囲内を狙う。",
          "今夜の睡眠目安は7h30m。就寝前30分は光と刺激を抑える。"
        ],
        "monitor": {
          "hrv": {
            "average": null,
            "deviation": null,
            "days": 0,
            "value": null,
            "status": "insufficient",
            "delta": null,
            "label": "HRV"
          },
          "restingHeartRate": {
            "average": 46.916666666666664,
            "deviation": 2.7449448486667674,
            "days": 6,
            "value": null,
            "status": "insufficient",
            "delta": null,
            "label": "安静時心拍"
          },
          "respiratoryRate": {
            "average": null,
            "deviation": null,
            "days": 0,
            "value": null,
            "status": "insufficient",
            "delta": null,
            "label": "呼吸数"
          },
          "oxygenAvg": {
            "average": 98.3601405901216,
            "deviation": 0.10474590472850843,
            "days": 9,
            "value": 98.4047619047619,
            "status": "usual",
            "delta": 0.044621314640295395,
            "label": "血中酸素"
          }
        },
        "confidence": "medium",
        "baselineWindowDays": 28
      },
      "weight": 56.6,
      "bodyFat": 12.0,
      "activeCalories": 242.0,
      "heartRateAvg": 57.47,
      "sleepMinutes": null,
      "steps": 7868.0,
      "sleepEfficiency": null,
      "deepSleepMinutes": null,
      "remSleepMinutes": null,
      "walkingMinutes": 0.5,
      "exerciseMinutes": null,
      "restingHeartRate": null,
      "hrv": null,
      "respiratoryRate": null,
      "oxygenAvg": 98.4,
      "comparisons": {
        "weight": {
          "previousDelta": -0.8,
          "avg7": 56.81,
          "avg7Delta": -0.21
        },
        "bodyFat": {
          "previousDelta": 1.8,
          "avg7": 11.83,
          "avg7Delta": 0.17
        },
        "activeCalories": {
          "previousDelta": -299.0,
          "avg7": 386.31,
          "avg7Delta": -144.31
        },
        "heartRateAvg": {
          "previousDelta": -6.57,
          "avg7": 60.07,
          "avg7Delta": -2.6
        },
        "sleepMinutes": {
          "previousDelta": null,
          "avg7": 7.87,
          "avg7Delta": null
        },
        "steps": {
          "previousDelta": 663.0,
          "avg7": 7088.14,
          "avg7Delta": 779.86
        },
        "sleepEfficiency": {
          "previousDelta": null,
          "avg7": 90.82,
          "avg7Delta": null
        },
        "deepSleepMinutes": {
          "previousDelta": null,
          "avg7": 2.05,
          "avg7Delta": null
        },
        "remSleepMinutes": {
          "previousDelta": null,
          "avg7": 1.67,
          "avg7Delta": null
        },
        "walkingMinutes": {
          "previousDelta": 0.0,
          "avg7": 0.53,
          "avg7Delta": -0.03
        },
        "exerciseMinutes": {
          "previousDelta": null,
          "avg7": 0.92,
          "avg7Delta": null
        },
        "restingHeartRate": {
          "previousDelta": null,
          "avg7": 47.88,
          "avg7Delta": null
        },
        "hrv": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "respiratoryRate": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "oxygenAvg": {
          "previousDelta": 0.04,
          "avg7": 98.36,
          "avg7Delta": 0.04
        }
      }
    },
    {
      "date": "2026-07-01",
      "sourceExportedAt": "2026-07-21T00:27:20.917614Z",
      "sourceReceivedAt": "2026-07-21T00:27:21.575Z",
      "coach": {
        "date": "2026-07-01",
        "recoveryScore": 63,
        "recoveryBand": "moderate",
        "sleep": {
          "score": null,
          "durationMinutes": null,
          "efficiency": null,
          "deepMinutes": null,
          "remMinutes": null,
          "awakeMinutes": null,
          "availableFactors": 0
        },
        "activityLoad": {
          "score": 68,
          "availableFactors": [
            "activeCalories",
            "exerciseMinutes",
            "steps"
          ]
        },
        "targetLoad": [
          40,
          65
        ],
        "sleepBankMinutes": 145,
        "tonightSleepNeedMinutes": 450,
        "headline": "回復状態は中間。普段通りでよいものの、追い込みすぎには注意です。",
        "warnings": [],
        "positives": [],
        "actions": [
          "今日の負荷は十分。追加の高強度運動は不要です。",
          "今夜の睡眠目安は7h30m。就寝前30分は光と刺激を抑える。"
        ],
        "monitor": {
          "hrv": {
            "average": null,
            "deviation": null,
            "days": 0,
            "value": null,
            "status": "insufficient",
            "delta": null,
            "label": "HRV"
          },
          "restingHeartRate": {
            "average": 46.916666666666664,
            "deviation": 2.7449448486667674,
            "days": 6,
            "value": 45.0,
            "status": "usual",
            "delta": -1.9166666666666643,
            "label": "安静時心拍"
          },
          "respiratoryRate": {
            "average": null,
            "deviation": null,
            "days": 0,
            "value": null,
            "status": "insufficient",
            "delta": null,
            "label": "呼吸数"
          },
          "oxygenAvg": {
            "average": 98.36460272158563,
            "deviation": 0.10026828838907614,
            "days": 10,
            "value": 98.14285714285714,
            "status": "usual",
            "delta": -0.22174557872848766,
            "label": "血中酸素"
          }
        },
        "confidence": "medium",
        "baselineWindowDays": 28
      },
      "weight": null,
      "bodyFat": null,
      "activeCalories": 590.31,
      "heartRateAvg": 61.99,
      "sleepMinutes": null,
      "steps": 7511.0,
      "sleepEfficiency": null,
      "deepSleepMinutes": null,
      "remSleepMinutes": null,
      "walkingMinutes": 0.24,
      "exerciseMinutes": 1.09,
      "restingHeartRate": 45.0,
      "hrv": null,
      "respiratoryRate": null,
      "oxygenAvg": 98.14,
      "comparisons": {
        "weight": {
          "previousDelta": null,
          "avg7": 56.79,
          "avg7Delta": null
        },
        "bodyFat": {
          "previousDelta": null,
          "avg7": 11.77,
          "avg7Delta": null
        },
        "activeCalories": {
          "previousDelta": 348.31,
          "avg7": 353.55,
          "avg7Delta": 236.76
        },
        "heartRateAvg": {
          "previousDelta": 4.52,
          "avg7": 59.48,
          "avg7Delta": 2.51
        },
        "sleepMinutes": {
          "previousDelta": null,
          "avg7": 8.0,
          "avg7Delta": null
        },
        "steps": {
          "previousDelta": -357.0,
          "avg7": 6670.43,
          "avg7Delta": 840.57
        },
        "sleepEfficiency": {
          "previousDelta": null,
          "avg7": 90.84,
          "avg7Delta": null
        },
        "deepSleepMinutes": {
          "previousDelta": null,
          "avg7": 1.98,
          "avg7Delta": null
        },
        "remSleepMinutes": {
          "previousDelta": null,
          "avg7": 1.72,
          "avg7Delta": null
        },
        "walkingMinutes": {
          "previousDelta": -0.26,
          "avg7": 0.45,
          "avg7Delta": -0.21
        },
        "exerciseMinutes": {
          "previousDelta": null,
          "avg7": 0.98,
          "avg7Delta": 0.11
        },
        "restingHeartRate": {
          "previousDelta": null,
          "avg7": 48.83,
          "avg7Delta": -3.83
        },
        "hrv": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "respiratoryRate": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "oxygenAvg": {
          "previousDelta": -0.26,
          "avg7": 98.39,
          "avg7Delta": -0.25
        }
      }
    },
    {
      "date": "2026-07-02",
      "sourceExportedAt": "2026-07-21T00:27:20.917614Z",
      "sourceReceivedAt": "2026-07-21T00:27:21.575Z",
      "coach": {
        "date": "2026-07-02",
        "recoveryScore": 87,
        "recoveryBand": "high",
        "sleep": {
          "score": 96,
          "durationMinutes": 450.0,
          "efficiency": 91.8,
          "deepMinutes": 110.0,
          "remMinutes": 70.0,
          "awakeMinutes": 57.5,
          "availableFactors": 4
        },
        "activityLoad": {
          "score": 33,
          "availableFactors": [
            "activeCalories",
            "steps"
          ]
        },
        "targetLoad": [
          60,
          80
        ],
        "sleepBankMinutes": -20,
        "tonightSleepNeedMinutes": 457,
        "headline": "回復状態は良好。普段通りか、少し強度を上げられる日です。",
        "warnings": [],
        "positives": [
          "睡眠スコア 96"
        ],
        "actions": [
          "余力があれば30分前後の散歩または中強度の運動で、活動負荷を目安範囲へ近づける。",
          "今夜の睡眠目安は7h37m。就寝前30分は光と刺激を抑える。"
        ],
        "monitor": {
          "hrv": {
            "average": null,
            "deviation": null,
            "days": 0,
            "value": null,
            "status": "insufficient",
            "delta": null,
            "label": "HRV"
          },
          "restingHeartRate": {
            "average": 46.642857142857146,
            "deviation": 2.6283384989963,
            "days": 7,
            "value": null,
            "status": "insufficient",
            "delta": null,
            "label": "安静時心拍"
          },
          "respiratoryRate": {
            "average": null,
            "deviation": null,
            "days": 0,
            "value": null,
            "status": "insufficient",
            "delta": null,
            "label": "呼吸数"
          },
          "oxygenAvg": {
            "average": 98.34444403261031,
            "deviation": 0.1149064038476311,
            "days": 11,
            "value": 98.4,
            "status": "usual",
            "delta": 0.055555967389693706,
            "label": "血中酸素"
          }
        },
        "confidence": "medium",
        "baselineWindowDays": 28
      },
      "weight": 56.7,
      "bodyFat": 12.1,
      "activeCalories": 202.0,
      "heartRateAvg": 60.06,
      "sleepMinutes": 7.5,
      "steps": 6522.0,
      "sleepEfficiency": 91.84,
      "deepSleepMinutes": 1.83,
      "remSleepMinutes": 1.17,
      "walkingMinutes": null,
      "exerciseMinutes": null,
      "restingHeartRate": null,
      "hrv": null,
      "respiratoryRate": null,
      "oxygenAvg": 98.4,
      "comparisons": {
        "weight": {
          "previousDelta": null,
          "avg7": 56.83,
          "avg7Delta": -0.13
        },
        "bodyFat": {
          "previousDelta": null,
          "avg7": 11.58,
          "avg7Delta": 0.52
        },
        "activeCalories": {
          "previousDelta": -388.31,
          "avg7": 353.9,
          "avg7Delta": -151.9
        },
        "heartRateAvg": {
          "previousDelta": -1.93,
          "avg7": 60.09,
          "avg7Delta": -0.03
        },
        "sleepMinutes": {
          "previousDelta": null,
          "avg7": 8.31,
          "avg7Delta": -0.81
        },
        "steps": {
          "previousDelta": -989.0,
          "avg7": 6832.43,
          "avg7Delta": -310.43
        },
        "sleepEfficiency": {
          "previousDelta": null,
          "avg7": 90.32,
          "avg7Delta": 1.52
        },
        "deepSleepMinutes": {
          "previousDelta": null,
          "avg7": 1.94,
          "avg7Delta": -0.11
        },
        "remSleepMinutes": {
          "previousDelta": null,
          "avg7": 1.85,
          "avg7Delta": -0.68
        },
        "walkingMinutes": {
          "previousDelta": null,
          "avg7": 0.41,
          "avg7Delta": null
        },
        "exerciseMinutes": {
          "previousDelta": null,
          "avg7": 0.91,
          "avg7Delta": null
        },
        "restingHeartRate": {
          "previousDelta": null,
          "avg7": 47.17,
          "avg7Delta": null
        },
        "hrv": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "respiratoryRate": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "oxygenAvg": {
          "previousDelta": 0.26,
          "avg7": 98.34,
          "avg7Delta": 0.06
        }
      }
    },
    {
      "date": "2026-07-03",
      "sourceExportedAt": "2026-07-21T00:27:20.917614Z",
      "sourceReceivedAt": "2026-07-21T00:27:21.575Z",
      "coach": {
        "date": "2026-07-03",
        "recoveryScore": 55,
        "recoveryBand": "moderate",
        "sleep": {
          "score": null,
          "durationMinutes": null,
          "efficiency": null,
          "deepMinutes": null,
          "remMinutes": null,
          "awakeMinutes": null,
          "availableFactors": 0
        },
        "activityLoad": {
          "score": 39,
          "availableFactors": [
            "activeCalories",
            "steps"
          ]
        },
        "targetLoad": [
          40,
          65
        ],
        "sleepBankMinutes": null,
        "tonightSleepNeedMinutes": 450,
        "headline": "回復状態は中間。普段通りでよいものの、追い込みすぎには注意です。",
        "warnings": [],
        "positives": [],
        "actions": [
          "余力があれば30分前後の散歩または中強度の運動で、活動負荷を目安範囲へ近づける。",
          "今夜の睡眠目安は7h30m。就寝前30分は光と刺激を抑える。"
        ],
        "monitor": {
          "hrv": {
            "average": null,
            "deviation": null,
            "days": 0,
            "value": null,
            "status": "insufficient",
            "delta": null,
            "label": "HRV"
          },
          "restingHeartRate": {
            "average": 46.642857142857146,
            "deviation": 2.6283384989963,
            "days": 7,
            "value": null,
            "status": "insufficient",
            "delta": null,
            "label": "安静時心拍"
          },
          "respiratoryRate": {
            "average": null,
            "deviation": null,
            "days": 0,
            "value": null,
            "status": "insufficient",
            "delta": null,
            "label": "呼吸数"
          },
          "oxygenAvg": {
            "average": 98.34907369655946,
            "deviation": 0.1110808857508665,
            "days": 12,
            "value": 98.2,
            "status": "usual",
            "delta": -0.14907369655945502,
            "label": "血中酸素"
          }
        },
        "confidence": "medium",
        "baselineWindowDays": 28
      },
      "weight": null,
      "bodyFat": null,
      "activeCalories": 256.0,
      "heartRateAvg": 60.6,
      "sleepMinutes": null,
      "steps": 6838.0,
      "sleepEfficiency": null,
      "deepSleepMinutes": null,
      "remSleepMinutes": null,
      "walkingMinutes": null,
      "exerciseMinutes": null,
      "restingHeartRate": null,
      "hrv": null,
      "respiratoryRate": null,
      "oxygenAvg": 98.2,
      "comparisons": {
        "weight": {
          "previousDelta": null,
          "avg7": 56.88,
          "avg7Delta": null
        },
        "bodyFat": {
          "previousDelta": null,
          "avg7": 11.55,
          "avg7Delta": null
        },
        "activeCalories": {
          "previousDelta": 54.0,
          "avg7": 364.62,
          "avg7Delta": -108.62
        },
        "heartRateAvg": {
          "previousDelta": 0.54,
          "avg7": 60.32,
          "avg7Delta": 0.28
        },
        "sleepMinutes": {
          "previousDelta": null,
          "avg7": 7.39,
          "avg7Delta": null
        },
        "steps": {
          "previousDelta": 316.0,
          "avg7": 7233.43,
          "avg7Delta": -395.43
        },
        "sleepEfficiency": {
          "previousDelta": null,
          "avg7": 91.86,
          "avg7Delta": null
        },
        "deepSleepMinutes": {
          "previousDelta": null,
          "avg7": 1.86,
          "avg7Delta": null
        },
        "remSleepMinutes": {
          "previousDelta": null,
          "avg7": 1.35,
          "avg7Delta": null
        },
        "walkingMinutes": {
          "previousDelta": null,
          "avg7": 0.41,
          "avg7Delta": null
        },
        "exerciseMinutes": {
          "previousDelta": null,
          "avg7": 0.91,
          "avg7Delta": null
        },
        "restingHeartRate": {
          "previousDelta": null,
          "avg7": 45.0,
          "avg7Delta": null
        },
        "hrv": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "respiratoryRate": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "oxygenAvg": {
          "previousDelta": -0.2,
          "avg7": 98.33,
          "avg7Delta": -0.13
        }
      }
    },
    {
      "date": "2026-07-04",
      "sourceExportedAt": "2026-07-21T00:27:20.917614Z",
      "sourceReceivedAt": "2026-07-21T00:27:21.575Z",
      "coach": {
        "date": "2026-07-04",
        "recoveryScore": 36,
        "recoveryBand": "low",
        "sleep": {
          "score": null,
          "durationMinutes": null,
          "efficiency": null,
          "deepMinutes": null,
          "remMinutes": null,
          "awakeMinutes": null,
          "availableFactors": 0
        },
        "activityLoad": {
          "score": 72,
          "availableFactors": [
            "activeCalories",
            "steps"
          ]
        },
        "targetLoad": [
          20,
          45
        ],
        "sleepBankMinutes": null,
        "tonightSleepNeedMinutes": 450,
        "headline": "回復サインが弱め。今日は負荷より回復を優先しましょう。",
        "warnings": [
          "安静時心拍が通常より高い"
        ],
        "positives": [],
        "actions": [
          "高強度運動は見送り、20〜30分の散歩か軽いモビリティにする。",
          "今夜の睡眠目安は7h30m。就寝前30分は光と刺激を抑える。"
        ],
        "monitor": {
          "hrv": {
            "average": null,
            "deviation": null,
            "days": 0,
            "value": null,
            "status": "insufficient",
            "delta": null,
            "label": "HRV"
          },
          "restingHeartRate": {
            "average": 46.642857142857146,
            "deviation": 2.6283384989963,
            "days": 7,
            "value": 51.0,
            "status": "above",
            "delta": 4.357142857142854,
            "label": "安静時心拍"
          },
          "respiratoryRate": {
            "average": null,
            "deviation": null,
            "days": 0,
            "value": null,
            "status": "insufficient",
            "delta": null,
            "label": "呼吸数"
          },
          "oxygenAvg": {
            "average": 98.33760648913182,
            "deviation": 0.11387613586558737,
            "days": 13,
            "value": 98.07692307692308,
            "status": "usual",
            "delta": -0.2606834122087349,
            "label": "血中酸素"
          }
        },
        "confidence": "medium",
        "baselineWindowDays": 28
      },
      "weight": 56.6,
      "bodyFat": 11.9,
      "activeCalories": 474.0,
      "heartRateAvg": 64.01,
      "sleepMinutes": null,
      "steps": 12189.0,
      "sleepEfficiency": null,
      "deepSleepMinutes": null,
      "remSleepMinutes": null,
      "walkingMinutes": null,
      "exerciseMinutes": null,
      "restingHeartRate": 51.0,
      "hrv": null,
      "respiratoryRate": null,
      "oxygenAvg": 98.08,
      "comparisons": {
        "weight": {
          "previousDelta": null,
          "avg7": 56.94,
          "avg7Delta": -0.34
        },
        "bodyFat": {
          "previousDelta": null,
          "avg7": 11.36,
          "avg7Delta": 0.54
        },
        "activeCalories": {
          "previousDelta": 218.0,
          "avg7": 330.33,
          "avg7Delta": 143.67
        },
        "heartRateAvg": {
          "previousDelta": 3.41,
          "avg7": 60.07,
          "avg7Delta": 3.94
        },
        "sleepMinutes": {
          "previousDelta": null,
          "avg7": 7.58,
          "avg7Delta": null
        },
        "steps": {
          "previousDelta": 5351.0,
          "avg7": 7057.43,
          "avg7Delta": 5131.57
        },
        "sleepEfficiency": {
          "previousDelta": null,
          "avg7": 93.34,
          "avg7Delta": null
        },
        "deepSleepMinutes": {
          "previousDelta": null,
          "avg7": 1.96,
          "avg7Delta": null
        },
        "remSleepMinutes": {
          "previousDelta": null,
          "avg7": 1.46,
          "avg7Delta": null
        },
        "walkingMinutes": {
          "previousDelta": null,
          "avg7": 0.41,
          "avg7Delta": null
        },
        "exerciseMinutes": {
          "previousDelta": null,
          "avg7": 0.96,
          "avg7Delta": null
        },
        "restingHeartRate": {
          "previousDelta": null,
          "avg7": 45.0,
          "avg7Delta": 6.0
        },
        "hrv": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "respiratoryRate": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "oxygenAvg": {
          "previousDelta": -0.12,
          "avg7": 98.31,
          "avg7Delta": -0.23
        }
      }
    },
    {
      "date": "2026-07-05",
      "sourceExportedAt": "2026-07-21T00:27:20.917614Z",
      "sourceReceivedAt": "2026-07-21T00:27:21.575Z",
      "coach": {
        "date": "2026-07-05",
        "recoveryScore": 89,
        "recoveryBand": "high",
        "sleep": {
          "score": 98,
          "durationMinutes": 530.0,
          "efficiency": 97.7,
          "deepMinutes": 130.0,
          "remMinutes": 145.0,
          "awakeMinutes": 17.5,
          "availableFactors": 4
        },
        "activityLoad": {
          "score": 11,
          "availableFactors": [
            "activeCalories",
            "steps"
          ]
        },
        "targetLoad": [
          60,
          80
        ],
        "sleepBankMinutes": null,
        "tonightSleepNeedMinutes": 450,
        "headline": "回復状態は良好。普段通りか、少し強度を上げられる日です。",
        "warnings": [],
        "positives": [
          "睡眠スコア 98"
        ],
        "actions": [
          "余力があれば30分前後の散歩または中強度の運動で、活動負荷を目安範囲へ近づける。",
          "今夜の睡眠目安は7h30m。就寝前30分は光と刺激を抑える。"
        ],
        "monitor": {
          "hrv": {
            "average": null,
            "deviation": null,
            "days": 0,
            "value": null,
            "status": "insufficient",
            "delta": null,
            "label": "HRV"
          },
          "restingHeartRate": {
            "average": 47.1875,
            "deviation": 2.8497532787944992,
            "days": 8,
            "value": null,
            "status": "insufficient",
            "delta": null,
            "label": "安静時心拍"
          },
          "respiratoryRate": {
            "average": null,
            "deviation": null,
            "days": 0,
            "value": null,
            "status": "insufficient",
            "delta": null,
            "label": "呼吸数"
          },
          "oxygenAvg": {
            "average": 98.3189862454026,
            "deviation": 0.1286420612411234,
            "days": 14,
            "value": 98.51282051282051,
            "status": "usual",
            "delta": 0.19383426741791254,
            "label": "血中酸素"
          }
        },
        "confidence": "medium",
        "baselineWindowDays": 28
      },
      "weight": null,
      "bodyFat": null,
      "activeCalories": 19.0,
      "heartRateAvg": 52.88,
      "sleepMinutes": 8.83,
      "steps": 3822.0,
      "sleepEfficiency": 97.7,
      "deepSleepMinutes": 2.17,
      "remSleepMinutes": 2.42,
      "walkingMinutes": null,
      "exerciseMinutes": null,
      "restingHeartRate": null,
      "hrv": null,
      "respiratoryRate": null,
      "oxygenAvg": 98.51,
      "comparisons": {
        "weight": {
          "previousDelta": null,
          "avg7": 56.82,
          "avg7Delta": null
        },
        "bodyFat": {
          "previousDelta": null,
          "avg7": 11.3,
          "avg7Delta": null
        },
        "activeCalories": {
          "previousDelta": -455.0,
          "avg7": 358.76,
          "avg7Delta": -339.76
        },
        "heartRateAvg": {
          "previousDelta": -11.13,
          "avg7": 60.51,
          "avg7Delta": -7.63
        },
        "sleepMinutes": {
          "previousDelta": null,
          "avg7": 7.58,
          "avg7Delta": 1.25
        },
        "steps": {
          "previousDelta": -8367.0,
          "avg7": 7667.71,
          "avg7Delta": -3845.71
        },
        "sleepEfficiency": {
          "previousDelta": null,
          "avg7": 93.34,
          "avg7Delta": 4.36
        },
        "deepSleepMinutes": {
          "previousDelta": null,
          "avg7": 1.96,
          "avg7Delta": 0.21
        },
        "remSleepMinutes": {
          "previousDelta": null,
          "avg7": 1.46,
          "avg7Delta": 0.96
        },
        "walkingMinutes": {
          "previousDelta": null,
          "avg7": 0.41,
          "avg7Delta": null
        },
        "exerciseMinutes": {
          "previousDelta": null,
          "avg7": 0.96,
          "avg7Delta": null
        },
        "restingHeartRate": {
          "previousDelta": null,
          "avg7": 48.0,
          "avg7Delta": null
        },
        "hrv": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "respiratoryRate": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "oxygenAvg": {
          "previousDelta": 0.43,
          "avg7": 98.28,
          "avg7Delta": 0.23
        }
      }
    },
    {
      "date": "2026-07-06",
      "sourceExportedAt": "2026-07-21T00:27:20.917614Z",
      "sourceReceivedAt": "2026-07-21T00:27:21.575Z",
      "coach": {
        "date": "2026-07-06",
        "recoveryScore": 55,
        "recoveryBand": "moderate",
        "sleep": {
          "score": null,
          "durationMinutes": null,
          "efficiency": null,
          "deepMinutes": null,
          "remMinutes": null,
          "awakeMinutes": null,
          "availableFactors": 0
        },
        "activityLoad": {
          "score": 50,
          "availableFactors": [
            "steps"
          ]
        },
        "targetLoad": [
          40,
          65
        ],
        "sleepBankMinutes": null,
        "tonightSleepNeedMinutes": 450,
        "headline": "回復状態は中間。普段通りでよいものの、追い込みすぎには注意です。",
        "warnings": [],
        "positives": [],
        "actions": [
          "運動は普段通りでOK。活動負荷は目安範囲内を狙う。",
          "今夜の睡眠目安は7h30m。就寝前30分は光と刺激を抑える。"
        ],
        "monitor": {
          "hrv": {
            "average": null,
            "deviation": null,
            "days": 0,
            "value": null,
            "status": "insufficient",
            "delta": null,
            "label": "HRV"
          },
          "restingHeartRate": {
            "average": 47.1875,
            "deviation": 2.8497532787944992,
            "days": 8,
            "value": null,
            "status": "insufficient",
            "delta": null,
            "label": "安静時心拍"
          },
          "respiratoryRate": {
            "average": null,
            "deviation": null,
            "days": 0,
            "value": null,
            "status": "insufficient",
            "delta": null,
            "label": "呼吸数"
          },
          "oxygenAvg": {
            "average": 98.33190852989715,
            "deviation": 0.1333541301853031,
            "days": 15,
            "value": 98.33333333333333,
            "status": "usual",
            "delta": 0.0014248034361799,
            "label": "血中酸素"
          }
        },
        "confidence": "medium",
        "baselineWindowDays": 28
      },
      "weight": null,
      "bodyFat": null,
      "activeCalories": null,
      "heartRateAvg": 58.25,
      "sleepMinutes": null,
      "steps": 7195.0,
      "sleepEfficiency": null,
      "deepSleepMinutes": null,
      "remSleepMinutes": null,
      "walkingMinutes": null,
      "exerciseMinutes": null,
      "restingHeartRate": null,
      "hrv": null,
      "respiratoryRate": null,
      "oxygenAvg": 98.33,
      "comparisons": {
        "weight": {
          "previousDelta": null,
          "avg7": 56.82,
          "avg7Delta": null
        },
        "bodyFat": {
          "previousDelta": null,
          "avg7": 11.55,
          "avg7Delta": null
        },
        "activeCalories": {
          "previousDelta": null,
          "avg7": 332.04,
          "avg7Delta": null
        },
        "heartRateAvg": {
          "previousDelta": 5.37,
          "avg7": 60.15,
          "avg7Delta": -1.9
        },
        "sleepMinutes": {
          "previousDelta": null,
          "avg7": 8.16,
          "avg7Delta": null
        },
        "steps": {
          "previousDelta": 3373.0,
          "avg7": 7422.14,
          "avg7Delta": -227.14
        },
        "sleepEfficiency": {
          "previousDelta": null,
          "avg7": 94.77,
          "avg7Delta": null
        },
        "deepSleepMinutes": {
          "previousDelta": null,
          "avg7": 2.0,
          "avg7Delta": null
        },
        "remSleepMinutes": {
          "previousDelta": null,
          "avg7": 1.79,
          "avg7Delta": null
        },
        "walkingMinutes": {
          "previousDelta": null,
          "avg7": 0.41,
          "avg7Delta": null
        },
        "exerciseMinutes": {
          "previousDelta": null,
          "avg7": 0.96,
          "avg7Delta": null
        },
        "restingHeartRate": {
          "previousDelta": null,
          "avg7": 48.0,
          "avg7Delta": null
        },
        "hrv": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "respiratoryRate": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "oxygenAvg": {
          "previousDelta": -0.18,
          "avg7": 98.3,
          "avg7Delta": 0.03
        }
      }
    },
    {
      "date": "2026-07-07",
      "sourceExportedAt": "2026-07-21T00:27:20.917614Z",
      "sourceReceivedAt": "2026-07-21T00:27:21.575Z",
      "coach": {
        "date": "2026-07-07",
        "recoveryScore": 55,
        "recoveryBand": "moderate",
        "sleep": {
          "score": null,
          "durationMinutes": null,
          "efficiency": null,
          "deepMinutes": null,
          "remMinutes": null,
          "awakeMinutes": null,
          "availableFactors": 0
        },
        "activityLoad": {
          "score": 64,
          "availableFactors": [
            "activeCalories",
            "exerciseMinutes",
            "steps"
          ]
        },
        "targetLoad": [
          40,
          65
        ],
        "sleepBankMinutes": null,
        "tonightSleepNeedMinutes": 450,
        "headline": "回復状態は中間。普段通りでよいものの、追い込みすぎには注意です。",
        "warnings": [],
        "positives": [],
        "actions": [
          "運動は普段通りでOK。活動負荷は目安範囲内を狙う。",
          "今夜の睡眠目安は7h30m。就寝前30分は光と刺激を抑える。"
        ],
        "monitor": {
          "hrv": {
            "average": null,
            "deviation": null,
            "days": 0,
            "value": null,
            "status": "insufficient",
            "delta": null,
            "label": "HRV"
          },
          "restingHeartRate": {
            "average": 47.1875,
            "deviation": 2.8497532787944992,
            "days": 8,
            "value": null,
            "status": "insufficient",
            "delta": null,
            "label": "安静時心拍"
          },
          "respiratoryRate": {
            "average": null,
            "deviation": null,
            "days": 0,
            "value": null,
            "status": "insufficient",
            "delta": null,
            "label": "呼吸数"
          },
          "oxygenAvg": {
            "average": 98.33199758011189,
            "deviation": 0.1291200419541737,
            "days": 16,
            "value": 98.39024390243902,
            "status": "usual",
            "delta": 0.05824632232713611,
            "label": "血中酸素"
          }
        },
        "confidence": "medium",
        "baselineWindowDays": 28
      },
      "weight": 56.4,
      "bodyFat": 11.7,
      "activeCalories": 400.0,
      "heartRateAvg": 62.15,
      "sleepMinutes": null,
      "steps": 8556.0,
      "sleepEfficiency": null,
      "deepSleepMinutes": null,
      "remSleepMinutes": null,
      "walkingMinutes": 0.31,
      "exerciseMinutes": 1.29,
      "restingHeartRate": null,
      "hrv": null,
      "respiratoryRate": null,
      "oxygenAvg": 98.39,
      "comparisons": {
        "weight": {
          "previousDelta": null,
          "avg7": 56.63,
          "avg7Delta": -0.23
        },
        "bodyFat": {
          "previousDelta": null,
          "avg7": 12.0,
          "avg7Delta": -0.3
        },
        "activeCalories": {
          "previousDelta": null,
          "avg7": 297.22,
          "avg7Delta": 102.78
        },
        "heartRateAvg": {
          "previousDelta": 3.9,
          "avg7": 59.32,
          "avg7Delta": 2.83
        },
        "sleepMinutes": {
          "previousDelta": null,
          "avg7": 8.16,
          "avg7Delta": null
        },
        "steps": {
          "previousDelta": 1361.0,
          "avg7": 7420.71,
          "avg7Delta": 1135.29
        },
        "sleepEfficiency": {
          "previousDelta": null,
          "avg7": 94.77,
          "avg7Delta": null
        },
        "deepSleepMinutes": {
          "previousDelta": null,
          "avg7": 2.0,
          "avg7Delta": null
        },
        "remSleepMinutes": {
          "previousDelta": null,
          "avg7": 1.79,
          "avg7Delta": null
        },
        "walkingMinutes": {
          "previousDelta": null,
          "avg7": 0.37,
          "avg7Delta": -0.06
        },
        "exerciseMinutes": {
          "previousDelta": null,
          "avg7": 1.09,
          "avg7Delta": 0.2
        },
        "restingHeartRate": {
          "previousDelta": null,
          "avg7": 48.0,
          "avg7Delta": null
        },
        "hrv": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "respiratoryRate": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "oxygenAvg": {
          "previousDelta": 0.06,
          "avg7": 98.29,
          "avg7Delta": 0.1
        }
      }
    },
    {
      "date": "2026-07-08",
      "sourceExportedAt": "2026-07-21T00:27:20.917614Z",
      "sourceReceivedAt": "2026-07-21T00:27:21.575Z",
      "coach": {
        "date": "2026-07-08",
        "recoveryScore": 39,
        "recoveryBand": "low",
        "sleep": {
          "score": null,
          "durationMinutes": null,
          "efficiency": null,
          "deepMinutes": null,
          "remMinutes": null,
          "awakeMinutes": null,
          "availableFactors": 0
        },
        "activityLoad": {
          "score": 30,
          "availableFactors": [
            "activeCalories",
            "steps"
          ]
        },
        "targetLoad": [
          20,
          45
        ],
        "sleepBankMinutes": null,
        "tonightSleepNeedMinutes": 450,
        "headline": "回復サインが弱め。今日は負荷より回復を優先しましょう。",
        "warnings": [
          "安静時心拍が通常より高い"
        ],
        "positives": [],
        "actions": [
          "高強度運動は見送り、20〜30分の散歩か軽いモビリティにする。",
          "今夜の睡眠目安は7h30m。就寝前30分は光と刺激を抑える。"
        ],
        "monitor": {
          "hrv": {
            "average": null,
            "deviation": null,
            "days": 0,
            "value": null,
            "status": "insufficient",
            "delta": null,
            "label": "HRV"
          },
          "restingHeartRate": {
            "average": 47.1875,
            "deviation": 2.8497532787944992,
            "days": 8,
            "value": 51.0,
            "status": "above",
            "delta": 3.8125,
            "label": "安静時心拍"
          },
          "respiratoryRate": {
            "average": null,
            "deviation": null,
            "days": 0,
            "value": null,
            "status": "insufficient",
            "delta": null,
            "label": "呼吸数"
          },
          "oxygenAvg": {
            "average": 98.33542383436644,
            "deviation": 0.12601233158677771,
            "days": 17,
            "value": 98.26666666666667,
            "status": "usual",
            "delta": -0.06875716769977203,
            "label": "血中酸素"
          }
        },
        "confidence": "medium",
        "baselineWindowDays": 28
      },
      "weight": 56.2,
      "bodyFat": 11.7,
      "activeCalories": 197.0,
      "heartRateAvg": 60.02,
      "sleepMinutes": null,
      "steps": 4990.0,
      "sleepEfficiency": null,
      "deepSleepMinutes": null,
      "remSleepMinutes": null,
      "walkingMinutes": null,
      "exerciseMinutes": null,
      "restingHeartRate": 51.0,
      "hrv": null,
      "respiratoryRate": null,
      "oxygenAvg": 98.27,
      "comparisons": {
        "weight": {
          "previousDelta": -0.2,
          "avg7": 56.57,
          "avg7Delta": -0.37
        },
        "bodyFat": {
          "previousDelta": 0.0,
          "avg7": 11.9,
          "avg7Delta": -0.2
        },
        "activeCalories": {
          "previousDelta": -203.0,
          "avg7": 323.55,
          "avg7Delta": -126.55
        },
        "heartRateAvg": {
          "previousDelta": -2.13,
          "avg7": 59.99,
          "avg7Delta": 0.03
        },
        "sleepMinutes": {
          "previousDelta": null,
          "avg7": 8.16,
          "avg7Delta": null
        },
        "steps": {
          "previousDelta": -3566.0,
          "avg7": 7519.0,
          "avg7Delta": -2529.0
        },
        "sleepEfficiency": {
          "previousDelta": null,
          "avg7": 94.77,
          "avg7Delta": null
        },
        "deepSleepMinutes": {
          "previousDelta": null,
          "avg7": 2.0,
          "avg7Delta": null
        },
        "remSleepMinutes": {
          "previousDelta": null,
          "avg7": 1.79,
          "avg7Delta": null
        },
        "walkingMinutes": {
          "previousDelta": null,
          "avg7": 0.28,
          "avg7Delta": null
        },
        "exerciseMinutes": {
          "previousDelta": null,
          "avg7": 1.19,
          "avg7Delta": null
        },
        "restingHeartRate": {
          "previousDelta": null,
          "avg7": 48.0,
          "avg7Delta": 3.0
        },
        "hrv": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "respiratoryRate": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "oxygenAvg": {
          "previousDelta": -0.12,
          "avg7": 98.29,
          "avg7Delta": -0.02
        }
      }
    },
    {
      "date": "2026-07-09",
      "sourceExportedAt": "2026-07-21T00:27:20.917614Z",
      "sourceReceivedAt": "2026-07-21T00:27:21.575Z",
      "coach": {
        "date": "2026-07-09",
        "recoveryScore": 82,
        "recoveryBand": "high",
        "sleep": {
          "score": 93,
          "durationMinutes": 450.03333333333336,
          "efficiency": 87.0,
          "deepMinutes": 90.0,
          "remMinutes": 80.0,
          "awakeMinutes": 82.5,
          "availableFactors": 4
        },
        "activityLoad": {
          "score": 33,
          "availableFactors": [
            "activeCalories",
            "steps"
          ]
        },
        "targetLoad": [
          60,
          80
        ],
        "sleepBankMinutes": null,
        "tonightSleepNeedMinutes": 450,
        "headline": "回復状態は良好。普段通りか、少し強度を上げられる日です。",
        "warnings": [],
        "positives": [
          "睡眠スコア 93",
          "安静時心拍が通常より低い"
        ],
        "actions": [
          "余力があれば30分前後の散歩または中強度の運動で、活動負荷を目安範囲へ近づける。",
          "今夜の睡眠目安は7h30m。就寝前30分は光と刺激を抑える。"
        ],
        "monitor": {
          "hrv": {
            "average": null,
            "deviation": null,
            "days": 0,
            "value": null,
            "status": "insufficient",
            "delta": null,
            "label": "HRV"
          },
          "restingHeartRate": {
            "average": 47.611111111111114,
            "deviation": 2.9418227321941615,
            "days": 9,
            "value": 44.0,
            "status": "below",
            "delta": -3.6111111111111143,
            "label": "安静時心拍"
          },
          "respiratoryRate": {
            "average": null,
            "deviation": null,
            "days": 0,
            "value": null,
            "status": "insufficient",
            "delta": null,
            "label": "呼吸数"
          },
          "oxygenAvg": {
            "average": 98.33160399171645,
            "deviation": 0.12347058526253994,
            "days": 18,
            "value": 98.22727272727273,
            "status": "usual",
            "delta": -0.1043312644437151,
            "label": "血中酸素"
          }
        },
        "confidence": "medium",
        "baselineWindowDays": 28
      },
      "weight": null,
      "bodyFat": null,
      "activeCalories": 206.0,
      "heartRateAvg": 60.29,
      "sleepMinutes": 7.5,
      "steps": 5502.0,
      "sleepEfficiency": 86.96,
      "deepSleepMinutes": 1.5,
      "remSleepMinutes": 1.33,
      "walkingMinutes": null,
      "exerciseMinutes": null,
      "restingHeartRate": 44.0,
      "hrv": null,
      "respiratoryRate": null,
      "oxygenAvg": 98.23,
      "comparisons": {
        "weight": {
          "previousDelta": null,
          "avg7": 56.48,
          "avg7Delta": null
        },
        "bodyFat": {
          "previousDelta": null,
          "avg7": 11.85,
          "avg7Delta": null
        },
        "activeCalories": {
          "previousDelta": 9.0,
          "avg7": 258.0,
          "avg7Delta": -52.0
        },
        "heartRateAvg": {
          "previousDelta": 0.27,
          "avg7": 59.71,
          "avg7Delta": 0.58
        },
        "sleepMinutes": {
          "previousDelta": null,
          "avg7": 8.16,
          "avg7Delta": -0.66
        },
        "steps": {
          "previousDelta": 512.0,
          "avg7": 7158.86,
          "avg7Delta": -1656.86
        },
        "sleepEfficiency": {
          "previousDelta": null,
          "avg7": 94.77,
          "avg7Delta": -7.81
        },
        "deepSleepMinutes": {
          "previousDelta": null,
          "avg7": 2.0,
          "avg7Delta": -0.5
        },
        "remSleepMinutes": {
          "previousDelta": null,
          "avg7": 1.79,
          "avg7Delta": -0.46
        },
        "walkingMinutes": {
          "previousDelta": null,
          "avg7": 0.31,
          "avg7Delta": null
        },
        "exerciseMinutes": {
          "previousDelta": null,
          "avg7": 1.29,
          "avg7Delta": null
        },
        "restingHeartRate": {
          "previousDelta": -7.0,
          "avg7": 51.0,
          "avg7Delta": -7.0
        },
        "hrv": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "respiratoryRate": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "oxygenAvg": {
          "previousDelta": -0.04,
          "avg7": 98.31,
          "avg7Delta": -0.08
        }
      }
    },
    {
      "date": "2026-07-10",
      "sourceExportedAt": "2026-07-21T00:27:20.917614Z",
      "sourceReceivedAt": "2026-07-21T00:27:21.575Z",
      "coach": {
        "date": "2026-07-10",
        "recoveryScore": 56,
        "recoveryBand": "moderate",
        "sleep": {
          "score": 89,
          "durationMinutes": 405.0,
          "efficiency": 88.0,
          "deepMinutes": 95.0,
          "remMinutes": 80.0,
          "awakeMinutes": 65.0,
          "availableFactors": 4
        },
        "activityLoad": {
          "score": 35,
          "availableFactors": [
            "activeCalories",
            "steps"
          ]
        },
        "targetLoad": [
          40,
          65
        ],
        "sleepBankMinutes": 35,
        "tonightSleepNeedMinutes": 450,
        "headline": "回復状態は中間。普段通りでよいものの、追い込みすぎには注意です。",
        "warnings": [
          "安静時心拍が通常より高い"
        ],
        "positives": [
          "睡眠スコア 89"
        ],
        "actions": [
          "余力があれば30分前後の散歩または中強度の運動で、活動負荷を目安範囲へ近づける。",
          "今夜の睡眠目安は7h30m。就寝前30分は光と刺激を抑える。"
        ],
        "monitor": {
          "hrv": {
            "average": null,
            "deviation": null,
            "days": 0,
            "value": null,
            "status": "insufficient",
            "delta": null,
            "label": "HRV"
          },
          "restingHeartRate": {
            "average": 47.25,
            "deviation": 2.993743475984541,
            "days": 10,
            "value": 57.0,
            "status": "above",
            "delta": 9.75,
            "label": "安静時心拍"
          },
          "respiratoryRate": {
            "average": null,
            "deviation": null,
            "days": 0,
            "value": null,
            "status": "insufficient",
            "delta": null,
            "label": "呼吸数"
          },
          "oxygenAvg": {
            "average": 98.32611287253519,
            "deviation": 0.12241470822025821,
            "days": 19,
            "value": 98.0,
            "status": "usual",
            "delta": -0.32611287253519095,
            "label": "血中酸素"
          }
        },
        "confidence": "medium",
        "baselineWindowDays": 28
      },
      "weight": null,
      "bodyFat": null,
      "activeCalories": 218.0,
      "heartRateAvg": 72.05,
      "sleepMinutes": 6.75,
      "steps": 5871.0,
      "sleepEfficiency": 88.04,
      "deepSleepMinutes": 1.58,
      "remSleepMinutes": 1.33,
      "walkingMinutes": null,
      "exerciseMinutes": null,
      "restingHeartRate": 57.0,
      "hrv": null,
      "respiratoryRate": null,
      "oxygenAvg": 98.0,
      "comparisons": {
        "weight": {
          "previousDelta": null,
          "avg7": 56.4,
          "avg7Delta": null
        },
        "bodyFat": {
          "previousDelta": null,
          "avg7": 11.77,
          "avg7Delta": null
        },
        "activeCalories": {
          "previousDelta": 12.0,
          "avg7": 258.67,
          "avg7Delta": -40.67
        },
        "heartRateAvg": {
          "previousDelta": 11.76,
          "avg7": 59.74,
          "avg7Delta": 12.31
        },
        "sleepMinutes": {
          "previousDelta": -0.75,
          "avg7": 8.16,
          "avg7Delta": -1.41
        },
        "steps": {
          "previousDelta": 369.0,
          "avg7": 7013.14,
          "avg7Delta": -1142.14
        },
        "sleepEfficiency": {
          "previousDelta": 1.08,
          "avg7": 92.33,
          "avg7Delta": -4.29
        },
        "deepSleepMinutes": {
          "previousDelta": 0.08,
          "avg7": 1.83,
          "avg7Delta": -0.25
        },
        "remSleepMinutes": {
          "previousDelta": 0.0,
          "avg7": 1.88,
          "avg7Delta": -0.55
        },
        "walkingMinutes": {
          "previousDelta": null,
          "avg7": 0.31,
          "avg7Delta": null
        },
        "exerciseMinutes": {
          "previousDelta": null,
          "avg7": 1.29,
          "avg7Delta": null
        },
        "restingHeartRate": {
          "previousDelta": 13.0,
          "avg7": 48.67,
          "avg7Delta": 8.33
        },
        "hrv": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "respiratoryRate": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "oxygenAvg": {
          "previousDelta": -0.23,
          "avg7": 98.29,
          "avg7Delta": -0.29
        }
      }
    },
    {
      "date": "2026-07-11",
      "sourceExportedAt": "2026-07-21T00:27:20.917614Z",
      "sourceReceivedAt": "2026-07-21T00:27:21.575Z",
      "coach": {
        "date": "2026-07-11",
        "recoveryScore": 64,
        "recoveryBand": "moderate",
        "sleep": {
          "score": 93,
          "durationMinutes": 435.0,
          "efficiency": 88.8,
          "deepMinutes": 80.0,
          "remMinutes": 75.0,
          "awakeMinutes": 80.0,
          "availableFactors": 4
        },
        "activityLoad": {
          "score": 41,
          "availableFactors": [
            "activeCalories",
            "exerciseMinutes",
            "steps"
          ]
        },
        "targetLoad": [
          40,
          65
        ],
        "sleepBankMinutes": 20,
        "tonightSleepNeedMinutes": 450,
        "headline": "回復状態は中間。普段通りでよいものの、追い込みすぎには注意です。",
        "warnings": [
          "安静時心拍が通常より高い"
        ],
        "positives": [
          "睡眠スコア 93"
        ],
        "actions": [
          "運動は普段通りでOK。活動負荷は目安範囲内を狙う。",
          "今夜の睡眠目安は7h30m。就寝前30分は光と刺激を抑える。"
        ],
        "monitor": {
          "hrv": {
            "average": null,
            "deviation": null,
            "days": 0,
            "value": null,
            "status": "insufficient",
            "delta": null,
            "label": "HRV"
          },
          "restingHeartRate": {
            "average": 48.13636363636363,
            "deviation": 4.000516495579659,
            "days": 11,
            "value": 54.0,
            "status": "above",
            "delta": 5.863636363636367,
            "label": "安静時心拍"
          },
          "respiratoryRate": {
            "average": null,
            "deviation": null,
            "days": 0,
            "value": null,
            "status": "insufficient",
            "delta": null,
            "label": "呼吸数"
          },
          "oxygenAvg": {
            "average": 98.30980722890844,
            "deviation": 0.138880160630644,
            "days": 20,
            "value": 98.13513513513513,
            "status": "usual",
            "delta": -0.17467209377331017,
            "label": "血中酸素"
          }
        },
        "confidence": "medium",
        "baselineWindowDays": 28
      },
      "weight": 56.2,
      "bodyFat": 10.8,
      "activeCalories": 147.0,
      "heartRateAvg": 68.43,
      "sleepMinutes": 7.25,
      "steps": 9053.0,
      "sleepEfficiency": 88.78,
      "deepSleepMinutes": 1.33,
      "remSleepMinutes": 1.25,
      "walkingMinutes": null,
      "exerciseMinutes": 0.86,
      "restingHeartRate": 54.0,
      "hrv": null,
      "respiratoryRate": null,
      "oxygenAvg": 98.14,
      "comparisons": {
        "weight": {
          "previousDelta": null,
          "avg7": 56.4,
          "avg7Delta": -0.2
        },
        "bodyFat": {
          "previousDelta": null,
          "avg7": 11.77,
          "avg7Delta": -0.97
        },
        "activeCalories": {
          "previousDelta": -71.0,
          "avg7": 252.33,
          "avg7Delta": -105.33
        },
        "heartRateAvg": {
          "previousDelta": -3.62,
          "avg7": 61.38,
          "avg7Delta": 7.05
        },
        "sleepMinutes": {
          "previousDelta": 0.5,
          "avg7": 7.69,
          "avg7Delta": -0.44
        },
        "steps": {
          "previousDelta": 3182.0,
          "avg7": 6875.0,
          "avg7Delta": 2178.0
        },
        "sleepEfficiency": {
          "previousDelta": 0.74,
          "avg7": 90.9,
          "avg7Delta": -2.12
        },
        "deepSleepMinutes": {
          "previousDelta": -0.25,
          "avg7": 1.75,
          "avg7Delta": -0.42
        },
        "remSleepMinutes": {
          "previousDelta": -0.08,
          "avg7": 1.69,
          "avg7Delta": -0.44
        },
        "walkingMinutes": {
          "previousDelta": null,
          "avg7": 0.31,
          "avg7Delta": null
        },
        "exerciseMinutes": {
          "previousDelta": null,
          "avg7": 1.29,
          "avg7Delta": -0.43
        },
        "restingHeartRate": {
          "previousDelta": -3.0,
          "avg7": 50.75,
          "avg7Delta": 3.25
        },
        "hrv": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "respiratoryRate": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "oxygenAvg": {
          "previousDelta": 0.14,
          "avg7": 98.26,
          "avg7Delta": -0.12
        }
      }
    },
    {
      "date": "2026-07-12",
      "sourceExportedAt": "2026-07-21T00:27:20.917614Z",
      "sourceReceivedAt": "2026-07-21T00:27:21.575Z",
      "coach": {
        "date": "2026-07-12",
        "recoveryScore": 72,
        "recoveryBand": "moderate",
        "sleep": {
          "score": 91,
          "durationMinutes": 450.0,
          "efficiency": 87.8,
          "deepMinutes": 90.0,
          "remMinutes": 155.0,
          "awakeMinutes": 72.5,
          "availableFactors": 4
        },
        "activityLoad": {
          "score": 68,
          "availableFactors": [
            "steps"
          ]
        },
        "targetLoad": [
          40,
          65
        ],
        "sleepBankMinutes": -60,
        "tonightSleepNeedMinutes": 470,
        "headline": "回復状態は中間。普段通りでよいものの、追い込みすぎには注意です。",
        "warnings": [],
        "positives": [
          "睡眠スコア 91"
        ],
        "actions": [
          "今日の負荷は十分。追加の高強度運動は不要です。",
          "今夜の睡眠目安は7h50m。就寝前30分は光と刺激を抑える。"
        ],
        "monitor": {
          "hrv": {
            "average": null,
            "deviation": null,
            "days": 0,
            "value": null,
            "status": "insufficient",
            "delta": null,
            "label": "HRV"
          },
          "restingHeartRate": {
            "average": 48.625,
            "deviation": 4.158951189903531,
            "days": 12,
            "value": 50.0,
            "status": "usual",
            "delta": 1.375,
            "label": "安静時心拍"
          },
          "respiratoryRate": {
            "average": null,
            "deviation": null,
            "days": 0,
            "value": null,
            "status": "insufficient",
            "delta": null,
            "label": "呼吸数"
          },
          "oxygenAvg": {
            "average": 98.30148951015732,
            "deviation": 0.14054510330602868,
            "days": 21,
            "value": 98.48780487804878,
            "status": "usual",
            "delta": 0.18631536789145287,
            "label": "血中酸素"
          }
        },
        "confidence": "medium",
        "baselineWindowDays": 28
      },
      "weight": 57.3,
      "bodyFat": 10.0,
      "activeCalories": null,
      "heartRateAvg": 64.69,
      "sleepMinutes": 7.5,
      "steps": 9760.0,
      "sleepEfficiency": 87.8,
      "deepSleepMinutes": 1.5,
      "remSleepMinutes": 2.58,
      "walkingMinutes": null,
      "exerciseMinutes": null,
      "restingHeartRate": 50.0,
      "hrv": null,
      "respiratoryRate": null,
      "oxygenAvg": 98.49,
      "comparisons": {
        "weight": {
          "previousDelta": 1.1,
          "avg7": 56.27,
          "avg7Delta": 1.03
        },
        "bodyFat": {
          "previousDelta": -0.8,
          "avg7": 11.4,
          "avg7Delta": -1.4
        },
        "activeCalories": {
          "previousDelta": null,
          "avg7": 197.83,
          "avg7Delta": null
        },
        "heartRateAvg": {
          "previousDelta": -3.74,
          "avg7": 62.01,
          "avg7Delta": 2.68
        },
        "sleepMinutes": {
          "previousDelta": 0.25,
          "avg7": 7.58,
          "avg7Delta": -0.08
        },
        "steps": {
          "previousDelta": 707.0,
          "avg7": 6427.0,
          "avg7Delta": 3333.0
        },
        "sleepEfficiency": {
          "previousDelta": -0.98,
          "avg7": 90.37,
          "avg7Delta": -2.57
        },
        "deepSleepMinutes": {
          "previousDelta": 0.17,
          "avg7": 1.65,
          "avg7Delta": -0.15
        },
        "remSleepMinutes": {
          "previousDelta": 1.33,
          "avg7": 1.58,
          "avg7Delta": 1.0
        },
        "walkingMinutes": {
          "previousDelta": null,
          "avg7": 0.31,
          "avg7Delta": null
        },
        "exerciseMinutes": {
          "previousDelta": null,
          "avg7": 1.07,
          "avg7Delta": null
        },
        "restingHeartRate": {
          "previousDelta": -4.0,
          "avg7": 51.5,
          "avg7Delta": -1.5
        },
        "hrv": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "respiratoryRate": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "oxygenAvg": {
          "previousDelta": 0.35,
          "avg7": 98.27,
          "avg7Delta": 0.22
        }
      }
    },
    {
      "date": "2026-07-13",
      "sourceExportedAt": "2026-07-21T00:27:20.917614Z",
      "sourceReceivedAt": "2026-07-21T00:27:21.575Z",
      "coach": {
        "date": "2026-07-13",
        "recoveryScore": 60,
        "recoveryBand": "moderate",
        "sleep": {
          "score": 93,
          "durationMinutes": 405.0,
          "efficiency": 94.7,
          "deepMinutes": 85.0,
          "remMinutes": 105.0,
          "awakeMinutes": 35.0,
          "availableFactors": 4
        },
        "activityLoad": {
          "score": 49,
          "availableFactors": [
            "activeCalories",
            "exerciseMinutes",
            "steps"
          ]
        },
        "targetLoad": [
          40,
          65
        ],
        "sleepBankMinutes": -105,
        "tonightSleepNeedMinutes": 485,
        "headline": "回復状態は中間。普段通りでよいものの、追い込みすぎには注意です。",
        "warnings": [
          "安静時心拍が通常より高い"
        ],
        "positives": [
          "睡眠スコア 93"
        ],
        "actions": [
          "運動は普段通りでOK。活動負荷は目安範囲内を狙う。",
          "直近7日の睡眠負債は約1.8時間。今夜は8h05mを目安にする。"
        ],
        "monitor": {
          "hrv": {
            "average": null,
            "deviation": null,
            "days": 0,
            "value": null,
            "status": "insufficient",
            "delta": null,
            "label": "HRV"
          },
          "restingHeartRate": {
            "average": 48.73076923076923,
            "deviation": 4.012554263306146,
            "days": 13,
            "value": 57.0,
            "status": "above",
            "delta": 8.269230769230766,
            "label": "安静時心拍"
          },
          "respiratoryRate": {
            "average": null,
            "deviation": null,
            "days": 0,
            "value": null,
            "status": "insufficient",
            "delta": null,
            "label": "呼吸数"
          },
          "oxygenAvg": {
            "average": 98.30995839051603,
            "deviation": 0.1426927693081463,
            "days": 22,
            "value": 98.73170731707317,
            "status": "usual",
            "delta": 0.421748926557143,
            "label": "血中酸素"
          }
        },
        "confidence": "medium",
        "baselineWindowDays": 28
      },
      "weight": 57.3,
      "bodyFat": 10.5,
      "activeCalories": 341.0,
      "heartRateAvg": 64.65,
      "sleepMinutes": 6.75,
      "steps": 6521.0,
      "sleepEfficiency": 94.74,
      "deepSleepMinutes": 1.42,
      "remSleepMinutes": 1.75,
      "walkingMinutes": 0.5,
      "exerciseMinutes": 0.87,
      "restingHeartRate": 57.0,
      "hrv": null,
      "respiratoryRate": null,
      "oxygenAvg": 98.73,
      "comparisons": {
        "weight": {
          "previousDelta": 0.0,
          "avg7": 56.53,
          "avg7Delta": 0.77
        },
        "bodyFat": {
          "previousDelta": 0.5,
          "avg7": 11.05,
          "avg7Delta": -0.55
        },
        "activeCalories": {
          "previousDelta": null,
          "avg7": 233.6,
          "avg7Delta": 107.4
        },
        "heartRateAvg": {
          "previousDelta": -0.04,
          "avg7": 63.7,
          "avg7Delta": 0.95
        },
        "sleepMinutes": {
          "previousDelta": -0.75,
          "avg7": 7.25,
          "avg7Delta": -0.5
        },
        "steps": {
          "previousDelta": -3239.0,
          "avg7": 7275.29,
          "avg7Delta": -754.29
        },
        "sleepEfficiency": {
          "previousDelta": 6.94,
          "avg7": 87.89,
          "avg7Delta": 6.85
        },
        "deepSleepMinutes": {
          "previousDelta": -0.08,
          "avg7": 1.48,
          "avg7Delta": -0.06
        },
        "remSleepMinutes": {
          "previousDelta": -0.83,
          "avg7": 1.62,
          "avg7Delta": 0.13
        },
        "walkingMinutes": {
          "previousDelta": null,
          "avg7": 0.31,
          "avg7Delta": 0.19
        },
        "exerciseMinutes": {
          "previousDelta": null,
          "avg7": 1.07,
          "avg7Delta": -0.2
        },
        "restingHeartRate": {
          "previousDelta": 7.0,
          "avg7": 51.2,
          "avg7Delta": 5.8
        },
        "hrv": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "respiratoryRate": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "oxygenAvg": {
          "previousDelta": 0.24,
          "avg7": 98.26,
          "avg7Delta": 0.47
        }
      }
    },
    {
      "date": "2026-07-14",
      "sourceExportedAt": "2026-07-21T00:27:20.917614Z",
      "sourceReceivedAt": "2026-07-21T00:27:21.575Z",
      "coach": {
        "date": "2026-07-14",
        "recoveryScore": 84,
        "recoveryBand": "high",
        "sleep": {
          "score": 93,
          "durationMinutes": 405.0,
          "efficiency": 94.7,
          "deepMinutes": 90.0,
          "remMinutes": 100.0,
          "awakeMinutes": 42.5,
          "availableFactors": 4
        },
        "activityLoad": {
          "score": 27,
          "availableFactors": [
            "activeCalories",
            "steps"
          ]
        },
        "targetLoad": [
          60,
          80
        ],
        "sleepBankMinutes": -150,
        "tonightSleepNeedMinutes": 500,
        "headline": "回復状態は良好。普段通りか、少し強度を上げられる日です。",
        "warnings": [],
        "positives": [
          "睡眠スコア 93"
        ],
        "actions": [
          "余力があれば30分前後の散歩または中強度の運動で、活動負荷を目安範囲へ近づける。",
          "直近7日の睡眠負債は約2.5時間。今夜は8h20mを目安にする。"
        ],
        "monitor": {
          "hrv": {
            "average": null,
            "deviation": null,
            "days": 0,
            "value": null,
            "status": "insufficient",
            "delta": null,
            "label": "HRV"
          },
          "restingHeartRate": {
            "average": 49.32142857142857,
            "deviation": 4.4142914932925645,
            "days": 14,
            "value": 45.0,
            "status": "usual",
            "delta": -4.321428571428569,
            "label": "安静時心拍"
          },
          "respiratoryRate": {
            "average": null,
            "deviation": null,
            "days": 0,
            "value": null,
            "status": "insufficient",
            "delta": null,
            "label": "呼吸数"
          },
          "oxygenAvg": {
            "average": 98.32829530036635,
            "deviation": 0.16393073379361098,
            "days": 23,
            "value": 98.68888888888888,
            "status": "usual",
            "delta": 0.36059358852253354,
            "label": "血中酸素"
          }
        },
        "confidence": "medium",
        "baselineWindowDays": 28
      },
      "weight": 57.4,
      "bodyFat": 9.9,
      "activeCalories": 174.0,
      "heartRateAvg": 57.06,
      "sleepMinutes": 6.75,
      "steps": 3932.0,
      "sleepEfficiency": 94.74,
      "deepSleepMinutes": 1.5,
      "remSleepMinutes": 1.67,
      "walkingMinutes": null,
      "exerciseMinutes": null,
      "restingHeartRate": 45.0,
      "hrv": null,
      "respiratoryRate": null,
      "oxygenAvg": 98.69,
      "comparisons": {
        "weight": {
          "previousDelta": 0.1,
          "avg7": 56.68,
          "avg7Delta": 0.72
        },
        "bodyFat": {
          "previousDelta": -0.6,
          "avg7": 10.94,
          "avg7Delta": -1.04
        },
        "activeCalories": {
          "previousDelta": -167.0,
          "avg7": 251.5,
          "avg7Delta": -77.5
        },
        "heartRateAvg": {
          "previousDelta": -7.59,
          "avg7": 64.61,
          "avg7Delta": -7.55
        },
        "sleepMinutes": {
          "previousDelta": 0.0,
          "avg7": 7.15,
          "avg7Delta": -0.4
        },
        "steps": {
          "previousDelta": -2589.0,
          "avg7": 7179.0,
          "avg7Delta": -3247.0
        },
        "sleepEfficiency": {
          "previousDelta": 0.0,
          "avg7": 89.26,
          "avg7Delta": 5.48
        },
        "deepSleepMinutes": {
          "previousDelta": 0.08,
          "avg7": 1.47,
          "avg7Delta": 0.03
        },
        "remSleepMinutes": {
          "previousDelta": -0.08,
          "avg7": 1.65,
          "avg7Delta": 0.02
        },
        "walkingMinutes": {
          "previousDelta": null,
          "avg7": 0.41,
          "avg7Delta": null
        },
        "exerciseMinutes": {
          "previousDelta": null,
          "avg7": 1.01,
          "avg7Delta": null
        },
        "restingHeartRate": {
          "previousDelta": -12.0,
          "avg7": 52.17,
          "avg7Delta": -7.17
        },
        "hrv": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "respiratoryRate": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "oxygenAvg": {
          "previousDelta": -0.04,
          "avg7": 98.32,
          "avg7Delta": 0.37
        }
      }
    },
    {
      "date": "2026-07-15",
      "sourceExportedAt": "2026-07-21T00:27:20.917614Z",
      "sourceReceivedAt": "2026-07-21T00:27:21.575Z",
      "coach": {
        "date": "2026-07-15",
        "recoveryScore": 84,
        "recoveryBand": "high",
        "sleep": {
          "score": 95,
          "durationMinutes": 480.0,
          "efficiency": 92.3,
          "deepMinutes": 130.0,
          "remMinutes": 110.0,
          "awakeMinutes": 60.0,
          "availableFactors": 4
        },
        "activityLoad": {
          "score": 34,
          "availableFactors": [
            "activeCalories",
            "steps"
          ]
        },
        "targetLoad": [
          60,
          80
        ],
        "sleepBankMinutes": -120,
        "tonightSleepNeedMinutes": 490,
        "headline": "回復状態は良好。普段通りか、少し強度を上げられる日です。",
        "warnings": [],
        "positives": [
          "睡眠スコア 95"
        ],
        "actions": [
          "余力があれば30分前後の散歩または中強度の運動で、活動負荷を目安範囲へ近づける。",
          "直近7日の睡眠負債は約2.0時間。今夜は8h10mを目安にする。"
        ],
        "monitor": {
          "hrv": {
            "average": null,
            "deviation": null,
            "days": 0,
            "value": null,
            "status": "insufficient",
            "delta": null,
            "label": "HRV"
          },
          "restingHeartRate": {
            "average": 49.03333333333333,
            "deviation": 4.398737192523428,
            "days": 15,
            "value": 45.0,
            "status": "usual",
            "delta": -4.033333333333331,
            "label": "安静時心拍"
          },
          "respiratoryRate": {
            "average": null,
            "deviation": null,
            "days": 0,
            "value": null,
            "status": "insufficient",
            "delta": null,
            "label": "呼吸数"
          },
          "oxygenAvg": {
            "average": 98.34332003322146,
            "deviation": 0.17591374304794455,
            "days": 24,
            "value": 98.25,
            "status": "usual",
            "delta": -0.09332003322145965,
            "label": "血中酸素"
          }
        },
        "confidence": "medium",
        "baselineWindowDays": 28
      },
      "weight": 57.2,
      "bodyFat": 10.0,
      "activeCalories": 199.0,
      "heartRateAvg": 59.1,
      "sleepMinutes": 8.0,
      "steps": 5605.0,
      "sleepEfficiency": 92.31,
      "deepSleepMinutes": 2.17,
      "remSleepMinutes": 1.83,
      "walkingMinutes": 0.5,
      "exerciseMinutes": null,
      "restingHeartRate": 45.0,
      "hrv": null,
      "respiratoryRate": null,
      "oxygenAvg": 98.25,
      "comparisons": {
        "weight": {
          "previousDelta": -0.2,
          "avg7": 56.88,
          "avg7Delta": 0.32
        },
        "bodyFat": {
          "previousDelta": 0.1,
          "avg7": 10.58,
          "avg7Delta": -0.58
        },
        "activeCalories": {
          "previousDelta": 25.0,
          "avg7": 213.83,
          "avg7Delta": -14.83
        },
        "heartRateAvg": {
          "previousDelta": 2.04,
          "avg7": 63.88,
          "avg7Delta": -4.78
        },
        "sleepMinutes": {
          "previousDelta": 1.25,
          "avg7": 7.08,
          "avg7Delta": 0.92
        },
        "steps": {
          "previousDelta": 1673.0,
          "avg7": 6518.43,
          "avg7Delta": -913.43
        },
        "sleepEfficiency": {
          "previousDelta": -2.43,
          "avg7": 90.18,
          "avg7Delta": 2.13
        },
        "deepSleepMinutes": {
          "previousDelta": 0.67,
          "avg7": 1.47,
          "avg7Delta": 0.7
        },
        "remSleepMinutes": {
          "previousDelta": 0.16,
          "avg7": 1.65,
          "avg7Delta": 0.18
        },
        "walkingMinutes": {
          "previousDelta": null,
          "avg7": 0.5,
          "avg7Delta": 0.0
        },
        "exerciseMinutes": {
          "previousDelta": null,
          "avg7": 0.86,
          "avg7Delta": null
        },
        "restingHeartRate": {
          "previousDelta": 0.0,
          "avg7": 51.14,
          "avg7Delta": -6.14
        },
        "hrv": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "respiratoryRate": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "oxygenAvg": {
          "previousDelta": -0.44,
          "avg7": 98.36,
          "avg7Delta": -0.11
        }
      }
    },
    {
      "date": "2026-07-16",
      "sourceExportedAt": "2026-07-21T00:27:20.917614Z",
      "sourceReceivedAt": "2026-07-21T00:27:21.575Z",
      "coach": {
        "date": "2026-07-16",
        "recoveryScore": 76,
        "recoveryBand": "high",
        "sleep": {
          "score": 95,
          "durationMinutes": 450.0,
          "efficiency": 91.4,
          "deepMinutes": 115.0,
          "remMinutes": 140.0,
          "awakeMinutes": 50.0,
          "availableFactors": 4
        },
        "activityLoad": {
          "score": 44,
          "availableFactors": [
            "activeCalories",
            "steps"
          ]
        },
        "targetLoad": [
          60,
          80
        ],
        "sleepBankMinutes": -120,
        "tonightSleepNeedMinutes": 490,
        "headline": "回復状態は良好。普段通りか、少し強度を上げられる日です。",
        "warnings": [],
        "positives": [
          "睡眠スコア 95"
        ],
        "actions": [
          "余力があれば30分前後の散歩または中強度の運動で、活動負荷を目安範囲へ近づける。",
          "直近7日の睡眠負債は約2.0時間。今夜は8h10mを目安にする。"
        ],
        "monitor": {
          "hrv": {
            "average": null,
            "deviation": null,
            "days": 0,
            "value": null,
            "status": "insufficient",
            "delta": null,
            "label": "HRV"
          },
          "restingHeartRate": {
            "average": 48.78125,
            "deviation": 4.369527827752101,
            "days": 16,
            "value": 49.0,
            "status": "usual",
            "delta": 0.21875,
            "label": "安静時心拍"
          },
          "respiratoryRate": {
            "average": null,
            "deviation": null,
            "days": 0,
            "value": null,
            "status": "insufficient",
            "delta": null,
            "label": "呼吸数"
          },
          "oxygenAvg": {
            "average": 98.33958723189261,
            "deviation": 0.17332694692883185,
            "days": 25,
            "value": 98.79069767441861,
            "status": "usual",
            "delta": 0.4511104425260015,
            "label": "血中酸素"
          }
        },
        "confidence": "medium",
        "baselineWindowDays": 28
      },
      "weight": null,
      "bodyFat": null,
      "activeCalories": 251.0,
      "heartRateAvg": 58.38,
      "sleepMinutes": 7.5,
      "steps": 7152.0,
      "sleepEfficiency": 91.37,
      "deepSleepMinutes": 1.92,
      "remSleepMinutes": 2.33,
      "walkingMinutes": 0.5,
      "exerciseMinutes": null,
      "restingHeartRate": 49.0,
      "hrv": null,
      "respiratoryRate": null,
      "oxygenAvg": 98.79,
      "comparisons": {
        "weight": {
          "previousDelta": null,
          "avg7": 57.08,
          "avg7Delta": null
        },
        "bodyFat": {
          "previousDelta": null,
          "avg7": 10.24,
          "avg7Delta": null
        },
        "activeCalories": {
          "previousDelta": 52.0,
          "avg7": 214.17,
          "avg7Delta": 36.83
        },
        "heartRateAvg": {
          "previousDelta": -0.72,
          "avg7": 63.75,
          "avg7Delta": -5.37
        },
        "sleepMinutes": {
          "previousDelta": -0.5,
          "avg7": 7.21,
          "avg7Delta": 0.29
        },
        "steps": {
          "previousDelta": 1547.0,
          "avg7": 6606.29,
          "avg7Delta": 545.71
        },
        "sleepEfficiency": {
          "previousDelta": -0.94,
          "avg7": 90.48,
          "avg7Delta": 0.89
        },
        "deepSleepMinutes": {
          "previousDelta": -0.25,
          "avg7": 1.57,
          "avg7Delta": 0.35
        },
        "remSleepMinutes": {
          "previousDelta": 0.5,
          "avg7": 1.68,
          "avg7Delta": 0.65
        },
        "walkingMinutes": {
          "previousDelta": 0.0,
          "avg7": 0.5,
          "avg7Delta": 0.0
        },
        "exerciseMinutes": {
          "previousDelta": null,
          "avg7": 0.86,
          "avg7Delta": null
        },
        "restingHeartRate": {
          "previousDelta": 4.0,
          "avg7": 50.29,
          "avg7Delta": -1.29
        },
        "hrv": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "respiratoryRate": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "oxygenAvg": {
          "previousDelta": 0.54,
          "avg7": 98.36,
          "avg7Delta": 0.43
        }
      }
    },
    {
      "date": "2026-07-17",
      "sourceExportedAt": "2026-07-21T00:27:20.917614Z",
      "sourceReceivedAt": "2026-07-21T00:27:21.575Z",
      "coach": {
        "date": "2026-07-17",
        "recoveryScore": 74,
        "recoveryBand": "moderate",
        "sleep": {
          "score": 94,
          "durationMinutes": 415.0,
          "efficiency": 92.2,
          "deepMinutes": 100.0,
          "remMinutes": 95.0,
          "awakeMinutes": 37.5,
          "availableFactors": 4
        },
        "activityLoad": {
          "score": 33,
          "availableFactors": [
            "activeCalories",
            "steps"
          ]
        },
        "targetLoad": [
          40,
          65
        ],
        "sleepBankMinutes": -110,
        "tonightSleepNeedMinutes": 487,
        "headline": "回復状態は中間。普段通りでよいものの、追い込みすぎには注意です。",
        "warnings": [],
        "positives": [
          "睡眠スコア 94"
        ],
        "actions": [
          "余力があれば30分前後の散歩または中強度の運動で、活動負荷を目安範囲へ近づける。",
          "直近7日の睡眠負債は約1.8時間。今夜は8h07mを目安にする。"
        ],
        "monitor": {
          "hrv": {
            "average": null,
            "deviation": null,
            "days": 0,
            "value": null,
            "status": "insufficient",
            "delta": null,
            "label": "HRV"
          },
          "restingHeartRate": {
            "average": 48.794117647058826,
            "deviation": 4.239377116877,
            "days": 17,
            "value": 50.0,
            "status": "usual",
            "delta": 1.205882352941174,
            "label": "安静時心拍"
          },
          "respiratoryRate": {
            "average": null,
            "deviation": null,
            "days": 0,
            "value": null,
            "status": "insufficient",
            "delta": null,
            "label": "呼吸数"
          },
          "oxygenAvg": {
            "average": 98.35693763352823,
            "deviation": 0.19082104456672389,
            "days": 26,
            "value": 98.46666666666667,
            "status": "usual",
            "delta": 0.10972903313843574,
            "label": "血中酸素"
          }
        },
        "confidence": "medium",
        "baselineWindowDays": 28
      },
      "weight": null,
      "bodyFat": null,
      "activeCalories": 195.0,
      "heartRateAvg": 60.25,
      "sleepMinutes": 6.92,
      "steps": 5135.0,
      "sleepEfficiency": 92.22,
      "deepSleepMinutes": 1.67,
      "remSleepMinutes": 1.58,
      "walkingMinutes": null,
      "exerciseMinutes": null,
      "restingHeartRate": 50.0,
      "hrv": null,
      "respiratoryRate": null,
      "oxygenAvg": 98.47,
      "comparisons": {
        "weight": {
          "previousDelta": null,
          "avg7": 57.08,
          "avg7Delta": null
        },
        "bodyFat": {
          "previousDelta": null,
          "avg7": 10.24,
          "avg7Delta": null
        },
        "activeCalories": {
          "previousDelta": -56.0,
          "avg7": 221.67,
          "avg7Delta": -26.67
        },
        "heartRateAvg": {
          "previousDelta": 1.87,
          "avg7": 63.48,
          "avg7Delta": -3.23
        },
        "sleepMinutes": {
          "previousDelta": -0.58,
          "avg7": 7.21,
          "avg7Delta": -0.29
        },
        "steps": {
          "previousDelta": -2017.0,
          "avg7": 6842.0,
          "avg7Delta": -1707.0
        },
        "sleepEfficiency": {
          "previousDelta": 0.85,
          "avg7": 91.11,
          "avg7Delta": 1.11
        },
        "deepSleepMinutes": {
          "previousDelta": -0.25,
          "avg7": 1.63,
          "avg7Delta": 0.04
        },
        "remSleepMinutes": {
          "previousDelta": -0.75,
          "avg7": 1.82,
          "avg7Delta": -0.24
        },
        "walkingMinutes": {
          "previousDelta": null,
          "avg7": 0.5,
          "avg7Delta": null
        },
        "exerciseMinutes": {
          "previousDelta": null,
          "avg7": 0.86,
          "avg7Delta": null
        },
        "restingHeartRate": {
          "previousDelta": 1.0,
          "avg7": 51.0,
          "avg7Delta": -1.0
        },
        "hrv": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "respiratoryRate": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "oxygenAvg": {
          "previousDelta": -0.32,
          "avg7": 98.44,
          "avg7Delta": 0.03
        }
      }
    },
    {
      "date": "2026-07-18",
      "sourceExportedAt": "2026-07-21T00:27:20.917614Z",
      "sourceReceivedAt": "2026-07-21T00:27:21.575Z",
      "coach": {
        "date": "2026-07-18",
        "recoveryScore": 76,
        "recoveryBand": "high",
        "sleep": {
          "score": 98,
          "durationMinutes": 465.0,
          "efficiency": 94.4,
          "deepMinutes": 90.0,
          "remMinutes": 115.0,
          "awakeMinutes": 37.5,
          "availableFactors": 4
        },
        "activityLoad": {
          "score": 51,
          "availableFactors": [
            "activeCalories",
            "steps"
          ]
        },
        "targetLoad": [
          60,
          80
        ],
        "sleepBankMinutes": -80,
        "tonightSleepNeedMinutes": 477,
        "headline": "回復状態は良好。普段通りか、少し強度を上げられる日です。",
        "warnings": [],
        "positives": [
          "睡眠スコア 98"
        ],
        "actions": [
          "余力があれば30分前後の散歩または中強度の運動で、活動負荷を目安範囲へ近づける。",
          "今夜の睡眠目安は7h57m。就寝前30分は光と刺激を抑える。"
        ],
        "monitor": {
          "hrv": {
            "average": null,
            "deviation": null,
            "days": 0,
            "value": null,
            "status": "insufficient",
            "delta": null,
            "label": "HRV"
          },
          "restingHeartRate": {
            "average": 48.861111111111114,
            "deviation": 4.129183251078554,
            "days": 18,
            "value": 50.0,
            "status": "usual",
            "delta": 1.1388888888888857,
            "label": "安静時心拍"
          },
          "respiratoryRate": {
            "average": null,
            "deviation": null,
            "days": 0,
            "value": null,
            "status": "insufficient",
            "delta": null,
            "label": "呼吸数"
          },
          "oxygenAvg": {
            "average": 98.3610016717926,
            "deviation": 0.1883971342288175,
            "days": 27,
            "value": 98.06818181818181,
            "status": "usual",
            "delta": -0.29281985361078,
            "label": "血中酸素"
          }
        },
        "confidence": "medium",
        "baselineWindowDays": 28
      },
      "weight": 57.3,
      "bodyFat": 11.1,
      "activeCalories": 350.0,
      "heartRateAvg": 62.1,
      "sleepMinutes": 7.75,
      "steps": 5935.0,
      "sleepEfficiency": 94.42,
      "deepSleepMinutes": 1.5,
      "remSleepMinutes": 1.92,
      "walkingMinutes": null,
      "exerciseMinutes": null,
      "restingHeartRate": 50.0,
      "hrv": null,
      "respiratoryRate": null,
      "oxygenAvg": 98.07,
      "comparisons": {
        "weight": {
          "previousDelta": null,
          "avg7": 57.08,
          "avg7Delta": 0.22
        },
        "bodyFat": {
          "previousDelta": null,
          "avg7": 10.24,
          "avg7Delta": 0.86
        },
        "activeCalories": {
          "previousDelta": 155.0,
          "avg7": 217.83,
          "avg7Delta": 132.17
        },
        "heartRateAvg": {
          "previousDelta": 1.85,
          "avg7": 61.79,
          "avg7Delta": 0.31
        },
        "sleepMinutes": {
          "previousDelta": 0.83,
          "avg7": 7.24,
          "avg7Delta": 0.51
        },
        "steps": {
          "previousDelta": 800.0,
          "avg7": 6736.86,
          "avg7Delta": -801.86
        },
        "sleepEfficiency": {
          "previousDelta": 2.2,
          "avg7": 91.71,
          "avg7Delta": 2.71
        },
        "deepSleepMinutes": {
          "previousDelta": -0.17,
          "avg7": 1.64,
          "avg7Delta": -0.14
        },
        "remSleepMinutes": {
          "previousDelta": 0.34,
          "avg7": 1.86,
          "avg7Delta": 0.06
        },
        "walkingMinutes": {
          "previousDelta": null,
          "avg7": 0.5,
          "avg7Delta": null
        },
        "exerciseMinutes": {
          "previousDelta": null,
          "avg7": 0.86,
          "avg7Delta": null
        },
        "restingHeartRate": {
          "previousDelta": 0.0,
          "avg7": 50.0,
          "avg7Delta": 0.0
        },
        "hrv": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "respiratoryRate": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "oxygenAvg": {
          "previousDelta": -0.4,
          "avg7": 98.51,
          "avg7Delta": -0.44
        }
      }
    },
    {
      "date": "2026-07-19",
      "sourceExportedAt": "2026-07-21T00:27:20.917614Z",
      "sourceReceivedAt": "2026-07-21T00:27:21.575Z",
      "coach": {
        "date": "2026-07-19",
        "recoveryScore": 60,
        "recoveryBand": "moderate",
        "sleep": {
          "score": 83,
          "durationMinutes": 375.0,
          "efficiency": 87.7,
          "deepMinutes": 105.0,
          "remMinutes": 80.0,
          "awakeMinutes": 57.5,
          "availableFactors": 4
        },
        "activityLoad": {
          "score": 67,
          "availableFactors": [
            "activeCalories",
            "exerciseMinutes",
            "steps"
          ]
        },
        "targetLoad": [
          40,
          65
        ],
        "sleepBankMinutes": -155,
        "tonightSleepNeedMinutes": 502,
        "headline": "回復状態は中間。普段通りでよいものの、追い込みすぎには注意です。",
        "warnings": [
          "安静時心拍が通常より高い"
        ],
        "positives": [
          "睡眠スコア 83"
        ],
        "actions": [
          "今日の負荷は十分。追加の高強度運動は不要です。",
          "直近7日の睡眠負債は約2.6時間。今夜は8h22mを目安にする。"
        ],
        "monitor": {
          "hrv": {
            "average": null,
            "deviation": null,
            "days": 0,
            "value": null,
            "status": "insufficient",
            "delta": null,
            "label": "HRV"
          },
          "restingHeartRate": {
            "average": 48.921052631578945,
            "deviation": 4.027089708902163,
            "days": 19,
            "value": 54.0,
            "status": "above",
            "delta": 5.078947368421055,
            "label": "安静時心拍"
          },
          "respiratoryRate": {
            "average": null,
            "deviation": null,
            "days": 0,
            "value": null,
            "status": "insufficient",
            "delta": null,
            "label": "呼吸数"
          },
          "oxygenAvg": {
            "average": 98.35054381987793,
            "deviation": 0.19281793457392662,
            "days": 28,
            "value": 98.3076923076923,
            "status": "usual",
            "delta": -0.04285151218562078,
            "label": "血中酸素"
          }
        },
        "confidence": "medium",
        "baselineWindowDays": 28
      },
      "weight": null,
      "bodyFat": null,
      "activeCalories": 471.0,
      "heartRateAvg": 66.52,
      "sleepMinutes": 6.25,
      "steps": 10243.0,
      "sleepEfficiency": 87.72,
      "deepSleepMinutes": 1.75,
      "remSleepMinutes": 1.33,
      "walkingMinutes": 0.5,
      "exerciseMinutes": 0.94,
      "restingHeartRate": 54.0,
      "hrv": null,
      "respiratoryRate": null,
      "oxygenAvg": 98.31,
      "comparisons": {
        "weight": {
          "previousDelta": null,
          "avg7": 57.3,
          "avg7Delta": null
        },
        "bodyFat": {
          "previousDelta": null,
          "avg7": 10.3,
          "avg7Delta": null
        },
        "activeCalories": {
          "previousDelta": 121.0,
          "avg7": 251.67,
          "avg7Delta": 219.33
        },
        "heartRateAvg": {
          "previousDelta": 4.42,
          "avg7": 60.89,
          "avg7Delta": 5.63
        },
        "sleepMinutes": {
          "previousDelta": -1.5,
          "avg7": 7.31,
          "avg7Delta": -1.06
        },
        "steps": {
          "previousDelta": 4308.0,
          "avg7": 6291.43,
          "avg7Delta": 3951.57
        },
        "sleepEfficiency": {
          "previousDelta": -6.7,
          "avg7": 92.51,
          "avg7Delta": -4.79
        },
        "deepSleepMinutes": {
          "previousDelta": 0.25,
          "avg7": 1.67,
          "avg7Delta": 0.08
        },
        "remSleepMinutes": {
          "previousDelta": -0.59,
          "avg7": 1.95,
          "avg7Delta": -0.62
        },
        "walkingMinutes": {
          "previousDelta": null,
          "avg7": 0.5,
          "avg7Delta": 0.0
        },
        "exerciseMinutes": {
          "previousDelta": null,
          "avg7": 0.87,
          "avg7Delta": 0.07
        },
        "restingHeartRate": {
          "previousDelta": 4.0,
          "avg7": 49.43,
          "avg7Delta": 4.57
        },
        "hrv": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "respiratoryRate": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "oxygenAvg": {
          "previousDelta": 0.24,
          "avg7": 98.5,
          "avg7Delta": -0.19
        }
      }
    },
    {
      "date": "2026-07-20",
      "sourceExportedAt": "2026-07-21T00:27:20.917614Z",
      "sourceReceivedAt": "2026-07-21T00:27:21.575Z",
      "coach": {
        "date": "2026-07-20",
        "recoveryScore": 88,
        "recoveryBand": "high",
        "sleep": {
          "score": 98,
          "durationMinutes": 570.0,
          "efficiency": 95.0,
          "deepMinutes": 130.0,
          "remMinutes": 165.0,
          "awakeMinutes": 45.0,
          "availableFactors": 4
        },
        "activityLoad": {
          "score": 42,
          "availableFactors": [
            "activeCalories",
            "steps"
          ]
        },
        "targetLoad": [
          60,
          80
        ],
        "sleepBankMinutes": 10,
        "tonightSleepNeedMinutes": 450,
        "headline": "回復状態は良好。普段通りか、少し強度を上げられる日です。",
        "warnings": [],
        "positives": [
          "睡眠スコア 98"
        ],
        "actions": [
          "余力があれば30分前後の散歩または中強度の運動で、活動負荷を目安範囲へ近づける。",
          "今夜の睡眠目安は7h30m。就寝前30分は光と刺激を抑える。"
        ],
        "monitor": {
          "hrv": {
            "average": null,
            "deviation": null,
            "days": 0,
            "value": null,
            "status": "insufficient",
            "delta": null,
            "label": "HRV"
          },
          "restingHeartRate": {
            "average": 49.39473684210526,
            "deviation": 4.06713059128145,
            "days": 19,
            "value": null,
            "status": "insufficient",
            "delta": null,
            "label": "安静時心拍"
          },
          "respiratoryRate": {
            "average": null,
            "deviation": null,
            "days": 0,
            "value": null,
            "status": "insufficient",
            "delta": null,
            "label": "呼吸数"
          },
          "oxygenAvg": {
            "average": 98.34600488055639,
            "deviation": 0.19227662256726127,
            "days": 28,
            "value": 98.09677419354838,
            "status": "usual",
            "delta": -0.24923068700800854,
            "label": "血中酸素"
          }
        },
        "confidence": "medium",
        "baselineWindowDays": 28
      },
      "weight": 56.6,
      "bodyFat": 11.0,
      "activeCalories": 256.0,
      "heartRateAvg": 62.74,
      "sleepMinutes": 9.5,
      "steps": 5878.0,
      "sleepEfficiency": 95.0,
      "deepSleepMinutes": 2.17,
      "remSleepMinutes": 2.75,
      "walkingMinutes": null,
      "exerciseMinutes": null,
      "restingHeartRate": null,
      "hrv": null,
      "respiratoryRate": null,
      "oxygenAvg": 98.1,
      "comparisons": {
        "weight": {
          "previousDelta": null,
          "avg7": 57.3,
          "avg7Delta": -0.7
        },
        "bodyFat": {
          "previousDelta": null,
          "avg7": 10.38,
          "avg7Delta": 0.62
        },
        "activeCalories": {
          "previousDelta": -215.0,
          "avg7": 283.0,
          "avg7Delta": -27.0
        },
        "heartRateAvg": {
          "previousDelta": -3.78,
          "avg7": 61.15,
          "avg7Delta": 1.59
        },
        "sleepMinutes": {
          "previousDelta": 3.25,
          "avg7": 7.13,
          "avg7Delta": 2.37
        },
        "steps": {
          "previousDelta": -4365.0,
          "avg7": 6360.43,
          "avg7Delta": -482.43
        },
        "sleepEfficiency": {
          "previousDelta": 7.28,
          "avg7": 92.5,
          "avg7Delta": 2.5
        },
        "deepSleepMinutes": {
          "previousDelta": 0.42,
          "avg7": 1.7,
          "avg7Delta": 0.47
        },
        "remSleepMinutes": {
          "previousDelta": 1.42,
          "avg7": 1.77,
          "avg7Delta": 0.98
        },
        "walkingMinutes": {
          "previousDelta": null,
          "avg7": 0.5,
          "avg7Delta": null
        },
        "exerciseMinutes": {
          "previousDelta": null,
          "avg7": 0.91,
          "avg7Delta": null
        },
        "restingHeartRate": {
          "previousDelta": null,
          "avg7": 50.0,
          "avg7Delta": null
        },
        "hrv": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "respiratoryRate": {
          "previousDelta": null,
          "avg7": null,
          "avg7Delta": null
        },
        "oxygenAvg": {
          "previousDelta": -0.21,
          "avg7": 98.47,
          "avg7Delta": -0.37
        }
      }
    }
  ],
  "activityDays": [
    {
      "date": "2026-06-01",
      "strengthMinutes": 41,
      "walkingMinutes": 0,
      "workouts": [
        {
          "id": "ea348a43-f998-4f62-b764-d6e1a7ad8f08",
          "startTime": "2026-06-01T06:56:55Z",
          "endTime": "2026-06-01T07:48:09Z",
          "minutes": 41,
          "sourcePackage": "com.hevy",
          "title": "午後のトレーニング💪",
          "menus": [
            "ベンチプレス",
            "インクラインベンチプレス",
            "チェストフライ",
            "クランチ",
            "クロスオーバー",
            "ダンベルデクラインフライ"
          ],
          "bodyParts": [
            "胸",
            "体幹"
          ]
        }
      ],
      "walks": []
    },
    {
      "date": "2026-06-03",
      "strengthMinutes": 54,
      "walkingMinutes": 0,
      "workouts": [
        {
          "id": "715cd3a2-9bbd-4072-83f0-bd101c5e2260",
          "startTime": "2026-06-03T06:55:18Z",
          "endTime": "2026-06-03T07:49:16Z",
          "minutes": 54,
          "sourcePackage": "com.hevy",
          "title": "午後のトレーニング💪",
          "menus": [
            "オーバーヘッドプレス",
            "ラテラルレイズ",
            "シーテッドケーブルロウ",
            "Tバーロウ",
            "チンアップ"
          ],
          "bodyParts": [
            "肩",
            "背中"
          ]
        }
      ],
      "walks": []
    },
    {
      "date": "2026-06-09",
      "strengthMinutes": 0,
      "walkingMinutes": 23,
      "workouts": [],
      "walks": [
        {
          "id": "20323a51-b411-4ef9-a82f-ca0fb92fa0e5",
          "startTime": "2026-06-09T03:12:12Z",
          "endTime": "2026-06-09T03:34:52Z",
          "minutes": 23,
          "sourcePackage": "com.gdjztech.ringconn"
        }
      ]
    },
    {
      "date": "2026-06-10",
      "strengthMinutes": 0,
      "walkingMinutes": 16,
      "workouts": [],
      "walks": [
        {
          "id": "b3766c9a-2801-49fa-9cbf-ea2047369ca4",
          "startTime": "2026-06-10T03:27:30Z",
          "endTime": "2026-06-10T03:44:00Z",
          "minutes": 16,
          "sourcePackage": "com.gdjztech.ringconn"
        }
      ]
    },
    {
      "date": "2026-06-13",
      "strengthMinutes": 0,
      "walkingMinutes": 17,
      "workouts": [],
      "walks": [
        {
          "id": "9e8abdb2-cc7e-4622-bdb9-e07dfe4cbfc5",
          "startTime": "2026-06-13T06:18:17Z",
          "endTime": "2026-06-13T06:35:37Z",
          "minutes": 17,
          "sourcePackage": "com.gdjztech.ringconn"
        }
      ]
    },
    {
      "date": "2026-06-14",
      "strengthMinutes": 44,
      "walkingMinutes": 20,
      "workouts": [
        {
          "id": "df189c16-2269-4b7f-8a4b-2ae5fa041ef9",
          "startTime": "2026-06-14T06:20:24Z",
          "endTime": "2026-06-14T07:04:20Z",
          "minutes": 44,
          "sourcePackage": "com.hevy",
          "title": "午後のトレーニング💪",
          "menus": [
            "グッドモーニング",
            "ハックスクワット",
            "カーフレイズ"
          ],
          "bodyParts": [
            "脚"
          ]
        }
      ],
      "walks": [
        {
          "id": "1ed738dc-3ea0-4d4a-91ec-d97d08380c5c",
          "startTime": "2026-06-14T00:47:02Z",
          "endTime": "2026-06-14T01:06:42Z",
          "minutes": 20,
          "sourcePackage": "com.gdjztech.ringconn"
        }
      ]
    },
    {
      "date": "2026-06-16",
      "strengthMinutes": 44,
      "walkingMinutes": 15,
      "workouts": [
        {
          "id": "1171075c-bc65-4016-9870-4c4bb980e0c9",
          "startTime": "2026-06-16T07:07:07Z",
          "endTime": "2026-06-16T07:50:58Z",
          "minutes": 44,
          "sourcePackage": "com.hevy",
          "title": "午後のトレーニング💪",
          "menus": [
            "オーバーヘッドプレス",
            "ベンチプレス",
            "ダンベルデクラインフライ",
            "インクラインベンチプレス",
            "ディップス"
          ],
          "bodyParts": [
            "肩",
            "胸"
          ]
        }
      ],
      "walks": [
        {
          "id": "d6d34aa2-a421-4d6e-a9eb-a0b6bd63a0d9",
          "startTime": "2026-06-16T03:19:47Z",
          "endTime": "2026-06-16T03:35:07Z",
          "minutes": 15,
          "sourcePackage": "com.gdjztech.ringconn"
        }
      ]
    },
    {
      "date": "2026-06-17",
      "strengthMinutes": 0,
      "walkingMinutes": 16,
      "workouts": [],
      "walks": [
        {
          "id": "037bbaf6-5963-4a78-92bf-09ab992a3892",
          "startTime": "2026-06-17T03:24:45Z",
          "endTime": "2026-06-17T03:40:45Z",
          "minutes": 16,
          "sourcePackage": "com.gdjztech.ringconn"
        }
      ]
    },
    {
      "date": "2026-06-18",
      "strengthMinutes": 39,
      "walkingMinutes": 19,
      "workouts": [
        {
          "id": "0a6b7e90-63e0-442f-acf0-ce999f29b39f",
          "startTime": "2026-06-18T07:00:25Z",
          "endTime": "2026-06-18T07:39:35Z",
          "minutes": 39,
          "sourcePackage": "com.hevy",
          "title": "午後のトレーニング💪",
          "menus": [
            "オーバーヘッドプレス",
            "ラテラルレイズ"
          ],
          "bodyParts": [
            "肩"
          ]
        }
      ],
      "walks": [
        {
          "id": "3ba5bfbb-3a76-4ecb-a3f4-d6c4e4137a97",
          "startTime": "2026-06-18T03:10:34Z",
          "endTime": "2026-06-18T03:29:44Z",
          "minutes": 19,
          "sourcePackage": "com.gdjztech.ringconn"
        }
      ]
    },
    {
      "date": "2026-06-19",
      "strengthMinutes": 0,
      "walkingMinutes": 18,
      "workouts": [],
      "walks": [
        {
          "id": "99b781d2-0b4e-4a7b-b049-8118ebfcd052",
          "startTime": "2026-06-19T03:33:16Z",
          "endTime": "2026-06-19T03:51:26Z",
          "minutes": 18,
          "sourcePackage": "com.gdjztech.ringconn"
        }
      ]
    },
    {
      "date": "2026-06-21",
      "strengthMinutes": 45,
      "walkingMinutes": 0,
      "workouts": [
        {
          "id": "045db3ad-f588-46bb-a890-e0354089a14f",
          "startTime": "2026-06-21T07:04:56Z",
          "endTime": "2026-06-21T07:50:18Z",
          "minutes": 45,
          "sourcePackage": "com.hevy",
          "title": "午後のトレーニング💪",
          "menus": [
            "スクワット",
            "ハックスクワット",
            "レッグエクステンション",
            "レッグカール"
          ],
          "bodyParts": [
            "脚"
          ]
        }
      ],
      "walks": []
    },
    {
      "date": "2026-06-22",
      "strengthMinutes": 0,
      "walkingMinutes": 24,
      "workouts": [],
      "walks": [
        {
          "id": "a1984050-aaea-4ec8-b667-182c65b2bad8",
          "startTime": "2026-06-22T07:29:47Z",
          "endTime": "2026-06-22T07:53:37Z",
          "minutes": 24,
          "sourcePackage": "com.gdjztech.ringconn"
        }
      ]
    },
    {
      "date": "2026-06-23",
      "strengthMinutes": 0,
      "walkingMinutes": 44,
      "workouts": [],
      "walks": [
        {
          "id": "27b46ddc-d245-4b8f-894f-1f7f5f3af74b",
          "startTime": "2026-06-23T04:27:21Z",
          "endTime": "2026-06-23T04:49:01Z",
          "minutes": 22,
          "sourcePackage": "com.gdjztech.ringconn"
        },
        {
          "id": "62770ed4-d816-4fac-936e-11d56b21019b",
          "startTime": "2026-06-23T08:53:46Z",
          "endTime": "2026-06-23T09:16:16Z",
          "minutes": 22,
          "sourcePackage": "com.gdjztech.ringconn"
        }
      ]
    },
    {
      "date": "2026-06-24",
      "strengthMinutes": 57,
      "walkingMinutes": 20,
      "workouts": [
        {
          "id": "d6b14577-7f9a-46f0-8cc6-f20a509eedce",
          "startTime": "2026-06-24T07:02:48Z",
          "endTime": "2026-06-24T08:00:09Z",
          "minutes": 57,
          "sourcePackage": "com.hevy",
          "title": "午後のトレーニング💪",
          "menus": [
            "ベンチプレス",
            "インクラインベンチプレス",
            "ダンベルデクラインフライ",
            "ディップス"
          ],
          "bodyParts": [
            "胸"
          ]
        }
      ],
      "walks": [
        {
          "id": "6f647878-fb5c-4b33-b171-21da663b1bd6",
          "startTime": "2026-06-24T03:07:57Z",
          "endTime": "2026-06-24T03:28:27Z",
          "minutes": 20,
          "sourcePackage": "com.gdjztech.ringconn"
        }
      ]
    },
    {
      "date": "2026-06-26",
      "strengthMinutes": 50,
      "walkingMinutes": 0,
      "workouts": [
        {
          "id": "b4a3c03e-b0b6-43c2-a0cc-0244a727f3f0",
          "startTime": "2026-06-26T06:06:30Z",
          "endTime": "2026-06-26T06:56:31Z",
          "minutes": 50,
          "sourcePackage": "com.hevy",
          "title": "午後のトレーニング💪",
          "menus": [
            "オーバーヘッドプレス",
            "ラテラルレイズ",
            "チンアップ"
          ],
          "bodyParts": [
            "肩",
            "背中"
          ]
        }
      ],
      "walks": []
    },
    {
      "date": "2026-06-29",
      "strengthMinutes": 49,
      "walkingMinutes": 30,
      "workouts": [
        {
          "id": "14a03180-5f54-4140-afe7-47edd4b23cc7",
          "startTime": "2026-06-29T06:59:33Z",
          "endTime": "2026-06-29T07:48:37Z",
          "minutes": 49,
          "sourcePackage": "com.hevy",
          "title": "午後のトレーニング💪",
          "menus": [
            "ベンチプレス",
            "ダンベルデクラインフライ",
            "インクラインベンチプレス",
            "ディップス"
          ],
          "bodyParts": [
            "胸"
          ]
        }
      ],
      "walks": [
        {
          "id": "inferred-ringconn-walk-2026-06-29-1782702000",
          "startTime": "2026-06-29T03:00:00+00:00",
          "endTime": "2026-06-29T03:30:00+00:00",
          "minutes": 30,
          "steps": 2058,
          "cadence": 69,
          "sourcePackage": "com.gdjztech.ringconn",
          "inferred": true
        }
      ]
    },
    {
      "date": "2026-06-30",
      "strengthMinutes": 0,
      "walkingMinutes": 30,
      "workouts": [],
      "walks": [
        {
          "id": "inferred-ringconn-walk-2026-06-30-1782788400",
          "startTime": "2026-06-30T03:00:00+00:00",
          "endTime": "2026-06-30T03:30:00+00:00",
          "minutes": 30,
          "steps": 1927,
          "cadence": 64,
          "sourcePackage": "com.gdjztech.ringconn",
          "inferred": true
        }
      ]
    },
    {
      "date": "2026-07-01",
      "strengthMinutes": 50,
      "walkingMinutes": 15,
      "workouts": [
        {
          "id": "c8153f0a-5d9b-4fc9-b67b-69a22f9cba39",
          "startTime": "2026-07-01T06:45:13Z",
          "endTime": "2026-07-01T07:35:43Z",
          "minutes": 50,
          "sourcePackage": "com.hevy",
          "title": "午後のトレーニング💪",
          "menus": [
            "オーバーヘッドプレス",
            "ラテラルレイズ",
            "Tバーロウ",
            "チンアップ"
          ],
          "bodyParts": [
            "肩",
            "背中"
          ]
        }
      ],
      "walks": [
        {
          "id": "87f07d4c-6342-4861-bbc9-b755490c6d41",
          "startTime": "2026-07-01T03:18:07Z",
          "endTime": "2026-07-01T03:32:47Z",
          "minutes": 15,
          "sourcePackage": "com.gdjztech.ringconn"
        }
      ]
    },
    {
      "date": "2026-07-07",
      "strengthMinutes": 59,
      "walkingMinutes": 18,
      "workouts": [
        {
          "id": "f0ba0394-90eb-4d82-9f5e-8d7af6a74d4b",
          "startTime": "2026-07-07T06:08:06Z",
          "endTime": "2026-07-07T07:07:27Z",
          "minutes": 59,
          "sourcePackage": "com.hevy",
          "title": "午後のトレーニング💪",
          "menus": [
            "オーバーヘッドプレス",
            "ベンチプレス",
            "ダンベルデクラインフライ",
            "チェストフライ",
            "ディップス"
          ],
          "bodyParts": [
            "肩",
            "胸"
          ]
        }
      ],
      "walks": [
        {
          "id": "cf851beb-a481-4e1e-a5d0-79b97feb01c3",
          "startTime": "2026-07-07T03:32:09Z",
          "endTime": "2026-07-07T03:50:29Z",
          "minutes": 18,
          "sourcePackage": "com.gdjztech.ringconn"
        }
      ]
    },
    {
      "date": "2026-07-11",
      "strengthMinutes": 51,
      "walkingMinutes": 0,
      "workouts": [
        {
          "id": "8f9cf7c1-6d01-45a9-b27e-caf72892fe70",
          "startTime": "2026-07-11T05:34:35Z",
          "endTime": "2026-07-11T06:26:00Z",
          "minutes": 51,
          "sourcePackage": "com.hevy",
          "title": "午後のトレーニング💪",
          "menus": [
            "オーバーヘッドプレス",
            "ラテラルレイズ",
            "スクワット"
          ],
          "bodyParts": [
            "肩",
            "脚"
          ]
        }
      ],
      "walks": []
    },
    {
      "date": "2026-07-13",
      "strengthMinutes": 52,
      "walkingMinutes": 30,
      "workouts": [
        {
          "id": "0a6619b5-ad82-4573-ba92-061747a5cdb6",
          "startTime": "2026-07-13T07:02:19Z",
          "endTime": "2026-07-13T07:54:40Z",
          "minutes": 52,
          "sourcePackage": "com.hevy",
          "title": "午後のトレーニング💪",
          "menus": [
            "ベンチプレス",
            "ダンベルデクラインフライ",
            "ディップス"
          ],
          "bodyParts": [
            "胸"
          ]
        }
      ],
      "walks": [
        {
          "id": "inferred-ringconn-walk-2026-07-13-1783913400",
          "startTime": "2026-07-13T03:30:00+00:00",
          "endTime": "2026-07-13T04:00:00+00:00",
          "minutes": 30,
          "steps": 2102,
          "cadence": 70,
          "sourcePackage": "com.gdjztech.ringconn",
          "inferred": true
        }
      ]
    },
    {
      "date": "2026-07-15",
      "strengthMinutes": 0,
      "walkingMinutes": 30,
      "workouts": [],
      "walks": [
        {
          "id": "inferred-ringconn-walk-2026-07-15-1784084400",
          "startTime": "2026-07-15T03:00:00+00:00",
          "endTime": "2026-07-15T03:30:00+00:00",
          "minutes": 30,
          "steps": 2135,
          "cadence": 71,
          "sourcePackage": "com.gdjztech.ringconn",
          "inferred": true
        }
      ]
    },
    {
      "date": "2026-07-16",
      "strengthMinutes": 0,
      "walkingMinutes": 30,
      "workouts": [],
      "walks": [
        {
          "id": "inferred-ringconn-walk-2026-07-16-1784172600",
          "startTime": "2026-07-16T03:30:00+00:00",
          "endTime": "2026-07-16T04:00:00+00:00",
          "minutes": 30,
          "steps": 2156,
          "cadence": 72,
          "sourcePackage": "com.gdjztech.ringconn",
          "inferred": true
        }
      ]
    },
    {
      "date": "2026-07-19",
      "strengthMinutes": 56,
      "walkingMinutes": 30,
      "workouts": [
        {
          "id": "8adcd022-5c83-4df7-864c-d143e2009137",
          "startTime": "2026-07-19T06:50:19Z",
          "endTime": "2026-07-19T07:46:27Z",
          "minutes": 56,
          "sourcePackage": "com.hevy",
          "title": "午後のトレーニング💪",
          "menus": [
            "スクワット",
            "レッグエクステンション",
            "ハックスクワット",
            "レッグプレス",
            "レッグカール"
          ],
          "bodyParts": [
            "脚"
          ]
        }
      ],
      "walks": [
        {
          "id": "inferred-ringconn-walk-2026-07-19-1784424600",
          "startTime": "2026-07-19T01:30:00+00:00",
          "endTime": "2026-07-19T02:00:00+00:00",
          "minutes": 30,
          "steps": 1950,
          "cadence": 65,
          "sourcePackage": "com.gdjztech.ringconn",
          "inferred": true
        }
      ]
    }
  ],
  "exports": {
    "count": 22,
    "latestExportedAt": "2026-07-21T00:27:20.917614Z",
    "latestReceivedAt": "2026-07-21T00:27:21.575Z"
  }
};
