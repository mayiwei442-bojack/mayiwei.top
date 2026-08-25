import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import styles from "./portfolio.module.css";

export function Projects() {
  return (
    <section
      id="projects"
      className={styles.projects}
      aria-labelledby="projects-title"
    >
      <header className={styles.sectionHeader}>
        <div>
          <p className={styles.eyebrow}>Selected work</p>
          <h2 id="projects-title" className={styles.sectionTitle}>
            Projects
          </h2>
        </div>
        <p className={styles.sectionNote}>
          A growing collection of tools and experiments built to make digital
          life a little more human.
        </p>
        <p className={styles.projectCount} aria-label="3 selected projects">
          03
        </p>
      </header>

      <div className={styles.projectList}>
        {projects.map((project) => (
          <ProjectCard key={project.number} project={project} />
        ))}
      </div>
    </section>
  );
}
