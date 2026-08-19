import type { GrammarLesson } from "@/content/schema/content-types";
import type { Locale } from "@/i18n/config";

export type LocalizationStatus = "draft" | "complete";

type Identified = { id: string };

export type LocalizedFormula = Identified & { label?: string; note?: string };
export type LocalizedMeaning = Identified & { text: string };
export type LocalizedUsage = Identified & { title: string; body: string };
export type LocalizedCue = Identified & { label: string; note?: string };
export type LocalizedTable = Identified & {
  title: string;
  columns: string[];
  rowLabels?: string[];
};
export type LocalizedExample = Identified & { translation: string; note?: string };
export type LocalizedContrast = Identified & { explanation: string };
export type LocalizedTeacherNote = Identified & { title: string; body: string };
export type LocalizedMistake = Identified & { explanation: string };
export type LocalizedSpeakingPrompt = Identified & { prompt: string; support?: string };
export type LocalizedExercise = Identified & { prompt: string; explanation: string };

export type LessonLocalization = {
  lessonId: string;
  locale: Locale;
  status: LocalizationStatus;
  title: string;
  purpose: string;
  formula: LocalizedFormula[];
  meaning: LocalizedMeaning[];
  usage: LocalizedUsage[];
  recognitionCues: LocalizedCue[];
  paradigms: LocalizedTable[];
  examples: LocalizedExample[];
  contrasts: LocalizedContrast[];
  teacherNotes: LocalizedTeacherNote[];
  commonMistakes: LocalizedMistake[];
  speakingPrompts: LocalizedSpeakingPrompt[];
  exercises: LocalizedExercise[];
};

export type LessonLocalizationKeys = {
  formula: string[];
  meaning: string[];
  usage: string[];
  recognitionCues: string[];
  paradigms: string[];
  examples: string[];
  contrasts: string[];
  teacherNotes: string[];
  commonMistakes: string[];
  speakingPrompts: string[];
  exercises: string[];
};

function sequence(prefix: string, length: number): string[] {
  return Array.from({ length }, (_, index) => `${prefix}-${index + 1}`);
}

export function lessonLocalizationKeys(lesson: GrammarLesson): LessonLocalizationKeys {
  return {
    formula: sequence("formula", lesson.formula?.length ?? 0),
    meaning: sequence("meaning", lesson.meaning.length),
    usage: sequence("usage", lesson.usage.length),
    recognitionCues: sequence("cue", lesson.recognitionCues?.length ?? 0),
    paradigms: sequence("table", lesson.paradigms?.length ?? 0),
    examples: sequence("example", lesson.examples.length),
    contrasts: sequence("contrast", lesson.contrasts?.length ?? 0),
    teacherNotes: sequence("teacher", lesson.teacherNotes?.length ?? 0),
    commonMistakes: sequence("mistake", lesson.commonMistakes.length),
    speakingPrompts: sequence("speaking", lesson.speakingPrompts.length),
    exercises: lesson.exercises.map((exercise) => exercise.id),
  };
}

export function buildEnglishLessonLocalization(lesson: GrammarLesson): LessonLocalization {
  const keys = lessonLocalizationKeys(lesson);

  return {
    lessonId: lesson.id,
    locale: "en",
    status: "complete",
    title: lesson.title.en,
    purpose: lesson.purpose,
    formula: (lesson.formula ?? []).map((block, index) => ({
      id: keys.formula[index],
      label: block.label,
      note: block.note,
    })),
    meaning: lesson.meaning.map((text, index) => ({ id: keys.meaning[index], text })),
    usage: lesson.usage.map((block, index) => ({ id: keys.usage[index], ...block })),
    recognitionCues: (lesson.recognitionCues ?? []).map((block, index) => ({
      id: keys.recognitionCues[index],
      ...block,
    })),
    paradigms: (lesson.paradigms ?? []).map((table, index) => ({
      id: keys.paradigms[index],
      title: table.title,
      columns: table.columns,
      rowLabels: table.rows.map((row) => row[0] ?? ""),
    })),
    examples: lesson.examples.map((example, index) => ({
      id: keys.examples[index],
      translation: example.en,
      note: example.note,
    })),
    contrasts: (lesson.contrasts ?? []).map((block, index) => ({
      id: keys.contrasts[index],
      explanation: block.explanation,
    })),
    teacherNotes: (lesson.teacherNotes ?? []).map((note, index) => ({
      id: keys.teacherNotes[index],
      title: note.title,
      body: note.body,
    })),
    commonMistakes: lesson.commonMistakes.map((mistake, index) => ({
      id: keys.commonMistakes[index],
      explanation: mistake.explanation,
    })),
    speakingPrompts: lesson.speakingPrompts.map((prompt, index) => ({
      id: keys.speakingPrompts[index],
      prompt: prompt.prompt,
      support: prompt.support,
    })),
    exercises: lesson.exercises.map((exercise) => ({
      id: exercise.id,
      prompt: exercise.prompt,
      explanation: exercise.explanation,
    })),
  };
}

export function validateLessonLocalization(
  lesson: GrammarLesson,
  localization: LessonLocalization,
): string[] {
  const errors: string[] = [];
  const expected = lessonLocalizationKeys(lesson);

  if (localization.lessonId !== lesson.id) {
    errors.push(`lessonId must be ${lesson.id}`);
  }

  const sections = Object.keys(expected) as Array<keyof LessonLocalizationKeys>;
  for (const section of sections) {
    const expectedIds = expected[section];
    const actualItems = localization[section] as Identified[];
    const actualIds = actualItems.map((item) => item.id);
    const duplicates = actualIds.filter((id, index) => actualIds.indexOf(id) !== index);

    if (duplicates.length > 0) {
      errors.push(`${section}: duplicate localization ids: ${[...new Set(duplicates)].join(", ")}`);
    }

    const unknown = actualIds.filter((id) => !expectedIds.includes(id));
    if (unknown.length > 0) {
      errors.push(`${section}: unknown ids: ${unknown.join(", ")}`);
    }

    if (localization.status === "complete") {
      const missing = expectedIds.filter((id) => !actualIds.includes(id));
      if (missing.length > 0) {
        errors.push(`${section}: missing ids: ${missing.join(", ")}`);
      }
    }
  }

  return errors;
}

export type ResolvedLessonLocalization = {
  copy: LessonLocalization;
  requestedLocale: Locale;
  contentLocale: Locale;
  isFallback: boolean;
};

export function resolveLessonLocalization(
  lesson: GrammarLesson,
  locale: Locale,
  persian?: LessonLocalization,
): ResolvedLessonLocalization {
  if (locale === "fa" && persian) {
    return {
      copy: persian,
      requestedLocale: locale,
      contentLocale: "fa",
      isFallback: false,
    };
  }

  return {
    copy: buildEnglishLessonLocalization(lesson),
    requestedLocale: locale,
    contentLocale: "en",
    isFallback: locale !== "en",
  };
}
