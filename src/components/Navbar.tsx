"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems, site } from "@/config/site";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-bg/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-4 px-5">
        <Link href="/" className="font-serif text-lg tracking-tight">
          {site.name}
        </Link>
        <nav aria-label="メイン" className="flex items-center gap-1 text-sm">
          {navItems.map(({ href, label }) => {
            const active = pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                aria-current={active ? "page" : undefined}
                className={`rounded-full px-3 py-1.5 transition-colors ${
                  active ? "bg-accent-soft text-accent" : "text-muted hover:text-fg"
                }`}
              >
                {label}
              </Link>
            );
          })}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
