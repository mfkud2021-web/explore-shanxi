# Image Audit — Explore Shanxi

Audit date: 2026-10-11

Policy: we only display images whose author and license we can verify. "Publicly
visible online" is **not** treated as free commercial use. Images without a
proven author and license are removed from display and replaced with a safe
placeholder, but the original files are kept on disk for later verification.

## Status summary

| Status | Meaning |
| --- | --- |
| **Verified** | Author + license identified (Wikimedia Commons or equivalent). Shown on site. |
| **Pending** | Author/license unknown. Replaced with placeholder in code; file kept on disk. |
| **Orphaned** | Present in `public/images/` but never referenced in code. |

## Verified images (kept)

| File | Used by | Author | License | Source |
| --- | --- | --- | --- | --- |
| `public/images/yungang-grottoes.jpg` | Yungang Grottoes (hero + attraction) | Dudva | CC0 | https://commons.wikimedia.org/wiki/File:Yungang_Grottoes_03.2025._2.jpg |
| `public/images/hanging-temple.jpg` | Hanging Temple attraction | BRUNNER Emmanuel (Manu25) | Public domain | https://commons.wikimedia.org/wiki/File:Xuankongsi.jpg |
| `public/images/jinci-temple.jpg` | Jinci Temple attraction | xiquinhosilva | CC BY 2.0 | https://commons.wikimedia.org/wiki/File:Jinci_Temple_74047-Taiyuan_(49222173368).jpg |
| `public/images/shanxi-museum.jpg` | Shanxi Museum attraction | 1969社论 | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:Shanxi_Museum_2025.jpg |

## Pending images (replaced with placeholder, files kept on disk)

| File | Previously used by | Reason |
| --- | --- | --- |
| `public/images/datong.jpg` | Datong destination hero | No author/license in code |
| `public/images/taiyuan.jpg` | Taiyuan destination hero | No author/license in code |
| `public/images/pingyao.jpg` | Pingyao destination + attraction | No author/license in code |
| `public/images/wutai-mountain.jpg` | Wutai Mountain destination hero | No author/license in code |
| `public/images/wutai-mountain-2.jpg` | Wutai Mountain attraction | No author/license in code |
| `public/images/linfen.jpg` | Linfen destination hero | No author/license in code |

These images are no longer referenced in `src/data/*.ts`; their `image.url` /
`hero_image.url` now point to `placeholder.svg`. The files remain in
`public/images/` so they can be restored once a source is confirmed.

## Orphaned files (never referenced, unverified)

| File | Status |
| --- | --- |
| `public/images/linfen-guangsheng-temple.jpg` | Orphaned — no author/license |
| `public/images/pingyao-ancient-city.jpg` | Orphaned — no author/license |
| `public/images/taiyuan-skyline.png` | Orphaned — no author/license |

## Placeholder

| File | Description |
| --- | --- |
| `public/images/placeholder.svg` | Self-authored neutral SVG (site colours + "Image pending"). No third-party copyright. Used for all unverified and new-attraction images. |

## Actions taken

1. Kept the four verified Wikimedia Commons images with their attribution intact.
2. Replaced six unverified images with `placeholder.svg` in `src/data/destinations.ts`
   and `src/data/attractions.ts`.
3. Added `placeholder.svg` for the four new southern-Shanxi attractions
   (Xiaoxitian, Guangsheng, Hukou Waterfall, Yao Temple), which have no verified
   images.
4. Left orphaned files on disk for future verification; they are not displayed.

## To restore an image

Confirm the author and license (ideally via Wikimedia Commons or another source
with an explicit free license), then set `credit`, `source`, and `license` on the
relevant `ImageAsset` and point `url` back at the file.

## Loading optimisation

- Card grids (homepage "Popular attractions", destination cards) use
  `loading="lazy"`.
- Hero and detail-page images are rendered eagerly (above the fold), which is
  intentional.
- The placeholder SVG is tiny (a few hundred bytes), so it adds negligible weight.
