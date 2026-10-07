import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllWorks, getWork } from "@/lib/content";
import { Tag, fmtDate } from "@/components/ui";

export function generateStaticParams() {
  return getAllWorks().map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = getWork(slug);
  return data ? { title: data.work.title, description: data.work.description } : {};
}

export default async function WorkPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = getWork(slug);
  if (!data) notFound();
  const { work, html } = data;

  return (
    <article className="mx-auto max-w-3xl px-5 pb-32 pt-36">
      <Link href="/works" className="text-sm text-muted transition-colors hover:text-emerald">
        ← Works
      </Link>
      <h1 className="mt-8 text-[clamp(2.2rem,6vw,4rem)] font-semibold leading-[1.1] tracking-[-0.03em]">
        {work.title}
      </h1>
      <p className="mt-4 text-lg text-muted">{work.description}</p>
      <dl className="mt-8 grid grid-cols-[4rem_1fr] gap-x-4 gap-y-2 border-y border-line py-6 text-sm">
        <dt className="text-muted">公開</dt>
        <dd>{fmtDate(work.date)}</dd>
        {work.role && (<><dt className="text-muted">役割</dt><dd>{work.role}</dd></>)}
        {work.period && (<><dt className="text-muted">期間</dt><dd>{work.period}</dd></>)}
      </dl>
      <div className="mt-6 flex flex-wrap items-center gap-2">
        {work.tags.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
        {work.github && (
          <a href={work.github} target="_blank" rel="noopener noreferrer" className="ml-2 text-sm text-emerald hover:underline">
            ソース ↗
          </a>
        )}
        {work.demo && (
          <a href={work.demo} target="_blank" rel="noopener noreferrer" className="text-sm text-emerald hover:underline">
            デモ ↗
          </a>
        )}
      </div>
      <div className="prose mt-12" dangerouslySetInnerHTML={{ __html: html }} />
    </article>
  );
}
