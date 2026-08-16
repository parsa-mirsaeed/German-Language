# German A1 Grammar — Engineering & Content Plan

**Repository:** `parsa-mirsaeed/German-Language`  
**Status:** Planning baseline  
**Scope:** German A1 grammar book + interactive learning web app  
**Reference date:** 2026-08-16

---

## 1. Mission

Build a German A1 grammar book that preserves the **teaching logic, completeness, step-by-step structure, and all-in-one-view clarity** of the supplied English grammar workbook, while rewriting the curriculum correctly for German.

The product must **not** be a literal English-to-German translation. English and German organize grammar differently. The supplied workbook is the pedagogical reference for **how material is explained**; CEFR/Goethe sources define **what belongs at A1**; authoritative German references are used to verify grammar details.

The result should feel like a premium interactive book rather than a collection of notes: one coherent surface per lesson, clear progression, carefully animated grammar visualizations, original examples, practice, speaking transfer, immediate feedback, and strong mobile/desktop usability.

### Definition of done

The A1 product is complete when:

- all agreed A1 core grammar topics are covered;
- every lesson follows one consistent teaching contract;
- examples and exercises are original and grammatically reviewed;
- no lesson silently depends on grammar not yet introduced;
- desktop and mobile experiences are complete;
- core interactions work with keyboard only;
- reduced-motion users receive a complete experience;
- Persian teacher notes render correctly in RTL where used;
- all required PR checks pass;
- every implementation PR receives a Vercel preview;
- `main` remains production-deployable after the foundation PR;
- the final production deployment passes a short smoke test.

---

## 2. Source Contract: What Must Be Preserved from the Reference Workbook

The uploaded workbook establishes the teaching pattern. Its recurring lesson flow is:

> **Formula / Structure → Meaning → Usage → Signals / Recognition → Examples**

It also uses visual formula boxes, numbered examples, handwritten-style correction/translation notes, highlighted keywords, structured word lists, grammar tables, a persistent contents rail, and exercises.

The German version must preserve this **pedagogical anatomy**, not copy English-specific grammar categories blindly.

### Required German lesson anatomy

Every core grammar lesson should contain, in this order when applicable:

1. **Topic title** — German name + simple learner-facing label.
2. **One-sentence purpose** — what this grammar lets the learner say/do.
3. **Formula / pattern** — a compact visual sentence equation.
4. **Meaning** — simple English explanation; Persian teacher note when useful.
5. **Usage** — when Germans actually use the structure.
6. **Recognition cues** — only where cues genuinely help; never invent fake “signal words.”
7. **Paradigm / table** — article, pronoun, verb, case, or ending table when needed.
8. **Examples** — affirmative, negative, question, and short context examples where relevant.
9. **Contrast** — compare the closest confusing structure.
10. **Teacher Ink** — concise annotation/correction/memory note inspired by the workbook’s handwritten notes.
11. **Common mistakes** — mandatory for every major lesson.
12. **Speaking transfer** — reusable spoken sentence frames.
13. **Micro-practice** — 3–8 focused items.
14. **Answer explanation** — not only correct/incorrect; briefly explain why.
15. **Prerequisites** — explicit links to earlier lessons.
16. **A1 alignment/editorial note** — source/review metadata in content data, not necessarily exposed prominently in UI.

### Non-negotiable teaching principles

- Keep one primary difficulty in focus at a time.
- Reuse already-known vocabulary wherever possible.
- Introduce form before exceptions.
- Show **why word order changes visually**, not only verbally.
- Always distinguish productive A1 knowledge from optional “nice to know” detail.
- Every grammar concept should end in something the learner can say or write.
- Examples should be short enough to understand but natural enough to reuse.

---

## 3. Standards and Accuracy Hierarchy

When sources differ or scope is unclear, use this order:

1. **Uploaded workbook** — pedagogical structure and explanation style.
2. **CEFR A1 descriptors** — level boundary and communicative expectations.
3. **Goethe-Zertifikat A1 materials / vocabulary list / training material** — practical A1 scope and task realism.
4. **Goethe A1 learning material** — learner-facing sequencing cues.
5. **Duden / authoritative German grammar references** — morphology, case, usage, spelling, and grammatical verification.
6. **Editorial review inside the repository** — consistency across lessons.

### Copyright rule

Do not reproduce Goethe exam items, textbook pages, or third-party explanations verbatim. Use them to determine scope and validate facts, then write **original examples, explanations, and exercises**.

---

## 4. Audience and Language Policy

### Primary learner

An adult/young-adult beginner learning German from zero to A1, especially someone who benefits from compact visual structure instead of long textbook prose.

### Language layers

- **German**: target sentences, grammar labels, examples, speaking prompts.
- **Simple English**: primary explanations.
- **Persian teacher notes**: optional clarification/memory layer, matching the spirit of the reference workbook.

Persian content must use correct `dir="rtl"` behavior and should never distort German sentence direction.

---

## 5. Scope Boundary: Core A1 vs A1 Bridge

To keep the book accurate and teachable, split content into:

- **Core A1** — required main path.
- **A1 Bridge** — concepts often encountered around late A1 / early A2 or useful for smoother transition, clearly marked so they do not bloat the main path.

