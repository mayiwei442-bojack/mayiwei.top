import styles from "./portfolio.module.css";

const githubUrl = "https://github.com/mayiwei442-bojack";

export function Footer() {
  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.footerLead}>
          <p className={styles.eyebrow}>联系</p>
          <p className={styles.footerStatement}>
            一起做点
            <br />
            <span>有用的事。</span>
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
            Email <span>待补充</span>
          </p>
        </div>

        <div className={styles.footerBase}>
          <strong>MAYIWEI</strong>
          <p>© 2026 Mayiwei</p>
          <a href="#about">回到顶部 ↑</a>
        </div>
      </div>
    </footer>
  );
}
