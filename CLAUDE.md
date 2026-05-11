# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Critical: Bleeding-edge Next.js + React

See `AGENTS.md`. This project runs **Next.js 16.2.6** and **React 19.2.4** — both newer than most training data. APIs, conventions, and file structure differ from what you may "remember." Before writing or refactoring framework code (App Router, `use cache`, Server Actions, `next/script`, `next/font`, route handlers, metadata, caching/PPR), consult `node_modules/next/dist/docs/` or use Context7. Heed deprecation notices.

## Commands

```bash
npm run dev      # Next.js dev server (default :3000)
npm run build    # Production build
npm run start    # Serve production build
npm run lint     # ESLint (flat config: eslint.config.mjs — extends next/core-web-vitals + next/typescript)
```

No test framework is configured. There is no separate typecheck script — `next build` runs the TypeScript check (`tsconfig.json` has `"strict": true`, `"noEmit": true`).

## What this codebase is

A single-page **marketing landing page** targeting a TradFi (traditional finance) audience for SHIFT — a protocol for tokenized leveraged stocks. It is the sister site to the main `shiftrwa.xyz` site (different repo) and is intentionally more institutional in tone. The repo lives at `Crypt0Shmipt0/shift-tradfi` on GitHub.

Everything renders from `src/app/page.tsx`, which is a flat composition of ~13 section components. There is no dynamic routing, no API layer, and no backend — just one composed page plus a footer.

## Architecture

```
src/
├── app/
│   ├── layout.tsx     # Root layout: 3 next/font imports (Space Grotesk, Inter, JetBrains Mono),
│   │                  # GA gtag (G-16YK1Q7QHD), skip-to-content link, metadata
│   ├── page.tsx       # Composes all section components in display order
│   └── globals.css    # Tailwind v4 entrypoint + design tokens (see below)
├── components/        # One file per landing-page section (hero, milestones, partners,
│                      # problem-cta, how-it-works, product, token-showcase, advantages,
│                      # markets-table, api-section, comparison, final-cta, footer, top-nav)
├── data/tokens.ts     # Canonical Token[] list (ticker, name, leverage, direction, comingSoon)
└── lib/constants.ts   # APP_URL = "https://app.shiftrwa.xyz"
```

Path alias: `@/*` → `./src/*`.

**Server vs client**: Components are React Server Components by default. Only files that need browser APIs or hooks declare `"use client"` (currently `top-nav.tsx`; others may add it as needed). Don't add `"use client"` defensively.

## Styling system — Tailwind v4

There is **no `tailwind.config.js`**. All design tokens live in `src/app/globals.css` inside `@theme inline { … }`. To add or change a color/font, edit that block:

```css
:root { --mint: #26c8b8; … }
@theme inline { --color-mint: var(--mint); … }
```

Colors named in `@theme` become utility classes (`bg-mint`, `text-foreground`, `bg-dark-card`, etc.). The brand palette: `#021c24` foreground, `#26c8b8` mint accent, `#edeeee` off-white, `#000` / `#151515` / `#111820` dark surfaces.

**Inline pixel values are intentional.** Components mirror Figma pixel measurements via inline `style={{ paddingTop: 37, … }}` plus `clamp()` for fluid typography. Don't refactor these into utility classes unless you've verified the Figma source — they're load-bearing for design fidelity.

Fonts are wired via CSS variables: `var(--font-grotesk)` (headings), `var(--font-inter)` (body), `var(--font-mono)`.

## The single source of truth for tokens

`src/data/tokens.ts` is canonical. The `MarketsTable` and `TokenShowcase` components read from `TOKENS` / `LIVE_TOKENS`. If you add, rename, or change leverage on a token, update **this file**, not the components. Prices in `markets-table.tsx` are currently static placeholders keyed by ticker — there is no live price feed wired up yet.

## Section-by-section, Figma-driven

The 13 components in `src/components/` each map to one Figma frame. The Figma source is `https://www.figma.com/design/xCq3eoTM8cvLYunmidxFk5/SHIFT--Jamm---Web-copy?node-id=3000-42`. Section assets (3D icons, partner SVGs, app mockups, hero video) are in `public/visuals/`, `public/partners/`, and `public/tokens/`. Raw Figma exports awaiting processing live in `Assets/` at the repo root (outside `public/`).

When fixing a section: pull up the Figma frame for that section first, then edit only that component file.

## Compliance language — handle with care

SHIFT tokens are **ARTs** (asset-referenced tokens) issued under the Marshall Islands framework. **They are not securities.** Avoid copy that:

- Promises specific returns or yields
- Uses the words "safe", "guaranteed", or "risk-free"
- Says "fully backed" without qualification
- Implies leverage greater than what `tokens.ts` actually offers (current max is ×3)

If you're editing user-facing copy in any section component and you're not sure whether a claim is acceptable, leave the existing copy and flag it.

## Known incomplete work

The TradFi page is in-progress (not yet on Vercel as of last handoff). Known gaps:
- Hero video doesn't resume on scroll-back (needs IntersectionObserver)
- Mobile comparison table hides columns; a card-based mobile layout is wanted
- `public/visuals/cta-bg.png` has baked-in text from a Figma export and needs re-export with text layers hidden
- Markets table uses static placeholder prices

## Project assets outside `public/`

The repo root contains many `*.png` / `*.mp4` files (QA screenshots, full-page captures, source exports). These are intentionally **not** in `public/`; only assets actually referenced by components belong in `public/`. Don't move them in bulk.
