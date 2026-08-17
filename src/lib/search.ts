import type { GrammarLesson } from "@/content/schema/content-types";
import { a1Lessons } from "@/content/a1";
import { a1UnitMap } from "@/content/a1/unit-map";
import {
  normalizeSearchText,
  type SearchDocument,
} from "@/lib/search-core";

function collectLessonText(lesson: GrammarLesson): string[] {
  return [
    lesson.title.de,
    lesson.title.en,
    lesson.purpose,
    ...(lesson.formula?.flatMap((item) =>
      [item.label, item.pattern, item.note].filter(Boolean),
    ) as string[] | undefined ?? []),
    ...lesson.meaning,
    ...lesson.usage.flatMap((item) => [item.title, item.body]),
    ...(lesson.recognitionCues?.flatMap((item) =>
      [item.label, item.note].filter(Boolean),
    ) as string[] | undefined ?? []),
    ...(lesson.paradigms?.flatMap((table) => [
      table.title,
      ...table.columns,
      ...table.rows.flat(),
    ]) ?? []),
    ...lesson.examples.flatMap((example) =>
      [
        example.de,
        example.en,
        ...example.focusTokens,
        example.faNote,
        example.note,
      ].filter(Boolean) as string[],
    ),
    ...(lesson.contrasts?.flatMap((item) => [
      item.left,
      item.right,
      item.explanation,
    ]) ?? []),
    ...lesson.commonMistakes.flatMap((item) => [
      item.wrong,
      item.correct,
      item.explanation,
    ]),
    ...lesson.speakingPrompts.flatMap(
      (item) => [item.prompt, item.support].filter(Boolean) as string[],
    ),
  ];
}

export function buildSearchIndex(
  lessons: readonly GrammarLesson[],
): SearchDocument[] {
  return [...lessons]
    .sort((a, b) => a.unit - b.unit || a.id.localeCompare(b.id))
    .map((lesson) => {
      const unit = a1UnitMap.find((item) => item.unit === lesson.unit);
      const aliases = [
        unit?.title,
        unit?.shortTitle,
        `unit ${lesson.unit}`,
        `lektion ${lesson.unit}`,
        lesson.slug.replaceAll("-", " "),
      ].filter(Boolean) as string[];
      const allText = [...aliases, ...collectLessonText(lesson)].join(" · ");

      return {
        id: lesson.id,
        unit: lesson.unit,
        level: lesson.level,
        title: lesson.title.de,
        subtitle: lesson.title.en,
        href: `/a1/${lesson.slug}`,
        aliases,
        searchableText: normalizeSearchText(allText),
      };
    });
}

export const a1SearchIndex = buildSearchIndex(a1Lessons);
