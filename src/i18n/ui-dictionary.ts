import type { Locale } from "@/i18n/config";

export type UiDictionary = {
  locale: Locale;
  brand: string;
  language: string;
  home: {
    eyebrow: string;
    title: string;
    body: string;
    openBook: string;
    noteTitle: string;
    noteBody: string;
  };
  map: {
    eyebrow: string;
    title: string;
    body: string;
    routeStamp: string;
    openLesson: string;
    planned: string;
  };
  navigation: {
    contents: string;
    bookContents: string;
    backToMap: string;
    onThisPage: string;
    search: string;
    grammarAtlas: string;
    unitBook: string;
  };
  lesson: {
    unit: string;
    grammarSnapshot: string;
    subject: string;
    directObject: string;
    sections: {
      formula: string;
      meaning: string;
      usage: string;
      recognition: string;
      table: string;
      examples: string;
      contrast: string;
      interaction: string;
      mistakes: string;
      speaking: string;
      practice: string;
    };
    interactionLead: string;
    speakingLead: string;
    sourceNotes: string;
    pendingTranslation: string;
  };
  practice: {
    lessonPractice: string;
    correctCount: (completed: number, total: number) => string;
    microPractice: string;
    completed: string;
    types: {
      multipleChoice: string;
      fillBlank: string;
      sentenceBuilder: string;
      errorCorrection: string;
    };
    chooseOne: string;
    yourAnswer: string;
    missingForm: string;
    correctSentence: string;
    fix: string;
    checkAnswer: string;
    correct: string;
    notYet: string;
    expected: string;
    buildHere: string;
    availableTokens: string;
    removeLast: string;
    reset: string;
  };
  speaking: {
    mode: string;
    promptCount: (current: number, total: number) => string;
    noMicrophone: string;
    showSupport: string;
    hideSupport: string;
    markPracticed: string;
    practiced: string;
    previous: string;
    next: string;
  };
  search: {
    trigger: string;
    close: string;
    closeAria: string;
    kicker: string;
    dialogTitle: string;
    description: string;
    inputLabel: string;
    placeholder: string;
    filterLabel: string;
    allLevels: string;
    resultCount: (count: number) => string;
    idleStatus: string;
    introTitle: string;
    introBody: string;
    noResultsTitle: string;
    noResultsBody: string;
    unit: string;
  };
  interaction: {
    verbSecondTitle: string;
    verbSecondLead: string;
    chooseFirst: string;
    sentencePositions: string;
    finiteVerb: string;
    bracketTitle: string;
    bracketLead: string;
    chooseBracket: string;
    articleTitle: string;
    articleLead: string;
    genderNumber: string;
    grammaticalCase: string;
    lanesTitle: string;
    lanesLead: string;
    lanesInstruction: string;
    laneExercise: string;
    subjectLane: string;
    objectLane: string;
    otherLane: string;
    moveLeft: (token: string) => string;
    moveRight: (token: string) => string;
  };
};

