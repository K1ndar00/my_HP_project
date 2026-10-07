"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";
import { site } from "@/config/site";

type Phrase = (typeof site.statement)[number];

function PhraseText({
  phrase,
  progress,
  range,
  reduce,
}: {
  phrase: Phrase;
  progress: MotionValue<number>;
  range: [number, number];
  reduce: boolean;
}) {
  const opacity = useTransform(progress, range, [0.14, 1]);
  const y = useTransform(progress, range, [14, 0]);
  const accent = "accent" in phrase && phrase.accent;
  return (
    <motion.span
      style={reduce ? undefined : { opacity, y }}
      className={`inline-block ${accent ? "grad-text" : ""}`}
    >
      {phrase.text}
    </motion.span>
  );
}

/** スクロールに合わせて、1 フレーズずつ文章が浮かび上がる */
export function Statement() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion() ?? false;
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const n = site.statement.length;

  return (
    <section ref={ref} id="about" className={reduce ? "py-32" : "h-[320vh]"}>
      <div
        className={`${
          reduce ? "" : "sticky top-0 h-screen"
        } mx-auto flex max-w-5xl flex-col justify-center px-5`}
      >
        <p className="mb-8 font-mono text-xs uppercase tracking-[0.25em] text-emerald">About</p>
        <p className="text-[clamp(1.6rem,4.5vw,3.7rem)] font-semibold leading-[1.4] tracking-[-0.02em] [word-break:auto-phrase]">
          {site.statement.map((phrase, i) => {
            const start = (i / n) * 0.85;
            const end = start + 0.85 / n + 0.04;
            return (
              <PhraseText
                key={i}
                phrase={phrase}
                progress={scrollYProgress}
                range={[start, end]}
                reduce={reduce}
              />
            );
          })}
        </p>
      </div>
    </section>
  );
}
