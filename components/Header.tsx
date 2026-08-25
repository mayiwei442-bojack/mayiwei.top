import styles from "./portfolio.module.css";

const githubUrl = "https://github.com/mayiwei442-bojack";

export function Header() {
  return (
    <header className={styles.siteHeader}>
      <div className={styles.headerInner}>
        <a className={styles.brand} href="#about" aria-label="Mayiwei, home">
          MW<span className={styles.brandDot}>.</span>
        </a>
        <nav className={styles.nav} aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Mayiwei on GitHub, opens in a new tab"
          >
            GitHub <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
