import { site } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-5 py-8 text-xs text-muted">
        <p>© {new Date().getFullYear()} {site.name}</p>
        <p className="font-mono">Next.js · TypeScript · Tailwind CSS · Motion</p>
      </div>
    </footer>
  );
}
