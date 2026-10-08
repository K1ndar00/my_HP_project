import Link from "next/link";
import type { Work } from "@/lib/content";
import { Tag, fmtDate } from "./ui";

export function WorkCard({ work, index }: { work: Work; index: number }) {
  return (
    <Link
      href={`/works/${work.slug}`}
      className="group flex h-full flex-col gap-4 rounded-[1.75rem] border border-line bg-surface p-8 transition-colors hover:border-emerald/60"
    >
      <div className="flex items-start justify-between">
        <span className="font-mono text-5xl font-semibold text-white/15">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="font-mono text-xs text-muted">{fmtDate(work.date)}</span>
      </div>
      <h2 className="text-2xl font-semibold tracking-tight">{work.title}</h2>
      <p className="line-clamp-3 text-sm text-muted">{work.description}</p>
      {(work.role || work.period) && (
        <p className="text-xs text-muted">{[work.role, work.period].filter(Boolean).join(" ・ ")}</p>
      )}
      <div className="mt-auto flex flex-wrap gap-2 pt-2">
        {work.tags.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </div>
    </Link>
  );
}
