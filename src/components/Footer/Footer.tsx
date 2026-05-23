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
            <h3>Norbert Fila</h3>
            <p>Web Developer dla Biznesu.</p>
            <p className={styles.brandSub}>Projektuję strony, które zarabiają.</p>
          </div>
          
          <div className={styles.linksGrid}>
            <div className={styles.linkGroup}>
              <h4>Na skróty</h4>
              <Link to="/">Strona Główna</Link>
              <Link to="/cv">Moje CV</Link>
              <Link to="/contact">Darmowa Wycena</Link>
            </div>
            
            <div className={styles.linkGroup}>
              <h4>Legalne</h4>
              {/* Odnośniki do podstron, które stworzymy */}
              <Link to="/polityka-prywatnosci">Polityka Prywatności</Link>
              <Link to="/polityka-cookies">Polityka Cookies</Link>
            </div>

            <div className={styles.linkGroup}>
              <h4>Social</h4>
              <div className={styles.socialIcons}>
                <a href="https://www.linkedin.com/in/norbert-fila/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin size={24} />
                </a>
                <a href="https://github.com/nubet" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github size={24} />
                </a>
                <a href="mailto:contact@norbertfila.com" aria-label="E-mail">
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.bottomSection}>
          <p className={styles.copyright}>
            &copy; {currentYear} Norbert Fila. Wszelkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  )
}
