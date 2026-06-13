export interface Certification {
  name: string;
  issuer: string;
  year: number;
  url?: string;
  credentialId?: string;
}

export const certifications: Certification[] = [
  // GitHub Skills (via Bootcamp exercises)
  {
    name: "Desarrollo Web con React",
    issuer: "Código Facilito",
    year: 2024,
    url: "https://codigofacilito.com/usuarios/aparilli",
  },
  {
    name: "TypeScript Profesional",
    issuer: "Código Facilito",
    year: 2024,
    url: "https://codigofacilito.com/usuarios/aparilli",
  },
  {
    name: "React Router y Componentes Avanzados",
    issuer: "Código Facilito",
    year: 2024,
    url: "https://codigofacilito.com/usuarios/aparilli",
  },
  {
    name: "Testing en React con Jest",
    issuer: "Código Facilito",
    year: 2024,
    url: "https://codigofacilito.com/usuarios/aparilli",
  },
  {
    name: "HTML5 & CSS3 Intermedio-Avanzado",
    issuer: "NextU",
    year: 2023,
    url: "https://github.com/andresparilli/NextU_HTML",
  },
  {
    name: "Bootstrap & Foundation Framework",
    issuer: "NextU",
    year: 2023,
    url: "https://github.com/andresparilli/NextU",
  },
  {
    name: "Desarrollo Web Full Stack (proyecto final)",
    issuer: "Código Facilito — Bootcamp G3",
    year: 2024,
    url: "https://github.com/andresparilli/cf-bc-reactg3-proyecto",
    credentialId: "cf-bc-reactg3-proyecto",
  },
  {
    name: "Python Avanzado",
    issuer: "Código Facilito",
    year: 2023,
    url: "https://github.com/andresparilli/Bootcamp-de-Python-Avanzado",
  },
  {
    name: "Django Testing",
    issuer: "Código Facilito",
    year: 2023,
    url: "https://github.com/andresparilli/django-test",
  },
  {
    name: "CSS & Responsive Design",
    issuer: "SoloLearn",
    year: 2022,
    url: "https://github.com/andresparilli/sololearn_sandbox",
  },
  {
    name: "Desarrollo de Plugins WordPress",
    issuer: "Universidad del Istmo",
    year: 2022,
    url: "https://github.com/andresparilli/mapa-psicologia-social",
  },
];