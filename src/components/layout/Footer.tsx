import Link from "next/link";
import styles from "./Footer.module.css";
import { profile } from "@/data/profile";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <span className={styles.logo}>
            <span className={styles.logoMark}>@</span>aparilli
          </span>
          <p className={styles.tagline}>{profile.tagline}</p>
        </div>

        <nav className={styles.nav}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/cv">CV</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <div className={styles.social}>
          <a href={`https://t.me/${profile.telegram.replace("@", "")}`} target="_blank" rel="noopener noreferrer">
            Telegram
          </a>
          <a href={`https://${profile.github}`} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href={`mailto:${profile.email}`}>
            Email
          </a>
        </div>
      </div>

      <div className={styles.bottom}>
        <span>© {year} Andrés Parilli. Caracas, Venezuela.</span>
      </div>
    </footer>
  );
}