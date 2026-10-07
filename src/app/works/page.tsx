import { getAllWorksFromNotion } from "@/lib/notion";
import { ProjectCard } from "@/components/ProjectCard";

export const revalidate = 3600;

export const metadata = {
  title: "Works | My Site",
  description: "制作した作品の一覧",
};

export default async function WorksPage() {
  const projects = await getAllWorksFromNotion();

  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <div className="mb-10 space-y-2">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100">
          Works
        </h1>
        <p className="text-slate-600 dark:text-slate-400">
          これまでに制作した作品をご紹介します。
        </p>
      </div>

      {projects.length === 0 ? (
        <p className="text-center text-slate-500 dark:text-slate-400 py-16">
          まだ作品がありません。
        </p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      )}
    </div>
  );
}
