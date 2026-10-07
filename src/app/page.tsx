import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { getAllWorksFromNotion } from "@/lib/notion";
import { getAllPosts } from "@/lib/markdown";
import { getNoteArticles } from "@/lib/note";
import { ProjectCard } from "@/components/ProjectCard";
import { PostList } from "@/components/PostList";
import { NoteCard } from "@/components/NoteCard";

export const revalidate = 3600;

const NOTE_USERNAME = process.env.NOTE_USERNAME ?? "";

export default async function Home() {
  const [projects, posts, noteArticles] = await Promise.all([
    getAllWorksFromNotion().then((list) => list.slice(0, 3)),
    Promise.resolve(getAllPosts().slice(0, 3)),
    getNoteArticles(NOTE_USERNAME, 3),
  ]);

  return (
    <div className="mx-auto max-w-5xl px-4 py-16 space-y-20">
      {/* Hero */}
      <section className="space-y-6 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-5xl">
          こんにちは 👋
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-slate-600 dark:text-slate-400">
          作品・思考・日々の記録を発信するパーソナルサイトです。
          仕事のご依頼や共通の興味を持つ方はお気軽にご連絡ください。
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/works"
            className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-slate-700 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-300 transition-colors"
          >
            作品を見る <ArrowRight size={16} />
          </Link>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800 transition-colors"
          >
            ブログを読む <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Latest Works */}
      {projects.length > 0 && (
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
              最近の作品
            </h2>
            <Link
              href="/works"
              className="flex items-center gap-1 text-sm text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 transition-colors"
            >
              すべて見る <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </section>
      )}

      {/* Latest Posts */}
      {posts.length > 0 && (
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
              最近の記事
            </h2>
            <Link
              href="/blog"
              className="flex items-center gap-1 text-sm text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 transition-colors"
            >
              すべて見る <ArrowRight size={14} />
            </Link>
          </div>
          <PostList posts={posts} />
        </section>
      )}

      {/* note 最新記事 */}
      {noteArticles.length > 0 && (
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
              note の記事
            </h2>
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
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {noteArticles.map((article) => (
              <NoteCard key={article.id} article={article} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
