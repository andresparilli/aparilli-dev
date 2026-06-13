export interface WorkExperience {
  org: string;
  role: string;
  period: string;
  location?: string;
  description?: string;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  location?: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Language {
  language: string;
  level: string;
}

export interface Award {
  name: string;
}

export const workExperience: WorkExperience[] = [
  {
    org: "The U For You",
    role: "IT Director & Lead Developer",
    period: "2019 — presente",
    description: "Plataforma CRM para inmigración y educación internacional. 500+ estudiantes activos. Sistema completo con Firebase, n8n y agentes IA.",
  },
  {
    org: "Grupo Plus Tech",
    role: "CEO & Lead Developer",
    period: "2019 — presente",
    description: "Holding tecnológico. Infraestructura propia con Coolify, ecosistema de agentes IA (Alf, Grace, Jagu, Handy, French, Mel).",
  },
  {
    org: "Caminarte Baruta",
    role: "Fundador & Desarrollador",
    period: "2022 — presente",
    description: "Evento cultural de arte en Caracas. Plataforma web con mapa interactivo, registro de artistas y asistentes.",
  },
  {
    org: "Corporación Altitud, C.A. / Proman",
    role: "Supervisor de Seguridad / Trabajos en Altura",
    period: "2011",
  },
  {
    org: "Refrimaster, C.A.",
    role: "Encargado de Informática",
    period: "2008",
    description: "Soporte técnico y administración de sistemas.",
  },
  {
    org: "CardClub",
    role: "Operador de Campo",
    period: "Enero 2009 — Mayo 2009",
    location: "Chacao",
  },
  {
    org: "Advantel, C.A.",
    role: "Ayudante de Informática",
    period: "2007",
    location: "Las Mercedes, Caracas",
  },
];

export const education: Education[] = [
  {
    institution: "Universidad Nacional Abierta, Caracas",
    degree: "Ingeniería de Sistemas",
    period: "2014 — 2020",
  },
  {
    institution: "NextU",
    degree: "Certificados de Tecnología Digital, Desarrollo Web y Recursos Informáticos",
    period: "2017 — 2018",
  },
  {
    institution: "Instituto Universitario Nuevas Profesiones",
    degree: "Informática",
    period: "2013 — 2014",
  },
  {
    institution: "Universidad Nueva Esparta",
    degree: "Computación",
    period: "2008 — 2010",
  },
  {
    institution: "Código Facilito",
    degree: "Bootcamps (React, Python, Django, TypeScript)",
    period: "2023 — 2024",
  },
];

export const skills: Skill[] = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "CSS Modules", "HTML5", "CSS3"],
  },
  {
    category: "Backend & DB",
    items: ["Node.js", "Python", "Django", "PostgreSQL", "Firebase", "Firestore"],
  },
  {
    category: "Infraestructura",
    items: ["Docker", "Coolify", "Linux", "n8n", "Traefik", "Cloudflare"],
  },
  {
    category: "Agentes IA",
    items: ["OpenClaw", "Agents IA", "Telegram Bot", "Python", "Node.js"],
  },
  {
    category: "CRM & Herramientas",
    items: ["Zoho CRM", "Microsoft Outlook", "Project Planning", "Git", "GitHub"],
  },
];

export const languages: Language[] = [
  { language: "Español", level: "Nativo o Bilingüe" },
  { language: "Inglés", level: "Profesional" },
  { language: "Italiano", level: "Elemental" },
];