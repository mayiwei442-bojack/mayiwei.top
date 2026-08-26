import styles from "./portfolio.module.css";

export function Hero() {
  return (
    <section id="about" className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.heroInner}>
        <div className={styles.heroIntro}>
          <p className={styles.eyebrow}>Portfolio · 2026</p>
          <div className={styles.introCopy}>
            <p className={styles.role}>AI Product · Creative Developer · AIGC</p>
            <p className={styles.bio}>
              我关注 AI 与数字产品，也喜欢把想法做成真正能用、看起来舒服的工具。
            </p>
          </div>
        </div>

        <div className={styles.nameLockup}>
          <h1 id="hero-title" className={styles.name}>
            MAYIWEI
          </h1>
          <p className={styles.chineseName}>马一纬</p>
        </div>

        <div className={styles.heroFooter}>
          <a className={styles.scrollCue} href="#projects">
            <span className={styles.scrollArrow} aria-hidden="true">
              ↓
            </span>
            精选项目
          </a>
          <p className={styles.availability}>
            <span className={styles.availabilityDot} aria-hidden="true" />
            正在探索 AI 能真正解决什么
          </p>
        </div>
      </div>
    </section>
  );
}
