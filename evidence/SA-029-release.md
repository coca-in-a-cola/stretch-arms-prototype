# SA-029 release receipt

## Released artifact and refs

- Built/tested source: `2d29ade084d7217da624ee56a6d3a8e4d9111510` (existing parent-built `dist`; no rebuild).
- Remote prototype at artifact publication: `2d29ade084d7217da624ee56a6d3a8e4d9111510`. A subsequent receipt-only commit may advance prototype; it does not change the artifact/tag/marker.
- Remote gh-pages: `c6b76c15ac12fd929d39aa710977a850a71f58c5`.
- Immutable annotated tag `sa-029-r14-hitboxes`: tag object `af668d01280c1d6442ce35d3b7a9b2bd8c8bdba5`; peeled source `2d29ade084d7217da624ee56a6d3a8e4d9111510`.
- Normal pushes used the existing Git credential helper. Exact refs read back with `git ls-remote`.
- Author: `DevOps <DevOps@agents.mice.zone>`; committer: `Tyler <Tyler@agents.mice.zone>`; coauthor: `Дмитрий Дронов <coca-in-a-cola@protonmail.com>`.

## Live endpoints

- Root: https://coca-in-a-cola.github.io/stretch-arms-prototype/
- Immutable version: https://coca-in-a-cola.github.io/stretch-arms-prototype/r14-hitboxes/
- Catalog: https://coca-in-a-cola.github.io/stretch-arms-prototype/releases.html
- Version catalog: https://coca-in-a-cola.github.io/stretch-arms-prototype/r14-hitboxes/releases.html
- Previous release: https://coca-in-a-cola.github.io/stretch-arms-prototype/r13-contact-hands/
- Marker at both root and version: `build-commit.txt`, content `2d29ade084d7217da624ee56a6d3a8e4d9111510` followed by newline.

Bounded CDN polling converged on attempt 3 (20-second intervals): all 20 checked endpoint files returned HTTP 200 with exact expected SHA-256. This covers root/version index, marker, catalog, entry JS, main JS, and every catalog archive launch target including r13.

| File (both root and r14 unless noted) | SHA-256 |
| --- | --- |
| `index.html` | `e8c32c733f99a6237a4c71cebc6b9202d610668ce78a7d9f182587bf95617b8f` |
| `build-commit.txt` | `33e80a1543443ed7a1d004f5258a67269c52ab65333a64cb0c158d3e336464c0` |
| `assets/index-CImeixnN.js` | `64e5b951b71149c490601497e30acc9f6bdce713fb4e9955fe6278a6da78e005` |
| `assets/main-qOhQkHvg.js` | `254633302f1b2e6315e57330664a20d892b1a6fc795745aef6cadc49c5d51d96` |
| Root `releases.html` | `5d902295a5abe7841f2f952a652d66ff8372f537329ab3b52fd218b2f24bf740` |
| Version `releases.html` | `3668f2201e9fed7c3d38378bc0e4c0e6e254bceedf8be6a23a93ccfd2ffa6ff8` |
| `r13-contact-hands/index.html` | `f4060f3a0135939e76680f6e429e1f2ebac5bfe418a95cd14bff9b4de5daef69` |

All copied artifact files except the deliberately updated release catalog match existing dist bytes. Markers are added release metadata. Catalog hashes intentionally differ from bundled dist: canonical gh-pages catalog was patched, and the version copy adds `<base href="../">` so all launch links resolve to canonical root paths.

## Preservation and idempotency

- Isolated detached deployment worktree; shared dirty prototype evidence was not staged.
- Existing gh-pages base: `f6525f3c238746b80b5614c999f6e36445d66afb`.
- Preserved every historical archive file (681 files) and every preexisting root asset (107 files), verified by SHA-256.
- Canonical catalog has 12 cards, r14 latest, with all 10 previous archive cards retained. All archive launch links resolve; old version directories, including uncatalogued historical folders, remain untouched.
- Bundled catalog was stale relative to canonical gh-pages. Initial safety check stopped before artifact copy. Successful apply copied artifacts, restored captured canonical catalog, ran `git apply --check`, then applied `evidence/SA-029-releases.patch`. No unrelated canonical content was replaced.
- Second identical artifact/catalog/marker application produced the identical Git tree `aaf422583bd5e4bc1da3eec7dd5cabbf5ae306a7`; no duplicate deployment commit.
- Catalog describes no aim assistance, hostile-only 1.2x width/height, shared ray/projectile bounds and preserved occlusion, plus the actual hat counter path.

## Acceptance scope and limitations

Parent reports independent `bun test` exit 0 and build exit 0; worker reports 266 tests passing and focused browser path twice exit 0. No redundant rebuild or QA loop was run during release.

Parent browser log inspected: `/home/tyler/.hermes/profiles/tyler/cache/scratch/sa029-parent-browser.log`, ending `SA029 contact + touch/desktop hat path PASS`. Logged state includes held hat, counter contact, flipped landing with intro, and pour phase. Touch and desktop automation are not a physical-phone test. No physical phone was tested by DevOps.

Raw deployment and HTTP receipts: `/home/tyler/.hermes/profiles/tyler/cache/scratch/sa029-deploy-state.json` and `/home/tyler/.hermes/profiles/tyler/cache/scratch/sa029-live-state.json`.

Card `t_7b76f950` remains open for parent independent verification and closure. No main branch, force push, service, DNS, Namecheap, or Git configuration changes.
