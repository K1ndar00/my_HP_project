import Link from "next/link";
import { getAllWorks } from "@/lib/content";
import { Reveal } from "@/components/motion/Reveal";
import { Eyebrow, Tag, fmtDate } from "@/components/ui";

export const metadata = { title: "Works", description: "作ったものの一覧" };

export default function WorksPage() {
  const works = getAllWorks();
  return (
    <div className="mx-auto max-w-5xl px-5 pb-32 pt-36">
      <Reveal>
        <Eyebrow>Works</Eyebrow>
        <h1 className="text-[clamp(2.6rem,8vw,6rem)] font-semibold leading-none tracking-[-0.04em]">
          作ったもの。
        </h1>
      </Reveal>
      <div className="mt-16 grid gap-5 md:grid-cols-2">
        {works.map((w, i) => (
          <Reveal key={w.slug} delay={(i % 2) * 0.08}>
            <Link
              href={`/works/${w.slug}`}
              className="group flex h-full flex-col gap-4 rounded-[1.75rem] border border-line bg-surface p-8 transition-colors hover:border-emerald/60"
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-5xl font-semibold text-white/15">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-mono text-xs text-muted">{fmtDate(w.date)}</span>
              </div>
              <h2 className="text-2xl font-semibold tracking-tight">{w.title}</h2>
              <p className="line-clamp-3 text-sm text-muted">{w.description}</p>
              {(w.role || w.period) && (
                <p className="text-xs text-muted">
                  {[w.role, w.period].filter(Boolean).join(" ・ ")}
                </p>
              )}
              <div className="mt-auto flex flex-wrap gap-2 pt-2">
                {w.tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
