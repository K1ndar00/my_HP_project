export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-line px-3 py-0.5 font-mono text-[11px] text-muted">
      {children}
    </span>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-emerald">{children}</p>
  );
}

export const fmtDate = (d: string) => d.slice(0, 10).replaceAll("-", ".");
