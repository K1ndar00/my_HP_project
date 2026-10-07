import Parser from "rss-parser";
import { site } from "@/config/site";

export type Source = "note" | "qiita" | "zenn";

export type ExternalArticle = {
  source: Source;
  title: string;
  link: string;
  date: string;
  excerpt: string;
};

const parser = new Parser();

const feedUrl: Record<Source, (user: string) => string> = {
  note: (u) => `https://note.com/${u}/rss`,
  qiita: (u) => `https://qiita.com/${u}/feed`,
  zenn: (u) => `https://zenn.dev/${u}/feed`,
};

async function fetchFeed(source: Source, user: string): Promise<ExternalArticle[]> {
  if (!user) return [];
  try {
    const feed = await parser.parseURL(feedUrl[source](user));
    return feed.items.map((item) => ({
      source,
      title: item.title ?? "",
      link: item.link ?? "",
      date: item.isoDate ?? item.pubDate ?? new Date(0).toISOString(),
      excerpt: (item.contentSnippet ?? "").replace(/\s+/g, " ").slice(0, 120),
    }));
  } catch {
    // 取得に失敗してもサイト全体は表示する
    return [];
  }
}

/** 設定済みサービスの記事をまとめて取得（新しい順） */
export async function getExternalArticles(limit?: number): Promise<ExternalArticle[]> {
  const lists = await Promise.all(
    (Object.keys(feedUrl) as Source[]).map((s) => fetchFeed(s, site.articles[s])),
  );
  const all = lists.flat().sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return limit ? all.slice(0, limit) : all;
}

export const sourceLabel: Record<Source | "diary", string> = {
  diary: "Diary",
  note: "note",
  qiita: "Qiita",
  zenn: "Zenn",
};

export const sourceProfileUrl = (s: Source) =>
  site.articles[s] ? feedUrl[s](site.articles[s]).replace(/\/(rss|feed)$/, "") : "";
