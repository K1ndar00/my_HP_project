import Link from "next/link";
import { getAllWorks } from "@/lib/content";
import { getAllArticles } from "@/lib/articles";
import { Hero } from "@/components/motion/Hero";
import { WorkCard } from "@/components/WorkCard";
import { ArticleRow } from "@/components/ArticleRow";
import { Eyebrow } from "@/components/ui";

export const revalidate = 3600;

const moreLink = "pb-2 text-sm text-muted transition-colors hover:text-emerald";
const h2 = "text-[clamp(2.2rem,6vw,4.5rem)] font-semibold leading-none tracking-[-0.03em]";

export default async function Home() {
  const works = getAllWorks();
  const articles = await getAllArticles(4);

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

      {articles.length > 0 && (
        <section className="mx-auto max-w-5xl px-5 py-24">
          <Eyebrow>Writing</Eyebrow>
          <div className="flex items-end justify-between gap-4">
            <h2 className={h2}>書いたもの。</h2>
            <Link href="/blog" className={moreLink}>すべて見る →</Link>
          </div>
          <div className="mt-12 border-t border-line">
            {articles.map((a) => (
              <ArticleRow key={a.href} item={a} />
            ))}
          </div>
        </section>
      )}

      <section className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-6 border-t border-line px-5 py-16">
        <p className="text-xl font-semibold tracking-tight">話しかけてもらえたら嬉しい。</p>
        <div className="flex gap-3 text-sm">
          <Link href="/about" className="rounded-full border border-line px-5 py-2.5 transition-colors hover:border-emerald/60 hover:text-emerald">
            About
          </Link>
          <Link href="/contact" className="rounded-full bg-emerald px-5 py-2.5 font-semibold text-black transition-colors hover:bg-white">
            Contact
          </Link>
        </div>
      </section>
    </>
  );
}
