# German A1 Grammar

A structured, interactive German A1 grammar book built as one coherent learning route rather than a collection of disconnected exercises.

## Product shape

The application contains 12 ordered A1 units. Each lesson keeps the full learning contract visible in one surface:

**formula → meaning → usage → recognition → examples → contrast → teacher notes → mistakes → speaking → practice**

The final unit is deliberately labeled **A1-bridge**. It introduces only a small practical Perfekt bridge instead of expanding the course into broad post-A1 grammar.

### English and Persian editions

The released book has two complete teaching editions:

- `/en/...` — English teaching explanations around the canonical German grammar;
- `/fa/...` — Persian teaching explanations with native RTL document flow and explicit LTR German islands.

The language switcher preserves the current route, including the same lesson. German examples, formulas, exercise choices, and answer keys remain canonical lesson data; Persian is a typed teaching overlay keyed to stable lesson blocks. All 12 Persian lesson overlays are required to be `complete` by content validation, and released Persian routes do not silently fall back to English teaching copy.

### Interaction system

The canonical accusative lesson also demonstrates the reusable grammar-interaction prototypes:

- Verb-Second Rail
- Sentence Bracket
- Article Morph
- Case Lanes

All movement concepts have keyboard-first alternatives. Reduced-motion mode removes non-essential animation while preserving state changes and meaning.

### Practice and speaking

Practice supports four deterministic exercise types:

- Multiple Choice
- Fill Blank
- Sentence Builder
- Error Correction

Answers are graded locally from authored answer data. Explanations appear after submission. Speaking Mode is self-rehearsal with optional support and a local “practiced” marker; **there is no microphone or transcription scoring**.

### Search

Search is a local static index generated from validated lesson content. It covers lesson titles, aliases, formulas, meaning, usage, cues, paradigms, examples, contrasts, mistakes, speaking prompts, and localized exercise teaching copy. The Persian edition augments the same canonical German/English index with the complete Persian lesson overlays, so a learner can search Persian teaching language without losing German-form lookup. Ranking and tie-breaking are deterministic. Search queries are not sent to a remote search service.

## Architecture

- Next.js 16 App Router
- React 19
- strict TypeScript
- Tailwind CSS 4 plus small purpose-specific CSS layers
- Zod content validation
- Vitest for pure/unit/component tests
- Playwright + Chromium + axe for browser/accessibility checks
- Vercel for Preview and production deployments

The content model lives under `src/content/`. Canonical German lesson data drives grammar facts, examples, exercises, routes, navigation, and the base search index. Locale-specific teaching copy lives in typed localization overlays and is validated against stable block IDs before build.

The client search component receives only the compact localized search index. Full lesson objects remain on the server side of that boundary rather than being imported by the search client bundle.

## Local development

Requirements:

- Node.js 20.9 or newer
- pnpm 10.14.0

```bash
pnpm install --frozen-lockfile
pnpm dev
```

Production-equivalent local run:

```bash
pnpm build
pnpm start
```

## Validation

Run the same gates used by CI:

```bash
pnpm lint
pnpm typecheck
pnpm content:validate
pnpm test
pnpm build
pnpm exec playwright install --with-deps chromium
pnpm test:e2e
```

`content:validate` enforces release invariants including:

- exactly 12 lessons and 12 unit-map entries
- exactly one lesson per unit
- unique lesson IDs and slugs
- globally unique exercise IDs
- lesson depth requirements
- no duplicate German examples within a lesson
- ordered prerequisite dependencies
- Unit 12 stays explicitly `A1-bridge`
- all 12 Persian overlays exist, target known lessons, and are marked `complete`
- canonical and localized search-index route sets exactly match validated lesson routes
- Persian search result subtitles use the released Persian lesson titles

The browser suite covers direct routes, both locales, canonical interactions, deterministic practice, local progress reload persistence, keyboard flows, mobile contents, bilingual search, reciprocal locale metadata, sitemap/robots discovery, reduced motion, representative axe scans, no-JavaScript reading, and document-overflow checks at mobile and desktop widths.

## Accessibility and no-JavaScript posture

Core lesson content, formulas, examples, mistakes, references, and navigation links are server-rendered and remain readable without JavaScript. JavaScript progressively adds search dialogs, grammar labs, exercise grading, speaking rehearsal state, and local progress.

Color is not the only carrier of grammar meaning. Interactive movement has explicit buttons/keyboard alternatives, modal surfaces restore focus, tables expose named focusable scroll regions, and reduced-motion behavior is tested in Chromium. Persian pages render with `lang="fa" dir="rtl"`; German content islands use `lang="de" dir="ltr"` so mixed-direction text remains semantically explicit.

## Privacy, analytics, and telemetry

The application currently configures **no custom analytics SDK, advertising tracker, microphone capture, speech-to-text provider, or remote learner-progress service**.

Learner progress is stored only in versioned browser `localStorage` under `german-a1-progress:v1`. Search is local. Exercise grading is local and deterministic. CI sets `NEXT_TELEMETRY_DISABLED=1` so framework build telemetry is disabled there as part of the documented release posture.

Vercel platform-level operational data is governed by the hosting account/platform configuration and is separate from application-level learner tracking.

## Deployment and public URL metadata

`vercel.json` pins the project to the Next.js framework and uses:

```text
pnpm install --frozen-lockfile
pnpm build
```

Git branches receive Vercel Preview deployments through the GitHub integration. Preview deployment protection may require Vercel authentication; release QA does not disable that protection just to automate screenshots.

Canonical URLs, `hreflang` alternates, `robots.txt`, and `sitemap.xml` derive their origin in this order:

1. `NEXT_PUBLIC_SITE_URL` when explicitly configured;
2. Vercel's `VERCEL_PROJECT_PRODUCTION_URL` system value;
3. `http://localhost:3000` only for local/CI builds without a deployment origin.

This avoids hard-coding an account-specific Vercel hostname while still emitting production-absolute discovery URLs in the hosted build.

Before production promotion, use [`RELEASE_CHECKLIST.md`](./RELEASE_CHECKLIST.md).

## Content/editing rules

When adding or changing a lesson:

1. keep it inside the declared A1 progression and prerequisites;
2. use the shared lesson schema rather than page-specific markup;
3. keep German examples/exercises original, canonical, and deterministic;
4. localize teaching copy through stable overlay IDs instead of duplicating German answer data;
5. update searchable content through lesson/localization data—do not maintain a second manual search database;
6. run the full content and browser gates before merge.

The full implementation roadmap remains in [`ENGINEERING_PLAN.md`](./ENGINEERING_PLAN.md).
