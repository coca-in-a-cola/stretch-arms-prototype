# SA-028d — herald no-paper art route preflight

Status: **BLOCKED before generation**. No replacement sprite was generated or accepted. Webdev must not treat the existing paper-bearing sprites as no-paper replacements.

## Exact missing capability

This delegated session has no exposed authorized remote image-generation/edit tool or approved image-generation runner accepting reference pixels. Deferred tool discovery for image generation and vision returned no matching tools; only session search, process management and task-list sources are connected. No native image-viewing tool is exposed either.

The loaded `animation-and-graphics-pipeline-v2` skill recommends `gemini-3.1-flash-image` via Antigravity. That is a recommendation, **not a verified available model route**. A bounded executable check found no `antigravity`, `gemini`, or `imagegen` command. Project `tools/` contains only `cut_sprites.py`, a deterministic existing-sheet cutter, not a generation runner.

A safe existing infrastructure report at `/opt/agents/migration/gemini-media-rollout/ACCEPTANCE-REPORT.md` describes real image/video **analysis** using `https://agy.mice.zone/v1/chat/completions`, requested model `gemini-3.8-flash-high`, returned route `custom:gemini-media-gateway`. It does not prove image output or support for `gemini-3.1-flash-image`. An unauthenticated GET of `https://agy.mice.zone/v1/models` returned **HTTP 401**; its body was not read. Thus no supported image-output model, authorized reference-edit request, or image response schema could be verified here. Credentials remain parent authority; no secret files, token values, dumps or protected backups were read.

Required unblock: parent exposes an already-authorized native image-generation/edit tool or approved runner with exact supported image-output model and reference-image input contract, or runs the reference edit under parent-held authorization and returns original image bytes plus sanitized actual model/route receipt. Verify the requested image model explicitly; no paid-provider fallback or silent model substitution is authorized.

## Known project references (preserved)

- `/home/tyler/workspaces/stretch-arms-prototype/art/gen_herald_poses.jpg` — existing 2×2 herald reference sheet. ASSETS.md records Gemini image model via Tyler; original exact model, prompt and license grant are not recorded.
- `/home/tyler/workspaces/stretch-arms-prototype/public/assets/gen_herald_lean.png`
- `/home/tyler/workspaces/stretch-arms-prototype/public/assets/gen_herald_point.png`
- `/home/tyler/workspaces/stretch-arms-prototype/public/assets/gen_herald_mad.png`

All three existing PNG headers were inspected: **800×720, PNG color type 6 (RGBA)**. No native visual inspection was possible in this session; the character description comes from existing provenance, not a newly viewed image: vintage rubber-hose crow/rooster in bowler with cigar stub. Preserve character, ink weight, palette and lean/point/mad acting through image-conditioned generation.

## Intended handoff after unblock

Create new `public/assets/gen_herald_nopaper_lean.png`, `gen_herald_nopaper_point.png`, and `gen_herald_nopaper_mad.png`; preserve old sprites. Reference-conditioned outputs must contain no paper, sign or text in either hand, retain matching anatomy/costume/scale across poses, and become clean alpha cutouts. Preserve original model output, prompt and sanitized actual model/route receipt under task-specific `art/` paths. Record source/model/license honestly in ASSETS.md; do not infer a license from the old generic Gemini attribution.

Measure actual resulting canvas dimensions, common character pivot, wrist/grip coordinates and scene-sheet corners in sprite pixels (top-left origin), with normalized coordinates for webdev. **No replacement anchors are supplied now:** inventing grips before valid pixels exist would misalign the future separately rendered in-scene paper. Existing canvas size alone does not establish hand positions. Native-inspect generated sprites beside references, create a labeled reference-vs-new comparison PNG, and provide real PNG handles before acceptance.

## Scope and verification

No runtime source edits, image synthesis, procedural redraw, local inference, paid fallback, token handling, profile/config changes, publish or branch changes occurred. Existing dirty browser evidence was left untouched. No `gen_herald_nopaper_*` files, comparison image, generation receipt or accepted attachment anchors exist from this attempt. Only this report and an ASSETS.md blocker note are task deliverables. The art dependency remains open.
