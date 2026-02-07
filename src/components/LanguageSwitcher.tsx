"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, type Locale } from "@/types";

const labels: Record<Locale, string> = {
  en: "EN",
  fr: "FR",
  es: "ES"
};

type Props = {
  locale: Locale;
  ariaLabel: string;
};

export function LanguageSwitcher({ locale, ariaLabel }: Props) {
  const pathname = usePathname();

  const pathWithoutLocale = pathname.replace(/^\/(en|fr|es)/, "") || "/";

  return (
    <div aria-label={ariaLabel} className="inline-flex rounded-full border bg-background p-1">
      {locales.map((item) => {
        const href = `/${item}${pathWithoutLocale === "/" ? "" : pathWithoutLocale}`;
        const active = item === locale;

        return (
          <Link
            key={item}
            href={href}
            className={`rounded-full px-2.5 py-1 text-xs font-medium transition ${
              active ? "bg-accent text-white" : "text-foreground hover:text-accent"
            }`}
          >
            {labels[item]}
          </Link>
        );
      })}
    </div>
  );
}
