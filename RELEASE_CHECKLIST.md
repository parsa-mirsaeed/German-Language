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
- [ ] Temporary visual-QA workflow is removed from the release branch.
- [ ] Final workflow-free PR head passes CI and Vercel Preview.

## Visual QA notes

The production build was captured at 1440×1000 and 390×844 for both the A1 map and canonical lesson. Review confirmed the 12-unit map, lesson hierarchy, Teacher Ink sequence, search/contents controls, grammar labs, speaking mode, and four practice modes remain readable without clipping or unintended document-level horizontal overflow.

## Post-merge verification

After PR 08 merges, record the merge SHA in the release report and verify:

- the `main` CI run completes successfully;
- the Vercel deployment for that same `main` commit completes successfully.

These post-merge checks are evidence for the shipped commit and therefore are recorded after this PR-level checklist is signed off.

## Release decision

PR 08 is approved for merge only after the two remaining deployment-rehearsal boxes above are checked on the workflow-free final head. No accepted launch-blocking limitation remains.