This avoids forcing English-workbook topics such as full conditionals or extensive participle systems into German A1 simply because the English source contains them.

---

# Part I — German A1 Content Architecture

## 6. Core Curriculum Overview

### Unit 1 — The German Sentence Engine

**Goal:** Build a correct basic German clause before adding cases and complex verb patterns.

Lessons:

1. Subject pronouns: `ich, du, er, sie, es, wir, ihr, sie, Sie`
2. Formal vs informal address: `du / ihr / Sie`
3. `sein` in the present tense
4. Basic statement pattern: **Position 1 + finite verb + rest**
5. Verb-second rule (V2)
6. Yes/no questions: finite verb first
7. W-questions: `wer, was, wo, woher, wohin, wann, wie, warum, wie viel...`
8. Basic sentence punctuation and German noun capitalization preview

Signature visualization: **Verb-Second Rail** — sentence blocks slide while the finite verb remains locked in position 2.

---

## 7. Unit 2 — Present Tense and Verb Conjugation

Lessons:

1. Infinitive and verb stem
2. Regular present endings: `-e, -st, -t, -en, -t, -en`
3. `haben`
4. Common spelling adjustments (`arbeiten`, `heißen`, etc.)
5. Common stem-changing verbs (`fahren`, `lesen`, `sprechen`, `nehmen`, `essen`) at A1-useful depth
6. Statements, negatives, and questions with lexical verbs
7. Common high-frequency verbs in short everyday contexts

Required contrast:

- regular vs stem-changing verbs;
- `sein` / `haben` vs ordinary verb patterns.

Speaking transfer: introductions, origin, residence, study/work, languages, routine.

---

## 8. Unit 3 — Nouns, Gender, Articles, and Plurals

Lessons:

1. German nouns and capitalization
2. Grammatical gender: `der / die / das`
3. Indefinite articles: `ein / eine`
4. Nominative as the subject/default dictionary-level case
5. Gender must be learned with the noun
6. Useful gender patterns — only dependable patterns, with exceptions clearly labeled
7. Plural concept and common plural patterns
8. No indefinite plural article
9. Basic predicative adjectives after `sein`: `Das Auto ist neu.`

Design requirement: noun cards always display **article + noun + plural** together, e.g. `der Tisch · die Tische`.

Do not teach nouns as bare vocabulary tokens when an article can be shown.

---

## 9. Unit 4 — Negation: `nicht` and `kein`

Lessons:

1. `kein` with nouns that would use `ein/eine` or no article
2. `nicht` for verbs, adjectives, adverbs, definite nouns, and broader clause negation
3. Forms of `kein`: nominative first, then reuse later in accusative/dative lessons
4. `nicht` placement at A1 level through strong examples rather than an over-generalized single rule
5. Contrast pairs:
   - `Ich habe kein Auto.`
   - `Das Auto ist nicht neu.`
   - `Ich komme heute nicht.`

Mandatory common-mistake section: **`nicht` ≠ universal “not” placed anywhere**.

---

## 10. Unit 5 — Accusative and Direct Objects

Lessons:

1. What a direct object is in learner-friendly language
2. Nominative vs accusative roles
3. Definite articles: `der → den`, while `die/das/die` stay visibly recognizable
4. Indefinite articles: `ein → einen` for masculine accusative
5. `kein` and possessive forms following the same masculine pattern
6. Accusative personal pronouns: `mich, dich, ihn, sie, es, uns, euch, sie, Sie`
7. High-frequency accusative verbs: `haben, brauchen, kaufen, sehen, essen, trinken, besuchen...`
8. `es gibt + Akkusativ`
9. Core accusative prepositions appropriate to A1: `für, ohne, durch, gegen, um` with practical emphasis rather than exhaustive theory

Signature visualization: **Article Morph** — `der → den`, `ein → einen`, `mein → meinen` animate as the role changes.

---

## 11. Unit 6 — Possession and Pronoun Systems

Lessons:

1. Possessive determiners: `mein, dein, sein, ihr, unser, euer, Ihr`
2. Matching possessives to the possessor, not the possessed noun
3. Nominative forms
4. Accusative forms
5. Relationship to `ein`-word endings
6. Personal-pronoun review in nominative and accusative
7. Formal `Ihr` capitalization and meaning

Speaking transfer: family, belongings, home, personal information.

---

## 12. Unit 7 — Modal Verbs, `möchten`, and the Sentence Bracket

Lessons:

1. What modal verbs do
2. `können`
3. `müssen`
4. `dürfen`
5. `wollen`
6. `sollen` at basic communicative depth
7. `mögen` and especially `möchten` for preferences/requests
8. Finite modal in position 2 + infinitive at the end
9. Questions with modals
10. Negation with modals
11. Critical contrasts:
    - `nicht müssen` = not have to
    - `nicht dürfen` = must not / not be allowed
    - `ich will` vs polite `ich möchte`

Signature visualization: **Sentence Bracket** — finite modal opens the clause and infinitive closes it.

---

## 13. Unit 8 — Separable Verbs, Time, and Everyday Word Order

Lessons:

