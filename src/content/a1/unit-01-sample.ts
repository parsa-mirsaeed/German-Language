import type { GrammarLesson } from "@/content/schema/content-types";

export const unit01SampleLesson = {
  id: "a1-u01-verb-second",
  level: "A1.1",
  unit: 1,
  slug: "verb-second-basics",
  title: {
    de: "Verb auf Position 2",
    en: "The German sentence engine",
  },
  purpose:
    "Build clear A1 statements by treating the finite verb as the sentence anchor and keeping it in the second sentence position.",
  requires: [],
  introduces: ["finite-verb", "verb-second", "statement-word-order"],
  formula: [
    {
      label: "Basic statement",
      pattern: "Position 1 + finites Verb + Rest",
      note: "Position 1 is one sentence chunk. It can be one word or a short phrase.",
    },
    {
      label: "Time first",
      pattern: "Heute / Am Montag + finites Verb + Subjekt + Rest",
      note: "When another chunk moves to position 1, the subject normally follows the finite verb.",
    },
  ],
  meaning: [
    "The finite verb is the conjugated verb that carries person and number.",
    "In a simple German main-clause statement, that finite verb normally occupies position 2.",
    "Position 1 is flexible, so German can change emphasis without losing the position-2 verb rule.",
  ],
  usage: [
    {
      title: "Begin with the subject",
      body: "Ich lerne Deutsch. The subject fills position 1 and lerne is the finite verb in position 2.",
    },
    {
      title: "Begin with time",
      body: "Heute lerne ich Deutsch. Heute fills position 1, lerne stays second, and the subject follows.",
    },
    {
      title: "Count chunks, not words",
      body: "Am Montag is one time chunk in Am Montag arbeite ich. Do not count am and Montag as two sentence positions.",
    },
  ],
  recognitionCues: [
    {
      label: "finite verb",
      note: "Find the conjugated verb: bin, ist, lerne, wohne, komme ...",
    },
    {
      label: "position 1",
      note: "Mark the complete first chunk before you count position 2.",
    },
  ],
  examples: [
    {
      de: "Ich lerne Deutsch.",
      en: "I learn German.",
      focusTokens: ["Ich", "lerne"],
      kind: "affirmative",
    },
    {
      de: "Heute lerne ich Deutsch.",
      en: "Today I am learning German.",
      focusTokens: ["Heute", "lerne"],
      kind: "context",
    },
    {
      de: "Am Montag arbeite ich zu Hause.",
      en: "On Monday I work at home.",
      focusTokens: ["Am Montag", "arbeite"],
      kind: "context",
    },
    {
      de: "Wir wohnen in Bern.",
      en: "We live in Bern.",
      focusTokens: ["Wir", "wohnen"],
      kind: "affirmative",
    },
    {
      de: "Morgen kommt Lea später.",
      en: "Tomorrow Lea comes later.",
      focusTokens: ["Morgen", "kommt"],
      kind: "context",
    },
    {
      de: "Heute ich lerne Deutsch. → Heute lerne ich Deutsch.",
      en: "Incorrect word order → correct position-2 word order.",
      focusTokens: ["Heute", "lerne"],
      kind: "correction",
    },
  ],
  contrasts: [
    {
      left: "Ich lerne heute Deutsch.",
      right: "Heute lerne ich Deutsch.",
      explanation:
        "Both statements are correct. The first chunk changes, but the finite verb remains in position 2.",
    },
  ],
  teacherNotes: [
    {
      title: "Teacher ink — one chunk can contain several words",
      body: "Teach learners to bracket the first phrase before counting. This prevents the common mistake of treating every written word as a sentence position.",
      fa: "برای شمردن جایگاه‌ها، عبارت را یک واحد ببین؛ مثلاً «Am Montag» یک جایگاه است، نه دو جایگاه.",
    },
  ],
  commonMistakes: [
    {
      wrong: "Heute ich lerne Deutsch.",
      correct: "Heute lerne ich Deutsch.",
      explanation:
        "Heute already occupies position 1, so the finite verb lerne must come immediately after it.",
    },
    {
      wrong: "Am Montag ich arbeite zu Hause.",
      correct: "Am Montag arbeite ich zu Hause.",
      explanation:
        "The whole phrase Am Montag fills position 1; arbeite is therefore the position-2 verb.",
    },
  ],
  speakingPrompts: [
    {
      prompt: "Say where you live.",
      support: "Ich wohne in ...",
    },
    {
      prompt: "Start with Heute and say what you are doing or learning.",
      support: "Heute ... ich ...",
    },
    {
      prompt: "Start with Am Montag and make one simple statement.",
      support: "Am Montag ... ich ...",
    },
  ],
  exercises: [
    {
      id: "u01-v2-01",
      type: "multiple-choice",
      prompt: "Choose the correct sentence.",
      options: [
        "Heute ich lerne Deutsch.",
        "Heute lerne ich Deutsch.",
        "Heute Deutsch ich lerne.",
      ],
      answer: "Heute lerne ich Deutsch.",
      explanation:
        "Heute is position 1, so the finite verb lerne must be in position 2.",
    },
  ],
  references: [
    {
      label: "Repository engineering plan",
      note: "Unit 1 production lesson follows the planned A1 sentence-engine progression and complete lesson contract.",
    },
    {
      label: "Duden — grammar knowledge for learners",
      url: "https://www.duden.de/sprachwissen/fuer-lernende",
      note: "Grammar cross-check; lesson wording and examples are original.",
    },
  ],
} satisfies GrammarLesson;
