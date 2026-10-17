# Ассеты и происхождение

| Файл | Что это | Генератор | Обработка |
|---|---|---|---|
| `public/assets/gemini-bully-solo.jpg` | концепт задиры-кота (rubber-hose, 1930-е) | Gemini image model (через Tyler) | — исходник |
| `public/assets/gemini-dog-solo.jpg` | концепт пса с нимбом | Gemini image model (через Tyler) | — исходник |
| `public/assets/bully.png` | RGBA-спрайт задиры 512×640, ноги внизу | из `gemini-bully-solo.jpg` | Claude: `tools/cut_sprites.py` — заливка фона от краёв, мягкая кромка, обрезка, вписывание |
| `public/assets/dog_halo.png` | RGBA-спрайт пса 512×640 (нарисованный нимб убран — в игре он анимированный); с SA-V2-12 — запасной, основной кадр `gen_dog_sit.png` | из `gemini-dog-solo.jpg` | Claude: `tools/cut_sprites.py` |
| `public/assets/gen_cat_poses.jpg` | лист поз задиры-кота: замах гаечным ключом / получил / нокаут | Gemini image model (сгенерировал Tyler) | — исходник |
| `public/assets/gen_dog_poses.jpg` | лист поз пса: идёт / сидит довольный / грустит | Gemini image model (сгенерировал Tyler) | — исходник |
| `public/assets/gen_props.jpg` | лист пропсов: бочонок, ящики, бутылка, мусорный бак, забор | Gemini image model (сгенерировал Tyler) | — исходник |
| `public/assets/gen_cat_windup.png`, `gen_cat_hurt.png`, `gen_cat_ko.png` | кадры задиры: замах (телеграф удара), реакция на удар, нокаут | из `gen_cat_poses.jpg` | Claude: `tools/cut_sprites.py` — вырез фигуры, отражение (смотрит как `bully.png`), общий масштаб, без нарисованных звёздочек |
| `public/assets/gen_dog_walk.png`, `gen_dog_sit.png`, `gen_dog_sad.png` | кадры пса: идёт, сидит (основной), грустит после удара | из `gen_dog_poses.jpg` | Claude: `tools/cut_sprites.py` |
| `public/assets/gen_barrel.png`, `gen_bottle.png` | бочонок и бутылка кваса — предметы, которые можно схватить и бросить | из `gen_props.jpg` | Claude: `tools/cut_sprites.py` |
| `art/gemini-flash-pov-master.jpg` | старый концепт руки от первого лица (только референс, в сборку не входит) | Gemini image model (через Tyler) | — исходник |

Процедурно в рантайме (Canvas 2D / Three.js): руки игрока (шланг + перчатка, `src/arm.ts`; растровые `pov_*.png` удалены в SA-V2-12), нимб, звёздочки нокаута, тучка грустного пса, комикс-вспышки, запасные бутылка и бочонок (если PNG не загрузился), неоновые вывески, гирлянды, всё 3D-окружение, небо-градиенты уровней. Звук — синтез Web Audio, без файлов.

Не использованы из `gen_props.jpg`: ящики, мусорный бак и забор — укрытия остаются 3D-геометрией (это настоящие препятствия с глубиной и тенями; плоская картинка на кубе смотрелась бы хуже).

Вырезка: заливка бумаги от краёв кропа, очистка крупных замкнутых белых дыр, только главная фигура, кромка «отмыта» от белого (без светлого ореола).

Пересборка спрайтов:
```sh
PLAYWRIGHT_BROWSERS_PATH=.playwright-browsers .venv-browser/bin/python tools/cut_sprites.py
```
