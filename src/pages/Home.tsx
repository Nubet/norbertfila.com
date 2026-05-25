import { useEffect, useState } from 'react'
import { setSeo } from '../utils/seo'
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
import { Link } from 'react-router-dom'
import { FAQ } from '../components/FAQ/FAQ'
import { TechMarquee } from '../components/TechMarquee/TechMarquee'
import { StickyCTA } from '../components/StickyCTA/StickyCTA'
import { ScrollReveal } from '../components/ScrollReveal/ScrollReveal'
import styles from './Home.module.css'

const portfolioProjects = [
  {
    title: 'Doradztwo Podatkowe',
    description:
      'Nowoczesny landing page dla eksperta podatkowego. Zaprojektowany z myślą o budowaniu zaufania i szybkiej konwersji (lead generation).',
    image: `${import.meta.env.BASE_URL}client-projects/norbert-fila-biuro-podatkowe-projekt.png`,
    url: 'https://nubet.github.io/biuro-podatkowe-wizytowka/',
    urlLabel: 'Zobacz stronę na żywo',
    isGithub: false,
  },
  {
    title: 'Centrum Badań Jutrzejszych',
    description:
      'Czytelna, wzbudzająca autorytet strona placówki medycznej. Przejrzysta struktura sekcji, ułatwiająca pacjentom zapis na badania.',
    image: `${import.meta.env.BASE_URL}client-projects/norbert-fila-klinika-projekt.png`,
    url: 'https://nubet.github.io/klinika-centrum-badan-landing-page/',
    urlLabel: 'Zobacz stronę na żywo',
    isGithub: false,
  },
]

export default function Home() {
  const [zoomedImage, setZoomedImage] = useState<string | null>(null)

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

  useEffect(() => {
    setSeo({
      title: 'Norbert Fila - Web Developer dla Biznesu',
      description:
        'Projektuję i tworzę strony internetowe, które zdobywają klientów. Połączenie pasji programistycznej z biznesowym podejściem.',
      canonicalUrl: 'https://norbertfila.com/',
    })
  }, [])

  return (
    <div className={styles.home}>
      <StickyCTA />

      {/* Hero Section */}
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
              <Link to="/contact" className={styles.ctaButton}>
                Darmowa wycena <ArrowRight size={24} />
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Tech Marquee Section */}
      <ScrollReveal delay={200}>
        <TechMarquee />
      </ScrollReveal>

      {/* Manifesto Section */}
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
                <img
                  src={`${import.meta.env.BASE_URL}profile/avatar.webp`}
                  alt="Profesjonalne zdjecie autora strony"
                  className={styles.portraitImage}
                  loading="lazy"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Benefits - Bento Grid */}
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
                  pierwszego kliknięcia krzyczą „jesteśmy profesjonalistami”, budując ekstremalne
                  zaufanie u Twoich potencjalnych klientów.
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
                  Zero technologicznego bełkotu. Tłumaczę kod na język biznesu i zysków. Zawsze
                  dokładnie wiesz, za co płacisz i na jakim etapie jest projekt.
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
                  Inwestujesz raz a dobrze.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services - Editorial List */}
      <section className={styles.bigTextSection}>
        <div className={styles.container}>
          <ScrollReveal>
            <h2 className={styles.sectionLabel}>Co mogę dla Ciebie zrobić?</h2>
            <div className={styles.servicesList}>
              <Link
                to="/contact"
                className={styles.serviceItem}
                aria-label="Zapytaj o stronę, która buduje zaufanie do marki"
              >
                <span className={styles.serviceIcon}>01</span>
                <span>Strona, która buduje zaufanie do marki</span>
                <ArrowUpRight size={32} />
              </Link>
              <Link
                to="/contact"
                className={styles.serviceItem}
                aria-label="Zapytaj o landing page, który zamienia ruch w zapytania"
              >
                <span className={styles.serviceIcon}>02</span>
                <span>Landing page, który zamienia ruch w zapytania</span>
                <ArrowUpRight size={32} />
              </Link>
              <Link
                to="/contact"
                className={styles.serviceItem}
                aria-label="Zapytaj o ofertę usług pokazaną jasno i bez chaosu"
              >
                <span className={styles.serviceIcon}>03</span>
                <span>Oferta usług pokazana jasno i bez chaosu</span>
                <ArrowUpRight size={32} />
              </Link>
              <Link
                to="/contact"
                className={styles.serviceItem}
                aria-label="Zapytaj o formularze i CTA prowadzące do kontaktu"
              >
                <span className={styles.serviceIcon}>04</span>
                <span>Formularze i CTA, które prowadzą klienta do kontaktu</span>
                <ArrowUpRight size={32} />
              </Link>
              <Link
                to="/contact"
                className={styles.serviceItem}
                aria-label="Zapytaj o integracje i funkcje na zamówienie"
              >
                <span className={styles.serviceIcon}>05</span>
                <span>Integracje i funkcje na zamówienie</span>
                <ArrowUpRight size={32} />
              </Link>
              <Link
                to="/contact"
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

      {/* Educational - Why websites lose clients */}
      <section className={styles.bigTextSection} style={{ background: '#fff' }}>
        <div className={styles.container}>
          <ScrollReveal>
            <h2 className={styles.sectionLabel}>Szybki audyt</h2>
            <div className={styles.educationWrap}>
              <h2>Dlaczego Twoja strona traci klientów?</h2>
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

              <div className={styles.educationActions}>
                {/*
                  <Link to="/contact" className={styles.educationCta}>
                  <Download size={20} /> Pobierz darmową checklistę: 12 błędów strony
                </Link>
                  */}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Selected Projects */}
      <section className={styles.bigTextSection} style={{ background: '#fff' }}>
        <div className={styles.container}>
          <ScrollReveal>
            <h2 className={styles.sectionLabel}>Wybrane realizacje</h2>
            <div className={styles.projectsGrid}>
              {portfolioProjects.map((project) => (
                <article className={styles.projectCard} key={project.title}>
                  <button
                    className={styles.projectImageWrapper}
                    onClick={() => setZoomedImage(project.image)}
                    aria-label={`Powiększ projekt ${project.title}`}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className={styles.projectImage}
                      loading="lazy"
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

      {/* Process */}
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

      {/* FAQ Section */}
      <ScrollReveal>
        <FAQ />
      </ScrollReveal>

      {/* Final Call */}
      <section className={styles.bigTextSection} style={{ textAlign: 'center' }}>
        <ScrollReveal>
          <div className={styles.container}>
            <h2
              style={{
                fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                fontFamily: '"Space Grotesk", sans-serif',
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
              to="/contact"
              className={styles.ctaButton}
              style={{ margin: '0 auto', width: 'fit-content' }}
            >
              Formularz bezpłatnej wyceny <ArrowRight size={24} />
            </Link>

            <Link to="/cv" className={styles.footerLink}>
              Sprawdź moje techniczne doświadczenie (CV)
            </Link>
          </div>
        </ScrollReveal>
      </section>

      {/* Lightbox Modal */}
      {zoomedImage && (
        <div className={styles.lightbox} onClick={() => setZoomedImage(null)}>
          <button className={styles.lightboxClose} aria-label="Zamknij podgląd">
            <X size={36} />
          </button>
          <img src={zoomedImage} alt="Powiększona wizualizacja" className={styles.lightboxImage} />
        </div>
      )}
    </div>
  )
}
