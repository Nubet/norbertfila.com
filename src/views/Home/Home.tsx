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
  const [ebookFeedback, setEbookFeedback] = useState<{
    type: 'success' | 'error'
    message: string
  } | null>(null)

  const carouselRef = useRef<HTMLDivElement>(null)

  // Drag states
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const track = carouselRef.current.firstElementChild as HTMLElement
      if (track && track.firstElementChild) {
        const card = track.firstElementChild as HTMLElement
        const gap = window.innerWidth > 900 ? 64 : 32 // 4rem on desktop, 2rem on mobile
        const scrollAmount = card.offsetWidth + gap

        carouselRef.current.scrollBy({
          left: direction === 'left' ? -scrollAmount : scrollAmount,
          behavior: 'smooth',
        })
      }
    }
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!carouselRef.current) return
    setIsDragging(true)
    setStartX(e.pageX - carouselRef.current.offsetLeft)
    setScrollLeft(carouselRef.current.scrollLeft)
  }

  const handleMouseLeave = () => {
    setIsDragging(false)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !carouselRef.current) return
    e.preventDefault()
    const x = e.pageX - carouselRef.current.offsetLeft
    const walk = (x - startX) * 1.5 // Drag speed multiplier
    carouselRef.current.scrollLeft = scrollLeft - walk
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault()
      scrollCarousel('left')
    } else if (e.key === 'ArrowRight') {
      e.preventDefault()
      scrollCarousel('right')
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

  const heroMediaRef = useRef<HTMLDivElement>(null)

  const handleHeroMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!heroMediaRef.current) return
    const { clientX, clientY } = e
    const { innerWidth, innerHeight } = window
    
    // Bardzo subtelny efekt paralaksy z dużą bezwładnością
    const moveX = ((clientX / innerWidth) - 0.5) * 1.5
    const moveY = ((clientY / innerHeight) - 0.5) * 1.5

    heroMediaRef.current.style.transform = `translate(${moveX}%, ${moveY}%)`
  }

  const handleHeroMouseLeave = () => {
    if (!heroMediaRef.current) return
    heroMediaRef.current.style.transform = `translate(0%, 0%)`
  }

  return (
    <div className={styles.home}>
      <section 
        className={styles.hero}
        onMouseMove={handleHeroMouseMove}
        onMouseLeave={handleHeroMouseLeave}
      >
        <div className={styles.heroMedia} aria-hidden="true" ref={heroMediaRef}>
          <Image
            src="/home/hero/poster.jpg"
            alt=""
            fill
            priority
            className={styles.heroPoster}
            sizes="100vw"
          />
          <video
            className={styles.heroVideo}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/home/hero/poster.jpg"
          >
            <source src="/home/hero/background.webm" type="video/webm" />
            <source src="/home/hero/background.mp4" type="video/mp4" />
          </video>
          <div className={`${styles.heroOverlay} ${styles.heroOverlayMinimal}`} />
        </div>

        <ScrollReveal>
          <div className={`${styles.heroContent} ${styles.heroContentMinimal}`}>
            <h1 className={styles.heroTitle}>Profesjonalne strony internetowe.</h1>
            <p className={styles.heroSub}>
              Projektuję strony internetowe, które budują wizerunek, zaufanie i autorytet marki.
            </p>
            <Link
              href="/#portfolio"
              className={`${styles.ctaButton} ${styles.heroCtaButtonMinimal}`}
            >
              Zobacz moje prace
            </Link>
          </div>
        </ScrollReveal>
      </section>

      <section className={`${styles.container} ${styles.introSection}`}>
        <ScrollReveal>
          <div className={styles.manifestoLayout}>
            <div className={styles.manifestoContent}>
              <span className={styles.sectionLabel}>Podejście</span>
              <h2 className={styles.sectionTitleLeft}>Prostota i funkcjonalność.</h2>
              <p className={styles.manifestoText}>
                Strona internetowa ma jedno zadanie: ułatwić klientowi decyzję. Zamiast ściany
                tekstu – przejrzysty przekaz. Zamiast skomplikowanej nawigacji – prosta droga do
                akcji. Tworzę estetykę, która naturalnie konwertuje i buduje autorytet.
              </p>
              <div className={styles.signatureSmall}>Norbert Fila</div>
            </div>
            <div className={styles.portraitFrame}>
              <Image
                src="/profile/avatar-light.webp"
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
            <h2 className={styles.sectionTitle}>Co mogę dla Ciebie zrobić?</h2>

            <div className={styles.servicesList}>
              <Link href="/contact" className={styles.serviceItem}>
                <span className={styles.serviceIconNumber}>01</span>
                <span>Strona, która buduje zaufanie do marki</span>
                <ArrowUpRight size={28} className={styles.serviceArrow} />
              </Link>
              <Link href="/contact" className={styles.serviceItem}>
                <span className={styles.serviceIconNumber}>02</span>
                <span>Landing page, który zamienia ruch w zapytania</span>
                <ArrowUpRight size={28} className={styles.serviceArrow} />
              </Link>
              <Link href="/contact" className={styles.serviceItem}>
                <span className={styles.serviceIconNumber}>03</span>
                <span>Oferta usług pokazana jasno i bez chaosu</span>
                <ArrowUpRight size={28} className={styles.serviceArrow} />
              </Link>
              <Link href="/contact" className={styles.serviceItem}>
                <span className={styles.serviceIconNumber}>04</span>
                <span>Formularze i CTA, które prowadzą klienta do kontaktu</span>
                <ArrowUpRight size={28} className={styles.serviceArrow} />
              </Link>
              <Link href="/contact" className={styles.serviceItem}>
                <span className={styles.serviceIconNumber}>05</span>
                <span>Integracje i funkcje na zamówienie</span>
                <ArrowUpRight size={28} className={styles.serviceArrow} />
              </Link>
              <Link href="/contact" className={styles.serviceItem}>
                <span className={styles.serviceIconNumber}>06</span>
                <span>Doradztwo w wyborze hostingu i domeny</span>
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
            <div style={{ textAlign: 'center' }}>
              <span
                className={styles.sectionLabel}
                style={{ marginBottom: '1.5rem', display: 'block' }}
              >
                Filozofia Projektowa
              </span>
              <h2 className={styles.statementText}>
                Skuteczna strona nie rozprasza. Skupia całą uwagę klienta wyłącznie na{' '}
                <i>wartości</i>, którą mu dostarczasz.
              </h2>
            </div>
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
                <button
                  onClick={() => scrollCarousel('left')}
                  className={styles.controlBtn}
                  aria-label="Poprzedni projekt"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={() => scrollCarousel('right')}
                  className={styles.controlBtn}
                  aria-label="Następny projekt"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>
          </ScrollReveal>

          <div
            className={`${styles.carouselWrapper} ${isDragging ? styles.dragging : ''}`}
            ref={carouselRef}
            tabIndex={0}
            onKeyDown={handleKeyDown}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
          >
            <div className={styles.carouselTrack}>
              {portfolioProjects.slice(0, 4).map((project, idx) => (
                <ScrollReveal delay={idx * 100} key={project.title}>
                  <article className={styles.portfolioCard}>
                    <div className={styles.portfolioImageWrapper}>
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className={styles.projectImage}
                        sizes="(max-width: 768px) 90vw, 75vw"
                        draggable={false}
                      />
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
              <Link href="/portfolio" className={`${styles.ctaButton} ${styles.ctaButtonSolid}`}>
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
              <p>
                Poznaję Twój biznes, docelowych klientów i cele. Ustalamy wspólnie, jakie podstrony
                i funkcje są faktycznie niezbędne.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className={styles.step}>
              <div className={styles.stepNumber}>II.</div>
              <h3>Projektowanie</h3>
              <p>
                Przedstawiam pierwsze makiety wizualne. Dopracowujemy je do momentu, w którym
                idealnie odpowiadają Twoim potrzebom.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className={styles.step}>
              <div className={styles.stepNumber}>III.</div>
              <h3>Wdrożenie</h3>
              <p>
                Programuję stronę, przeprowadzam testy na telefonach i komputerach, a na koniec
                uruchamiam ją pod Twoją domeną.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className={styles.ebookSection}>
        <div className={styles.container}>
          <ScrollReveal>
            <div className={styles.ebookBox}>
              <span className={styles.sectionLabel} style={{ color: 'var(--color-gold)' }}>
                Darmowy E-book
              </span>
              <h3 className={styles.ebookTitle}>Jakich błędów unikać na stronie?</h3>
              <p className={styles.ebookText}>
                Zostaw swój e-mail i odbierz krótki plik PDF z analizą najczęstszych błędów, przez
                które strony internetowe tracą klientów.
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
                    {ebookLoading ? 'Wysyłanie...' : 'Pobierz e-book'}
                  </button>
                </div>
              </form>
              {ebookFeedback && (
                <p
                  className={
                    ebookFeedback.type === 'success' ? styles.ebookSuccess : styles.ebookError
                  }
                >
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

      <section className={styles.finalCtaSection}>
        <div className={styles.container}>
          <ScrollReveal>
            <h2 className={styles.finalCtaTitle}>Czas na nową stronę.</h2>
            <p className={styles.finalCtaText}>
              Napisz do mnie i opowiedz o swoim biznesie. Wspólnie sprawdzimy, jak mogę Ci pomóc.
            </p>
            <Link href="/contact" className={styles.finalCtaButton}>
              Przejdź do formularza
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
