'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import styles from './Header.module.css'

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)
  const closeMenu = () => setIsMobileMenuOpen(false)

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo} onClick={closeMenu}>
          Norbert Fila
        </Link>
        <nav className={styles.nav}>
          <Link href="/about" className={styles.navLink}>
            O mnie
          </Link>
          <Link href="/#oferta" className={styles.navLink}>
            Oferta
          </Link>
          <Link href="/#portfolio" className={styles.navLink}>
            Portfolio
          </Link>
          <Link href="/#proces" className={styles.navLink}>
            Proces
          </Link>
        </nav>
        <Link href="/contact" className={styles.ctaButton}>
          Współpraca
        </Link>
        <button 
          className={styles.mobileMenuBtn} 
          onClick={toggleMenu}
          aria-label={isMobileMenuOpen ? "Zamknij menu" : "Otwórz menu"}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
        <nav className={styles.mobileNav}>
          <Link href="/about" className={styles.mobileNavLink} onClick={closeMenu}>O mnie</Link>
          <Link href="/#oferta" className={styles.mobileNavLink} onClick={closeMenu}>Oferta</Link>
          <Link href="/#portfolio" className={styles.mobileNavLink} onClick={closeMenu}>Portfolio</Link>
          <Link href="/#proces" className={styles.mobileNavLink} onClick={closeMenu}>Proces</Link>
          <Link href="/contact" className={styles.mobileCtaButton} onClick={closeMenu}>Współpraca</Link>
        </nav>
      </div>
    </header>
  )
}
