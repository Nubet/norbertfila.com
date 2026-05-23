import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { setSeo } from '../../utils/seo'
import styles from './LegalPages.module.css'

export default function PrivacyPolicyPage() {
  useEffect(() => {
    window.scrollTo(0, 0)

    setSeo({
      title: 'Polityka Prywatności | Norbert Fila',
      description:
        'Zasady gromadzenia, przetwarzania i wykorzystywania danych osobowych użytkowników strony norbertfila.com.',
      canonicalUrl: 'https://norbertfila.com/portfolio/privacy-policy',
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
          <h1 className={styles.title}>Polityka Prywatności</h1>
          <p className={styles.lastUpdated}>Ostatnia aktualizacja: 24 maja 2026 r.</p>

          <section>
            <p>
              Niniejsza Polityka Prywatności określa zasady gromadzenia, przetwarzania i wykorzystywania
              danych osobowych użytkowników korzystających z formularza kontaktowego na stronie internetowej{' '}
              <strong>norbertfila.com</strong> (dalej jako „Strona”).
            </p>
          </section>

          <section>
            <h2>1. Administrator Danych Osobowych</h2>
            <p>
              Administratorem danych osobowych gromadzonych za pośrednictwem Strony jest Norbert Fila,
              kontaktujący się z użytkownikami przez <Link to="/contact">formularz kontaktowy</Link>.
            </p>
          </section>

          <section>
            <h2>2. Jakie dane gromadzę i przetwarzam?</h2>
            <p>
              Za pośrednictwem formularza kontaktowego umieszczonego na Stronie przetwarzam wyłącznie
              podstawowe dane, które dobrowolnie podajesz w treści wiadomości:
            </p>
            <ul>
              <li>Imię</li>
              <li>Adres e-mail</li>
              <li>
                Ewentualne inne dane osobowe, które samodzielnie i dobrowolnie wpiszesz w treści zapytania
                ofertowego.
              </li>
            </ul>
          </section>

          <section>
            <h2>3. Cel i podstawa prawna przetwarzania danych</h2>
            <p>Twoje dane osobowe są przetwarzane wyłącznie w celu:</p>
            <ul>
              <li>
                <strong>Obsługi zapytania i udzielenia odpowiedzi:</strong> Podstawą prawną przetwarzania jest
                realizacja działań na Twoje żądanie przed ewentualnym zawarciem umowy o dzieło/zlecenie (art.
                6 ust. 1 lit. b RODO) oraz mój prawnie uzasadniony interes, jakim jest komunikacja z osobami
                odwiedzającymi Stronę (art. 6 ust. 1 lit. f RODO).
              </li>
            </ul>
          </section>

          <section>
            <h2>4. Udostępnianie danych</h2>
            <p>
              Twoje dane osobowe nie są sprzedawane ani przekazywane podmiotom trzecim w celach
              marketingowych. Dostęp do nich mogą mieć wyłącznie zaufani dostawcy usług technologicznych,
              z których korzystam w celu prowadzenia Strony i poczty e-mail (np. dostawca hostingu), przy czym
              podmioty te przetwarzają dane wyłącznie na podstawie moich wytycznych i w celu zapewnienia
              stabilności technicznej usługi.
            </p>
            <p>
              Dane mogą zostać również udostępnione uprawnionym organom państwowym, jeżeli taki obowiązek
              będzie wynikał z przepisów powszechnie obowiązującego prawa.
            </p>
          </section>

          <section>
            <h2>5. Okres przechowywania danych</h2>
            <p>
              Twoje dane osobowe będą przechowywane przez okres niezbędny do obsługi korespondencji i
              udzielenia odpowiedzi na przesłane zapytanie, a po zakończeniu kontaktu – przez czas wymagany
              do zabezpieczenia ewentualnych roszczeń lub do momentu zgłoszenia przez Ciebie sprzeciwu wobec
              ich dalszego przechowywania.
            </p>
          </section>

          <section>
            <h2>6. Twoje prawa</h2>
            <p>
              W związku z przetwarzaniem przeze mnie Twoich danych osobowych, przysługują Ci następujące
              prawa:
            </p>
            <ul>
              <li>Prawo dostępu do treści swoich danych oraz otrzymania ich kopii,</li>
              <li>Prawo do sprostowania (poprawiania) swoich danych,</li>
              <li>Prawo do usunięcia danych („prawo do bycia zapomnianym”),</li>
              <li>Prawo do ograniczenia przetwarzania danych,</li>
              <li>Prawo do wniesienia sprzeciwu wobec przetwarzania danych,</li>
              <li>
                Prawo do wniesienia skargi do organu nadzorczego (Prezesa Urzędu Ochrony Danych Osobowych),
                jeśli uznasz, że przetwarzanie danych narusza przepisy RODO.
              </li>
            </ul>
            <p>
              Aby skorzystać ze swoich praw, wystarczy wysłać stosowną prośbę przez{' '}
              <Link to="/contact">formularz kontaktowy</Link>.
            </p>
          </section>

          <section>
            <h2>7. Bezpieczeństwo danych</h2>
            <p>
              Dokładam wszelkich starań, aby zapewnić bezpieczeństwo informacji przesyłanych za pośrednictwem
              Strony. Transmisja danych w formularzu jest zabezpieczona certyfikatem SSL, który szyfruje
              połączenie między Twoją przeglądarką a serwerem.
            </p>
          </section>

          <section>
            <h2>8. Pliki cookie (Ciasteczka)</h2>
            <p>
              Strona może wykorzystywać pliki cookie w celach statystycznych oraz w celu zapewnienia
              prawidłowego działania jej funkcji technicznych. Szczegółowe informacje na temat zarządzania
              plikami cookie znajdziesz w ustawieniach swojej przeglądarki internetowej.
            </p>
          </section>
        </article>
      </div>
    </main>
  )
}
