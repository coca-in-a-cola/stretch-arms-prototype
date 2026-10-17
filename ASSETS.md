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
| `art/gemini-flash-pov-master.jpg` | старый концепт руки от первого лица (только референс) | Gemini image model (через Tyler) |

## Спрайты в игре (`public/assets/`)

Все вырезаны Claude скриптом `tools/cut_sprites.py` из цветных листов; кропы те же, что для ч/б листов (раскладка совпала, проверено глазами по контактному листу).

| Файл | Что это | Из листа |
|---|---|---|
| `bully.png` | задира 512×640, основная стойка | `gen_color_gemini-bully-solo.jpg` |
| `dog_halo.png` | пёс сидит (нарисованный нимб срезан — в игре он анимированный); запасной кадр | `gen_color_gemini-dog-solo.jpg` |
| `gen_cat_windup.png`, `gen_cat_hurt.png`, `gen_cat_ko.png` | задира: замах (телеграф удара), реакция на удар, нокаут; отражены, общий масштаб, без нарисованных звёздочек | `gen_color_gen_cat_poses.jpg` |
| `gen_dog_walk.png`, `gen_dog_sit.png`, `gen_dog_sad.png` | пёс: идёт, сидит (основной), грустит после удара | `gen_color_gen_dog_poses.jpg` |
| `gen_barrel.png`, `gen_bottle.png` | бочонок и бутылка — предметы, которые можно схватить и бросить | `gen_color_gen_props.jpg` |

Процедурно в рантайме (Canvas 2D / Three.js): руки игрока (шланг с цветным рукавом + белая перчатка, `src/arm.ts`), золотой нимб, звёздочки нокаута, тучка грустного пса, комикс-вспышки, запасные бутылка и бочонок (если PNG не загрузился), неоновые вывески, гирлянды, всё 3D-окружение, небо-градиенты уровней, плёночное зерно и виньетка. Окружение при загрузке переводится в оттенки серого (`src/palette.ts`). Звук — синтез Web Audio, без файлов.

Не использованы из `gen_props` / `gen_color_gen_props`: ящики, мусорный бак и забор — укрытия остаются 3D-геометрией (это настоящие препятствия с глубиной и тенями).

Вырезка: заливка бумаги от краёв кропа, очистка крупных замкнутых белых дыр, только главная фигура, кромка «отмыта» от белого (без светлого ореола).

Пересборка спрайтов:
```sh
PLAYWRIGHT_BROWSERS_PATH=.playwright-browsers .venv-browser/bin/python tools/cut_sprites.py
```
