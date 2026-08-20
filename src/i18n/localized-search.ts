import { persianA1Localizations } from "@/content/locales/fa/a1";
import type { LessonLocalization } from "@/i18n/content-localization";
import type { Locale } from "@/i18n/config";
import { getLocalizedA1UnitMap } from "@/i18n/a1-unit-map";
import { normalizeSearchText, type SearchDocument } from "@/lib/search-core";

function collectLocalizationText(localization: LessonLocalization): string[] {
  return [
    localization.title,
    localization.purpose,
    ...localization.formula.flatMap((item) => [item.label, item.note].filter(Boolean) as string[]),
    ...localization.meaning.map((item) => item.text),
    ...localization.usage.flatMap((item) => [item.title, item.body]),
    ...localization.recognitionCues.flatMap((item) => [item.label, item.note].filter(Boolean) as string[]),
    ...localization.paradigms.flatMap((table) => [
      table.title,
      ...table.columns,
      ...(table.rowLabels ?? []),
    ]),
    ...localization.examples.flatMap((example) => [example.translation, example.note].filter(Boolean) as string[]),
    ...localization.contrasts.map((item) => item.explanation),
    ...localization.teacherNotes.flatMap((item) => [item.title, item.body]),
    ...localization.commonMistakes.map((item) => item.explanation),
    ...localization.speakingPrompts.flatMap((item) => [item.prompt, item.support].filter(Boolean) as string[]),
    ...localization.exercises.flatMap((exercise) => [exercise.prompt, exercise.explanation]),
  ];
}

export function localizeSearchIndex(
  index: readonly SearchDocument[],
  locale: Locale,
): SearchDocument[] {
  const units = getLocalizedA1UnitMap(locale);

  return index.map((document) => {
    const unit = units.find((candidate) => candidate.unit === document.unit);
    const localization = locale === "fa"
      ? persianA1Localizations[document.id]
      : undefined;
    const localizedText = [
      ...(unit ? [unit.title, unit.shortTitle, unit.goal] : []),
      ...(localization ? collectLocalizationText(localization) : []),
    ];
    const localizedAliases = [
      ...(unit ? [unit.title, unit.shortTitle, unit.goal] : []),
      ...(localization ? [localization.title] : []),
    ];

    return {
      ...document,
      subtitle: localization?.title ?? (locale === "fa" && unit ? unit.title : document.subtitle),
      aliases: [...document.aliases, ...localizedAliases],
      searchableText: `${document.searchableText} ${normalizeSearchText(localizedText.join(" · "))}`.trim(),
    };
  });
}
