"use client";

import Link from "next/link";
import {
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from "react";
import type { LessonLevel } from "@/content/schema/content-types";
import type { Locale } from "@/i18n/config";
import { getUiDictionary } from "@/i18n/ui-dictionary";
import {
  searchLessons,
  type SearchDocument,
} from "@/lib/search-core";

const levelValues: Array<"all" | LessonLevel> = ["all", "A1.1", "A1.2", "A1-bridge"];

type SearchCommandProps = {
  index: readonly SearchDocument[];
  locale: Locale;
};

export function SearchCommand({ index, locale }: SearchCommandProps) {
  const ui = getUiDictionary(locale);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [level, setLevel] = useState<"all" | LessonLevel>("all");
  const dialogId = useId();
  const titleId = `${dialogId}-title`;
  const descriptionId = `${dialogId}-description`;
  const panelRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);

  const openSearch = useCallback((opener?: HTMLElement | null) => {
    returnFocusRef.current = opener ?? (document.activeElement as HTMLElement | null);
    setOpen(true);
  }, []);

  const closeSearch = useCallback(() => {
    setOpen(false);
    queueMicrotask(() => returnFocusRef.current?.focus());
  }, []);

  useEffect(() => {
    const onShortcut = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLocaleLowerCase() === "k") {
        event.preventDefault();
        openSearch(document.activeElement as HTMLElement | null);
      }
    };
    document.addEventListener("keydown", onShortcut);
    return () => document.removeEventListener("keydown", onShortcut);
  }, [openSearch]);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    inputRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeSearch();
        return;
      }
      if (event.key !== "Tab") return;
      const panel = panelRef.current;
      const focusable = panel
        ? Array.from(panel.querySelectorAll<HTMLElement>('input, select, a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'))
        : [];
      if (focusable.length === 0) return;
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
  }, [closeSearch, open]);

  const results = useMemo(
    () => searchLessons(index, query, { level: level === "all" ? undefined : level, limit: 8 }),
    [index, level, query],
  );

  return (
    <>
      <button className="search-trigger" onClick={() => openSearch(triggerRef.current)} ref={triggerRef} type="button">
        <span aria-hidden="true">⌕</span>
        {ui.search.trigger}
        <kbd>⌘/Ctrl K</kbd>
      </button>

      {open ? (
        <div className="search-layer">
          <button aria-label={ui.search.closeAria} className="search-backdrop" onClick={closeSearch} tabIndex={-1} type="button" />
          <div aria-describedby={descriptionId} aria-labelledby={titleId} aria-modal="true" className="search-dialog" id={dialogId} ref={panelRef} role="dialog">
            <header className="search-header">
              <div>
                <p className="search-kicker">{ui.search.kicker}</p>
                <h2 id={titleId}>{ui.search.dialogTitle}</h2>
                <p id={descriptionId}>{ui.search.description}</p>
              </div>
              <button className="search-close" onClick={closeSearch} type="button">{ui.search.close}</button>
            </header>

            <div className="search-controls">
              <label className="search-input-wrap">
                <span className="sr-only">{ui.search.inputLabel}</span>
                <span aria-hidden="true">⌕</span>
                <input autoComplete="off" onChange={(event) => setQuery(event.target.value)} placeholder={ui.search.placeholder} ref={inputRef} type="search" value={query} />
              </label>
              <label className="search-filter">
                <span className="sr-only">{ui.search.filterLabel}</span>
                <select aria-label={ui.search.filterLabel} onChange={(event) => setLevel(event.target.value as "all" | LessonLevel)} value={level}>
                  {levelValues.map((value) => (
                    <option key={value} value={value}>
                      {value === "all" ? ui.search.allLevels : value === "A1-bridge" ? "A1 bridge" : value}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <div aria-live="polite" className="search-status">
              {query.trim() ? ui.search.resultCount(results.length) : ui.search.idleStatus}
            </div>

            <div className="search-results">
              {!query.trim() ? (
                <div className="search-empty">
                  <strong>{ui.search.introTitle}</strong>
                  <p>{ui.search.introBody}</p>
                </div>
              ) : results.length === 0 ? (
                <div className="search-empty">
                  <strong>{ui.search.noResultsTitle}</strong>
                  <p>{ui.search.noResultsBody}</p>
                </div>
              ) : (
                <ol>
                  {results.map((result) => (
                    <li key={result.id}>
                      <Link className="search-result" href={result.href} onClick={closeSearch}>
                        <span className="search-result-unit">{ui.search.unit} {String(result.unit).padStart(2, "0")} · {result.level}</span>
                        <strong dir="ltr" lang="de">{result.title}</strong>
                        <span className="search-result-subtitle" dir="ltr" lang="en">{result.subtitle}</span>
                        <small dir="ltr" lang="en">{result.snippet}</small>
                      </Link>
                    </li>
                  ))}
                </ol>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
