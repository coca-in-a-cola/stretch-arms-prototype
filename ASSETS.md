# Ассеты и происхождение

Цветовая логика (SA-V2-13): мир — чёрно-белый, как старая плёнка; в цвете только персонажи и то, с чем можно взаимодействовать. Поэтому в игре используются вырезки из цветных листов `gen_color_*`, а ч/б листы остались исходниками-референсами.

Исходники лежат в `art/` и в сборку не попадают (Vite копирует в `dist/` только `public/`). В `public/assets/` — только вырезанные RGBA-спрайты, которые грузит игра.

## Исходники (`art/`, не в сборке)

| Файл | Что это | Генератор |
|---|---|---|
| `art/gemini-bully-solo.jpg` | ч/б концепт задиры-кота (rubber-hose, 1930-е) | Gemini image model (через Tyler) |
| `art/gemini-dog-solo.jpg` | ч/б концепт пса с нимбом | Gemini image model (через Tyler) |
| `art/gen_cat_poses.jpg` | ч/б лист поз задиры: замах гаечным ключом / получил / нокаут | Gemini image model (сгенерировал Tyler) |
| `art/gen_dog_poses.jpg` | ч/б лист поз пса: идёт / сидит довольный / грустит | Gemini image model (сгенерировал Tyler) |
| `art/gen_props.jpg` | ч/б лист пропсов: бочонок, ящики, бутылка, мусорный бак, забор | Gemini image model (сгенерировал Tyler) |
| `art/gen_color_gemini-bully-solo.jpg` | цветная перерисовка `gemini-bully-solo.jpg` (рыжий кот, кепка, полосатый свитер) | Gemini image model (сгенерировал Tyler) |
| `art/gen_color_gemini-dog-solo.jpg` | цветная перерисовка `gemini-dog-solo.jpg` (золотой нимб) | Gemini image model (сгенерировал Tyler) |
| `art/gen_color_gen_cat_poses.jpg` | цветная перерисовка `gen_cat_poses.jpg`, раскладка та же | Gemini image model (сгенерировал Tyler) |
| `art/gen_color_gen_dog_poses.jpg` | цветная перерисовка `gen_dog_poses.jpg`, раскладка та же | Gemini image model (сгенерировал Tyler) |
| `art/gen_color_gen_props.jpg` | цветная перерисовка `gen_props.jpg`, раскладка та же | Gemini image model (сгенерировал Tyler) |
| `art/gen_bar_bg.jpg` | ч/б интерьер бара-подпольщика 1930-х (стойка, полки, пианино, табуреты, дверь) — задник уровня 3 | Gemini image model (сгенерировал Tyler, 2026-10-18) |
| `art/gen_bar_patrons.jpg` | цветной лист посетителей бара: морж-моряк с кружкой, бульдог-вышибала, ласка-бармен | Gemini image model (сгенерировал Tyler, 2026-10-18) |
| `art/gen_bar_props.jpg` | цветной лист пропсов бара: котелок, кружка пива, виски, табурет, плевательница, шейкер, банка яиц, вантуз, часы с кукушкой | Gemini image model (сгенерировал Tyler, 2026-10-18) |
| `art/gen_street_props2.jpg` | цветной лист уличных пропсов (гидрант, шина, арбуз, рыба, наковальня, резиновая курица, шар, цветок, пирог) — пока не используется | Gemini image model (сгенерировал Tyler, 2026-10-18) |
| `art/gemini-flash-pov-master.jpg` | старый концепт руки от первого лица (только референс) | Gemini image model (через Tyler) |
| `art/gen_flyers.jpg` | исходный лист, появился неотслеживаемым в `public/assets/` 2026-10-18; перенесён в `art/` (SA-V4-16), чтобы листы не попадали в сборку; лист 6 пустых старых листовок — 5 вырезаны для брифинга глашатая (SA-V4-18), листовка WANTED не используется (напечатанный английский текст) | Gemini image model (сгенерировал Tyler); промпт не записан |
| `art/gen_friends.jpg` | лист друзей (бабушка с зонтом, котёнок, голубь-почтальон, пьяница с бутылкой); в игре не используется — нарисован не в модели с листом поз `gen_friends_poses.jpg` (другие цвета и лица), поэтому все кадры друзей взяты из листа поз | Gemini image model (сгенерировал Tyler); промпт не записан |
| `art/gen_friends_poses.jpg` | лист поз друзей 4×4: строки — бабушка, котёнок, голубь-почтальон, пьяница; столбцы — спокоен / обижен / спокоен / в ярости (SA-V4-17) | Gemini image model (сгенерировал Tyler); промпт не записан |
| `art/gen_herald_poses.jpg` | исходный лист, появился неотслеживаемым в `public/assets/` 2026-10-18; перенесён в `art/` (SA-V4-16), чтобы листы не попадали в сборку; лист 2×2 глашатая (rubber-hose ворон-петух в котелке с окурком сигары): наклонился с листовкой / показывает на листовку (×2) / обижен (SA-V4-18) | Gemini image model (сгенерировал Tyler); промпт не записан |
| `art/gen_mole_poses.jpg` | лист крота: вылез из кучи земли / выглядывает с фонарём / обижен (SA-V4-17) | Gemini image model (сгенерировал Tyler); промпт не записан |
| `art/gen_thugs_poses.jpg` | лист мелкой шпаны 3×3: строки — крыса-карманник, голубь из банды, мальчишка с рогаткой; столбцы — появился / атакует / нокаут (SA-V4-17) | Gemini image model (сгенерировал Tyler); промпт не записан |

