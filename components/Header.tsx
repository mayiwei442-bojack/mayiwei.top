import styles from "./portfolio.module.css";

const githubUrl = "https://github.com/mayiwei442-bojack";

export function Header() {
  return (
    <header className={styles.siteHeader}>
      <div className={styles.headerInner}>
        <a className={styles.brand} href="#about" aria-label="Mayiwei，返回首页">
          MW<span className={styles.brandDot}>.</span>
        </a>
        <nav className={styles.nav} aria-label="主要导航">
          <a href="#about">关于</a>
          <a href="#projects">项目</a>
          <a href="#contact">联系</a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="在新标签页打开 Mayiwei 的 GitHub"
          >
            GitHub <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
