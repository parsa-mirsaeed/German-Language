import type { GrammarLesson } from "@/content/schema/content-types";

export const unit01SampleLesson = {
  id: "a1-u01-verb-second",
  level: "A1.1",
  unit: 1,
  slug: "verb-second-basics",
  title: {
    de: "Verb auf Position 2",
    en: "The finite verb in position 2",
  },
  purpose:
    "Build a simple German statement by keeping the conjugated verb in the second sentence position.",
  requires: [],
  introduces: ["finite-verb", "verb-second"],
  formula: [
    {
      label: "Basic statement",
      pattern: "Position 1 + finite Verb + ...",
      note: "Position 1 can be the subject or another short element.",
    },
  ],
  meaning: [
    "German statements organize information around the finite verb.",
    "The finite verb normally occupies the second sentence position in a simple main-clause statement.",
  ],
  usage: [
    {
      title: "Start with the subject",
      body: "Ich wohne in Zürich. The subject is first and the finite verb is second.",
    },
    {
      title: "Start with time",
      body: "Heute wohne ich in Zürich. Heute fills position 1, so wohne still stays in position 2.",
    },
  ],
  recognitionCues: [
    {
      label: "finite verb",
      note: "Look for the conjugated verb: bin, ist, wohne, komme, lerne ...",
    },
  ],
  examples: [
    {
      de: "Ich lerne Deutsch.",
      en: "I am learning German.",
      focusTokens: ["lerne"],
      kind: "affirmative",
    },
    {
      de: "Heute lerne ich Deutsch.",
      en: "Today I am learning German.",
      focusTokens: ["Heute", "lerne"],
      kind: "context",
    },
    {
      de: "Ich wohne nicht in Berlin.",
      en: "I do not live in Berlin.",
      focusTokens: ["wohne"],
      kind: "negative",
    },
    {
      de: "Kommst du aus Bern?",
      en: "Do you come from Bern?",
      focusTokens: ["Kommst"],
      note: "Questions use a different pattern; this example is only a preview.",
      kind: "question",
    },
    {
      de: "Heute ich lerne Deutsch. → Heute lerne ich Deutsch.",
      en: "Today I learn German. → Today I learn German.",
      focusTokens: ["Heute", "lerne"],
      kind: "correction",
    },
  ],
  contrasts: [
    {
      left: "Ich lerne heute Deutsch.",
      right: "Heute lerne ich Deutsch.",
      explanation:
        "Both are correct. Changing position 1 changes the emphasis, but the finite verb stays in position 2.",
    },
  ],
  teacherNotes: [
    {
      title: "Teacher ink",
      body: "Count sentence positions, not individual words. A phrase like “Am Montag” can fill one position.",
      fa: "جایگاه‌ها را بشمار، نه تک‌تک کلمه‌ها. یک عبارت مثل «Am Montag» می‌تواند یک جایگاه باشد.",
    },
  ],
  commonMistakes: [
    {
      wrong: "Heute ich lerne Deutsch.",
      correct: "Heute lerne ich Deutsch.",
      explanation:
        "When Heute takes position 1, the finite verb must move directly into position 2.",
    },
  ],
  speakingPrompts: [
    {
      prompt: "Say where you live.",
      support: "Ich wohne in ...",
    },
    {
      prompt: "Start with Heute and say what you are learning.",
      support: "Heute lerne ich ...",
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
      note: "Foundation fixture used to validate the complete lesson contract; final Unit 1 authoring follows in the content PR.",
    },
  ],
} satisfies GrammarLesson;
