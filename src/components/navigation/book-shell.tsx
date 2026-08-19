import Link from "next/link";
import type { ReactNode } from "react";
import { a1Lessons } from "@/content/a1";
import { a1UnitMap } from "@/content/a1/unit-map";
import type { Locale } from "@/i18n/config";
import { withLocale } from "@/i18n/config";
import { a1SearchIndex } from "@/lib/search";
import { BookRail } from "./book-rail";
import { LanguageSwitcher } from "./language-switcher";
import {
  MobileContentsSheet,
  type BookNavItem,
} from "./mobile-contents-sheet";
import { SearchCommand } from "./search-command";

type BookShellProps = {
  children: ReactNode;
  currentLessonSlug: string;
  locale: Locale;
};

export function BookShell({ children, currentLessonSlug, locale }: BookShellProps) {
  const items: BookNavItem[] = a1UnitMap.map((unit) => {
    const lesson = a1Lessons.find((candidate) => candidate.unit === unit.unit);
    const href = lesson ? withLocale(locale, `/a1/${lesson.slug}`) : undefined;

    return {
      unit: unit.unit,
      title: unit.title,
      shortTitle: unit.shortTitle,
      goal: unit.goal,
      href,
      active: lesson?.slug === currentLessonSlug,
    };
  });
  const localizedSearchIndex = a1SearchIndex.map((document) => ({
    ...document,
    href: withLocale(locale, document.href),
  }));

  return (
    <div className="book-shell">
      <BookRail items={items} locale={locale} />
      <div className="book-stage">
        <header className="book-utility-bar">
          <Link className="mobile-brand" href={withLocale(locale, "/a1")}>
            <span aria-hidden="true">A1</span>
            German Grammar
          </Link>
          <div className="book-utility-actions">
            <LanguageSwitcher
              locale={locale}
              pathname={`/a1/${currentLessonSlug}`}
            />
            <SearchCommand index={localizedSearchIndex} />
            <MobileContentsSheet items={items} />
          </div>
        </header>
        {children}
      </div>
    </div>
  );
}
