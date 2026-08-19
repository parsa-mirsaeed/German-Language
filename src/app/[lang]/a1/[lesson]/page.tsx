import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LessonRenderer } from "@/components/grammar/lesson-renderer";
import { BookShell } from "@/components/navigation/book-shell";
import { a1Lessons } from "@/content/a1";
import { isLocale, locales } from "@/i18n/config";
import { getLessonBySlug } from "@/lib/content/lesson-utils";

type LessonPageProps = {
  params: Promise<{ lang: string; lesson: string }>;
};

export function generateStaticParams() {
  return locales.flatMap((lang) =>
    a1Lessons.map((lesson) => ({ lang, lesson: lesson.slug })),
  );
}

export async function generateMetadata({
  params,
}: LessonPageProps): Promise<Metadata> {
  const { lang, lesson: slug } = await params;
  const lesson = getLessonBySlug(a1Lessons, slug);

  if (!isLocale(lang) || !lesson) {
    return {};
  }

  return {
    title: `${lesson.title.de} — ${lesson.title.en}`,
    description: lesson.purpose,
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
