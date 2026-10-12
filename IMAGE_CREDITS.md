# Image Credits — Explore Shanxi

Every image displayed on the site is sourced from Wikimedia Commons under an
explicit free licence. This file records, per image: the subject, the actual
pixel dimensions of the stored file, author, licence, licence deed, source page,
and any modification made for display.

Attribution for CC BY / CC BY-SA images is shown on the site under each image
(via the `ImageCredit` component): `Photo: {author} · {license} · Wikimedia Commons`.

| File | Subject | Dimensions | Author | License | License deed | Source page | Modifications |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `yungang-grottoes.jpg` | Yungang Grottoes | 1280×960 | Dudva | CC0 | https://creativecommons.org/publicdomain/zero/1.0/ | https://commons.wikimedia.org/wiki/File:Yungang_Grottoes_03.2025._2.jpg | `object-cover` crop |
| `hanging-temple.jpg` | Hanging Temple | 1280×853 | BRUNNER Emmanuel (Manu25) | Public domain | — | https://commons.wikimedia.org/wiki/File:Xuankongsi.jpg | `object-cover` crop |
| `jinci-temple.jpg` | Jinci Temple | 1280×1267 | xiquinhosilva | CC BY 2.0 | https://creativecommons.org/licenses/by/2.0/ | https://commons.wikimedia.org/wiki/File:Jinci_Temple_74047-Taiyuan_(49222173368).jpg | `object-cover` crop |
| `shanxi-museum.jpg` | Shanxi Museum | 1280×960 | 1969社论 | CC BY-SA 4.0 | https://creativecommons.org/licenses/by-sa/4.0/ | https://commons.wikimedia.org/wiki/File:Shanxi_Museum_2025.jpg | `object-cover` crop |
| `pingyao-ancient-city.jpg` | Pingyao Ancient City (aerial) | 1920×477 | Chensiyuan | CC BY-SA 4.0 | https://creativecommons.org/licenses/by-sa/4.0/ | https://commons.wikimedia.org/wiki/File:1_pingyao_ancient_city_aerial_pano_2019.jpg | panorama 4/1 layout |
| `wutai-mountain.jpg` | Wutai Mountain temples | 1920×1272 | Popolon | CC BY-SA 4.0 | https://creativecommons.org/licenses/by-sa/4.0/ | https://commons.wikimedia.org/wiki/File:Wutai_shan_temples.jpg | `object-cover` crop |
| `xiaoxitian-temple.jpg` | Xiaoxitian Temple (小西天) | 1920×1080 | 三猎 | CC BY-SA 4.0 | https://creativecommons.org/licenses/by-sa/4.0/ | https://commons.wikimedia.org/wiki/File:隰县小西天_上院下院.JPG | `object-cover` crop |
| `guangsheng-temple.jpg` | Guangsheng Temple (广胜寺) | 1920×1280 | Artsxiang | CC BY-SA 3.0 | https://creativecommons.org/licenses/by-sa/3.0/ | https://commons.wikimedia.org/wiki/File:广胜寺_03.JPG | `object-cover` crop |
| `hukou-waterfall.jpg` | Hukou Waterfall | 1920×2560 | Fanghong | CC BY-SA 4.0 | https://creativecommons.org/licenses/by-sa/4.0/ | https://commons.wikimedia.org/wiki/File:Hukou_waterfall.jpg | portrait 3/4 layout |
| `yao-temple.jpg` | Yao Temple statue | 750×1200 | Emdx | CC BY-SA 4.0 | https://creativecommons.org/licenses/by-sa/4.0/ | https://commons.wikimedia.org/wiki/File:J81929_Linfen_20140706-094434.58_36.05346,111.49097_TempleEmpereurYao.jpg | portrait 3/4 layout |
| `yingxian-wooden-pagoda.jpg` | Yingxian Wooden Pagoda | 1920×1080 | Charlie fong | CC BY-SA 4.0 | https://creativecommons.org/licenses/by-sa/4.0/ | https://commons.wikimedia.org/wiki/File:Pagoda_of_Fogong_Temple_at_Dust.jpg | 1920px thumbnail; `object-cover` crop |
| `datong.jpg` | Datong skyline | 1920×1080 | Charlie fong | CC BY-SA 4.0 | https://creativecommons.org/licenses/by-sa/4.0/ | https://commons.wikimedia.org/wiki/File:The_skyline_of_Datong（Southgate）2019.jpg | `object-cover` crop |
| `taiyuan.png` | Taiyuan skyline | 1920×1440 | A Chinese ID | CC BY-SA 4.0 | https://creativecommons.org/licenses/by-sa/4.0/ | https://commons.wikimedia.org/wiki/File:Skyline_of_Taiyuan,_Oct_1_2023.png | `next/image` transcode; `object-cover` crop |
| `pingyao.jpg` | Pingyao Ancient City | 1920×1440 | lienyuan lee | CC BY 3.0 | https://creativecommons.org/licenses/by/3.0/ | https://commons.wikimedia.org/wiki/File:平遙古城_Pingyao_Ancient_City_-_panoramio_-_lienyuan_lee.jpg | `object-cover` crop |
| `wutai-shan.jpg` | Wutai Mountain (aerial) | 1292×667 | Baptiste Marcel | CC BY-SA 3.0 | http://creativecommons.org/licenses/by-sa/3.0/ | https://commons.wikimedia.org/wiki/File:Wutai_Shan_from_the_air_-_p-ad20080116-10h51m49s-cdr1b.jpg | `object-cover` crop |
| `linfen.jpg` | Linfen (Yaodu district) | 1920×1440 | ping lin | CC BY-SA 3.0 | https://creativecommons.org/licenses/by-sa/3.0/ | https://commons.wikimedia.org/wiki/File:Yaodu,_Linfen,_Shanxi,_China_-_panoramio.jpg | `object-cover` crop |

## Notes

- The "Dimensions" column is the actual pixel size of each stored file, measured
  directly from the file header — not the Wikimedia download parameter. Some
  files are smaller than their Commons originals because they were fetched via
  Wikimedia's thumbnail service; no other image edits (colour, retouching,
  composition) were made.
- CC BY / CC BY-SA images require attribution and, for adaptations, a note that
  changes were made. Attribution is rendered on site; the "Modifications" column
  above records the display-time crop/transcode applied.
- `taiyuan.png` is a PNG served through `next/image`, which transcodes it to an
  optimised format (WebP/AVIF) for browsers that support it.
- As of V4.2, three images (`yao-temple.jpg`, `hukou-waterfall.jpg`,
  `pingyao-ancient-city.jpg`) are displayed in containers matching their native
  orientation (portrait 3/4 or panorama 4/1) rather than a forced 3:2 crop, via
  `ImageAsset.aspectRatio`. No pixel data was altered or upscaled.
