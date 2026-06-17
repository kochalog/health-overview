const data = window.HEALTH_SITE_DATA || { metrics: [], days: [] };
const days = data.days || [];
const metrics = data.metrics || [];
const detailMetrics = data.detailMetrics || [];

const formatters = {
  weight: (v) => formatNumber(v, 1, "kg"),
  bodyFat: (v) => formatNumber(v, 1, "%"),
  activeCalories: (v) => formatNumber(v, 0, "kcal"),
  heartRateAvg: (v) => formatNumber(v, 0, "bpm"),
  sleepMinutes: (v) => v == null ? "-" : `${Number(v).toFixed(1)}h`,
  steps: (v) => formatNumber(v, 0, "歩"),
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

  const sleep = latest.sleepMinutes;
  const steps = latest.steps;
  const heart = latest.heartRateAvg;
  const notes = [];
  if (sleep != null && sleep >= 7) notes.push("睡眠は十分");
  if (steps != null && steps >= 7000) notes.push("歩数は良好");
  if (heart != null) notes.push(`平均心拍${formatters.heartRateAvg(heart)}`);
  summaryText.innerHTML = notes.length
    ? `${notes.slice(0, 2).join(" / ")}。<br>${notes.slice(2).join(" / ")}。<br>大きな崩れはありません。`
    : "最新日の主要指標を確認できます。";
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

renderSummary();
renderCharts();
renderDetail();
renderHistory();
