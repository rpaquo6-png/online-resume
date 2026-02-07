import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Section } from "@/components/Section";
import { ExperienceCard } from "@/components/ExperienceCard";
import { SkillsGrid } from "@/components/SkillsGrid";
import { experiences } from "@/data/experiences";
import { getDictionary } from "@/lib/i18n";
import { isLocale } from "@/lib/locale";
import type { Locale } from "@/types";

type Props = {
  params: { locale: string };
};

export default function LocalePage({ params }: Props) {
  const locale = isLocale(params.locale) ? (params.locale as Locale) : "en";
  const dictionary = getDictionary(locale);

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: `${dictionary.hero.firstName} ${dictionary.hero.lastName}`,
    image: "https://example.com/images/profile-placeholder.jpg",
    jobTitle: dictionary.hero.role,
    address: {
      "@type": "PostalAddress",
      addressRegion: "Ile-de-France",
      addressCountry: "FR"
    },
    email: dictionary.contact.email,
    knowsLanguage: dictionary.languages.items.map((item) => item.name)
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      <Navbar locale={locale} dictionary={dictionary} />
      <main>
        <Hero dictionary={dictionary} />

        <Section id="about" title={dictionary.about.title}>
          <div className="glass-card max-w-4xl text-foreground/90">{dictionary.about.body}</div>
        </Section>

        <Section id="experience" title={dictionary.experience.title}>
          <p className="mb-6 max-w-3xl text-foreground/80">{dictionary.experience.intro}</p>
          <div className="grid gap-5">
            {experiences.map((record) => {
              const content = dictionary.experience.items[record.id];
              return <ExperienceCard key={record.id} record={record} content={content} />;
            })}
          </div>
        </Section>

        <Section id="education" title={dictionary.education.title}>
          <div className="glass-card grid gap-3">
            <p className="text-sm text-foreground/70">{dictionary.education.schoolYears}</p>
            <p className="font-medium">{dictionary.education.school}</p>
            <p>{dictionary.education.degree}</p>
            <p>{dictionary.education.thesis}</p>
            <p>{dictionary.education.exchanges}</p>
          </div>
        </Section>

        <Section id="languages" title={dictionary.languages.title}>
          <div className="grid gap-3 sm:grid-cols-2">
            {dictionary.languages.items.map((item) => (
              <div key={item.name} className="glass-card flex items-center justify-between p-4">
                <span className="font-medium">{item.name}</span>
                <span className="text-sm text-foreground/80">{item.level}</span>
              </div>
            ))}
          </div>
        </Section>

        <Section id="skills" title={dictionary.skills.title}>
          <SkillsGrid items={dictionary.skills.items} />
        </Section>

        <Section id="interests" title={dictionary.interests.title}>
          <div className="grid gap-3 sm:grid-cols-2">
            {dictionary.interests.items.map((interest) => (
              <div key={interest} className="glass-card p-4 text-sm">
                {interest}
              </div>
            ))}
          </div>
        </Section>

        <Section id="contact" title={dictionary.contact.title} className="pb-14">
          <div className="glass-card">
            <p className="mb-4 max-w-3xl text-foreground/85">{dictionary.contact.body}</p>
            <p className="mb-4 text-sm text-foreground/75">
              {dictionary.contact.emailLabel}: 
              <a href={`mailto:${dictionary.contact.email}`} className="font-semibold text-accent">
                {dictionary.contact.email}
              </a>
            </p>
            <a
              href={`mailto:${dictionary.contact.email}`}
              className="inline-flex rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white"
            >
              {dictionary.contact.cta}
            </a>
          </div>
        </Section>
      </main>
      <Footer dictionary={dictionary} />
    </>
  );
}
