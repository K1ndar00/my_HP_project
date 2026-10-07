import { notFound } from "next/navigation";
import {
  getAllPosts,
  getPostBySlug,
  getAdjacentPosts,
  markdownToHtml,
} from "@/lib/markdown";
import { CalendarDays, ArrowLeft, Tag, Folder, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const result = getPostBySlug(slug);
  if (!result) return {};
  return {
    title: `${result.post.title} | Blog`,
    description: result.post.excerpt,
  };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const result = getPostBySlug(slug);
  if (!result) notFound();

  const { post, content } = result;
  const { prev, next } = getAdjacentPosts(slug);

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <Link
        href="/blog"
        className="mb-8 inline-flex items-center gap-1 text-sm text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 transition-colors"
      >
        <ArrowLeft size={14} /> Blog 一覧へ戻る
      </Link>

      <article className="space-y-6">
        <header className="space-y-4">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4">
            <span className="flex items-center gap-1 text-sm text-slate-500 dark:text-slate-400">
              <CalendarDays size={14} />
              {new Date(post.date).toLocaleDateString("ja-JP")}
            </span>
            {post.category && (
              <Link
                href={`/blog?category=${encodeURIComponent(post.category)}`}
                className="flex items-center gap-1 text-sm text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 transition-colors"
              >
                <Folder size={14} />
                {post.category}
              </Link>
            )}
            {post.tags && post.tags.length > 0 && (
              <div className="flex items-center gap-1">
                <Tag size={14} className="text-slate-400" />
                <div className="flex flex-wrap gap-1.5">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </header>

        <hr className="border-slate-200 dark:border-slate-800" />

        <div
          className="prose prose-slate dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: markdownToHtml(content) }}
        />
      </article>

      {/* Prev / Next navigation */}
      {(prev || next) && (
        <nav
          className="mt-12 grid grid-cols-2 gap-4 border-t border-slate-200 pt-8 dark:border-slate-800"
          aria-label="前後の記事"
        >
          <div>
            {prev && (
              <Link
                href={`/blog/${prev.slug}`}
                className="group flex flex-col gap-1 rounded-lg border border-slate-200 p-4 hover:border-slate-400 dark:border-slate-800 dark:hover:border-slate-600 transition-colors"
              >
                <span className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
                  <ChevronLeft size={13} /> 前の記事
                </span>
                <span className="text-sm font-medium text-slate-900 group-hover:underline dark:text-slate-100 line-clamp-2">
                  {prev.title}
                </span>
              </Link>
            )}
          </div>
          <div>
            {next && (
              <Link
                href={`/blog/${next.slug}`}
                className="group flex flex-col items-end gap-1 rounded-lg border border-slate-200 p-4 hover:border-slate-400 dark:border-slate-800 dark:hover:border-slate-600 transition-colors text-right"
              >
                <span className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
                  次の記事 <ChevronRight size={13} />
                </span>
                <span className="text-sm font-medium text-slate-900 group-hover:underline dark:text-slate-100 line-clamp-2">
                  {next.title}
                </span>
              </Link>
            )}
          </div>
        </nav>
      )}
    </div>
  );
}
