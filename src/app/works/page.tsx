import { getAllWorks } from "@/lib/content";
import { WorkCard } from "@/components/WorkCard";
import { Eyebrow } from "@/components/ui";

export const metadata = { title: "Works", description: "作ったものの一覧" };

export default function WorksPage() {
  const works = getAllWorks();
  return (
    <div className="mx-auto max-w-5xl px-5 pb-32 pt-36">
      <Eyebrow>Works</Eyebrow>
      <h1 className="text-[clamp(2.6rem,8vw,6rem)] font-semibold leading-none tracking-[-0.04em]">
        作ったもの。
      </h1>
      <div className="mt-16 grid gap-5 md:grid-cols-2">
        {works.map((w, i) => (
          <WorkCard key={w.slug} work={w} index={i} />
        ))}
      </div>
    </div>
  );
}
