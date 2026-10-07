import { notFound } from "next/navigation";
import { getWorkBySlugFromNotion } from "@/lib/notion";
import { GitFork, ExternalLink, ArrowLeft, CalendarDays } from "lucide-react";
import Link from "next/link";

export const revalidate = 3600;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const result = await getWorkBySlugFromNotion(slug);
  if (!result) return {};
  return {
    title: `${result.project.title} | Works`,
    description: result.project.description,
  };
}

export default async function WorkDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const result = await getWorkBySlugFromNotion(slug);
  if (!result) notFound();

  const { project, content } = result;

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <Link
        href="/works"
        className="mb-8 inline-flex items-center gap-1 text-sm text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 transition-colors"
      >
        <ArrowLeft size={14} /> Works 一覧へ戻る
      </Link>

      <article className="space-y-6">
        <header className="space-y-4">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100">
            {project.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4">
            <span className="flex items-center gap-1 text-sm text-slate-500 dark:text-slate-400">
              <CalendarDays size={14} />
              {new Date(project.date).toLocaleDateString("ja-JP")}
            </span>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 transition-colors"
              >
                <GitFork size={14} /> GitHub
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 transition-colors"
              >
                <ExternalLink size={14} /> デモを見る
              </a>
            )}
          </div>

          {project.tags && project.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <p className="text-slate-600 dark:text-slate-400">
            {project.description}
          </p>
        </header>

        <hr className="border-slate-200 dark:border-slate-800" />

        <div
          className="prose prose-slate dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </article>
    </div>
  );
}
