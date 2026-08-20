import Link from "next/link";
import type { GrammarLesson } from "@/content/schema/content-types";
import { getLocalizedA1UnitMap } from "@/i18n/a1-unit-map";
import type { Locale } from "@/i18n/config";
import { withLocale } from "@/i18n/config";
import { applyLessonLocalization } from "@/i18n/localized-lesson-view";
import { resolveReleasedLessonLocalization } from "@/i18n/released-localization";
import { getUiDictionary } from "@/i18n/ui-dictionary";
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

type LessonRendererProps = { lesson: GrammarLesson; locale: Locale };

export function LessonRenderer({ lesson, locale }: LessonRendererProps) {
  const ui = getUiDictionary(locale);
  const resolved = resolveReleasedLessonLocalization(lesson, locale);
  const viewLesson = applyLessonLocalization(lesson, resolved.copy);
  const contentLocale = resolved.contentLocale;
  const contentDir = contentLocale === "fa" ? "rtl" : "ltr";
  const unit = getLocalizedA1UnitMap(locale).find((candidate) => candidate.unit === lesson.unit);
  const heroRow = viewLesson.paradigms?.[0]?.rows?.[0];
  const showInteractionLab = lesson.slug === "accusative-articles";
  const mistakesLabel = showInteractionLab ? "09" : "08";
  const speakingLabel = showInteractionLab ? "10" : "09";
  const practiceLabel = showInteractionLab ? "11" : "10";
  const copyProps = { dir: contentDir, lang: contentLocale } as const;
  const tableScrollHint = locale === "fa"
    ? "اگر ستون‌ها کامل دیده نمی‌شوند، جدول را افقی پیمایش کن."
    : "Scroll horizontally to see all columns when needed.";

  return (
    <main className="lesson-canvas">
      <article className="lesson-document">
        <header className="lesson-hero">
          <div className="lesson-hero-copy">
            <Link className="lesson-breadcrumb" href={withLocale(locale, "/a1")}>
              A1 <span aria-hidden="true">/</span> {ui.lesson.unit} {lesson.unit}
            </Link>
            <p className="lesson-kicker"><span dir="ltr">{lesson.level}</span> · {unit?.title ?? `${ui.lesson.unit} ${lesson.unit}`}</p>
            <h1 dir="ltr" lang="de">{lesson.title.de}</h1>
            <p className="lesson-english-title" {...copyProps}>{viewLesson.title.en}</p>
            <p className="lesson-purpose" {...copyProps}>{viewLesson.purpose}</p>
          </div>

          <div className="lesson-hero-snapshot">
            <p>{ui.lesson.grammarSnapshot}</p>
            {heroRow ? (
              <div aria-label={`${heroRow[1]} → ${heroRow[2]}`} className="snapshot-morph" dir="ltr" role="img">
                <span><small>Nominativ</small><strong lang="de">{heroRow[1]}</strong></span>
                <span className="snapshot-arrow" aria-hidden="true">→</span>
                <span><small>Akkusativ</small><strong lang="de">{heroRow[2]}</strong></span>
              </div>
            ) : <code dir="ltr" lang="de">{lesson.formula?.[0]?.pattern}</code>}
            <div className="snapshot-legend"><span><i className="legend-dot nominative" /> {ui.lesson.subject}</span><span><i className="legend-dot accusative" /> {ui.lesson.directObject}</span></div>
          </div>
        </header>

        <div className="lesson-layout">
          <div className="lesson-main-column">
            {viewLesson.formula ? <LessonSection label="01" title={ui.lesson.sections.formula} id="formula"><div {...copyProps}><GrammarFormula blocks={viewLesson.formula} fallbackLabel={locale === "fa" ? "الگو" : "Pattern"} /></div></LessonSection> : null}
            <LessonSection label="02" title={ui.lesson.sections.meaning} id="meaning"><div className="meaning-stack" {...copyProps}>{viewLesson.meaning.map((item, index) => <div key={item}><span aria-hidden="true">{index + 1}</span><p>{item}</p></div>)}</div></LessonSection>
            <LessonSection label="03" title={ui.lesson.sections.usage} id="usage"><div className="usage-list" {...copyProps}>{viewLesson.usage.map((item) => <div key={item.title}><h3>{item.title}</h3><p>{item.body}</p></div>)}</div></LessonSection>
            {viewLesson.recognitionCues ? <LessonSection label="04" title={ui.lesson.sections.recognition} id="recognition"><div {...copyProps}><RecognitionCues cues={viewLesson.recognitionCues} /></div></LessonSection> : null}
            {viewLesson.paradigms?.map((table, index) => <LessonSection id={index === 0 ? "table" : `table-${index + 1}`} key={table.title} label={String(5 + index).padStart(2, "0")} title={ui.lesson.sections.table}><div {...copyProps}><GrammarTable scrollHint={tableScrollHint} table={table} /></div></LessonSection>)}
            <LessonSection label="06" title={ui.lesson.sections.examples} id="examples"><ExampleStream examples={viewLesson.examples} translationLocale={contentLocale} uiLocale={locale} /></LessonSection>
            {viewLesson.contrasts ? <LessonSection label="07" title={ui.lesson.sections.contrast} id="contrast"><div {...copyProps}><ContrastBlock contrasts={viewLesson.contrasts} /></div></LessonSection> : null}
          </div>

          <aside aria-label={ui.lesson.sourceNotes} className="lesson-margin" style={{ order: 0 }}>
            {viewLesson.teacherNotes ? <TeacherInk notes={viewLesson.teacherNotes} contentLocale={contentLocale} uiLocale={locale} /> : null}
            <div className="margin-map">
              <p>{ui.navigation.onThisPage}</p>
              <a href="#formula">{ui.lesson.sections.formula}</a><a href="#meaning">{ui.lesson.sections.meaning}</a><a href="#usage">{ui.lesson.sections.usage}</a><a href="#examples">{ui.lesson.sections.examples}</a>
              {showInteractionLab ? <a href="#interaction-lab">{ui.lesson.sections.interaction}</a> : null}
              <a href="#mistakes">{ui.lesson.sections.mistakes}</a><a href="#speaking">{ui.lesson.sections.speaking}</a><a href="#practice">{ui.lesson.sections.practice}</a>
            </div>
          </aside>

          <div className="lesson-main-column">
            {showInteractionLab ? <LessonSection label="08" title={ui.lesson.sections.interaction} id="interaction-lab"><p className="section-lede">{ui.lesson.interactionLead}</p><GrammarInteractionLab locale={locale} /></LessonSection> : null}
            <LessonSection label={mistakesLabel} title={ui.lesson.sections.mistakes} id="mistakes"><div {...copyProps}><MistakeCorrection mistakes={viewLesson.commonMistakes} /></div></LessonSection>
            <LessonSection label={speakingLabel} title={ui.lesson.sections.speaking} id="speaking"><p className="section-lede">{ui.lesson.speakingLead}</p><SpeakingPrompt contentLocale={contentLocale} lessonId={lesson.id} locale={locale} prompts={viewLesson.speakingPrompts} /></LessonSection>
            <LessonSection label={practiceLabel} title={ui.lesson.sections.practice} id="practice"><PracticeBlock contentLocale={contentLocale} exercises={viewLesson.exercises} lessonId={lesson.id} locale={locale} /></LessonSection>
          </div>
        </div>

        <footer className="lesson-footer">
          <div><p className="footer-label">{ui.lesson.sourceNotes}</p><ul dir="ltr" lang="en">{lesson.references.map((reference) => <li key={reference.label}>{reference.url ? <a href={reference.url} rel="noreferrer" target="_blank">{reference.label}</a> : <strong>{reference.label}</strong>}{reference.note ? <span> — {reference.note}</span> : null}</li>)}</ul></div>
          <Link className="next-map-link" href={withLocale(locale, "/a1")}>{ui.navigation.backToMap} <span aria-hidden="true">→</span></Link>
        </footer>
      </article>
    </main>
  );
}
