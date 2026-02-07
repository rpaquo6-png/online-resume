import type { TranslationDictionary } from "@/types";

export const fr: TranslationDictionary = {
  metadata: {
    title: "Romain Paquereau | Leadership Technologie",
    description:
      "Profil executif pour des roles de Chief of Staff, Technology et Head of Tech Programs & Operations.",
    siteName: "CV de Romain Paquereau"
  },
  nav: {
    about: "Profil",
    experience: "Experience",
    education: "Formation",
    languages: "Langues",
    skills: "Competences",
    interests: "Interets",
    contact: "Contact",
    downloadCv: "Telecharger le CV",
    cvHref: "https://example.com/romain-paquereau-cv.pdf"
  },
  hero: {
    firstName: "Romain",
    lastName: "Paquereau",
    role: "Chief of Staff Technologie | Leader Programmes & Operations Tech",
    location: "Île-de-France (ouvert a la relocation)",
    locationLabel: "Localisation",
    ageLabel: "Age",
    intro:
      "A l'intersection de la strategie, de l'execution et de la technologie pour accelerer les programmes, optimiser les operations et creer un impact mesurable.",
    ctaPrimary: "Me contacter",
    ctaSecondary: "Voir l'experience",
    birthDateIso: "1992-05-17",
    badge: "Resume executif"
  },
  about: {
    title: "A propos",
    body: "Operateur experimente avec un solide historique d'optimisation des processus et de pilotage d'initiatives tech a grande echelle en Europe. Delivre des resultats par l'analyse rigoureuse, l'automatisation et la collaboration cross-fonctionnelle. Souhaite accelerer la croissance dans un environnement dynamique."
  },
  experience: {
    title: "Experience",
    intro: "Roles selectionnes ou la technologie, la gouvernance et les operations ont ete combinees pour accelerer la performance.",
    items: {
      exp_1: {
        role: "Head of Tech Program Operations",
        company: "NovaScale Group",
        location: "Paris, France",
        summary:
          "Pilotage d'un portefeuille multi-pays de programmes strategiques en alignant produit, ingenierie et operations.",
        achievements: [
          "Reduction de 28% du lead time de livraison grace a une nouvelle cadence de pilotage et des KPI unifies.",
          "Mise en place d'un reporting executif automatise, economisant plus de 12h par semaine pour les equipes de direction.",
          "Amelioration de la predictibilite roadmap de 62% a 87% sur les jalons critiques."
        ]
      },
      exp_2: {
        role: "Senior Program Manager, Technology",
        company: "EuroDigital Ventures",
        location: "Bruxelles, Belgique",
        summary:
          "Conduite de programmes de transformation enterprise: standardisation des outils, optimisation des processus et alignement des parties prenantes.",
        achievements: [
          "Coordination de 9 streams cross-fonctionnels via un cadre PMO consolide.",
          "Reduction de 35% du temps d'escalade incident grace a une gouvernance renforcee.",
          "Acceleration de l'adoption de workflows d'automatisation pour plus de 400 collaborateurs."
        ]
      },
      exp_3: {
        role: "Technology Operations Manager",
        company: "Atlas Commerce",
        location: "Milan, Italie",
        summary:
          "Structuration de la gouvernance programme et du pilotage de performance pour soutenir la croissance europeenne.",
        achievements: [
          "Mise en place de standards de suivi portefeuille augmentant la vitesse de decision au niveau direction.",
          "Partenariat avec les leads engineering pour augmenter de 22% le throughput de releases.",
          "Rationalisation de la gouvernance budget et fournisseurs avec meilleure visibilite sur les depenses strategiques."
        ]
      }
    }
  },
  education: {
    title: "Formation",
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
    title: "Langues",
    items: [
      { name: "Francais", level: "Natif" },
      { name: "Anglais", level: "Courant" },
      { name: "Espagnol", level: "Debutant" },
      { name: "Indonesien", level: "Debutant" }
    ]
  },
  skills: {
    title: "Competences professionnelles",
    items: [
      "Gestion de projet",
      "Gestion des parties prenantes",
      "Delivery produit",
      "Automatisation et IA (n8n)",
      "Suites de productivite (G-Suite)"
    ]
  },
  interests: {
    title: "Centres d'interet",
    items: [
      "Entrepreneuriat et investissement",
      "Passionne par la blockchain, le web et l'IA",
      "Langues et decouverte culturelle",
      "Voyage, trekking et sports outdoor",
      "Observation sous-marine et vie marine"
    ]
  },
  contact: {
    title: "Entrons en contact",
    body: "Ouvert aux roles executives technologie ou la planification strategique et l'excellence operationnelle accelerent la croissance.",
    emailLabel: "Email",
    email: "romain@example.com",
    cta: "Demarrer un echange"
  },
  footer: {
    rights: "Tous droits reserves."
  },
  ui: {
    languageLabel: "Langue",
    themeLight: "Clair",
    themeDark: "Sombre",
    navAriaLabel: "Navigation principale"
  }
};
