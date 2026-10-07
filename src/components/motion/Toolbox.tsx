"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { site } from "@/config/site";

function Row({ reverse, outline }: { reverse?: boolean; outline?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], reverse ? ["-35%", "0%"] : ["0%", "-35%"]);
  const items = [...site.skills, ...site.skills, ...site.skills];

  return (
    <div ref={ref} className="overflow-hidden py-2">
      <motion.div style={reduce ? undefined : { x }} className="flex w-max gap-10 whitespace-nowrap">
        {items.map((s, i) => (
          <span
            key={i}
            className={`text-[clamp(2.8rem,9vw,7rem)] font-semibold leading-none tracking-[-0.03em] ${
              outline ? "outline-text" : i % 3 === 0 ? "grad-text" : "text-fg"
            }`}
          >
            {s}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export function Toolbox() {
  return (
    <section aria-label="スキル" className="py-32">
      <p className="mx-auto mb-10 max-w-5xl px-5 font-mono text-xs uppercase tracking-[0.25em] text-emerald">
        Toolbox
      </p>
      <Row />
      <Row reverse outline />
    </section>
  );
}
