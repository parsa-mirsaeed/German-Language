import type { GrammarLesson } from "@/content/schema/content-types";

export const perfectIntegrationLesson = {
  id: "a1-u12-perfect-integration",
  level: "A1-bridge",
  unit: 12,
  slug: "perfect-basics-a1-review",
  title: { de: "Perfekt und A1-Integration", en: "Perfekt basics and A1 integration" },
  purpose:
    "Build a small, practical bridge into talking about completed events with haben/sein + past participle while reviewing the sentence systems learned across A1.",
  requires: ["a1-u11-requests-connectors"],
  introduces: ["perfect-tense", "past-participle", "haben-sein-auxiliary", "a1-integration"],
  formula: [
    {
      label: "Most beginner Perfekt sentences",
      pattern: "Position 1 + haben (konjugiert) + ... + Partizip II",
      note: "The auxiliary is the finite verb in position 2; the participle closes the sentence bracket.",
    },
    {
      label: "Common movement/change verbs",
      pattern: "Position 1 + sein (konjugiert) + ... + Partizip II",
      note: "A small common group uses sein, for example gehen → ist gegangen and kommen → ist gekommen.",
    },
  ],
  meaning: [
    "Perfekt is a common way to talk about completed past events in everyday German.",
    "The auxiliary haben or sein is conjugated; the lexical verb appears as a past participle at the end.",
    "This lesson is an A1 bridge: it introduces the working pattern and a small high-frequency set rather than a complete participle/auxiliary system.",
  ],
  usage: [
    { title: "Completed everyday actions", body: "Ich habe Kaffee gekauft. Wir haben Deutsch gelernt. The auxiliary haben carries person/number and the participle closes the clause." },
    { title: "Movement with sein", body: "Lea ist nach Hause gegangen. Er ist gestern gekommen. Learn these common sein patterns as complete chunks." },
    { title: "Reuse earlier word order", body: "Gestern habe ich lange gearbeitet. A time chunk can fill position 1, the auxiliary remains finite in position 2, and the participle stays at the end." },
  ],
  recognitionCues: [
    { label: "habe / hast / hat / haben", note: "A present-tense form of haben near the front plus a participle at the end often signals Perfekt." },
    { label: "bin / bist / ist / sind", note: "Some common movement/change verbs use sein as the auxiliary." },
    { label: "ge- ... -t / -en", note: "Many participles have ge-, though important common patterns vary; learn high-frequency participles individually at this stage." },
  ],
  paradigms: [
    {
      title: "Small A1 Perfekt set",
      columns: ["Infinitive", "Auxiliary", "Participle", "Example"],
      rows: [
        ["lernen", "haben", "gelernt", "Ich habe Deutsch gelernt."],
        ["kaufen", "haben", "gekauft", "Wir haben Brot gekauft."],
        ["arbeiten", "haben", "gearbeitet", "Sie hat heute gearbeitet."],
        ["gehen", "sein", "gegangen", "Er ist nach Hause gegangen."],
        ["kommen", "sein", "gekommen", "Lea ist spät gekommen."],
      ],
    },
  ],
  examples: [
    { de: "Ich habe Deutsch gelernt.", en: "I learned/studied German.", focusTokens: ["habe", "gelernt"], kind: "affirmative" },
    { de: "Wir haben Brot gekauft.", en: "We bought bread.", focusTokens: ["haben", "gekauft"], kind: "affirmative" },
    { de: "Gestern hat Tom lange gearbeitet.", en: "Yesterday Tom worked for a long time.", focusTokens: ["Gestern", "hat", "gearbeitet"], kind: "context" },
    { de: "Bist du nach Hause gegangen?", en: "Did you go home?", focusTokens: ["Bist", "gegangen"], kind: "question" },
    { de: "Ich habe heute nicht gearbeitet.", en: "I did not work today.", focusTokens: ["habe", "nicht", "gearbeitet"], kind: "negative" },
    { de: "Gestern ich habe gelernt. → Gestern habe ich gelernt.", en: "Wrong position-2 order → correct Perfekt main clause.", focusTokens: ["Gestern", "habe", "gelernt"], kind: "correction" },
  ],
  contrasts: [
    {
      left: "Heute lerne ich Deutsch.",
      right: "Gestern habe ich Deutsch gelernt.",
      explanation: "The present sentence has one finite verb; the Perfekt sentence uses a finite auxiliary in position 2 and a participle at the end.",
    },
    {
      left: "Ich habe Brot gekauft.",
      right: "Ich bin nach Hause gegangen.",
      explanation: "Most examples here use haben; common movement verbs such as gehen use sein. At this stage, learn the frequent auxiliary-verb pairs explicitly.",
    },
  ],
  teacherNotes: [
    {
      title: "Teacher ink — bridge, not a new encyclopedia",
      body: "Keep the scope deliberately small: a few high-frequency participles, the auxiliary bracket, and reuse of position 2. More systematic past-tense expansion belongs after A1.",
      fa: "این بخش فقط یک پل است: چند Partizip پرکاربرد، انتخاب haben/sein در مثال‌های اصلی و همان قانون جایگاه دوم. وارد جزئیات گستردهٔ زمان گذشته نشو.",
    },
  ],
  commonMistakes: [
    { wrong: "Gestern ich habe Deutsch gelernt.", correct: "Gestern habe ich Deutsch gelernt.", explanation: "Gestern fills position 1, so the finite auxiliary habe must be in position 2." },
    { wrong: "Ich habe nach Hause gegangen.", correct: "Ich bin nach Hause gegangen.", explanation: "The common movement verb gehen uses sein in this Perfekt pattern: bin gegangen." },
  ],
  speakingPrompts: [
    { prompt: "Say one thing you learned or studied yesterday.", support: "Gestern habe ich ... gelernt." },
    { prompt: "Say one thing you bought.", support: "Ich habe ... gekauft." },
    { prompt: "Say where you went.", support: "Ich bin ... gegangen." },
  ],
  exercises: [
    {
      id: "u12-perf-01",
      type: "multiple-choice",
      prompt: "Choose the correct sentence.",
      options: ["Gestern ich habe gearbeitet.", "Gestern habe ich gearbeitet.", "Gestern gearbeitet ich habe."],
      answer: "Gestern habe ich gearbeitet.",
      explanation: "Gestern is position 1, the finite auxiliary habe is position 2, and gearbeitet closes the clause.",
    },
  ],
  references: [
    { label: "Repository engineering plan", note: "Unit 12 is intentionally scoped as the plan's A1 bridge for Perfekt basics and integration." },
    { label: "Duden — grammar knowledge for learners", url: "https://www.duden.de/sprachwissen/fuer-lernende", note: "Grammar cross-check; wording and examples are original." },
  ],
} satisfies GrammarLesson;
