import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-line px-2.5 py-0.5 font-mono text-[11px] text-muted">
      {children}
    </span>
  );
}

export function PageHeader({ eyebrow, title, lead }: { eyebrow: string; title: string; lead?: string }) {
  return (
    <header className="mb-14">
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
      <h1 className="font-serif text-4xl tracking-tight sm:text-5xl">{title}</h1>
      {lead && <p className="mt-4 max-w-xl text-muted">{lead}</p>}
    </header>
  );
}

export function SectionHead({ index, title, href }: { index: string; title: string; href?: string }) {
  return (
    <div className="mb-8 flex items-end justify-between border-b border-line pb-4">
      <h2 className="flex items-baseline gap-3 font-serif text-2xl">
        <span className="font-mono text-xs text-accent">{index}</span>
        {title}
      </h2>
      {href && (
        <Link href={href} className="group flex items-center gap-1 text-sm text-muted hover:text-fg">
          すべて見る
          <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
        </Link>
      )}
    </div>
  );
}

export const pageWrap = "mx-auto w-full max-w-5xl px-5 py-16 sm:py-20";
export const fmtDate = (d: string) => d.slice(0, 10).replaceAll("-", ".");
