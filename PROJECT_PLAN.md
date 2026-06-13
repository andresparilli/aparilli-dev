# aparilli.dev — Plan de Proyecto

> Portfolio personal y CV digital de Andrés E. Parilli.
> Stack: Next.js + TypeScript, sin Tailwind (CSS Modules), deploy en aparilli.dev.
> Repo: https://github.com/andresparilli/aparilli-dev

---

## 1. Concepto & Visión

**"El CV que no se lee, se siente."**

No es un currículo académico — es una **experiencia inmersiva** que refleja la personalidad de Andrés: la mezcla de visión estratégica (IT Director, Grupo Plus Tech) + creatividad astrológica/espiritual + profundidad técnica (infraestructura, automatización, agentes IA).

El sitio funciona como **tarjeta de presentación viva**: alguien aterriza, siente quién es Andrés en 30 segundos, y recuerda el nombre. No es un template de portfolio — es un producto diseñado desde su identidad.

---

## 2. Stack Técnico

| Capa | Tecnología | Razón |
|------|------------|-------|
| Framework | Next.js 15 (App Router) | SSR, performance, ecosistema |
| Lenguaje | TypeScript strict | Seguridad, mantenibilidad |
| Estilos | CSS Modules (sin Tailwind) | request de Andrés |
| Fuentes | Google Fonts (JetBrains Mono + Inter) | Código técnico + tipografía limpia |
| Animaciones | CSS transitions + Intersection Observer | Ligero, sin dependencias |
| Analytics | Plausible o simple script propio | Privacidad, sin cookies |
| Deploy | Coolify (VPS Hetzner) | stack propio, control total |
| Dominio | aparilli.dev (Cloudflare) | ya existente o por configurar |

---

## 3. Arquitectura de Páginas

```
src/
├── app/
│   ├── page.tsx              # Hero + resumen rápido
│   ├── about/page.tsx        # Bio completa + historia personal
│   ├── projects/page.tsx     # Portafolio de proyectos
│   ├── cv/page.tsx           # CV descargable (PDF)
│   ├── contact/page.tsx      # Formulario + links
│   ├── layout.tsx            # Root layout (nav + footer)
│   └── globals.css           # CSS variables + reset
├── components/
│   ├── layout/
│   │   ├── Nav.tsx + Nav.module.css
│   │   ├── Footer.tsx + Footer.module.css
│   │   └── SEO.tsx
│   ├── sections/
│   │   ├── Hero.tsx + .module.css      # Nombre, título, CTA
│   │   ├── Timeline.tsx + .module.css  # Historia profesional
│   │   ├── ProjectsGrid.tsx + .module.css
│   │   ├── SkillsCloud.tsx + .module.css
│   │   └── Testimonials.tsx + .module.css
│   └── ui/
│       ├── Button.tsx + .module.css
│       ├── Card.tsx + .module.css
│       ├── Tag.tsx + .module.css
│       └── SectionLabel.tsx + .module.css
├── data/
│   ├── profile.ts            # Datos biográficos
│   ├── projects.ts           # Lista de proyectos con metadata
│   ├── skills.ts             # Skills categorizados
│   └── timeline.ts           # Eventos profesionales
└── lib/
    ├── seo.ts                # OpenGraph, meta tags
    └── utils.ts              # Helpers (cn, formatDate, etc.)
```

---

## 4. Contenido por Página

### 4.1 Home (/) — Hero

**Objetivo:** Impactar en 5 segundos.

```
┌─────────────────────────────────────────────┐
│  [Nav: About · Projects · CV · Contact]     │
│                                             │
│  Andrés E. Parilli                          │
│  IT Director @ The U For You                │
│  CEO @ Grupo Plus Tech                      │
│                                             │
│  "Construyo sistemas que piensa,            │
│   proyectos que duran, y equipos            │
│   que operan solos."                        │
│                                             │
│  [Ver proyectos]  [Descargar CV]            │
│                                             │
│  ─────────────────────────────────          │
│  [Astrology badge: ♓ Piscis · ♒ Acuario]    │
└─────────────────────────────────────────────┘
```

