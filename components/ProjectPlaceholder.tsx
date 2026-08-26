import type { Project } from "@/data/projects";
import styles from "./portfolio.module.css";

type ProjectPlaceholderProps = {
  project: Project;
};

export function ProjectPlaceholder({ project }: ProjectPlaceholderProps) {
  if (project.visual === "editor") {
    return (
      <div
        className={`${styles.placeholder} ${styles.editorVisual}`}
        role="img"
        aria-label="AI 图片编辑工作区示意图"
      >
        <div className={styles.editorWindow}>
          <div className={styles.windowBar}>
            <div className={styles.windowDots} aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <span>PICTURE / 001</span>
            <span>82%</span>
          </div>
          <div className={styles.editorBody}>
            <div className={styles.toolRail} aria-hidden="true">
              <span>↗</span>
              <span>◯</span>
              <span>◇</span>
              <span>T</span>
            </div>
            <div className={styles.editorCanvas}>
              <div className={styles.editorArtwork}>
                <span className={styles.artworkOrb} />
                <span className={styles.artworkBlock} />
                <span className={styles.artworkLine} />
              </div>
              <span className={styles.promptChip}>Make it cinematic ↵</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (project.visual === "campus") {
    return (
      <div
        className={`${styles.placeholder} ${styles.campusVisual}`}
        role="img"
        aria-label="校园社交连接应用示意图"
      >
        <div className={styles.campusLabel}>Find your people / today</div>
        <div className={styles.mapLines} aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <div className={`${styles.mapPin} ${styles.pinOne}`} aria-hidden="true">
          3
        </div>
        <div className={`${styles.mapPin} ${styles.pinTwo}`} aria-hidden="true">
          8
        </div>
        <div className={`${styles.mapPin} ${styles.pinThree}`} aria-hidden="true">
          +
        </div>
        <div className={styles.activityCard}>
          <p>Tonight, 19:30</p>
          <strong>Night Ride</strong>
          <div className={styles.activityMeta}>
            <span>East Gate</span>
            <span>12 going</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`${styles.placeholder} ${styles.kitchenVisual}`}
      role="img"
      aria-label="AI 厨房助手应用示意图"
    >
      <div className={styles.kitchenHeader}>
        <span>今日食材</span>
        <span>03 / 06</span>
      </div>
      <div className={styles.ingredientList} aria-hidden="true">
        <span>番茄</span>
        <span>鸡蛋</span>
        <span>青葱</span>
      </div>
      <div className={styles.recipePlate} aria-hidden="true">
        <span className={styles.plateInner}>15</span>
        <span className={styles.plateUnit}>MIN</span>
      </div>
      <div className={styles.recipeCard}>
        <p>今晚可以做</p>
        <strong>番茄炒蛋</strong>
        <span>查看步骤 ↗</span>
      </div>
    </div>
  );
}
