# SHIFT TradFi Landing — WOW Remediation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use `superpowers:subagent-driven-development` (recommended) or `superpowers:executing-plans` to execute this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Lift the TradFi landing page from the current ~70% Figma fidelity / B- Reality Check rating to a "WOW" institutional-grade marketing site that signals SHIFT's seriousness to traditional finance buyers — pixel-faithful to Figma, performant, accessible, compliant, and shipped to Vercel.

**Architecture:** Single-page Next.js 16.2.6 App Router site composed of 13 server components in `src/page.tsx`. No backend, no routes. Tailwind v4 with tokens in `globals.css` `@theme inline`. Asset pipeline: Figma → `public/visuals|partners|tokens` via the Figma MCP. Quality is enforced by an Evidence Collector → Reality Checker loop until every section clears the WOW bar.

**Tech Stack:** Next.js 16.2.6 · React 19.2.4 · TypeScript strict · Tailwind v4 · Motion 12 · lucide-react · Google Fonts (Space Grotesk, Inter, JetBrains Mono) · Vercel (deploy) · Figma MCP · Playwright MCP · Context7 · `gtag` G-16YK1Q7QHD.

---

## Definition of WOW (success bars — all five must clear)

| # | Bar | Tool of record |
|---|---|---|
| 1 | **Pixel parity ≥ 95% per section at 1440 / 768 / 375 px** | Playwright screenshot diff vs Figma export |
| 2 | **Reality Checker rating ≥ A-** (currently B-) | `Reality Checker` agent |
| 3 | **Lighthouse mobile: Perf ≥ 90, A11y = 100, BP = 100, SEO ≥ 95** | Vercel preview run |
| 4 | **Core Web Vitals: LCP < 2.0s, INP < 200ms, CLS < 0.05** | Lighthouse + real-user `vercel:performance-optimizer` |
| 5 | **Zero compliance flags** (ARTs framework — no "guaranteed", no "safe", no "fully backed" unqualified, no leverage claim > current `tokens.ts` max) | `Brand Guardian` + `Legal Compliance Checker` |

---

## Skills loadout — what each earns its slot

| Skill | Why it's loaded | When it fires |
|---|---|---|
| `figma-implement-design` | The 70%→95% fidelity gap IS this skill's job. Mandatory before any section edit. | Every section in Phase 1 |
| `figma-use` | Hard prerequisite for any Figma MCP read/write call. | Loaded with `figma-implement-design` |
| `taste-skill` | Anti-AI-slop rules. Metric-based variance, premium spacing/shadows, no emoji, no generic AI aesthetic. The WOW multiplier. | Every section in Phase 1 |
| `frontend-design` | Production-grade frontend craftsmanship — paired with `taste-skill` per `connected-tools.md` priority rule. | Every section in Phase 1 |
| `vercel-knowledge-update` | Corrects training-data drift about Next 16 / React 19. Mandatory before touching framework code. | Phase 0, before Phase 1 starts |
| `vercel-react-best-practices` | RSC vs `"use client"` boundary discipline, perf patterns. | Phase 1 |
| `vercel-next-cache-components` | Next 16 PPR + `use cache` directives for the static page perf. | Phase 3 |
| `vercel:performance-optimizer` | Core Web Vitals, image/font/bundle audit. | Phase 3 |
| `web-design-guidelines` | WIG compliance audit — the polish gate. | End of Phase 1 |
| `superpowers:verification-before-completion` | The Reality Checker discipline you require (no fantasy "done"). | Phase 4 |
| `superpowers:requesting-code-review` | Between-agent peer review. | Between phases |
| `superpowers:systematic-debugging` | For the hero video resume bug + any section regressions. | As needed |
| `seo-page`, `seo-schema`, `seo-geo` | Single-page SEO + AI-search citability before shipping. | Phase 5 |
| `vercel:bootstrap`, `vercel:deploy` | First-time Vercel import + preview deploy. | Phase 5 |

