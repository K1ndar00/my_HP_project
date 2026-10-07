import Link from "next/link";
import { sourceLabel } from "@/lib/feeds";
import type { ArticleItem } from "@/lib/articles";
import { fmtDate } from "./ui";

export function ArticleRow({ item }: { item: ArticleItem }) {
  const body = (
    <>
      <div className="flex items-center gap-3 font-mono text-[11px] text-muted sm:w-40 sm:shrink-0 sm:flex-col sm:items-start sm:gap-2">
        <time dateTime={item.date}>{fmtDate(item.date)}</time>
        <span className="rounded-full border border-emerald/40 px-2.5 py-0.5 text-emerald">
          {sourceLabel[item.source]}
        </span>
      </div>
      <div className="min-w-0 flex-1">
        <h3 className="text-xl font-semibold leading-snug tracking-tight transition-colors group-hover:text-emerald">
          {item.title}
          {item.external && <span className="ml-2 text-muted">↗</span>}
        </h3>
        {item.excerpt && <p className="mt-2 line-clamp-2 text-sm text-muted">{item.excerpt}</p>}
      </div>
    </>
  );
  const cls = "group flex flex-col gap-3 border-b border-line py-7 sm:flex-row sm:gap-8";
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
