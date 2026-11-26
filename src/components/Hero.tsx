import { site } from "@/config/site";

export function Hero() {
  return (
    <section className="relative flex min-h-[min(100svh,52rem)] items-center overflow-hidden px-5 pb-24 pt-28">
      {/* 背景の光(エメラルドと補色のローズ) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,#000_55%,transparent)]"
      >
        <div className="absolute left-[8%] top-[18%] size-[46vmax] rounded-full bg-emerald-deep/25 blur-[120px]" />
        <div className="absolute bottom-[6%] right-[6%] size-[38vmax] rounded-full bg-rose/20 blur-[130px]" />
      </div>

      <div className="relative mx-auto flex w-full max-w-5xl flex-col gap-12 min-[1064px]:px-5 lg:flex-row lg:items-end lg:justify-between">
        {/* 名前 */}
        <div>
          <p
            className="mb-6 animate-fade-up font-mono text-xs uppercase tracking-[0.35em] text-emerald"
            style={{ animationDelay: "0.1s" }}
          >
            {site.role}
          </p>

          <h1 className="text-[clamp(3.4rem,11.5vw,9.5rem)] font-semibold leading-[0.92] tracking-[-0.045em]">
            {site.nameLines.map((line, i) => (
              <span key={line} className="block overflow-hidden pb-[0.08em]">
                <span
                  className={`block animate-rise ${i === site.nameLines.length - 1 ? "grad-text" : ""}`}
                  style={{ animationDelay: `${0.25 + i * 0.14}s` }}
                >
                  {line}
                </span>
              </span>
            ))}
          </h1>

          <p
            className="mt-8 animate-fade-up text-lg text-muted sm:text-xl"
            style={{ animationDelay: "0.9s" }}
          >
            {site.tagline}
          </p>
        </div>

        {/* 技術スタック(名前の右側) */}
        <aside
          aria-label="技術スタック"
          className="animate-fade-up lg:pb-3"
          style={{ animationDelay: "1.1s" }}
        >
          <p className="mb-5 font-mono text-xs uppercase tracking-[0.3em] text-muted">Stack</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-3 lg:flex-col lg:gap-y-3">
            {site.skills.map((s, i) => (
              <li key={s} className="flex items-center gap-3 text-base sm:text-lg">
                <span
                  aria-hidden
                  className={`size-1.5 rounded-full ${i % 2 === 0 ? "bg-emerald" : "bg-rose"}`}
                />
                {s}
              </li>
            ))}
          </ul>
        </aside>
      </div>

      <div
        aria-hidden
        className="absolute inset-x-0 bottom-8 flex flex-col items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-muted"
      >
        Scroll
        <span className="relative h-10 w-px overflow-hidden bg-white/15">
          <span className="absolute inset-x-0 top-0 h-1/2 animate-bob bg-emerald" />
        </span>
      </div>
    </section>
  );
}
