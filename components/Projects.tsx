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
            项目
          </h2>
        </div>
        <p className={styles.sectionNote}>
          这里收录了我做过的一些工具和实验。它们解决不同的问题，也记录了我的思考。
        </p>
        <p className={styles.projectCount} aria-label="3 个精选项目">
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
