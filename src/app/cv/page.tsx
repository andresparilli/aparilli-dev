import Link from "next/link";
import { certifications } from "@/data/certifications";
import { workExperience, education, skills, languages } from "@/data/cv";
import { generateSEO } from "@/components/layout/SEO";
import styles from "./cv.module.css";

export const metadata = generateSEO({
  title: "Curriculum Vitae — Andrés E. Parilli",
  description: "Trayectoria profesional, educación, aptitudes, certificaciones e idiomas de Andrés E. Parilli.",
  path: "/cv",
});

export default function CVPage() {
  return (
    <main className={styles.main}>
      <div className="container">
        <div className={styles.header}>
          <Link href="/" className={styles.back}>← Volver</Link>
          <h1 className={styles.title}>Curriculum Vitae</h1>
          <p className={styles.subtitle}>Andrés E. Parilli — IT Director & Tech Entrepreneur</p>
        </div>

        {/* Experiencia laboral */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>💼 Experiencia</h2>
          <div className={styles.timeline}>
            {workExperience.map((job, i) => (
              <div key={i} className={styles.job}>
                <div className={styles.jobHeader}>
                  <h3 className={styles.jobRole}>{job.role}</h3>
                  <span className={styles.jobPeriod}>{job.period}</span>
                </div>
                <p className={styles.jobOrg}>{job.org}{job.location ? ` · ${job.location}` : ""}</p>
                {job.description && <p className={styles.jobDesc}>{job.description}</p>}
              </div>
            ))}
          </div>
        </section>

        {/* Educación */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>🎓 Educación</h2>
          <div className={styles.timeline}>
            {education.map((edu, i) => (
              <div key={i} className={styles.job}>
                <div className={styles.jobHeader}>
                  <h3 className={styles.jobRole}>{edu.degree}</h3>
                  <span className={styles.jobPeriod}>{edu.period}</span>
                </div>
                <p className={styles.jobOrg}>{edu.institution}{edu.location ? ` · ${edu.location}` : ""}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Aptitudes */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>🛠️ Aptitudes</h2>
          <div className={styles.skillsGrid}>
            {skills.map((group) => (
              <div key={group.category} className={styles.skillGroup}>
                <h3 className={styles.skillCategory}>{group.category}</h3>
                <div className={styles.tags}>
                  {group.items.map((item) => (
                    <span key={item} className="tag">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certificaciones */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>📜 Certificaciones</h2>
          <div className={styles.certsGrid}>
            {certifications.map((cert, i) => (
              <div key={i} className={styles.cert}>
                <h3 className={styles.certName}>{cert.name}</h3>
                <p className={styles.certIssuer}>{cert.issuer} · {cert.year}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Idiomas */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>🌐 Idiomas</h2>
          <div className={styles.langsGrid}>
            {languages.map((lang) => (
              <div key={lang.language} className={styles.lang}>
                <span className={styles.langName}>{lang.language}</span>
                <span className={styles.langLevel}>{lang.level}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}