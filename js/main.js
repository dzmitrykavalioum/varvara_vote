(function () {
  "use strict";

  var CFG = window.SITE_CONFIG || {};
  var I18N = window.I18N || {};
  var LANGS = ["pl", "en", "ru", "uk"];
  var currentLang = "pl";

  /* ---------- Безопасная работа с localStorage ---------- */
  var store = {
    get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) { /* ignore */ } }
  };
  window.siteStore = store;

  /* ---------- Переводы ---------- */
  function resolve(obj, path) {
    return path.split(".").reduce(function (o, k) { return o == null ? undefined : o[k]; }, obj);
  }

  function t(key) {
    var v = resolve(I18N[currentLang], key);
    if (v === undefined) v = resolve(I18N.pl, key);
    return v === undefined ? key : v;
  }
  window.t = t;

  function detectLang() {
    var fromUrl = new URLSearchParams(location.search).get("lang");
    if (fromUrl === "ua") fromUrl = "uk";
    if (LANGS.indexOf(fromUrl) > -1) return fromUrl;

    var saved = store.get("lang");
    if (LANGS.indexOf(saved) > -1) return saved;

    var langs = navigator.languages || [navigator.language || ""];
    for (var i = 0; i < langs.length; i++) {
      var code = String(langs[i]).slice(0, 2).toLowerCase();
      if (code === "be") code = "ru";
      if (LANGS.indexOf(code) > -1) return code;
    }
    return CFG.defaultLang || "pl";
  }

  function el(tag, cls, html) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  }

  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; });
  }

  var CARD_COLORS = ["#7c3aed", "#ec4899", "#fb923c", "#10b981", "#38bdf8", "#f59e0b", "#8b5cf6", "#ef4444"];

  function renderCards(containerId, items, withTags) {
    var box = document.getElementById(containerId);
    box.innerHTML = "";
    (items || []).forEach(function (item, i) {
      var card = el("article", "card reveal");
      card.style.setProperty("--c", CARD_COLORS[i % CARD_COLORS.length]);
      card.style.transitionDelay = (i % 4) * 70 + "ms";
      var html = '<div class="card__icon" aria-hidden="true">' + esc(item.icon) + "</div>" +
        "<h3>" + esc(item.title) + "</h3><p>" + esc(item.text) + "</p>";
      if (withTags && item.tag) {
        html += '<span class="card__tag' + (item.tag === "low" ? " card__tag--low" : "") + '">' +
          esc(t("program.tags." + item.tag)) + "</span>";
      }
      card.innerHTML = html;
      box.appendChild(card);
    });
  }

  function renderList(containerId, items, allowHtml) {
    var box = document.getElementById(containerId);
    box.innerHTML = "";
    (items || []).forEach(function (text) {
      var li = el("li");
      if (allowHtml) li.innerHTML = text; else li.textContent = text;
      box.appendChild(li);
    });
  }

  function applyLang(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    document.title = t("meta.title");
    var md = document.querySelector('meta[name="description"]');
    if (md) md.setAttribute("content", t("meta.description"));

    document.querySelectorAll("[data-i18n]").forEach(function (n) { n.textContent = t(n.getAttribute("data-i18n")); });
    document.querySelectorAll("[data-i18n-alt]").forEach(function (n) { n.alt = t(n.getAttribute("data-i18n-alt")); });
    document.querySelectorAll("[data-i18n-aria]").forEach(function (n) { n.setAttribute("aria-label", t(n.getAttribute("data-i18n-aria"))); });

    document.querySelectorAll(".lang button").forEach(function (b) {
      var active = b.getAttribute("data-lang") === lang;
      b.classList.toggle("is-active", active);
      b.setAttribute("aria-pressed", active ? "true" : "false");
    });

    renderCards("why-list", t("why.items"), false);
    renderCards("program-list", t("program.items"), true);
    renderList("ideas-steps", t("ideas.steps"), false);
    renderList("privacy-list", t("privacy.items"), true);

    observeReveal();
    updateCountdown();
    document.dispatchEvent(new CustomEvent("langchange", { detail: lang }));
  }

  /* ---------- Имя ---------- */
  if (CFG.fullName) {
    document.querySelectorAll("[data-name]").forEach(function (n) { n.textContent = CFG.fullName; });
  }

  /* ---------- Переключатель языка ---------- */
  document.querySelectorAll(".lang button").forEach(function (b) {
    b.addEventListener("click", function () {
      var lang = b.getAttribute("data-lang");
      store.set("lang", lang);
      applyLang(lang);
    });
  });

  /* ---------- Мобильное меню ---------- */
  var burger = document.getElementById("burger");
  var nav = document.getElementById("nav");
  function closeMenu() { nav.classList.remove("is-open"); burger.setAttribute("aria-expanded", "false"); }
  burger.addEventListener("click", function () {
    var open = nav.classList.toggle("is-open");
    burger.setAttribute("aria-expanded", open ? "true" : "false");
  });
  nav.querySelectorAll("a").forEach(function (a) { a.addEventListener("click", closeMenu); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeMenu(); });
  document.addEventListener("click", function (e) {
    if (nav.classList.contains("is-open") && !nav.contains(e.target) && !burger.contains(e.target)) closeMenu();
  });

  var header = document.getElementById("header");
  function onScroll() { header.classList.toggle("is-scrolled", window.scrollY > 8); }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Таймер до выборов ---------- */
  var cdBox = document.getElementById("countdown");
  var cdBoxes = document.getElementById("countdown-boxes");
  var cdMsg = document.getElementById("countdown-msg");
  var electionTime = new Date(CFG.electionDate).getTime();


  function pad(n) { return n < 10 ? "0" + n : String(n); }

  function updateCountdown() {
    if (!CFG.showCountdown || isNaN(electionTime)) { cdBox.hidden = true; return; }
    cdBox.hidden = false;
    var now = Date.now();
    var diff = electionTime - now;

    if (diff <= 0) {
      // В день выборов (до полуночи) — «Сегодня голосуем», позже — «Спасибо»
      var endOfDay = new Date(electionTime);
      endOfDay.setHours(23, 59, 59, 999);
      cdBoxes.hidden = true;
      cdMsg.hidden = false;
      cdMsg.textContent = now <= endOfDay.getTime() ? t("countdown.today") : t("countdown.over");
      document.querySelector(".countdown__title").hidden = true;
      return;
    }

    var s = Math.floor(diff / 1000);
    var vals = { d: Math.floor(s / 86400), h: Math.floor(s % 86400 / 3600), m: Math.floor(s % 3600 / 60), s: s % 60 };
    Object.keys(vals).forEach(function (k) {
      cdBox.querySelector('[data-cd="' + k + '"]').textContent = k === "d" ? vals[k] : pad(vals[k]);
    });
  }

  if (CFG.showCountdown) setInterval(updateCountdown, 1000);

  /* ---------- Google Форма ---------- */
  var formBtn = document.getElementById("form-btn");
  var formSoon = document.getElementById("form-soon");
  if (CFG.googleFormUrl) {
    formBtn.href = CFG.googleFormUrl;
  } else {
    formBtn.removeAttribute("target");
    formBtn.addEventListener("click", function (e) {
      e.preventDefault();
      formSoon.hidden = false;
    });
  }

  /* ---------- Сайт школы ---------- */
  var schoolLink = document.getElementById("school-link");
  if (CFG.schoolUrl) schoolLink.href = CFG.schoolUrl; else schoolLink.hidden = true;

  /* ---------- Соцсети ---------- */
  var ICONS = {
    instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>',
    tiktok: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M16.5 3c.3 2.2 1.6 3.7 3.8 3.9v3.1c-1.4.1-2.6-.3-3.8-1v6.3c0 3.6-2.8 5.9-6 5.7-2.9-.2-5.2-2.6-5-5.6.2-3.2 3.1-5.5 6.4-5v3.2c-1.5-.4-3.2.4-3.3 2-.1 1.2.8 2.3 2.1 2.3 1.4 0 2.3-1 2.3-2.5V3h3.5z"/></svg>',
    youtube: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 8.2a3 3 0 0 0-2.1-2.1C18 5.6 12 5.6 12 5.6s-6 0-7.9.5A3 3 0 0 0 2 8.2 31 31 0 0 0 1.6 12 31 31 0 0 0 2 15.8a3 3 0 0 0 2.1 2.1c1.9.5 7.9.5 7.9.5s6 0 7.9-.5a3 3 0 0 0 2.1-2.1c.4-1.2.4-3.8.4-3.8s0-2.6-.4-3.8zM10 15V9l5.2 3L10 15z"/></svg>',
    facebook: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M14 8h3V4.5h-3c-2.5 0-4 1.7-4 4V11H7.5v3.5H10V21h3.5v-6.5h3l.5-3.5h-3.5V8.8c0-.5.3-.8.5-.8z"/></svg>'
  };
  var social = CFG.social || {};
  var socialList = document.getElementById("social-list");
  Object.keys(social).forEach(function (name) {
    if (!social[name]) return;
    var a = el("a", "social__btn", ICONS[name] || "🔗");
    a.href = social[name];
    a.target = "_blank";
    a.rel = "noopener";
    a.setAttribute("aria-label", name);
    a.title = name.charAt(0).toUpperCase() + name.slice(1);
    socialList.appendChild(a);
  });
  if (socialList.children.length) document.getElementById("social").hidden = false;

  /* ---------- Политика конфиденциальности ---------- */
  var privacy = document.getElementById("privacy");
  document.getElementById("privacy-open").addEventListener("click", function () {
    if (privacy.showModal) privacy.showModal(); else privacy.setAttribute("open", "");
  });
  document.getElementById("privacy-close").addEventListener("click", function () {
    if (privacy.close) privacy.close(); else privacy.removeAttribute("open");
  });
  privacy.addEventListener("click", function (e) { if (e.target === privacy) privacy.close(); });

  /* ---------- Год в футере ---------- */
  document.getElementById("year").textContent = new Date().getFullYear();

  /* ---------- Появление блоков при прокрутке ---------- */
  var io = "IntersectionObserver" in window ? new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add("is-visible"); io.unobserve(e.target); }
    });
  }, { threshold: 0.12 }) : null;

  function observeReveal() {
    document.querySelectorAll(".reveal:not(.is-visible)").forEach(function (n) {
      if (io) io.observe(n); else n.classList.add("is-visible");
    });
  }

  /* ---------- Статистика (GoatCounter, без cookies) ---------- */
  if (CFG.goatcounterCode && location.protocol.indexOf("http") === 0 && location.hostname !== "localhost" && location.hostname !== "127.0.0.1") {
    var gc = document.createElement("script");
    gc.async = true;
    gc.src = "https://gc.zgo.at/count.js";
    gc.setAttribute("data-goatcounter", "https://" + CFG.goatcounterCode + ".goatcounter.com/count");
    document.body.appendChild(gc);
  }

  /* ---------- Старт ---------- */
  applyLang(detectLang());
})();
