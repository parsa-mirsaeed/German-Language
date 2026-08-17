import type { GrammarLesson } from "@/content/schema/content-types";

export const negationLesson = {
  id: "a1-u04-negation",
  level: "A1.1",
  unit: 4,
  slug: "negation-nicht-kein",
  title: {
    de: "Negation: nicht und kein",
    en: "Negation with nicht and kein",
  },
  purpose:
    "Choose between nicht and kein for common A1 negatives and place the negative so the listener can see what is being rejected.",
  requires: ["a1-u03-nouns-articles"],
  introduces: ["nicht-kein-basics", "negation", "kein-article-pattern"],
  formula: [
    {
      label: "No / not a noun",
      pattern: "kein + Nomen",
      note: "Use kein with many noun phrases that would otherwise use ein/eine or no article.",
    },
    {
      label: "Not",
      pattern: "nicht + adjective/adverb/phrase or sentence focus",
      note: "nicht negates qualities, actions, or other information that is not an indefinite noun phrase.",
    },
  ],
  meaning: [
    "kein behaves like a negative article: ein Auto → kein Auto; eine Schwester → keine Schwester.",
    "nicht means not and is used to negate many other sentence elements.",
    "At A1, first decide whether the negative target is a noun phrase with the ein-pattern; this often makes the choice easier.",
  ],
  usage: [
    {
      title: "Negate an indefinite noun",
      body: "Ich habe ein Auto → Ich habe kein Auto. For a feminine noun: Das ist eine Katze → Das ist keine Katze.",
    },
    {
      title: "Negate an adjective",
      body: "Der Kaffee ist nicht kalt. Here kalt is an adjective, so nicht is the natural negative word.",
    },
    {
      title: "Negate a place or other phrase",
      body: "Ich wohne nicht in Berlin. The negative targets the place phrase in Berlin, so use nicht.",
    },
  ],
  recognitionCues: [
    {
      label: "ein / eine noun",
      note: "If the positive sentence uses ein/eine, the negative often uses kein/keine.",
    },
    {
      label: "adjective or place phrase",
      note: "nicht commonly negates information such as müde, heute, or in Berlin.",
    },
  ],
  paradigms: [
    {
      title: "kein in the nominative",
      columns: ["Gender / number", "Positive", "Negative", "Example"],
      rows: [
        ["Masculine", "ein", "kein", "Das ist kein Hund."],
        ["Feminine", "eine", "keine", "Das ist keine Katze."],
        ["Neuter", "ein", "kein", "Das ist kein Auto."],
        ["Plural", "—", "keine", "Das sind keine Bücher."],
      ],
    },
  ],
  examples: [
    {
      de: "Ich habe kein Auto.",
      en: "I do not have a car.",
      focusTokens: ["kein"],
      kind: "negative",
    },
    {
      de: "Das ist keine Katze.",
      en: "That is not a cat.",
      focusTokens: ["keine"],
      kind: "negative",
    },
    {
      de: "Der Tee ist nicht heiß.",
      en: "The tea is not hot.",
      focusTokens: ["nicht"],
      kind: "negative",
    },
    {
      de: "Wir wohnen nicht in Zürich.",
      en: "We do not live in Zurich.",
      focusTokens: ["nicht"],
      kind: "negative",
    },
    {
      de: "Heute arbeite ich nicht.",
      en: "I am not working today.",
      focusTokens: ["nicht"],
      kind: "context",
    },
    {
      de: "Ich habe nicht Auto. → Ich habe kein Auto.",
      en: "Wrong noun negation → correct kein pattern.",
      focusTokens: ["nicht", "kein"],
      kind: "correction",
    },
  ],
  contrasts: [
    {
      left: "Ich habe kein Fahrrad.",
      right: "Das Fahrrad ist nicht neu.",
      explanation:
        "kein negates the existence/possession of an indefinite noun; nicht negates the adjective neu.",
    },
  ],
  teacherNotes: [
    {
      title: "Teacher ink — identify the negative target",
      body: "Before choosing the word, ask: am I saying “no/not a noun,” or am I saying “not” about a quality, place, time, or action?",
      fa: "اول مشخص کن چه چیزی را منفی می‌کنی: اگر منظور «هیچ/یک اسم نیست» باشد معمولاً kein؛ برای صفت، مکان، زمان یا خود عمل معمولاً nicht.",
    },
  ],
  commonMistakes: [
    {
      wrong: "Ich habe nicht Auto.",
      correct: "Ich habe kein Auto.",
      explanation:
        "Auto is an indefinite noun phrase here, so German uses the negative article kein.",
    },
    {
      wrong: "Der Kaffee ist kein kalt.",
      correct: "Der Kaffee ist nicht kalt.",
      explanation:
        "kalt is an adjective, not a noun, so use nicht.",
    },
  ],
  speakingPrompts: [
    {
      prompt: "Say one thing you do not have.",
      support: "Ich habe kein/keine ...",
    },
    {
      prompt: "Say one place where you do not live.",
      support: "Ich wohne nicht in ...",
    },
    {
      prompt: "Describe one thing with a negative adjective.",
      support: "Der/Die/Das ... ist nicht ...",
    },
  ],
  exercises: [
    {
      id: "u04-neg-01",
      type: "multiple-choice",
      prompt: "Choose the correct negative: Ich habe ___ Fahrrad.",
      options: ["nicht", "kein", "keine"],
      answer: "kein",
      explanation:
        "Fahrrad is neuter and the noun phrase follows the ein-pattern, so the nominative/accusative neuter negative article is kein in this basic sentence.",
    },
  ],
  references: [
    {
      label: "Repository engineering plan",
      note: "Unit 4 follows the planned nicht/kein progression before accusative case expansion.",
    },
    {
      label: "Duden — grammar knowledge for learners",
      url: "https://www.duden.de/sprachwissen/fuer-lernende",
      note: "Grammar cross-check; lesson wording and examples are original.",
    },
  ],
} satisfies GrammarLesson;
