'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Linkedin, Mail } from 'lucide-react'
import { ScrollReveal } from '@/components/ScrollReveal/ScrollReveal'
import { trackAnalyticsEvent } from '@/features/analytics/googleAnalytics'
import styles from './Footer.module.css'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <ScrollReveal>
          <div className={styles.topSection}>
            <div className={styles.brand}>
              <Link href="/" className={styles.brandName}>
                <div className={styles.logoWrapper}>
                  <Image
                    src="/fila-signature/signature-fila-red.svg"
                    alt="Norbert Fila"
                    width={260}
                    height={117}
                    className={styles.logoDefault}
                  />
                  <Image
                    src="/fila-signature/signature-fila-gold.svg"
                    alt=""
                    width={260}
                    height={117}
                    className={styles.logoHover}
                  />
                </div>
              </Link>
              <p className={styles.brandMission}>
                Strony szyte na miarę. Zaprojektowane, by wyróżniać Cię estetyką i generować zysk.
              </p>
            </div>

            <nav className={styles.linksGrid} aria-label="Nawigacja stopki">
              <div className={styles.linkGroup}>
                <span className={styles.groupLabel}>Eksploruj</span>
                <ul className={styles.linkList}>
                  <li>
                    <Link href="/">Strona Główna</Link>
                  </li>
                  <li>
                    <Link href="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      onClick={() => trackAnalyticsEvent('contact_clicked', { location: 'footer' })}
                    >
                      Umów Konsultację
                    </Link>
                  </li>
                </ul>
              </div>

              <div className={styles.linkGroup}>
                <span className={styles.groupLabel}>Informacje Legalne</span>
                <ul className={styles.linkList}>
                  <li>
                    <Link href="/privacy-policy">Polityka Prywatności</Link>
                  </li>
                  <li>
                    <Link href="/cookie-policy">Polityka Cookies</Link>
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
                    onClick={() =>
                      trackAnalyticsEvent('social_link_clicked', {
                        location: 'footer',
                        network: 'linkedin',
                      })
                    }
                  >
                    <Linkedin size={20} strokeWidth={1.5} />
                  </a>
                  <a
                    href="mailto:kontakt@norbertfila.com"
                    aria-label="Napisz maila"
                    onClick={() => trackAnalyticsEvent('email_clicked', { location: 'footer' })}
                  >
                    <Mail size={20} strokeWidth={1.5} />
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className={styles.bottomSection}>
            <p className={styles.copyright}>
              &copy; {currentYear} Norbert Fila. Wszelkie prawa zastrzeżone.
            </p>
            <p className={styles.location}>Czas na lepsze efekty.</p>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  )
}
