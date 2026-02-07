"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { locales, type Locale } from "@/types";

const localeOptions: Record<Locale, { short: string; label: string; flag: string }> = {
  en: { short: "EN", label: "English", flag: "🇬🇧" },
  fr: { short: "FR", label: "Français", flag: "🇫🇷" },
  es: { short: "ES", label: "Español", flag: "🇪🇸" }
};

type Props = {
  locale: Locale;
  ariaLabel: string;
};

export function LanguageSwitcher({ locale, ariaLabel }: Props) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  const pathWithoutLocale = pathname.replace(/^\/(en|fr|es)/, "") || "/";
  const current = localeOptions[locale];

  useEffect(() => {
    function handleOutsideClick(event: MouseEvent) {
      if (!rootRef.current) {
        return;
      }
      if (!rootRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        aria-label={ariaLabel}
        aria-haspopup="menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
        className="inline-flex h-11 items-center gap-2 rounded-full border bg-background px-4 text-sm font-medium transition hover:border-accent hover:text-accent"
      >
        <span aria-hidden="true">{current.flag}</span>
        <span>{current.short}</span>
        <span aria-hidden="true">▾</span>
      </button>

      {isOpen && (
        <div
          role="menu"
          aria-label={ariaLabel}
          className="absolute right-0 z-50 mt-2 min-w-40 rounded-xl border bg-background p-1 shadow-soft"
        >
          {locales.map((item) => {
            const href = `/${item}${pathWithoutLocale === "/" ? "" : pathWithoutLocale}`;
            const option = localeOptions[item];
            const active = item === locale;

            return (
              <Link
                key={item}
                href={href}
                role="menuitem"
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition ${
                  active ? "bg-accent text-white" : "text-foreground hover:bg-muted hover:text-accent"
                }`}
              >
                <span aria-hidden="true">{option.flag}</span>
                <span>{option.label}</span>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