**Datos del hero:**
- Nombre: Andrés E. Parilli Marcano
- Título: IT Director @ The U For You / CEO @ Grupo Plus Tech
- Tagline: Inspirado en su perfil — "Construyo sistemas que piensan"
- Tag astrológico: visible pero sutil (Piscis/Acuario) — refleja identidad

### 4.2 About (/about) — Bio Completa

**Secciones:**
1. **Biografía corta** (3-4 párrafos, voz en primera persona)
2. **Timeline profesional** — desde carrera hasta hoy (visual, vertical)
3. **Educación y certificaciones**
4. **Valores profesionales** — bullets claros
5. **Fuera del trabajo** — familia (Erika, Ricardo), intereses (astrología, fitness)

**Datos disponibles:**
- Nacido 18 marzo 1986, Caracas, Venezuela
- Adoptado — historia de vida (contar con elegancia, no lástima)
- IT Director @ The U For You desde 2019
- CEO @ Grupo Plus Tech
- Conecta profundamente con astrología y espiritualidad
- Esposo de Erika, padre de Ricardo

### 4.3 Projects (/projects) — Portafolio

**Proyectos a mostrar (prioridad Q2-Q3 2026):**

| # | Proyecto | Descripción | Link |
|---|----------|-------------|------|
| 1 | **The U For You** | Plataforma de servicios de inmigración/educación. 500+ estudiantes. CRM propio. | tu4u.com |
| 2 | **Grupo Plus Tech** | Holding tech — infra, automatización, agentes IA. | grupoplustech.com |
| 3 | **Caminarte** | Evento cultural de arte en Caracas. Presencia de marca personal. | caminarte |
| 4 | **Wellness Hub (TWH)** | Portal médico con sistema fiscal DGI Panamá. | — |
| 5 | **Ganadero 507** | Plataforma ganadera. | — |
| 6 | **OpenClaw Ecosystem** | Agentes IA orquestados (Alf, Grace, Jagu, etc.) | — |

**Formato:** Cards con imagen, nombre, descripción, tags de tecnología, año, link.

### 4.4 CV (/cv) — Descargable

- Botón de descarga PDF
- Versión online scrolleable (timeline visual)
- Secciones: Experiencia, Educación, Habilidades, Contacto

### 4.5 Contact (/contact)

- Formulario (nombre, email, mensaje)
- Links directos: Telegram (@aparilli), LinkedIn, GitHub, Email
- No hay CRM ni automatización compleja — email directo

---

## 5. SEO y Metadata

```ts
// SEO base
{
  title: "Andrés Parilli — IT Director & Tech Entrepreneur",
  description: "IT Director @ The U For You · CEO @ Grupo Plus Tech. 
    Construyo sistemas inteligentes, proyectos duraderos y equipos 
    que operan solos. Caracas, Venezuela.",
  ogImage: "/og-image.png",
  twitter: "@aparilli",
  canonical: "https://aparilli.dev"
}
```

**Sitemap:** generado automáticamente por Next.js.

---

## 6. Design System (CSS Variables)

```css
:root {
  /* Colores — palette oscura con acentos cálidos */
  --bg-primary: #0a0a0f;
  --bg-secondary: #111118;
  --bg-card: #16161f;
  --text-primary: #f0f0f5;
  --text-secondary: #9090a0;
  --accent: #7c5ce0;        /* Púrpura — espíritu + tecnología */
  --accent-warm: #e05c4b;   /* Rojo cálido — fuego de Sagitario */
  --accent-glow: #a78bfa;   /* Glow suave */
  
  /* Tipografía */
  --font-mono: 'JetBrains Mono', monospace;
  --font-sans: 'Inter', system-ui, sans-serif;
  
  /* Espaciado */
  --space-xs: 0.5rem;
  --space-sm: 1rem;
  --space-md: 2rem;
  --space-lg: 4rem;
  --space-xl: 8rem;
  
  /* Bordes */
  --radius: 12px;
  --border: 1px solid rgba(255,255,255,0.08);
}
```

