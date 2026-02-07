"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

type Props = {
  lightLabel: string;
  darkLabel: string;
};

export function ThemeToggle({ lightLabel, darkLabel }: Props) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <button className="rounded-full border px-3 py-1.5 text-sm">...</button>;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? lightLabel : darkLabel}
      className="rounded-full border bg-background px-3 py-1.5 text-sm transition hover:border-accent hover:text-accent"
    >
      {isDark ? lightLabel : darkLabel}
    </button>
  );
}
