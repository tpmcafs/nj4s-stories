# The Art of Everyday Wellbeing

A touch-friendly HTML presentation for NJ4S that uses the Japanese art of kintsugi (repairing broken pottery with gold) to teach the eight dimensions of wellness, ending in a hands-on activity where students mend mini white bowls.

## Present it

Open `index.html` in a browser (Chrome or Edge works best). It needs an internet connection for the fonts and the 3D bowl; without one, a still photo stands in for the bowl and everything else works.

- **Move on:** swipe left or up, tap empty space, press the right arrow or space, or use the round buttons in the bottom corners.
- **Go back:** swipe right or down, press the left arrow, or use the back button.
- **Scenes:** jump to any of the 21 scenes (or press M).
- **Notes:** speaker notes for every step (or press N).
- **Full screen:** press F.

It is listed in the NJ4S Bergen Program Library (the `index.html` at the root of this repository).

## What's inside

| Scene | What students can do |
|---|---|
| Title | Turn the 3D porcelain bowl; tap it to break it and watch it mend in gold |
| What is kintsugi? | 金 (gold) + 継ぎ (joining), over a photo of a real repaired bowl |
| The legend | Tap the teapot to pour, tap the bowl to break it, then staples and gold |
| The real bowl | Bakōhan, the stapled celadon bowl at the Tokyo National Museum; tap a staple for a close-up |
| How kintsugi is done | Five steps on the 3D bowl: gather, join with urushi, fill, rest in the furo, dust with gold |
| Ways to mend | Real photos of a crack, a chip and a missing piece, plus yobitsugi |
| The ideas behind it | Flip cards for wabi-sabi, mushin and mottainai |
| The choice | The Crack, The Staples, The Gold |
| The face | Drag the pieces together; the eight dimensions circle the face |
| 8 dimensions | SAMHSA definition, a kintsugi lesson with a real photo, and Crack / Staples / Gold buttons |
| Whole, not perfect | All eight joined by gold |
| Activity | Break the 3D bowl, drag the pieces back, tap each seam to name it after a dimension |
| Find your gold | Reflection questions and where to find support |
| Sources and credits | Research sources and photo licenses |

## Activity materials

One mini white ceramic bowl per student, a kintsugi repair kit (adhesive or epoxy plus gold powder, or a gold paint pen), cloth bags or tea towels, a rubber mallet, safety glasses, disposable gloves, paper plates and wipes. Bowls break inside a bag, adults handle the mallet, and finished bowls are not for food unless the kit says it is food-safe.

## Editing

`index.html` is generated. Edit the files in `src/` and run:

```
python3 src/gen2.py
```

- `src/template2.html`: scenes, text, styles and behavior
- `src/bowl3d.js`: the 3D bowl (three.js r128, loaded from cdnjs)
- `src/dims.json`: the eight dimensions (definitions, kintsugi lessons, Crack / Staples / Gold text)
- `src/data.json`: positions for the legend and face scenes
- `src/photos.json`: photo credits and licenses

## Sources

- Kintsugi: [Wikipedia](https://en.wikipedia.org/wiki/Kintsugi)
- Bakōhan: [Chanoyu](https://chano-yu.com/japanese-museum-antiques/japans-national-treasure-chinese-longquan-celadon-tea-bowl-bakohan/), [Ceramics Story](https://turuta.jp/ceramics-story/?p=486)
- Eight Dimensions of Wellness: SAMHSA, adapted from Swarbrick (2006), [Policy Research Associates](https://prainc.com/eight-dimensions-wellness)
- Teen sleep and activity: [Riley Children's Health](https://cdn.rileychildrens.org/resources/Well-Visit-Guide-Sleep.pdf)
- School connectedness: [CDC, 2022](https://archive.cdc.gov/www_cdc_gov/media/releases/2022/p0331-youth-mental-health-covid-19.html)

## Image credits

Photographs `assets/p_*.webp` come from Wikimedia Commons under the licenses listed on the Sources and credits scene and in `src/photos.json` (public domain, CC0, CC BY 2.0, CC BY 4.0 and CC BY-SA 4.0). Bakōhan: Tokyo National Museum via ColBase, CC BY 4.0. The illustrations, face sequence and textures come from the original Kintsugi deck.