export const englishUiDictionary: UiDictionary = {
  locale: "en",
  brand: "German A1 Grammar",
  language: "Language",
  home: {
    eyebrow: "German, one system at a time",
    title: "See the grammar. Build the sentence.",
    body: "A structured German A1 book designed around formula, meaning, usage, recognition, examples, mistakes, speaking, and practice — without scattering one topic across ten screens.",
    openBook: "Open the A1 book",
    noteTitle: "Precision workbook × kinetic grammar atlas",
    noteBody: "The source workbook’s all-in-one clarity becomes a modern German learning surface with reusable grammar boards, teacher annotations, case-aware visuals, and motion that teaches rather than decorates.",
  },
  map: {
    eyebrow: "12-unit grammar atlas",
    title: "German A1",
    body: "One visible route from first sentence structure to completed-past storytelling. Open lessons stay complete on one coherent surface.",
    routeStamp: "12 units · one system",
    openLesson: "Open lesson",
    planned: "Planned",
  },
  navigation: {
    contents: "Contents",
    bookContents: "A1 book contents",
    backToMap: "Back to the A1 map",
    onThisPage: "On this page",
    search: "Search",
    grammarAtlas: "Grammar atlas",
    unitBook: "12-unit book",
  },
  lesson: {
    unit: "Unit",
    grammarSnapshot: "Grammar snapshot",
    subject: "subject",
    directObject: "direct object",
    sections: {
      formula: "Formula / structure",
      meaning: "Meaning",
      usage: "Usage",
      recognition: "Recognition cues",
      table: "Case / conjugation board",
      examples: "Examples",
      contrast: "Contrast",
      interaction: "Interactive grammar lab",
      mistakes: "Common mistakes",
      speaking: "Speaking transfer",
      practice: "Micro practice",
    },
    interactionLead: "Manipulate the structure, then say the resulting German sentence aloud. Every interaction has a keyboard-first alternative and remains usable with reduced motion.",
    speakingLead: "Say these aloud. Speaking mode is self-rehearsal: support is optional and no microphone or transcription score is used.",
    sourceNotes: "A1 alignment / source notes",
    pendingTranslation: "This lesson’s Persian teaching copy is being prepared; the German source remains unchanged.",
  },
  practice: {
    lessonPractice: "Lesson practice",
    correctCount: (completed, total) => `${completed}/${total} correct`,
    microPractice: "Micro practice",
    completed: "Completed",
    types: {
      multipleChoice: "Multiple choice",
      fillBlank: "Fill in the blank",
      sentenceBuilder: "Sentence builder",
      errorCorrection: "Error correction",
    },
    chooseOne: "Choose one answer",
    yourAnswer: "Your answer",
    missingForm: "Type the missing German form",
    correctSentence: "Correct sentence",
    fix: "Fix",
    checkAnswer: "Check answer",
    correct: "Correct",
    notYet: "Not yet",
    expected: "Expected",
    buildHere: "Build the sentence here",
    availableTokens: "Available sentence tokens",
    removeLast: "Remove last",
    reset: "Reset",
  },
  speaking: {
    mode: "Speaking mode",
    promptCount: (current, total) => `Prompt ${current} of ${total}`,
    noMicrophone: "Self-rehearsal · no microphone scoring",
    showSupport: "Show support",
    hideSupport: "Hide support",
    markPracticed: "Mark practiced",
    practiced: "Practiced ✓",
    previous: "← Previous",
    next: "Next →",
  },
  search: {
    trigger: "Search",
    close: "Close",
    closeAria: "Close search",
    kicker: "Local A1 index",
    dialogTitle: "Search the grammar book",
    description: "Search lesson titles, formulas, explanations, examples, mistakes, and speaking prompts.",
    inputLabel: "Search German A1",
    placeholder: "Try “dative”, “mit dem Bus”, “möchte”…",
    filterLabel: "Filter search by level",
    allLevels: "All A1",
    resultCount: (count) => `${count} result${count === 1 ? "" : "s"}`,
    idleStatus: "Type a word or phrase to search all 12 lessons.",
    introTitle: "Search the all-in-one route.",
    introBody: "The index is generated from validated local lesson data. No remote search service or learner query is sent anywhere.",
    noResultsTitle: "No lesson matched that search.",
    noResultsBody: "Try a German form, an English grammar term, or remove the level filter.",
    unit: "Unit",
  },
  interaction: {
    verbSecondTitle: "Verb-Second Rail",
    verbSecondLead: "Move one idea first. Keep the finite verb second.",
    chooseFirst: "Choose first position",
    sentencePositions: "Sentence positions",
    finiteVerb: "finite verb",
    bracketTitle: "Sentence Bracket",
    bracketLead: "See what opens and closes the German sentence.",
    chooseBracket: "Choose bracket pattern",
    articleTitle: "Article Morph",
    articleLead: "Change case and watch only the article form that needs to move.",
    genderNumber: "Gender / number",
    grammaticalCase: "Case",
    lanesTitle: "Case Lanes",
    lanesLead: "Sort sentence chunks by job, not by position.",
    lanesInstruction: "Focus a token and use ← / →, or use its Move buttons. Dragging is never required.",
    laneExercise: "Case lane exercise",
    subjectLane: "Subject lane · Nominativ",
    objectLane: "Object lane · Akkusativ",
    otherLane: "Other / context",
    moveLeft: (token) => `Move ${token} left`,
    moveRight: (token) => `Move ${token} right`,
  },
};

