import { getAllPosts, getAllCategories } from "@/lib/markdown";
import { getNoteArticles } from "@/lib/note";
import { PostList } from "@/components/PostList";
import { NoteCard } from "@/components/NoteCard";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const revalidate = 3600;

export const metadata = {
  title: "Blog | My Site",
  description: "記事と日々の記録",
};

const NOTE_USERNAME = process.env.NOTE_USERNAME ?? "";

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  const allPosts = getAllPosts();
  const categories = getAllCategories();
  const posts = category
    ? allPosts.filter((p) => p.category === category)
    : allPosts;

  const noteArticles = await getNoteArticles(NOTE_USERNAME, 6);

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 space-y-16">
      {/* ── Markdown 記事 ── */}
      <section className="space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100">
            Blog
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            思考の記録と日々の気づきを書いています。
          </p>
        </div>

        {/* Category filter */}
        {categories.length > 0 && (
          <div className="flex flex-wrap gap-2">
            <Link
              href="/blog"
              className={`rounded-full px-3 py-1 text-sm font-medium transition-colors ${
                !category
                  ? "bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900"
                  : "border border-slate-300 text-slate-600 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-400 dark:hover:bg-slate-800"
              }`}
            >
              すべて
            </Link>
            {categories.map((cat) => (
              <Link
                key={cat}
                href={`/blog?category=${encodeURIComponent(cat)}`}
                className={`rounded-full px-3 py-1 text-sm font-medium transition-colors ${
                  category === cat
                    ? "bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900"
                    : "border border-slate-300 text-slate-600 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-400 dark:hover:bg-slate-800"
                }`}
              >
                {cat}
              </Link>
            ))}
          </div>
        )}

        <PostList posts={posts} />
      </section>

      {/* ── note 記事 ── */}
      {noteArticles.length > 0 && (
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                note の記事
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                note で書いた記事の一覧です。
              </p>
            </div>
            {NOTE_USERNAME && (
              <a
                href={`https://note.com/${NOTE_USERNAME}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 transition-colors"
              >
                note を見る <ArrowUpRight size={14} />
              </a>
            )}
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {noteArticles.map((article) => (
              <NoteCard key={article.id} article={article} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
