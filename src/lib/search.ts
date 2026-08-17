import type { GrammarLesson, LessonLevel } from "@/content/schema/content-types";
import { a1Lessons } from "@/content/a1";
import { a1UnitMap } from "@/content/a1/unit-map";

export type SearchDocument = {
  id: string;
  unit: number;
  level: LessonLevel;
  title: string;
  subtitle: string;
  href: string;
  aliases: string[];
  searchableText: string;
};

export type SearchResult = SearchDocument & {
  score: number;
  snippet: string;
};

export type SearchOptions = {
  level?: LessonLevel;
  limit?: number;
};

export function normalizeSearchText(value: string): string {
  return value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase("de")
    .replace(/[^a-z0-9äöüß\s-]/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function collectLessonText(lesson: GrammarLesson): string[] {
  return [
    lesson.title.de,
    lesson.title.en,
    lesson.purpose,
    ...lesson.formula?.flatMap((item) => [item.label, item.pattern, item.note].filter(Boolean) as string[]) ?? [],
    ...lesson.meaning,
    ...lesson.usage.flatMap((item) => [item.title, item.body]),
    ...lesson.recognitionCues?.flatMap((item) => [item.label, item.note].filter(Boolean) as string[]) ?? [],
    ...lesson.paradigms?.flatMap((table) => [
      table.title,
      ...table.columns,
      ...table.rows.flat(),
    ]) ?? [],
    ...lesson.examples.flatMap((example) => [
      example.de,
      example.en,
      ...example.focusTokens,
      example.faNote,
      example.note,
    ].filter(Boolean) as string[]),
    ...lesson.contrasts?.flatMap((item) => [item.left, item.right, item.explanation]) ?? [],
    ...lesson.commonMistakes.flatMap((item) => [item.wrong, item.correct, item.explanation]),
    ...lesson.speakingPrompts.flatMap((item) => [item.prompt, item.support].filter(Boolean) as string[]),
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

function countOccurrences(haystack: string, needle: string): number {
  if (!needle) {
    return 0;
  }

  let count = 0;
  let position = 0;
  while ((position = haystack.indexOf(needle, position)) !== -1) {
    count += 1;
    position += needle.length;
  }
  return count;
}

function resultScore(document: SearchDocument, terms: string[]): number {
  const title = normalizeSearchText(`${document.title} ${document.subtitle}`);
  const aliases = normalizeSearchText(document.aliases.join(" "));
  let score = 0;

  for (const term of terms) {
    if (!document.searchableText.includes(term)) {
      return 0;
    }

    if (title === term) {
      score += 120;
    } else if (title.startsWith(term)) {
      score += 70;
    } else if (title.includes(term)) {
      score += 45;
    }

    if (aliases.includes(term)) {
      score += 28;
    }

    score += Math.min(18, countOccurrences(document.searchableText, term) * 3);
  }

  return score + terms.length * 5;
}

function buildSnippet(document: SearchDocument, terms: string[]): string {
  const text = document.searchableText;
  const positions = terms
    .map((term) => text.indexOf(term))
    .filter((position) => position >= 0);
  const first = positions.length > 0 ? Math.min(...positions) : 0;
  const start = Math.max(0, first - 55);
  const end = Math.min(text.length, start + 145);
  const prefix = start > 0 ? "…" : "";
  const suffix = end < text.length ? "…" : "";

  return `${prefix}${text.slice(start, end).trim()}${suffix}`;
}

export function searchLessons(
  index: readonly SearchDocument[],
  query: string,
  options: SearchOptions = {},
): SearchResult[] {
  const terms = normalizeSearchText(query)
    .split(" ")
    .filter(Boolean);

  if (terms.length === 0) {
    return [];
  }

  const limit = options.limit ?? 8;

  return index
    .filter((document) => !options.level || document.level === options.level)
    .map((document) => ({
      ...document,
      score: resultScore(document, terms),
      snippet: buildSnippet(document, terms),
    }))
    .filter((result) => result.score > 0)
    .sort(
      (a, b) =>
        b.score - a.score ||
        a.unit - b.unit ||
        a.title.localeCompare(b.title, "de") ||
        a.id.localeCompare(b.id),
    )
    .slice(0, limit);
}
