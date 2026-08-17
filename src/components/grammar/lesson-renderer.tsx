import Link from "next/link";
import type { GrammarLesson } from "@/content/schema/content-types";
import { a1UnitMap } from "@/content/a1/unit-map";
import { ContrastBlock } from "./contrast-block";
import { ExampleStream } from "./example-stream";
import { GrammarFormula } from "./grammar-formula";
import { GrammarInteractionLab } from "./grammar-interaction-lab";
import { GrammarTable } from "./grammar-table";
import { LessonSection } from "./lesson-section";
import { MistakeCorrection } from "./mistake-correction";
import { PracticeBlock } from "./practice-block";
import { RecognitionCues } from "./recognition-cues";
import { SpeakingPrompt } from "./speaking-prompt";
import { TeacherInk } from "./teacher-ink";

type LessonRendererProps = {
  lesson: GrammarLesson;
};

export function LessonRenderer({ lesson }: LessonRendererProps) {
  const unit = a1UnitMap.find((candidate) => candidate.unit === lesson.unit);
  const heroRow = lesson.paradigms?.[0]?.rows?.[0];

  return (
    <main className="lesson-canvas">
      <article className="lesson-document">
        <header className="lesson-hero">
          <div className="lesson-hero-copy">
            <Link className="lesson-breadcrumb" href="/a1">
              A1 map <span aria-hidden="true">/</span> Unit {lesson.unit}
            </Link>
            <p className="lesson-kicker">
              {lesson.level} · {unit?.title ?? `Unit ${lesson.unit}`}
            </p>
            <h1 lang="de">{lesson.title.de}</h1>
            <p className="lesson-english-title">{lesson.title.en}</p>
            <p className="lesson-purpose">{lesson.purpose}</p>
          </div>

          <div className="lesson-hero-snapshot">
            <p>Grammar snapshot</p>
            {heroRow ? (
              <div
                aria-label={`${heroRow[1]} changes to ${heroRow[2]} for the masculine accusative pattern`}
                className="snapshot-morph"
                role="img"
              >
                <span>
                  <small>Nominativ</small>
                  <strong lang="de">{heroRow[1]}</strong>
                </span>
                <span className="snapshot-arrow" aria-hidden="true">
                  →
                </span>
                <span>
                  <small>Akkusativ</small>
                  <strong lang="de">{heroRow[2]}</strong>
                </span>
              </div>
            ) : (
              <code lang="de">{lesson.formula?.[0]?.pattern}</code>
            )}
            <div className="snapshot-legend">
              <span>
                <i className="legend-dot nominative" /> subject
              </span>
              <span>
                <i className="legend-dot accusative" /> direct object
              </span>
            </div>
          </div>
        </header>

        <div className="lesson-layout">
          <div className="lesson-main-column">
            {lesson.formula ? (
              <LessonSection label="01" title="Formula / structure" id="formula">
                <GrammarFormula blocks={lesson.formula} />
              </LessonSection>
            ) : null}

            <LessonSection label="02" title="Meaning" id="meaning">
              <div className="meaning-stack">
                {lesson.meaning.map((item, index) => (
                  <div key={item}>
                    <span aria-hidden="true">{index + 1}</span>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </LessonSection>

            <LessonSection label="03" title="Usage" id="usage">
              <div className="usage-list">
                {lesson.usage.map((item) => (
                  <div key={item.title}>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </div>
                ))}
              </div>
            </LessonSection>

            {lesson.recognitionCues ? (
              <LessonSection label="04" title="Recognition cues" id="recognition">
                <RecognitionCues cues={lesson.recognitionCues} />
              </LessonSection>
            ) : null}

            {lesson.paradigms?.map((table, index) => (
              <LessonSection
                id={index === 0 ? "table" : `table-${index + 1}`}
                key={table.title}
                label={String(5 + index).padStart(2, "0")}
                title="Case / conjugation board"
              >
                <GrammarTable table={table} />
              </LessonSection>
            ))}

            <LessonSection label="06" title="Examples" id="examples">
              <ExampleStream examples={lesson.examples} />
            </LessonSection>

            {lesson.contrasts ? (
              <LessonSection label="07" title="Contrast" id="contrast">
                <ContrastBlock contrasts={lesson.contrasts} />
              </LessonSection>
            ) : null}
          </div>

          <aside
            aria-label="Teacher notes"
            className="lesson-margin"
            style={{ order: 0 }}
          >
            {lesson.teacherNotes ? <TeacherInk notes={lesson.teacherNotes} /> : null}
            <div className="margin-map">
              <p>On this page</p>
              <a href="#formula">Formula</a>
              <a href="#meaning">Meaning</a>
              <a href="#usage">Usage</a>
              <a href="#examples">Examples</a>
              <a href="#interaction-lab">Interactive lab</a>
              <a href="#mistakes">Mistakes</a>
              <a href="#speaking">Speaking</a>
              <a href="#practice">Practice</a>
            </div>
          </aside>

          <div className="lesson-main-column">
            <LessonSection label="08" title="Interactive grammar lab" id="interaction-lab">
              <p className="section-lede">
                Manipulate the structure, then say the resulting German sentence aloud.
                Every interaction has a keyboard-first alternative and remains usable with
                reduced motion.
              </p>
              <GrammarInteractionLab />
            </LessonSection>

            <LessonSection label="09" title="Common mistakes" id="mistakes">
              <MistakeCorrection mistakes={lesson.commonMistakes} />
            </LessonSection>

            <LessonSection label="10" title="Speaking transfer" id="speaking">
              <p className="section-lede">
                Say these aloud. The goal is to make the grammar available while
                you are speaking, not only while you are recognizing it.
              </p>
              <SpeakingPrompt prompts={lesson.speakingPrompts} />
            </LessonSection>

            <LessonSection label="11" title="Micro practice" id="practice">
              <PracticeBlock exercises={lesson.exercises} />
            </LessonSection>
          </div>
        </div>

        <footer className="lesson-footer">
          <div>
            <p className="footer-label">A1 alignment / source notes</p>
            <ul>
              {lesson.references.map((reference) => (
                <li key={reference.label}>
                  {reference.url ? (
                    <a href={reference.url} rel="noreferrer" target="_blank">
                      {reference.label}
                    </a>
                  ) : (
                    <strong>{reference.label}</strong>
                  )}
                  {reference.note ? <span> — {reference.note}</span> : null}
                </li>
              ))}
            </ul>
          </div>
          <Link className="next-map-link" href="/a1">
            Back to the A1 map <span aria-hidden="true">→</span>
          </Link>
        </footer>
      </article>
    </main>
  );
}
