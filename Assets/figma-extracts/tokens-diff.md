# Design Tokens — Figma ↔ Code Reconciliation

Pulled from Figma file `xCq3eoTM8cvLYunmidxFk5` (root nodeId `3000:42`) on 2026-05-11.

## Color tokens — Figma library vs `src/app/globals.css`

| Figma name | Figma hex | Code variable | Code hex | Status |
|---|---|---|---|---|
| Pure Black | `#000000` | `--dark-bg` | `#000000` | ✅ match |
| Midnight | `#021C24` | `--foreground` | `#021c24` | ✅ match |
| Protocol Mint | `#26C8B8` | `--mint` | `#26c8b8` | ✅ match |
| Off-White | `#EDEEEE` | `--off-white` | `#edeeee` | ✅ match |
| Validator White | `#FFFFFF` | `--background` | `#ffffff` | ✅ match |
| Strong cyan | `#26c8b8` | (dup of Protocol Mint) | `#26c8b8` | ✅ match (alias) |

**Verdict:** all 6 Figma variables map 1:1 to existing code tokens. No additions or renames needed.

## Code-only tokens (not in Figma variables)

| Code variable | Code hex | Used by | Source-of-truth status |
|---|---|---|---|
| `--gray-text` | `#6b7280` | Body grey text | Code-only — no Figma variable. Figma likely uses inline hex on text nodes. **Phase 1 verification needed**: check that this matches the actual Figma text color. |
| `--dark-card` | `#151515` | Dark surface cards | Code-only. Figma likely uses inline fills. **Phase 1 verification needed**. |
| `--dark-card-alt` | `#111820` | Dark surface alt | Code-only. Same risk. |
| `--danger` | `#ef4444` | Error / sell red | Code-only. Tailwind default red-500. Check Figma. |

**Action items for Phase 1:**
1. For each section with a dark surface, verify Figma's actual fill color matches `--dark-card` or `--dark-card-alt`. Update if drift detected.
2. Add the body grey, danger red, and any green (price up) as Figma variables in a future design-system reconciliation (out-of-scope for this remediation; flag for design team).

## Font tokens

Code uses `next/font/google` with:
- `--font-grotesk` → Space Grotesk (weights 300-700)
- `--font-inter` → Inter (weights 300-700)
- `--font-mono` → JetBrains Mono (weights 400-600)

Figma variables endpoint returned no font tokens. Phase 1 will verify per-section text styles via `get_design_context`.

## Conclusion for Task 0.3

`globals.css` does NOT need edits at this phase. The 6 Figma color variables already match. The code-only colors are flagged for per-section verification during Phase 1 — not for global reconciliation.
