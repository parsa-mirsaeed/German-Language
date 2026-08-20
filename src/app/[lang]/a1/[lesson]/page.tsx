import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LessonRenderer } from "@/components/grammar/lesson-renderer";
import { BookShell } from "@/components/navigation/book-shell";
import { a1Lessons } from "@/content/a1";
import { isLocale } from "@/i18n/config";
import { resolveReleasedLessonLocalization } from "@/i18n/released-localization";
import { localizedAlternates } from "@/i18n/site-metadata";
import { getLessonBySlug } from "@/lib/content/lesson-utils";

type LessonPageProps = {
  params: Promise<{ lang: string; lesson: string }>;
};

export function generateStaticParams() {
  return a1Lessons.map((lesson) => ({ lesson: lesson.slug }));
}

export async function generateMetadata({
  params,
}: LessonPageProps): Promise<Metadata> {
  const { lang, lesson: slug } = await params;
  const lesson = getLessonBySlug(a1Lessons, slug);

  if (!isLocale(lang) || !lesson) {
    return {};
  }

  const resolved = resolveReleasedLessonLocalization(lesson, lang);

  return {
    title: `${lesson.title.de} — ${resolved.copy.title}`,
    description: resolved.copy.purpose,
    alternates: localizedAlternates(lang, `/a1/${lesson.slug}`),
  };
}

export default async function LessonPage({ params }: LessonPageProps) {
  const { lang, lesson: slug } = await params;
  const lesson = getLessonBySlug(a1Lessons, slug);

  if (!isLocale(lang) || !lesson) {
    notFound();
  }

  return (
    <BookShell currentLessonSlug={lesson.slug} locale={lang}>
      <LessonRenderer lesson={lesson} locale={lang} />
    </BookShell>
  );
}
