import { requestsConnectorsLesson } from "@/content/a1/unit-11-requests-connectors";
import { buildPersianLessonLocalization } from "./build-persian-localization";

export const unit11Persian = buildPersianLessonLocalization(requestsConnectorsLesson, {
  title: "درخواست‌ها، دستورها و پیونددهنده‌ها",
  purpose:
    "درخواست‌ها و دستورهای ساده و کاربردی بساز و سپس ایده‌های A1 را با und، aber و denn به هم وصل کن، بدون اینکه ساختار روشن جملهٔ اصلی را از دست بدهی.",
  formula: [
    {
      label: "دستور آشنا برای du",
      note: "دستورهای رایج A1 اغلب مستقیماً با فعل شروع می‌شوند: Komm bitte! Mach die Tür zu!",
    },
    {
      label: "درخواست مؤدبانه",
      note: "این الگو همان قاب فعل مُدال را برای موقعیت‌های خدماتی و درخواست کمک دوباره استفاده می‌کند.",
    },
    {
      label: "پیونددهنده‌های ساده",
      note: "با und، aber و denn هر بخش همچنان ترتیب معمول جملهٔ اصلی را حفظ می‌کند.",
    },
  ],
  meaning: [
    "Imperativ به کسی می‌گوید یا دعوتش می‌کند کاری انجام دهد؛ bitte می‌تواند لحن را نرم‌تر کند.",
    "یک سؤال مُدال با können الگوی مطمئنی برای درخواست مؤدبانه در A1 است.",
    "und اطلاعات اضافه می‌کند، aber تضاد می‌سازد و denn یک دلیل ساده می‌دهد؛ هر سه ترتیب جملهٔ اصلی را حفظ می‌کنند.",
  ],
  usage: [
    {
      title: "راهنمایی‌های روزمره",
      body: "Komm bitte rein. Warte einen Moment. دستورهای کوتاهِ فعل‌اول در موقعیت‌های عملی بسیار رایج‌اند.",
    },
    {
      title: "درخواست مؤدبانه برای کمک",
      body: "Können Sie mir bitte helfen? ضمیر رسمی Sie، فعل können، bitte و مصدرِ پایانی را در یک الگوی کاربردی ترکیب می‌کند.",
    },
    {
      title: "دو ایدهٔ کامل را وصل کن",
      body: "Ich lerne Deutsch, aber ich spreche noch langsam. هر دو طرف، فعلِ صرف‌شده را در جایگاه معمول جملهٔ اصلی نگه می‌دارند.",
    },
  ],
  recognitionCues: [
    {
      label: "فعل در ابتدا + !",
      note: "یک عبارت کوتاه که با فعل شروع می‌شود اغلب نشانهٔ Imperativ است.",
    },
    {
      label: "Können Sie bitte ...?",
      note: "یک الگوی قوی و قابل‌استفادهٔ دوباره برای درخواست مؤدبانه.",
    },
    {
      label: "und · aber · denn",
      note: "این پیونددهنده‌ها دو جملهٔ اصلیِ هم‌سطح را وصل می‌کنند و فعلِ صرف‌شده را به انتهای جمله نمی‌فرستند.",
    },
  ],
  paradigms: [
    {
      title: "الگوهای کاربردی درخواست",
      columns: ["موقعیت", "الگو", "مثال"],
      rowLabels: ["دستور du", "دستور ihr", "دستور Sie", "سؤال مؤدبانه"],
    },
  ],
  examples: [
    { translation: "لطفاً بیا داخل!" },
    { translation: "لطفاً اینجا منتظر بمانید!" },
    { translation: "ممکن است لطفاً به من کمک کنید؟" },
    { translation: "من چای می‌نوشم و لیا قهوه می‌نوشد." },
    { translation: "خسته‌ام، اما هنوز دارم کار می‌کنم." },
    { translation: "در خانه می‌مانم، چون مریضم." },
  ],
  contrasts: [
    {
      explanation:
        "جملهٔ اول یک دستور مستقیم و آشناست؛ جملهٔ دوم یک درخواست مؤدبانه با Sie است و از قاب فعل مُدال استفاده می‌کند.",
    },
    {
      explanation:
        "und یک واقعیت هم‌جهت اضافه می‌کند؛ aber تضاد را نشان می‌دهد. هر دو پیونددهنده ترتیب جملهٔ اصلی را حفظ می‌کنند.",
    },
  ],
  teacherNotes: [
    {
      title: "یادداشت معلم — ادب را از بار گرامری جدا نگه دار",
      body: "قبل از گسترش سبک‌های درخواست، یک الگوی مؤدبانهٔ مطمئن داشته باش: «Können Sie bitte ...?». این الگو به‌جای ساختن یک سیستم تازه، همان نحوِ فعل مُدال را دوباره استفاده می‌کند.",
    },
  ],
  commonMistakes: [
    {
      explanation:
        "در Imperativ پایه و آشنای مفرد، ضمیر فاعلی du معمولاً حذف می‌شود: Komm bitte rein!",
    },
    {
      explanation:
        "aber دو جملهٔ اصلی را هم‌پایه می‌کند؛ در بخش دوم اینجا ترتیب معمول فاعل + فعلِ صرف‌شده حفظ می‌شود: aber ich spreche Deutsch.",
    },
  ],
  speakingPrompts: [
    {
      prompt: "از یک نفر مؤدبانه بخواه به تو کمک کند.",
      support: "Können Sie mir bitte helfen?",
    },
    {
      prompt: "یک دستور دوستانه با bitte بده.",
      support: "... bitte!",
    },
    {
      prompt: "دو واقعیت را با aber به هم وصل کن.",
      support: "Ich ..., aber ich ...",
    },
  ],
  exercises: [
    {
      id: "u11-request-01",
      prompt: "درخواست مؤدبانه را انتخاب کن.",
      explanation:
        "Können Sie bitte ... + مصدر یک الگوی مطمئن و مؤدبانهٔ A1 برای درخواست است.",
    },
  ],
});
