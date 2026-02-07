import type { TranslationDictionary } from "@/types";

export const en: TranslationDictionary = {
  metadata: {
    title: "Romain Paquereau | Executive Technology Operator",
    description:
      "Executive profile for Chief of Staff, Technology and Head of Tech Programs & Operations roles.",
    siteName: "Romain Paquereau Resume"
  },
  nav: {
    about: "About",
    experience: "Experience",
    education: "Education",
    languages: "Languages",
    skills: "Skills",
    interests: "Interests",
    contact: "Contact",
    downloadCv: "Download CV",
    cvHref: "https://example.com/romain-paquereau-cv.pdf"
  },
  hero: {
    firstName: "Romain",
    lastName: "Paquereau",
    role: "Technology Chief of Staff | Tech Programs & Operations Leader",
    location: "Ile-de-France (open to relocation)",
    locationLabel: "Location",
    ageLabel: "Age",
    intro:
      "Bridging strategy, execution, and technology to scale programs, streamline operations, and drive measurable business outcomes.",
    ctaPrimary: "Contact Me",
    ctaSecondary: "See Experience",
    birthDateIso: "1992-05-17",
    badge: "Executive Resume"
  },
  about: {
    title: "About",
    body: "Experienced operator with a record of optimizing processes and driving large-scale tech initiatives across Europe. Delivers results through rigorous analysis, automation, and cross-functional teamwork. Seeking to accelerate growth in a dynamic setting."
  },
  experience: {
    title: "Experience",
    intro: "Selected roles where technology, governance, and operations were combined to accelerate delivery and growth.",
    items: {
      exp_1: {
        role: "Head of Tech Program Operations",
        company: "NovaScale Group",
        location: "Paris, France",
        summary:
          "Led a multi-country portfolio of strategic programs, aligning product, engineering, and operations priorities.",
        achievements: [
          "Reduced cross-team delivery lead time by 28% through operating cadence redesign and KPI governance.",
          "Built executive reporting automation, saving 12+ hours weekly for leadership teams.",
          "Improved roadmap predictability from 62% to 87% on-time milestones across critical initiatives."
        ]
      },
      exp_2: {
        role: "Senior Program Manager, Technology",
        company: "EuroDigital Ventures",
        location: "Brussels, Belgium",
        summary:
          "Managed enterprise transformation programs spanning tooling standardization, process optimization, and stakeholder alignment.",
        achievements: [
          "Coordinated delivery for 9 cross-functional streams with a consolidated PMO framework.",
          "Cut incident escalation time by 35% through improved governance and cross-team playbooks.",
          "Drove adoption of automation workflows impacting 400+ employees across business and tech units."
        ]
      },
      exp_3: {
        role: "Technology Operations Manager",
        company: "Atlas Commerce",
        location: "Milan, Italy",
        summary:
          "Supported European scale-up by structuring program governance and operational performance management.",
        achievements: [
          "Implemented portfolio tracking standards improving decision speed at board-level reviews.",
          "Partnered with engineering leads to increase release throughput by 22% year-over-year.",
          "Streamlined vendor and budget governance, improving visibility across strategic spend."
        ]
      }
    }
  },
  education: {
    title: "Education",
    schoolYears: "2010-2025",
    school:
      "ISTEC, Institute of Higher Education in Business and Marketing, Paris - France",
    degree:
      "Master in International Marketing of Luxury Goods and Services",
    thesis:
      "Thesis on start-up and corporate partnerships in open innovation",
    exchanges:
      "International exchange semesters, MUIC Bangkok (Thailand) and UCSC Milan (Italy)"
  },
  languages: {
    title: "Languages",
    items: [
      { name: "French", level: "Native" },
      { name: "English", level: "Fluent" },
      { name: "Spanish", level: "Beginner" },
      { name: "Indonesian", level: "Beginner" }
    ]
  },
  skills: {
    title: "Professional Skills",
    items: [
      "Project management",
      "Stakeholder management",
      "Product delivery",
      "Automation and AI (n8n)",
      "Productivity suites (G-Suite)"
    ]
  },
  interests: {
    title: "Interests",
    items: [
      "Entrepreneurship and investing",
      "Blockchain, web and AI enthusiast",
      "Languages and cultural discovery",
      "Travel, trekking and outdoor sports",
      "Underwater observation and marine life"
    ]
  },
  contact: {
    title: "Let's Connect",
    body: "Open to executive technology roles where strategic planning and operational excellence are core growth drivers.",
    emailLabel: "Email",
    email: "romain@example.com",
    cta: "Start a conversation"
  },
  footer: {
    rights: "All rights reserved."
  },
  ui: {
    languageLabel: "Language",
    themeLight: "Light",
    themeDark: "Dark",
    navAriaLabel: "Primary navigation"
  }
};
