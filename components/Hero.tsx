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
              I design and build thoughtful digital products at the intersection
              of artificial intelligence, useful tools, and visual culture.
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
            Selected Projects
          </a>
          <p className={styles.availability}>
            <span className={styles.availabilityDot} aria-hidden="true" />
            Exploring what AI can make useful
          </p>
        </div>
      </div>
    </section>
  );
}
