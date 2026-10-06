/*
 * ⚙️ НАСТРОЙКИ САЙТА — всё, что нужно менять, находится здесь.
 * Тексты на всех языках — в файле js/i18n.js
 */
window.SITE_CONFIG = {
  // Имя на сайте (шапка и главный экран)
  fullName: "Varvara K.",

  // Дата и время выборов (время по Варшаве, +02:00 — летнее/осеннее время до конца октября)
  electionDate: "2026-10-15T08:00:00+02:00",

  // Таймер обратного отсчёта: true — показывать, false — скрыть
  showCountdown: true,

  // Ссылка на Google Форму. Пока пусто — кнопка покажет «Форма скоро появится»
  googleFormUrl: "https://forms.gle/HErYfxXya4xn9hoN8",

  // Сайт школы (раздел «Полезные ссылки»)
  schoolUrl: "https://zsp27.pl/szkola/",

  // GoatCounter: код сайта (то, что до .goatcounter.com). Пусто — статистика выключена
  // Пример: "varvara" для https://varvara.goatcounter.com
  goatcounterCode: "",

  // Соцсети: вставьте ссылку — и иконка появится. Пусто — не показывается
  social: {
    instagram: "",
    tiktok: "",
    youtube: "",
    facebook: ""
  },

  // Язык по умолчанию, если язык браузера не PL/EN/RU/UA
  defaultLang: "pl"
};
