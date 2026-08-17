import type { GrammarLesson } from "@/content/schema/content-types";

export const nounsArticlesLesson = {
  id: "a1-u03-nouns-articles",
  level: "A1.1",
  unit: 3,
  slug: "nouns-gender-articles-plurals",
  title: {
    de: "Nomen, Genus und Artikel",
    en: "Nouns, gender, articles, and plurals",
  },
  purpose:
    "Learn a German noun as a package—article, noun, and plural—so nominative noun phrases become reliable building blocks for later case work.",
  requires: ["a1-u02-present-tense"],
  introduces: ["noun-gender", "nominative-articles", "plural-patterns"],
  formula: [
    {
      label: "Vocabulary package",
      pattern: "der/die/das + Nomen + Pluralform",
      note: "Store the article and plural with the noun instead of learning the noun alone.",
    },
    {
      label: "Indefinite article",
      pattern: "ein Mann · eine Frau · ein Kind",
      note: "The basic nominative indefinite article distinguishes feminine eine from masculine/neuter ein.",
    },
  ],
  meaning: [
    "German nouns have grammatical gender: masculine, feminine, or neuter.",
    "The definite article in the nominative is der, die, or das; plural uses die.",
    "Plural formation is not one single ending, so the plural is best learned with each noun.",
  ],
  usage: [
    {
      title: "Name people and things",
      body: "Das ist ein Tisch. Die Lampe ist neu. The article belongs to the noun phrase and signals grammatical information.",
    },
    {
      title: "Learn the plural at the same time",
      body: "der Apfel → die Äpfel, die Frau → die Frauen, das Auto → die Autos. Different nouns use different plural patterns.",
    },
    {
      title: "Use nominative for the subject",
      body: "Der Mann arbeitet. Die Kinder spielen. These noun phrases are subjects and use nominative article forms.",
    },
  ],
  recognitionCues: [
    {
      label: "capital letter",
      note: "German nouns are written with an initial capital letter.",
    },
    {
      label: "der / die / das",
      note: "The article is a strong cue to a noun's grammatical gender in the basic nominative form.",
    },
    {
      label: "plural die",
      note: "All plural nouns use die as the nominative definite article.",
    },
  ],
  paradigms: [
    {
      title: "Nominative article overview",
      columns: ["Number / gender", "Definite", "Indefinite", "Example"],
      rows: [
        ["Masculine", "der", "ein", "der Mann / ein Mann"],
        ["Feminine", "die", "eine", "die Frau / eine Frau"],
        ["Neuter", "das", "ein", "das Kind / ein Kind"],
        ["Plural", "die", "—", "die Kinder"],
      ],
    },
  ],
  examples: [
    {
      de: "Der Kaffee ist heiß.",
      en: "The coffee is hot.",
      focusTokens: ["Der Kaffee"],
      kind: "affirmative",
    },
    {
      de: "Die Wohnung ist klein.",
      en: "The apartment is small.",
      focusTokens: ["Die Wohnung"],
      kind: "affirmative",
    },
    {
      de: "Das Buch ist interessant.",
      en: "The book is interesting.",
      focusTokens: ["Das Buch"],
      kind: "affirmative",
    },
    {
      de: "Ein Mann wartet hier.",
      en: "A man is waiting here.",
      focusTokens: ["Ein Mann"],
      kind: "context",
    },
    {
      de: "Die Kinder spielen draußen.",
      en: "The children are playing outside.",
      focusTokens: ["Die Kinder"],
      kind: "affirmative",
    },
    {
      de: "Das Frau ist nett. → Die Frau ist nett.",
      en: "Wrong article → correct feminine article.",
      focusTokens: ["Das", "Die"],
      kind: "correction",
    },
  ],
  contrasts: [
    {
      left: "der Tisch — die Tische",
      right: "das Auto — die Autos",
      explanation:
        "Both plurals use the article die, but the noun itself forms the plural differently. Learn each plural with its noun.",
    },
  ],
  teacherNotes: [
    {
      title: "Teacher ink — never learn a bare noun",
      body: "Say and write the article every time you review a new noun. Add the plural when it is useful. This prepares learners for later case changes.",
      fa: "اسم آلمانی را تنها حفظ نکن؛ همیشه آرتیکل را همراه آن یاد بگیر و در صورت نیاز شکل جمع را هم اضافه کن.",
    },
  ],
  commonMistakes: [
    {
      wrong: "das Frau",
      correct: "die Frau",
      explanation:
        "Frau is grammatically feminine, so its basic definite article is die.",
    },
    {
      wrong: "die Autos → die Auto",
      correct: "das Auto → die Autos",
      explanation:
        "Plural is not formed by changing only the article; the noun may also need a plural ending or other change.",
    },
  ],
  speakingPrompts: [
    {
      prompt: "Name three objects near you with their articles.",
      support: "der ... / die ... / das ...",
    },
    {
      prompt: "Say that one object is new or old.",
      support: "Der/Die/Das ... ist neu/alt.",
    },
    {
      prompt: "Give one singular noun and its plural.",
      support: "der/die/das ... → die ...",
    },
  ],
  exercises: [
    {
      id: "u03-noun-01",
      type: "multiple-choice",
      prompt: "Choose the correct article: ___ Frau arbeitet hier.",
      options: ["Der", "Die", "Das"],
      answer: "Die",
      explanation:
        "Frau is feminine, so the nominative definite article is die.",
    },
  ],
  references: [
    {
      label: "Repository engineering plan",
      note: "Unit 3 follows the planned noun, gender, article, and plural progression.",
    },
    {
      label: "Duden — grammar knowledge for learners",
      url: "https://www.duden.de/sprachwissen/fuer-lernende",
      note: "Grammar cross-check; lesson wording and examples are original.",
    },
  ],
} satisfies GrammarLesson;
