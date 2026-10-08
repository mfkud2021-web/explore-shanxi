import type { PrefectureId } from "@/types";

export interface Region {
  id: PrefectureId;
  name_en: string;
  name_zh: string;
}

export const regions: Region[] = [
  { id: "taiyuan", name_en: "Taiyuan", name_zh: "太原" },
  { id: "datong", name_en: "Datong", name_zh: "大同" },
  { id: "jinzhong", name_en: "Jinzhong", name_zh: "晋中" },
  { id: "xinzhou", name_en: "Xinzhou", name_zh: "忻州" },
  { id: "linfen", name_en: "Linfen", name_zh: "临汾" },
  { id: "yuncheng", name_en: "Yuncheng", name_zh: "运城" },
  { id: "jincheng", name_en: "Jincheng", name_zh: "晋城" },
  { id: "changzhi", name_en: "Changzhi", name_zh: "长治" },
  { id: "lvliang", name_en: "Lvliang", name_zh: "吕梁" },
  { id: "shuozhou", name_en: "Shuozhou", name_zh: "朔州" },
  { id: "yangquan", name_en: "Yangquan", name_zh: "阳泉" },
];

export function getRegion(id: PrefectureId): Region | undefined {
  return regions.find((r) => r.id === id);
}
