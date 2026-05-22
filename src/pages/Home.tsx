import { useEffect } from 'react'
import { setSeo } from '../utils/seo'
import { ArrowRight, Zap, Shield, MessageSquare } from 'lucide-react'
import { Link } from 'react-router-dom'
import styles from './Home.module.css'

export default function Home() {
  useEffect(() => {
    setSeo({
      title: 'Norbert Fila - Strony internetowe dla Twojego biznesu',
      description:
        'Projektuję i tworzę nowoczesne strony internetowe, które budują zaufanie i pozyskują klientów. Sprawdź, jak mogę pomóc Twojej firmie.',
      canonicalUrl: 'https://norbertfila.com/portfolio/',
    })
  }, [])

  return (
    <div className={styles.home}>
      {/* Hero Section */}
      <header className={styles.hero}>
        <div className={styles.container}>
          <h1>Projektuję i tworzę strony internetowe, które zdobywają klientów dla Twojej firmy</h1>
          <p>
            Pomagam małym i średnim firmom zaistnieć w sieci dzięki nowoczesnym, szybkim i skutecznym rozwiązaniom webowym.
          </p>
          <a href="mailto:contact@norbertfila.com" className={styles.ctaButton}>
            Darmowa wycena <ArrowRight size={18} style={{ marginLeft: '8px', verticalAlign: 'middle' }} />
          </a>
        </div>
      </header>

      {/* Benefits Section */}
      <section className={styles.benefits}>
        <div className={styles.container}>
          <div className={styles.sectionTitle}>
            <h2>Dlaczego warto ze mną pracować?</h2>
          </div>
          <div className={styles.grid}>
            <div className={styles.benefitCard}>
              <Zap size={40} color="var(--color-yellow)" style={{ marginBottom: '1rem' }} />
              <h3>Szybkość działania</h3>
              <p>Twoja strona będzie ładować się błyskawicznie, co poprawi doświadczenia użytkowników i pozycję w Google.</p>
            </div>
            <div className={styles.benefitCard}>
              <Shield size={40} color="var(--color-yellow)" style={{ marginBottom: '1rem' }} />
              <h3>Budowanie zaufania</h3>
              <p>Profesjonalny i nowoczesny design sprawi, że klienci chętniej skorzystają z Twoich usług.</p>
            </div>
            <div className={styles.benefitCard}>
              <MessageSquare size={40} color="var(--color-yellow)" style={{ marginBottom: '1rem' }} />
              <h3>Jasna komunikacja</h3>
              <p>Tłumaczę zawiłości techniczne na ludzki język i zawsze dowożę projekty w ustalonym terminie.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About / Services Section */}
      <section className={styles.about}>
        <div className={styles.container}>
          <div className={styles.aboutContent}>
            <p>
              Wiem, że Twoja strona internetowa ma jedno główne zadanie: <strong>budować zaufanie i pozyskiwać klientów</strong>. 
              Jako programista i student informatyki na PŁ (poniżej 26. r.ż), łączę pasję do kodowania z biznesowym podejściem do projektów.
            </p>
            
            <h3>W czym mogę Ci pomóc?</h3>
            <ul className={styles.servicesList}>
              <li>Stworzę dla Ciebie przejrzystą stronę wizytówkę, która wyróżni Cię na tle konkurencji.</li>
              <li>Zadbam o to, by formularz kontaktowy działał bez zarzutu i nie zapychał Twojej skrzynki spamem.</li>
              <li>Chętnie podejmę się bardziej skomplikowanych projektów!</li>
              <li>Pomogę dobrać najtańszy hosting i domenę, by nie generować zbędnych kosztów stałych.</li>
            </ul>
            
            <p>
              Działam sprawnie, komunikuję się jasno i zawsze dowożę projekty w terminie. Jeśli szukasz kogoś, 
              kto ogarnie temat od A do Z i nie zostawi Cię z niedziałającym linkiem - napisz do mnie!
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className={styles.process}>
        <div className={styles.container}>
          <div className={styles.sectionTitle}>
            <h2>Proces współpracy</h2>
          </div>
          <div className={styles.processSteps}>
            <div className={styles.step}>
              <div className={styles.stepNumber}>1</div>
              <h3>Rozmowa</h3>
              <p>Analizujemy Twoje potrzeby i cele biznesowe.</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>2</div>
              <h3>Projekt</h3>
              <p>Tworzę wizualną i techniczną koncepcję Twojej strony.</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>3</div>
              <h3>Wdrożenie</h3>
              <p>Uruchamiam gotową stronę pod Twoją domeną.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className={styles.hero} style={{ background: 'var(--bg-soft)', padding: '5rem 0' }}>
        <div className={styles.container}>
          <h2>Gotowy na nową stronę?</h2>
          <p>Porozmawiajmy o Twoim projekcie i przygotujmy darmową wycenę.</p>
          <a href="mailto:contact@norbertfila.com" className={styles.ctaButton}>
            Porozmawiajmy o Twoim projekcie
          </a>
          
          <Link to="/cv" className={styles.footerLink}>
            Jesteś rekruterem? Zobacz moje techniczne portfolio i CV
          </Link>
        </div>
      </section>
    </div>
  )
}
