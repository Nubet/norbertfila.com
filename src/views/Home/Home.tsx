'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState, type FormEvent } from 'react'
import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  Zap,
  MessageSquare,
  Code2,
  Search,
  X,
  ExternalLink,
  Github,
  Smartphone,
  EyeOff,
  ImageDown,
  MousePointerClick,
} from 'lucide-react'
import { FAQ } from '@/components/FAQ/FAQ'
import { TechMarquee } from '@/components/TechMarquee/TechMarquee'
import { StickyCTA } from '@/components/StickyCTA/StickyCTA'
import { ScrollReveal } from '@/components/ScrollReveal/ScrollReveal'
import { subscribeToEbook, EbookSubscribeError } from '@/features/ebook/subscribeToEbook'
import styles from './Home.module.css'

const portfolioProjects = [
  {
    title: 'Doradztwo Podatkowe',
    description:
      'Nowoczesny landing page dla eksperta podatkowego. Zaprojektowany z myślą o budowaniu zaufania i szybkiej konwersji (lead generation).',
    image: '/client-projects/norbert-fila-biuro-podatkowe-projekt.webp',
    url: 'https://nubet.github.io/biuro-podatkowe-wizytowka/',
    urlLabel: 'Zobacz stronę na żywo',
    isGithub: false,
  },
  {
    title: 'Centrum Badań klinicznych',
    description:
      'Czytelna, wzbudzająca autorytet strona placówki medycznej. Przejrzysta struktura sekcji, ułatwiająca pacjentom zapis na badania.',
    image: '/client-projects/norbert-fila-klinika-projekt.webp',
    url: 'https://nubet.github.io/klinika-centrum-badan-landing-page/',
    urlLabel: 'Zobacz stronę na żywo',
    isGithub: false,
  },
]

