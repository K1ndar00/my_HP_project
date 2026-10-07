import type { DiaryEntry } from "../types";

// 日記を追加するにはこの配列にオブジェクトを足すだけ（表示は日付の新しい順）
export const diary: DiaryEntry[] = [
  {
    id: "2026-10-07",
    date: "2026-10-07",
    title: "サイト作りを始めた",
    tags: ["日記", "学習"],
    body: ["今日からポートフォリオサイトを作り始めた。", "まずは小さく作って、少しずつ育てていく。"],
  },
];
