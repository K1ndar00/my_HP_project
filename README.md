# 自己紹介HP作成PJ
自分の作ったものを紹介するためのWebサイトです（就活用の作品紹介 + 日記）。
React + TypeScript + Vite 製。

## 使い方
```bash
npm install
npm run dev      # 開発サーバー
npm run build    # 本番ビルド（dist/）
```

## 内容の更新（コードを触らず、データだけ編集）
- 名前・自己紹介・連絡先: `src/data/site.ts`
- 作品の追加: `src/data/works.ts` の配列にオブジェクトを足す
- 日記の追加: `src/data/diary.ts` の配列にオブジェクトを足す

## カスタマイズ
- 色・余白・フォント: `src/styles.css` 先頭の CSS 変数（ダークモード対応済み）
- ページ追加: `src/pages/` に作成 → `src/App.tsx` に Route、`src/components/Layout.tsx` の nav に追加
- 公開: `dist/` を GitHub Pages / Vercel などに配置（ハッシュルーティングなのでそのまま動作）

## 構成
```
src/
  data/        内容（site / works / diary）
  components/  Layout, WorkCard, DiaryItem, Tags
  pages/       Home, Works, Diary
  types.ts     データの型
  styles.css   デザイントークンとスタイル
```
