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
            <span>IMAGE FIELD / 001</span>
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

  if (project.visual === "meal") {
    return (
      <div
        className={`${styles.placeholder} ${styles.mealVisual}`}
        role="img"
        aria-label="麦麦点餐台示意图：查询菜单与优惠，按偏好推荐，确认后下单"
      >
        <div className={styles.mealHeading} aria-hidden="true">
          <span>MCD / MEAL PLANNER</span>
          <strong>
            Your taste.
            <br />
            Your meal.
          </strong>
        </div>
        <div className={styles.mealIllustration} aria-hidden="true">
          <div className={styles.fries}>
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className={styles.burger}>
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>
        <div className={styles.mealTicket} aria-hidden="true">
          <p>麦麦点餐台</p>
          <div className={styles.mealSteps}>
            <span>查询菜单</span>
            <span>按需推荐</span>
            <span>确认下单</span>
          </div>
          <div className={styles.mealTicketFooter}>
            <span>口味 · 预算 · 优惠</span>
            <span>MCP ↗</span>
          </div>
        </div>
      </div>
    );
  }

  if (project.visual === "monitor") {
    return (
      <div
        className={`${styles.placeholder} ${styles.monitorVisual}`}
        role="img"
        aria-label="Tibo 监控看板示意图：追踪 X 动态，分析 Codex 重置相关信息，查看中文摘要"
      >
        <div className={styles.monitorWindow} aria-hidden="true">
          <div className={styles.monitorBar}>
            <span>TIBO / MONITOR</span>
            <span>PREVIEW</span>
          </div>
          <div className={styles.monitorBody}>
            <p className={styles.monitorEyebrow}>CODEX RESET SIGNALS</p>
            <strong className={styles.monitorTitle}>
              Follow the
              <br />
              signal.
            </strong>
            <div className={styles.signalChart}>
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            <div className={styles.monitorSummary}>
              <span>动态追踪</span>
              <span>中文摘要</span>
              <span>重置信息</span>
            </div>
            <p className={styles.monitorPipeline}>X → DeepSeek → Dashboard</p>
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
