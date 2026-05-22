import { useEffect } from 'react'
import { setSeo } from '../utils/seo'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import styles from './Home.module.css'

const portfolioProjects = [
  {
    title: 'Strona usługowa dla kancelarii',
    description: 'Nowoczesna wizytowka z naciskiem na kontakt i konwersje.',
    image:
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1400&q=80',
  },
  {
    title: 'Landing page dla konsultanta',
    description: 'Strona sprzedazowa prowadzaca klienta od problemu do zapytania.',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80',
  },
  {
    title: 'Serwis lokalnej firmy B2B',
    description: 'Przejrzysta architektura tresci i szybkie dzialanie na mobile.',
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80',
  },
]

export default function Home() {
  useEffect(() => {
    setSeo({
      title: 'Norbert Fila - Web Developer dla Biznesu',
      description:
        'Projektuję i tworzę strony internetowe, które zdobywają klientów. Połączenie pasji programistycznej z biznesowym podejściem.',
      canonicalUrl: 'https://norbertfila.com/portfolio/',
    })
  }, [])

  return (
    <div className={styles.home}>
      {/* Hero Section */}
      <section className={styles.container}>
        <div className={styles.hero}>
          <div className={styles.heroContent}>
            <div className={styles.statusBadge}>Dostępny na nowe projekty</div>
            <h1>
              Tworzę strony, które <span className={styles.highlight}>sprzedają</span> Twoje usługi.
            </h1>
            <p className={styles.heroSub}>
              Pomagam firmom budować zaufanie w sieci poprzez szybkie i nowoczesne rozwiązania webowe.
            </p>
          </div>
          <div className={styles.heroActions}>
            <a href="mailto:contact@norbertfila.com" className={styles.ctaButton}>
              Darmowa wycena <ArrowRight size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* Manifesto Section */}
      <section className={styles.bigTextSection}>
        <div className={styles.container}>
          <span className={styles.sectionLabel}>Mój cel</span>
          <div className={styles.manifestoLayout}>
            <p className={styles.manifesto}>
              Wiem, że Twoja strona ma jedno zadanie: <span className={styles.highlight}>zarabiać</span>. Łączę rzetelną wiedzę technologiczną z bezpośrednim, biznesowym podejściem. Bez zbędnego lania wody, tylko konkretne rezultaty.
            </p>
            <div className={styles.portraitFrame}>
              <img
                src={`${import.meta.env.BASE_URL}profile/NorbertFilaAvatar.webp`}
                alt="Profesjonalne zdjecie autora strony"
                className={styles.portraitImage}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits - Bento Grid */}
      <section className={styles.bigTextSection} style={{ background: '#fff' }}>
        <div className={styles.container}>
          <span className={styles.sectionLabel}>Dlaczego ja?</span>
          <div className={styles.grid}>
            <div className={styles.benefitCard}>
              <h3>Buduję zaufanie od pierwszego kliknięcia.</h3>
              <p>Profesjonalny design to nie tylko estetyka, to sygnał dla klienta, że traktujesz swój biznes poważnie.</p>
            </div>
            <div className={styles.benefitCard}>
              <h3>Szybkość to pieniądz.</h3>
              <p>Twoja strona będzie ładować się błyskawicznie, co realnie przekłada się na wyższą konwersję.</p>
            </div>
            <div className={styles.benefitCard}>
              <h3>Jasne zasady.</h3>
              <p>Tłumaczę technologię na język korzyści. Zawsze wiesz, na jakim etapie jest Twój projekt.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services - Editorial List */}
      <section className={styles.bigTextSection}>
        <div className={styles.container}>
          <span className={styles.sectionLabel}>W czym pomogę?</span>
          <div className={styles.servicesList}>
            <div className={styles.serviceItem}>
              <span className={styles.serviceIcon}>01</span>
              <span>Przejrzyste strony wizytówki</span>
              <ArrowUpRight size={32} />
            </div>
            <div className={styles.serviceItem}>
              <span className={styles.serviceIcon}>02</span>
              <span>Skuteczne Landing Pages</span>
              <ArrowUpRight size={32} />
            </div>
            <div className={styles.serviceItem}>
              <span className={styles.serviceIcon}>03</span>
              <span>Optymalizacja i opieka techniczna</span>
              <ArrowUpRight size={32} />
            </div>
            <div className={styles.serviceItem}>
              <span className={styles.serviceIcon}>04</span>
              <span>Doradztwo w wyborze hostingu i domeny</span>
              <ArrowUpRight size={32} />
            </div>
          </div>
        </div>
      </section>

      {/* Selected Projects */}
      <section className={styles.bigTextSection} style={{ background: '#fff' }}>
        <div className={styles.container}>
          <span className={styles.sectionLabel}>Wybrane realizacje</span>
          <div className={styles.projectsGrid}>
            {portfolioProjects.map((project) => (
              <article className={styles.projectCard} key={project.title}>
                <img src={project.image} alt={project.title} className={styles.projectImage} loading="lazy" />
                <div className={styles.projectContent}>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className={styles.bigTextSection} style={{ background: '#0F0F0F', color: '#fff' }}>
        <div className={styles.container}>
          <span className={styles.sectionLabel} style={{ color: 'var(--accent-color)' }}>Proces</span>
          <div className={styles.processSteps}>
            <div className={styles.step}>
              <div className={styles.stepNumber}>01</div>
              <h3>Rozmowa</h3>
              <p>Analizujemy Twoje potrzeby i cele biznesowe. Ustalamy priorytety.</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>02</div>
              <h3>Projekt</h3>
              <p>Tworzę koncepcję, która najlepiej sprzeda Twoją ofertę.</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>03</div>
              <h3>Start</h3>
              <p>Uruchamiam stronę i dbam o to, by wszystko działało perfekcyjnie.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call */}
      <section className={styles.bigTextSection} style={{ textAlign: 'center' }}>
        <div className={styles.container}>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700, marginBottom: '2rem' }}>
            Masz pomysł na projekt?
          </h2>
          <a href="mailto:contact@norbertfila.com" className={styles.ctaButton} style={{ margin: '0 auto' }}>
            Porozmawiajmy o szczegółach
          </a>
          
          <Link to="/cv" className={styles.footerLink}>
            Sprawdź moje techniczne doświadczenie (CV)
          </Link>
        </div>
      </section>
    </div>
  )
}
