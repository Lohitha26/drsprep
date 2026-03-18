"use client";

import Link from "next/link";
import { useAuthStore } from "@/lib/store";
import styles from "./Header.module.css";

export default function Header() {
  const { openLogin } = useAuthStore();

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logoArea} aria-label="DrsPrep home">
          {/* <span className={styles.accent} aria-hidden="true" /> */}
          <div className={styles.logo}>
            <img src="images/logo.png" alt="DrsPrep" className={styles.logoImg} />
            {/* <div className={styles.logoGlyph} aria-hidden="true">
              <span className={`${styles.glyphSegment} ${styles.glyph1}`} />
              <span className={`${styles.glyphSegment} ${styles.glyph2}`} />
              <span className={`${styles.glyphSegment} ${styles.glyph3}`} />
              <span className={`${styles.glyphSegment} ${styles.glyph4}`} />
              <span className={`${styles.glyphSegment} ${styles.glyph5}`} />
              <span className={`${styles.glyphSegment} ${styles.glyph6}`} />
              <span className={`${styles.glyphSegment} ${styles.glyph7}`} />
            </div> */}
            {/* <span className="typography-drsprep-brand">DrsPrep</span> */}
          </div>
        </Link>

        <button type="button" className={`${styles.cta} typography-drsprep-cta`} onClick={openLogin}>
          <span className="typography-drsprep-cta">Login / Signup</span>
        </button>
      </div>
    </header>
  );
}