**Dirección visual:** Oscuro, sofisticado, con acentos de luz. Inspirado en interfaces de desarrollo (terminal aesthetic) mezclado con espiritualidad sutil.

---

## 7. Deployment con Coolify

**Flujo:**
1. Push a `main` en GitHub → webhook a Coolify → deploy automático
2. Build: `npm run build` + `npm start`
3. Puerto: 3000
4. Dominio: `aparilli.dev` via Cloudflare proxy

**Archivo de configuración:** `coolify.json` en repo raiz.

**Secrets necesarios:**
- `NEXT_PUBLIC_SITE_URL=https://aparilli.dev`
- `NEXT_PUBLIC_GITHUB=https://github.com/andresparilli`

---

## 8. Roadmap de Implementación

### Fase 1 — Setup + Hero (Día 1-2)
- [ ] Inicializar Next.js en `/root/aparilli-dev/`
- [ ] Configurar CSS Modules + variables de diseño
- [ ] Nav + Footer
- [ ] Hero section
- [ ] Deploy a Coolify (primera versión funcional)

### Fase 2 — Contenido Core (Día 3-4)
- [ ] Página About con bio
- [ ] Timeline component
- [ ] Página Projects con cards
- [ ] SEO + OpenGraph

### Fase 3 — CV + Contact (Día 5)
- [ ] Página CV (visual + PDF)
- [ ] Página Contact
- [ ] Favicon + OG image
- [ ] Sitemap

### Fase 4 — Polish (Día 6-7)
- [ ] Animaciones sutiles (scroll reveal)
- [ ] Responsive mobile
- [ ] Performance (Lighthouse 90+)
- [ ] DNS + SSL en Cloudflare

---

## 9. Datos Reales para el Sitio

### Bio corta
> Soy Andrés Parilli — IT Director de The U For You y CEO de Grupo Plus Tech.
> Llevo 7 años construyendo tecnología que solve problemas reales: 
> plataformas educativas, sistemas de CRM, automatizaciones con agentes IA,
> e infraestructura que aguanta 500+ usuarios concurrentes.
> Nacido en Caracas, adoptado, enamorado de Erika, padre de Ricardo.
> La astrología me enseñó que mi trabajo no es ejecutar — es ver el mapa 
> completo y señalar el norte.

### Tecnologías principales
```ts
const skills = {
  infrastructure: ["Linux", "Docker", "Coolify", "Traefik", "PostgreSQL", "Redis"],
  automation: ["n8n", "OpenClaw", "Agents IA", "Webhooks", "Cron"],
  frontend: ["Next.js", "TypeScript", "CSS Modules"],
  backend: ["Node.js", "Firebase", "Supabase", "API REST"],
  business: ["IT Management", "Tech Strategy", "CRM Design", "Team Leadership"]
}
```

### Links
- Telegram: @aparilli
- GitHub: github.com/andresparilli
- Email: andres@grupoplustech.com
- Web: grupoplustech.com, tu4u.com

---

## 10. Inspiración Visual

**Referencias:**
- [linear.app](https://linear.app) — estética oscura, tipografía mono, minimalismo
- [vercel.com](https://vercel.com) — hero limpio, gradientes sutiles
- [paperclip.dev](https://paperclip.dev) — interfaz de agentes, feel técnico

**Evitar:** portfolios genéricos con gradientes rainbow, cards blancas, tipografía Helvetica.

---

*Plan generado: 2026-06-13*
*Basado en: andres-profile.md, andres-perfil-completo.md, andres-biografia-clave.md, USER.md*