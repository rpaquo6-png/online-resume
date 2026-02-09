import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Section } from "@/components/Section";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { getLanguageLevelScore } from "@/components/LanguageCard";
import { LanguagesSection } from "@/components/LanguagesSection";
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
  const sortedExperiences = [...experiences].sort((a, b) => {
    const aStart = Number(a.start);
    const bStart = Number(b.start);
    return bStart - aStart;
  });
  const educationTimelineRecord = {
    id: "edu_1",
    start: dictionary.education.schoolYears,
    end: ""
  };
  const timelineRecords = [...sortedExperiences, educationTimelineRecord];
  const timelineItems = {
    ...dictionary.experience.items,
    [educationTimelineRecord.id]: {
      role: dictionary.education.title,
      company: dictionary.education.school,
      location: "",
      summary: dictionary.education.degree,
      achievements: [dictionary.education.thesis, dictionary.education.exchanges]
    }
  };

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
  const sortedLanguages = [...dictionary.languages.items].sort(
    (a, b) => getLanguageLevelScore(b.level) - getLanguageLevelScore(a.level)
  );

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
          <div
            className="text-justify text-foreground/90 [&_b]:font-normal [&_b]:text-blue-600"
            dangerouslySetInnerHTML={{ __html: dictionary.about.body }}
          />
        </Section>

        <Section id="experience" title={dictionary.experience.title}>
          <div id="education" className="scroll-mt-24" />
          {dictionary.experience.intro ? (
            <p className="mb-6 text-foreground/80">{dictionary.experience.intro}</p>
          ) : null}
          <ExperienceTimeline records={timelineRecords} items={timelineItems} />
        </Section>

        <Section id="skills" title={dictionary.skills.title}>
          <SkillsGrid items={dictionary.skills.items} />
        </Section>

        <Section id="tools" title={dictionary.tools.title}>
          <SkillsGrid items={dictionary.tools.items} />
        </Section>

        <Section id="languages" title={dictionary.languages.title}>
          <LanguagesSection items={sortedLanguages} />
        </Section>

        <Section id="interests" title={dictionary.interests.title}>
          <SkillsGrid items={dictionary.interests.items} />
        </Section>

        <Section id="contact" title={dictionary.contact.title}>
          <div className="glass-card">
            <p className="mb-4 text-foreground/85">{dictionary.contact.body}</p>
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
