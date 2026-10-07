import { getAllPosts } from "./content";
import { getExternalArticles, type Source } from "./feeds";

export type ArticleItem = {
  source: Source | "diary";
  title: string;
  excerpt: string;
  date: string;
  /** 日記は /blog/slug、外部記事は外部 URL */
  href: string;
  external: boolean;
};

/** 自サイトの日記 + 外部サービスの記事を、新しい順に 1 本のリストにする */
export async function getAllArticles(limit?: number): Promise<ArticleItem[]> {
  const external = await getExternalArticles();
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
