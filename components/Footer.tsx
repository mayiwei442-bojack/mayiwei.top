import styles from "./portfolio.module.css";

const githubUrl = "https://github.com/mayiwei442-bojack";

export function Footer() {
  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.footerLead}>
          <p className={styles.eyebrow}>Contact</p>
          <p className={styles.footerStatement}>
            Let&apos;s make something
            <br />
            <span>useful.</span>
          </p>
        </div>

        <div className={styles.footerLinks}>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub <span aria-hidden="true">↗</span>
          </a>
          <p className={styles.contactPlaceholder}>
            Email <span>To be added</span>
          </p>
        </div>

        <div className={styles.footerBase}>
          <strong>MAYIWEI</strong>
          <p>© 2026 Mayiwei</p>
          <a href="#about">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
