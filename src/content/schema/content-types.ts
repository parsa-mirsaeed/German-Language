export type LessonLevel = "A1.1" | "A1.2" | "A1-bridge";

export type FormulaBlock = {
  label?: string;
  pattern: string;
  note?: string;
};

export type UsageBlock = {
  title: string;
  body: string;
};

export type CueBlock = {
  label: string;
  note?: string;
};

export type GrammarTable = {
  title: string;
  columns: string[];
  rows: string[][];
};

export type ExampleKind =
  | "affirmative"
  | "negative"
  | "question"
  | "context"
  | "correction";

export type Example = {
  de: string;
  en: string;
  focusTokens: string[];
  faNote?: string;
  note?: string;
  kind: ExampleKind;
};

export type ContrastBlock = {
  left: string;
  right: string;
  explanation: string;
};

export type TeacherNote = {
  title: string;
  body: string;
  fa?: string;
};

export type Mistake = {
  wrong: string;
  correct: string;
  explanation: string;
};

export type SpeakingPrompt = {
  prompt: string;
  support?: string;
};

export type MultipleChoiceExercise = {
  id: string;
  type: "multiple-choice";
  prompt: string;
  options: string[];
  answer: string;
  explanation: string;
};

export type Exercise = MultipleChoiceExercise;

export type ContentReference = {
  label: string;
  url?: string;
  note?: string;
};

export type GrammarLesson = {
  id: string;
  level: LessonLevel;
  unit: number;
  slug: string;
  title: {
    de: string;
    en: string;
  };
  purpose: string;
  requires: string[];
  introduces: string[];
  formula?: FormulaBlock[];
  meaning: string[];
  usage: UsageBlock[];
  recognitionCues?: CueBlock[];
  paradigms?: GrammarTable[];
  examples: Example[];
  contrasts?: ContrastBlock[];
  teacherNotes?: TeacherNote[];
  commonMistakes: Mistake[];
  speakingPrompts: SpeakingPrompt[];
  exercises: Exercise[];
  references: ContentReference[];
};
