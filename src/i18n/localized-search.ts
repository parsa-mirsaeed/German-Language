import type { Locale } from "@/i18n/config";
import { getLocalizedA1UnitMap } from "@/i18n/a1-unit-map";
import { normalizeSearchText, type SearchDocument } from "@/lib/search-core";

export function localizeSearchIndex(
  index: readonly SearchDocument[],
  locale: Locale,
): SearchDocument[] {
  const units = getLocalizedA1UnitMap(locale);

  return index.map((document) => {
    const unit = units.find((candidate) => candidate.unit === document.unit);
    const localizedText = unit
      ? `${unit.title} ${unit.shortTitle} ${unit.goal}`
      : "";

    return {
      ...document,
      subtitle: locale === "fa" && unit ? unit.title : document.subtitle,
      aliases: unit
        ? [...document.aliases, unit.title, unit.shortTitle, unit.goal]
        : document.aliases,
      searchableText: `${document.searchableText} ${normalizeSearchText(localizedText)}`.trim(),
    };
  });
}
