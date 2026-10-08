import Link from "next/link";
import { getAllArticles } from "@/lib/articles";
import { sourceLabel } from "@/lib/feeds";
import { ArticleRow } from "@/components/ArticleRow";
import { Eyebrow } from "@/components/ui";

export const revalidate = 3600;
export const metadata = { title: "Blog", description: "日記と記事の一覧" };

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ source?: string }>;
}) {
  const { source } = await searchParams;
  const all = await getAllArticles();
  const sources = [...new Set(all.map((a) => a.source))];
  const items = source ? all.filter((a) => a.source === source) : all;

  const chip = (active: boolean) =>
    `inline-flex min-h-10 items-center rounded-full border px-4 text-sm transition-colors ${
      active
        ? "border-emerald bg-emerald text-black font-medium"
        : "border-line text-muted hover:border-emerald/60 hover:text-fg"
    }`;

  return (
    <div className="mx-auto max-w-5xl px-5 pb-32 pt-36">
        <Eyebrow>Blog</Eyebrow>
        <h1 className="text-[clamp(2.6rem,8vw,6rem)] font-semibold leading-none tracking-[-0.04em]">
          書いたもの。
        </h1>
        <p className="mt-6 max-w-xl text-muted">
          このサイトの日記に加えて、note・Qiita・Zenn の記事を自動で取り込んでいます。
        </p>

      <nav aria-label="掲載元で絞り込み" className="mt-12 flex flex-wrap gap-2">
        <Link href="/blog" className={chip(!source)}>
          すべて
        </Link>
        {sources.map((s) => (
          <Link key={s} href={`/blog?source=${s}`} className={chip(source === s)}>
            {sourceLabel[s]}
          </Link>
        ))}
      </nav>

      <div className="mt-6 border-t border-line">
        {items.length === 0 && <p className="py-12 text-muted">まだ記事がありません。</p>}
        {items.map((a) => (
          <ArticleRow key={a.href} item={a} />
        ))}
      </div>
    </div>
  );
}
