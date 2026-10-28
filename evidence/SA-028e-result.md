# SA-028e — scene herald paper source checkpoint

Baseline: `f7bd7d0cf497abc1d797b02f7d32143ba2252802` on `prototype`.
This is a source checkpoint, not a deployment or final product acceptance.

## Implementation preserved

- `src/heraldView.ts` draws the herald, paper, text, tear animation and reaction copy on a scene-local canvas below the arms. Renderer-owned paper bounds and alpha masks supply shared stage-space hit geometry; the DOM retains semantic text only.
- `src/herald.css` keeps the skip control outside the scene in the interface rail. `src/main.ts` contains the associated briefing/contact cooldown integration.
- `tests/browser_herald.py` checks desktop interactions and all five sheets across six viewports. `tests/browser_mobile.py` waits for the rendered scene paper and writes task-specific captures under `evidence/sa028e-mobile/`.
- No implementation changes were made during this release-checkpoint pass: final-source mobile regression passed without requiring a fix.

## Actual verification

- Unit tests and build: parent reports both exit **0** on the final source. These gates were not rerun by this checkpoint worker.
- Herald browser gate: parent-owned process `proc_0a347fd93564`, exit **0**, command `PLAYWRIGHT_BROWSERS_PATH=.playwright-browsers .venv-browser/bin/python -u tests/browser_herald.py`. The worker read the existing log `/home/tyler/.hermes/profiles/tyler/cache/scratch/sa028e-herald-parent.log`; its final result is `consoleErrors: []`, `matrix: 6`, `desktop: passed`, `visualInspection: UNKNOWN: no native vision; ART gate remains open`. No matrix rerun.
- Final-source mobile regression: `PLAYWRIGHT_BROWSERS_PATH=.playwright-browsers .venv-browser/bin/python -u tests/browser_mobile.py`, worker execution exit **0**, log `/home/tyler/.hermes/profiles/tyler/cache/scratch/sa028e-mobile-checkpoint.log`. Final line: `All mobile tests passed with zero console errors.` The log also records contact punch, prop grab, swap, throw, empty-release/cancel retention and duplicate-release lifecycle checks.
- `git diff --check`: exit **0** before checkpoint preparation; repeated before commit.
- Captures are diagnostic evidence, not visual approval. Foreign screenshots and evidence are excluded from staging.

## Unmet acceptance / ART blocker

ART gate remains **OPEN**. Genuine regenerated transparent herald poses without a sheet are unavailable through the authorized generation route. Existing `gen_herald_lean.png`, `gen_herald_point.png` and `gen_herald_mad.png` still contain the baked sheet and remain development-only fallbacks. `gen_herald_nopaper_*.png` replacement discovery slots exist in code only; no replacement PNGs were generated or fabricated, and no incomplete art is being published.

Visual inspection/acceptance is **UNKNOWN**, not passed: native vision is unavailable. Automated geometry and interaction checks do not establish visual quality. Card `t_b8d97a2a` remains open. No deployment, main-branch promotion, release tag or final-product-ready claim is authorized by this checkpoint.
