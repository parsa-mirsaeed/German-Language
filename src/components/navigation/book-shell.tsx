import Link from "next/link";
import type { ReactNode } from "react";
import { a1Lessons } from "@/content/a1";
import { a1UnitMap } from "@/content/a1/unit-map";
import { BookRail } from "./book-rail";
import {
  MobileContentsSheet,
  type BookNavItem,
} from "./mobile-contents-sheet";
import { SearchCommand } from "./search-command";

type BookShellProps = {
  children: ReactNode;
  currentLessonSlug: string;
};

export function BookShell({ children, currentLessonSlug }: BookShellProps) {
  const items: BookNavItem[] = a1UnitMap.map((unit) => {
    const lesson = a1Lessons.find((candidate) => candidate.unit === unit.unit);
    const href = lesson ? `/a1/${lesson.slug}` : undefined;

    return {
      unit: unit.unit,
      title: unit.title,
      shortTitle: unit.shortTitle,
      goal: unit.goal,
      href,
      active: lesson?.slug === currentLessonSlug,
    };
  });

  return (
    <div className="book-shell">
      <BookRail items={items} />
      <div className="book-stage">
        <header className="book-utility-bar">
          <Link className="mobile-brand" href="/a1">
            <span aria-hidden="true">A1</span>
            German Grammar
          </Link>
          <div className="book-utility-actions">
            <SearchCommand />
            <MobileContentsSheet items={items} />
          </div>
        </header>
        {children}
      </div>
    </div>
  );
}
