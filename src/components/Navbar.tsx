import Link from "next/link";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { ThemeToggle } from "@/components/ThemeToggle";
import type { Locale, TranslationDictionary } from "@/types";

type Props = {
  locale: Locale;
  dictionary: TranslationDictionary;
};

export function Navbar({ locale, dictionary }: Props) {
  const links = [
    { href: "#about", label: dictionary.nav.about },
    { href: "#experience", label: dictionary.nav.experience },
    { href: "#education", label: dictionary.nav.education },
    { href: "#contact", label: dictionary.nav.contact }
  ];

  return (
    <header className="sticky top-0 z-50 border-b bg-background/85 backdrop-blur">
      <div className="section-shell flex min-h-16 items-center justify-between gap-4">
        <Link href={`/${locale}`} className="text-sm font-semibold tracking-wide sm:text-base">
          {dictionary.hero.firstName} {dictionary.hero.lastName}
        </Link>

        <nav className="hidden items-center gap-4 md:flex" aria-label={dictionary.ui.navAriaLabel}>
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-foreground/85 transition hover:text-accent">
              {link.label}
            </a>
          ))}
          <a
            href={dictionary.nav.cvHref}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border px-3 py-1.5 text-sm transition hover:border-accent hover:text-accent"
          >
            {dictionary.nav.downloadCv}
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher locale={locale} ariaLabel={dictionary.ui.languageLabel} />
          <ThemeToggle lightLabel={dictionary.ui.themeLight} darkLabel={dictionary.ui.themeDark} />
        </div>
      </div>
    </header>
  );
}
