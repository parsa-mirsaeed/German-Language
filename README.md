# German A1 Grammar

Interactive German A1 grammar book built from the repository's engineering plan.

## Foundation

PR 01 establishes:

- Next.js App Router + strict TypeScript
- Tailwind CSS v4 design-token foundation
- typed/Zod-validated lesson content
- one small German A1 lesson fixture
- Vitest + Playwright
- one lean GitHub Actions CI workflow

## Commands

```bash
pnpm install
pnpm lint
pnpm typecheck
pnpm content:validate
pnpm test
pnpm build
pnpm exec playwright install chromium
pnpm test:e2e
```

The full product sequence and content scope live in [`ENGINEERING_PLAN.md`](./ENGINEERING_PLAN.md).
