import Link from "next/link";
import { notFound } from "next/navigation";
import { LanguageSwitcher } from "@/components/navigation/language-switcher";
import { SearchCommand } from "@/components/navigation/search-command";
import { a1Lessons } from "@/content/a1";
import { getLocalizedA1UnitMap } from "@/i18n/a1-unit-map";
import { isLocale, withLocale } from "@/i18n/config";
import { localizeSearchIndex } from "@/i18n/localized-search";
import { getUiDictionary } from "@/i18n/ui-dictionary";
import { a1SearchIndex } from "@/lib/search";

type A1PageProps = {
  params: Promise<{ lang: string }>;
};

export default async function A1Page({ params }: A1PageProps) {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  const ui = getUiDictionary(lang);
  const units = getLocalizedA1UnitMap(lang);
  const localizedSearchIndex = localizeSearchIndex(a1SearchIndex, lang).map((document) => ({
    ...document,
    href: withLocale(lang, document.href),
  }));

  return (
    <main className="site-shell map-shell">
      <header className="topbar">
        <Link className="brand" href={withLocale(lang, "/")}>
          <span className="brand-mark" aria-hidden="true">DE</span>
          {ui.brand}
        </Link>
        <div className="map-search">
          <LanguageSwitcher locale={lang} pathname="/a1" />
          <SearchCommand index={localizedSearchIndex} locale={lang} />
        </div>
      </header>

      <section className="map-page">
        <header className="map-header">
          <div>
            <p className="eyebrow">{ui.map.eyebrow}</p>
            <h1>{ui.map.title}</h1>
            <p>{ui.map.body}</p>
          </div>
          <div className="map-stamp">
            <strong dir="ltr">A1.1 → A1.2</strong>
            <span>{ui.map.routeStamp}</span>
          </div>
        </header>

        <ol className="unit-map">
          {units.map((unit) => {
            const lesson = a1Lessons.find((candidate) => candidate.unit === unit.unit);
            return (
              <li className={lesson ? "unit-row is-available" : "unit-row"} key={unit.unit}>
                <span className="unit-number">{String(unit.unit).padStart(2, "0")}</span>
                <div className="unit-copy">
                  <p>{unit.shortTitle}</p>
                  <h2>{unit.title}</h2>
                  <span>{unit.goal}</span>
                </div>
                {lesson ? (
                  <Link className="unit-action" href={withLocale(lang, `/a1/${lesson.slug}`)}>
                    <span>{ui.map.openLesson}</span>
                    <strong aria-hidden="true">↗</strong>
                  </Link>
                ) : <span className="unit-status">{ui.map.planned}</span>}
              </li>
            );
          })}
        </ol>
      </section>
    </main>
  );
}
