# SA-028 — r13-contact-hands release preparation

Status: source/catalog preparation only; publication pending DevOps. Card `t_b8d97a2a` remains open. No new gameplay changes, tags, deployment, main-branch changes, force pushes, or archive removals are part of this task.

## Accepted tested source and gates

- Accepted gameplay/art integration source: `6a12463a01baafae2d57d044fc37c5c5adb7fbff` on `prototype`. This preparation adds documentation/patch only; `src`, `public`, and `tests` are unchanged.
- Unit: 263 pass / 0 fail, exit 0; production build exit 0; full mobile/desktop/touch lifecycle suite exit 0, zero console errors (existing `evidence/SA-028f-result.md`). Unchanged-code full suites were not rerun for this documentation commit.
- Parent-owned full herald runner `proc_a3c689509955`: exit 0 supplied by parent. Its actual log `/home/tyler/.hermes/profiles/tyler/cache/scratch/sa028f-herald.log` was read: final result `{"consoleErrors": [], "matrix": 6, "desktop": "passed", "visualInspection": "UNKNOWN: no native vision; ART gate remains open"}`. The runner's visual caveat is preserved, not overwritten by functional success.
- Independent image-bearing acceptance: `evidence/SA-028g-visual-review.md`, six exact regular tutorial captures visually PASS. This supersedes the regular-scene visual-pending status in the earlier integration receipt, but does not extend to other states.
- Source art: lean and mad accepted by supplied-pixel review. Malformed point pose rejected, not repaired or deleted. Verified `src/heraldView.ts`: sync selects only `mad` for mad phase, otherwise `lean`; rejected point is never selected for drawing. It is still preloaded and shipped, so network requests for its PNG do not mean it was rendered.
- Runtime mad/tear visual quality remains UNKNOWN; functional herald regression passed. Physical phones were NOT tested; browser/emulation evidence is not physical-device validation.

## Canonical catalog patch

- Fetched/read canonical `origin/gh-pages:releases.html` at `367e7b53681f3795c55c2150dae673621f5701db` (r12 latest).
- Deliverable: `evidence/SA-028-releases.patch`, changing only `releases.html` when applied to the deployment tree. No competing catalog was created or applied on the source branch.
- Adds actual `r13-contact-hands/` archive card and promotes the root `./` latest card. Describes contact-sweep punches/pickup, held-prop enemy sweep/release throw, prop swap, fixed 16:9 scene with side HUD, scene-canvas herald/paper and new paper-free art with point disabled. Historical r12 double-tap explanation is intentionally preserved in its archive card.
- Isolated temporary Git index: `git apply --cached --check` and apply both passed. Result tree `c93da7bee1b8aee1a3c64bf87f2da91664bda492`; only `releases.html` differed. All nine original archive cards retained byte-for-byte; total cards 10 → 11 (root latest + ten archives). No-JavaScript count is 11; JavaScript count remains derived from cards. Root and archive hrefs checked. No old archives removed or quarantined.

## Build and deployment handoff

Build the final preparation commit with `PATH=/home/tyler/.bun/bin:$PATH bun run build` to local `dist`; capture exact `git rev-parse HEAD`, build exit and full warnings in `/home/tyler/.hermes/profiles/tyler/cache/scratch/sa028-release-final-build.log` and `.receipt.json`. Those post-commit receipts bind the build to final source HEAD without a circular SHA-in-commit claim. Existing >500 kB chunk warning is expected and must remain disclosed; actual output/exit governs.

DevOps is authorized to publish root + immutable `r13-contact-hands/` + catalog together immediately, with no fresh approval request. Apply/check the catalog patch against the isolated deployment tree AFTER artifact copying; do not overwrite unrelated catalog updates if its base changed. Preserve all historical archives. Use the exact final built HEAD in the deployment marker; read back source push and deployment state separately. Source preparation is not a claim of live publication. Parent closes the card only after independent live verification.
