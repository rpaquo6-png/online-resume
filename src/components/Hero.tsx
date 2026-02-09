import Image from "next/image";
import type { TranslationDictionary } from "@/types";

type Props = {
  dictionary: TranslationDictionary;
};

export function Hero({ dictionary }: Props) {
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

          <dl className="mt-5 grid gap-2.5 sm:grid-cols-3">
            <div className="flex h-full min-h-[108px] flex-col justify-start rounded-2xl border border-border/70 bg-background/90 px-2.5 py-2 shadow-[0_2px_10px_rgba(17,24,39,0.06)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(17,24,39,0.12)] sm:px-3 sm:py-2.5">
              <dt className="inline-flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.08em] text-foreground/55 sm:text-xs">
                <svg viewBox="0 0 24 24" className="h-4 w-4 text-foreground/55" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5m0 2c-4.33 0-8 2.17-8 5v1h16v-1c0-2.83-3.67-5-8-5"
                  />
                </svg>
                {dictionary.hero.ageLabel}
              </dt>
              <dd className="mt-1 text-2xl font-bold leading-none text-foreground sm:text-3xl">
                {dictionary.hero.ageValue} {dictionary.hero.ageUnit}
              </dd>
            </div>

            <div className="flex h-full min-h-[108px] flex-col justify-start rounded-2xl border border-border/70 bg-background/90 px-2.5 py-2 shadow-[0_2px_10px_rgba(17,24,39,0.06)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(17,24,39,0.12)] sm:px-3 sm:py-2.5">
              <dt className="inline-flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.08em] text-foreground/55 sm:text-xs">
                <svg viewBox="0 0 24 24" className="h-4 w-4 text-foreground/55" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M10 4h4v2h5v14H5V6h5Zm7 4H7v10h10Zm-3 2v2h2v2h-2v2h-2v-2h-2v-2h2v-2Z"
                  />
                </svg>
                {dictionary.hero.experienceLabel}
              </dt>
              <dd className="mt-1 text-2xl font-bold leading-none text-foreground sm:text-3xl">
                {dictionary.hero.experienceValue}
              </dd>
            </div>

            <div className="flex h-full min-h-[108px] flex-col justify-start rounded-2xl border border-border/70 bg-background/90 px-2.5 py-2 shadow-[0_2px_10px_rgba(17,24,39,0.06)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(17,24,39,0.12)] sm:px-3 sm:py-2.5">
              <dt className="inline-flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.08em] text-foreground/55 sm:text-xs">
                <svg viewBox="0 0 24 24" className="h-4 w-4 text-foreground/55" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7m0 9.5A2.5 2.5 0 1 1 14.5 9 2.5 2.5 0 0 1 12 11.5"
                  />
                </svg>
                {dictionary.hero.locationLabel}
              </dt>
              <dd className="mt-1 text-xl font-bold leading-tight text-foreground sm:text-2xl">
                {dictionary.hero.location}
              </dd>
              {dictionary.hero.locationSubtext ? (
                <p className="mt-2 text-xs font-normal text-foreground/60 sm:text-[13px]">
                  {dictionary.hero.locationSubtext}
                </p>
              ) : null}
            </div>
          </dl>
        </div>

      </div>
    </section>
  );
}
