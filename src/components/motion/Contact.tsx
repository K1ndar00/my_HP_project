"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { site } from "@/config/site";

export function Contact() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });
  const scale = useTransform(scrollYProgress, [0, 1], [0.78, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [0, 1]);
  const github = site.social.github ? `https://github.com/${site.social.github}` : "";

  return (
    <section ref={ref} id="contact" className="relative overflow-hidden px-5 py-40">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 mx-auto h-[60vmin] max-w-3xl rounded-full bg-emerald-deep/20 blur-[120px]"
      />
      <motion.div
        style={reduce ? undefined : { scale, opacity }}
        className="relative mx-auto max-w-5xl text-center"
      >
        <p className="mb-6 font-mono text-xs uppercase tracking-[0.25em] text-emerald">Contact</p>
        <h2 className="text-[clamp(2.6rem,9vw,7.5rem)] font-semibold leading-[0.98] tracking-[-0.04em]">
          話しかけて
          <br />
          <span className="grad-text">もらえたら嬉しい。</span>
        </h2>
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {site.email && (
            <a
              href={`mailto:${site.email}`}
              className="inline-flex min-h-12 items-center rounded-full bg-emerald px-7 text-sm font-semibold text-black transition-colors hover:bg-white"
            >
              {site.email}
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center rounded-full border border-white/20 px-7 text-sm font-medium transition-colors hover:border-emerald hover:text-emerald"
            >
              GitHub ↗
            </a>
          )}
        </div>
      </motion.div>
    </section>
  );
}
