export interface Skill {
  name: string;
  level: 1 | 2 | 3; // 1=familiar, 2=competente, 3=experto
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export const skills: SkillCategory[] = [
  {
    name: "Infraestructura",
    skills: [
      { name: "Linux", level: 3 },
      { name: "Docker / Coolify", level: 3 },
      { name: "Traefik", level: 3 },
      { name: "PostgreSQL", level: 2 },
      { name: "Redis", level: 2 },
      { name: "Nginx", level: 2 },
    ],
  },
  {
    name: "Automatización & IA",
    skills: [
      { name: "OpenClaw", level: 3 },
      { name: "n8n", level: 3 },
      { name: "Agents IA (Claude/GPT/Gemini)", level: 3 },
      { name: "Webhooks / APIs", level: 3 },
      { name: "Cron / Bash", level: 3 },
    ],
  },
  {
    name: "Frontend",
    skills: [
      { name: "Next.js", level: 2 },
      { name: "TypeScript", level: 2 },
      { name: "CSS Modules", level: 2 },
      { name: "React", level: 2 },
      { name: "HTML / CSS", level: 3 },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", level: 2 },
      { name: "Firebase", level: 2 },
      { name: "Python", level: 2 },
      { name: "API REST", level: 3 },
    ],
  },
  {
    name: "Negocios & Gestión",
    skills: [
      { name: "IT Management", level: 3 },
      { name: "Tech Strategy", level: 3 },
      { name: "CRM Design", level: 3 },
      { name: "Team Leadership", level: 2 },
      { name: "Business Development", level: 2 },
    ],
  },
];

export const allSkillNames = skills.flatMap((cat) => cat.skills.map((s) => s.name));