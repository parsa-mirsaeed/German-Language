import { perfectIntegrationLesson } from "@/content/a1/unit-12-perfect-integration";
import { buildPersianLessonLocalization } from "./build-persian-localization";

export const unit12Persian = buildPersianLessonLocalization(perfectIntegrationLesson, {
  title: "Perfekt و جمع‌بندی A1",
  purpose:
    "یک پل کوچک و کاربردی برای صحبت دربارهٔ اتفاق‌های تمام‌شده بساز: haben/sein + Partizip II را با همان سیستم‌های جایگاه دوم و قاب جمله که در A1 یاد گرفته‌ای ترکیب کن.",
  formula: [
    {
      label: "بیشتر جمله‌های سادهٔ Perfekt",
      note: "فعل کمکیِ صرف‌شده جایگاه دوم را می‌گیرد و Partizip II در انتهای جمله قاب را می‌بندد.",
    },
    {
      label: "چند فعل رایجِ حرکت یا تغییر",
      note: "گروه کوچکی از فعل‌های پرتکرار با sein می‌آیند؛ در این سطح gehen → ist gegangen و kommen → ist gekommen را به‌صورت عبارت کامل یاد بگیر.",
    },
  ],
  meaning: [
    "Perfekt یکی از روش‌های بسیار رایج برای صحبت دربارهٔ اتفاق‌های تمام‌شده در آلمانی روزمره است.",
    "haben یا sein صرف می‌شود و فعل اصلی به شکل Partizip II در انتهای جمله می‌آید.",
    "این درس عمداً فقط یک پل A1 است: الگوی کاری و چند فعل پرتکرار را معرفی می‌کند، نه تمام قواعد ساخت Partizip یا انتخاب فعل کمکی.",
  ],
  usage: [
    {
      title: "کارهای روزمرهٔ تمام‌شده",
      body: "Ich habe Kaffee gekauft. Wir haben Deutsch gelernt. فعل کمکی شخص و تعداد را نشان می‌دهد و Partizip جمله را می‌بندد. ترجمهٔ طبیعی فارسیِ این جمله‌ها اغلب گذشتهٔ ساده است: «قهوه خریدم»، نه الزاماً «خریده‌ام».",
    },
    {
      title: "حرکت با sein",
      body: "Lea ist nach Hause gegangen. Er ist gestern gekommen. این ترکیب‌های رایج با sein را در A1 به‌صورت واحدهای کامل حفظ کن.",
    },
    {
      title: "ترتیب واژه‌های قبلی را دوباره استفاده کن",
      body: "Gestern habe ich lange gearbeitet. عبارت زمان می‌تواند جایگاه اول باشد، فعل کمکیِ صرف‌شده دوم می‌ماند و Partizip انتهای جمله قرار می‌گیرد.",
    },
  ],
  recognitionCues: [
    {
      label: "habe / hast / hat / haben",
      note: "یک شکل زمان حالِ haben نزدیک ابتدای جمله همراه با Partizip در انتها اغلب نشانهٔ Perfekt است.",
    },
    {
      label: "bin / bist / ist / sind",
      note: "بعضی فعل‌های رایجِ حرکت یا تغییر از sein به‌عنوان فعل کمکی استفاده می‌کنند.",
    },
    {
      label: "ge- ... -t / -en",
      note: "بسیاری از Partizipها ge- دارند، اما الگوها استثنا و تنوع دارند؛ در این مرحله شکل‌های پرتکرار را جداگانه یاد بگیر.",
    },
  ],
  paradigms: [
    {
      title: "مجموعهٔ کوچک Perfekt برای A1",
      columns: ["مصدر", "فعل کمکی", "Partizip", "مثال"],
      rowLabels: ["lernen", "kaufen", "arbeiten", "gehen", "kommen"],
    },
  ],
  examples: [
    { translation: "آلمانی یاد گرفتم / خواندم." },
    { translation: "نان خریدیم." },
    { translation: "دیروز تام مدت زیادی کار کرد." },
    { translation: "به خانه رفتی؟" },
    { translation: "امروز کار نکردم." },
    {
      translation: "ترتیب جایگاه دوم نادرست است → جملهٔ اصلیِ درست در Perfekt.",
      note: "Gestern جایگاه اول را می‌گیرد و habe باید بلافاصله در جایگاه دوم بیاید.",
    },
  ],
  contrasts: [
    {
      explanation:
        "جملهٔ زمان حال یک فعلِ صرف‌شده دارد؛ جملهٔ Perfekt یک فعل کمکیِ صرف‌شده در جایگاه دوم و یک Partizip در انتها دارد.",
    },
    {
      explanation:
        "بیشتر مثال‌های این درس با haben می‌آیند؛ چند فعل رایجِ حرکت مثل gehen از sein استفاده می‌کنند. در این مرحله جفت‌های پرتکرارِ فعل + فعل کمکی را صریح یاد بگیر.",
    },
  ],
  teacherNotes: [
    {
      title: "یادداشت معلم — پل است، نه یک دانشنامهٔ تازه",
      body: "دامنه را کوچک نگه دار: چند Partizip پرتکرار، قاب فعل کمکی و استفادهٔ دوباره از قانون جایگاه دوم. گسترش نظام‌مند زمان‌های گذشته بعد از A1 انجام می‌شود.",
    },
  ],
  commonMistakes: [
    {
      explanation:
        "Gestern جایگاه اول را پر کرده است؛ بنابراین فعل کمکیِ صرف‌شدهٔ habe باید جایگاه دوم باشد.",
    },
    {
      explanation:
        "فعل رایجِ حرکت gehen در این الگوی Perfekt با sein می‌آید: ich bin gegangen، نه ich habe gegangen.",
    },
  ],
  speakingPrompts: [
    {
      prompt: "به آلمانی یک چیزی را بگو که دیروز یاد گرفتی یا خواندی.",
      support: "Gestern habe ich ... gelernt.",
    },
    {
      prompt: "یک چیزی را بگو که خریدی.",
      support: "Ich habe ... gekauft.",
    },
    {
      prompt: "بگو به کجا رفتی.",
      support: "Ich bin ... gegangen.",
    },
  ],
  exercises: [
    {
      id: "u12-perf-01",
      prompt: "جملهٔ درست را انتخاب کن.",
      explanation:
        "Gestern جایگاه اول است، فعل کمکیِ صرف‌شدهٔ habe در جایگاه دوم می‌آید و gearbeitet جمله را می‌بندد.",
    },
  ],
});
