# Image Audit — Explore Shanxi

Audit date: 2026-10-13 (V4.3 Black Myth Travel Experience & Ancient Architecture Photography)

Policy: we only display images whose author and license we can verify. "Publicly
visible online" is **not** treated as free commercial use. Every displayed image
must have an identified author, an explicit free license (Wikimedia Commons or
equivalent), and a source link.

## Status

All 20 image slots (11 attractions + 5 destination heroes + 4 Black Myth
locations) now use a locally saved, licence-verified Wikimedia Commons image.
No placeholders remain in use.

| Status | Count |
| --- | --- |
| **Verified** (author + license, shown on site) | 20 |
| **Pending** (unverified) | 0 |
| **Placeholder** | 0 |

## Verified images

| File | Used by | Author | License | Source |
| --- | --- | --- | --- | --- |
| `public/images/yungang-grottoes.jpg` | Yungang Grottoes (hero + attraction) | Dudva | CC0 | https://commons.wikimedia.org/wiki/File:Yungang_Grottoes_03.2025._2.jpg |
| `public/images/hanging-temple.jpg` | Hanging Temple attraction | BRUNNER Emmanuel (Manu25) | Public domain | https://commons.wikimedia.org/wiki/File:Xuankongsi.jpg |
| `public/images/jinci-temple.jpg` | Jinci Temple attraction | xiquinhosilva | CC BY 2.0 | https://commons.wikimedia.org/wiki/File:Jinci_Temple_74047-Taiyuan_(49222173368).jpg |
| `public/images/shanxi-museum.jpg` | Shanxi Museum attraction | 1969社论 | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:Shanxi_Museum_2025.jpg |
| `public/images/pingyao-ancient-city.jpg` | Pingyao Ancient City attraction | Chensiyuan | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:1_pingyao_ancient_city_aerial_pano_2019.jpg |
| `public/images/wutai-mountain.jpg` | Wutai Mountain attraction | Popolon | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:Wutai_shan_temples.jpg |
| `public/images/xiaoxitian-temple.jpg` | Xiaoxitian Temple attraction | 三猎 | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:隰县小西天_上院下院.JPG |
| `public/images/guangsheng-temple.jpg` | Guangsheng Temple attraction | Artsxiang | CC BY-SA 3.0 | https://commons.wikimedia.org/wiki/File:广胜寺_03.JPG |
| `public/images/yingxian-wooden-pagoda.jpg` | Yingxian Wooden Pagoda attraction | Charlie fong | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:Pagoda_of_Fogong_Temple_at_Dust.jpg |
| `public/images/hukou-waterfall.jpg` | Hukou Waterfall attraction | Fanghong | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:Hukou_waterfall.jpg |
| `public/images/yao-temple.jpg` | Yao Temple attraction | Emdx | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:J81929_Linfen_20140706-094434.58_36.05346,111.49097_TempleEmpereurYao.jpg |
| `public/images/datong.jpg` | Datong destination hero | Charlie fong | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:The_skyline_of_Datong（Southgate）2019.jpg |
| `public/images/taiyuan.png` | Taiyuan destination hero | A Chinese ID | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:Skyline_of_Taiyuan,_Oct_1_2023.png |
| `public/images/pingyao.jpg` | Pingyao destination hero | lienyuan lee | CC BY 3.0 | https://commons.wikimedia.org/wiki/File:平遙古城_Pingyao_Ancient_City_-_panoramio_-_lienyuan_lee.jpg |
| `public/images/wutai-shan.jpg` | Wutai Mountain destination hero | Baptiste Marcel | CC BY-SA 3.0 | https://commons.wikimedia.org/wiki/File:Wutai_Shan_from_the_air_-_p-ad20080116-10h51m49s-cdr1b.jpg |
| `public/images/linfen.jpg` | Linfen destination hero | ping lin | CC BY-SA 3.0 | https://commons.wikimedia.org/wiki/File:Yaodu,_Linfen,_Shanxi,_China_-_panoramio.jpg |
| `public/images/foguang-temple.jpg` | Foguang Temple (Black Myth) | Angus Cepka | CC BY-SA 3.0 | https://commons.wikimedia.org/wiki/File:Foguang_Temple_9.JPG |
| `public/images/nanchan-temple.jpg` | Nanchan Temple (Black Myth) | Zeus1234 | CC BY-SA 3.0 | https://commons.wikimedia.org/wiki/File:Nanchan_Temple_1.JPG |
| `public/images/shuanglin-temple.jpg` | Shuanglin Temple (Black Myth) | Zhangzhugang | CC BY-SA 3.0 | https://commons.wikimedia.org/wiki/File:Pingyao_Shuanglin_Si_2013.08.26_09-17-59.jpg |
| `public/images/yuhuang-temple.jpg` | Yuhuang Temple (Black Myth) | Windmemories | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:20250906_Yuhuang_Temple_04.jpg |

