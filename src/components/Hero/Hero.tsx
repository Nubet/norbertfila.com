import Image from 'next/image'
import Link from 'next/link'
import { Github, Linkedin, Mail, FileText, ArrowRight } from 'lucide-react'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <header className={styles.hero}>
      <div className={styles.shape1}></div>
      <div className={styles.shape2}></div>
      <div className={styles.shape3}></div>

      <div className={styles.copy}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title} aria-label="Norbert Fila">
            <span aria-hidden="true">
              NORBERT
              <br />
              FILA.
            </span>
          </h1>
          <span className={styles.badge}>PROGRAMISTA</span>
        </div>

        <p className={styles.subhead}>
          PRZEKSZTAŁCAM SUROWE POMYSŁY
          <br />W DZIAŁAJĄCE ROZWIĄZANIA.
        </p>

        <div className={styles.actions}>
          <a href="#projects" className={styles.primaryButton}>
            ZOBACZ PROJEKTY <ArrowRight size={24} strokeWidth={3} />
          </a>

          <div className={styles.socialLinks}>
            <a
              href="https://www.linkedin.com/in/norbert-fila/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
              aria-label="LinkedIn"
            >
              <Linkedin size={28} strokeWidth={2.5} />
            </a>
            <a
              href="https://github.com/nubet"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
              aria-label="GitHub"
            >
              <Github size={28} strokeWidth={2.5} />
            </a>
            <Link href="/contact" className={styles.socialIcon} aria-label="Kontakt">
              <Mail size={28} strokeWidth={2.5} />
            </Link>
            <a
              href="/resume.pdf"
              target="_blank"
              className={styles.socialIcon}
              aria-label="Życiorys / CV"
            >
              <FileText size={28} strokeWidth={2.5} />
            </a>
          </div>
        </div>
      </div>

      <div className={styles.visual}>
        <div className={styles.portraitWrapper}>
          <Image
            src="/profile/avatar.webp"
            alt="Norbert Fila - Portret"
            className={styles.image}
            width={560}
            height={700}
            quality={100}
            unoptimized
            priority
            sizes="(max-width: 900px) 92vw, 560px"
          />
          <div className={styles.portraitFrame}></div>
        </div>
      </div>
    </header>
  )
}
