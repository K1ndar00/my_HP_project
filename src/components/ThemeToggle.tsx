"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  return (
    <button
      type="button"
      aria-label="テーマを切り替える"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="grid size-9 place-items-center rounded-full text-muted transition-colors hover:bg-accent-soft hover:text-fg"
    >
      <Sun size={17} className="hidden dark:block" />
      <Moon size={17} className="dark:hidden" />
    </button>
  );
}
