# Production Release Checklist

This checklist is the PR 08 release gate. It is intentionally narrower than the engineering roadmap: no new learner-facing mechanics are added here unless a quality gate exposes a launch blocker.

## Content and route integrity

- [x] `pnpm content:validate` passes.
- [x] Exactly 12 lessons exist, one per unit-map entry.
- [x] Unit 12 remains explicitly labeled `A1-bridge`.
- [x] Lesson IDs, slugs, and exercise IDs are unique.
- [x] Prerequisites resolve only to earlier lessons/concepts.
- [x] Search-index routes exactly equal validated lesson routes.
- [x] All 12 direct lesson URLs render successfully.

## Automated application quality

- [x] Frozen dependency install passes.
- [x] ESLint passes.
- [x] Strict TypeScript passes.
- [x] Unit/component tests pass.
- [x] Production build passes.
- [x] Deterministic search tests pass.
- [x] Deterministic exercise/progress tests pass.
- [x] No-JavaScript reading smoke passes.
- [x] Keyboard search/practice/speaking paths pass.
- [x] Mobile contents and focus-restoration checks pass.
- [x] Reduced-motion checks pass.
- [x] Representative axe scans pass.
- [x] Representative 390px and 1440px document-overflow checks pass.

## Privacy and telemetry posture

- [x] Search is local; no remote search service is configured.
- [x] Exercise grading is local and deterministic.
- [x] Learner progress stays in versioned browser `localStorage`.
- [x] Speaking Mode does not capture microphone audio or call speech-to-text.
- [x] No custom analytics or advertising SDK is configured in application code.
- [x] CI sets `NEXT_TELEMETRY_DISABLED=1` for framework build telemetry.

## Deployment rehearsal

- [x] Vercel Preview for the reviewed PR 08 head reports Ready.
- [x] No unresolved launch-blocking review or Vercel toolbar feedback remains.
- [x] Desktop and mobile production-render visual QA has been inspected.
- [x] Temporary visual-QA workflow is removed from the release branch.
- [x] Workflow-free PR head passed permanent CI and Vercel Preview before checklist sign-off.

## Visual QA notes

The production build was captured at 1440×1000 and 390×844 for both the A1 map and canonical lesson. Review confirmed the 12-unit map, lesson hierarchy, Teacher Ink sequence, search/contents controls, grammar labs, speaking mode, and four practice modes remain readable without clipping or unintended document-level horizontal overflow.

The workflow-free release candidate `9c0201860f1ecae1136e9f1c3ed8d7335e781abb` passed GitHub Actions CI run `32030811713` and a successful Vercel Preview. This checklist-only commit must receive the same exact-head gates before merge.

## Post-merge verification

After PR 08 merges, record the merge SHA in the release report and verify:

- the `main` CI run completes successfully;
- the Vercel deployment for that same `main` commit completes successfully.

These post-merge checks are evidence for the shipped commit and therefore are recorded after this PR-level checklist is signed off.

## Release decision

PR 08 is signed off for merge once this documentation-only final head receives the same permanent CI and Vercel Preview gates. No accepted launch-blocking limitation remains.

---

## Bilingual release addendum — PR 15

PR 15 is the final release gate for the complete English/Persian edition. It does not change canonical German grammar or grading data; it closes localization, search, mixed-direction rendering, and public discovery requirements introduced by PRs 09–14.

### Bilingual content integrity

- [x] Exactly 12 canonical German A1 lessons still exist.
- [x] Exactly 12 Persian lesson overlays exist and are marked `complete`.
- [x] Released `/fa` lesson routes require complete Persian copy and do not silently fall back to English teaching text.
- [x] Canonical German examples, formulas, exercise choices, answers, IDs, and Unit 12 `A1-bridge` scope remain single-sourced.
- [x] Persian search indexes the complete localized lesson teaching copy while preserving German/English lookup.
- [x] English and Persian localized search indexes contain exactly the canonical 12 lesson routes.

### Locale, direction, and accessibility

- [x] Persian documents render with `lang="fa" dir="rtl"`.
- [x] German grammar/example islands remain explicit `lang="de" dir="ltr"` content.
- [x] Language switching preserves the current lesson route.
- [x] Persian application controls, practice, speaking, search, and grammar-lab labels are localized.
- [x] Representative English/Persian routes pass axe checks.
- [x] Representative 390px and 1440px routes pass document-overflow checks.
- [x] Reduced-motion, keyboard, no-JavaScript reading, practice, speaking, and search regressions remain green.

### Public discovery

- [x] Home, A1 map, and lesson pages emit locale-specific canonical URLs.
- [x] English and Persian pages emit reciprocal `hreflang` alternates plus an English `x-default`.
- [x] Persian lesson title/description metadata is derived from the released Persian overlay.
- [x] `sitemap.xml` exposes 28 localized URLs: 2 locale homes, 2 locale A1 maps, and 24 localized lesson URLs.
- [x] Sitemap entries expose English/Persian language alternates.
- [x] `robots.txt` allows the public application and points to the generated sitemap.
- [x] Public URL origin is environment-derived: `NEXT_PUBLIC_SITE_URL`, then Vercel `VERCEL_PROJECT_PRODUCTION_URL`, with localhost used only when neither deployment value exists.

### PR 15 implementation-head evidence

Implementation head `6d69ece654ab672f560c76c2905412864aecb7cf` passed GitHub Actions CI run **83** (`32364114875`) in full: frozen install, ESLint, strict TypeScript, strengthened bilingual content validation, 43 unit/component tests, production build, Chromium installation, and the complete browser regression suite. The same head reported a successful Vercel Preview, and the pull request had zero unresolved inline review threads at sign-off.

Because this addendum changes only release documentation after that implementation gate, this checklist head must receive the same permanent CI and Vercel Preview checks before merge. Any new review finding must also be resolved on the final head.

### PR 15 release decision

PR 15 may merge only when this checklist-only final head is green in permanent CI, Vercel Preview reports Ready for the same commit, and there are zero unresolved review threads. After merge, verify the resulting `main` commit through the production Vercel status and the `main` CI workflow before declaring the bilingual release shipped.
