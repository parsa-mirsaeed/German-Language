import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { a1Lessons } from "@/content/a1";
import { getLessonBySlug } from "@/lib/content/lesson-utils";

type LessonPageProps = {
  params: Promise<{ lesson: string }>;
};

export function generateStaticParams() {
  return a1Lessons.map((lesson) => ({ lesson: lesson.slug }));
}

export async function generateMetadata({
  params,
}: LessonPageProps): Promise<Metadata> {
  const { lesson: slug } = await params;
  const lesson = getLessonBySlug(a1Lessons, slug);

  if (!lesson) {
    return {};
  }

  return {
    title: lesson.title.en,
    description: lesson.purpose,
  };
}

export default async function LessonPage({ params }: LessonPageProps) {
  const { lesson: slug } = await params;
  const lesson = getLessonBySlug(a1Lessons, slug);

  if (!lesson) {
    notFound();
  }

  return (
    <main className="site-shell">
      <header className="topbar">
        <Link className="brand" href="/a1">
          <span className="brand-mark" aria-hidden="true">
            A1
          </span>
          Back to A1 map
        </Link>
        <span className="eyebrow">Unit {lesson.unit}</span>
      </header>

      <article className="book-page lesson-page">
        <p className="eyebrow">{lesson.level} · foundation fixture</p>
        <h1 lang="de">{lesson.title.de}</h1>
        <p className="lesson-subtitle">{lesson.title.en}</p>
        <p>{lesson.purpose}</p>

        {lesson.formula?.map((formula) => (
          <div className="formula" key={formula.pattern}>
            <span className="formula-label">{formula.label ?? "Formula"}</span>
            <code lang="de">{formula.pattern}</code>
            {formula.note ? <p>{formula.note}</p> : null}
          </div>
        ))}

        <div className="lesson-grid">
          <div>
            <section className="section">
              <h2>Meaning</h2>
              {lesson.meaning.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </section>

            <section className="section">
              <h2>Usage</h2>
              {lesson.usage.map((item) => (
                <div key={item.title}>
                  <strong>{item.title}</strong>
                  <p>{item.body}</p>
                </div>
              ))}
            </section>

            <section className="section">
              <h2>Examples</h2>
              <ol className="examples">
                {lesson.examples.map((example) => (
                  <li key={example.de}>
                    <span lang="de">
                      <strong>{example.de}</strong>
                    </span>{" "}
                    — {example.en}
                  </li>
                ))}
              </ol>
            </section>

            <section className="section">
              <h2>Common mistake</h2>
              {lesson.commonMistakes.map((mistake) => (
                <div key={mistake.wrong}>
                  <p>
                    <strong lang="de">{mistake.wrong}</strong> →{" "}
                    <strong lang="de">{mistake.correct}</strong>
                  </p>
                  <p>{mistake.explanation}</p>
                </div>
              ))}
            </section>

            <section className="section">
              <h2>Speaking transfer</h2>
              <ul>
                {lesson.speakingPrompts.map((prompt) => (
                  <li key={prompt.prompt}>
                    {prompt.prompt}
                    {prompt.support ? (
                      <>
                        {" "}
                        <span lang="de">({prompt.support})</span>
                      </>
                    ) : null}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {lesson.teacherNotes?.[0] ? (
            <aside className="teacher-ink">
              <strong>{lesson.teacherNotes[0].title}</strong>
              <div>{lesson.teacherNotes[0].body}</div>
              {lesson.teacherNotes[0].fa ? (
                <div dir="rtl" lang="fa">
                  {lesson.teacherNotes[0].fa}
                </div>
              ) : null}
            </aside>
          ) : null}
        </div>

        <p className="footer-note">
          This is the PR 01 schema/rendering fixture, not the final Unit 1
          lesson. Its purpose is to prove the complete content contract before
          full authoring starts.
        </p>
      </article>
    </main>
  );
}
