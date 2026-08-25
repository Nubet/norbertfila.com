'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, type FormEvent } from 'react'
import { ChevronLeft, ChevronRight, ArrowRight, ArrowUpRight } from 'lucide-react'
import { FAQ } from '@/components/FAQ/FAQ'
import { ScrollReveal } from '@/components/ScrollReveal/ScrollReveal'
import { subscribeToEbook, EbookSubscribeError } from '@/features/ebook/subscribeToEbook'
import styles from './Home.module.css'

const webProjects = [
  {
    title: 'Doradztwo Podatkowe',
    description: 'Nowoczesny landing page dla eksperta podatkowego. Zaprojektowany z myślą o budowaniu zaufania i szybkiej konwersji.',
    image: '/client-projects/norbert-fila-biuro-podatkowe-projekt.webp',
    url: 'https://nubet.github.io/biuro-podatkowe-wizytowka/',
    urlLabel: 'Zobacz stronę',
  },
  {
    title: 'Butikowe Studio Ruchu',
    description: 'Przejrzysta, wzbudzająca zaufanie strona butikowego studia pilates. Minimalizm ułatwiający poznanie miejsca i zapis.',
    image: '/client-projects/norbert-fila-db-club-projekt.ng.webp',
    url: 'https://db-club.vercel.app/',
    urlLabel: 'Zobacz stronę',
  },
]

const mobileProjects = [
  {
    title: 'Studymood',
    tagline: 'Elegancja w śledzeniu nawyków.',
    description: 'Aplikacja skupiona wokół codziennych zapisów nastroju i analizy emocji. Przejrzyste statystyki pomagają wyrobić zdrową rutynę.',
    images: [
      '/app-portfolio/studymood/check-in-homepage.webp',
      '/app-portfolio/studymood/check-in-form.webp',
      '/app-portfolio/studymood/monthly-analysis.webp',
    ],
  },
  {
    title: 'Qraft QR',
    tagline: 'Minimalistyczne narzędzie codziennego użytku.',
    description: 'Skaner i generator kodów QR w nowoczesnym wydaniu. Błyskawiczna detekcja i udostępnianie bez zbędnych komplikacji.',
    images: [
      '/app-portfolio/qraft/scan-detected.webp',
      '/app-portfolio/qraft/url-creation.webp',
      '/app-portfolio/qraft/history.webp',
    ],
    isReversed: true,
  },
]

const visualProjects = [
  {
    title: 'Santoro',
    headline: 'Redesign strony dla kameralnej szkoły językowej',
    description: 'Odświeżyłem stronę Santoro tak, aby oferta była prostsza do zrozumienia i bardziej przekonująca wizualnie. Projekt porządkuje kluczowe informacje, zachowując przestrzeń.',
    sections: [
      '/visual-projects/Santoro-szkola-jezykowa/1.webp',
      '/visual-projects/Santoro-szkola-jezykowa/2.webp',
      '/visual-projects/Santoro-szkola-jezykowa/3.webp',
    ],
  },
  {
    title: 'ABC Centrum Logopedii',
    headline: 'Koncepcja strony dla centrum rozwoju',
    description: 'Projekt porządkujący szeroką ofertę placówki. Czytelny układ i spokojna kolorystyka budują zaufanie u klientów.',
    sections: [
      '/visual-projects/abc-centrum-logopedii/1.webp',
      '/visual-projects/abc-centrum-logopedii/2.webp',
      '/visual-projects/abc-centrum-logopedii/3.webp',
    ],
  },
]

