"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems, site } from "@/config/site";

export function Navbar() {
  const pathname = usePathname();
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur-xl backdrop-saturate-150">
      <div className="mx-auto flex h-12 max-w-5xl items-center justify-between px-5">
        <Link href="/" className="text-sm font-semibold tracking-tight">
          {site.name}
        </Link>
        <nav aria-label="メイン" className="flex items-center gap-1 text-xs">
          {navItems.map(({ href, label }) => {
            const active = !href.includes("#") && pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                aria-current={active ? "page" : undefined}
                className={`rounded-full px-3 py-2 transition-colors ${
                  active ? "text-fg" : "text-muted hover:text-fg"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
