import { Github, Linkedin, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.brand}>
            <Link to="/" className={styles.brandName}>Norbert Fila</Link>
            <p className={styles.brandRole}>ZAMIEŃ ODWIEDZINY W KLIENTÓW</p>
            <p className={styles.brandMission}>
              Projektuję i koduję dedykowane strony internetowe nastawione na realny zysk.
            </p>
          </div>
          
          <nav className={styles.linksGrid} aria-label="Nawigacja stopki">
            <div className={styles.linkGroup}>
              <span className={styles.groupLabel}>Na skróty</span>
              <ul className={styles.linkList}>
                <li><Link to="/">Strona Główna</Link></li>
                <li><Link to="/cv">Doświadczenie (CV)</Link></li>
                <li><Link to="/contact">Darmowa Wycena</Link></li>
              </ul>
            </div>
            
            <div className={styles.linkGroup}>
              <span className={styles.groupLabel}>Legalne</span>
              <ul className={styles.linkList}>
                <li><Link to="/privacy-policy">Polityka Prywatności</Link></li>
                <li><Link to="/cookie-policy">Polityka Cookies</Link></li>
              </ul>
            </div>

            <div className={styles.linkGroup}>
              <span className={styles.groupLabel}>Kontakt</span>
              <div className={styles.socialIcons}>
                <a href="https://www.linkedin.com/in/norbert-fila/" target="_blank" rel="noopener noreferrer" aria-label="Profil LinkedIn">
                  <Linkedin size={22} />
                </a>
                <a href="https://github.com/nubet" target="_blank" rel="noopener noreferrer" aria-label="Profil GitHub">
                  <Github size={22} />
                </a>
                <a href="mailto:contact@norbertfila.com" aria-label="Wyślij e-mail">
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
