"use client";

import { useEffect, useId, useRef, useState } from "react";
import type { Locale } from "@/i18n/config";
import { getUiDictionary } from "@/i18n/ui-dictionary";

export type BookNavItem = {
  unit: number;
  title: string;
  shortTitle: string;
  goal: string;
  href?: string;
  active: boolean;
};

type MobileContentsSheetProps = {
  items: BookNavItem[];
  locale: Locale;
};

export function MobileContentsSheet({ items, locale }: MobileContentsSheetProps) {
  const ui = getUiDictionary(locale);
  const [open, setOpen] = useState(false);
  const dialogId = useId();
  const titleId = `${dialogId}-title`;
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const close = () => {
    setOpen(false);
    queueMicrotask(() => triggerRef.current?.focus());
  };

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const panel = panelRef.current;
    const focusable = panel
      ? Array.from(panel.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'))
      : [];
    focusable[0]?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        close();
        return;
      }
      if (event.key !== "Tab" || focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <>
      <button aria-controls={dialogId} aria-expanded={open} className="contents-trigger" onClick={() => setOpen(true)} ref={triggerRef} type="button">
        <span aria-hidden="true">☰</span>
        {ui.navigation.contents}
      </button>

      {open ? (
        <div className="sheet-layer">
          <button aria-label={`${ui.search.close} ${ui.navigation.contents}`} className="sheet-backdrop" onClick={close} tabIndex={-1} type="button" />
          <div aria-labelledby={titleId} aria-modal="true" className="contents-sheet" id={dialogId} ref={panelRef} role="dialog">
            <header className="sheet-header">
              <div>
                <p className="sheet-kicker">{ui.navigation.grammarAtlas}</p>
                <h2 id={titleId}>{ui.navigation.contents}</h2>
              </div>
              <button className="sheet-close" onClick={close} type="button">{ui.search.close}</button>
            </header>

            <nav aria-label={ui.navigation.bookContents} className="sheet-nav">
              <ol>
                {items.map((item) => (
                  <li key={item.unit}>
                    {item.href ? (
                      <a aria-current={item.active ? "page" : undefined} className={item.active ? "sheet-link is-active" : "sheet-link"} href={item.href}>
                        <span className="sheet-unit">{String(item.unit).padStart(2, "0")}</span>
                        <span><strong>{item.shortTitle}</strong><small>{item.goal}</small></span>
                      </a>
                    ) : (
                      <span className="sheet-link is-planned">
                        <span className="sheet-unit">{String(item.unit).padStart(2, "0")}</span>
                        <span><strong>{item.shortTitle}</strong><small>{ui.map.planned}</small></span>
                      </span>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          </div>
        </div>
      ) : null}
    </>
  );
}
