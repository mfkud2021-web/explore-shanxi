export interface ImageAsset {
  url: string;
  alt: string;
  credit: string | null;
  source: string | null;
  license: string | null;
  /** Display aspect ratio as "w/h", e.g. "3/2" (default), "3/4" (portrait) or "4/1" (panorama). */
  aspectRatio?: string;
}
