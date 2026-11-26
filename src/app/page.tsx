import Link from "next/link";
import { getAllWorks, getAllPosts } from "@/lib/content";
import { Hero } from "@/components/Hero";
import { WorkCard } from "@/components/WorkCard";
import { ArticleRow } from "@/components/ArticleRow";
import { Eyebrow } from "@/components/ui";

const moreLink = "pb-2 text-sm text-muted transition-colors hover:text-emerald";
const h2 = "text-[clamp(2.2rem,6vw,4.5rem)] font-semibold leading-none tracking-[-0.03em]";

export default function Home() {
  const works = getAllWorks();
  const posts = getAllPosts().slice(0, 4);

  return (
    <>
      <Hero />

      {works.length > 0 && (
        <section className="mx-auto max-w-5xl px-5 py-24">
          <Eyebrow>Works</Eyebrow>
          <div className="flex items-end justify-between gap-4">
            <h2 className={h2}>作ったもの。</h2>
            <Link href="/works" className={moreLink}>すべて見る →</Link>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {works.map((w, i) => (
              <WorkCard key={w.slug} work={w} index={i} />
            ))}
          </div>
        </section>
      )}

      <section className="mx-auto max-w-5xl px-5 py-24">
        <Eyebrow>Blog</Eyebrow>
        <div className="flex items-end justify-between gap-4">
          <h2 className={h2}>書いたもの。</h2>
          <Link href="/blog" className={moreLink}>すべて見る →</Link>
        </div>
        <div className="mt-12 border-t border-line">
          {posts.length === 0 && <p className="py-10 text-muted">まだ記事がありません。</p>}
          {posts.map((p) => (
            <ArticleRow key={p.slug} post={p} />
          ))}
        </div>
      </section>
    </>
  );
}
