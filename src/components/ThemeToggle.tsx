"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

type Props = {
  lightLabel: string;
  darkLabel: string;
};

export function ThemeToggle({ lightLabel, darkLabel }: Props) {
  const { setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setMounted(true);
    const root = document.documentElement;
    const updateFromDom = () => setIsDark(root.classList.contains("dark"));
    updateFromDom();

    const observer = new MutationObserver(updateFromDom);
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  if (!mounted) {
    return <button className="h-11 w-[88px] rounded-full border bg-background/80" aria-hidden="true" />;
  }

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? lightLabel : darkLabel}
      aria-pressed={isDark}
      className={`relative h-11 w-[88px] overflow-hidden rounded-full border transition ${
        isDark ? "bg-[#1f2329] border-[#3a414b]" : "bg-[#f0f2f4] border-[#d6dce2]"
      }`}
    >
      <span
        aria-hidden="true"
        className={`absolute top-1/2 z-10 h-9 w-9 -translate-y-1/2 rounded-full shadow-md transition-all duration-300 ${
          isDark ? "right-1 bg-[#f2f4f7]" : "left-1 bg-[#262b33]"
        }`}
      />
      <span className="absolute inset-0 flex items-center justify-between px-4 text-base leading-none">
        <span aria-hidden="true" className={isDark ? "opacity-30" : "opacity-100"}>
          ☼
        </span>
        <span aria-hidden="true" className={isDark ? "opacity-100" : "opacity-30"}>
          ☾
        </span>
      </span>
    </button>
  );
}
