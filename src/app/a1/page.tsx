import Link from "next/link";
import { a1Lessons } from "@/content/a1";
import { a1UnitMap } from "@/content/a1/unit-map";

export default function A1Page() {
  return (
    <main className="site-shell map-shell">
      <header className="topbar">
        <Link className="brand" href="/">
          <span className="brand-mark" aria-hidden="true">
            DE
          </span>
          German A1 Grammar
        </Link>
        <span className="eyebrow">A1 map</span>
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
            const isCanonical = lesson?.slug === "accusative-articles";

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
                  <Link className="unit-action" href={`/a1/${lesson.slug}`}>
                    <span>{isCanonical ? "Open canonical lesson" : "Open sample"}</span>
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