Full per-image attribution (including license deed links and modification notes)
is in [`IMAGE_CREDITS.md`](IMAGE_CREDITS.md).

## Removed this round

These files were unverified or orphaned and have been deleted:

| File | Reason removed |
| --- | --- |
| `public/images/placeholder.svg` | No longer needed — all slots now verified |
| `public/images/taiyuan.jpg` | Unverified; replaced by `taiyuan.png` |
| `public/images/wutai-mountain-2.jpg` | Unverified; replaced by `wutai-mountain.jpg` |
| `public/images/taiyuan-skyline.png` | Orphaned, unverified |
| `public/images/linfen-guangsheng-temple.jpg` | Orphaned, unverified |

## Rendering & loading

- Images are rendered with the Next.js `Image` component (`fill` + `sizes` inside
  fixed-ratio containers), which eliminates layout shift (CLS) and serves
  responsive, compressed variants.
- `sharp` (0.35.x) is now a dependency for image optimisation.
- Homepage hero, attraction detail hero and destination detail hero are
  `priority` (eager, above the fold); card grids are lazy by default.
- Container aspect ratios: homepage hero `4/3`, attraction cards `3/2`,
  destination cards `4/3`, detail heroes `3/2`.

## Cropping & orientation (manual review recommended)

Three sources have a non-landscape native orientation. As of V4.2 each is shown
in a container matching that orientation (via `ImageAsset.aspectRatio`) instead
of being forced into a 3:2 crop:

| File | Native size | Display | Note |
| --- | --- | --- | --- |
| `public/images/yao-temple.jpg` | 750×1200 (portrait) | portrait 3/4 hero | Statue of Emperor Yao — only 750px wide, so it may look soft on large screens |
| `public/images/hukou-waterfall.jpg` | 1920×2560 (portrait) | portrait 3/4 hero | Waterfall — full height now visible |
| `public/images/pingyao-ancient-city.jpg` | 1920×477 (wide pano) | panorama 4/1 | Aerial city panorama — full width now visible |

The Yao Temple image remains low-resolution regardless of layout; the only fix
is a higher-resolution source (none was found — see below).

### Yao Temple image

The current `yao-temple.jpg` (Emdx, CC BY-SA 4.0) is the only image on Wikimedia
Commons correctly identified as the Linfen 尧庙. A re-search (2026-10-12) for a
landscape alternative returned no correctly-attributed candidate: other
"Emperor Yao Temple" results were Yao temples in Taiwan or unrelated buildings
(for example the modern 华门 "China Gate" in Yaodu district, which is not 尧庙).
The file is therefore retained despite being a low-resolution portrait.

## Black Myth locations

The Black Myth page covers 9 locations. Five reuse their linked attraction's
verified image (Yungang Grottoes, Hanging Temple, Xiaoxitian, Guangsheng Temple,
Yingxian Wooden Pagoda). The remaining four — Foguang Temple, Nanchan Temple,
Shuanglin Temple and Yuhuang Temple — had no dedicated attraction page, so each
now has its own verified image added in V4.3 (see the table above).

Note on identity: Jincheng has several same-named 玉皇庙 temples (Gaodu,
Shizhang). The image used is from the "Fucheng Jade Emperor Temple" Commons
category, matching the site in our data (Fucheng Village, Zezhou County).

## To change an image

Confirm the author and license on Wikimedia Commons, download the file into
`public/images/`, then update `credit`, `source`, and `license` on the relevant
`ImageAsset` in `src/data/attractions.ts` or `src/data/destinations.ts`, and add
a row to `IMAGE_CREDITS.md`.
