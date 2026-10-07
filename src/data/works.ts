import type { Work } from "../types";

// 作品を追加するにはこの配列にオブジェクトを足すだけ
export const works: Work[] = [
  {
    id: "portfolio-site",
    title: "このポートフォリオサイト",
    summary: "React と TypeScript で作った自己紹介サイト。データを書き換えるだけで更新できます。",
    tags: ["React", "TypeScript", "Vite"],
    period: "2026-10",
    highlights: ["データとデザインを分離し、更新しやすくした"],
    links: [{ label: "ソースコード", url: "https://github.com/K1ndar00/my_HP_project" }],
  },
];
