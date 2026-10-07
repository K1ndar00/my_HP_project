import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Work } from "@/lib/content";
import { Tag, fmtDate } from "./ui";

export function WorkCard({ work, index }: { work: Work; index: number }) {
  return (
    <Link
      href={`/works/${work.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-all hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-[0_8px_30px_-12px_rgba(59,76,202,.25)]"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-accent-soft">
        {work.thumbnail ? (
          <Image
            src={work.thumbnail}
            alt=""
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <span className="absolute inset-0 grid place-items-center font-serif text-7xl text-accent/25">
            {String(index + 1).padStart(2, "0")}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-serif text-xl leading-snug">{work.title}</h3>
          <ArrowUpRight
            size={18}
            className="mt-1 shrink-0 text-muted transition-colors group-hover:text-accent"
          />
        </div>
        <p className="line-clamp-3 text-sm text-muted">{work.description}</p>
        <div className="mt-auto flex flex-wrap items-center gap-1.5 pt-2">
          {work.tags.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
          <span className="ml-auto font-mono text-[11px] text-muted">{fmtDate(work.date)}</span>
        </div>
      </div>
    </Link>
  );
}
