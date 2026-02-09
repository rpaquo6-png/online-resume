export const locales = ["en", "fr", "es"] as const;

export type Locale = (typeof locales)[number];

export type ExperienceRecord = {
  id: string;
  start: string;
  end: string;
};

export type TranslationDictionary = {
  metadata: {
    title: string;
    description: string;
    siteName: string;
  };
  nav: {
    about: string;
    experience: string;
    education: string;
    languages: string;
    skills: string;
    interests: string;
    contact: string;
    downloadCv: string;
    cvHref: string;
  };
  hero: {
    firstName: string;
    lastName: string;
    role: string;
    location: string;
    locationLabel: string;
    ageLabel: string;
    experienceLabel: string;
    yearsUnit: string;
    intro: string;
    ctaPrimary: string;
    ctaSecondary: string;
    birthDateIso: string;
  };
  about: {
    title: string;
    body: string;
  };
  experience: {
    title: string;
    intro: string;
    items: Record<
      string,
      {
        role: string;
        company: string;
        location: string;
        summary: string;
        achievements: string[];
      }
    >;
  };
  education: {
    title: string;
    schoolYears: string;
    school: string;
    degree: string;
    thesis: string;
    exchanges: string;
  };
  languages: {
    title: string;
    items: Array<{ name: string; level: string }>;
  };
  skills: {
    title: string;
    items: string[];
  };
  tools: {
    title: string;
    items: string[];
  };
  interests: {
    title: string;
    items: string[];
  };
  contact: {
    title: string;
    body: string;
    emailLabel: string;
    email: string;
    cta: string;
  };
  footer: {
    rights: string;
  };
  ui: {
    languageLabel: string;
    themeLight: string;
    themeDark: string;
    navAriaLabel: string;
  };
};
