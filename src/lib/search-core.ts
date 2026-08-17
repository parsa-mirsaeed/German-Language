import type { LessonLevel } from "@/content/schema/content-types";

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
