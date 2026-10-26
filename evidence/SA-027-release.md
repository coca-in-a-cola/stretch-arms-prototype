# SA-027 release receipt

## Published refs

- Artifact source / immutable tag target: `94cf5bffa1c2b78dadfa5e70dd4787a8a71f0055`.
- Deployment `gh-pages`: `367e7b53681f3795c55c2150dae673621f5701db`.
- Previous deployment: `59635534e7e177700f8904acc5f1d37c5bbf6d4a`.
- Annotated tag: `sa-027-r12-double-tap`; tag object `c8c3cbd93424e91852a7c128e7a2a2b5343311d5`, peeled target equals artifact source above.
- Normal non-force pushes completed; exact `git ls-remote` readback verified source, deployment, tag object and peeled target. No main/history rewrites.
- Deployment author DevOps <devops@agents.mice.zone>, committer Tyler <tyler@agents.mice.zone>; Task SA027/SA-027 and project coauthor trailers included. This receipt is a subsequent documentation-only source checkpoint; it does not change the built source or tag.

## Public URLs and HTTP verification

Base: https://coca-in-a-cola.github.io/stretch-arms-prototype/

All following paths returned HTTP 200 and matched local deployment SHA-256 bytes after bounded CDN propagation (attempt 4 of maximum 6; 20-second waits):

| Paths relative to base | SHA-256 |
| --- | --- |
| `/`, `r12-double-tap/` (index HTML) | `51b9f19ab2f23ffdbb1214562c6a79d2abb664caec9e00cf71a4a4eaa46f6c2d` |
| `releases.html` | `b8ab062ebed1511d5fd6bbe1b9cf3dc798e50715aeaaffda0e6ff1793687b9c1` |
| `r12-double-tap/releases.html` | `420c52d7e56a4f13d04726fe877b286bb40f2cb9533b571fd53b0cfefdbb3350` |
| `build-commit.txt`, `r12-double-tap/build-commit.txt` | `5d81e5979c4c877764ee742991020ac089ceeea5479fa4d916da529ab8f6246c` |
| `assets/index-Dlwv6Gi6.js`, `r12-double-tap/assets/index-Dlwv6Gi6.js` | `5ee8f78aa62104d455625c397efd79d4f605de1e4dde184e7af4c7177676be24` |
| `assets/main-C8LTV_gT.js`, `r12-double-tap/assets/main-C8LTV_gT.js` | `336daa781aeb75a21284d9d02bb19e0565f224f73ca3badeb4002b47abc166ea` |
| `r11-gestures/` (unchanged index HTML) | `a57ff5bf61f675ba15e12c678fa66c6dc372236cfe449bd8b73ed51c15b17a24` |

Markers contain the exact artifact source SHA, without a newline.

## Catalog and preservation

Applied the prepared `evidence/SA-027-releases.patch` to the actual canonical gh-pages `releases.html`, after successful `git apply --check`. No catalog content was hand-authored. Both r11-gestures and r12-double-tap cards are present, latest names r12 and links to root; ten cards and the ten-card no-JS fallback are retained. Every relative catalog navigation/launch target was checked against the deployment tree.

Stale `dist/releases.html` was deliberately excluded from both copies. The new version catalog is copied from the patched canonical catalog with mechanical relative-href rebasing (`../`) only, so latest and archive links resolve to the site root rather than nonexistent nested archives. All existing archive directories, including the complete r11 tree, are unchanged by Git tree identity. All prior root asset blobs remain unchanged; new bundles were added without pruning.

Isolated detached deployment worktree: `/home/tyler/.hermes/profiles/tyler/cache/scratch/sa027-gh-pages`.
Machine-readable verification: `/home/tyler/.hermes/profiles/tyler/cache/scratch/sa027-deployment.json`.

## Idempotency and scope

Second complete artifact copy, marker write, and mechanical version-catalog rebasing produced an identical whole-site byte manifest. Reverse-check of the already-applied catalog patch passed; no second patch/commit was created. Deployment worktree was clean after committing. Annotated tag was confirmed absent locally/remotely before creation; no tag was replaced.

This was deployment of the existing verified parent-built dist, not software development. Tests/build/browser were not rerun by DevOps: parent reported independent bun test/build/browser success; worker records 249 tests and two full passing browser runs in `SA-027-result.md`. No claim of a new remote CI run or live gameplay browser acceptance is made. HTTP byte verification proves the deployed artifacts, not all runtime behavior. Existing unavailable LSP and nonfatal Vite chunk warnings remain as recorded by the implementation worker.

Full generated-bundle `git diff --check` reported shader-string trailing whitespace in the supplied JS (root and version copies). Those artifact bytes were preserved rather than modified; catalog-only diff check passed. An intermediate archive index check used unsupported directory index syntax, failed before any commit/push, and was corrected by comparing the written index tree. No destructive recovery was needed.

Foreign dirty screenshots/documents were preserved and excluded from commits. No installations, services/gateways, DNS, credentials, OAuth, or secret APIs were accessed. Card `t_974e86ed` remains open for the parent.
