export interface Project {
  name: string;
  description: string;
  longDescription: string;
  url?: string;
  repo?: string;
  year: number;
  tags: string[];
  status: "active" | "maintained" | "archived";
  featured: boolean;
}

export const projects: Project[] = [
  {
    name: "Be Integrative",
    description: "Plataforma digital médica y portal de atención para Integrative Therapies.",
    longDescription:
      "Sitio web oficial y portal clínico renovado de medicina biológica, preventiva, bioenergética y terapia celular en Caracas y Panamá. Desarrollado con Next.js 16, TypeScript, Tailwind CSS v4 y Firebase Firestore, alojado en VPS con Coolify.",
    url: "https://beintegrative.net",
    repo: "https://github.com/One-Clik-to-Go/beintegrative",
    year: 2026,
    tags: ["Next.js 16", "TypeScript", "Tailwind CSS", "Firebase", "Coolify"],
    status: "active",
    featured: true,
  },
  {
    name: "The Wellness Hub (TWH)",
    description: "Centro Médico Integral de Bienestar — Plataforma multisitio y portal de pacientes.",
    longDescription:
      "Aplicación Next.js 16 multi-subdominio para centro médico de estética y medicina regenerativa en Panamá (sitio público, panel SGC administrativo y portal del paciente). Integrado con Prisma 6, PostgreSQL, Tauri 2 y facturación fiscal DGI.",
    url: "https://thewellnesshubpty.com",
    repo: "https://github.com/One-Clik-to-Go/The-Wellness-Hub",
    year: 2026,
    tags: ["Next.js 16", "React 19", "TypeScript", "Prisma", "PostgreSQL", "Tauri 2", "Coolify"],
    status: "active",
    featured: true,
  },
  {
    name: "Pro Niñez Panamá",
    description: "Plataforma oficial del Estudio Longitudinal de Impacto (2022–2028).",
    longDescription:
      "Plataforma de evaluación infantil para la Asociación Pro Niñez Panameña y Fundación Banco General. Consola de campo offline-first (PWA) con protocolos EGRA/EGMA certificados y protección de datos bajo la Ley 285 de Panamá.",
    url: "https://proninezpanama.app",
    repo: "https://github.com/One-Clik-to-Go/proninezpanama",
    year: 2026,
    tags: ["Next.js 14", "TypeScript", "Firebase", "PWA", "IndexedDB", "Coolify"],
    status: "active",
    featured: true,
  },
  {
    name: "Sniff — Pet Community",
    description: "Super-App multiplataforma para la comunidad de mascotas.",
    longDescription:
      "Ecosistema móvil para dueños de mascotas que incluye Pet Finder, Dog Match, historial médico (Health Vault), y placas inteligentes con códigos QR. Disponible para iOS y Android.",
    url: "https://mysniff.app",
    repo: "https://github.com/One-Clik-to-Go/sniff",
    year: 2026,
    tags: ["React Native", "TypeScript", "iOS", "Android", "QR Tags"],
    status: "active",
    featured: true,
  },
  {
    name: "Mi Futuro (Programa Diseña Tu Futuro)",
    description: "Plataforma de talento joven impulsada por inteligencia artificial.",
    longDescription:
      "Plataforma PWA basada en aptitudes cognitivas para el programa 'Diseña Tu Futuro' en Panamá Norte. Integra modelos de IA (Gemini y Claude) con Next.js y Firebase para la orientación vocacional de jóvenes.",
    repo: "https://github.com/theuforyou/mi-futuro",
    year: 2026,
    tags: ["Next.js", "Firebase", "Gemini API", "Claude API", "PWA"],
    status: "archived",
    featured: true,
  },
  {
    name: "Grupo de Rescate Venezuela",
    description: "Sitio web oficial de la organización voluntaria de rescate y emergencias en Venezuela.",
    longDescription:
      "Plataforma web oficial para el Grupo de Rescate Venezuela (GRV), institución sin fines de lucro enfocada en operaciones de búsqueda, rescate y gestión de emergencias. Construida con Next.js y TypeScript.",
    url: "https://grupoderescatevenezuela.org",
    repo: "https://github.com/rescatevenezuela/grv-website",
    year: 2026,
    tags: ["Next.js", "TypeScript", "React", "CSS Modules"],
    status: "active",
    featured: true,
  },
  {
    name: "FEVEMUN",
    description: "Plataforma digital para la comunidad de Modelos de Naciones Unidas en Venezuela.",
    longDescription:
      "Plataforma web líder diseñada para unificar, empoderar y conectar a la comunidad de Modelos de Naciones Unidas (MUN) a nivel nacional y global. Desarrollada con Next.js, Firebase, TypeScript y Tailwind CSS.",
    url: "https://fevemun.org",
    repo: "https://github.com/grupoplustech/fevemun_app",
    year: 2025,
    tags: ["Next.js", "Firebase", "TypeScript", "Tailwind CSS"],
    status: "maintained",
    featured: true,
  },
  {
    name: "Erikatse Web",
    description: "Plataforma digital para agencia de redacción creativa y eventos.",
    longDescription:
      "Sitio web oficial para Erikatse, agencia especializada en redacción creativa, copywriting profesional y producción ejecutiva de eventos. Construida con Next.js y TypeScript.",
    url: "https://erikatse.com",
    repo: "https://github.com/grupoplustech/erikatse_web",
    year: 2026,
    tags: ["Next.js", "TypeScript", "CSS Modules", "React"],
    status: "active",
    featured: false,
  },
  {
    name: "The U For You",
    description: "Plataforma CRM para servicios de inmigración y educación internacional.",
    longDescription:
      "Sistema completo de gestión de estudiantes, seguimiento de casos, automatización de comunicaciones y dashboard analítico.",
    url: "https://tu4u.com",
    repo: "https://github.com/theuforyou/frontend",
    year: 2019,
    tags: ["Next.js", "Firebase", "n8n", "CRM", "React"],
    status: "active",
    featured: true,
  },
  {
    name: "Grupo Plus Tech",
    description: "Holding tecnológico — infraestructura, automatización y agentes IA.",
    longDescription:
      "Infraestructura de servers propios con Coolify, automatizaciones n8n, y ecosistema de agentes IA orquestados (Alf, Grace, Jagu, Camu, Ninja).",
    url: "https://grupoplustech.com",
    year: 2019,
    tags: ["OpenClaw", "Coolify", "n8n", "Docker", "Linux", "Agents IA"],
    status: "active",
    featured: true,
  },
  {
    name: "Caminarte Baruta",
    description: "Evento cultural de arte en Caracas.",
    longDescription:
      "Plataforma web para el evento anual Caminarte Baruta. Gestión de artistas, programa, mapa interactivo y registro de asistentes.",
    url: "https://caminartebaruta.com",
    repo: "https://github.com/grupoplustech/caminartebaruta",
    year: 2022,
    tags: ["Next.js", "TypeScript", "CSS Modules", "Leaflet.js"],
    status: "maintained",
    featured: true,
  },
  {
    name: "Ganadero 507",
    description: "Sistema multiplataforma de gestión ganadera con Tauri v2 y SQLite.",
    longDescription:
      "Aplicación avanzada para escritorio (Windows, macOS, Linux) y dispositivos móviles (iOS, Android) construida con Tauri v2, Next.js 16, React 19 y SQLite para almacenamiento local fuera de línea.",
    repo: "https://github.com/One-Clik-to-Go/ganadero507",
    year: 2024,
    tags: ["Tauri v2", "Next.js", "React 19", "SQLite", "TypeScript"],
    status: "maintained",
    featured: true,
  },
  {
    name: "OpenClaw Ecosystem",
    description: "Ecosistema de agentes IA orquestados para operaciones.",
    longDescription:
      "Alf (orquestador), Grace (monitoreo), Jagu (CRM), Handy (WhatsApp), French (fitness coach), Mel (gestión de relación). Todos conectados vía Telegram.",
    year: 2024,
    tags: ["OpenClaw", "Agents IA", "Telegram Bot", "Python", "Node.js"],
    status: "active",
    featured: true,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);