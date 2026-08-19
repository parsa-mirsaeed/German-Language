import type { GrammarLesson } from "@/content/schema/content-types";
import {
  lessonLocalizationKeys,
  type LessonLocalization,
} from "@/i18n/content-localization";

type LocalizedItem = { id: string };

function findById<T extends LocalizedItem>(items: readonly T[], id: string): T | undefined {
  return items.find((item) => item.id === id);
}

export function applyLessonLocalization(
  lesson: GrammarLesson,
  copy: LessonLocalization,
): GrammarLesson {
  const keys = lessonLocalizationKeys(lesson);

  const formula = lesson.formula?.map((block, index) => {
    const localized = findById(copy.formula, keys.formula[index]);
    return localized
      ? { ...block, label: localized.label, note: localized.note }
      : block;
  });

  const meaning = lesson.meaning.map((text, index) =>
    findById(copy.meaning, keys.meaning[index])?.text ?? text,
  );

  const usage = lesson.usage.map((block, index) => {
    const localized = findById(copy.usage, keys.usage[index]);
    return localized
      ? { title: localized.title, body: localized.body }
      : block;
  });

  const recognitionCues = lesson.recognitionCues?.map((block, index) => {
    const localized = findById(copy.recognitionCues, keys.recognitionCues[index]);
    return localized
      ? { ...block, label: localized.label, note: localized.note }
      : block;
  });

  const paradigms = lesson.paradigms?.map((table, index) => {
    const localized = findById(copy.paradigms, keys.paradigms[index]);
    if (!localized) return table;

    return {
      ...table,
      title: localized.title,
      columns: localized.columns,
      rows: table.rows.map((row, rowIndex) => [
        localized.rowLabels?.[rowIndex] ?? row[0],
        ...row.slice(1),
      ]),
    };
  });

  const examples = lesson.examples.map((example, index) => {
    const localized = findById(copy.examples, keys.examples[index]);
    return localized
      ? { ...example, en: localized.translation, note: localized.note }
      : example;
  });

  const contrasts = lesson.contrasts?.map((contrast, index) => {
    const localized = findById(copy.contrasts, keys.contrasts[index]);
    return localized
      ? { ...contrast, explanation: localized.explanation }
      : contrast;
  });

  const teacherNotes = lesson.teacherNotes?.map((note, index) => {
    const localized = findById(copy.teacherNotes, keys.teacherNotes[index]);
    return localized
      ? { ...note, title: localized.title, body: localized.body }
      : note;
  });

  const commonMistakes = lesson.commonMistakes.map((mistake, index) => {
    const localized = findById(copy.commonMistakes, keys.commonMistakes[index]);
    return localized
      ? { ...mistake, explanation: localized.explanation }
      : mistake;
  });

  const speakingPrompts = lesson.speakingPrompts.map((prompt, index) => {
    const localized = findById(copy.speakingPrompts, keys.speakingPrompts[index]);
    return localized
      ? { ...prompt, prompt: localized.prompt, support: localized.support ?? prompt.support }
      : prompt;
  });

  const exercises = lesson.exercises.map((exercise) => {
    const localized = findById(copy.exercises, exercise.id);
    return localized
      ? { ...exercise, prompt: localized.prompt, explanation: localized.explanation }
      : exercise;
  });

  return {
    ...lesson,
    title: { ...lesson.title, en: copy.title || lesson.title.en },
    purpose: copy.purpose || lesson.purpose,
    formula,
    meaning,
    usage,
    recognitionCues,
    paradigms,
    examples,
    contrasts,
    teacherNotes,
    commonMistakes,
    speakingPrompts,
    exercises,
  };
}
