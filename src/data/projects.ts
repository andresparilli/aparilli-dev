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
    name: "The U For You",
    description: "Plataforma CRM para servicios de inmigración y educación internacional.",
    longDescription:
      "Sistema completo de gestión de estudiantes, seguimiento de casos, automatización de comunicaciones y dashboard analítico. 500+ estudiantes activos.",
    url: "https://tu4u.com",
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
    repo: "https://github.com/grupoplustech/caminartebaruta",
    year: 2022,
    tags: ["Next.js", "TypeScript", "CSS Modules", "Leaflet.js"],
    status: "maintained",
    featured: true,
  },
  {
    name: "Wellness Hub (TWH)",
    description: "Portal médico con sistema fiscal DGI Panamá.",
    longDescription:
      "Sistema médico con pacientes, doctores, citas, historiales y facturación DGI automática para Panamá. Integrado con pasarelas de pago.",
    year: 2024,
    tags: ["Next.js", "TypeScript", "PostgreSQL", "DGI Panama", "Stripe"],
    status: "active",
    featured: false,
  },
  {
    name: "Ganadero 507",
    description: "Plataforma de gestión ganadera para Venezuela.",
    longDescription:
      "Sistema de registro de ganado, inventario, ventas, historia clínica animal y reportes para ranchers venezolanos.",
    year: 2024,
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Charts"],
    status: "maintained",
    featured: false,
  },
  {
    name: "OpenClaw Ecosystem",
    description: "Ecosistema de agentes IA orquestados para operaciones.",
    longDescription:
      "Alf (orquestador), Grace (monitoreo), Jagu (CRM), Handy (WhatsApp), French (fitness coach), Mel (gestión de relación). Todos conectados vía Telegram.",
    year: 2024,
    tags: ["OpenClaw", "Agents IA", "Telegram Bot", "Python", "Node.js"],
    status: "active",
    featured: false,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);