1. Common separable prefixes and high-frequency verbs: `aufstehen, einkaufen, anrufen, anfangen, mitkommen...`
2. Prefix moves to the clause end in a main-clause present-tense statement
3. Questions with separable verbs
4. Infinitive keeps the verb together
5. Daily routine sequencing
6. Frequency expressions: `immer, oft, manchmal, selten, nie`
7. Clock time with `um`
8. Days/dates with `am`
9. Months/seasons with `im`
10. Ranges with `von ... bis ...`
11. `gern / lieber` at practical A1 depth
12. Time-first sentence and V2 review: `Heute arbeite ich ...`

Signature visualization: **Prefix Split** — verb enters as one unit, prefix detaches and docks at the clause end.

---

## 14. Unit 9 — Dative and Dative Prepositions

Lessons:

1. Dative as an indirect-object/relationship case, explained through concrete roles
2. Definite articles: `dem, der, dem, den`
3. Indefinite articles: `einem, einer, einem`
4. Dative plural `-n` when applicable, introduced carefully
5. Dative personal pronouns: `mir, dir, ihm, ihr, ihm, uns, euch, ihnen, Ihnen`
6. High-frequency dative patterns/verbs where useful at A1
7. Dative prepositions: `aus, bei, mit, nach, seit, von, zu`
8. Common contractions: `beim, vom, zum, zur`

Signature visualization: **Case Lanes** — subject/object/recipient roles move into nominative, accusative, or dative lanes.

---

## 15. Unit 10 — Place, Direction, and Two-Way Prepositions

Lessons:

1. `wo?` = location
2. `wohin?` = destination/direction
3. Two-way prepositions: `an, auf, hinter, in, neben, über, unter, vor, zwischen`
4. Dative for static location at this level
5. Accusative for directional goal/change of location at this level
6. Everyday contractions: `im, ins, am, ans`
7. Movement/location contrasts:
   - `Ich bin in der Schule.`
   - `Ich gehe in die Schule.`
8. `nach / zu / in` for destinations
9. `aus / von` for origin/source at A1 depth

Signature visualization: **Wo/Wohin Spatial Lab** — learner moves an object/person and watches case/article change with state.

---

## 16. Unit 11 — Commands, Requests, and Everyday Connectors

Lessons:

1. Imperative with `du`
2. Imperative with `ihr`
3. Formal imperative with `Sie`
4. Polite requests with `bitte`
5. Request frames with `können` and `möchten`
6. Basic coordination: `und, oder, aber, denn`
7. How coordinating conjunctions preserve normal clause order
8. Common conversational particles only as recognition/useful phrase material — do not turn A1 into a particle theory unit

Speaking transfer: café/shop, asking for help, directions, classroom/workplace requests.

---

## 17. Unit 12 — Perfekt, Basic Past Forms, and A1 Integration

Lessons:

1. What `Perfekt` communicates in everyday German
2. `haben + Partizip II`
3. `sein + Partizip II` with common movement/change-of-state verbs at A1 depth
4. Regular participles: `ge-...-t`
5. Common irregular participles
6. Separable verbs: prefix + `ge` + stem pattern where applicable
7. Inseparable prefixes and no `ge-`
8. Verbs ending in `-ieren` and no `ge-`
9. Sentence bracket in Perfekt
10. High-frequency simple past forms that beginners meet early: especially `war / waren`, `hatte / hatten`
11. Cumulative review connecting present, modal, separable, cases, and Perfekt

Signature visualization: **Participle Builder** — learners assemble participles from prefix/stem/ending blocks.

---

## 18. A1 Bridge Appendix

Keep these outside the required A1 main path unless later editorial review moves specific subtopics into core:

- basic adjective endings before nouns;
- `weil` + verb-final subordinate clause;
- selected reflexive verbs;
- basic comparative/superlative expansion;
- expanded dative-verb inventory;
- additional prepositional idioms.

Each bridge lesson must be visibly labeled **A1 Bridge** so users can distinguish core mastery from transition material.

---

## 19. Vocabulary and Example Policy

Grammar content fails when vocabulary is too hard. Therefore:

- maintain a controlled A1 vocabulary pool;
- each example should use mostly previously introduced words;
- unknown words needed for a grammar example should be glossed inline;
- prefer familiar semantic fields: identity, family, food, shopping, home, city, travel, appointments, weather, routine, study/work, hobbies;
- never make a learner solve difficult vocabulary and new grammar simultaneously unless that is the explicit exercise goal;
- use names and contexts naturally and inclusively;
- every example is original.

---

## 20. Exercise System

### V1 exercise types

1. Multiple choice
2. Fill the gap
3. Sentence reorder
4. Article/case selection
5. Verb-conjugation input
6. Transform statement ↔ question / positive ↔ negative / nominative ↔ accusative where appropriate
7. Guided short answer
8. Speaking prompt with revealable model answer

### Feedback contract

Every checked answer returns:

- correctness;
- corrected answer;
- one-sentence reason;
- grammar reference link;
- optional “why the other option is wrong” for high-value distractors.

Do not gamify wrong answers with punitive visuals.

### Review design

Each unit ends with:

- quick concept recall;
- mixed form recognition;
- production item;
- speaking transfer;
- cumulative items that only rely on already-taught content.

---

# Part II — Information Architecture and Content Model

## 21. Route Model

```text
/
/a1
/a1/unit/[unit]
/a1/[lesson]
/a1/review
/a1/bridge/[lesson]
```

### Navigation

