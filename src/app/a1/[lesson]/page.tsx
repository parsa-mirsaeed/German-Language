import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LessonRenderer } from "@/components/grammar/lesson-renderer";
import { BookShell } from "@/components/navigation/book-shell";
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
    title: `${lesson.title.de} — ${lesson.title.en}`,
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
    <BookShell currentLessonSlug={lesson.slug}>
      <LessonRenderer lesson={lesson} />
    </BookShell>
  );
}
