'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useRef } from 'react'
import { ChevronLeft, ChevronRight, ArrowRight, ArrowUpRight, Clock } from 'lucide-react'
import { FAQ } from '@/components/FAQ/FAQ'
import { ScrollReveal } from '@/components/ScrollReveal/ScrollReveal'
import { ParallaxBackground } from '@/components/ParallaxBackground/ParallaxBackground'
import { trackAnalyticsEvent } from '@/features/analytics/googleAnalytics'
import { blogPosts } from '@/data/blogPosts'
import { portfolioProjects } from '@/data/portfolio'
import { media } from '@/shared/config/media'
import styles from './Home.module.css'

const featuredBlogSlugs = [
  'ile-kosztuje-strona-internetowa-w-lodzi',
  'strony-internetowe-lodz-jak-wybrac-wykonawce-dla-firmy-uslugowej',
]

export default function Home() {
  const [comingSoonId, setComingSoonId] = useState<string | null>(null)

  const handleReadMoreClick = (e: React.MouseEvent, project: (typeof portfolioProjects)[0]) => {
    trackAnalyticsEvent('portfolio_project_clicked', {
      location: 'portfolio_section',
      project_id: project.id,
      project_title: project.title,
      project_ready: project.isReady,
    })

    if (!project.isReady) {
      e.preventDefault()
      setComingSoonId(project.id)
      setTimeout(() => setComingSoonId(null), 3000)
    }
  }

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

  const featuredBlogPosts = featuredBlogSlugs
    .map((slug) => blogPosts.find((post) => post.slug === slug))
    .filter((post): post is (typeof blogPosts)[number] => Boolean(post))

  return (
    <div className={styles.home}>
      <section className={styles.hero}>
        <ParallaxBackground
          videoSrc={media.home.hero.mp4}
          webmSrc={media.home.hero.webm}
          posterSrc={media.home.hero.poster}
          overlayVariant="minimal"
          disableVideoOnMobile
        />

        <ScrollReveal>
          <div className={`${styles.heroContent} ${styles.heroContentMinimal}`}>
            <h1 className={styles.heroTitle}>Profesjonalne strony internetowe.</h1>
            <p className={styles.heroSub}>
              Projektuję strony internetowe, które budują wizerunek, zaufanie i autorytet marki.
            </p>
            <Link
              href="/#portfolio"
              className={`${styles.ctaButton} ${styles.heroCtaButtonMinimal}`}
              onClick={() =>
                trackAnalyticsEvent('cta_clicked', {
                  location: 'hero',
                  label: 'Zobacz moje prace',
                  destination: '/#portfolio',
                })
              }
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
              <div className={styles.signatureSmall}>
                <Image
                  src="/fila-signature/signature-fila-gold.svg"
                  alt="Norbert Fila"
                  width={260}
                  height={117}
                  style={{
                    width: '220px',
                    height: 'auto',
                    display: 'block',
                    margin: '0 0 -1rem 0',
                  }}
                />
              </div>
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
              <Link
                href="/contact"
                className={styles.serviceItem}
                onClick={() =>
                  trackAnalyticsEvent('contact_clicked', {
                    location: 'home_service_01',
                    service: 'Strona, która buduje zaufanie do marki',
                  })
                }
              >
                <span className={styles.serviceIconNumber}>01</span>
                <span>Strona, która buduje zaufanie do marki</span>
                <ArrowUpRight size={28} className={styles.serviceArrow} />
              </Link>
              <Link
                href="/contact"
                className={styles.serviceItem}
                onClick={() =>
                  trackAnalyticsEvent('contact_clicked', {
                    location: 'home_service_02',
                    service: 'Landing page, który zamienia ruch w zapytania',
                  })
                }
              >
                <span className={styles.serviceIconNumber}>02</span>
                <span>Landing page, który zamienia ruch w zapytania</span>
                <ArrowUpRight size={28} className={styles.serviceArrow} />
              </Link>
              <Link
                href="/contact"
                className={styles.serviceItem}
                onClick={() =>
                  trackAnalyticsEvent('contact_clicked', {
                    location: 'home_service_03',
                    service: 'Oferta usług pokazana jasno i bez chaosu',
                  })
                }
              >
                <span className={styles.serviceIconNumber}>03</span>
                <span>Oferta usług pokazana jasno i bez chaosu</span>
                <ArrowUpRight size={28} className={styles.serviceArrow} />
              </Link>
              <Link
                href="/contact"
                className={styles.serviceItem}
                onClick={() =>
                  trackAnalyticsEvent('contact_clicked', {
                    location: 'home_service_04',
                    service: 'Formularze i CTA, które prowadzą klienta do kontaktu',
                  })
                }
              >
                <span className={styles.serviceIconNumber}>04</span>
                <span>Formularze i CTA, które prowadzą klienta do kontaktu</span>
                <ArrowUpRight size={28} className={styles.serviceArrow} />
              </Link>
              <Link
                href="/contact"
                className={styles.serviceItem}
                onClick={() =>
                  trackAnalyticsEvent('contact_clicked', {
                    location: 'home_service_05',
                    service: 'Integracje i funkcje na zamówienie',
                  })
                }
              >
                <span className={styles.serviceIconNumber}>05</span>
                <span>Integracje i funkcje na zamówienie</span>
                <ArrowUpRight size={28} className={styles.serviceArrow} />
              </Link>
              <Link
                href="/contact"
                className={styles.serviceItem}
                onClick={() =>
                  trackAnalyticsEvent('contact_clicked', {
                    location: 'home_service_06',
                    service: 'Doradztwo w wyborze hostingu i domeny',
                  })
                }
              >
                <span className={styles.serviceIconNumber}>06</span>
                <span>Doradztwo w wyborze hostingu i domeny</span>
                <ArrowUpRight size={28} className={styles.serviceArrow} />
              </Link>
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
                  onClick={() => {
                    scrollCarousel('left')
                    trackAnalyticsEvent('carousel_control_clicked', {
                      location: 'portfolio_section',
                      direction: 'left',
                    })
                  }}
                  className={styles.controlBtn}
                  aria-label="Poprzedni projekt"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={() => {
                    scrollCarousel('right')
                    trackAnalyticsEvent('carousel_control_clicked', {
                      location: 'portfolio_section',
                      direction: 'right',
                    })
                  }}
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
                      <Link
                        href={`/portfolio#${project.id}`}
                        className={styles.readMoreBtn}
                        onClick={(e) => handleReadMoreClick(e, project)}
                      >
                        {comingSoonId === project.id ? (
                          <span
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '0.35rem',
                              color: 'var(--color-gold)',
                            }}
                          >
                            Wkrótce dostępne <Clock size={18} />
                          </span>
                        ) : (
                          <>
                            Czytaj dalej <ArrowRight size={18} />
                          </>
                        )}
                      </Link>
                    </div>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '5rem' }}>
            <ScrollReveal>
              <Link
                href="/portfolio"
                className={`${styles.ctaButton} ${styles.ctaButtonSolid}`}
                onClick={() =>
                  trackAnalyticsEvent('portfolio_all_clicked', {
                    location: 'portfolio_section',
                    label: 'Zobacz wszystkie projekty',
                  })
                }
              >
                Zobacz wszystkie projekty
              </Link>
            </ScrollReveal>
          </div>
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

      <section className={styles.processSection} id="proces">
        <div className={styles.container}>
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
                  Poznaję Twój biznes, docelowych klientów i cele. Ustalamy wspólnie, jakie
                  podstrony i funkcje są faktycznie niezbędne.
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
        </div>
      </section>

      <section className={styles.blogEntrySection}>
        <div className={styles.container}>
          <ScrollReveal>
            <div className={styles.blogEntryHeader}>
              <span className={styles.sectionLabel}>Blog</span>
              <h2 className={styles.sectionTitle}>
                Jeśli porównujesz oferty, zacznij od tych dwóch wpisów.
              </h2>
              <p className={styles.blogEntryIntro}>
                To najlepszy punkt wejścia, jeśli chcesz zrozumieć koszt strony, sposób myślenia
                wykonawcy i różnicę między ładnym projektem a stroną, która naprawdę pracuje na
                biznes.
              </p>
            </div>

            <div className={styles.blogEntryGrid}>
              {featuredBlogPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className={styles.blogEntryCard}
                  onClick={() =>
                    trackAnalyticsEvent('blog_post_clicked', {
                      location: 'home_blog_section',
                      slug: post.slug,
                      title: post.title,
                    })
                  }
                >
                  <div className={styles.blogEntryCardMain}>
                    <span className={styles.blogEntryMeta}>
                      {`${post.category} • ${post.readingTime}`}
                    </span>
                    <h3 className={styles.blogEntryTitle}>{post.displayTitle || post.title}</h3>
                  </div>
                  <div className={styles.blogEntryCardSide}>
                    <p className={styles.blogEntryText}>{post.excerpt}</p>
                    <span className={styles.blogEntryLink}>
                      Czytaj wpis <ArrowRight size={18} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            <div className={styles.blogEntryFooter}>
              <Link
                href="/blog"
                className={styles.blogEntryAllLink}
                onClick={() =>
                  trackAnalyticsEvent('blog_index_clicked', {
                    location: 'home_blog_section',
                    label: 'Przejdź do całego bloga',
                  })
                }
              >
                Przejdź do całego bloga
              </Link>
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
            <Link
              href="/contact"
              className={styles.finalCtaButton}
              onClick={() =>
                trackAnalyticsEvent('contact_clicked', {
                  location: 'home_final_cta',
                  label: 'Przejdź do formularza',
                })
              }
            >
              Przejdź do formularza
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
