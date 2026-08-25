import Link from 'next/link'
import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          Norbert Fila
        </Link>
        <nav className={styles.nav}>
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
      </div>
    </header>
  )
}
