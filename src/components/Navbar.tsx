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
    { href: "#skills", label: dictionary.nav.skills },
    { href: "#contact", label: dictionary.nav.contact }
  ];

  return (
    <header className="sticky top-0 z-50">
      <div className="section-shell">
        <div className="flex min-h-16 items-center justify-between gap-4 border-b bg-background/85 backdrop-blur">
          <Link href={`/${locale}`} className="text-sm font-semibold tracking-wide sm:text-base">
            {dictionary.hero.firstName} {dictionary.hero.lastName}
          </Link>

          <nav className="hidden items-center gap-4 md:flex" aria-label={dictionary.ui.navAriaLabel}>
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-foreground/85 transition hover:text-accent"
              >
                {link.label}
              </a>
            ))}
            <a
              href={`mailto:${dictionary.contact.email}`}
              className="inline-flex h-11 items-center rounded-full border px-5 text-sm font-medium transition hover:border-accent hover:text-accent"
            >
              {dictionary.contact.ctaEmail}
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <LanguageSwitcher locale={locale} ariaLabel={dictionary.ui.languageLabel} />
            <ThemeToggle lightLabel={dictionary.ui.themeLight} darkLabel={dictionary.ui.themeDark} />
          </div>
        </div>
      </div>
    </header>
  );
}
