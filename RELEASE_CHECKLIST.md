# Production Release Checklist

This checklist is the PR 08 release gate. It is intentionally narrower than the engineering roadmap: no new learner-facing mechanics are added here unless a quality gate exposes a launch blocker.

## Content and route integrity

- [ ] `pnpm content:validate` passes.
- [ ] Exactly 12 lessons exist, one per unit-map entry.
- [ ] Unit 12 remains explicitly labeled `A1-bridge`.
- [ ] Lesson IDs, slugs, and exercise IDs are unique.
- [ ] Prerequisites resolve only to earlier lessons/concepts.
- [ ] Search-index routes exactly equal validated lesson routes.
- [ ] All 12 direct lesson URLs render successfully.

## Automated application quality

- [ ] Frozen dependency install passes.
- [ ] ESLint passes.
- [ ] Strict TypeScript passes.
- [ ] Unit/component tests pass.
- [ ] Production build passes.
- [ ] Deterministic search tests pass.
- [ ] Deterministic exercise/progress tests pass.
- [ ] No-JavaScript reading smoke passes.
- [ ] Keyboard search/practice/speaking paths pass.
- [ ] Mobile contents and focus-restoration checks pass.
- [ ] Reduced-motion checks pass.
- [ ] Representative axe scans pass.
- [ ] Representative 390px and 1440px document-overflow checks pass.

## Privacy and telemetry posture

- [x] Search is local; no remote search service is configured.
- [x] Exercise grading is local and deterministic.
- [x] Learner progress stays in versioned browser `localStorage`.
- [x] Speaking Mode does not capture microphone audio or call speech-to-text.
- [x] No custom analytics or advertising SDK is configured in application code.
- [x] CI sets `NEXT_TELEMETRY_DISABLED=1` for framework build telemetry.

## Deployment rehearsal

- [ ] Vercel Preview for PR 08 reports Ready on the final head.
- [ ] No unresolved launch-blocking review/toolbar feedback remains.
- [ ] Desktop and mobile production-render visual QA has been inspected.
- [ ] Temporary visual-QA workflow/artifacts are not left in the release branch.
- [ ] PR 08 is merged only after the final clean-head CI and Preview gates pass.
- [ ] The merged `main` commit receives a successful CI run.
- [ ] The merged `main` commit receives a successful Vercel deployment.

## Release decision

Ship only when every unchecked item above has current-head evidence. The PR description should record the final CI run, Vercel Preview state, visual QA notes, and any accepted limitations.
