import Link from "next/link";
import { a1Lessons } from "@/content/a1";

const unitNames = [
  "The German Sentence Engine",
  "Present Tense and Verb Conjugation",
  "Nouns, Gender, Articles, and Plurals",
  "Negation: nicht and kein",
  "Accusative and Direct Objects",
  "Possession and Pronoun Systems",
  "Modal Verbs and the Sentence Bracket",
  "Separable Verbs, Time, and Word Order",
  "Dative and Dative Prepositions",
  "Place, Direction, and Two-Way Prepositions",
  "Commands, Requests, and Connectors",
  "Perfekt, Basic Past, and A1 Integration",
];

export default function A1Page() {
  return (
    <main className="site-shell">
      <header className="topbar">
        <Link className="brand" href="/">
          <span className="brand-mark" aria-hidden="true">
            DE
          </span>
          German A1 Grammar
        </Link>
        <span className="eyebrow">A1 map</span>
      </header>

      <section className="book-page">
        <header className="book-header">
          <div>
            <p className="eyebrow">12-unit learning map</p>
            <h1>German A1</h1>
          </div>
          <div className="level-stamp">A1.1 → A1.2</div>
        </header>

        <div className="lesson-list">
          {unitNames.map((name, index) => {
            const unit = index + 1;
            const sample = a1Lessons.find((lesson) => lesson.unit === unit);

            if (sample) {
              return (
                <Link
                  className="lesson-row"
                  href={`/a1/${sample.slug}`}
                  key={name}
                >
                  <span className="lesson-index">
                    UNIT {String(unit).padStart(2, "0")}
                  </span>
                  <span>
                    <h2>{name}</h2>
                    <p>
                      Foundation fixture available: {sample.title.de} —{" "}
                      {sample.title.en}
                    </p>
                  </span>
                  <span className="arrow" aria-hidden="true">
                    →
                  </span>
                </Link>
              );
            }

            return (
              <div className="lesson-row" key={name}>
                <span className="lesson-index">
                  UNIT {String(unit).padStart(2, "0")}
                </span>
                <span>
                  <h2>{name}</h2>
                  <p>Planned content — authored in the dedicated content PR.</p>
                </span>
                <span className="eyebrow">planned</span>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