Desktop:

- persistent sticky **Book Rail** with unit/lesson tree;
- progress state per lesson;
- previous/next navigation;
- local search.

Mobile:

- compact top bar;
- contents opens in an accessible sheet/drawer;
- previous/next remains reachable without forcing a return to the index.

---

## 22. Content-First Data Architecture

Use local, version-controlled typed content in V1. Do **not** introduce a CMS/database simply to store a finite grammar book.

Recommended representation:

```text
src/content/a1/
  units.ts
  vocabulary.ts
  lessons/
    01-sentence-engine/
      subject-pronouns.ts
      sein.ts
      verb-second.ts
      questions.ts
    ...
```

Use TypeScript content objects validated by **Zod**. This enables:

- compile-time shape safety;
- runtime/editorial validation;
- stable IDs for progress and links;
- automated prerequisite checks;
- no MDX/runtime plugin complexity unless prose authoring later proves TypeScript uncomfortable.

### Conceptual lesson schema

```ts
type GrammarLesson = {
  id: string
  unitId: string
  order: number
  level: 'A1' | 'A1-bridge'
  titleDe: string
  titleEn: string
  purpose: string
  prerequisites: string[]
  formula?: GrammarFormula
  meaning: ContentBlock[]
  usage: ContentBlock[]
  recognition?: RecognitionCue[]
  paradigms?: GrammarTable[]
  examples: Example[]
  contrasts?: Contrast[]
  teacherInk?: TeacherNote[]
  commonMistakes: CommonMistake[]
  speaking: SpeakingPrompt[]
  exercises: Exercise[]
  review: EditorialMeta
}
```

### Example schema principles

Every example should be able to mark grammar tokens semantically instead of embedding random HTML strings:

```ts
type Example = {
  id: string
  de: string
  en: string
  fa?: string
  focusTokens: string[]
  note?: string
}
```

For advanced visualization, tokenize sentences into typed roles (`subject`, `finiteVerb`, `object`, `prefix`, `participle`, etc.) so animation is driven by grammar semantics, not brittle DOM text matching.

---

# Part III — Product / UI / UX Direction

## 23. Design Thesis

**“Precision workbook meets kinetic German sentence machine.”**

The UI should feel like a beautifully printed grammar notebook that becomes interactive exactly where motion improves understanding.

It should **not** look like:

- a generic SaaS dashboard;
- a dense LMS admin screen;
- a stack of identical cards;
- a Duolingo clone;
- a decorative animation demo with weak pedagogy.

### Source-to-new-system mapping

| Reference workbook motif | German product equivalent |
|---|---|
| Formula box | Grammar Equation |
| Red handwritten note | Teacher Ink |
| Signal tags | Recognition Chips |
| Grammar table | Case / Conjugation Board |
| Numbered examples | Example Stream |
| Fixed sidebar | Book Rail |
| Exercises page | Interactive Practice Deck |

### Visual character

- editorial typography with very high German diacritic legibility;
- generous reading width and whitespace;
- strong formula/math-like grammar blocks;
- restrained paper/notebook texture if it remains crisp;
- one dominant neutral system plus purposeful semantic accents for grammatical roles;
- no arbitrary rainbow coloring of every part of speech;
- dark mode only if it can be designed to equal quality, not as an afterthought.

---

## 24. Signature Interactive Grammar Components

### 24.1 Verb-Second Rail

Shows a German main clause as movable semantic blocks. When a time/object element moves to position 1, the finite verb stays in position 2.

Example:

`Ich | lerne | heute | Deutsch.`

→

`Heute | lerne | ich | Deutsch.`

### 24.2 Sentence Bracket

Visualizes modal/separable/Perfekt structures as an opening and closing frame.

Examples:

`Ich kann ... kommen.`  
`Ich stehe ... auf.`  
`Ich habe ... gelernt.`

### 24.3 Article Morph

Morphs article families by case and gender while keeping unchanged portions visually stable.

### 24.4 Case Lanes

Maps sentence roles to Nominative / Accusative / Dative lanes. Movement should reinforce role, not become a game disconnected from meaning.

### 24.5 Wo/Wohin Spatial Lab

A small scene changes from static location to directional movement and updates preposition/article/case.

### 24.6 Participle Builder

Builds `Partizip II` from semantic pieces and highlights exceptions such as inseparable prefixes and `-ieren`.

---

## 25. Motion Principles

Use **Motion for React** only where animation explains hierarchy, state, or grammar mechanics.

Rules:

- animation must never delay reading;
- primary motion duration normally 180–450ms;
- use layout transforms rather than expensive manual DOM animation;
- do not animate long prose continuously;
- formula transitions may use spring motion when it clarifies relocation;
- exercise feedback should be quick and calm;
- scroll effects are subtle and non-essential;
- always honor `prefers-reduced-motion`;
- reduced-motion mode removes transform/layout motion while preserving necessary state changes with instant/opacity/color alternatives.

---

## 26. Accessibility Contract

Target WCAG 2.2 AA behavior for the learning surface.

Required:

- semantic heading hierarchy;
- keyboard-accessible navigation and exercises;
- visible focus states;
- sufficient contrast;
- no information conveyed by color alone;
- `lang="de"` on German content fragments when needed for pronunciation/screen readers;
- correct LTR/RTL isolation for Persian notes;
- reduced-motion support;
- no auto-playing audio/video;
- touch targets usable on mobile;
- status feedback announced accessibly;
- drag interactions must have a non-drag keyboard/button alternative.