export const persianUiDictionary: UiDictionary = {
  locale: "fa",
  brand: "گرامر آلمانی A1",
  language: "زبان",
  home: {
    eyebrow: "آلمانی را یک سیستم یکپارچه یاد بگیر",
    title: "گرامر را ببین؛ جمله را بساز.",
    body: "یک کتاب ساختاریافتهٔ آلمانی A1 که فرمول، معنی، کاربرد، نشانه‌های تشخیص، مثال، اشتباه‌های رایج، تمرین گفتاری و تمرین را در یک مسیر منظم کنار هم نگه می‌دارد.",
    openBook: "باز کردن کتاب A1",
    noteTitle: "کتاب کار دقیق × نقشهٔ زندهٔ گرامر",
    noteBody: "ساختار یک‌جای کتاب مرجع به یک محیط مدرن یادگیری تبدیل شده است: جدول‌های قابل‌استفاده، یادداشت معلم، نمایش بصری حالت‌های دستوری و حرکت‌هایی که برای فهمیدن‌اند، نه تزئین.",
  },
  map: {
    eyebrow: "نقشهٔ گرامر در ۱۲ درس",
    title: "آلمانی A1",
    body: "یک مسیر روشن از ساخت اولین جمله تا صحبت دربارهٔ اتفاق‌های تمام‌شده. هر درس کامل و منظم روی یک صفحه می‌ماند.",
    routeStamp: "۱۲ درس · یک سیستم",
    openLesson: "باز کردن درس",
    planned: "در برنامه",
  },
  navigation: {
    contents: "فهرست",
    bookContents: "فهرست کتاب A1",
    backToMap: "بازگشت به نقشهٔ A1",
    onThisPage: "در این صفحه",
    search: "جست‌وجو",
    grammarAtlas: "نقشهٔ گرامر",
    unitBook: "کتاب ۱۲‌درسی",
  },
  lesson: {
    unit: "درس",
    grammarSnapshot: "نمای سریع گرامر",
    subject: "فاعل",
    directObject: "مفعول مستقیم",
    sections: {
      formula: "فرمول / ساختار",
      meaning: "معنی",
      usage: "کاربرد",
      recognition: "نشانه‌های تشخیص",
      table: "جدول حالت / صرف",
      examples: "مثال‌ها",
      contrast: "مقایسه",
      interaction: "آزمایشگاه تعاملی گرامر",
      mistakes: "اشتباه‌های رایج",
      speaking: "انتقال به گفتار",
      practice: "تمرین کوتاه",
    },
    interactionLead: "ساختار را تغییر بده و بعد جملهٔ آلمانی حاصل را با صدای بلند بگو. همهٔ تعامل‌ها بدون نیاز به کشیدن‌و‌رهاکردن و با صفحه‌کلید هم قابل انجام‌اند.",
    speakingLead: "این جمله‌ها را با صدای بلند بگو. حالت گفتاری برای تمرین شخصی است؛ پشتیبانی اختیاری است و هیچ میکروفن یا امتیازدهی گفتار استفاده نمی‌شود.",
    sourceNotes: "هم‌راستایی A1 / یادداشت منابع",
    pendingTranslation: "متن آموزشی فارسی این درس هنوز در حال آماده‌سازی است؛ محتوای آلمانی بدون تغییر باقی مانده است.",
  },
  practice: {
    lessonPractice: "تمرین درس",
    correctCount: (completed, total) => `${completed} از ${total} درست`,
    microPractice: "تمرین کوتاه",
    completed: "انجام‌شده",
    types: {
      multipleChoice: "چندگزینه‌ای",
      fillBlank: "جای خالی",
      sentenceBuilder: "ساخت جمله",
      errorCorrection: "اصلاح خطا",
    },
    chooseOne: "یک پاسخ را انتخاب کن",
    yourAnswer: "پاسخ تو",
    missingForm: "شکل درست آلمانی را بنویس",
    correctSentence: "جملهٔ درست",
    fix: "اصلاح کن",
    checkAnswer: "بررسی پاسخ",
    correct: "درست",
    notYet: "هنوز نه",
    expected: "پاسخ درست",
    buildHere: "جمله را اینجا بساز",
    availableTokens: "واژه‌های در دسترس برای ساخت جمله",
    removeLast: "حذف آخرین واژه",
    reset: "از نو",
  },
  speaking: {
    mode: "حالت گفتاری",
    promptCount: (current, total) => `تمرین ${current} از ${total}`,
    noMicrophone: "تمرین شخصی · بدون امتیازدهی میکروفن",
    showSupport: "نمایش راهنما",
    hideSupport: "پنهان کردن راهنما",
    markPracticed: "تمرین شد",
    practiced: "تمرین‌شده ✓",
    previous: "→ قبلی",
    next: "بعدی ←",
  },
  search: {
    trigger: "جست‌وجو",
    close: "بستن",
    closeAria: "بستن جست‌وجو",
    kicker: "فهرست محلی A1",
    dialogTitle: "جست‌وجو در کتاب گرامر",
    description: "در عنوان درس‌ها، فرمول‌ها، توضیح‌ها، مثال‌ها، اشتباه‌های رایج و تمرین‌های گفتاری جست‌وجو کن.",
    inputLabel: "جست‌وجو در آلمانی A1",
    placeholder: "مثلاً Akkusativ، dative یا mit dem Bus…",
    filterLabel: "فیلتر جست‌وجو بر اساس سطح",
    allLevels: "همهٔ A1",
    resultCount: (count) => `${count} نتیجه`,
    idleStatus: "یک واژه یا عبارت بنویس تا در هر ۱۲ درس جست‌وجو شود.",
    introTitle: "در کل مسیر یک‌جا جست‌وجو کن.",
    introBody: "فهرست از داده‌های اعتبارسنجی‌شدهٔ خود کتاب ساخته می‌شود. جست‌وجوی تو به سرویس بیرونی ارسال نمی‌شود.",
    noResultsTitle: "درسی با این جست‌وجو پیدا نشد.",
    noResultsBody: "یک شکل آلمانی، اصطلاح گرامری یا عبارت دیگری را امتحان کن، یا فیلتر سطح را بردار.",
    unit: "درس",
  },
  interaction: {
    verbSecondTitle: "ریل فعل در جایگاه دوم",
    verbSecondLead: "یک بخش را به ابتدای جمله ببر؛ فعل صرف‌شده همچنان جایگاه دوم را نگه می‌دارد.",
    chooseFirst: "بخش اول جمله را انتخاب کن",
    sentencePositions: "جایگاه‌های جمله",
    finiteVerb: "فعل صرف‌شده",
    bracketTitle: "قاب جمله",
    bracketLead: "ببین چه چیزی جملهٔ آلمانی را باز می‌کند و چه چیزی آن را می‌بندد.",
    chooseBracket: "الگوی قاب جمله را انتخاب کن",
    articleTitle: "تغییر آرتیکل",
    articleLead: "حالت دستوری را عوض کن و ببین کدام شکل آرتیکل باید تغییر کند.",
    genderNumber: "جنس / تعداد",
    grammaticalCase: "حالت دستوری",
    lanesTitle: "مسیرهای حالت دستوری",
    lanesLead: "بخش‌های جمله را بر اساس نقش‌شان دسته‌بندی کن، نه جای‌شان در جمله.",
    lanesInstruction: "روی یک بخش تمرکز کن و با ← / → یا دکمه‌های حرکت، نقش آن را جابه‌جا کن. کشیدن‌و‌رهاکردن لازم نیست.",
    laneExercise: "تمرین مسیرهای حالت دستوری",
    subjectLane: "مسیر فاعل · Nominativ",
    objectLane: "مسیر مفعول · Akkusativ",
    otherLane: "بخش دیگر / زمینه",
    moveLeft: (token) => `انتقال ${token} به چپ`,
    moveRight: (token) => `انتقال ${token} به راست`,
  },
};

export function getUiDictionary(locale: Locale): UiDictionary {
  return locale === "fa" ? persianUiDictionary : englishUiDictionary;
}
