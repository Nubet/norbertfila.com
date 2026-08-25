'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useRef, type FormEvent } from 'react'
import { ChevronLeft, ChevronRight, ArrowRight, ArrowUpRight } from 'lucide-react'
import { FAQ } from '@/components/FAQ/FAQ'
import { ScrollReveal } from '@/components/ScrollReveal/ScrollReveal'
import { subscribeToEbook, EbookSubscribeError } from '@/features/ebook/subscribeToEbook'
import { portfolioProjects } from '@/data/portfolio'
import styles from './Home.module.css'

export default function Home() {
  const [ebookEmail, setEbookEmail] = useState('')
  const [ebookLoading, setEbookLoading] = useState(false)
  const [ebookFeedback, setEbookFeedback] = useState<{ type: 'success' | 'error'; message: string } | null>(null)
  
  const carouselRef = useRef<HTMLDivElement>(null)

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const track = carouselRef.current.firstElementChild as HTMLElement
      if (track && track.firstElementChild) {
        const card = track.firstElementChild as HTMLElement
        const gap = window.innerWidth > 900 ? 64 : 32 // 4rem on desktop, 2rem on mobile
        const scrollAmount = card.offsetWidth + gap
        
        carouselRef.current.scrollBy({
          left: direction === 'left' ? -scrollAmount : scrollAmount,
          behavior: 'smooth'
        })
      }
    }
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
            Projektuję i wdrażam dedykowane strony internetowe. Tworzę wizytówki, w których estetyka spotyka się z funkcjonalnością, pomagając markom budować autorytet i zdobywać zaufanie.
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

      {/* PORTFOLIO GALLERY */}
      <section className={styles.portfolioSection} id="portfolio">
        <div className={styles.container}>
          <ScrollReveal>
            <div className={styles.portfolioHeader}>
              <div className={styles.portfolioHeaderTitles}>
                <span className={styles.sectionLabelLeft}>Realizacje</span>
                <h2 className={styles.sectionTitleLeft}>Moje projekty</h2>
              </div>
              <div className={styles.carouselControls}>
                <button onClick={() => scrollCarousel('left')} className={styles.controlBtn} aria-label="Poprzedni projekt">
                  <ChevronLeft size={24} />
                </button>
                <button onClick={() => scrollCarousel('right')} className={styles.controlBtn} aria-label="Następny projekt">
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>
          </ScrollReveal>
          
          <div className={styles.carouselWrapper} ref={carouselRef}>
            <div className={styles.carouselTrack}>
              {portfolioProjects.slice(0, 4).map((project, idx) => (
                <ScrollReveal delay={idx * 100} key={project.title}>
                  <article className={styles.portfolioCard}>
                    <div className={styles.portfolioImageWrapper}>
                      <Image src={project.image} alt={project.title} fill className={styles.projectImage} sizes="(max-width: 768px) 90vw, 75vw" />
                      <div className={styles.categoryPill}>{project.category}</div>
                    </div>
                    <div className={styles.portfolioInfo}>
                      <h3 className={styles.portfolioTitle}>{project.title}</h3>
                      <p className={styles.portfolioDesc}>{project.shortDescription}</p>
                      <Link href={`/portfolio#${project.id}`} className={styles.readMoreBtn}>
                        Czytaj dalej <ArrowRight size={18} />
                      </Link>
                    </div>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '5rem' }}>
            <ScrollReveal>
              <Link href="/portfolio" className={styles.ctaButton}>
                Zobacz wszystkie projekty
              </Link>
            </ScrollReveal>
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
