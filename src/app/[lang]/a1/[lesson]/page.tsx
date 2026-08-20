import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LessonRenderer } from "@/components/grammar/lesson-renderer";
import { BookShell } from "@/components/navigation/book-shell";
import { a1Lessons } from "@/content/a1";
import { persianA1Localizations } from "@/content/locales/fa/a1";
import { resolveLessonLocalization } from "@/i18n/content-localization";
import { isLocale } from "@/i18n/config";
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

  const resolved = resolveLessonLocalization(
    lesson,
    lang,
    persianA1Localizations[lesson.id],
  );

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