Automated accessibility checks help prevent regressions but do not replace manual keyboard and screen-reader-minded review.

---

# Part IV — Technology Architecture

## 27. Recommended Stack

### Core

- **Next.js 16.x — App Router**
- **React 19.2+**
- **TypeScript — strict mode**
- **Node.js 20.9+**
- **pnpm** with committed lockfile

Use latest stable patch versions at implementation time and pin them through `pnpm-lock.yaml`.

### UI

- **Tailwind CSS 4** for tokens/layout/utility styling
- **Motion for React** for purposeful animations
- a very small accessible headless primitive layer where required (dialog/sheet/popover); avoid importing an entire visual kit simply for convenience
- custom learning components rather than generic dashboard components

### Content / validation

- local TypeScript content
- **Zod** schemas
- build-time content validation

### Testing

- **Vitest** for meaningful pure logic
- **React Testing Library** only for interactive component behavior that is valuable below E2E level
- **Playwright** Chromium for representative end-to-end smoke tests
- **@axe-core/playwright** for automated accessibility checks on canonical pages

### Deployment

- **Vercel Git integration**
- preview deployment for every PR
- production deployment from `main`

### Explicitly excluded from V1

- database;
- user authentication;
- CMS;
- server API layer;
- analytics dependency unless later requested;
- multi-service architecture;
- state-management framework for simple local exercise state;
- heavyweight gamification backend.

V1 progress should be local and versioned in `localStorage`, designed so it can later migrate to an account-backed model without changing lesson IDs.

---

## 28. Rendering and Performance Strategy

Use Server Components/static generation by default because the book is mostly durable content.

Client Components are limited to:

- exercises;
- grammar visualization controls;
- progress/local storage;
- search UI;
- mobile navigation state;
- motion that genuinely requires client runtime.

Rules:

- keep lesson prose out of giant client bundles;
- dynamically import heavier grammar labs when activated or near viewport;
- avoid barrel-import patterns that inflate bundles;
- preload only high-value next interactions;
- keep global event listeners minimal;
- avoid client-side fetching for local static lesson content;
- ensure all canonical pages can render meaningful content without JavaScript-dependent prose.

### Performance budget intent

Do not block PRs on synthetic Lighthouse thresholds initially. Instead enforce structural performance rules and verify representative production builds. Add formal performance budgets only when the actual product surface exists and baseline data can be measured responsibly.

---

## 29. Search and Progress

### Search

V1 search is local and derived at build time from lesson titles, keywords, formula labels, common mistakes, and examples.

No external search service is needed.

### Progress

Versioned local state:

```ts
type ProgressV1 = {
  schemaVersion: 1
  completedLessons: string[]
  exerciseResults: Record<string, ExerciseResult>
}
```

Every migration must be a pure function and unit-tested once migration logic exists.

---

# Part V — Repository Structure

## 30. Proposed Layout

```text
.
├── .github/
│   ├── workflows/
│   │   └── ci.yml
│   └── pull_request_template.md
├── docs/
│   ├── CONTENT_STYLE_GUIDE.md
│   ├── GERMAN_A1_SCOPE.md
│   └── QA_CHECKLIST.md
├── public/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── a1/
│   │       ├── page.tsx
│   │       ├── review/
│   │       ├── bridge/
│   │       ├── unit/[unit]/
│   │       └── [lesson]/
│   ├── components/
│   │   ├── book/
│   │   ├── grammar/
│   │   ├── exercise/
│   │   └── ui/
│   ├── content/
│   │   └── a1/
│   ├── lib/
│   │   ├── content/
│   │   ├── exercises/
│   │   ├── progress/
│   │   └── search/
│   └── styles/
├── tests/
│   ├── e2e/
│   └── fixtures/
├── ENGINEERING_PLAN.md
├── package.json
├── playwright.config.ts
├── tsconfig.json
└── vitest.config.ts
```

---

# Part VI — Design and Implementation Workflow

## 31. Visual Design Gate Before Full Implementation

Before coding the full product, create complete design concepts for:

1. landing / A1 book overview;
2. one canonical full lesson on desktop;
3. the same canonical lesson on mobile;
4. exercise states: idle, correct, incorrect, explanation;
5. one animated grammar state (recommend Sentence Bracket or Article Morph);
6. mobile contents/navigation state.

Recommended canonical lesson: **Accusative** or **Modal Verbs**, because each stresses formula, tables, examples, contrast, mistakes, interactive explanation, and responsive layout.

The accepted concept becomes the UI implementation specification.

### Required design-system extraction

Before coding from the approved concept, document:

- typography scale;
- content width/grid;
- spacing scale;
- color roles;
- grammar-role colors;
- borders/radii/shadows;
- focus styles;
- motion timings/easing;
- formula/component variants;
- icon style;
- desktop/mobile navigation behavior.

---

## 32. Content Editorial Workflow

Each lesson moves through:

1. **Scope** — verify it belongs in A1/core or bridge.
2. **Prerequisite map** — confirm all forms/vocabulary are already available.
3. **Draft** — write formula, meaning, usage, table, examples, mistakes, speaking, exercises.
4. **German accuracy review** — check grammar, capitalization, punctuation, article/gender/plural, word order, idiomaticity.
5. **Level review** — remove unnecessary A2 complexity.
6. **Pedagogy review** — compare against the source teaching contract.
7. **Content validation** — schema/IDs/prerequisites/exercise answers.
8. **Visual QA** — tables, RTL notes, wrapping, small screens.
9. **Merge**.

### Lesson editorial checklist

- [ ] Topic is A1 or explicitly labeled bridge.
- [ ] Formula is grammatically correct and not misleading.
- [ ] Meaning is understandable without jargon.
- [ ] Usage is specific.
- [ ] Recognition cues are real, not fabricated.
- [ ] Every noun uses correct gender/article.
- [ ] Plurals are correct where shown.
- [ ] Cases/articles/pronouns are correct.
- [ ] Verb forms and word order are correct.
- [ ] German capitalization/punctuation are correct.
- [ ] Examples are original.
- [ ] Vocabulary is appropriate for the point in the course.
- [ ] At least one useful contrast is included where confusion is predictable.
- [ ] Common mistakes are included.
- [ ] Speaking transfer is included.
- [ ] Exercise answer explanations are correct.
- [ ] Persian note, if present, conveys the intended rule and renders RTL correctly.

---

# Part VII — Testing Strategy

## 33. Testing Philosophy

Use the **smallest test layer that catches a real regression**.

Do not create tests merely because a framework supports them.

The product has four real risk classes:

1. content/schema correctness;
2. grammar/exercise business logic;
3. interactive/accessibility behavior;
4. route/build/deployment integrity.

Each risk gets one appropriate test layer.

---

## 34. Required Static Checks on Every Implementation PR

Run:

1. `pnpm lint`
2. `pnpm typecheck`
3. `pnpm content:validate`
4. `pnpm test` — only meaningful unit/component suites that exist
5. `pnpm build`
6. representative Playwright E2E after build/app start

### Content validator responsibilities

Fail the PR for:

- duplicate lesson/exercise IDs;
- invalid unit/lesson ordering;
- broken prerequisites/internal lesson links;
- exercise with no correct answer;
- invalid schema shape;
- missing mandatory core fields;
- `A1-bridge` content accidentally inserted into core ordering;
- missing required translation/explanation fields when schema demands them;
- malformed grammar token references used by animations.

Do **not** pretend a script can automatically prove natural-language German is grammatically perfect. Linguistic accuracy remains an editorial review responsibility.

---

## 35. Unit Tests — Only Where Logic Exists

Use Vitest for pure logic such as:

- article/case transformation helpers;
- conjugation normalization if implemented algorithmically;
- exercise scoring/normalization;
- answer comparison rules (case/whitespace/accepted variants);
- sentence-token reordering helpers;
- search indexing/ranking helpers;
- progress schema migrations.

Do not unit-test static prose or snapshot every lesson object.

---

## 36. Component Tests — Only for High-Value Interactive Behavior

Use React Testing Library only when behavior is cheaper and clearer to validate below E2E, for example:

- keyboard-selectable answer group;
- feedback announcement after checking an answer;
- accessible mobile contents dialog behavior;
- sentence block controls when drag has a keyboard alternative.

Do not maintain dozens of DOM snapshots for visual components.

---

## 37. E2E Tests — Representative, Not Exhaustive

Use Playwright Chromium on PRs.

Canonical smoke flow:

1. open `/a1`;
2. navigate to a canonical lesson;
3. use desktop Book Rail;
4. complete one exercise correctly;
5. complete one exercise incorrectly and see explanation;
6. navigate next/previous;
7. verify progress persistence after reload;
8. run the equivalent mobile navigation path at one mobile viewport.

Do not click every lesson and every exercise in every PR. Content validation and static rendering cover most of that risk more cheaply.

---

## 38. Accessibility Tests

Integrate `@axe-core/playwright` on a small canonical set:

- `/`
- `/a1`
- one standard lesson
- one interactive exercise state

Also test:

- keyboard-only canonical flow;
- visible focus;
- one reduced-motion browser scenario;
- mobile navigation semantics.

Automated axe results are a regression layer, not a claim of complete accessibility.

---

## 39. Visual Regression Policy

Do **not** introduce a heavy screenshot/SaaS visual-regression system at project start.

Initial approach:

- Vercel preview for every PR;
- manual visual QA against approved design concepts;
- desktop + mobile canonical lesson checks.

If repeated design drift becomes a real problem, add only **2–3 canonical Playwright screenshot baselines** (overview, lesson, interaction) rather than screenshotting the entire book.

---

# Part VIII — CI/CD and PR Workflows

## 40. One GitHub Actions CI Workflow

Create only:

```text
.github/workflows/ci.yml
```

Triggers:

```yaml
on:
  pull_request:
  push:
    branches: [main]
```

Single validation job unless later timing data justifies parallelization:

```text
checkout
→ setup pnpm
→ setup Node
→ pnpm install --frozen-lockfile
→ lint
→ typecheck
→ content:validate
→ unit/component tests
→ build
→ install Playwright Chromium
→ representative e2e + axe
```

### Why one workflow

