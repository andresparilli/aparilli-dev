import Hero from "@/components/sections/Hero";
import ProjectsGrid from "@/components/sections/ProjectsGrid";
import styles from "./page.module.css";
import { profile } from "@/data/profile";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProjectsGrid />

      {/* Quick bio strip */}
      <section className={styles.bioStrip}>
        <div className="container">
          <div className={styles.bioGrid}>
            <div>
              <p className="section-label">Biografía</p>
              <p className={styles.bioText}>
                {profile.bio.replace(/\n/g, " ").trim()}
              </p>
            </div>
            <div className={styles.bioStats}>
              <div className={styles.stat}>
                <span className={styles.statNum}>7+</span>
                <span className={styles.statLabel}>años en tecnología</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNum}>500+</span>
                <span className={styles.statLabel}>estudiantes activos</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNum}>6+</span>
                <span className={styles.statLabel}>agentes IA activos</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}