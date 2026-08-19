import type { GrammarLesson } from "@/content/schema/content-types";
import type { LessonLocalization } from "@/i18n/content-localization";

export function applyLessonLocalization(
  lesson: GrammarLesson,
  copy: LessonLocalization,
): GrammarLesson {
  const formula = lesson.formula?.map((block, index) => ({
    ...block,
    label: copy.formula[index]?.label,
    note: copy.formula[index]?.note,
  }));
  const recognitionCues = lesson.recognitionCues?.map((block, index) => ({
    ...block,
    label: copy.recognitionCues[index]?.label ?? block.label,
    note: copy.recognitionCues[index]?.note,
  }));
  const paradigms = lesson.paradigms?.map((table, index) => {
    const localized = copy.paradigms[index];
    return {
      ...table,
      title: localized?.title ?? table.title,
      columns: localized?.columns ?? table.columns,
      rows: table.rows.map((row, rowIndex) => [
        localized?.rowLabels?.[rowIndex] ?? row[0],
        ...row.slice(1),
      ]),
    };
  });

  return {
    ...lesson,
    title: { ...lesson.title, en: copy.title },
    purpose: copy.purpose,
    formula,
    meaning: copy.meaning.map((item) => item.text),
    usage: copy.usage.map(({ title, body }) => ({ title, body })),
    recognitionCues,
    paradigms,
    examples: lesson.examples.map((example, index) => ({
      ...example,
      en: copy.examples[index]?.translation ?? example.en,
      note: copy.examples[index]?.note,
    })),
    contrasts: lesson.contrasts?.map((contrast, index) => ({
      ...contrast,
      explanation: copy.contrasts[index]?.explanation ?? contrast.explanation,
    })),
    teacherNotes: lesson.teacherNotes?.map((note, index) => ({
      ...note,
      title: copy.teacherNotes[index]?.title ?? note.title,
      body: copy.teacherNotes[index]?.body ?? note.body,
    })),
    commonMistakes: lesson.commonMistakes.map((mistake, index) => ({
      ...mistake,
      explanation: copy.commonMistakes[index]?.explanation ?? mistake.explanation,
    })),
    speakingPrompts: lesson.speakingPrompts.map((prompt, index) => ({
      ...prompt,
      prompt: copy.speakingPrompts[index]?.prompt ?? prompt.prompt,
      support: copy.speakingPrompts[index]?.support ?? prompt.support,
    })),
    exercises: lesson.exercises.map((exercise) => {
      const localized = copy.exercises.find((item) => item.id === exercise.id);
      return localized
        ? { ...exercise, prompt: localized.prompt, explanation: localized.explanation }
        : exercise;
    }),
  };
}
