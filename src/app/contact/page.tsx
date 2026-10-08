import { site } from "@/config/site";
import { Eyebrow } from "@/components/ui";

export const metadata = { title: "Contact", description: `${site.name} への連絡先` };

const linkCls =
  "group flex items-center justify-between gap-4 rounded-2xl border border-line bg-surface px-6 py-5 transition-colors hover:border-emerald/60";

export default function ContactPage() {
  const github = site.social.github ? `https://github.com/${site.social.github}` : "";
  const hasAny = Boolean(site.email || github);

  return (
    <div className="mx-auto max-w-5xl px-5 pb-32 pt-36">
      <Eyebrow>Contact</Eyebrow>
      <h1 className="text-[clamp(2.6rem,8vw,6rem)] font-semibold leading-none tracking-[-0.04em]">
        連絡先。
      </h1>

      <ul className="mt-16 max-w-xl space-y-3">
        {site.email && (
          <li>
            <a href={`mailto:${site.email}`} className={linkCls}>
              <span>
                <span className="block font-mono text-xs uppercase tracking-[0.2em] text-muted">Email</span>
                <span className="mt-1 block text-lg font-semibold">{site.email}</span>
              </span>
              <span className="text-muted transition-colors group-hover:text-emerald">→</span>
            </a>
          </li>
        )}
        {github && (
          <li>
            <a href={github} target="_blank" rel="noopener noreferrer" className={linkCls}>
              <span>
                <span className="block font-mono text-xs uppercase tracking-[0.2em] text-muted">GitHub</span>
                <span className="mt-1 block text-lg font-semibold">@{site.social.github}</span>
              </span>
              <span className="text-muted transition-colors group-hover:text-emerald">↗</span>
            </a>
          </li>
        )}
      </ul>
      {!hasAny && <p className="mt-16 text-muted">準備中です。</p>}
    </div>
  );
}
