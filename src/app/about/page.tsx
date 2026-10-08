import { site } from "@/config/site";
import { Eyebrow } from "@/components/ui";

export const metadata = { title: "About", description: `${site.name} について` };

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 pb-32 pt-36">
      <Eyebrow>About</Eyebrow>
      <h1 className="text-[clamp(2.6rem,8vw,6rem)] font-semibold leading-none tracking-[-0.04em]">
        {site.name}
      </h1>
      <p className="mt-3 font-mono text-sm text-muted">{site.role}</p>

      <div className="mt-16 space-y-3 text-[clamp(1.5rem,3.6vw,2.6rem)] font-semibold leading-snug tracking-[-0.02em]">
        {site.about.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>

      <div className="mt-16 border-t border-line pt-8">
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-muted">Stack</p>
        <ul className="flex flex-wrap gap-2">
          {site.skills.map((s) => (
            <li key={s} className="rounded-full border border-line px-4 py-1.5 text-sm">
              {s}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
