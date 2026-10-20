import Image from "next/image";
import type { Project } from "@/data/projects";
import { ProjectPlaceholder } from "./ProjectPlaceholder";
import styles from "./portfolio.module.css";

type ProjectCardProps = {
  project: Project;
};

const cardStyles: Record<Project["visual"], string> = {
  editor: styles.cardEditor,
  campus: styles.cardCampus,
  kitchen: styles.cardKitchen,
  meal: styles.cardMeal,
  monitor: styles.cardMonitor,
};

export function ProjectCard({ project }: ProjectCardProps) {
  const href = project.liveUrl ?? project.repoUrl;
  const destination = project.liveUrl ? "线上项目" : "GitHub 仓库";

  return (
    <a
      className={`${styles.projectCard} ${cardStyles[project.visual]}`}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`在新标签页打开 ${project.title} ${destination}`}
    >
      <article className={styles.cardInner}>
        <div className={styles.cardCopy}>
          <div className={styles.cardMeta}>
            <span className={styles.projectNumber}>{project.number}</span>
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
            <ul className={styles.tags} aria-label="技术标签">
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
              alt={`${project.title} 项目预览`}
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
