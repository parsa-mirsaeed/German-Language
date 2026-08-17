import type { GrammarLesson } from "@/content/schema/content-types";

export const separableVerbsLesson = {
  id: "a1-u08-separable-verbs",
  level: "A1.2",
  unit: 8,
  slug: "separable-verbs-time-word-order",
  title: { de: "Trennbare Verben und Zeit", en: "Separable verbs, time, and word order" },
  purpose:
    "Use common separable verbs in everyday routines, placing the finite verb part in position 2 and the separable prefix at the end while organizing simple time information clearly.",
  requires: ["a1-u07-modal-verbs"],
  introduces: ["separable-verbs", "separable-prefix", "time-expressions"],
  formula: [
    {
      label: "Separable main clause",
      pattern: "Position 1 + finiter Verbstamm + ... + Präfix",
      note: "aufstehen becomes stehe ... auf; anrufen becomes rufe ... an.",
    },
    {
      label: "Time first",
      pattern: "Um sieben Uhr + stehe + ich + auf",
      note: "A time phrase can fill position 1; the finite verb still stays in position 2.",
    },
  ],
  meaning: [
    "Some German verbs contain a prefix that separates in a simple present-tense main clause.",
    "The conjugated verb stem follows the normal position-2 rule and the prefix moves to the right edge.",
    "Time phrases can move to position 1 without changing the separable-verb structure.",
  ],
  usage: [
    { title: "Daily routines", body: "Ich stehe um sieben Uhr auf. aufstehen is very common for describing a morning routine." },
    { title: "Phone calls", body: "Ich rufe meine Mutter an. The finite form rufe is near the front; an closes the clause." },
    { title: "Time first for emphasis", body: "Am Abend sehe ich fern. Am Abend fills position 1, sehe is position 2, and fern remains at the end." },
  ],
  recognitionCues: [
    { label: "prefix at the right edge", note: "Short pieces such as auf, an, ein, mit, or fern can signal a separable verb." },
    { label: "dictionary infinitive", note: "Learn the complete infinitive—aufstehen, anrufen, einkaufen—so the split pieces stay connected in memory." },
  ],
  paradigms: [
    {
      title: "Three everyday separable verbs",
      columns: ["Infinitive", "Finite form", "Prefix", "Example"],
      rows: [
        ["aufstehen", "stehe", "auf", "Ich stehe früh auf."],
        ["anrufen", "rufe", "an", "Ich rufe Tom an."],
        ["einkaufen", "kaufe", "ein", "Wir kaufen heute ein."],
      ],
    },
  ],
  examples: [
    { de: "Ich stehe um sieben Uhr auf.", en: "I get up at seven o'clock.", focusTokens: ["stehe", "auf"], kind: "affirmative" },
    { de: "Heute kaufe ich im Supermarkt ein.", en: "Today I shop at the supermarket.", focusTokens: ["Heute", "kaufe", "ein"], kind: "context" },
    { de: "Rufst du Anna an?", en: "Are you calling Anna?", focusTokens: ["Rufst", "an"], kind: "question" },
    { de: "Am Abend sehe ich nicht fern.", en: "In the evening I do not watch TV.", focusTokens: ["sehe", "nicht", "fern"], kind: "negative" },
    { de: "Wir bringen Getränke mit.", en: "We bring drinks along.", focusTokens: ["bringen", "mit"], kind: "affirmative" },
    { de: "Ich aufstehe um sieben Uhr. → Ich stehe um sieben Uhr auf.", en: "Unsplit form → correct present-tense separable form.", focusTokens: ["aufstehe", "stehe", "auf"], kind: "correction" },
  ],
  contrasts: [
    {
      left: "Ich stehe früh auf.",
      right: "Heute stehe ich früh auf.",
      explanation: "The time element can move to position 1, but the finite stem stays in position 2 and the separable prefix remains at the end.",
    },
  ],
  teacherNotes: [
    {
      title: "Teacher ink — store both ends together",
      body: "When learners hear stehe, train them to predict auf. Say the split form with a small pause to make the bracket audible.",
      fa: "وقتی بخش صرف‌شدهٔ فعل را می‌شنوی، پیشوند جداشدنی را در انتهای جمله پیش‌بینی کن؛ stehe ... auf را به صورت یک الگو تمرین کن.",
    },
  ],
  commonMistakes: [
    { wrong: "Ich aufstehe um sieben Uhr.", correct: "Ich stehe um sieben Uhr auf.", explanation: "In a simple main clause, the prefix separates and moves to the end." },
    { wrong: "Heute ich stehe früh auf.", correct: "Heute stehe ich früh auf.", explanation: "Heute fills position 1, so the finite verb stehe must occupy position 2." },
  ],
  speakingPrompts: [
    { prompt: "Say what time you get up.", support: "Ich stehe um ... Uhr auf." },
    { prompt: "Say when you shop.", support: "Am ... kaufe ich ein." },
    { prompt: "Ask whether someone calls a friend today.", support: "Rufst du heute ... an?" },
  ],
  exercises: [
    {
      id: "u08-sep-01",
      type: "multiple-choice",
      prompt: "Choose the correct sentence for aufstehen.",
      options: ["Ich stehe früh auf.", "Ich aufstehe früh.", "Ich stehe auf früh."],
      answer: "Ich stehe früh auf.",
      explanation: "stehe is finite in position 2 and the separable prefix auf closes the clause.",
    },
  ],
  references: [
    { label: "Repository engineering plan", note: "Unit 8 follows the planned separable-verb, time, and word-order progression." },
    { label: "Duden — grammar knowledge for learners", url: "https://www.duden.de/sprachwissen/fuer-lernende", note: "Grammar cross-check; wording and examples are original." },
  ],
} satisfies GrammarLesson;
