import Link from "next/link";
import { getAllWorks } from "@/lib/content";
import { getAllArticles } from "@/lib/articles";
import { Hero } from "@/components/motion/Hero";
import { Statement } from "@/components/motion/Statement";
import { WorksRail } from "@/components/motion/WorksRail";
import { Toolbox } from "@/components/motion/Toolbox";
import { Contact } from "@/components/motion/Contact";
import { Reveal } from "@/components/motion/Reveal";
import { ArticleRow } from "@/components/ArticleRow";
import { Eyebrow } from "@/components/ui";

export const revalidate = 3600;

export default async function Home() {
  const works = getAllWorks();
  const articles = await getAllArticles(4);

  return (
    <>
      <Hero />
      <Statement />
      <WorksRail works={works} />
      <Toolbox />

      {articles.length > 0 && (
        <section className="mx-auto max-w-5xl px-5 py-24">
          <Reveal>
            <Eyebrow>Writing</Eyebrow>
            <div className="flex items-end justify-between gap-4">
              <h2 className="text-[clamp(2.2rem,6vw,4.5rem)] font-semibold leading-none tracking-[-0.03em]">
                書いたもの。
              </h2>
              <Link href="/blog" className="pb-2 text-sm text-muted transition-colors hover:text-emerald">
                すべて見る →
              </Link>
            </div>
          </Reveal>
          <div className="mt-12 border-t border-line">
            {articles.map((a, i) => (
              <Reveal key={a.href} delay={i * 0.05}>
                <ArticleRow item={a} />
              </Reveal>
            ))}
          </div>
        </section>
      )}

      <Contact />
    </>
  );
}
