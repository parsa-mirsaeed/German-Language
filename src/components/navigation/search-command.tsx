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
import { a1SearchIndex, searchLessons } from "@/lib/search";

const levelOptions: Array<{ value: "all" | LessonLevel; label: string }> = [
  { value: "all", label: "All A1" },
  { value: "A1.1", label: "A1.1" },
  { value: "A1.2", label: "A1.2" },
  { value: "A1-bridge", label: "A1 bridge" },
];

export function SearchCommand() {
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
    if (!open) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    inputRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeSearch();
        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      const panel = panelRef.current;
      const focusable = panel
        ? Array.from(
            panel.querySelectorAll<HTMLElement>(
              'input, select, a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
            ),
          )
        : [];

      if (focusable.length === 0) {
        return;
      }

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
    () =>
      searchLessons(a1SearchIndex, query, {
        level: level === "all" ? undefined : level,
        limit: 8,
      }),
    [level, query],
  );

  return (
    <>
      <button
        className="search-trigger"
        onClick={() => openSearch(triggerRef.current)}
        ref={triggerRef}
        type="button"
      >
        <span aria-hidden="true">⌕</span>
        Search
        <kbd>⌘/Ctrl K</kbd>
      </button>

      {open ? (
        <div className="search-layer">
          <button
            aria-label="Close search"
            className="search-backdrop"
            onClick={closeSearch}
            tabIndex={-1}
            type="button"
          />
          <div
            aria-describedby={descriptionId}
            aria-labelledby={titleId}
            aria-modal="true"
            className="search-dialog"
            id={dialogId}
            ref={panelRef}
            role="dialog"
          >
            <header className="search-header">
              <div>
                <p className="search-kicker">Local A1 index</p>
                <h2 id={titleId}>Search the grammar book</h2>
                <p id={descriptionId}>
                  Search lesson titles, formulas, explanations, examples, mistakes, and speaking prompts.
                </p>
              </div>
              <button className="search-close" onClick={closeSearch} type="button">
                Close
              </button>
            </header>

            <div className="search-controls">
              <label className="search-input-wrap">
                <span className="sr-only">Search German A1</span>
                <span aria-hidden="true">⌕</span>
                <input
                  autoComplete="off"
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Try “dative”, “mit dem Bus”, “möchte”…"
                  ref={inputRef}
                  type="search"
                  value={query}
                />
              </label>
              <label className="search-filter">
                <span className="sr-only">Filter search by level</span>
                <select
                  aria-label="Filter search by level"
                  onChange={(event) => setLevel(event.target.value as "all" | LessonLevel)}
                  value={level}
                >
                  {levelOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <div aria-live="polite" className="search-status">
              {query.trim()
                ? `${results.length} result${results.length === 1 ? "" : "s"}`
                : "Type a word or phrase to search all 12 lessons."}
            </div>

            <div className="search-results">
              {!query.trim() ? (
                <div className="search-empty">
                  <strong>Search the all-in-one route.</strong>
                  <p>
                    The index is generated from validated local lesson data. No remote search service or learner query is sent anywhere.
                  </p>
                </div>
              ) : results.length === 0 ? (
                <div className="search-empty">
                  <strong>No lesson matched that search.</strong>
                  <p>Try a German form, an English grammar term, or remove the level filter.</p>
                </div>
              ) : (
                <ol>
                  {results.map((result) => (
                    <li key={result.id}>
                      <Link className="search-result" href={result.href} onClick={closeSearch}>
                        <span className="search-result-unit">
                          Unit {String(result.unit).padStart(2, "0")} · {result.level}
                        </span>
                        <strong lang="de">{result.title}</strong>
                        <span className="search-result-subtitle">{result.subtitle}</span>
                        <small>{result.snippet}</small>
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
