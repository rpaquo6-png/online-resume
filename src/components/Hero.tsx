import Image from "next/image";
import { calculateAge } from "@/lib/utils";
import type { TranslationDictionary } from "@/types";

type Props = {
  dictionary: TranslationDictionary;
};

export function Hero({ dictionary }: Props) {
  const age = calculateAge(dictionary.hero.birthDateIso);

  return (
    <section className="section-shell py-12 sm:py-16">
      <div className="fade-up grid gap-8 lg:grid-cols-[1fr_2fr] lg:items-center">
        <div className="glass-card mx-auto w-full max-w-xs p-3">
          <Image
            src="/images/profile-placeholder.jpg"
            alt={`${dictionary.hero.firstName} ${dictionary.hero.lastName}`}
            width={420}
            height={420}
            priority
            className="h-auto w-full rounded-xl object-cover"
          />
        </div>

        <div>
          <p className="text-sm uppercase tracking-[0.18em] text-accent">{dictionary.hero.badge}</p>
          <h1 className="mt-3 text-4xl font-semibold leading-tight sm:text-5xl">
            {dictionary.hero.firstName} <span className="text-accent">{dictionary.hero.lastName}</span>
          </h1>
          <p className="mt-4 text-lg text-foreground/85">{dictionary.hero.role}</p>
          <p className="mt-4 text-foreground/80">{dictionary.hero.intro}</p>

          <dl className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="glass-card p-4">
              <dt className="text-xs uppercase tracking-wide text-foreground/70">{dictionary.hero.ageLabel}</dt>
              <dd className="mt-1 text-lg font-semibold">{age}</dd>
            </div>
            <div className="glass-card p-4">
              <dt className="text-xs uppercase tracking-wide text-foreground/70">{dictionary.hero.locationLabel}</dt>
              <dd className="mt-1 text-sm font-medium">{dictionary.hero.location}</dd>
            </div>
          </dl>

          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#contact" className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white">
              {dictionary.hero.ctaPrimary}
            </a>
            <a href="#experience" className="rounded-full border px-5 py-2.5 text-sm font-semibold">
              {dictionary.hero.ctaSecondary}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
