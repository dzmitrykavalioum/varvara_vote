/*
 * 🌍 ТЕКСТЫ САЙТА на 4 языках: pl, en, ru, uk (украинский).
 * Меняйте текст между кавычками. Если добавляете пункт программы —
 * добавьте его во ВСЕ 4 языка (icon и tag одинаковые).
 * tag: "free" — без затрат, "low" — минимальные затраты
 */
window.I18N = {
  /* ============================ POLSKI ============================ */
  pl: {
    meta: {
      title: "Varvara K. — Wybory do Samorządu Uczniowskiego",
      description: "Varvara K., klasa 7C — kandydatka na przewodniczącą Samorządu Uczniowskiego. Program, pomysły i gry."
    },
    nav: { about: "O mnie", why: "Dlaczego ja", program: "Program", ideas: "Pomysły", games: "Gry", links: "Linki", menu: "Menu" },
    hero: {
      badge: "Wybory do Samorządu Uczniowskiego",
      role: "Kandydatka na przewodniczącą Samorządu Uczniowskiego",
      meta: "14 lat · klasa 7C",
      lead: "Chcę, żeby do naszej szkoły chciało się przychodzić. Mniej nudy, więcej wspólnych chwil!",
      ctaProgram: "Zobacz program",
      ctaIdeas: "Podziel się pomysłem",
      date: "Głosowanie: 15 października"
    },
    countdown: {
      title: "Do wyborów zostało",
      days: "dni", hours: "godz.", minutes: "min", seconds: "sek",
      today: "Dziś głosujemy! 🗳️",
      over: "Wybory się odbyły — dziękuję za każdy głos! 💛"
    },
    photo: { alt1: "Zdjęcie Varvary", alt2: "Varvara — zdjęcie 2", alt3: "Varvara — zdjęcie 3" },
    about: {
      title: "O mnie",
      p1: "Cześć! Jestem Varvara, mam 14 lat i chodzę do klasy 7C. Urodziłam się w Mińsku, potem mieszkałam w Toruniu, a od sierpnia mieszkam we Wrocławiu.",
      p2: "W każdym nowym miejscu uczyłam się szybko poznawać ludzi i odnajdywać się w nowej szkole. Wiem, jak ważne jest, żeby każdy czuł się tu dobrze — i ci, którzy są tu od lat, i nowi uczniowie.",
      minsk: "Mińsk", minskText: "Tu się urodziłam",
      torun: "Toruń", torunText: "Tu mieszkałam i chodziłam do szkoły",
      wroclaw: "Wrocław", wroclawText: "Od sierpnia — nowy dom i nowa szkoła"
    },
    why: {
      title: "Dlaczego ja?",
      subtitle: "Nie obiecuję gwiazdki z nieba. Obiecuję rzeczy, które naprawdę da się zrobić.",
      items: [
        { icon: "🌍", title: "Świeże spojrzenie", text: "Uczyłam się w różnych miastach i szkołach. Wiem, co działa gdzie indziej, i chętnie przyniosę te pomysły tutaj." },
        { icon: "👂", title: "Słucham każdego", text: "Najlepsze pomysły mają uczniowie. Dlatego zbieram je przez formularz i traktuję na serio." },
        { icon: "🚀", title: "Lubię działać", text: "Sport, wydarzenia, akcje — chcę, żeby w szkole przez cały rok działo się coś ciekawego." }
      ]
    },
    program: {
      title: "Mój program",
      subtitle: "Proste, tanie i realne pomysły, które możemy zrobić razem.",
      tags: { free: "Bez kosztów", low: "Niski koszt" },
      items: [
        { icon: "⚽", tag: "free", title: "Turnieje sportowe", text: "Rozgrywki między klasami: siatkówka, dwa ognie, piłka nożna. Kibice mile widziani!" },
        { icon: "🎅", tag: "low", title: "Tajny Mikołaj", text: "Losujemy osoby i przed świętami robimy sobie drobne, sympatyczne prezenty." },
        { icon: "🥳", tag: "free", title: "Dni tematyczne", text: "Dzień piżamy, dzień kolorów, dzień na odwrót — wystarczy dobry humor i coś z szafy." },
        { icon: "🧁", tag: "low", title: "Kiermasz ciast", text: "Pieczemy i sprzedajemy, a zebrane pieniądze idą na szkolne wydarzenia albo cel charytatywny." },
        { icon: "🎲", tag: "free", title: "Przerwa z planszówkami", text: "Przynosimy gry z domu i gramy razem w wybrane dni. Idealne na deszczową pogodę." },
        { icon: "🌟", tag: "free", title: "Szkolny Mam Talent", text: "Śpiewasz, tańczysz, żonglujesz? Pokaż się na scenie raz w semestrze!" }
      ]
    },
    ideas: {
      title: "Masz pomysł?",
      text: "Ta kampania jest nie tylko moja — jest nasza. Napisz, czego brakuje Ci w szkole albo co mogłoby być fajniejsze. Wszystkie pomysły zbieram w jednym miejscu, a jeśli wygram, najlepsze z nich zrealizujemy razem.",
      steps: [
        "Wypełniasz krótki formularz",
        "Zbieram i porządkuję wszystkie pomysły",
        "Po wygranej realizujemy najlepsze i informuję o postępach"
      ],
      button: "Wyślij pomysł 💡",
      soon: "Formularz pojawi się już wkrótce!",
      note: "Możesz pisać anonimowo. Nie podawaj danych osobowych innych osób."
    },
    games: {
      title: "Strefa gier",
      subtitle: "Chwila przerwy? Zagraj w coś szybkiego!",
      tabTtt: "Kółko i krzyżyk",
      tabMemory: "Memory"
    },
    ttt: {
      intro: "Ty grasz ❌, Nuda gra ⭕. Pokonaj Nudę!",
      you: "Ty", bot: "Nuda", draws: "Remisy",
      yourTurn: "Twój ruch!",
      botTurn: "Nuda myśli…",
      win: "Wygrana! Nuda pokonana 🎉",
      lose: "Tym razem wygrała Nuda 😴",
      draw: "Remis! 🤝",
      restart: "Nowa gra"
    },
    memory: {
      intro: "Znajdź wszystkie pary szkolnych rzeczy.",
      moves: "Ruchy", time: "Czas", best: "Rekord",
      win: "Brawo! Wszystkie pary znalezione 🎉",
      restart: "Od nowa",
      card: "Karta"
    },
    links: {
      title: "Przydatne linki",
      school: "Strona szkoły",
      schoolDesc: "Aktualności, plan lekcji i informacje",
      social: "Znajdziesz mnie też tu"
    },
    footer: {
      made: "Strona niekomercyjna, zrobiona dla zabawy i z sercem 💛",
      privacy: "Polityka prywatności"
    },
    privacy: {
      title: "Polityka prywatności",
      items: [
        "To prywatna, niekomercyjna strona kampanii do Samorządu Uczniowskiego.",
        "<b>Statystyki.</b> Liczymy odwiedziny za pomocą GoatCounter — bez plików cookies i bez zbierania danych osobowych. Widzimy tylko zbiorcze liczby, np. ile osób odwiedziło stronę.",
        "<b>Formularz pomysłów.</b> Działa w Google Forms, więc dane przetwarza Google. Nie musisz podawać imienia — możesz pisać anonimowo.",
        "<b>Pamięć przeglądarki.</b> Strona zapisuje na Twoim urządzeniu tylko wybrany język i rekord w grze. Te dane do nas nie trafiają.",
        "<b>Kontakt.</b> W sprawie strony możesz napisać przez formularz pomysłów."
      ],
      close: "Zamknij"
    }
  },

  /* ============================ ENGLISH ============================ */
  en: {
    meta: {
      title: "Varvara K. — Student Council Election",
      description: "Varvara K., class 7C — running for Student Council President. Program, ideas and games."
    },
    nav: { about: "About", why: "Why me", program: "Program", ideas: "Ideas", games: "Games", links: "Links", menu: "Menu" },
    hero: {
      badge: "Student Council Election",
      role: "Running for Student Council President",
      meta: "14 years old · class 7C",
      lead: "I want our school to be a place you actually look forward to. Less boredom, more good times together!",
      ctaProgram: "See my program",
      ctaIdeas: "Share an idea",
      date: "Voting day: October 15"
    },
    countdown: {
      title: "Time left until the election",
      days: "days", hours: "hrs", minutes: "min", seconds: "sec",
      today: "Voting day is today! 🗳️",
      over: "The election is over — thank you for every vote! 💛"
    },
    photo: { alt1: "Photo of Varvara", alt2: "Varvara — photo 2", alt3: "Varvara — photo 3" },
    about: {
      title: "About me",
      p1: "Hi! I'm Varvara, I'm 14 and I'm in class 7C. I was born in Minsk, then lived in Toruń, and since August I've been living in Wrocław.",
      p2: "Every time I moved, I learned how to make friends quickly and settle into a new school. I know how important it is that everyone feels good here — both those who've been here for years and the new kids.",
      minsk: "Minsk", minskText: "Where I was born",
      torun: "Toruń", torunText: "Where I lived and went to school",
      wroclaw: "Wrocław", wroclawText: "Since August — a new home and a new school"
    },
    why: {
      title: "Why me?",
      subtitle: "I'm not promising the moon. I'm promising things we can really do.",
      items: [
        { icon: "🌍", title: "A fresh look", text: "I've studied in different cities and schools. I know what works elsewhere, and I'd love to bring those ideas here." },
        { icon: "👂", title: "I listen to everyone", text: "Students have the best ideas. That's why I collect them through a form and take them seriously." },
        { icon: "🚀", title: "I like getting things done", text: "Sports, events, campaigns — I want something interesting happening at school all year round." }
      ]
    },
    program: {
      title: "My program",
      subtitle: "Simple, cheap and realistic ideas we can make happen together.",
      tags: { free: "No cost", low: "Low cost" },
      items: [
        { icon: "⚽", tag: "free", title: "Sports tournaments", text: "Class vs class: volleyball, dodgeball, football. Fans are welcome!" },
        { icon: "🎅", tag: "low", title: "Secret Santa", text: "We draw names and give each other small, fun gifts before the holidays." },
        { icon: "🥳", tag: "free", title: "Theme days", text: "Pajama day, colour day, backwards day — all you need is a good mood and something from your wardrobe." },
        { icon: "🧁", tag: "low", title: "Bake sale", text: "We bake and sell, and the money goes to school events or a charity." },
        { icon: "🎲", tag: "free", title: "Board game breaks", text: "We bring games from home and play together on chosen days. Perfect for rainy weather." },
        { icon: "🌟", tag: "free", title: "School's Got Talent", text: "Do you sing, dance, juggle? Take the stage once a semester!" }
      ]
    },
    ideas: {
      title: "Got an idea?",
      text: "This campaign isn't just mine — it's ours. Tell me what's missing at school or what could be more fun. I collect all ideas in one place, and if I win, we'll make the best ones happen together.",
      steps: [
        "You fill in a short form",
        "I collect and organise all the ideas",
        "After the win, we make the best ones happen and I share updates"
      ],
      button: "Send an idea 💡",
      soon: "The form is coming soon!",
      note: "You can write anonymously. Please don't share other people's personal data."
    },
    games: {
      title: "Game zone",
      subtitle: "Need a break? Play something quick!",
      tabTtt: "Tic-tac-toe",
      tabMemory: "Memory"
    },
    ttt: {
      intro: "You play ❌, Boredom plays ⭕. Beat Boredom!",
      you: "You", bot: "Boredom", draws: "Draws",
      yourTurn: "Your move!",
      botTurn: "Boredom is thinking…",
      win: "You win! Boredom defeated 🎉",
      lose: "Boredom won this time 😴",
      draw: "It's a draw! 🤝",
      restart: "New game"
    },
    memory: {
      intro: "Find all the pairs of school things.",
      moves: "Moves", time: "Time", best: "Best",
      win: "Well done! All pairs found 🎉",
      restart: "Restart",
      card: "Card"
    },
    links: {
      title: "Useful links",
      school: "School website",
      schoolDesc: "News, timetable and information",
      social: "You can also find me here"
    },
    footer: {
      made: "A non-commercial page, made for fun and with love 💛",
      privacy: "Privacy policy"
    },
    privacy: {
      title: "Privacy policy",
      items: [
        "This is a private, non-commercial page for a Student Council election campaign.",
        "<b>Statistics.</b> We count visits with GoatCounter — no cookies and no personal data. We only see total numbers, e.g. how many people visited.",
        "<b>Ideas form.</b> It runs on Google Forms, so the data is processed by Google. You don't have to give your name — you can write anonymously.",
        "<b>Browser storage.</b> The page saves only your chosen language and game record on your own device. That data never reaches us.",
        "<b>Contact.</b> For questions about this page, use the ideas form."
      ],
      close: "Close"
    }
  },

  /* ============================ РУССКИЙ ============================ */
  ru: {
    meta: {
      title: "Varvara K. — Выборы в школьное самоуправление",
      description: "Варвара K., 7C — кандидат в старосты школы. Программа, идеи и игры."
    },
    nav: { about: "Обо мне", why: "Почему я", program: "Программа", ideas: "Идеи", games: "Игры", links: "Ссылки", menu: "Меню" },
    hero: {
      badge: "Выборы в школьное самоуправление",
      role: "Кандидат в старосты школы",
      meta: "14 лет · 7C класс",
      lead: "Хочу, чтобы в нашу школу хотелось приходить. Меньше скуки — больше общих моментов!",
      ctaProgram: "Моя программа",
      ctaIdeas: "Поделиться идеей",
      date: "Голосование: 15 октября"
    },
    countdown: {
      title: "До выборов осталось",
      days: "дн.", hours: "ч", minutes: "мин", seconds: "сек",
      today: "Сегодня голосуем! 🗳️",
      over: "Выборы прошли — спасибо за каждый голос! 💛"
    },
    photo: { alt1: "Фото Варвары", alt2: "Варвара — фото 2", alt3: "Варвара — фото 3" },
    about: {
      title: "Обо мне",
      p1: "Привет! Я Варвара, мне 14 лет, я учусь в 7C. Я родилась в Минске, потом жила в Торуне, а с августа живу во Вроцлаве.",
      p2: "В каждом новом месте я училась быстро знакомиться с людьми и привыкать к новой школе. Я знаю, как важно, чтобы здесь всем было хорошо — и тем, кто учится тут много лет, и новеньким.",
      minsk: "Минск", minskText: "Здесь я родилась",
      torun: "Торунь", torunText: "Здесь я жила и ходила в школу",
      wroclaw: "Вроцлав", wroclawText: "С августа — новый дом и новая школа"
    },
    why: {
      title: "Почему я?",
      subtitle: "Я не обещаю звёзд с неба. Обещаю то, что правда можно сделать.",
      items: [
        { icon: "🌍", title: "Свежий взгляд", text: "Я училась в разных городах и школах. Знаю, что работает в других местах, и с радостью принесу эти идеи сюда." },
        { icon: "👂", title: "Слушаю каждого", text: "Лучшие идеи — у учеников. Поэтому я собираю их через форму и отношусь к ним серьёзно." },
        { icon: "🚀", title: "Люблю действовать", text: "Спорт, мероприятия, акции — хочу, чтобы в школе весь год происходило что-то интересное." }
      ]
    },
    program: {
      title: "Моя программа",
      subtitle: "Простые, недорогие и реальные идеи, которые мы можем сделать вместе.",
      tags: { free: "Бесплатно", low: "Почти бесплатно" },
      items: [
        { icon: "⚽", tag: "free", title: "Спортивные турниры", text: "Соревнования между классами: волейбол, вышибалы, футбол. Болельщики приветствуются!" },
        { icon: "🎅", tag: "low", title: "Тайный Санта", text: "Тянем жребий и перед праздниками дарим друг другу небольшие приятные подарки." },
        { icon: "🥳", tag: "free", title: "Тематические дни", text: "День пижам, день цвета, день наоборот — нужно только хорошее настроение и что-то из шкафа." },
        { icon: "🧁", tag: "low", title: "Ярмарка выпечки", text: "Печём и продаём, а собранные деньги идут на школьные события или благотворительность." },
        { icon: "🎲", tag: "free", title: "Перемена с настолками", text: "Приносим игры из дома и играем вместе в выбранные дни. Идеально для дождливой погоды." },
        { icon: "🌟", tag: "free", title: "Школа ищет таланты", text: "Поёшь, танцуешь, жонглируешь? Выходи на сцену раз в семестр!" }
      ]
    },
    ideas: {
      title: "Есть идея?",
      text: "Эта кампания не только моя — она наша. Напиши, чего тебе не хватает в школе или что могло бы быть интереснее. Я собираю все идеи в одном месте, и если я выиграю, лучшие из них мы воплотим вместе.",
      steps: [
        "Ты заполняешь короткую форму",
        "Я собираю и упорядочиваю все идеи",
        "После победы воплощаем лучшие, а я рассказываю о прогрессе"
      ],
      button: "Отправить идею 💡",
      soon: "Форма скоро появится!",
      note: "Можно писать анонимно. Не указывай личные данные других людей."
    },
    games: {
      title: "Игровая зона",
      subtitle: "Перемена? Сыграй во что-нибудь быстрое!",
      tabTtt: "Крестики-нолики",
      tabMemory: "Мемори"
    },
    ttt: {
      intro: "Ты играешь ❌, Скука играет ⭕. Победи Скуку!",
      you: "Ты", bot: "Скука", draws: "Ничьи",
      yourTurn: "Твой ход!",
      botTurn: "Скука думает…",
      win: "Победа! Скука побеждена 🎉",
      lose: "В этот раз победила Скука 😴",
      draw: "Ничья! 🤝",
      restart: "Новая игра"
    },
    memory: {
      intro: "Найди все пары школьных предметов.",
      moves: "Ходы", time: "Время", best: "Рекорд",
      win: "Ура! Все пары найдены 🎉",
      restart: "Заново",
      card: "Карта"
    },
    links: {
      title: "Полезные ссылки",
      school: "Сайт школы",
      schoolDesc: "Новости, расписание и информация",
      social: "Я также здесь"
    },
    footer: {
      made: "Некоммерческий сайт, сделанный для удовольствия и с любовью 💛",
      privacy: "Конфиденциальность"
    },
    privacy: {
      title: "Политика конфиденциальности",
      items: [
        "Это частный некоммерческий сайт предвыборной кампании в школьное самоуправление.",
        "<b>Статистика.</b> Мы считаем посещения с помощью GoatCounter — без cookies и без сбора личных данных. Видны только общие цифры, например сколько человек зашло на сайт.",
        "<b>Форма идей.</b> Работает на Google Forms, поэтому данные обрабатывает Google. Имя указывать не обязательно — можно писать анонимно.",
        "<b>Память браузера.</b> Сайт сохраняет на твоём устройстве только выбранный язык и рекорд в игре. Эти данные к нам не попадают.",
        "<b>Связь.</b> По вопросам о сайте можно написать через форму идей."
      ],
      close: "Закрыть"
    }
  },

  /* ============================ УКРАЇНСЬКА ============================ */
  uk: {
    meta: {
      title: "Varvara K. — Вибори до учнівського самоврядування",
      description: "Варвара K., 7C — кандидатка на посаду голови учнівського самоврядування. Програма, ідеї та ігри."
    },
    nav: { about: "Про мене", why: "Чому я", program: "Програма", ideas: "Ідеї", games: "Ігри", links: "Посилання", menu: "Меню" },
    hero: {
      badge: "Вибори до учнівського самоврядування",
      role: "Кандидатка на посаду голови учнівського самоврядування",
      meta: "14 років · клас 7C",
      lead: "Хочу, щоб до нашої школи хотілося приходити. Менше нудьги — більше спільних моментів!",
      ctaProgram: "Моя програма",
      ctaIdeas: "Поділитися ідеєю",
      date: "Голосування: 15 жовтня"
    },
    countdown: {
      title: "До виборів залишилося",
      days: "дн.", hours: "год", minutes: "хв", seconds: "сек",
      today: "Сьогодні голосуємо! 🗳️",
      over: "Вибори відбулися — дякую за кожен голос! 💛"
    },
    photo: { alt1: "Фото Варвари", alt2: "Варвара — фото 2", alt3: "Варвара — фото 3" },
    about: {
      title: "Про мене",
      p1: "Привіт! Я Варвара, мені 14 років, і я навчаюся в класі 7C. Я народилася в Мінську, потім жила в Торуні, а з серпня живу у Вроцлаві.",
      p2: "У кожному новому місці я вчилася швидко знайомитися з людьми й звикати до нової школи. Я знаю, як важливо, щоб тут усім було добре — і тим, хто навчається тут роками, і новеньким.",
      minsk: "Мінськ", minskText: "Тут я народилася",
      torun: "Торунь", torunText: "Тут я жила й ходила до школи",
      wroclaw: "Вроцлав", wroclawText: "З серпня — новий дім і нова школа"
    },
    why: {
      title: "Чому я?",
      subtitle: "Я не обіцяю зірок з неба. Обіцяю те, що справді можна зробити.",
      items: [
        { icon: "🌍", title: "Свіжий погляд", text: "Я навчалася в різних містах і школах. Знаю, що працює деінде, і залюбки принесу ці ідеї сюди." },
        { icon: "👂", title: "Слухаю кожного", text: "Найкращі ідеї — в учнів. Тому я збираю їх через форму і ставлюся до них серйозно." },
        { icon: "🚀", title: "Люблю діяти", text: "Спорт, події, акції — хочу, щоб у школі цілий рік відбувалося щось цікаве." }
      ]
    },
    program: {
      title: "Моя програма",
      subtitle: "Прості, недорогі й реальні ідеї, які ми можемо втілити разом.",
      tags: { free: "Безкоштовно", low: "Майже безкоштовно" },
      items: [
        { icon: "⚽", tag: "free", title: "Спортивні турніри", text: "Змагання між класами: волейбол, футбол, естафети. Уболівальники — вітаються!" },
        { icon: "🎅", tag: "low", title: "Таємний Санта", text: "Тягнемо жереб і перед святами даруємо одне одному невеликі приємні подарунки." },
        { icon: "🥳", tag: "free", title: "Тематичні дні", text: "День піжам, день кольору, день навпаки — потрібен лише гарний настрій і щось із шафи." },
        { icon: "🧁", tag: "low", title: "Ярмарок випічки", text: "Печемо й продаємо, а зібрані гроші йдуть на шкільні події або благодійність." },
        { icon: "🎲", tag: "free", title: "Перерва з настілками", text: "Приносимо ігри з дому й граємо разом у вибрані дні. Ідеально для дощової погоди." },
        { icon: "🌟", tag: "free", title: "Шкільний талант-шоу", text: "Співаєш, танцюєш, жонглюєш? Виходь на сцену раз на семестр!" }
      ]
    },
    ideas: {
      title: "Маєш ідею?",
      text: "Ця кампанія не лише моя — вона наша. Напиши, чого тобі бракує в школі або що могло б бути цікавішим. Я збираю всі ідеї в одному місці, і якщо переможу, найкращі з них ми втілимо разом.",
      steps: [
        "Ти заповнюєш коротку форму",
        "Я збираю та впорядковую всі ідеї",
        "Після перемоги втілюємо найкращі, а я розповідаю про прогрес"
      ],
      button: "Надіслати ідею 💡",
      soon: "Форма незабаром з'явиться!",
      note: "Можна писати анонімно. Не вказуй особисті дані інших людей."
    },
    games: {
      title: "Ігрова зона",
      subtitle: "Перерва? Зіграй у щось швидке!",
      tabTtt: "Хрестики-нулики",
      tabMemory: "Мемо"
    },
    ttt: {
      intro: "Ти граєш ❌, Нудьга грає ⭕. Переможи Нудьгу!",
      you: "Ти", bot: "Нудьга", draws: "Нічиї",
      yourTurn: "Твій хід!",
      botTurn: "Нудьга думає…",
      win: "Перемога! Нудьгу переможено 🎉",
      lose: "Цього разу перемогла Нудьга 😴",
      draw: "Нічия! 🤝",
      restart: "Нова гра"
    },
    memory: {
      intro: "Знайди всі пари шкільних речей.",
      moves: "Ходи", time: "Час", best: "Рекорд",
      win: "Браво! Усі пари знайдено 🎉",
      restart: "Заново",
      card: "Картка"
    },
    links: {
      title: "Корисні посилання",
      school: "Сайт школи",
      schoolDesc: "Новини, розклад та інформація",
      social: "Я також тут"
    },
    footer: {
      made: "Некомерційний сайт, зроблений для розваги та з любов'ю 💛",
      privacy: "Конфіденційність"
    },
    privacy: {
      title: "Політика конфіденційності",
      items: [
        "Це приватний некомерційний сайт передвиборчої кампанії до учнівського самоврядування.",
        "<b>Статистика.</b> Ми рахуємо відвідування за допомогою GoatCounter — без cookies і без збору особистих даних. Видно лише загальні цифри, наприклад скільки людей відвідало сайт.",
        "<b>Форма ідей.</b> Працює на Google Forms, тому дані обробляє Google. Ім'я вказувати не обов'язково — можна писати анонімно.",
        "<b>Пам'ять браузера.</b> Сайт зберігає на твоєму пристрої лише вибрану мову та рекорд у грі. Ці дані до нас не потрапляють.",
        "<b>Зв'язок.</b> З питань щодо сайту можна написати через форму ідей."
      ],
      close: "Закрити"
    }
  }
};
