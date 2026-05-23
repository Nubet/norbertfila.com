import { Github, Linkedin, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.cta}>
        <h2 className={styles.heading}>Porozmawiajmy o Twojej stronie.</h2>
        <p className={styles.subhead}>
          Wypełnij formularz i otrzymaj bezpłatną, niezobowiązującą wycenę.
        </p>
        <div className={styles.actions}>
          <Link className={styles.primaryAction} to="/contact">
            PRZEJDŹ DO FORMULARZA <ArrowUpRight size={24} strokeWidth={3} />
          </Link>
          <div className={styles.secondaryActions}>
            <a className={styles.socialLink} href="mailto:contact@norbertfila.com">
              E-MAIL: CONTACT@NORBERTFILA.COM
            </a>
            <a href="https://www.linkedin.com/in/norbert-fila/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <Linkedin size={24} strokeWidth={2.5} /> LINKEDIN
            </a>
            <a href="https://github.com/nubet" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <Github size={24} strokeWidth={2.5} /> GITHUB
            </a>
          </div>
        </div>
      </div>
      <div className={styles.bottomBar}>
        <p className={styles.text}>&copy; {new Date().getFullYear()} NORBERT FILA. ALL RIGHTS RESERVED.</p>
        <div className={styles.shapes}>
           <div className={styles.shapeSmallCircle}></div>
           <div className={styles.shapeSmallSquare}></div>
        </div>
      </div>
    </footer>
  )
}
