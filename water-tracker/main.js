// 물 마시기 트래커 - 하루 물 섭취량을 기록하고 목표 대비 진행 상황을 보여주는 앱

const GOAL_KEY = "water-goal";
const LOG_KEY = "water-log"; // { "YYYY-MM-DD": count }
const DEFAULT_GOAL = 8;
const MIN_GOAL = 1;
const MAX_GOAL = 20;
const HISTORY_DAYS = 7;

function getDateKey(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function loadGoal() {
  const saved = parseInt(localStorage.getItem(GOAL_KEY), 10);
  return Number.isFinite(saved) ? saved : DEFAULT_GOAL;
}

function saveGoal(goal) {
  localStorage.setItem(GOAL_KEY, String(goal));
}

function loadLog() {
  try {
    const saved = localStorage.getItem(LOG_KEY);
    return saved ? JSON.parse(saved) : {};
  } catch (e) {
    return {};
  }
}

function saveLog(log) {
  localStorage.setItem(LOG_KEY, JSON.stringify(log));
}

let goal = loadGoal();
let log = loadLog();
const todayKey = getDateKey(new Date());

let goalValueEl, cupsRowEl, progressTextEl, btnDrink, btnUndo, historyBarsEl;

function getTodayCount() {
  return log[todayKey] || 0;
}

function render() {
  const count = getTodayCount();

  goalValueEl.textContent = goal;

  // 컵 아이콘 렌더링
  cupsRowEl.innerHTML = "";
  for (let i = 1; i <= goal; i++) {
    const span = document.createElement("span");
    span.className = "cup-icon" + (i <= count ? " filled" : "");
    span.textContent = "🥤";
    cupsRowEl.appendChild(span);
  }

  // 진행 텍스트
  const bonus = count > goal ? count - goal : 0;
  progressTextEl.innerHTML = `<strong>${count}</strong> / ${goal} 잔${
    bonus > 0 ? ` <span>(+${bonus} 초과 달성)</span>` : ""
  }`;
  progressTextEl.classList.toggle("done", count >= goal);
  if (count >= goal) {
    progressTextEl.innerHTML += " 🎉 오늘 목표 달성!";
  }

  btnUndo.disabled = count === 0;

  renderHistory();
}

function renderHistory() {
  historyBarsEl.innerHTML = "";
  const today = new Date();

  for (let i = HISTORY_DAYS - 1; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);
    const key = getDateKey(date);
    const count = log[key] || 0;
    const isToday = key === todayKey;
    const pct = goal > 0 ? Math.min(count / goal, 1) * 100 : 0;
    const goalMet = count >= goal && count > 0;

    const col = document.createElement("div");
    col.className = "history-bar-col";

    const countLabel = document.createElement("div");
    countLabel.className = "history-bar-count";
    countLabel.textContent = count > 0 ? count : "";

    const bar = document.createElement("div");
    bar.className =
      "history-bar" + (count === 0 ? " empty" : "") + (goalMet ? " goal-met" : "");
    bar.style.height = count === 0 ? "4px" : `${Math.max(pct, 8)}%`;

    const label = document.createElement("div");
    label.className = "history-bar-label" + (isToday ? " today" : "");
    label.textContent = isToday ? "오늘" : `${date.getMonth() + 1}/${date.getDate()}`;

    col.appendChild(countLabel);
    col.appendChild(bar);
    col.appendChild(label);
    historyBarsEl.appendChild(col);
  }
}

function initApp() {
  document.getElementById("tracker-date").textContent = (() => {
    const today = new Date();
    return `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일`;
  })();

  goalValueEl = document.getElementById("goal-value");
  cupsRowEl = document.getElementById("cups-row");
  progressTextEl = document.getElementById("progress-text");
  btnDrink = document.getElementById("btn-drink");
  btnUndo = document.getElementById("btn-undo");
  historyBarsEl = document.getElementById("history-bars");

  document.getElementById("goal-minus").addEventListener("click", () => {
    if (goal > MIN_GOAL) {
      goal -= 1;
      saveGoal(goal);
      render();
    }
  });

  document.getElementById("goal-plus").addEventListener("click", () => {
    if (goal < MAX_GOAL) {
      goal += 1;
      saveGoal(goal);
      render();
    }
  });

  btnDrink.addEventListener("click", () => {
    log[todayKey] = getTodayCount() + 1;
    saveLog(log);
    render();
  });

  btnUndo.addEventListener("click", () => {
    const current = getTodayCount();
    if (current > 0) {
      log[todayKey] = current - 1;
      saveLog(log);
      render();
    }
  });

  render();
}

document.addEventListener("DOMContentLoaded", initApp);
