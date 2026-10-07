import { getAllPosts } from "./content";
import { getExternalArticles } from "./feeds";
import type { ArticleItem } from "@/components/ArticleRow";

/** 自サイトの日記 + 外部サービスの記事を、新しい順に 1 本のリストにする */
export async function getAllArticles(limit?: number): Promise<ArticleItem[]> {
  const [external] = await Promise.all([getExternalArticles()]);
  const items: ArticleItem[] = [
    ...getAllPosts().map((p) => ({
      source: "diary" as const,
      title: p.title,
      excerpt: p.excerpt,
      date: p.date,
      href: `/blog/${p.slug}`,
      external: false,
    })),
    ...external.map((a) => ({
      source: a.source,
      title: a.title,
      excerpt: a.excerpt,
      date: a.date,
      href: a.link,
      external: true,
    })),
  ].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return limit ? items.slice(0, limit) : items;
}
