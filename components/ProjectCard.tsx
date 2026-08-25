import Image from "next/image";
import type { Project } from "@/data/projects";
import { ProjectPlaceholder } from "./ProjectPlaceholder";
import styles from "./portfolio.module.css";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const href = project.liveUrl ?? project.repoUrl;
  const destination = project.liveUrl ? "Live project" : "GitHub repository";

  return (
    <a
      className={`${styles.projectCard} ${styles[`card${project.number}`]}`}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${project.title} — open ${destination} in a new tab`}
    >
      <article className={styles.cardInner}>
        <div className={styles.cardCopy}>
          <div className={styles.cardMeta}>
            <span className={styles.projectNumber}>{project.number}</span>
            {project.status === "development" && (
              <span className={styles.status}>
                <span className={styles.statusDot} aria-hidden="true" />
                In Development
              </span>
            )}
          </div>

          <div className={styles.cardMain}>
            <div>
              <h3 className={styles.cardTitle}>{project.title}</h3>
              {project.subtitle && (
                <p className={styles.cardSubtitle}>{project.subtitle}</p>
              )}
            </div>
            <p className={styles.cardDescription}>{project.description}</p>
          </div>

          <div className={styles.cardBottom}>
            <ul className={styles.tags} aria-label="Technologies">
              {project.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
            <span className={styles.destination}>
              {destination}
              <span className={styles.arrow} aria-hidden="true">
                ↗
              </span>
            </span>
          </div>
        </div>

        <div className={styles.cardVisual}>
          {project.image ? (
            <Image
              className={styles.projectImage}
              src={project.image}
              alt={`${project.title} project preview`}
              fill
              sizes="(max-width: 767px) 100vw, 56vw"
            />
          ) : (
            <ProjectPlaceholder project={project} />
          )}
        </div>
      </article>
    </a>
  );
}
