import Link from "next/link";
import { profile } from "@/data/profile";
import { workExperience } from "@/data/cv";
import { generateSEO } from "@/components/layout/SEO";
import styles from "./about.module.css";

export const metadata = generateSEO({
  title: "Sobre Mí — Andrés E. Parilli",
  description: "IT Director, Emprendedor y Orquestador de Sistemas. Biografía, trayectoria profesional y resonancia astrológica.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <main className={styles.main}>
      <div className="container">
        <header className={styles.header}>
          <Link href="/" className={styles.back}>
            ← Volver
          </Link>
          <p className="section-label">Biografía</p>
          <h1 className={styles.title}>Sobre Mí</h1>
          <p className={styles.subtitle}>
            IT Director, Emprendedor y Orquestador de Sistemas.
          </p>
        </header>

        <div className={styles.grid}>
          {/* Columna Principal - Bio y Timeline */}
          <section className={styles.bioSection} style={{ padding: 0 }}>
            <p className={styles.bioParagraph}>
              ¡Hola! Soy {profile.name}. Nací en Caracas, Venezuela en 1986. Mi camino
              en la vida comenzó con una historia de adopción que me enseñó, desde muy temprano,
              el valor del propósito, la resiliencia y a ver las situaciones complejas desde
              el mapa completo.
            </p>
            <p className={styles.bioParagraph}>
              Llevo más de 7 años inmerso en el ecosistema tecnológico, dirigiendo proyectos y
              construyendo sistemas digitales que no solo resuelven problemas reales, sino que
              están diseñados para durar. Actualmente me desempeño como **IT Director en The U For You**
              y como **CEO de Grupo Plus Tech**, donde lidero equipos técnicos y administro
              infraestructuras que soportan cientos de usuarios concurrentes.
            </p>
            <p className={styles.bioParagraph}>
              Mi pasión técnica abarca desde la administración de servidores en la nube utilizando
              herramientas como Linux, Docker y Coolify, hasta la orquestación avanzada de flujos con
              n8n y agentes de Inteligencia Artificial (a través de nuestro ecosistema OpenClaw). Creo
              firmemente en la automatización con criterio y en el diseño de soluciones limpias que
              permitan a los equipos operar de manera autónoma y ágil.
            </p>

            {/* Timeline Profesional */}
            <div className={styles.timelineSection}>
              <h2 className={styles.sectionTitle}>💼 Trayectoria Profesional</h2>
              <div className={styles.timeline}>
                {workExperience.slice(0, 4).map((job, idx) => (
                  <div key={idx} className={styles.timelineItem}>
                    <div className={styles.roleMeta}>
                      <span>{job.period}</span>
                      <span>{job.location || "Remoto"}</span>
                    </div>
                    <h3 className={styles.roleTitle}>
                      {job.role} @ {job.org}
                    </h3>
                    {job.description && (
                      <p className={styles.roleDesc}>{job.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Columna Secundaria - Widgets e Info Astrológica */}
          <aside className={styles.sidebar}>
            {/* Carta Astrológica */}
            <div className={`card ${styles.astroCard}`}>
              <h3 className={styles.astroTitle}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
                Resonancia Astrológica
              </h3>
              <p style={{ fontSize: "0.9rem", marginBottom: "1rem" }}>
                Conecto profundamente con la espiritualidad y la astrología. Esta es la configuración de mi mapa:
              </p>
              <div className={styles.astroGrid}>
                <div className={styles.astroItem}>
                  <span className={styles.astroLabel}>Sol</span>
                  <span className={styles.astroVal}>{profile.astrology.sun}</span>
                </div>
                <div className={styles.astroItem}>
                  <span className={styles.astroLabel}>Luna</span>
                  <span className={styles.astroVal}>{profile.astrology.moon}</span>
                </div>
                <div className={styles.astroItem}>
                  <span className={styles.astroLabel}>Ascendente</span>
                  <span className={styles.astroVal}>{profile.astrology.ascendant}</span>
                </div>
                <div className={styles.astroItem}>
                  <span className={styles.astroLabel}>Rol Solar</span>
                  <span className={styles.astroVal}>Líder / Visión</span>
                </div>
              </div>
              <div className={styles.resonance}>
                <strong>Arquetipo:</strong> {profile.astrology.resonance}
              </div>
            </div>

            {/* Datos Personales y Familia */}
            <div className={`card ${styles.familyCard}`}>
              <h3 className={styles.familyTitle}>Fuera del Trabajo</h3>
              <p style={{ fontSize: "0.9rem", marginBottom: "1rem" }}>
                Lo que sostiene mis días y me mantiene conectado:
              </p>
              <ul className={styles.familyList}>
                <li>Mi familia: Erika (esposa) y Ricardo (hijo).</li>
                <li>El bienestar, la meditación y el fitness.</li>
                <li>Estudios sobre comportamiento de sistemas autónomos y el futuro de la inteligencia artificial.</li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
