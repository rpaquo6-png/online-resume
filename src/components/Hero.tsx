import Image from "next/image";
import { calculateAge, calculateYearsOfExperience } from "@/lib/utils";
import type { TranslationDictionary } from "@/types";

type Props = {
  dictionary: TranslationDictionary;
};

export function Hero({ dictionary }: Props) {
  const age = calculateAge(dictionary.hero.birthDateIso);
  const firstExperienceStartYear = 2015;
  const yearsOfExperience = calculateYearsOfExperience(firstExperienceStartYear);

  return (
    <section className="section-shell py-6 sm:py-8">
      <div className="fade-up grid gap-8 lg:grid-cols-[1fr_2fr] lg:items-start">
        <div className="mx-auto w-full max-w-xs lg:mx-0 lg:w-[19.5rem] lg:max-w-none">
          <div className="mx-auto aspect-square w-full max-w-xs lg:mx-0 lg:max-w-none">
            <Image
              src="/images/profile-placeholder.jpg"
              alt={`${dictionary.hero.firstName} ${dictionary.hero.lastName}`}
              width={420}
              height={420}
              priority
              className="h-full w-full rounded-full object-cover object-[center_34%]"
            />
          </div>
        </div>

        <div className="lg:col-start-2">
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
            {dictionary.hero.firstName} <span className="text-accent">{dictionary.hero.lastName}</span>
          </h1>
          <p className="mt-4 text-lg text-foreground/85">{dictionary.hero.role}</p>
          <p className="mt-4 text-foreground/80">{dictionary.hero.intro}</p>

          <dl className="mt-6 grid gap-3 sm:grid-cols-3">
            <div className="glass-card p-3">
              <dt className="text-xs uppercase tracking-wide text-foreground/70">{dictionary.hero.ageLabel}</dt>
              <dd className="mt-0.5 text-base font-semibold">{age}</dd>
            </div>
            <div className="glass-card p-3">
              <dt className="text-xs uppercase tracking-wide text-foreground/70">{dictionary.hero.experienceLabel}</dt>
              <dd className="mt-0.5 text-base font-semibold">{yearsOfExperience}</dd>
            </div>
            <div className="glass-card p-3">
              <dt className="text-xs uppercase tracking-wide text-foreground/70">{dictionary.hero.locationLabel}</dt>
              <dd className="mt-0.5 text-sm font-medium">{dictionary.hero.location}</dd>
            </div>
          </dl>
        </div>

      </div>
    </section>
  );
}
