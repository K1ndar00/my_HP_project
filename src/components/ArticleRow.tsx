import Link from "next/link";
import type { Post } from "@/lib/content";
import { fmtDate } from "./ui";

export function ArticleRow({ post }: { post: Post }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col gap-3 border-b border-line py-7 sm:flex-row sm:gap-8"
    >
      <time dateTime={post.date} className="font-mono text-[11px] text-muted sm:w-40 sm:shrink-0">
        {fmtDate(post.date)}
      </time>
      <div className="min-w-0 flex-1">
        <h3 className="text-xl font-semibold leading-snug tracking-tight transition-colors group-hover:text-emerald">
          {post.title}
        </h3>
        {post.excerpt && <p className="mt-2 line-clamp-2 text-sm text-muted">{post.excerpt}</p>}
      </div>
    </Link>
  );
}
