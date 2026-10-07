# Kento Kikuchi — Portfolio

就活用の作品紹介 + 日記サイト。Next.js / TypeScript / Tailwind CSS / Motion。
黒基調にエメラルド（差し色）とその補色のローズ。スクロールに連動する演出つき。

## 使い方
```bash
npm install
npm run dev     # http://localhost:3000
npm run build && npm start
```

## 内容の更新
- **名前・自己紹介文・スキル・連絡先**: `src/config/site.ts`
  - `statement` を書き換えると、スクロールで浮かび上がる文章が変わります。
  - `articles.note / qiita / zenn` にユーザー名を入れると、記事一覧に自動で取り込まれます（1時間ごとに更新）。
- **作品の追加**: `content/works/xxx.md`（title, description, date, tags, role, period, github, demo）
- **日記の追加**: `content/blog/xxx.md`（title, date, tags, excerpt）

## デザインの調整
- 色: `src/app/globals.css` 先頭の CSS 変数（`--emerald` / `--rose` など）
- 動き: `src/components/motion/`（Hero, Statement, WorksRail, Toolbox, Contact）
- 「動きを減らす」設定の環境では、動きを抑えた表示に自動で切り替わります。

## 公開
Vercel に GitHub リポジトリを連携すれば、そのまま公開できます。
