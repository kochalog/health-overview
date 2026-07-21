const data = window.HEALTH_SITE_DATA || { metrics: [], days: [] };
const days = data.days || [];
const metrics = data.metrics || [];
const detailMetrics = data.detailMetrics || [];
const activityDays = data.activityDays || [];
const activityByDate = new Map(activityDays.map((day) => [day.date, day]));
let calendarCursor = (() => {
  const sourceDate = days.length ? days[days.length - 1].date : new Date().toISOString().slice(0, 10);
  const [year, month] = sourceDate.split("-").map(Number);
  return new Date(year, month - 1, 1);
})();

const formatters = {
  weight: (v) => formatNumber(v, 1, "kg"),
  bodyFat: (v) => formatNumber(v, 1, "%"),
  activeCalories: (v) => formatNumber(v, 0, "kcal"),
  heartRateAvg: (v) => formatNumber(v, 0, "bpm"),
  sleepMinutes: (v) => v == null ? "-" : `${Number(v).toFixed(1)}h`,
  sleepEfficiency: (v) => formatNumber(v, 1, "%"),
  deepSleepMinutes: (v) => v == null ? "-" : `${Number(v).toFixed(1)}h`,
  remSleepMinutes: (v) => v == null ? "-" : `${Number(v).toFixed(1)}h`,
  steps: (v) => formatNumber(v, 0, "歩"),
  walkingMinutes: (v) => v == null ? "-" : `${Number(v).toFixed(1)}h`,
  exerciseMinutes: (v) => v == null ? "-" : `${Number(v).toFixed(1)}h`,
  restingHeartRate: (v) => formatNumber(v, 0, "bpm"),
  hrv: (v) => formatNumber(v, 0, "ms"),
  respiratoryRate: (v) => formatNumber(v, 1, "/min"),
  oxygenAvg: (v) => formatNumber(v, 1, "%"),
};

function formatNumber(value, decimals = 0, unit = "") {
  if (value == null || Number.isNaN(value)) return "-";
  return `${Number(value).toLocaleString("ja-JP", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })}${unit}`;
}

function formatDelta(value, metric) {
  if (value == null || Number.isNaN(value)) return "-";
  const sign = value > 0 ? "+" : "";
  const decimals = metric.decimals || 0;
  const unit = metric.key === "sleepMinutes" ? "h" : metric.unit;
  return `${sign}${Number(value).toLocaleString("ja-JP", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })}${unit}`;
}

function deltaClass(value) {
  if (value == null || Number.isNaN(value)) return "delta-empty";
  if (value > 0) return "delta-positive";
  if (value < 0) return "delta-negative";
  return "delta-neutral";
}

function deltaCell(value, metric) {
  return `<span class="delta-value ${deltaClass(value)}">${formatDelta(value, metric)}</span>`;
}

