import Link from "next/link";
import { notFound } from "next/navigation";
import { LanguageSwitcher } from "@/components/navigation/language-switcher";
import { SearchCommand } from "@/components/navigation/search-command";
import { a1Lessons } from "@/content/a1";
import { a1UnitMap } from "@/content/a1/unit-map";
import { isLocale, withLocale } from "@/i18n/config";
import { a1SearchIndex } from "@/lib/search";

type A1PageProps = {
  params: Promise<{ lang: string }>;
};

export default async function A1Page({ params }: A1PageProps) {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  const localizedSearchIndex = a1SearchIndex.map((document) => ({
    ...document,
    href: withLocale(lang, document.href),
  }));

  return (
    <main className="site-shell map-shell">
      <header className="topbar">
        <Link className="brand" href={withLocale(lang, "/")}>
          <span className="brand-mark" aria-hidden="true">
            DE
          </span>
          German A1 Grammar
        </Link>
        <div className="map-search">
          <LanguageSwitcher locale={lang} pathname="/a1" />
          <SearchCommand index={localizedSearchIndex} />
        </div>
      </header>

      <section className="map-page">
        <header className="map-header">
          <div>
            <p className="eyebrow">12-unit grammar atlas</p>
            <h1>German A1</h1>
            <p>
              One visible route from first sentence structure to completed-past
              storytelling. Open lessons stay complete on one coherent surface.
            </p>
          </div>
          <div className="map-stamp">
            <strong>A1.1 → A1.2</strong>
            <span>12 units · one system</span>
          </div>
        </header>

        <ol className="unit-map">
          {a1UnitMap.map((unit) => {
            const lesson = a1Lessons.find((candidate) => candidate.unit === unit.unit);

            return (
              <li className={lesson ? "unit-row is-available" : "unit-row"} key={unit.unit}>
                <span className="unit-number">
                  {String(unit.unit).padStart(2, "0")}
                </span>
                <div className="unit-copy">
                  <p>{unit.shortTitle}</p>
                  <h2>{unit.title}</h2>
                  <span>{unit.goal}</span>
                </div>
                {lesson ? (
                  <Link
                    className="unit-action"
                    href={withLocale(lang, `/a1/${lesson.slug}`)}
                  >
                    <span>Open lesson</span>
                    <strong aria-hidden="true">↗</strong>
                  </Link>
                ) : (
                  <span className="unit-status">Planned</span>
                )}
              </li>
            );
          })}
        </ol>
      </section>
    </main>
  );
}