Standby (don't preload — invoke on demand): `playground`, `frontend-design`-subskills, `claude-deep-research-skill` for any unresolved TradFi positioning question.

---

## Agent orchestration

**Parallelism principle:** Dispatch agents in parallel within each group; groups themselves are sequential. Each agent owns a defined deliverable file or section boundary — no two agents touch the same file in the same group.

### Group A — Foundation (parallel, Phase 0)
- `ui-designer` — extract design tokens (`color/typography/spacing/radius/shadow`) from Figma library → reconcile with `globals.css` `@theme inline`
- `ui-ux-designer` — extract interaction states, motion specs, focus order → `Assets/figma-extracts/interactions.json`
- `Image Prompt Engineer` — re-export `cta-bg.png` from Figma WITHOUT text layers (handoff issue #3) + audit all `public/visuals/*` for orphan baked-in text
- `architect-review` — review the current `src/` decomposition; flag any sections that should split

### Group B — Section rebuild (13 parallel-where-possible per-section dispatches, Phase 1)
For each of the 13 sections, one dispatch chain:
- `frontend-developer` (primary author, owns the `.tsx` file)
- `react-specialist` (review-only — RSC/client boundary)
- `css-expert` (review-only — Tailwind v4 token hygiene)
- `ui-visual-validator` (verification — Playwright diff vs Figma)

**File-ownership rule:** Each agent owns ONE component file. No cross-section writes.

### Group C — Mobile + assets (parallel, Phase 1 tail)
- `mobile-developer` — 375 px audit, comparison table card layout (handoff #4)
- `expo-react-native-expert` — NOT used (this is web, not RN)
- `Technical Artist` — hero video IntersectionObserver pause/resume (handoff #5)

### Group D — Copy + compliance (parallel, after Group B per section)
- `Brand Guardian` — leverage claims (×3 max), ARTs framing, banned phrases
- `Legal Compliance Checker` — Marshall Islands ART regulatory wording
- `Content Creator` — TradFi institutional tone calibration (less swagger than `shiftrwa.xyz`)

### Group E — Quality gates (sequential, Phase 4)
1. `ui-visual-validator` — full-page Playwright diff @ 1440/768/375
2. `Evidence Collector` (agency-agent — "requires visual proof for everything")
3. `accessibility-tester` + `accessibility-expert` — WCAG 2.2 axe-core + manual VoiceOver
4. `performance-engineer` — Lighthouse + CrUX run
5. `Code Reviewer` — final code-quality pass
6. `Reality Checker` (agency-agent — "stops fantasy approvals") — produces the rating

If Reality Checker returns < A-, loop back to the failing section's Group B with the specific deltas.

### Group F — Ship (sequential, Phase 5)
- `vercel:deployment-expert` → import `Crypt0Shmipt0/shift-tradfi` to Vercel
- `seo-page` agent → pre-launch SEO + GEO audit on preview URL
- `vercel:performance-optimizer` → preview-URL perf audit
- `devops-incident-responder` — standby for post-launch issues

---

## MCP servers in active use

- **Figma MCP** — `get_design_context`, `get_screenshot`, `get_metadata`, `get_variable_defs` for each frame + Code Connect mappings between Figma components and `src/components/*.tsx`
- **Vercel MCP** — `deploy_to_vercel`, `get_runtime_logs`, `list_projects` (TradFi project will be new)
- **Context7** — Next.js 16, React 19, Tailwind v4, Motion 12, lucide-react latest docs (mandatory)
- **Playwright MCP** — automated visual diff, responsive screenshots, Lighthouse runs

---

## File map — what gets touched

**Modified (every section component):**
- `src/components/top-nav.tsx` — sticky behavior, mobile menu polish
- `src/components/hero.tsx` — video IntersectionObserver, copy alignment
- `src/components/milestones.tsx` — spacing reconciliation
- `src/components/partners.tsx` — logo sizing/grid (handoff #6)
- `src/components/problem-cta.tsx` — Figma alignment
- `src/components/how-it-works.tsx` — visual hierarchy
- `src/components/product.tsx` — leverage claim cleanup (handoff #8)
- `src/components/token-showcase.tsx` — ticker reconciliation (handoff #7)
- `src/components/advantages.tsx` — Figma alignment
- `src/components/markets-table.tsx` — mobile card layout (handoff #4)
- `src/components/api-section.tsx` — Figma alignment
- `src/components/comparison.tsx` — mobile card layout, "Asset Holder Protection" row (handoff #5)
- `src/components/final-cta.tsx` — re-exported bg, copy
- `src/components/footer.tsx` — Figma alignment
- `src/app/layout.tsx` — metadata polish for SEO/GEO
- `src/app/globals.css` — `@theme inline` token reconciliation
- `src/data/tokens.ts` — canonical ticker table (single source of truth)

**Created:**
- `src/lib/use-video-resume.ts` — IntersectionObserver hook for hero video (handoff #5)
- `Assets/figma-extracts/<section>.json` — per-section design specs from Figma MCP
- `Assets/figma-extracts/tokens.json` — reconciled design tokens
- `Assets/figma-extracts/copy.md` — canonical copy with compliance flags applied
- `public/visuals/cta-bg.png` — re-exported, no baked text (replaces existing)

**Not touched:**
- `next.config.ts`, `tsconfig.json`, `eslint.config.mjs`, `package.json` (unless Phase 3 perf work needs a Next config flag)

---

## Phase 0 — Foundation

Establishes ground truth. Everything downstream depends on this being correct.

### Task 0.1 — Figma access verification

**Files:** Read-only (Figma MCP)

- [ ] **Step 1: Resolve the Figma file key from the URL**

Figma URL: `https://www.figma.com/design/xCq3eoTM8cvLYunmidxFk5/SHIFT--Jamm---Web-copy?node-id=3000-42`
fileKey: `xCq3eoTM8cvLYunmidxFk5`
nodeId: `3000:42` (convert `-` → `:`)

- [ ] **Step 2: Test Figma MCP read access**

Invoke `get_metadata` on the node. Expected: returns the page structure with child frame node IDs for the 13 sections + nav + footer.

- [ ] **Step 3: Snapshot the canonical frame IDs**

Save the section→nodeId mapping to `Assets/figma-extracts/frame-index.json` as:
```json
{
  "hero": "<nodeId>",
  "milestones": "<nodeId>",
  "partners": "<nodeId>",
  "problem-cta": "<nodeId>",
  "how-it-works": "<nodeId>",
  "product": "<nodeId>",
  "token-showcase": "<nodeId>",
  "advantages": "<nodeId>",
  "markets-table": "<nodeId>",
  "api-section": "<nodeId>",
  "comparison": "<nodeId>",
  "final-cta": "<nodeId>",
  "footer": "<nodeId>",
  "top-nav": "<nodeId>"
}
```

- [ ] **Step 4: Commit the index**

```bash
git add Assets/figma-extracts/frame-index.json
git commit -m "Phase 0: capture canonical Figma frame index"
```

### Task 0.2 — Read the source-of-truth spec docx

**Files:** Read-only

- [ ] **Step 1: Convert spec docx to markdown**

The spec is at `SHIFT RWA - "TradFi audience" Landing Page.docx`. Use the `docx` MCP/skill to extract.

- [ ] **Step 2: Save as Assets/spec.md**

This is the canonical copy + structure source for compliance review. Group D agents read from here.

- [ ] **Step 3: Commit**

```bash
git add Assets/spec.md
git commit -m "Phase 0: extract spec docx to markdown"
```

### Task 0.3 — Reconcile design tokens

**Files:** Modify `src/app/globals.css`; create `Assets/figma-extracts/tokens.json`

- [ ] **Step 1: Pull Figma variables**

`get_variable_defs` on the file. Capture color, typography, radius, spacing tokens.

- [ ] **Step 2: Diff against current `globals.css` `@theme inline`**

Write the diff to `Assets/figma-extracts/tokens-diff.md`. Decisions: (a) which Figma tokens are missing in code, (b) which code tokens drift from Figma, (c) which to add/rename/remove.

- [ ] **Step 3: Apply reconciliation to `globals.css`**

Edit `src/app/globals.css`. Add missing tokens to `:root` + expose in `@theme inline`. Do NOT delete the existing `--mint #26c8b8`, `--foreground #021c24` — these are correct per current Figma snapshots.

- [ ] **Step 4: Visual smoke test**

Run `npm run dev`, snapshot full page at 1440px. Compare to last good screenshot in repo root (`shift-tradfi-full.png`). No visual regressions allowed in this step — token additions only, not changes.

- [ ] **Step 5: Commit**

```bash
git add src/app/globals.css Assets/figma-extracts/tokens.json Assets/figma-extracts/tokens-diff.md
git commit -m "Phase 0: reconcile design tokens with Figma library"
```

### Task 0.4 — Reconcile canonical token table

**Files:** Modify `src/data/tokens.ts`

- [ ] **Step 1: Extract Figma's token list**

From the Markets Table frame in Figma — read the rendered ticker labels, names, leverage levels.

- [ ] **Step 2: Diff vs `src/data/tokens.ts`**

The handoff flags TSL2L vs TSx2 discrepancies. Decide the canonical naming (Brand Guardian arbitrates). Document in `Assets/figma-extracts/tokens-table.md`.

- [ ] **Step 3: Update `src/data/tokens.ts`**

Apply the canonical names. Keep `direction`, `leverage`, `comingSoon` shape.

- [ ] **Step 4: Verify the page still renders**

`npm run dev` → confirm Markets Table and Token Showcase both render without console errors.

- [ ] **Step 5: Commit**

```bash
git add src/data/tokens.ts Assets/figma-extracts/tokens-table.md
git commit -m "Phase 0: canonical token table reconciliation"
```

### Task 0.5 — Re-export cta-bg.png without text layers

**Files:** Replace `public/visuals/cta-bg.png`

- [ ] **Step 1: Identify the CTA frame in Figma**

Read frame, identify text layers vs background graphic layers.

- [ ] **Step 2: Hide text layers, export PNG @2x**

Use Figma MCP `get_screenshot` with text layers hidden, or use `use_figma` to toggle visibility and export.

- [ ] **Step 3: Replace `public/visuals/cta-bg.png`**

Backup the old to `Assets/figma-extracts/cta-bg-old.png` first.

- [ ] **Step 4: Visual verify in Final CTA section**

`npm run dev`, scroll to Final CTA, confirm bg has no baked text and text content from the component still reads correctly over it.

- [ ] **Step 5: Commit**

```bash
git add public/visuals/cta-bg.png Assets/figma-extracts/cta-bg-old.png
git commit -m "Phase 0: re-export cta-bg without baked text layers"
```

### Task 0.6 — Baseline screenshots

**Files:** `Assets/figma-extracts/baseline/`

- [ ] **Step 1: Run `npm run dev`**

- [ ] **Step 2: Playwright full-page screenshots at 3 breakpoints**

```
1440x900, 768x1024, 375x812
```

Save to `Assets/figma-extracts/baseline/{1440,768,375}-{section}.png` — full page + per section.

- [ ] **Step 3: Pull matching Figma exports**

For each section, `get_screenshot` from Figma at the matching breakpoint. Save to `Assets/figma-extracts/figma/{breakpoint}-{section}.png`.

- [ ] **Step 4: Commit**

```bash
git add Assets/figma-extracts/baseline Assets/figma-extracts/figma
git commit -m "Phase 0: capture baseline + Figma reference screenshots"
```

**Phase 0 exit criteria:** All 6 tasks committed. The agent fleet now has ground truth.

---

## Phase 1 — Section-by-section parity rebuild

**Per-section workflow template (repeat for each of 13 sections):**

> Order, in priority of broken-ness (per session handoff):
> 1. `hero` (video resume bug)
> 2. `markets-table` (mobile card layout)
> 3. `comparison` (mobile card layout + Asset Holder Protection row)
> 4. `partners` (logo sizing)
> 5. `product` (leverage claims)
> 6. `token-showcase` (ticker reconciliation)
> 7. `final-cta` (new bg)
> 8. `milestones`, `problem-cta`, `how-it-works`, `advantages`, `api-section`, `top-nav`, `footer` (alignment polish)

### Per-section task template — example: Task 1.1 hero

**Files:**
- Modify: `src/components/hero.tsx`
- Create: `src/lib/use-video-resume.ts`

- [ ] **Step 1: Pull Figma context for the hero frame**

`get_design_context` on hero nodeId. Capture pixel measurements, font sizes, colors, motion specs.

- [ ] **Step 2: Diff Figma reference vs current baseline screenshot**

Open `Assets/figma-extracts/figma/1440-hero.png` and `Assets/figma-extracts/baseline/1440-hero.png` side by side. Write the per-pixel delta list to `Assets/figma-extracts/diffs/hero.md`.

- [ ] **Step 3: Write the IntersectionObserver hook (failing test first)**

Create `src/lib/use-video-resume.test.ts`:

```ts
import { renderHook } from "@testing-library/react";
import { useVideoResume } from "./use-video-resume";

test("pauses video when below threshold and plays when above", () => {
  // mock IntersectionObserver, mock video ref, assert play()/pause() called
  // [full test body — concrete, not a placeholder]
});
```

(Note: no test runner is currently configured. Phase 1 Task 1.1 includes adding `vitest` + `@testing-library/react` as devDeps if we want TDD here. Alternative: skip the unit test and verify with Playwright in Step 7.)

- [ ] **Step 4: Implement the hook**

`src/lib/use-video-resume.ts`:

```ts
"use client";
import { useEffect, type RefObject } from "react";

export function useVideoResume(ref: RefObject<HTMLVideoElement | null>, threshold = 0.25) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          void el.play().catch(() => {});
        } else {
          el.pause();
        }
      },
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [ref, threshold]);
}
```

- [ ] **Step 5: Wire the hook into `hero.tsx`**

Convert `hero.tsx` to a client component (add `"use client"`), add a `useRef<HTMLVideoElement>`, call `useVideoResume(ref)`, pass `ref` to the `<video>`.

- [ ] **Step 6: Apply pixel-parity deltas from Step 2**

Edit `hero.tsx` per the diff list. Keep inline pixel `style={{ … }}` values (Figma-load-bearing per CLAUDE.md).

- [ ] **Step 7: Playwright verify at 3 breakpoints**

`npx playwright test` (or use Playwright MCP) — capture hero at 1440/768/375. Visual diff vs Figma reference. Must clear ≥ 95% parity.

- [ ] **Step 8: Scroll-test video resume**

In Playwright: scroll to bottom of page, then back to hero. Assert `video.paused === false` after scroll-back. Assert `video.paused === true` while not in viewport.

- [ ] **Step 9: Commit**

```bash
git add src/components/hero.tsx src/lib/use-video-resume.ts Assets/figma-extracts/diffs/hero.md
git commit -m "Phase 1 (hero): pixel-parity rebuild + video resume on scroll"
```

**Repeat the per-section template for tasks 1.2 through 1.13.** Each section's task list is structurally identical:
1. Pull Figma context
2. Write diff
3. Apply pixel deltas
4. Playwright verify
5. Commit

Section-specific extras (collapsed for brevity — expanded inline when executing):
- `markets-table` (1.2): add mobile card layout below `md:hidden` breakpoint. Each row → vertical card with token image, name, price/change stacked.
- `comparison` (1.3): same card pattern + add "Asset Holder Protection" row (handoff #5).
- `partners` (1.4): regrid SVGs at the exact Figma cell dimensions; preserve monochrome treatment.
- `product` / `token-showcase` (1.5, 1.6): scrub all "×5" / "up to 5x" copy → match `tokens.ts` max (×3 current).
- `final-cta` (1.7): swap to re-exported bg from Task 0.5; preserve gradient overlay.
- Remaining sections (1.8–1.13): pure pixel-parity passes.

**Phase 1 exit criteria:** All 13 sections committed. Every section clears ≥ 95% Playwright parity at all 3 breakpoints.

---

## Phase 2 — Copy + compliance pass

Runs in parallel with Phase 1's last 3 sections. Operates on the section files Group B has touched.

### Task 2.1 — Brand Guardian sweep

- [ ] **Step 1: Dispatch `Brand Guardian` agent**

Input: all 13 component files + `Assets/spec.md`. Output: `Assets/figma-extracts/compliance/brand-guardian.md` — table of `{file, line, current, suggested, reason}`.

- [ ] **Step 2: Apply Brand Guardian deltas**

For each row marked "must-change", edit the source. Anything ambiguous flagged for Tomer.

- [ ] **Step 3: Commit**

```bash
git add src/components Assets/figma-extracts/compliance/brand-guardian.md
git commit -m "Phase 2: Brand Guardian compliance pass"
```

### Task 2.2 — Legal Compliance Checker pass

- [ ] **Step 1: Dispatch `Legal Compliance Checker`**

Input: post-Brand-Guardian state. Output: `Assets/figma-extracts/compliance/legal.md`. Scope: Marshall Islands ART framework — flag every regulated claim.

- [ ] **Step 2: Apply must-change deltas**

Same pattern as Task 2.1.

- [ ] **Step 3: Commit**

```bash
git add src/components Assets/figma-extracts/compliance/legal.md
git commit -m "Phase 2: legal/regulatory compliance pass"
```

**Phase 2 exit criteria:** Zero "must-change" items remaining in either compliance report.

---

## Phase 3 — Performance + accessibility + mobile

Runs in parallel after Phase 1 + Phase 2 merge.

### Task 3.1 — Performance audit + fixes

- [ ] **Step 1: Run Lighthouse mobile via Playwright MCP**

Capture report at `Assets/figma-extracts/perf/lighthouse-mobile-pre.json`.

- [ ] **Step 2: Dispatch `vercel:performance-optimizer`**

Inputs: Lighthouse report + `next.config.ts` + component files. Outputs: prioritized fix list.

- [ ] **Step 3: Apply fixes in priority order**

Likely items: (a) hero-video.mp4 is 10.4 MB — encode multiple bitrates, add `<source>` per breakpoint or use Next 16 `unstable_after` to defer load; (b) move Google `gtag` `Script` to `lazyOnload` if not already; (c) `next/font` preload tuning; (d) Tailwind v4 unused-class purge verification; (e) image priority hints (`priority` only on hero `<Image>`).

- [ ] **Step 4: Re-run Lighthouse**

Must clear bar #3 (Perf ≥ 90 mobile). Save report as `lighthouse-mobile-post.json`. Commit both.

### Task 3.2 — Accessibility audit + fixes

- [ ] **Step 1: Dispatch `accessibility-tester` (axe-core run)**

Output: `Assets/figma-extracts/a11y/axe-report.json`.

- [ ] **Step 2: Dispatch `accessibility-expert` (manual VoiceOver pass)**

Output: narrative report.

- [ ] **Step 3: Apply fixes**

Likely items: ARIA labels on the markets table, focus management on mobile menu open/close, skip-link verification (already present in `layout.tsx`), color contrast on `#8d8d8d` text against white backgrounds.

- [ ] **Step 4: Re-run axe**

Must clear bar #3 (A11y = 100). Commit.

### Task 3.3 — Mobile (375px) deep audit

- [ ] **Step 1: Dispatch `mobile-developer`**

Output: `Assets/figma-extracts/mobile/issues.md`. Special focus: markets-table card layout (Task 1.2 output), comparison card layout (Task 1.3 output), mobile menu transitions.

- [ ] **Step 2: Apply fixes per file, commit per section**

**Phase 3 exit criteria:** Lighthouse + axe + manual mobile sweep all clear their bars.

---

## Phase 4 — Reality check loop

### Task 4.1 — Evidence Collector pass

- [ ] **Step 1: Dispatch `Evidence Collector`** (from `Agents/agency-agents/testing/`)

Mandate: visual proof for every claim. Output: `Assets/figma-extracts/qa/evidence.md` — every section gets a verdict + screenshot citations.

### Task 4.2 — Reality Checker pass

- [ ] **Step 1: Dispatch `Reality Checker`** (from `Agents/agency-agents/testing/`)

Mandate: "NEEDS WORK" by default, requires overwhelming proof for production readiness. Output: rating + per-section deltas.

- [ ] **Step 2: If rating < A-, loop**

For each section that didn't clear, re-enter Phase 1 with the specific delta. Iterate until A- or better.

**Phase 4 exit criteria:** Reality Checker returns ≥ A-.

---

## Phase 5 — Ship

### Task 5.1 — Connect to Vercel

- [ ] **Step 1: Use `vercel:bootstrap` skill**

Validate env, link `Crypt0Shmipt0/shift-tradfi`.

- [ ] **Step 2: First preview deploy via Vercel MCP**

`deploy_to_vercel`. Capture preview URL.

### Task 5.2 — Pre-launch audits on preview URL

- [ ] **Step 1: SEO + GEO pass** (`seo-page` agent + `seo-geo` skill)

Output: `Assets/figma-extracts/seo/preview-audit.md`. Apply must-fix metadata in `src/app/layout.tsx`.

- [ ] **Step 2: Schema markup** (`seo-schema` skill)

Add `Organization` + `Product` JSON-LD in `layout.tsx` or per page if needed.

- [ ] **Step 3: Final Lighthouse + Reality Checker run on preview**

If both clear → green-light production.

### Task 5.3 — Production deploy

- [ ] **Step 1: Promote preview to production**

Confirm domain assignment (or note that shift-tradfi has no domain yet per handoff).

- [ ] **Step 2: Smoke test live URL**

Final Playwright run at 1440/768/375 against production. Commit final report to `Assets/figma-extracts/qa/launch.md`.

- [ ] **Step 3: Update SESSION-HANDOFF**

Mark all 9 known remaining issues from the previous handoff as resolved. Commit.

**Phase 5 exit criteria:** Production URL clears all 5 WOW bars.

---

## Risks + mitigations

| Risk | Mitigation |
|---|---|
| Figma frames not accessible via MCP (perms, branch) | Phase 0 Task 0.1 verifies access first. Fallback: import screenshots manually into `Assets/figma-extracts/figma/`. |
| Hero video 10.4 MB tanks LCP | Phase 3 Task 3.1 — re-encode multi-bitrate + poster frame + lazy-load with placeholder. |
| Pixel-parity perfectionism delays ship | Hard 95% cutoff per section. Anything above that is bonus. |
| Brand Guardian + Legal conflict on copy | Tomer arbitrates; output goes into a dedicated `Assets/figma-extracts/compliance/disputes.md` for review before applying. |
| Vercel build fails on Next 16 / React 19 cutting-edge | Phase 0 includes Context7 lookup of any non-stable APIs. Build locally first (`npm run build`). |
| Reality Checker permanently returns "NEEDS WORK" | Each loop iteration produces a tighter delta — if a section loops 3× without improvement, escalate to Tomer for arbitration. |
| Mobile card layouts look worse than current "hide columns" | Mid-Phase 1, ship two variants (cards vs hidden) for Tomer to choose. |

---

## Open questions (need answers before Phase 1 starts)

1. **Leverage max:** `tokens.ts` shows ×3. Comparison/product copy says ×5. **Which wins?** (Drives Task 1.5, 1.6 + compliance pass.)
2. **"Fully backed" disposition:** Drop entirely, or qualify with "1:1 underlying ETF (TSLL/SPXL/SOXL) backing"?
3. **Token tickers:** Brand Guardian last flagged TSL2L vs TSx2 — which naming scheme is canonical? (Drives Task 0.4.)
4. **Mobile comparison strategy:** Card layout (handoff #4) vs keeping the column-hide. Confirm card direction.
5. **Live prices:** Wire up real Yahoo Finance feed (like main site) or accept static placeholders for launch? Drives Markets Table scope.
6. **Domain:** Will TradFi page live at a path on `shiftrwa.xyz`, a subdomain, or a separate domain? Affects metadata + canonical URLs.
7. **Worktree:** Should I run this in a git worktree (the writing-plans skill recommends it) or directly on `main`? The repo currently has no remote configured at this path — confirm the `Crypt0Shmipt0/shift-tradfi` remote should be added first.

---

## Execution options

**Plan complete and saved to `PLAN-2026-05-11-tradfi-wow.md`. Two execution options:**

1. **Subagent-Driven (recommended)** — I dispatch a fresh subagent per task (one of the ~777 agents in `Agents/`), review between tasks, fast parallel iteration where ownership allows. Best for the 13 parallel section rebuilds in Phase 1.

2. **Inline Execution** — Execute tasks in this session using `superpowers:executing-plans`, batch with checkpoints. Best if you want to watch every step and arbitrate inline.

**Which approach?** And: any of the 7 open questions you want to answer right now so Phase 0 can start cleanly?