export default function Home() {
  const [ebookEmail, setEbookEmail] = useState('')
  const [ebookLoading, setEbookLoading] = useState(false)
  const [ebookFeedback, setEbookFeedback] = useState<{ type: 'success' | 'error'; message: string } | null>(null)
  
  const [visualProjectIndexes, setVisualProjectIndexes] = useState(visualProjects.map(() => 0))

  const setVisualProjectImageIndex = (projectIndex: number, imageIndex: number) => {
    setVisualProjectIndexes((prev) => prev.map((curr, idx) => (idx === projectIndex ? imageIndex : curr)))
  }

  const handleEbookSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (ebookLoading) return
    const form = event.currentTarget
    const formData = new FormData(form)
    const honeypot = String(formData.get('company') ?? '')
    
    setEbookFeedback(null)
    setEbookLoading(true)

    try {
      await subscribeToEbook({ email: ebookEmail, honeypot })
      setEbookFeedback({ type: 'success', message: 'Wysłano. Sprawdź swoją skrzynkę e-mail.' })
      setEbookEmail('')
      form.reset()
    } catch (error) {
      if (error instanceof EbookSubscribeError) {
        setEbookFeedback({ type: 'error', message: error.message })
      } else {
        setEbookFeedback({ type: 'error', message: 'Wystąpił błąd. Spróbuj ponownie później.' })
      }
    } finally {
      setEbookLoading(false)
    }
  }

  return (
    <div className={styles.home}>
      <section className={styles.hero}>
        <ScrollReveal>
          <h1 className={styles.heroTitle}>
            Profesjonalne strony internetowe.
          </h1>
          <p className={styles.heroSub}>
            Projektuję i wdrażam strony dla miejsc, w których liczy się estetyka – salonów, klinik i marek z sektora beauty. Przekładam jakość Twoich usług na czytelny i nowoczesny język cyfrowy.
          </p>
          <Link href="/contact" className={styles.ctaButton}>
            Nawiążmy współpracę
          </Link>
        </ScrollReveal>
      </section>

      <section className={styles.container}>
        <ScrollReveal>
          <div className={styles.manifestoLayout}>
            <div className={styles.manifestoContent}>
              <span className={styles.sectionLabel}>Podejście</span>
              <h2 className={styles.sectionTitleLeft}>Prostota i funkcjonalność.</h2>
              <p className={styles.manifestoText}>
                Strona internetowa nie powinna przytłaczać. Jej głównym zadaniem jest ułatwienie klientowi podjęcia decyzji o wizycie. Zamiast nadmiaru informacji, stawiam na czytelny cennik, łatwy dostęp do rezerwacji i estetykę, która naturalnie buduje zaufanie do Twojej marki.
              </p>
              <div className={styles.signatureSmall}>Norbert Fila</div>
            </div>
            <div className={styles.portraitFrame}>
              <Image
                src="/profile/avatar.webp"
                alt="Norbert Fila"
                className={styles.portraitImage}
                width={720}
                height={720}
                quality={100}
                unoptimized
                sizes="(max-width: 768px) 88vw, (max-width: 1200px) 36vw, 420px"
              />
            </div>
          </div>
        </ScrollReveal>
      </section>

      <section className={styles.servicesListSection} id="oferta">
        <div className={styles.container}>
          <ScrollReveal>
            <span className={styles.sectionLabel}>Oferta</span>
            <h2 className={styles.sectionTitle}>W czym mogę Ci pomóc?</h2>
            
            <div className={styles.servicesList}>
              <Link href="/contact" className={styles.serviceItem}>
                <span className={styles.serviceIconNumber}>01</span>
                <span>Projekt i stworzenie strony wizytówki</span>
                <ArrowUpRight size={28} className={styles.serviceArrow} />
              </Link>
              <Link href="/contact" className={styles.serviceItem}>
                <span className={styles.serviceIconNumber}>02</span>
                <span>Podłączenie zewnętrznych systemów rezerwacji</span>
                <ArrowUpRight size={28} className={styles.serviceArrow} />
              </Link>
              <Link href="/contact" className={styles.serviceItem}>
                <span className={styles.serviceIconNumber}>03</span>
                <span>Dostosowanie działania do telefonów komórkowych</span>
                <ArrowUpRight size={28} className={styles.serviceArrow} />
              </Link>
              <Link href="/contact" className={styles.serviceItem}>
                <span className={styles.serviceIconNumber}>04</span>
                <span>Opieka techniczna i utrzymanie serwera</span>
                <ArrowUpRight size={28} className={styles.serviceArrow} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* STATEMENT / PHILOSOPHY */}
      <section className={styles.statementSection}>
        <div className={styles.container}>
          <ScrollReveal>
            <h2 className={styles.statementText}>
              Dobry projekt nie domaga się uwagi. Działa w tle, pozwalając, by to <i>Twoje usługi</i> grały pierwsze skrzypce.
            </h2>
          </ScrollReveal>
        </div>
      </section>

      {/* PORTFOLIO: WEB */}
      <section className={styles.portfolioSection} id="portfolio">
        <div className={styles.container}>
          <ScrollReveal>
            <span className={styles.sectionLabel}>Portfolio</span>
            <h2 className={styles.sectionTitle}>Zrealizowane Projekty</h2>
          </ScrollReveal>
          
          <div className={styles.portfolioGrid}>
            {webProjects.map((project, idx) => (
              <ScrollReveal delay={idx * 100} key={project.title}>
                <div className={styles.projectCard}>
                  <div className={styles.projectImageWrapper}>
                    <Image src={project.image} alt={project.title} fill className={styles.projectImage} sizes="(max-width: 768px) 100vw, 50vw" />
                  </div>
                  <div className={styles.projectInfo}>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                      {project.urlLabel} <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO: VISUAL */}
      <section className={styles.container}>
        <ScrollReveal>
          <h2 className={styles.sectionTitle}>Koncepcje i szkice</h2>
        </ScrollReveal>
        <div className={styles.visualGrid}>
          {visualProjects.map((project, projectIndex) => {
            const currentImgIndex = visualProjectIndexes[projectIndex] ?? 0
            const currentImg = project.sections[currentImgIndex]

            return (
              <ScrollReveal delay={projectIndex * 100} key={project.title}>
                <article className={styles.visualCard}>
                  <div className={styles.visualImageWrapper}>
                    <Image src={currentImg} alt={project.title} fill className={styles.projectImage} />
                    <div className={styles.visualDots}>
                      {project.sections.map((_, idx) => (
                        <button
                          key={idx}
                          type="button"
                          className={`${styles.dot} ${idx === currentImgIndex ? styles.dotActive : ''}`}
                          onClick={() => setVisualProjectImageIndex(projectIndex, idx)}
                          aria-label={`Pokaż zdjęcie ${idx + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                  <div className={styles.visualInfo}>
                    <h3>{project.headline}</h3>
                    <p className={styles.visualClient}>{project.title}</p>
                    <p>{project.description}</p>
                  </div>
                </article>
              </ScrollReveal>
            )
          })}
        </div>
      </section>

      {/* PORTFOLIO: MOBILE */}
      <section className={styles.portfolioSection}>
        <div className={styles.container}>
          <ScrollReveal>
            <h2 className={styles.sectionTitle}>Aplikacje Mobilne</h2>
          </ScrollReveal>
          <div className={styles.mobileList}>
            {mobileProjects.map((app, idx) => (
              <ScrollReveal delay={100} key={app.title}>
                <article className={`${styles.mobileProjectCard} ${app.isReversed ? styles.mobileProjectCardReversed : ''}`}>
                  <div className={styles.mobileProjectInfo}>
                    <h3>{app.title}</h3>
                    <h4>{app.tagline}</h4>
                    <p>{app.description}</p>
                  </div>
                  <div className={styles.mobileMockupContainer}>
                    {app.images.map((imgSrc, imgIdx) => (
                      <div key={imgSrc} className={`${styles.mockupPhone} ${styles[`mockupPhone${imgIdx + 1}`]}`}>
                        <Image src={imgSrc} alt={`${app.title} screen ${imgIdx + 1}`} fill className={styles.mockupImage} unoptimized />
                      </div>
                    ))}
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.container} id="proces">
        <ScrollReveal>
          <span className={styles.sectionLabel}>Organizacja pracy</span>
          <h2 className={styles.sectionTitle}>Jak wygląda współpraca?</h2>
        </ScrollReveal>
        <div className={styles.processSteps}>
          <ScrollReveal delay={0}>
            <div className={styles.step}>
              <div className={styles.stepNumber}>I.</div>
              <h3>Rozmowa</h3>
              <p>Poznaję Twój biznes, docelowych klientów i cele. Ustalamy wspólnie, jakie podstrony i funkcje są faktycznie niezbędne.</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className={styles.step}>
              <div className={styles.stepNumber}>II.</div>
              <h3>Projektowanie</h3>
              <p>Przedstawiam pierwsze makiety wizualne. Dopracowujemy je do momentu, w którym idealnie odpowiadają Twoim potrzebom.</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className={styles.step}>
              <div className={styles.stepNumber}>III.</div>
              <h3>Wdrożenie</h3>
              <p>Programuję stronę, przeprowadzam testy na telefonach i komputerach, a na koniec uruchamiam ją pod Twoją domeną.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className={styles.ebookSection}>
        <div className={styles.container}>
          <ScrollReveal>
            <div className={styles.ebookBox}>
              <span className={styles.sectionLabel} style={{ color: 'var(--color-gold)' }}>Darmowy poradnik</span>
              <h3 className={styles.ebookTitle}>Jakich błędów unikać na stronie?</h3>
              <p className={styles.ebookText}>
                Zostaw swój adres e-mail, aby otrzymać krótki plik PDF z analizą najczęstszych problemów, przez które prestiżowe marki tracą potencjalnych klientów w internecie.
              </p>

              <form className={styles.ebookForm} onSubmit={handleEbookSubmit} noValidate>
                <div className={styles.ebookHoneypot} aria-hidden="true">
                  <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
                </div>
                <div className={styles.ebookControls}>
                  <input
                    type="email"
                    className={styles.ebookInput}
                    placeholder="Wpisz adres e-mail"
                    value={ebookEmail}
                    onChange={(e) => setEbookEmail(e.target.value)}
                    required
                  />
                  <button type="submit" className={styles.ctaButton} disabled={ebookLoading}>
                    {ebookLoading ? 'Wysyłanie...' : 'Pobierz poradnik'}
                  </button>
                </div>
              </form>
              {ebookFeedback && (
                <p className={ebookFeedback.type === 'success' ? styles.ebookSuccess : styles.ebookError}>
                  {ebookFeedback.message}
                </p>
              )}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <ScrollReveal>
        <FAQ />
      </ScrollReveal>

      <section className={styles.container} style={{ textAlign: 'center', paddingBottom: '8rem' }}>
        <ScrollReveal>
          <h2 className={styles.sectionTitle} style={{ marginBottom: '2rem' }}>
            Czas na nową stronę.
          </h2>
          <p className={styles.heroSub} style={{ margin: '0 auto 3rem' }}>
            Napisz do mnie i opowiedz o swoim biznesie. Wspólnie sprawdzimy, jak mogę Ci pomóc.
          </p>
          <Link href="/contact" className={styles.ctaButton}>
            Przejdź do formularza
          </Link>
        </ScrollReveal>
      </section>
    </div>
  )
}
