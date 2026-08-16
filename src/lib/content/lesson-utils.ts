import type { GrammarLesson } from "@/content/schema/content-types";

export function getLessonBySlug(
  lessons: readonly GrammarLesson[],
  slug: string,
): GrammarLesson | undefined {
  return lessons.find((lesson) => lesson.slug === slug);
}

export function getUnitLessons(
  lessons: readonly GrammarLesson[],
  unit: number,
): GrammarLesson[] {
  return lessons.filter((lesson) => lesson.unit === unit);
}

export function lessonProgressLabel(completed: number, total: number): string {
  if (total <= 0) {
    return "0 of 0";
  }

  const boundedCompleted = Math.min(Math.max(completed, 0), total);
  return `${boundedCompleted} of ${total}`;
}
