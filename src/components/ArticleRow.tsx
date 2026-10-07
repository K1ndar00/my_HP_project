import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { sourceLabel, type Source } from "@/lib/feeds";
import { fmtDate } from "./ui";

export type ArticleItem = {
  source: Source | "diary";
  title: string;
  excerpt: string;
  date: string;
  /** 内部記事は /blog/slug、外部記事は外部 URL */
  href: string;
  external: boolean;
};

export function ArticleRow({ item }: { item: ArticleItem }) {
  const body = (
    <>
      <div className="flex items-center gap-3 font-mono text-[11px] text-muted sm:w-40 sm:shrink-0 sm:flex-col sm:items-start sm:gap-1">
        <time dateTime={item.date}>{fmtDate(item.date)}</time>
        <span className="rounded-full bg-accent-soft px-2 py-0.5 text-accent">
          {sourceLabel[item.source]}
        </span>
      </div>
      <div className="min-w-0 flex-1">
        <h3 className="flex items-start gap-2 font-serif text-lg leading-snug transition-colors group-hover:text-accent">
          {item.title}
          {item.external && <ArrowUpRight size={16} className="mt-1 shrink-0 text-muted" />}
        </h3>
        {item.excerpt && <p className="mt-1.5 line-clamp-2 text-sm text-muted">{item.excerpt}</p>}
      </div>
    </>
  );
  const cls = "group flex flex-col gap-3 border-b border-line py-6 sm:flex-row sm:gap-8";
  return item.external ? (
    <a href={item.href} target="_blank" rel="noopener noreferrer" className={cls}>
      {body}
    </a>
  ) : (
    <Link href={item.href} className={cls}>
      {body}
    </Link>
  );
}
