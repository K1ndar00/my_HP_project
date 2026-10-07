---
title: "Next.js App Router を学んで気づいたこと"
date: "2026-04-20"
category: "技術"
tags: ["Next.js", "学習"]
excerpt: "Pages Router から App Router へ移行して感じた違いや、Server Components の考え方について整理しました。"
---

## App Router との出会い

Next.js 13 から導入された App Router を本格的に使い始めました。最初は戸惑いましたが、Server Components の概念を理解してからは一気に開発が快適になりました。

## Server Components の利点

`async/await` をコンポーネント内で直接使えるのは非常に便利です。データフェッチのためだけに `useEffect` を書く必要がなくなりました。

## 注意点

- `"use client"` ディレクティブの使いどころ
- Server Components と Client Components の境界設計
- `params` が Promise になった点 (Next.js 15 以降)

引き続き学習を進めていきます。
