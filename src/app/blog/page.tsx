import { getAllPosts } from "@/lib/content";
import { ArticleRow } from "@/components/ArticleRow";
import { Eyebrow } from "@/components/ui";

export const metadata = { title: "Blog", description: "日記の一覧" };

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-5xl px-5 pb-32 pt-36">
      <Eyebrow>Blog</Eyebrow>
      <h1 className="text-[clamp(2.6rem,8vw,6rem)] font-semibold leading-none tracking-[-0.04em]">
        書いたもの。
      </h1>

      <div className="mt-16 border-t border-line">
        {posts.length === 0 && <p className="py-12 text-muted">まだ記事がありません。</p>}
        {posts.map((p) => (
          <ArticleRow key={p.slug} post={p} />
        ))}
      </div>
    </div>
  );
}
