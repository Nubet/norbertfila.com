'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { trackAnalyticsEvent } from '@/features/analytics/googleAnalytics'
import styles from './Header.module.css'

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)
  const closeMenu = () => setIsMobileMenuOpen(false)
  const trackContactClick = (location: string) => {
    trackAnalyticsEvent('contact_clicked', { location })
  }

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo} onClick={closeMenu}>
          <div className={styles.logoWrapper}>
            <Image
              src="/fila-signature/signature-fila-green.svg"
              alt="Norbert Fila"
              width={200}
              height={90}
              className={styles.logoDefault}
              priority
            />
            <Image
              src="/fila-signature/signature-fila-gold.svg"
              alt=""
              width={200}
              height={90}
              className={styles.logoHover}
            />
          </div>
        </Link>
        <nav className={styles.nav}>
          <Link href="/about" className={styles.navLink}>
            O mnie
          </Link>
          <Link href="/blog" className={styles.navLink}>
            Blog
          </Link>
          <Link href="/#oferta" className={styles.navLink}>
            Oferta
          </Link>
          <Link href="/portfolio" className={styles.navLink}>
            Portfolio
          </Link>
          <Link href="/#proces" className={styles.navLink}>
            Proces
          </Link>
        </nav>
        <Link
          href="/contact"
          className={styles.ctaButton}
          onClick={() => trackContactClick('header_desktop')}
        >
          Współpraca
        </Link>
        <button
          className={styles.mobileMenuBtn}
          onClick={toggleMenu}
          aria-label={isMobileMenuOpen ? 'Zamknij menu' : 'Otwórz menu'}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
        <nav className={styles.mobileNav}>
          <Link href="/about" className={styles.mobileNavLink} onClick={closeMenu}>
            O mnie
          </Link>
          <Link href="/blog" className={styles.mobileNavLink} onClick={closeMenu}>
            Blog
          </Link>
          <Link href="/#oferta" className={styles.mobileNavLink} onClick={closeMenu}>
            Oferta
          </Link>
          <Link href="/portfolio" className={styles.mobileNavLink} onClick={closeMenu}>
            Portfolio
          </Link>
          <Link href="/#proces" className={styles.mobileNavLink} onClick={closeMenu}>
            Proces
          </Link>
          <Link
            href="/contact"
            className={styles.mobileCtaButton}
            onClick={() => {
              trackContactClick('header_mobile')
              closeMenu()
            }}
          >
            Współpraca
          </Link>
        </nav>
      </div>
    </header>
  )
}