function labelDate(value) {
  const date = new Date(`${value}T00:00:00+09:00`);
  return date.toLocaleDateString("ja-JP", { month: "numeric", day: "numeric" });
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function localDateKey(year, month, day) {
  return `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}

function formatDuration(minutes) {
  if (!minutes) return "0分";
  const hours = Math.floor(minutes / 60);
  const rest = minutes % 60;
  if (!hours) return `${rest}分`;
  return rest ? `${hours}時間${rest}分` : `${hours}時間`;
}

function formatHourMinutes(minutes) {
  if (minutes == null || Number.isNaN(minutes)) return "-";
  const rounded = Math.round(Math.abs(minutes));
  const hours = Math.floor(rounded / 60);
  const rest = rounded % 60;
  return `${hours}h${String(rest).padStart(2, "0")}m`;
}

function scoreTone(score) {
  if (score == null) return "unknown";
  if (score >= 75) return "high";
  if (score < 50) return "low";
  return "moderate";
}

function scoreLabel(tone) {
  return { high: "良好", moderate: "中間", low: "回復優先", unknown: "較正中" }[tone] || "-";
}

function formatWorkoutDate(value) {
  const date = new Date(value);
  return date.toLocaleDateString("ja-JP", { month: "numeric", day: "numeric", weekday: "short" });
}

function latestDay() {
  return days.length ? days[days.length - 1] : null;
}

function seriesFor(key) {
  return days
    .filter((day) => typeof day[key] === "number")
    .map((day) => ({ date: day.date, value: day[key] }));
}

function sparkline(points, color) {
  const width = 316;
  const height = 118;
  const pad = 12;
  if (points.length === 0) {
    return `<svg class="chart-svg" viewBox="0 0 ${width} ${height}" role="img"></svg>`;
  }
  if (points.length === 1) {
    const y = height / 2;
    return `<svg class="chart-svg" viewBox="0 0 ${width} ${height}" role="img">
      <line x1="${pad}" y1="${y}" x2="${width - pad}" y2="${y}" stroke="${color}" stroke-width="3" stroke-linecap="round" />
      <circle cx="${width - pad}" cy="${y}" r="4" fill="${color}" />
    </svg>`;
  }
  const values = points.map((point) => point.value);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const span = max - min || 1;
  const step = (width - pad * 2) / (points.length - 1);
  const coords = points.map((point, index) => {
    const x = pad + step * index;
    const y = height - pad - ((point.value - min) / span) * (height - pad * 2);
    return [x, y];
  });
  const path = coords.map(([x, y], index) => `${index ? "L" : "M"} ${x.toFixed(1)} ${y.toFixed(1)}`).join(" ");
  const area = `${path} L ${width - pad} ${height - pad} L ${pad} ${height - pad} Z`;
  const last = coords[coords.length - 1];
  return `<svg class="chart-svg" viewBox="0 0 ${width} ${height}" role="img">
    <path d="${area}" fill="${color}" opacity="0.10"></path>
    <path d="${path}" fill="none" stroke="${color}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
    <circle cx="${last[0].toFixed(1)}" cy="${last[1].toFixed(1)}" r="4" fill="${color}"></circle>
  </svg>`;
}

function numericValue(source, key) {
  const value = source?.[key];
  return typeof value === "number" && !Number.isNaN(value) ? value : null;
}

function comparisonValue(source, key, type) {
  const value = source?.comparisons?.[key]?.[type];
  return typeof value === "number" && !Number.isNaN(value) ? value : null;
}

function buildConditionNotes(latest) {
  const notes = [];
  const usedKeys = new Set();
  const addNote = (score, key, text) => {
    if (!text || usedKeys.has(key)) return;
    usedKeys.add(key);
    notes.push({ score, text });
  };

  const sleep = numericValue(latest, "sleepMinutes");
  const sleepAvgDelta = comparisonValue(latest, "sleepMinutes", "avg7Delta");
  if (sleep != null && sleep < 6.5) {
    addNote(100, "sleepMinutes", `睡眠は${formatters.sleepMinutes(sleep)}で短め。今日は予定を詰めすぎず、回復を優先したい日です。`);
  } else if (sleepAvgDelta != null && sleepAvgDelta <= -0.5) {
    addNote(86, "sleepMinutes", `睡眠は7日平均より${Math.abs(sleepAvgDelta).toFixed(1)}h少なめ。就寝前の刺激を減らすと戻しやすそうです。`);
  } else if (sleep != null && sleep >= 7.5) {
    addNote(66, "sleepMinutes", `睡眠は${formatters.sleepMinutes(sleep)}で十分。回復の土台はかなり良い状態です。`);
  }

  const steps = numericValue(latest, "steps");
  const stepsAvgDelta = comparisonValue(latest, "steps", "avg7Delta");
  if (steps != null && steps < 5000) {
    addNote(88, "steps", `歩数は${formatters.steps(steps)}で少なめ。短い散歩を1回足すだけでも活動量を戻せます。`);
  } else if (stepsAvgDelta != null && stepsAvgDelta <= -1500) {
    addNote(78, "steps", `歩数は7日平均より${formatters.steps(Math.abs(stepsAvgDelta))}少なめ。移動や散歩の余白を少し作るとよさそうです。`);
  } else if (stepsAvgDelta != null && stepsAvgDelta >= 1500) {
    addNote(70, "steps", `歩数は7日平均より${formatters.steps(stepsAvgDelta)}多め。日中の活動量はしっかり確保できています。`);
  }

  const activeCalories = numericValue(latest, "activeCalories");
  const activeCaloriesAvgDelta = comparisonValue(latest, "activeCalories", "avg7Delta");
  if (activeCaloriesAvgDelta != null && activeCaloriesAvgDelta <= -120) {
    addNote(76, "activeCalories", `活動カロリーは7日平均より${formatters.activeCalories(Math.abs(activeCaloriesAvgDelta))}低め。軽い家事や移動で底上げできます。`);
  } else if (activeCaloriesAvgDelta != null && activeCaloriesAvgDelta >= 120) {
    addNote(64, "activeCalories", `活動カロリーは${formatters.activeCalories(activeCalories)}で平均より高め。よく動けた日です。`);
  }

  const latestActivity = activityByDate.get(latest.date);
  const strengthMinutes = latestActivity?.strengthMinutes || 0;
  const walkingMinutes = latestActivity?.walkingMinutes || 0;
  if (strengthMinutes && walkingMinutes) {
    addNote(74, "activity", `筋トレ${formatDuration(strengthMinutes)}とウォーキング${formatDuration(walkingMinutes)}を実施。生活習慣のリズムはかなり良好です。`);
  } else if (strengthMinutes) {
    addNote(68, "activity", `筋トレ${formatDuration(strengthMinutes)}を実施。翌日は睡眠と軽めの活動で回復を見たいところです。`);
  } else if (walkingMinutes) {
    addNote(58, "activity", `ウォーキング${formatDuration(walkingMinutes)}を実施。低強度の活動を入れられているのは良い流れです。`);
  } else if (steps != null && steps < 5000) {
    addNote(54, "activity", "運動記録は少なめ。今日は強度より、外に出る・歩くなど小さな習慣を優先で十分です。");
  }

  const heartRateAvg = numericValue(latest, "heartRateAvg");
  const heartRateAvgDelta = comparisonValue(latest, "heartRateAvg", "avg7Delta");
  if (heartRateAvgDelta != null && heartRateAvgDelta >= 5) {
    addNote(82, "heartRateAvg", `平均心拍は7日平均より${formatters.heartRateAvg(heartRateAvgDelta)}高め。疲労・暑さ・ストレスの影響を少し疑ってよさそうです。`);
  } else if (heartRateAvgDelta != null && heartRateAvgDelta <= -5) {
    addNote(62, "heartRateAvg", `平均心拍は${formatters.heartRateAvg(heartRateAvg)}で平均より低め。落ち着いたコンディションに見えます。`);
  }

  const restingHeartRate = numericValue(latest, "restingHeartRate");
  const restingHeartRateAvgDelta = comparisonValue(latest, "restingHeartRate", "avg7Delta");
  if (restingHeartRateAvgDelta != null && restingHeartRateAvgDelta >= 3) {
    addNote(80, "restingHeartRate", `安静時心拍は平均より${formatters.restingHeartRate(restingHeartRateAvgDelta)}高め。今日は追い込みすぎない判断が合いそうです。`);
  } else if (restingHeartRateAvgDelta != null && restingHeartRateAvgDelta <= -3) {
    addNote(60, "restingHeartRate", `安静時心拍は${formatters.restingHeartRate(restingHeartRate)}で低め。回復寄りのサインです。`);
  }

  const hrv = numericValue(latest, "hrv");
  const hrvAvgDelta = comparisonValue(latest, "hrv", "avg7Delta");
  if (hrvAvgDelta != null && hrvAvgDelta <= -8) {
    addNote(72, "hrv", `HRVは平均より${formatters.hrv(Math.abs(hrvAvgDelta))}低め。睡眠・水分・休息を厚めに見たい日です。`);
  } else if (hrvAvgDelta != null && hrvAvgDelta >= 8) {
    addNote(56, "hrv", `HRVは${formatters.hrv(hrv)}で平均より高め。回復状態は悪くなさそうです。`);
  }

  const respiratoryRateAvgDelta = comparisonValue(latest, "respiratoryRate", "avg7Delta");
  if (respiratoryRateAvgDelta != null && respiratoryRateAvgDelta >= 1.5) {
    addNote(70, "respiratoryRate", `呼吸数が7日平均より${formatters.respiratoryRate(respiratoryRateAvgDelta)}高め。体調や睡眠の質を少し気にしておきたいです。`);
  }

  const oxygenAvg = numericValue(latest, "oxygenAvg");
  const oxygenAvgDelta = comparisonValue(latest, "oxygenAvg", "avg7Delta");
  if (oxygenAvg != null && oxygenAvg < 96) {
    addNote(90, "oxygenAvg", `血中酸素は${formatters.oxygenAvg(oxygenAvg)}で低め。体調に違和感があれば無理せず休む判断を。`);
  } else if (oxygenAvgDelta != null && oxygenAvgDelta <= -1) {
    addNote(64, "oxygenAvg", `血中酸素は平均より${Math.abs(oxygenAvgDelta).toFixed(1)}pt低め。大きな変化が続くかだけ見ておきましょう。`);
  }

  const weightPreviousDelta = comparisonValue(latest, "weight", "previousDelta");
  if (weightPreviousDelta != null && Math.abs(weightPreviousDelta) >= 0.6) {
    addNote(52, "weight", `体重は前日から${weightPreviousDelta > 0 ? "+" : ""}${weightPreviousDelta.toFixed(1)}kg。短期変動なので、食事量や水分の影響も込みで見ましょう。`);
  }

  const bodyFatPreviousDelta = comparisonValue(latest, "bodyFat", "previousDelta");
  if (bodyFatPreviousDelta != null && Math.abs(bodyFatPreviousDelta) >= 0.5) {
    const direction = bodyFatPreviousDelta > 0 ? "上昇" : "低下";
    addNote(50, "bodyFat", `体脂肪率は前日から${Math.abs(bodyFatPreviousDelta).toFixed(1)}pt${direction}。単日より数日単位の流れで見るのがよさそうです。`);
  }

  const selected = notes
    .sort((a, b) => b.score - a.score)
    .slice(0, 5)
    .map((note) => note.text);

  if (selected.length) return selected;
  return ["大きく崩れた指標はありません。睡眠・活動量・心拍の流れをこのまま見ていきましょう。"];
}

function renderSummary() {
  const latest = latestDay();
  const updated = document.getElementById("updatedAt");
  const summaryText = document.getElementById("summaryText");
  if (!latest) {
    updated.textContent = "データなし";
    summaryText.textContent = "まだ表示できるデータがありません。";
    return;
  }

  updated.textContent = `生成 ${new Date(data.generatedAt).toLocaleString("ja-JP", { dateStyle: "short", timeStyle: "short" })}`;
  summaryText.innerHTML = buildConditionNotes(latest).map(escapeHtml).join("<br>");
}

function renderGuidance() {
  const latest = latestDay();
  const coach = latest?.coach;
  const scoreGrid = document.getElementById("scoreGrid");
  const actionList = document.getElementById("actionList");
  const factorList = document.getElementById("factorList");
  const monitorGrid = document.getElementById("monitorGrid");
  const confidence = document.getElementById("guidanceConfidence");
  if (!coach) {
    scoreGrid.innerHTML = '<div class="guidance-empty">分析に必要な履歴データを読み込み中です。</div>';
    actionList.innerHTML = "<li>次回のデータ更新後に表示します。</li>";
    factorList.innerHTML = "<li>判断材料がまだありません。</li>";
    monitorGrid.innerHTML = "";
    return;
  }

  const confidenceLabels = { high: "判定信頼度：高", medium: "判定信頼度：中", low: "判定信頼度：低" };
  confidence.textContent = `${confidenceLabels[coach.confidence] || "判定信頼度：-"}・${coach.baselineWindowDays}日基準`;

  const sleepBank = coach.sleepBankMinutes;
  const bankText = sleepBank == null
    ? "積み上げ中"
    : sleepBank < 0
      ? `睡眠負債 ${formatHourMinutes(sleepBank)}`
      : `睡眠余裕 +${formatHourMinutes(sleepBank)}`;
  const cards = [
    {
      label: "回復度",
      score: coach.recoveryScore,
      tone: coach.recoveryBand,
      detail: scoreLabel(coach.recoveryBand),
      sub: "睡眠・HRV・安静時心拍・呼吸・SpO₂",
    },
    {
      label: "睡眠",
      score: coach.sleep?.score,
      tone: scoreTone(coach.sleep?.score),
      detail: `今夜の目安 ${formatHourMinutes(coach.tonightSleepNeedMinutes)}`,
      sub: bankText,
    },
    {
      label: "活動負荷",
      score: coach.activityLoad?.score,
      tone: scoreTone(coach.activityLoad?.score),
      detail: `今日の目安 ${coach.targetLoad?.[0] ?? "-"}〜${coach.targetLoad?.[1] ?? "-"}`,
      sub: "歩数・活動カロリー・運動時間",
    },
  ];
  scoreGrid.innerHTML = cards.map((card) => `<article class="score-card tone-${escapeHtml(card.tone || "unknown")}">
    <div class="score-card-head"><span>${escapeHtml(card.label)}</span><b>${card.score == null ? "-" : `${card.score}<small>/100</small>`}</b></div>
    <strong>${escapeHtml(card.detail)}</strong>
    <p>${escapeHtml(card.sub)}</p>
  </article>`).join("");

  actionList.innerHTML = (coach.actions || []).map((item) => `<li>${escapeHtml(item)}</li>`).join("");
  const factors = [
    ...(coach.warnings || []).map((text) => ({ text, tone: "watch", label: "注意" })),
    ...(coach.positives || []).map((text) => ({ text, tone: "good", label: "良好" })),
  ];
  factorList.innerHTML = (factors.length ? factors : [{ text: "主要指標は個人の通常範囲内です。", tone: "neutral", label: "安定" }])
    .slice(0, 5)
    .map((item) => `<li><span class="factor-pill ${item.tone}">${item.label}</span>${escapeHtml(item.text)}</li>`).join("");

  const monitorFormatters = {
    hrv: formatters.hrv,
    restingHeartRate: formatters.restingHeartRate,
    respiratoryRate: formatters.respiratoryRate,
    oxygenAvg: formatters.oxygenAvg,
  };
  const monitorTone = (key, status) => {
    if (status === "usual") return "usual";
    if (status === "insufficient") return "unknown";
    if ((key === "hrv" && status === "above") || (key === "restingHeartRate" && status === "below") || (key === "oxygenAvg" && status === "above")) return "good";
    return "watch";
  };
  const statusLabels = { above: "高い", below: "低い", usual: "通常範囲", insufficient: "較正中" };
  monitorGrid.innerHTML = Object.entries(coach.monitor || {}).map(([key, item]) => {
    const formatter = monitorFormatters[key] || ((value) => formatNumber(value, 1));
    const tone = monitorTone(key, item.status);
    const baseline = item.average == null ? "基準なし" : `基準 ${formatter(item.average)}・${item.days}日`;
    return `<div class="monitor-item tone-${tone}">
      <span>${escapeHtml(item.label)}</span>
      <b>${formatter(item.value)}</b>
      <small>${escapeHtml(baseline)}</small>
      <em>${statusLabels[item.status] || "-"}</em>
    </div>`;
  }).join("");
}

function renderCharts() {
  const container = document.getElementById("chartStrip");
  const range = document.getElementById("rangeLabel");
  if (!days.length) return;
  range.textContent = `${labelDate(days[0].date)} - ${labelDate(days[days.length - 1].date)}`;
  container.innerHTML = metrics.map((metric) => {
    const points = seriesFor(metric.key);
    const last = points[points.length - 1];
    const latest = latestDay();
    const comparison = latest?.comparisons?.[metric.key] || {};
    return `<article class="chart-card" style="--metric:${metric.color}">
      <div class="chart-head">
        <div>
          <div class="chart-title">${metric.label}</div>
          <div class="chart-value">${last ? formatters[metric.key](last.value) : "-"}</div>
          <div class="chart-meta">7日平均との差 ${formatDelta(comparison.avg7Delta, metric)}</div>
        </div>
        <div class="badge" style="color:${metric.color}; background:${metric.accent};">${points.length}日</div>
      </div>
      ${sparkline(points.slice(-30), metric.color)}
      <div class="axis-labels">
        <span>${points.length ? labelDate(points[Math.max(0, points.length - 30)].date) : "-"}</span>
        <span>${last ? labelDate(last.date) : "-"}</span>
      </div>
    </article>`;
  }).join("");
}

function renderDetail() {
  const latest = latestDay();
  const body = document.getElementById("detailBody");
  const date = document.getElementById("detailDate");
  if (!latest) return;
  date.textContent = labelDate(latest.date);
  body.innerHTML = detailMetrics.map((metric) => {
    const formatter = formatters[metric.key] || ((value) => formatNumber(value, metric.decimals || 0, metric.unit || ""));
    const isMissing = latest[metric.key] == null;
    const comparison = latest.comparisons?.[metric.key] || {};
    return `<tr class="${isMissing ? "is-missing" : ""}">
      <td data-label="項目">${metric.label}</td>
      <td data-label="値">${formatter(latest[metric.key])}</td>
      <td data-label="前日比">${deltaCell(comparison.previousDelta, metric)}</td>
      <td data-label="7日平均との差">${deltaCell(comparison.avg7Delta, metric)}</td>
    </tr>`;
  }).join("");
}

function renderHistory() {
  const body = document.getElementById("historyBody");
  const recent = days.slice(-14).reverse();
  body.innerHTML = recent.map((day) => `<tr>
    <td>${labelDate(day.date)}</td>
    <td>${formatters.sleepMinutes(day.sleepMinutes)}</td>
    <td>${formatters.steps(day.steps)}</td>
    <td>${formatters.weight(day.weight)}</td>
    <td>${formatters.bodyFat(day.bodyFat)}</td>
  </tr>`).join("");
}

function renderCalendar() {
  const year = calendarCursor.getFullYear();
  const month = calendarCursor.getMonth();
  const monthLabel = document.getElementById("calendarMonth");
  const calendarDays = document.getElementById("calendarDays");
  const summary = document.getElementById("calendarSummary");
  const firstWeekday = new Date(year, month, 1).getDay();
  const dayCount = new Date(year, month + 1, 0).getDate();
  const latestKey = days.length ? days[days.length - 1].date : "";
  const cells = [];
  let strengthDays = 0;
  let walkingDays = 0;
  let strengthMinutes = 0;
  let inferredWalks = 0;

  monthLabel.textContent = `${year}年 ${month + 1}月`;
  for (let index = 0; index < firstWeekday; index += 1) {
    cells.push('<span class="calendar-day is-empty" aria-hidden="true"></span>');
  }
  for (let dayNumber = 1; dayNumber <= dayCount; dayNumber += 1) {
    const key = localDateKey(year, month, dayNumber);
    const activity = activityByDate.get(key);
    const hasStrength = Boolean(activity?.workouts?.length);
    const hasWalking = Boolean(activity?.walks?.length);
    const inferredCount = (activity?.walks || []).filter((walk) => walk.inferred).length;
    if (hasStrength) {
      strengthDays += 1;
      strengthMinutes += activity.strengthMinutes || 0;
    }
    if (hasWalking) walkingDays += 1;
    inferredWalks += inferredCount;
    const walkingLabel = hasWalking
      ? `ウォーキング ${formatDuration(activity.walkingMinutes)}${inferredCount ? `・歩数から推定${inferredCount}件` : ""}`
      : "";
    const labels = [hasStrength ? `筋トレ ${formatDuration(activity.strengthMinutes)}` : "", walkingLabel].filter(Boolean);
    cells.push(`<span class="calendar-day ${key === latestKey ? "is-latest" : ""} ${hasStrength || hasWalking ? "has-activity" : ""}" aria-label="${month + 1}月${dayNumber}日${labels.length ? ` ${labels.join(" / ")}` : ""}">
      <b>${dayNumber}</b>
      <span class="day-markers">
        ${hasStrength ? '<i class="marker strength" title="筋トレ"></i>' : ""}
        ${hasWalking ? '<i class="marker walking" title="ウォーキング"></i>' : ""}
      </span>
    </span>`);
  }
  calendarDays.innerHTML = cells.join("");
  summary.innerHTML = `<span>筋トレ <b>${strengthDays}</b>日・${formatDuration(strengthMinutes)}</span><span>ウォーキング <b>${walkingDays}</b>日${inferredWalks ? `・歩数推定${inferredWalks}件` : ""}</span>`;
}

function renderWorkouts() {
  const workoutList = document.getElementById("workoutList");
  const count = document.getElementById("workoutCount");
  const workouts = activityDays.flatMap((day) => (day.workouts || []).map((workout) => ({ ...workout, date: day.date })))
    .sort((a, b) => b.startTime.localeCompare(a.startTime));
  count.textContent = `${workouts.length}セッション`;
  if (!workouts.length) {
    workoutList.innerHTML = '<div class="workout-empty">筋トレ記録は、次回のデータ更新後にここへ表示されます。</div>';
    return;
  }
  workoutList.innerHTML = workouts.slice(0, 8).map((workout) => {
    const bodyParts = (workout.bodyParts || ["全身"]).map((part) => `<span>${escapeHtml(part)}</span>`).join("");
    const menus = (workout.menus || [workout.title]).map((menu) => `<li>${escapeHtml(menu)}</li>`).join("");
    return `<section class="workout-entry">
      <div class="workout-meta">
        <time datetime="${escapeHtml(workout.startTime)}">${formatWorkoutDate(workout.startTime)}</time>
        <strong>${formatDuration(workout.minutes)}</strong>
      </div>
      <div class="body-part-list">${bodyParts}</div>
      <ul class="menu-list">${menus}</ul>
    </section>`;
  }).join("");
}

document.getElementById("calendarPrev")?.addEventListener("click", () => {
  calendarCursor = new Date(calendarCursor.getFullYear(), calendarCursor.getMonth() - 1, 1);
  renderCalendar();
});

document.getElementById("calendarNext")?.addEventListener("click", () => {
  calendarCursor = new Date(calendarCursor.getFullYear(), calendarCursor.getMonth() + 1, 1);
  renderCalendar();
});

renderSummary();
renderGuidance();
renderCharts();
renderDetail();
renderHistory();
renderCalendar();
renderWorkouts();
