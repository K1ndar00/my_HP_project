"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import type { Work } from "@/lib/content";
import { Tag, fmtDate } from "@/components/ui";

function WorkSlide({ work, index }: { work: Work; index: number }) {
  return (
    <Link
      href={`/works/${work.slug}`}
      className="group relative flex h-[min(62vh,520px)] w-[min(84vw,620px)] shrink-0 flex-col justify-between overflow-hidden rounded-[2rem] border border-white/10 bg-surface p-8 transition-colors hover:border-emerald/60 sm:p-10"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 -top-20 size-72 rounded-full bg-emerald-deep/20 blur-3xl transition-opacity duration-500 group-hover:opacity-100 sm:opacity-60"
      />
      <div className="relative flex items-start justify-between">
        <span className="font-mono text-6xl font-semibold text-white/15 sm:text-7xl">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="font-mono text-xs text-muted">{fmtDate(work.date)}</span>
      </div>
      <div className="relative">
        <h3 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
          {work.title}
        </h3>
        <p className="mt-3 line-clamp-3 text-sm text-muted sm:text-base">{work.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {work.tags.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
        <p className="mt-6 inline-flex items-center gap-2 text-sm text-emerald">
          詳しく見る
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </p>
      </div>
    </Link>
  );
}

/** 縦にスクロールすると、作品が横に流れていく */
export function WorksRail({ works }: { works: Work[] }) {
  const outer = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion() ?? false;
  const [distance, setDistance] = useState(0);
  const { scrollYProgress } = useScroll({ target: outer, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], [0, -distance]);

  useEffect(() => {
    const measure = () => {
      if (!track.current) return;
      setDistance(Math.max(0, track.current.scrollWidth - window.innerWidth));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [works.length]);

  if (works.length === 0) return null;

  // 動きを減らす設定のときは、普通の横スクロールにする
  if (reduce) {
    return (
      <section className="py-24">
        <h2 className="mb-10 px-5 text-4xl font-semibold tracking-tight">Works</h2>
        <div className="flex gap-5 overflow-x-auto px-5 pb-4">
          {works.map((w, i) => (
            <WorkSlide key={w.slug} work={w} index={i} />
          ))}
        </div>
      </section>
    );
  }

  return (
    <section ref={outer} style={{ height: `${100 + works.length * 70}vh` }}>
      <div className="sticky top-0 flex h-screen flex-col justify-center gap-10 overflow-hidden">
        <div className="mx-auto w-full max-w-5xl px-5">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-emerald">Works</p>
          <h2 className="text-[clamp(2.2rem,6vw,4.5rem)] font-semibold leading-none tracking-[-0.03em]">
            作ったもの。
          </h2>
        </div>
        <motion.div ref={track} style={{ x }} className="flex w-max gap-5 px-[max(1.25rem,calc((100vw-64rem)/2+1.25rem))]">
          {works.map((w, i) => (
            <WorkSlide key={w.slug} work={w} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
