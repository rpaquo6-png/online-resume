import type { TranslationDictionary } from "@/types";

export const es: TranslationDictionary = {
  metadata: {
    title: "Romain Paquereau | Liderazgo Tecnologico Ejecutivo",
    description:
      "Perfil ejecutivo para roles como Chief of Staff, Technology y Head of Tech Programs & Operations.",
    siteName: "CV de Romain Paquereau"
  },
  nav: {
    about: "Perfil",
    experience: "Experiencia",
    education: "Educacion",
    languages: "Idiomas",
    skills: "Habilidades",
    interests: "Intereses",
    contact: "Contacto",
    downloadCv: "Descargar CV",
    cvHref: "https://example.com/romain-paquereau-cv.pdf"
  },
  hero: {
    firstName: "Romain",
    lastName: "Paquereau",
    role: "Chief of Staff de Tecnologia | Lider de Programas y Operaciones Tech",
    location: "Ile-de-France (disponible para reubicacion)",
    locationLabel: "Ubicacion",
    ageLabel: "Edad",
    intro:
      "Conecto estrategia, ejecucion y tecnologia para escalar programas, optimizar operaciones y generar impacto medible.",
    ctaPrimary: "Contactarme",
    ctaSecondary: "Ver experiencia",
    birthDateIso: "1992-05-17",
    badge: "Resume ejecutivo"
  },
  about: {
    title: "Sobre mi",
    body: "Operador experimentado con historial de optimizacion de procesos y liderazgo de iniciativas tecnologicas de gran escala en Europa. Entrega resultados mediante analisis riguroso, automatizacion y trabajo cross-funcional. Busca acelerar crecimiento en un entorno dinamico."
  },
  experience: {
    title: "Experiencia",
    intro: "Roles clave donde tecnologia, gobernanza y operaciones se unieron para acelerar resultados.",
    items: {
      exp_1: {
        role: "Head of Tech Program Operations",
        company: "NovaScale Group",
        location: "Paris, Francia",
        summary:
          "Lidere un portafolio multinacional de programas estrategicos, alineando prioridades de producto, ingenieria y operaciones.",
        achievements: [
          "Reduccion del lead time de entrega en 28% mediante rediseño de cadencias operativas y gobernanza de KPIs.",
          "Automatizacion del reporting ejecutivo, ahorrando mas de 12 horas semanales a equipos directivos.",
          "Mejora de la predictibilidad de roadmap de 62% a 87% en hitos criticos."
        ]
      },
      exp_2: {
        role: "Senior Program Manager, Technology",
        company: "EuroDigital Ventures",
        location: "Bruselas, Belgica",
        summary:
          "Gestione programas de transformacion empresarial con estandarizacion de herramientas, mejora de procesos y alineacion de stakeholders.",
        achievements: [
          "Coordinacion de 9 corrientes cross-funcionales con un marco PMO consolidado.",
          "Reduccion del tiempo de escalado de incidentes en 35% gracias a mejor gobernanza y playbooks.",
          "Impulso a la adopcion de workflows de automatizacion para mas de 400 colaboradores."
        ]
      },
      exp_3: {
        role: "Technology Operations Manager",
        company: "Atlas Commerce",
        location: "Milan, Italia",
        summary:
          "Apoye la expansion europea estructurando gobernanza de programas y gestion de rendimiento operativo.",
        achievements: [
          "Implementacion de estandares de seguimiento de portafolio para acelerar decisiones de direccion.",
          "Trabajo conjunto con lideres de ingenieria para aumentar el throughput de releases en 22% interanual.",
          "Optimice la gobernanza de proveedores y presupuesto para mejorar visibilidad del gasto estrategico."
        ]
      }
    }
  },
  education: {
    title: "Educacion",
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
    title: "Idiomas",
    items: [
      { name: "Frances", level: "Nativo" },
      { name: "Ingles", level: "Fluido" },
      { name: "Espanol", level: "Principiante" },
      { name: "Indonesio", level: "Principiante" }
    ]
  },
  skills: {
    title: "Habilidades profesionales",
    items: [
      "Gestion de proyectos",
      "Gestion de stakeholders",
      "Entrega de producto",
      "Automatizacion e IA (n8n)",
      "Suites de productividad (G-Suite)"
    ]
  },
  interests: {
    title: "Intereses",
    items: [
      "Emprendimiento e inversion",
      "Entusiasta de blockchain, web e IA",
      "Idiomas y descubrimiento cultural",
      "Viajes, trekking y deportes al aire libre",
      "Observacion submarina y vida marina"
    ]
  },
  contact: {
    title: "Hablemos",
    body: "Disponible para roles ejecutivos de tecnologia donde la planificacion estrategica y la excelencia operativa impulsen crecimiento.",
    emailLabel: "Email",
    email: "romain@example.com",
    cta: "Iniciar conversacion"
  },
  footer: {
    rights: "Todos los derechos reservados."
  },
  ui: {
    languageLabel: "Idioma",
    themeLight: "Claro",
    themeDark: "Oscuro",
    navAriaLabel: "Navegacion principal"
  }
};
