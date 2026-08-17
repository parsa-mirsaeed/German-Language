export const a1UnitMap = [
  {
    unit: 1,
    title: "The German Sentence Engine",
    shortTitle: "Sentence Engine",
    goal: "Build your first correct German statements and questions.",
  },
  {
    unit: 2,
    title: "Present Tense and Verb Conjugation",
    shortTitle: "Present Tense",
    goal: "Change verbs correctly for person and number.",
  },
  {
    unit: 3,
    title: "Nouns, Gender, Articles, and Plurals",
    shortTitle: "Nouns & Articles",
    goal: "Learn nouns together with gender, article, and plural.",
  },
  {
    unit: 4,
    title: "Negation: nicht and kein",
    shortTitle: "Negation",
    goal: "Choose the right German negative pattern.",
  },
  {
    unit: 5,
    title: "Accusative and Direct Objects",
    shortTitle: "Accusative",
    goal: "See the first major case change in articles and pronouns.",
  },
  {
    unit: 6,
    title: "Possession and Pronoun Systems",
    shortTitle: "Possession",
    goal: "Describe family, belongings, and ownership.",
  },
  {
    unit: 7,
    title: "Modal Verbs and the Sentence Bracket",
    shortTitle: "Modal Verbs",
    goal: "Express ability, permission, necessity, and polite wants.",
  },
  {
    unit: 8,
    title: "Separable Verbs, Time, and Word Order",
    shortTitle: "Separable Verbs",
    goal: "Handle split verbs and everyday time expressions.",
  },
  {
    unit: 9,
    title: "Dative and Dative Prepositions",
    shortTitle: "Dative",
    goal: "Use the second essential beginner case.",
  },
  {
    unit: 10,
    title: "Place, Direction, and Two-Way Prepositions",
    shortTitle: "Place & Direction",
    goal: "Distinguish location from directional destination.",
  },
  {
    unit: 11,
    title: "Commands, Requests, and Connectors",
    shortTitle: "Requests",
    goal: "Make useful requests and connect simple ideas.",
  },
  {
    unit: 12,
    title: "Perfekt, Basic Past, and A1 Integration",
    shortTitle: "Perfekt & Review",
    goal: "Talk about completed events and connect the whole A1 system.",
  },
] as const;

export type A1UnitDescriptor = (typeof a1UnitMap)[number];
