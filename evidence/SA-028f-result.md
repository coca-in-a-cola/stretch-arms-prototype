# SA-028f — integration receipt (in progress)

Base: e2a00c560ef61942a8445d3f6b39858eac373e2c. Card t_b8d97a2a remains open.

## Actual supplied-pixel review
- Lean: consistent rooster identity, teal waistcoat/red bow/hat/cigar; two open hands, no paper, no major clipping or white rectangular obstruction in the figure.
- Point: **REJECTED** for anatomy: three hands/arms; upper right pointing forearm is visibly detached. No paper. Do not mark this pose approved based on metadata.
- Mad: consistent identity and costume, two open hands, no paper or major edge clipping. Torn hat is intentional-looking and present in the reference.
- Source white surround is not proof of opaque runtime white blocks; alpha/runtime still require checking.

Runtime visual acceptance is PENDING: this worker can see supplied attachments but has no runtime-image viewing tool. Capture PNGs for a subsequent image-bearing review. No full-ready/release claim. No generation, install, publish, main/force operations authorized.

## Changes and real verification
- Exact sprite inventory extended by the three filenames only; provenance/colour/shipping assertions unchanged. Inventory commit: 08dd486.
- Square character now fits stage at natural aspect instead of old stretched, clipped geometry. Sheet lower-left edge uses the manually reviewed lean palm location, not colour centroids. Defective point is quarantined: normal sheets use lean. Mad still requires runtime pose/sheet contact review.
- Art gate is `source-reviewed-runtime-pending-point-rejected`, not approved.
- `PATH=/home/tyler/.bun/bin:$PATH bun test`: exit 0, 263 pass / 0 fail (8834 expectations).
- `PATH=/home/tyler/.bun/bin:$PATH bun run build`: exit 0; existing >500kB chunk warning remains.
- Final mobile suite: exit 0, all mobile/desktop/touch lifecycle checks passed, zero console errors. Task-owned captures: `evidence/sa028f-mobile/`.
- `.venv-browser/bin/python tests/browser_sa028f.py`: exit 0, five viewport cases, all five sheets checked per case, no console/page errors. First/last screenshots captured. Minimum measured body fonts by viewport: 740x300 16.65px; 844x320 17.81px; 667x375 14.37px; 915x412 20.62px; desktop 1280x720 24px. These are geometry checks, NOT visual approval.
- Exact browser-decoded transparent-pixel counts: lean 691101, point 706900, mad 662324. Opaque near-white counts: lean 30, point 30, mad 3568. White source surround is transparent; mad's remaining white pixels still need image-bearing runtime inspection.
- Initial system Python lacked PIL/playwright and Bun was not on PATH; used existing `.venv-browser/bin/python` and `/home/tyler/.bun/bin/bun`, with no installs.
- Logs (local, ignored): `evidence/sa028f-logs/{unit,build,mobile,capture}.log`. All four final exits 0. Existing foreign dirty evidence preserved.

## Screenshot handles for NEXT image-bearing review
All paths relative to `/home/tyler/workspaces/stretch-arms-prototype/`:
- `evidence/sa028f-scene/740x300-sheet-1.png` and `740x300-sheet-5.png`
- `evidence/sa028f-scene/844x320-sheet-1.png` and `844x320-sheet-5.png`
- `evidence/sa028f-scene/667x375-sheet-1.png` and `667x375-sheet-5.png`
- `evidence/sa028f-scene/915x412-sheet-1.png` and `915x412-sheet-5.png`
- `evidence/sa028f-scene/1280x720-sheet-1.png` and `1280x720-sheet-5.png`
- Geometry, alpha measurements, and last-sheet text: `evidence/sa028f-scene/report.json`.
- Last sheet text: «ЗАГАДКА / На голове котелок — для форса. / Вверх дном на стойке — / для чего-то покрепче… / 5 / 5 · ударь по листовке →».

## Parent-owned final herald runner (NOT started by worker)
Run from the exact workspace, foreground budget >=900 seconds. This redirects all output to a bounded-on-display file and isolates screenshots from foreign evidence:

```sh
.venv-browser/bin/python -c "import sys,runpy; from pathlib import Path; sys.path.insert(0,'tests'); m=runpy.run_path('tests/browser_herald.py'); m['main'].__globals__['OUT']=Path('evidence/sa028f-herald'); m['main']()" > evidence/sa028f-logs/herald.log 2>&1
```

Expected artifacts (not yet produced): `evidence/sa028f-herald/report.json`, `desktop-{sheet,torn,offended}.png`, and all five sheets at each of the six existing matrix viewports. Expected success summary: matrix 6, desktop passed, consoleErrors empty. Do not assume that outcome: parent must record actual exit and inspect runtime PNGs, especially mad contact and lean glove layering.

Remaining: parent-owned full herald regression, NEXT image-bearing runtime review, rejected point art correction/decision, release root+r13-contact-hands and canonical gh-pages releases.html update. No release performed; card t_b8d97a2a stays open.
