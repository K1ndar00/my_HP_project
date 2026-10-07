"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { site } from "@/config/site";

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  // スクロールに合わせて、名前は縮みながら薄くなり、光は広がる
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.5]);
  const opacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);
  const glowScale = useTransform(scrollYProgress, [0, 1], [1, 2.2]);
  const glowY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const cueOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0]);

  const dyn = reduce ? undefined : { scale, opacity, y };

  return (
    <section ref={ref} className={reduce ? "h-screen" : "h-[190vh]"}>
      <div className="sticky top-0 grid h-screen place-items-center overflow-hidden px-5">
        {/* 背景の光（エメラルドと補色のローズ） */}
        <motion.div
          aria-hidden
          style={reduce ? undefined : { scale: glowScale, y: glowY }}
          className="pointer-events-none absolute inset-0"
        >
          <div className="absolute left-[8%] top-[18%] size-[46vmax] rounded-full bg-emerald-deep/25 blur-[120px]" />
          <div className="absolute bottom-[6%] right-[6%] size-[38vmax] rounded-full bg-rose/20 blur-[130px]" />
        </motion.div>

        <motion.div style={dyn} className="relative text-center">
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease }}
            className="mb-6 font-mono text-xs uppercase tracking-[0.35em] text-emerald"
          >
            {site.role}
          </motion.p>

          <h1 className="text-[clamp(3.6rem,15vw,12rem)] font-semibold leading-[0.92] tracking-[-0.045em]">
            {site.nameLines.map((line, i) => (
              <span key={line} className="block overflow-hidden pb-[0.08em]">
                <motion.span
                  initial={reduce ? false : { y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1.2, delay: 0.25 + i * 0.14, ease }}
                  className={`block ${i === site.nameLines.length - 1 ? "grad-text" : ""}`}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9, ease }}
            className="mt-8 text-lg text-muted sm:text-xl"
          >
            {site.tagline}
          </motion.p>
        </motion.div>

        <motion.div
          aria-hidden
          style={reduce ? undefined : { opacity: cueOpacity }}
          className="absolute bottom-8 flex flex-col items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-muted"
        >
          Scroll
          <span className="relative h-10 w-px overflow-hidden bg-white/15">
            <motion.span
              className="absolute inset-x-0 top-0 h-1/2 bg-emerald"
              animate={reduce ? undefined : { y: ["-100%", "200%"] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            />
          </span>
        </motion.div>
      </div>
    </section>
  );
}
