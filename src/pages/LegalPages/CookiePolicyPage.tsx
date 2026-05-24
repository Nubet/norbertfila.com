import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { setSeo } from '../../utils/seo'
import { showCookiePreferences } from '../../features/cookies/cookieConsent'
import { CookiePolicyTable } from '../../features/cookies/CookiePolicyTable'
import styles from './LegalPages.module.css'

export default function CookiePolicyPage() {
  useEffect(() => {
    window.scrollTo(0, 0)

    setSeo({
      title: 'Polityka Cookies | Norbert Fila',
      description: 'Informacje o plikach cookies wykorzystywanych na stronie norbertfila.com',
      canonicalUrl: 'https://norbertfila.com/cookie-policy',
    })
  }, [])

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <Link to="/" className={styles.backLink}>
            <ArrowLeft size={20} /> Powrót
          </Link>
        </nav>

        <article className={styles.content}>
          <h1 className={styles.title}>Polityka Cookies</h1>
          <p className={styles.lastUpdated}>Ostatnia aktualizacja: Maj 2026</p>

          <section>
            <h2>1. Czym są pliki cookies?</h2>
            <p>
              Pliki cookies (tzw. „ciasteczka”) to dane informatyczne, w szczególności pliki
              tekstowe, które przechowywane są w urządzeniu końcowym użytkownika serwisu i
              przeznaczone są do korzystania ze stron internetowych serwisu.
            </p>
          </section>

          <section>
            <h2>2. Do czego wykorzystujemy cookies?</h2>
            <p>
              Na tej stronie internetowej pliki cookies wykorzystywane są w następujących celach:
            </p>
            <ul>
              <li>
                <strong>Niezbędne (Techniczne):</strong> Zapewnienie prawidłowego działania strony
                (np. zapamiętanie Twojego wyboru w pasku zgody na cookies).
              </li>
              <li>
                <strong>Analityczne:</strong> Zbieranie anonimowych statystyk, które pomagają
                zrozumieć, w jaki sposób użytkownicy korzystają ze strony, co umożliwia ulepszanie
                jej struktury i zawartości.
              </li>
            </ul>
          </section>

          <section>
            <h2>3. Zarządzanie plikami cookies</h2>
            <p>
              Większość przeglądarek internetowych domyślnie akceptuje pliki cookies. Możesz w
              każdej chwili zmienić ustawienia swojej przeglądarki, aby blokować obsługę cookies lub
              informować o ich każdorazowym zamieszczeniu w Twoim urządzeniu. Szczegółowe informacje
              o możliwości i sposobach obsługi plików cookies dostępne są w ustawieniach
              oprogramowania (przeglądarki internetowej).
            </p>
            <button type="button" className={styles.manageButton} onClick={showCookiePreferences}>
              Zmień ustawienia cookies
            </button>
          </section>

          <section>
            <h2>4. Lista wykorzystywanych ciasteczek</h2>
            <p>
              Poniżej znajdziesz aktualną tabelę ciasteczek. To ten sam katalog cookies, który
              wyświetla się w oknie ustawień banera zgody.
            </p>
            <CookiePolicyTable />
          </section>

          <section>
            <h2>5. Kontakt</h2>
            <p>
              W razie pytań dotyczących polityki cookies zapraszam do kontaktu przez{' '}
              <Link to="/contact">formularz kontaktowy</Link>.
            </p>
          </section>
        </article>
      </div>
    </main>
  )
}