export default function Home() {
  const [zoomedImage, setZoomedImage] = useState<string | null>(null)
  const [ebookEmail, setEbookEmail] = useState('')
  const [ebookLoading, setEbookLoading] = useState(false)
  const [ebookFeedback, setEbookFeedback] = useState<{
    type: 'success' | 'error'
    message: string
  } | null>(null)

  useEffect(() => {
    if (zoomedImage) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [zoomedImage])

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
      setEbookFeedback({
        type: 'success',
        message: 'Gotowe! Sprawdź skrzynkę e-mail. Wysłałem Ci e-booka.',
      })
      setEbookEmail('')
      form.reset()
    } catch (error) {
      if (error instanceof EbookSubscribeError) {
        setEbookFeedback({ type: 'error', message: error.message })
      } else {
        setEbookFeedback({
          type: 'error',
          message:
            'Nie udało się zapisać. Spróbuj ponownie za chwilę albo napisz na kontakt@norbertfila.com.',
        })
      }
    } finally {
      setEbookLoading(false)
    }
  }

  return (
    <div className={styles.home}>
      <StickyCTA />

      <section className={styles.container}>
        <ScrollReveal>
          <div className={styles.hero}>
            <div className={styles.heroContent}>
              <div className={styles.statusBadge}>DEDYKOWANE STRONY WWW</div>
              <h1>
                Tworzę strony, które <span className={styles.highlight}>sprzedają</span> Twoje
                usługi.
              </h1>
              <p className={styles.heroSub}>
                Pomagam firmom budować zaufanie w sieci poprzez szybkie i nowoczesne rozwiązania
                webowe.
              </p>
            </div>
            <div className={styles.heroActions}>
              <Link href="/contact" className={styles.ctaButton}>
                Darmowa wycena <ArrowRight size={24} />
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>

      <ScrollReveal delay={200}>
        <TechMarquee />
      </ScrollReveal>

      <section className={styles.bigTextSection}>
        <div className={styles.container}>
          <ScrollReveal>
            <h2 className={styles.sectionLabel}>Mój cel</h2>
            <div className={styles.manifestoLayout}>
              <p className={styles.manifesto}>
                Wiem, że Twoja strona ma jedno zadanie:{' '}
                <span className={styles.highlight}>zarabiać</span>. Łączę rzetelną wiedzę
                technologiczną z bezpośrednim, biznesowym podejściem. Bez zbędnego lania wody, tylko
                konkretne rezultaty.
              </p>
              <div className={styles.portraitFrame}>
                <Image
                  src="/profile/avatar.webp"
                  alt="Profesjonalne zdjecie autora strony"
                  className={styles.portraitImage}
                  width={720}
                  height={720}
                  sizes="(max-width: 768px) 88vw, (max-width: 1200px) 36vw, 420px"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className={styles.bigTextSection} style={{ background: '#fff' }}>
        <div className={styles.container}>
          <ScrollReveal>
            <h2 className={styles.sectionLabel}>Dlaczego ja?</h2>
          </ScrollReveal>
          <div className={styles.grid}>
            <ScrollReveal delay={0} className={styles.benefitCard}>
              <div className={styles.benefitIcon}>
                <ShieldCheck size={32} />
              </div>
              <div>
                <h3>Design budujący autorytet</h3>
                <p>
                  Twoja strona to Twój najlepszy handlowiec. Projektuję interfejsy, które od
                  pierwszego kliknięcia budują zaufanie i pokazują profesjonalizm.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100} className={styles.benefitCard}>
              <div className={styles.benefitIcon}>
                <Zap size={32} />
              </div>
              <div>
                <h3>Szybkość to pieniądz</h3>
                <p>
                  Każda sekunda ładowania to utraceni klienci. Moje strony ładują się błyskawicznie,
                  maksymalizując wskaźnik konwersji i obniżając koszty kampanii reklamowych.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200} className={styles.benefitCard}>
              <div className={styles.benefitIcon}>
                <MessageSquare size={32} />
              </div>
              <div>
                <h3>Jasne zasady</h3>
                <p>
                  Bez technologicznego bełkotu. Tłumaczę kod na język biznesu, więc zawsze dokładnie
                  wiesz, za co płacisz i na jakim etapie jest projekt.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={300} className={styles.benefitCard}>
              <div className={styles.benefitIcon}>
                <Code2 size={32} />
              </div>
              <div>
                <h3>Kod gotowy na rozwój</h3>
                <p>
                  Nie korzystam z ociężałych, gotowych szablonów. Piszę czysty, autorski kod, który
                  bez problemu zniesie rosnący ruch i rozwój Twojej firmy przez kolejne lata.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className={styles.bigTextSection}>
        <div className={styles.container}>
          <ScrollReveal>
            <h2 className={styles.sectionLabel}>Co mogę dla Ciebie zrobić?</h2>
            <div className={styles.servicesList}>
              <Link
                href="/contact"
                className={styles.serviceItem}
                aria-label="Zapytaj o stronę, która buduje zaufanie do marki"
              >
                <span className={styles.serviceIcon}>01</span>
                <span>Strona, która buduje zaufanie do marki</span>
                <ArrowUpRight size={32} />
              </Link>
              <Link
                href="/contact"
                className={styles.serviceItem}
                aria-label="Zapytaj o landing page, który zamienia ruch w zapytania"
              >
                <span className={styles.serviceIcon}>02</span>
                <span>Landing page, który zamienia ruch w zapytania</span>
                <ArrowUpRight size={32} />
              </Link>
              <Link
                href="/contact"
                className={styles.serviceItem}
                aria-label="Zapytaj o ofertę usług pokazaną jasno i bez chaosu"
              >
                <span className={styles.serviceIcon}>03</span>
                <span>Oferta usług pokazana jasno i bez chaosu</span>
                <ArrowUpRight size={32} />
              </Link>
              <Link
                href="/contact"
                className={styles.serviceItem}
                aria-label="Zapytaj o formularze i CTA prowadzące do kontaktu"
              >
                <span className={styles.serviceIcon}>04</span>
                <span>Formularze i CTA, które prowadzą klienta do kontaktu</span>
                <ArrowUpRight size={32} />
              </Link>
              <Link
                href="/contact"
                className={styles.serviceItem}
                aria-label="Zapytaj o integracje i funkcje na zamówienie"
              >
                <span className={styles.serviceIcon}>05</span>
                <span>Integracje i funkcje na zamówienie</span>
                <ArrowUpRight size={32} />
              </Link>
              <Link
                href="/contact"
                className={styles.serviceItem}
                aria-label="Zapytaj o doradztwo w wyborze hostingu i domeny"
              >
                <span className={styles.serviceIcon}>06</span>
                <span>Doradztwo w wyborze hostingu i domeny</span>
                <ArrowUpRight size={32} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className={styles.bigTextSection} style={{ background: '#fff' }}>
        <div className={styles.container}>
          <ScrollReveal>
            <h2 className={styles.sectionLabel}>Szybki audyt</h2>
            <div className={styles.educationWrap}>
              <h2>
                Dlaczego Twoja strona <br />
                <span className={styles.highlight}>traci klientów?</span>
              </h2>
              <div className={styles.educationGrid}>
                <article className={styles.educationCard}>
                  <div className={styles.educationCardIcon}>
                    <Smartphone size={28} />
                  </div>
                  <h3>Brak mobile-first</h3>
                  <p>
                    Ponad 60% ruchu w internecie pochodzi z urządzeń mobilnych. Jeśli strona jest
                    wolna, nieczytelna albo rozjeżdża się na telefonie, tracisz zapytania zanim
                    klient pozna ofertę.
                  </p>
                </article>
                <article className={styles.educationCard}>
                  <div className={styles.educationCardIcon}>
                    <EyeOff size={28} />
                  </div>
                  <h3>Słaba dostępność (WCAG)</h3>
                  <p>
                    Niski kontrast i brak czytelnej struktury utrudniają korzystanie i obniżają
                    zaufanie do marki.
                  </p>
                </article>
                <article className={styles.educationCard}>
                  <div className={styles.educationCardIcon}>
                    <ImageDown size={28} />
                  </div>
                  <h3>Za ciężkie obrazy</h3>
                  <p>
                    Duże pliki wydłużają ładowanie, a każda sekunda opóźnienia zmniejsza szansę na
                    kontakt.
                  </p>
                </article>
                <article className={styles.educationCard}>
                  <div className={styles.educationCardIcon}>
                    <MousePointerClick size={28} />
                  </div>
                  <h3>Chaos w CTA</h3>
                  <p>
                    Gdy nie wiadomo, co kliknąć dalej, potencjalny klient nie podejmuje żadnej
                    akcji.
                  </p>
                </article>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className={styles.bigTextSection}>
        <div className={styles.container}>
          <ScrollReveal>
            <div className={styles.ebookBox}>
              <h2 className={styles.sectionLabel}>Darmowy e-book</h2>
              <h3 className={styles.ebookTitle}>Dlaczego Twoja Strona Traci Klientów?</h3>
              <p className={styles.ebookText}>
                Podaj e-mail, a od razu wyślę Ci PDF z 4 najczęstszymi błędami przez, które tracisz
                klientów.
              </p>

              <form className={styles.ebookForm} onSubmit={handleEbookSubmit} noValidate>
                <div className={styles.ebookHoneypot} aria-hidden="true">
                  <label htmlFor="company">Company</label>
                  <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
                </div>

                <label htmlFor="ebook-email" className={styles.ebookLabel}>
                  Twój e-mail
                </label>
                <div className={styles.ebookControls}>
                  <input
                    id="ebook-email"
                    type="email"
                    className={styles.ebookInput}
                    placeholder="np. jan@firma.pl"
                    value={ebookEmail}
                    onChange={(event) => setEbookEmail(event.target.value)}
                    required
                  />
                  <button type="submit" className={styles.ebookButton} disabled={ebookLoading}>
                    {ebookLoading ? 'Wysyłanie...' : 'Odbierz e-booka'}
                  </button>
                </div>
              </form>

              {ebookFeedback && (
                <p
                  className={
                    ebookFeedback.type === 'success' ? styles.ebookSuccess : styles.ebookError
                  }
                  role={ebookFeedback.type === 'error' ? 'alert' : 'status'}
                >
                  {ebookFeedback.message}
                </p>
              )}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className={styles.bigTextSection} style={{ background: '#fff' }}>
        <div className={styles.container}>
          <ScrollReveal>
            <h2 className={styles.sectionLabel}>Wybrane realizacje</h2>
            <div className={styles.projectsGrid}>
              {portfolioProjects.map((project) => (
                <article className={styles.projectCard} key={project.title}>
                  <button
                    type="button"
                    className={styles.projectImageWrapper}
                    onClick={() => setZoomedImage(project.image)}
                    aria-label={`Powiększ projekt ${project.title}`}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      className={styles.projectImage}
                      width={960}
                      height={600}
                      sizes="(max-width: 768px) 92vw, (max-width: 1200px) 44vw, 560px"
                    />
                    <div className={styles.projectZoomOverlay}>
                      <Search size={48} className={styles.zoomIcon} />
                      <span>Kliknij, aby analizować</span>
                    </div>
                  </button>
                  <div className={styles.projectContent}>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.projectLink}
                      >
                        {project.urlLabel}
                        {project.isGithub ? <Github size={18} /> : <ExternalLink size={18} />}
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className={styles.bigTextSection} style={{ background: '#0F0F0F', color: '#fff' }}>
        <div className={styles.container}>
          <ScrollReveal>
            <h2 className={styles.sectionLabel} style={{ color: 'var(--accent-color)' }}>
              Proces
            </h2>
            <div className={styles.processSteps}>
              <div className={styles.step}>
                <div className={styles.stepNumber}>01</div>
                <h3>Analiza Biznesowa</h3>
                <p>
                  Zaczynamy od zrozumienia Twojej oferty i grupy docelowej. Ustalamy, jak strona ma
                  generować zyski.
                </p>
              </div>
              <div className={styles.step}>
                <div className={styles.stepNumber}>02</div>
                <h3>Projekt & Kod</h3>
                <p>
                  Tworzę dedykowane rozwiązanie – od architektury informacji, przez UX/UI, aż po
                  błyskawiczny kod.
                </p>
              </div>
              <div className={styles.step}>
                <div className={styles.stepNumber}>03</div>
                <h3>Bezpieczne Wdrożenie</h3>
                <p>
                  Podpinam domenę, konfiguruję hosting i uruchamiam stronę w sieci. Zabezpieczam ją
                  certyfikatem SSL, dzięki czemu od pierwszej sekundy działa szybko, stabilnie i
                  bezpiecznie.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <ScrollReveal>
        <FAQ />
      </ScrollReveal>

      <section className={styles.bigTextSection} style={{ textAlign: 'center' }}>
        <ScrollReveal>
          <div className={styles.container}>
            <h2
              style={{
                fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                fontFamily: 'var(--font-space-grotesk), sans-serif',
                fontWeight: 700,
                marginBottom: '1rem',
                lineHeight: 1.1,
              }}
            >
              Zbudujmy stronę, która <span className={styles.highlight}>sprzedaje</span>.
            </h2>
            <p
              style={{
                fontSize: '1.2rem',
                marginBottom: '3rem',
                color: 'var(--text-muted)',
                maxWidth: '600px',
                margin: '0 auto 3rem',
              }}
            >
              Porozmawiajmy o tym, jak nowoczesna wizytówka lub landing page może pomóc w skalowaniu
              Twojej firmy.
            </p>
            <Link
              href="/contact"
              className={styles.ctaButton}
              style={{ margin: '0 auto', width: 'fit-content' }}
            >
              Formularz bezpłatnej wyceny <ArrowRight size={24} />
            </Link>

            <Link href="/cv" className={styles.footerLink}>
              Sprawdź moje techniczne doświadczenie (CV)
            </Link>
          </div>
        </ScrollReveal>
      </section>

      {zoomedImage && (
        <div
          className={styles.lightbox}
          onClick={() => setZoomedImage(null)}
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              event.preventDefault()
              setZoomedImage(null)
            }
          }}
          role="button"
          tabIndex={0}
          aria-label="Zamknij podgląd"
        >
          <button type="button" className={styles.lightboxClose} aria-label="Zamknij podgląd">
            <X size={36} />
          </button>
          <Image
            src={zoomedImage}
            alt="Powiekszona wizualizacja"
            className={styles.lightboxImage}
            width={1440}
            height={900}
            sizes="100vw"
            unoptimized
          />
        </div>
      )}
    </div>
  )
}
