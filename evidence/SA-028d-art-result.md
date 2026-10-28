# SA-028d — real reference-image generation receipt

Status: **generation succeeded; technical assets produced; visual acceptance and semantic grip anchors remain OPEN**. Supersedes the earlier preflight blocker. Do not publish or describe these as visually accepted sprites.

## Actual route and provenance

Exactly three requests, all HTTP 200, to `https://agy.mice.zone/v1/chat/completions`; requested and returned model `gemini-3.1-flash-image`. No paid/fallback provider or local inference. Each individual old pose PNG was white-composited and sent as actual base64 PNG `image_url` input with the full edit prompt. Credential `antigravity-api-key` was loaded internally from the registered protected file through an inherited pipe used as curl's header-file interface; no key appeared in argv, output, request files or committed files. No credentials/config/services were modified.

The initial attached DevOps proof was natively inspected beside the original attached lean asset: the proof was a medieval human with a red hat and heraldic costume, whereas the original is a black rooster/crow with red comb, charcoal bowler, orange beak, teal vest, red bow tie, cream gloves and cigar. That proof was rejected, not adapted or shipped. Original pose-specific rooster pixels were used instead.

Raw outputs and exact per-request provenance:
- `art/sa028d/gen_herald_nopaper_lean.jpg`, `art/sa028d/lean-receipt.json`
- `art/sa028d/gen_herald_nopaper_point.jpg`, `art/sa028d/point-receipt.json`
- `art/sa028d/gen_herald_nopaper_mad.jpg`, `art/sa028d/mad-receipt.json`

All raw images are actual 1024×1024 JPEGs decoded using strict base64 validation. Receipts include reference/output SHA-256, actual model, prompt, response ID and dimensions. No new license grant is asserted.

## Delivered PNGs and measured alpha geometry

All are **1024×1024 RGBA**; origin is top-left; alpha bounds use exclusive right/bottom coordinates.

| PNG | Alpha bounds | Transparent pixels | Opaque pixels |
|---|---|---:|---:|
| `public/assets/gen_herald_nopaper_lean.png` | (22,134)–(993,961) | 691101 | 357475 |
| `public/assets/gen_herald_nopaper_point.png` | (115,40)–(967,1002) | 706900 | 341676 |
| `public/assets/gen_herald_nopaper_mad.png` | (119,77)–(984,1002) | 662324 | 386252 |

These are not opaque full-frame white rectangles. `art/sa028d/cutout.py` deterministically removes border-connected RGB≥235 white and applies a 3×3 median to the alpha mask. It does not redraw anatomy. Enclosed white islands and fringe quality still need native review. Square source framing is preserved rather than pretending these are registered to the old 800×720 framing.

`art/sa028d/cutout-metrics.json` contains measured cream-color component centroids/bounds. **These are not verified hands or grip anchors**: color segmentation also detects eyes/shirt and cannot prove anatomy. No accepted hand anchor or common semantic character pivot is asserted without viewing the generated pixels. This requested acceptance criterion remains incomplete.

Comparison: **`evidence/SA-028d-herald-comparison.png`**, 1200×930, original poses left, new cutouts right, explicitly labeled unreviewed. No native tool for opening newly generated images is exposed in this session. Initial attachment vision does not imply final-image vision. Empty hands, preserved silhouette/costume, no text/paper, inter-pose consistency and scene alignment remain unverified. Parent must attach this sheet and the PNGs to a native image-capable review before release.

## Runtime and verification

`src/heraldView.ts` was read, not modified. It discovers exactly `gen_herald_nopaper_lean.png`, `gen_herald_nopaper_point.png`, `gen_herald_nopaper_mad.png` via `import.meta.glob`, selects them when present, and sets `replacement-unreviewed`. The sheet remains independently rendered in its own canvas, composited into the shared scene canvas. Existing hardcoded grip fractions do NOT establish alignment with the new images.

After assets: `bun run build` succeeded (TypeScript + Vite; existing large-chunk warning). Initial `bun test`: 261 pass / 2 fail, 263 tests. Failures were the exact runtime-PNG inventory snapshot and missing ASSETS.md entries. Documentation has now been added; final rerun should leave the inventory-snapshot failure only. No test/runtime source was changed because this assignment authorizes art and task documentation only. The inventory must explicitly add the three new PNG names in a separate authorized source/test change; do not hide that failure or claim a green suite.

Reproduction uses the existing Pillow environment: `/home/tyler/workspaces/character-benchmark/steward/.venv/bin/python art/sa028d/cutout.py`. Default/project Python lacked Pillow; no packages were installed. Existing Bun is `/home/tyler/.bun/bin/bun`. `generate.py` refuses existing output targets to avoid unintended extra requests. Pillow dynamic-mode type-check diagnostics and a getdata deprecation warning do not prevent real execution.

Scope: old source art, old sprites and foreign dirty evidence preserved. No runtime/source edits, main switch, push, publish, install, service or profile changes. Delivered artifacts are candidates, not final visual approval.
