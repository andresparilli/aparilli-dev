import Link from "next/link";
import { projects, type Project } from "@/data/projects";
import styles from "./projects.module.css";

export default function ProjectsPage() {
  return (
    <main className={styles.main}>
      <div className="container">
        <div className={styles.header}>
          <Link href="/" className={styles.back}>
            ← Volver
          </Link>
          <p className="section-label">Portfolio</p>
          <h1 className={styles.title}>Proyectos</h1>
          <p className={styles.subtitle}>
            Sistemas que construyo, mantengo y sigo mejorando.
          </p>
        </div>

        <div className={styles.grid}>
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </main>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const statusLabel = {
    active: "Activo",
    maintained: "Mantenido",
    archived: "Archivado",
  };

  return (
    <article className={styles.card}>
      <div className={styles.cardHeader}>
        <h2 className={styles.cardName}>{project.name}</h2>
        <div className={styles.meta}>
          <span className={styles.year}>{project.year}</span>
          <span className={styles.status} data-status={project.status}>
            {statusLabel[project.status]}
          </span>
        </div>
      </div>

      <p className={styles.description}>{project.description}</p>
      <p className={styles.longDesc}>{project.longDescription}</p>

      <div className={styles.tags}>
        {project.tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>

      <div className={styles.links}>
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Visitar →
          </a>
        )}
        {project.repo && (
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            Repo ↗
          </a>
        )}
      </div>
    </article>
  );
}