- simple status surface;
- no duplicate installs across tiny jobs;
- easy local reproduction;
- all required checks map to actual project risks.

Split jobs later only if CI duration becomes materially wasteful.

---

## 41. Workflows Not Needed Initially

Do **not** add these unless a real need appears:

- separate formatting workflow;
- Node-version matrix;
- OS matrix;
- Firefox/WebKit on every PR;
- nightly test schedule;
- Lighthouse on every PR;
- custom GitHub Actions Vercel deploy pipeline;
- release automation for a single web app;
- dependency-bot auto-merge;
- CodeQL workflow while the app is a static/content-heavy client product with no meaningful server/security surface.

Security scanning can be added when dependencies, server routes, authentication, or user-generated data make it worthwhile.

---

## 42. Vercel Deployment Workflow

Use **native Vercel Git integration**.

### Pull request

`feature branch → PR → CI + Vercel Preview → review → merge`

### Production

`merge to main → Vercel production deployment → production smoke check`

This avoids maintaining a second deployment implementation inside GitHub Actions.

No `VERCEL_TOKEN` should be required in GitHub Actions for the standard Git-integrated path.

---

# Part IX — Pull Request Implementation Plan

## 43. PR 00 — Planning Baseline

**Purpose:** establish this document before code.

Changes:

- `ENGINEERING_PLAN.md`

Required checks:

- none; repository has no application yet.

Acceptance:

- plan is readable in GitHub;
- content scope, stack, tests, and PR sequence are explicit.

---

## 44. PR 01 — Foundation, Content Schema, and CI

Changes:

- scaffold Next.js 16 + TypeScript + Tailwind 4;
- pnpm lockfile;
- ESLint + TypeScript strict config;
- Zod content schema;
- initial unit/lesson registry;
- `content:validate` script;
- Vitest;
- Playwright Chromium;
- one minimal route smoke test;
- `.github/workflows/ci.yml`;
- Vercel project connection;
- base accessibility/focus/reduced-motion CSS.

Required PR checks:

- lint;
- typecheck;
- content validation;
- unit tests for validator behavior;
- production build;
- one Playwright route smoke.

Do not add full lesson visual tests yet.

---

## 45. PR 02 — Design System + One Canonical Complete Lesson

Changes:

- implement approved visual design;
- Book Rail desktop nav;
- mobile contents sheet;
- typography/tokens;
- Grammar Equation;
- Teacher Ink;
- Example Stream;
- Grammar Table;
- Recognition Chips;
- Common Mistakes;
- Speaking Transfer;
- one full canonical lesson, recommended Accusative or Modal Verbs;
- RTL Persian note rendering;
- reduced-motion implementation.

Required PR checks:

- existing CI;
- component tests only for mobile dialog/keyboard behavior that has logic;
- desktop + mobile canonical Playwright path;
- axe on canonical lesson;
- manual preview comparison to approved desktop/mobile design concepts.

---

## 46. PR 03 — Grammar Interaction Engine

Changes:

- semantic sentence token model;
- Verb-Second Rail;
- Sentence Bracket;
- Article Morph;
- Case Lanes;
- keyboard alternatives to drag/move interactions;
- shared reduced-motion behavior.

Required PR checks:

- unit tests for transformation helpers;
- component keyboard tests for interactive controls;
- one Playwright grammar-interaction flow;
- reduced-motion E2E scenario;
- axe on one interactive state.

No need to test every animation frame.

---

## 47. PR 04 — Core A1 Content, Units 1–6

Changes:

- full content for Units 1–6;
- lesson registry/prerequisites;
- original examples/exercises;
- editorial metadata;
- required static tables/visuals.

Required PR checks:

- content validator;
- typecheck/lint/build;
- existing unit tests;
- representative lesson smoke route.

No new unit tests are required purely because more prose was added.

Manual review:

- German accuracy;
- A1 level appropriateness;
- vocabulary control;
- lesson prerequisite order;
- desktop/mobile wrapping for representative tables/formulas.

---

## 48. PR 05 — Core A1 Content, Units 7–12

Same validation strategy as PR 04.

Additional manual focus:

- modal meaning contrasts;
- modal/separable/Perfekt sentence brackets;
- dative vs accusative article forms;
- two-way preposition explanations;
- participle formation exceptions;
- late-course examples do not accidentally drift into A2 syntax.

---

## 49. PR 06 — Exercise System and Progress

Changes:

- generic exercise renderer;
- answer normalization;
- explanations;
- unit review decks;
- local progress state;
- progress schema versioning;
- persistence/reload behavior.

Required PR checks:

- scoring/normalization unit tests;
- progress/migration unit tests;
- keyboard behavior tests where useful;
- Playwright correct + incorrect + reload flow;
- axe on exercise state.

---

## 50. PR 07 — Search and Final Navigation UX

Changes:

- local search index;
- search UI;
- keyboard navigation;
- lesson result grouping;
- polished previous/next flows;
- mobile refinements.

Required PR checks:

- search helper unit tests;
- desktop/mobile keyboard E2E;
- existing full CI.

---

## 51. PR 08 — Final Content QA, Performance, and Launch

Changes:

- final editorial corrections;
- A1 bridge boundary review;
- loading/bundle cleanup;
- metadata/SEO;
- final accessibility fixes;
- production deployment setup/documentation;
- final QA checklist.

