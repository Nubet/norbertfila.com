'use client'

import type { MouseEvent } from 'react'
import { usePathname } from 'next/navigation'
import { Github, Linkedin, Mail } from 'lucide-react'
import { scrollToTopSmooth } from '../../infrastructure/browser/scroll'
import styles from './Footer.module.css'

export function Footer() {
  const currentYear = new Date().getFullYear()
  const pathname = usePathname()

  const handleHomeClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (pathname !== '/') return

    event.preventDefault()
    scrollToTopSmooth()
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.brand}>
            <a href="/" className={styles.brandName}>
              Norbert Fila
            </a>
            <p className={styles.brandRole}>ZAMIEŃ ODWIEDZINY W KLIENTÓW</p>
            <p className={styles.brandMission}>
              Projektuję i koduję dedykowane strony internetowe nastawione na realny zysk.
            </p>
          </div>

          <nav className={styles.linksGrid} aria-label="Nawigacja stopki">
            <div className={styles.linkGroup}>
              <span className={styles.groupLabel}>Na skróty</span>
              <ul className={styles.linkList}>
                <li>
                  <a href="/" onClick={handleHomeClick}>
                    Strona Główna
                  </a>
                </li>
                <li>
                  <a href="/cv">Doświadczenie (CV)</a>
                </li>
                <li>
                  <a href="/contact">Darmowa Wycena</a>
                </li>
              </ul>
            </div>

            <div className={styles.linkGroup}>
              <span className={styles.groupLabel}>Legalne</span>
              <ul className={styles.linkList}>
                <li>
                  <a href="/privacy-policy">Polityka Prywatności</a>
                </li>
                <li>
                  <a href="/cookie-policy">Polityka Cookies</a>
                </li>
              </ul>
            </div>

            <div className={styles.linkGroup}>
              <span className={styles.groupLabel}>Kontakt</span>
              <div className={styles.socialIcons}>
                <a
                  href="https://www.linkedin.com/in/norbert-fila/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Profil LinkedIn"
                >
                  <Linkedin size={22} />
                </a>
                <a
                  href="https://github.com/nubet"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Profil GitHub"
                >
                  <Github size={22} />
                </a>
                <a href="/contact" aria-label="Przejdź do formularza kontaktowego">
                  <Mail size={22} />
                </a>
              </div>
            </div>
          </nav>
        </div>

        <div className={styles.bottomSection}>
          <p className={styles.copyright}>
            &copy; {currentYear} Norbert Fila. Wszelkie prawa zastrzeżone.
          </p>
          <p className={styles.location}>Czas na lepsze efekty.</p>
        </div>
      </div>
    </footer>
  )
}
