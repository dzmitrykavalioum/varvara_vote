(function () {
  "use strict";

  var t = window.t;
  var store = window.siteStore;

  /* ================= Вкладки ================= */
  var tabs = [
    { tab: document.getElementById("tab-ttt"), panel: document.getElementById("panel-ttt") },
    { tab: document.getElementById("tab-memory"), panel: document.getElementById("panel-memory") }
  ];
  tabs.forEach(function (pair) {
    pair.tab.addEventListener("click", function () {
      tabs.forEach(function (p) {
        var active = p === pair;
        p.tab.classList.toggle("is-active", active);
        p.tab.setAttribute("aria-selected", active ? "true" : "false");
        p.panel.hidden = !active;
      });
    });
  });

  /* ================= Крестики-нолики: Ты против Скуки ================= */
  var LINES = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
  var tttBoard = document.getElementById("ttt-board");
  var tttStatus = document.getElementById("ttt-status");
  var cells = [];
  var state, over, busy, tttStatusKey;
  var score = { x: 0, o: 0, d: 0 };

  for (var i = 0; i < 9; i++) {
    var c = document.createElement("button");
    c.type = "button";
    c.className = "ttt__cell";
    c.dataset.i = i;
    c.addEventListener("click", onCellClick);
    tttBoard.appendChild(c);
    cells.push(c);
  }

  function setTttStatus(key) { tttStatusKey = key; tttStatus.textContent = t(key); }

  function winner(s) {
    for (var k = 0; k < LINES.length; k++) {
      var l = LINES[k];
      if (s[l[0]] && s[l[0]] === s[l[1]] && s[l[0]] === s[l[2]]) return { p: s[l[0]], line: l };
    }
    return s.every(Boolean) ? { p: "d" } : null;
  }

  function freeCells() { return state.map(function (v, idx) { return v ? -1 : idx; }).filter(function (v) { return v > -1; }); }
  function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

  // Ищет ход, который завершает линию игрока p
  function finishing(p) {
    for (var k = 0; k < LINES.length; k++) {
      var l = LINES[k];
      var vals = l.map(function (idx) { return state[idx]; });
      if (vals.filter(function (v) { return v === p; }).length === 2 && vals.indexOf(null) > -1) return l[vals.indexOf(null)];
    }
    return -1;
  }

  // Скука играет неплохо, но иногда зевает — чтобы можно было выиграть
  function botMove() {
    var free = freeCells();
    var m = finishing("O");
    if (m < 0 && Math.random() > 0.25) m = finishing("X");
    if (m < 0 && state[4] === null && Math.random() > 0.3) m = 4;
    if (m < 0) {
      var corners = [0, 2, 6, 8].filter(function (idx) { return state[idx] === null; });
      m = corners.length && Math.random() > 0.4 ? pick(corners) : pick(free);
    }
    return m;
  }

  function place(idx, p) {
    state[idx] = p;
    cells[idx].innerHTML = "<span>" + (p === "X" ? "✕" : "◯") + "</span>";
    cells[idx].classList.add(p === "X" ? "is-x" : "is-o");
    cells[idx].disabled = true;
    cells[idx].setAttribute("aria-label", p);
  }

  function finish(res) {
    over = true;
    cells.forEach(function (c) { c.disabled = true; });
    if (res.line) res.line.forEach(function (idx) { cells[idx].classList.add("is-win"); });
    if (res.p === "X") { score.x++; setTttStatus("ttt.win"); }
    else if (res.p === "O") { score.o++; setTttStatus("ttt.lose"); }
    else { score.d++; setTttStatus("ttt.draw"); }
    document.getElementById("ttt-x").textContent = score.x;
    document.getElementById("ttt-o").textContent = score.o;
    document.getElementById("ttt-d").textContent = score.d;
  }

  function onCellClick(e) {
    var idx = +e.currentTarget.dataset.i;
    if (over || busy || state[idx]) return;
    place(idx, "X");
    var res = winner(state);
    if (res) return finish(res);

    busy = true;
    setTttStatus("ttt.botTurn");
    setTimeout(function () {
      place(botMove(), "O");
      busy = false;
      var r = winner(state);
      if (r) finish(r); else setTttStatus("ttt.yourTurn");
    }, 450);
  }

  function tttReset() {
    state = Array(9).fill(null);
    over = false;
    busy = false;
    cells.forEach(function (c) { c.innerHTML = ""; c.className = "ttt__cell"; c.disabled = false; c.removeAttribute("aria-label"); });
    setTttStatus("ttt.yourTurn");
  }
  document.getElementById("ttt-restart").addEventListener("click", tttReset);
  tttReset();

  /* ================= Мемори ================= */
  var ICONS = ["📚", "✏️", "⚽", "🎨", "🎵", "🔬"];
  var memBoard = document.getElementById("mem-board");
  var memStatus = document.getElementById("mem-status");
  var movesEl = document.getElementById("mem-moves");
  var timeEl = document.getElementById("mem-time");
  var bestEl = document.getElementById("mem-best");
  var open, matched, moves, seconds, timer, lock, memStatusKey;

  function shuffle(a) {
    for (var k = a.length - 1; k > 0; k--) {
      var j = Math.floor(Math.random() * (k + 1));
      var tmp = a[k]; a[k] = a[j]; a[j] = tmp;
    }
    return a;
  }

  function fmtTime(s) { return Math.floor(s / 60) + ":" + (s % 60 < 10 ? "0" : "") + (s % 60); }

  function showBest() {
    var best = store.get("memoryBest");
    bestEl.textContent = best ? best : "—";
  }

  function memReset() {
    clearInterval(timer);
    timer = null;
    open = []; matched = 0; moves = 0; seconds = 0; lock = false; memStatusKey = null;
    movesEl.textContent = "0";
    timeEl.textContent = "0:00";
    memStatus.textContent = "";
    memBoard.innerHTML = "";

    shuffle(ICONS.concat(ICONS)).forEach(function (icon, idx) {
      var b = document.createElement("button");
      b.type = "button";
      b.className = "mcard";
      b.dataset.icon = icon;
      b.setAttribute("aria-label", t("memory.card") + " " + (idx + 1));
      b.innerHTML = '<span class="mcard__inner"><span class="mcard__face mcard__front">?</span>' +
        '<span class="mcard__face mcard__back">' + icon + "</span></span>";
      b.addEventListener("click", onCardClick);
      memBoard.appendChild(b);
    });
    showBest();
  }

  function onCardClick(e) {
    var card = e.currentTarget;
    if (lock || card.classList.contains("is-flipped") || card.classList.contains("is-matched")) return;

    if (!timer) {
      timer = setInterval(function () { seconds++; timeEl.textContent = fmtTime(seconds); }, 1000);
    }

    card.classList.add("is-flipped");
    open.push(card);
    if (open.length < 2) return;

    moves++;
    movesEl.textContent = moves;
    var a = open[0], b = open[1];
    open = [];

    if (a.dataset.icon === b.dataset.icon) {
      [a, b].forEach(function (c) { c.classList.remove("is-flipped"); c.classList.add("is-matched"); c.setAttribute("aria-disabled", "true"); });
      matched += 2;
      if (matched === ICONS.length * 2) win();
    } else {
      lock = true;
      setTimeout(function () {
        a.classList.remove("is-flipped");
        b.classList.remove("is-flipped");
        lock = false;
      }, 800);
    }
  }

  function win() {
    clearInterval(timer);
    memStatusKey = "memory.win";
    memStatus.textContent = t(memStatusKey);
    var best = parseInt(store.get("memoryBest"), 10);
    if (!best || moves < best) store.set("memoryBest", String(moves));
    showBest();
  }

  document.getElementById("mem-restart").addEventListener("click", memReset);
  memReset();

  /* ================= Смена языка ================= */
  document.addEventListener("langchange", function () {
    if (tttStatusKey) tttStatus.textContent = t(tttStatusKey);
    if (memStatusKey) memStatus.textContent = t(memStatusKey);
    memBoard.querySelectorAll(".mcard").forEach(function (b, idx) {
      b.setAttribute("aria-label", t("memory.card") + " " + (idx + 1));
    });
  });
})();