## SA-028d: no-paper herald regeneration — blocked

No `gen_herald_nopaper_*` replacements were generated. The delegated artist session exposes no authorized image-generation/edit tool or approved generation runner. The skill's suggested `gemini-3.1-flash-image` via Antigravity is not a verified supported route; an unauthenticated gateway model-catalogue probe returned HTTP 401. Existing media acceptance proves analysis only, not image output. No paid fallback, credential access or procedural substitute was used.

References remain `art/gen_herald_poses.jpg` and the existing `gen_herald_lean.png`, `gen_herald_point.png`, `gen_herald_mad.png` (verified PNG headers: 800×720 RGBA). Existing source attribution is Gemini image model via Tyler; exact original model/prompt and license grant are not recorded. No new model receipt or license is asserted. See `evidence/SA-028d-art-result.md` for the exact missing capability and required handoff. New grips/anchors and comparison image await actual authorized image output; old sprites are preserved.

## Спрайты в игре (`public/assets/`)

Все вырезаны Claude скриптом `tools/cut_sprites.py` из цветных листов; кропы те же, что для ч/б листов (раскладка совпала, проверено глазами по контактному листу).

| Файл | Что это | Из листа |
|---|---|---|
| `bully.png` | задира 512×640, основная стойка | `gen_color_gemini-bully-solo.jpg` |
| `dog_halo.png` | пёс сидит (нарисованный нимб срезан — в игре он анимированный); запасной кадр | `gen_color_gemini-dog-solo.jpg` |
| `gen_cat_windup.png`, `gen_cat_hurt.png`, `gen_cat_ko.png` | задира: замах (телеграф удара), реакция на удар, нокаут; отражены, общий масштаб, без нарисованных звёздочек | `gen_color_gen_cat_poses.jpg` |
| `gen_dog_walk.png`, `gen_dog_sit.png`, `gen_dog_sad.png` | пёс: идёт, сидит (основной), грустит после удара | `gen_color_gen_dog_poses.jpg` |
| `gen_barrel.png`, `gen_bottle.png` | бочонок и бутылка — предметы, которые можно схватить и бросить | `gen_color_gen_props.jpg` |
| `gen_walrus.png`, `gen_bulldog.png`, `gen_weasel.png` | задиры бара (уровень 3): морж-моряк, бульдог-вышибала, ласка-бармен; одна поза на персонажа (листа поз пока нет — замах/удар/нокаут играются трансформацией) | `gen_bar_patrons.jpg` |
| `gen_hat.png` | котелок — секретный предмет бара; на листе он чёрный, при вырезке перекрашен в фиолетовый (цвет = можно трогать) | `gen_bar_props.jpg` |
| `gen_mug.png`, `gen_whiskey.png` | кружка пива и бутылка виски — бросаемые предметы бара | `gen_bar_props.jpg` |
| `gen_stool.png`, `gen_spittoon.png`, `gen_shaker.png`, `gen_eggs.png`, `gen_plunger.png` | предметы бара (SA-V4-16): табурет, плевательница, шейкер, банка яиц, вантуз — разбросаны по бару, их можно схватить и бросить | `gen_bar_props.jpg` |
| `gen_cuckoo.png` | часы с кукушкой на стене бара — шутка окружения (ударь — кукушка выскочит и обзовётся) | `gen_bar_props.jpg` |
| `gen_hydrant.png`, `gen_tire.png`, `gen_melon.png`, `gen_fish.png`, `gen_anvil.png`, `gen_chicken.png`, `gen_bowling.png`, `gen_flowerpot.png`, `gen_pie.png` | уличные предметы (SA-V4-16): гидрант, шина, арбуз, рыба, наковальня, резиновая курица, шар для боулинга, цветочный горшок, кремовый пирог — разбросаны по улице | `gen_street_props2.jpg` |
| `gen_mole_up.png`, `gen_mole_lantern.png`, `gen_mole_hurt.png` | крот (друг, бить нельзя): выглянул из кучи земли, выглянул с фонарём, обиделся (каска слетела) | `gen_mole_poses.jpg` |
| `gen_granny_idle.png`, `gen_granny_mad.png`, `gen_granny_fury.png`, `gen_kitten_idle.png`, `gen_kitten_mad.png`, `gen_kitten_fury.png`, `gen_pigeon_idle.png`, `gen_pigeon_mad.png`, `gen_pigeon_fury.png`, `gen_drunk_idle.png`, `gen_drunk_mad.png`, `gen_drunk_fury.png` | друзья (бить нельзя): бабушка, котёнок, голубь-почтальон, спящий пьяница — спокоен / обижен / в ярости | `gen_friends_poses.jpg` |
| `gen_rat_appear.png`, `gen_rat_attack.png`, `gen_rat_ko.png`, `gen_gang_appear.png`, `gen_gang_attack.png`, `gen_gang_ko.png`, `gen_kid_appear.png`, `gen_kid_attack.png`, `gen_kid_ko.png` | мелкая шпана улицы (1 удар = нокаут): крыса-карманник, голубь из банды, мальчишка с рогаткой — появился / атакует / нокаут | `gen_thugs_poses.jpg` |
| `gen_herald_lean.png`, `gen_herald_point.png`, `gen_herald_mad.png` | глашатай (брифинг управления в начале уровня, бить нельзя): наклонился к камере с листовкой / показывает на листовку / обижен после удара; общий масштаб, кадр 800×720 | `gen_herald_poses.jpg` |
| `gen_flyer_tall.png`, `gen_flyer_tag.png`, `gen_flyer_taped.png`, `gen_flyer_wide.png`, `gen_flyer_pinned.png` | пустые старые листовки брифинга; текст подсказок рисуется поверх в игре (по-русски), листовку можно разорвать ударом | `gen_flyers.jpg` |
| `gen_bar_backdrop.png` | задник бара: картина целиком, переведена в чистый серый, PNG (в сборку не уходит ни одного .jpg-листа) | `gen_bar_bg.jpg` |

Процедурно в рантайме (Canvas 2D / Three.js): руки игрока (шланг с цветным рукавом + белая перчатка, `src/arm.ts`), золотой нимб, звёздочки нокаута, тучка грустного пса, комикс-вспышки, запасные бутылка и бочонок (если PNG не загрузился), неоновые вывески, гирлянды, всё 3D-окружение, небо-градиенты уровней, плёночное зерно и виньетка. Окружение при загрузке переводится в оттенки серого (`src/palette.ts`). Звук — синтез Web Audio, без файлов.

Не использованы из `gen_props` / `gen_color_gen_props`: ящики, мусорный бак и забор — укрытия остаются 3D-геометрией (это настоящие препятствия с глубиной и тенями).

Вырезка: заливка бумаги от краёв кропа, очистка крупных замкнутых белых дыр, только главная фигура, кромка «отмыта» от белого (без светлого ореола).

Пересборка спрайтов:
```sh
PLAYWRIGHT_BROWSERS_PATH=.playwright-browsers .venv-browser/bin/python tools/cut_sprites.py
```
