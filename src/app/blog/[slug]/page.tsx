import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPost } from "@/lib/content";
import { Tag, fmtDate } from "@/components/ui";

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = getPost(slug);
  return data ? { title: data.post.title, description: data.post.excerpt } : {};
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = getPost(slug);
  if (!data) notFound();
  const { post, html } = data;

  return (
    <article className="mx-auto max-w-3xl px-5 pb-32 pt-36">
      <Link href="/blog" className="text-sm text-muted transition-colors hover:text-emerald">
        ← Blog
      </Link>
      <time className="mt-8 block font-mono text-xs text-muted">{fmtDate(post.date)}</time>
      <h1 className="mt-3 text-[clamp(2rem,5.5vw,3.6rem)] font-semibold leading-[1.15] tracking-[-0.03em]">
        {post.title}
      </h1>
      <div className="mt-5 flex flex-wrap gap-2">
        {post.tags.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </div>
      <div className="prose mt-12" dangerouslySetInnerHTML={{ __html: html }} />
    </article>
  );
}
