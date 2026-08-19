import type { GrammarLesson } from "@/content/schema/content-types";
import {
  lessonLocalizationKeys,
  type LessonLocalization,
} from "@/i18n/content-localization";

type PersianLessonAuthoring = {
  title: string;
  purpose: string;
  formula: Array<{ label?: string; note?: string }>;
  meaning: string[];
  usage: Array<{ title: string; body: string }>;
  recognitionCues: Array<{ label: string; note?: string }>;
  paradigms: Array<{ title: string; columns: string[]; rowLabels?: string[] }>;
  examples: Array<{ translation: string; note?: string }>;
  contrasts: Array<{ explanation: string }>;
  teacherNotes: Array<{ title: string; body: string }>;
  commonMistakes: Array<{ explanation: string }>;
  speakingPrompts: Array<{ prompt: string; support?: string }>;
  exercises: Array<{ id: string; prompt: string; explanation: string }>;
};

function withIds<T extends object>(ids: string[], items: T[]) {
  return items.map((item, index) => ({ id: ids[index], ...item }));
}

export function buildPersianLessonLocalization(
  lesson: GrammarLesson,
  authoring: PersianLessonAuthoring,
): LessonLocalization {
  const keys = lessonLocalizationKeys(lesson);

  return {
    lessonId: lesson.id,
    locale: "fa",
    status: "complete",
    title: authoring.title,
    purpose: authoring.purpose,
    formula: withIds(keys.formula, authoring.formula),
    meaning: withIds(
      keys.meaning,
      authoring.meaning.map((text) => ({ text })),
    ),
    usage: withIds(keys.usage, authoring.usage),
    recognitionCues: withIds(keys.recognitionCues, authoring.recognitionCues),
    paradigms: withIds(keys.paradigms, authoring.paradigms),
    examples: withIds(keys.examples, authoring.examples),
    contrasts: withIds(keys.contrasts, authoring.contrasts),
    teacherNotes: withIds(keys.teacherNotes, authoring.teacherNotes),
    commonMistakes: withIds(keys.commonMistakes, authoring.commonMistakes),
    speakingPrompts: withIds(keys.speakingPrompts, authoring.speakingPrompts),
    exercises: authoring.exercises,
  };
}
