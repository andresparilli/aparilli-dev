import Link from "next/link";
import styles from "./Hero.module.css";
import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Background grid */}
      <div className={styles.grid} aria-hidden="true" />

      <div className={styles.content}>
        {/* Astro badge */}
        <div className={styles.astroBadge}>
          <span className={styles.astroIcon}>✦</span>
          <span>{profile.astrology.sun}</span>
          <span className={styles.dot}>·</span>
          <span>{profile.astrology.ascendant} Asc</span>
          <span className={styles.dot}>·</span>
          <span>{profile.astrology.resonance}</span>
        </div>

        {/* Name */}
        <h1 className={styles.name}>{profile.name}</h1>

        {/* Title */}
        <p className={styles.title}>
          <span className={styles.titleOrg}>The U For You</span>
          <span className={styles.titleSep}>·</span>
          <span>IT Director</span>
          <span className={styles.titleSep}>·</span>
          <span className={styles.titleOrg}>Grupo Plus Tech</span>
          <span className={styles.titleSep}>·</span>
          <span>CEO</span>
        </p>

        {/* Tagline */}
        <p className={styles.tagline}>&ldquo;{profile.tagline}&rdquo;</p>

        {/* CTAs */}
        <div className={styles.ctas}>
          <Link href="/projects" className="btn btn-primary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="7" height="7" rx="1" />
              <rect x="14" y="3" width="7" height="7" rx="1" />
              <rect x="3" y="14" width="7" height="7" rx="1" />
              <rect x="14" y="14" width="7" height="7" rx="1" />
            </svg>
            Ver proyectos
          </Link>
          <Link href="/cv" className="btn btn-secondary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10 9 9 9 8 9" />
            </svg>
            Descargar CV
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className={styles.scroll} aria-hidden="true">
          <div className={styles.scrollLine} />
          <span>scroll</span>
        </div>
      </div>

      {/* Decorative orb */}
      <div className={styles.orb} aria-hidden="true" />
    </section>
  );
}