import Link from "next/link";
import type { BookNavItem } from "./mobile-contents-sheet";

type BookRailProps = {
  items: BookNavItem[];
};

export function BookRail({ items }: BookRailProps) {
  return (
    <aside className="book-rail">
      <Link className="rail-brand" href="/a1">
        <span className="rail-brand-mark" aria-hidden="true">
          DE
        </span>
        <span>
          <strong>German A1</strong>
          <small>Grammar atlas</small>
        </span>
      </Link>

      <div className="rail-rule" />
      <p className="rail-label">12-unit book</p>

      <nav aria-label="A1 book contents" className="rail-nav">
        <ol>
          {items.map((item) => (
            <li key={item.unit}>
              {item.href ? (
                <Link
                  aria-current={item.active ? "page" : undefined}
                  className={item.active ? "rail-link is-active" : "rail-link"}
                  href={item.href}
                >
                  <span className="rail-unit">
                    {String(item.unit).padStart(2, "0")}
                  </span>
                  <span>{item.shortTitle}</span>
                </Link>
              ) : (
                <span className="rail-link is-planned">
                  <span className="rail-unit">
                    {String(item.unit).padStart(2, "0")}
                  </span>
                  <span>{item.shortTitle}</span>
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>

      <div className="rail-footer">
        <span>Formula</span>
        <span>Meaning</span>
        <span>Usage</span>
        <span>Practice</span>
      </div>
    </aside>
  );
}