Required automated checks:

- full existing CI only.

Required manual release checks:

- representative desktop browsers;
- mobile viewport;
- keyboard-only lesson + exercise path;
- reduced motion;
- approved-design visual comparison;
- German content spot-check across every unit;
- post-production-deploy smoke.

Do not introduce a new testing framework in the launch PR unless a concrete unresolved risk requires it.

---

# Part X — PR Template and Review Discipline

## 52. Pull Request Template

Every implementation PR should state:

```md
## What changed

## Why

## Content impact
- [ ] No German content changed
- [ ] German content changed and was editorially reviewed

## Validation
- [ ] Lint
- [ ] Typecheck
- [ ] Content validation
- [ ] Relevant unit/component tests
- [ ] Build
- [ ] Relevant Playwright flow
- [ ] Accessibility check if UI changed
- [ ] Vercel preview visually reviewed if UI changed

## Screens / routes reviewed

## Intentional deviations / follow-ups
```

Only check boxes that are relevant to the PR; do not create ceremonial requirements.

---

# Part XI — Acceptance Criteria by Product Layer

## 53. Content Acceptance

A lesson is shippable only when:

- level placement is agreed;
- prerequisite graph is valid;
- grammar has been editorially checked;
- explanation follows the workbook-derived teaching contract;
- examples/exercises are original;
- common mistakes and speaking transfer exist;
- exercise answers/explanations are correct;
- vocabulary burden is appropriate.

## 54. UI Acceptance

A learning surface is shippable only when:

- it matches the approved design system;
- desktop/mobile are intentional, not accidental collapses;
- long German words and tables do not overflow;
- RTL Persian notes render correctly;
- keyboard interaction is complete;
- focus is visible;
- reduced motion is complete;
- animation clarifies grammar rather than distracting from it.

## 55. Engineering Acceptance

A PR is mergeable only when:

- required CI for its risk class passes;
- production build succeeds;
- no unrelated dependencies/frameworks were added;
- client-side JavaScript remains scoped to interactions;
- Vercel preview is reviewed when the UI changed;
- failures are fixed rather than bypassed.

---

# Part XII — Risks and Mitigations

## 56. Content Scope Creep

**Risk:** copying the English book topic-for-topic pushes A2/B1 concepts into German A1.

**Mitigation:** Core A1 / A1 Bridge boundary + CEFR/Goethe-based editorial check.

## 57. False Simplicity

**Risk:** oversimplified “rules” become grammatically misleading, especially `nicht`, word order, cases, and two-way prepositions.

**Mitigation:** examples first, careful scope language, contrasts, common-mistake blocks, authoritative verification.

## 58. Vocabulary Overload

**Risk:** learner cannot see the grammar because examples contain unknown words.

**Mitigation:** controlled vocabulary pool and prerequisite-aware authoring.

## 59. Animation Overload

**Risk:** creative UI becomes slower or harder to learn from.

**Mitigation:** motion must encode a grammatical transformation; prose remains static; reduced-motion path is first-class.

## 60. Client Bundle Growth

**Risk:** every lesson imports interactive animation code.

**Mitigation:** server-render static content; dynamically load isolated grammar labs.

## 61. Test Suite Bloat

**Risk:** every lesson gets duplicate snapshots/E2E and CI becomes slow/noisy.

**Mitigation:** schema validation for content, unit tests for logic, representative E2E for workflows.

## 62. Deployment Duplication

**Risk:** Vercel Git deploys and GitHub Actions custom deploys fight each other.

**Mitigation:** use native Vercel Git integration; GitHub Actions validates code only.

---

# Part XIII — Authoritative References to Record in Repository Docs

## German / A1 scope

- Council of Europe — CEFR descriptors  
  https://www.coe.int/en/web/common-european-framework-reference-languages/level-descriptions

- Goethe-Zertifikat A1: Start Deutsch 1  
  https://www.goethe.de/en/spr/prf/gzsd1.html

- Goethe A1 exam training / practice material  
  https://www.goethe.de/en/spr/prf/ueb/pa1.html

- Goethe German Online Training A1  
  https://www.goethe.de/en/spr/ueb/ele.html

- Duden — language/grammar reference  
  https://www.duden.de/

## Technology

- Next.js documentation  
  https://nextjs.org/docs

- Tailwind CSS documentation  
  https://tailwindcss.com/docs

- Motion for React  
  https://motion.dev/docs/react

- Motion accessibility / reduced motion  
  https://motion.dev/docs/react-accessibility

- Playwright  
  https://playwright.dev/docs/intro

- Playwright accessibility testing  
  https://playwright.dev/docs/accessibility-testing

- Vercel Git deployments  
  https://vercel.com/docs/deployments/git

---

## 63. Final Implementation Principle

The application is not “a website containing grammar notes.”

It is an **interactive German A1 grammar book**.

Every engineering decision should improve at least one of four outcomes:

1. **completeness** — everything needed for the topic is present;
2. **clarity** — complex German grammar becomes visually simple;
3. **transfer** — the learner can use the grammar in speaking/writing;
4. **confidence** — content and implementation are consistently validated.

If a feature does not improve one of those four outcomes, it should not be added to V1.
