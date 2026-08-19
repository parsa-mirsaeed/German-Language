import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { withLocale } from "@/i18n/config";
import { getUiDictionary } from "@/i18n/ui-dictionary";
import type { BookNavItem } from "./mobile-contents-sheet";

type BookRailProps = {
  items: BookNavItem[];
  locale: Locale;
};

export function BookRail({ items, locale }: BookRailProps) {
  const ui = getUiDictionary(locale);

  return (
    <aside className="book-rail">
      <Link className="rail-brand" href={withLocale(locale, "/a1")}>
        <span className="rail-brand-mark" aria-hidden="true">DE</span>
        <span>
          <strong>{locale === "fa" ? "آلمانی A1" : "German A1"}</strong>
          <small>{ui.navigation.grammarAtlas}</small>
        </span>
      </Link>

      <div className="rail-rule" />
      <p className="rail-label">{ui.navigation.unitBook}</p>

      <nav aria-label={ui.navigation.bookContents} className="rail-nav">
        <ol>
          {items.map((item) => (
            <li key={item.unit}>
              {item.href ? (
                <Link aria-current={item.active ? "page" : undefined} className={item.active ? "rail-link is-active" : "rail-link"} href={item.href}>
                  <span className="rail-unit">{String(item.unit).padStart(2, "0")}</span>
                  <span>{item.shortTitle}</span>
                </Link>
              ) : (
                <span className="rail-link is-planned">
                  <span className="rail-unit">{String(item.unit).padStart(2, "0")}</span>
                  <span>{item.shortTitle}</span>
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>

      <div className="rail-footer">
        <span>{ui.lesson.sections.formula}</span>
        <span>{ui.lesson.sections.meaning}</span>
        <span>{ui.lesson.sections.usage}</span>
        <span>{ui.lesson.sections.practice}</span>
      </div>
    </aside>
  );
}
