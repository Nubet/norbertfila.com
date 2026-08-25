'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, type FormEvent } from 'react'
import { ChevronLeft, ChevronRight, ArrowRight, ArrowUpRight } from 'lucide-react'
import { FAQ } from '@/components/FAQ/FAQ'
import { ScrollReveal } from '@/components/ScrollReveal/ScrollReveal'
import { subscribeToEbook, EbookSubscribeError } from '@/features/ebook/subscribeToEbook'
import styles from './Home.module.css'

const caseStudies = [
  {
    client: 'Santoro',
    industry: 'Szkoła Językowa',
    title: 'Redesign przestarzałej witryny w celu zwiększenia konwersji.',
    images: [
      '/visual-projects/Santoro-szkola-jezykowa/1.webp',
      '/visual-projects/Santoro-szkola-jezykowa/2.webp',
      '/visual-projects/Santoro-szkola-jezykowa/3.webp',
    ],
    problem: 'Oferta szkoły była nieczytelna, a proces zapisu skomplikowany, co powodowało ucieczkę potencjalnych kursantów i frustrację.',
    solution: 'Całkowity redesign strony z naciskiem na prostą architekturę informacji oraz przejrzysty system zapisu na zajęcia.',
    design: 'Zastosowałem dużą ilość "whitespace\'u" oraz spokojną paletę barw, by zbudować zaufanie. Zamiast krzykliwych banerów, postawiłem na dużą, czytelną typografię, prowadzącą prosto do formularza.',
    result: 'Strona stała się elegancką wizytówką, która odciąża administrację szkoły i bezbłędnie konwertuje odwiedzających z urządzeń mobilnych.',
  },
  {
    client: 'DB Club',
    industry: 'Butikowe Studio Ruchu',
    title: 'Wizytówka internetowa dla miejsca w segmencie premium.',
    images: [
      '/client-projects/norbert-fila-db-club-projekt.ng.webp',
    ],
    problem: 'Studio potrzebowało cyfrowej obecności, która oddawałaby ich luksusowy charakter, wyróżniając się na tle generycznych siłowni.',
    solution: 'Minimalistyczna strona oparta na autorskim kodzie, gwarantującym błyskawiczne ładowanie i płynne animacje.',
    design: 'Ciemna, zgaszona zieleń w połączeniu ze szlachetnymi fontami szeryfowymi. Duży nacisk na wyeksponowanie zdjęć wnętrz, by użytkownik poczuł klimat miejsca jeszcze przed wizytą.',
    result: 'Strona idealnie wpisała się w estetykę grupy docelowej, a zintegrowany, zewnętrzny system rezerwacji drastycznie ułatwił umawianie wizyt.',
  },
  {
    client: 'Biuro Podatkowe',
    industry: 'Doradztwo Finansowe',
    title: 'Landing page dla eksperta budujący natychmiastowe zaufanie.',
    images: [
      '/client-projects/norbert-fila-biuro-podatkowe-projekt.webp',
    ],
    problem: 'Trudna, mocno techniczna branża podatkowa często odstrasza skomplikowanym językiem i przestarzałym designem.',
    solution: 'Stworzenie wysoce konwertującego landing page\'a, skupionego wyłącznie na korzyściach dla klienta i łatwości kontaktu.',
    design: 'Zdecydowałem się na jasny, bardzo "czysty" układ z minimalnymi akcentami symbolizującymi profesjonalizm. Zredukowałem zbędne treści, zamykając ścieżkę w jednym, logicznym ciągu.',
    result: 'Klienci od razu widzą konkretną wartość i wiedzą, z kim będą współpracować, co dramatycznie ułatwia podjęcie decyzji o kontakcie.',
  }
]

export default function Home() {
  const [ebookEmail, setEbookEmail] = useState('')
  const [ebookLoading, setEbookLoading] = useState(false)
  const [ebookFeedback, setEbookFeedback] = useState<{ type: 'success' | 'error'; message: string } | null>(null)
  
  const [visualProjectIndexes, setVisualProjectIndexes] = useState(caseStudies.map(() => 0))

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

      {/* CASE STUDIES */}
      <section className={styles.portfolioSection} id="portfolio">
        <div className={styles.container}>
          <ScrollReveal>
            <span className={styles.sectionLabel}>Realizacje</span>
            <h2 className={styles.sectionTitle}>Case Studies</h2>
          </ScrollReveal>
          
          <div className={styles.caseStudiesList}>
            {caseStudies.map((study, idx) => {
              const currentImgIndex = visualProjectIndexes[idx] ?? 0
              return (
              <ScrollReveal delay={100} key={study.client}>
                <article className={styles.caseStudyCard}>
                  <div className={styles.caseStudyVisuals}>
                    <div className={styles.visualImageWrapper}>
                      <Image src={study.images[currentImgIndex]} alt={study.client} fill className={styles.projectImage} />
                      {study.images.length > 1 && (
                        <div className={styles.visualDots}>
                          {study.images.map((_, dotIdx) => (
                            <button
                              key={dotIdx}
                              type="button"
                              className={`${styles.dot} ${dotIdx === currentImgIndex ? styles.dotActive : ''}`}
                              onClick={() => setVisualProjectImageIndex(idx, dotIdx)}
                              aria-label={`Pokaż zdjęcie ${dotIdx + 1}`}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className={styles.caseStudyInfo}>
                    <div className={styles.caseStudyHeader}>
                      <span className={styles.caseStudyIndustry}>{study.industry}</span>
                      <h3>{study.client}</h3>
                    </div>
                    <h4 className={styles.caseStudyTitle}>{study.title}</h4>
                    
                    <div className={styles.caseStudyDetails}>
                      <div className={styles.detailBlock}>
                        <h5>Wyzwanie</h5>
                        <p>{study.problem}</p>
                      </div>
                      <div className={styles.detailBlock}>
                        <h5>Rozwiązanie</h5>
                        <p>{study.solution}</p>
                      </div>
                      <div className={styles.detailBlock}>
                        <h5>Decyzje projektowe</h5>
                        <p>{study.design}</p>
                      </div>
                      <div className={styles.detailBlock}>
                        <h5>Efekt</h5>
                        <p>{study.result}</p>
                      </div>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            )})}
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
