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
      canonicalUrl: 'https://norbertfila.com/privacy-policy',
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
              Niniejsza Polityka Prywatności określa zasady dotyczące gromadzenia, wykorzystywania i
              ujawniania danych osobowych, które gromadzę podczas korzystania z mojej strony
              internetowej (<strong>https://norbertfila.com</strong>) (dalej jako „Strona”).
            </p>
            <p>
              Uzyskując dostęp do Strony lub korzystając z niej, wyrażasz zgodę na gromadzenie,
              wykorzystywanie i ujawnianie Twoich danych osobowych zgodnie z niniejszą Polityką
              Prywatności. W przypadku braku zgody, proszę o niekorzystanie ze Strony.
            </p>
          </section>

          <section>
            <h2>1. Administrator Danych Osobowych</h2>
            <p>
              Administratorem danych osobowych gromadzonych za pośrednictwem Strony jest Norbert
              Fila, kontaktujący się z użytkownikami przez{' '}
              <Link to="/contact">formularz kontaktowy</Link>.
            </p>
          </section>

          <section>
            <h2>2. Jakie dane gromadzę i przetwarzam?</h2>
            <p>
              Za pośrednictwem formularza kontaktowego umieszczonego na Stronie przetwarzam
              wyłącznie podstawowe dane, które dobrowolnie podajesz w treści wiadomości:
            </p>
            <ul>
              <li>Imię</li>
              <li>Naziwsko</li>
              <li>Adres e-mail</li>
              <li>
                Ewentualne inne dane osobowe, które samodzielnie i dobrowolnie wpiszesz w treści
                zapytania ofertowego.
              </li>
            </ul>
          </section>

          <section>
            <h2>3. Cel i podstawa prawna przetwarzania danych</h2>
            <p>Twoje dane osobowe są przetwarzane wyłącznie w celu:</p>
            <ul>
              <li>
                <strong>Obsługi zapytania i udzielenia odpowiedzi:</strong> Podstawą prawną
                przetwarzania jest realizacja działań na Twoje żądanie przed ewentualnym zawarciem
                umowy o dzieło/zlecenie (art. 6 ust. 1 lit. b) oraz mój prawnie uzasadniony interes,
                jakim jest komunikacja z osobami odwiedzającymi Stronę (art. 6 ust. 1 lit. f).
              </li>
              <li>
                <strong>Zbierania opinii klientów:</strong> Podstawą prawną przetwarzania jest mój
                prawnie uzasadniony interes polegający na doskonaleniu jakości usług i prezentowaniu
                referencji.
              </li>
              <li>
                <strong>Wsparcia klienta:</strong> Podstawą prawną przetwarzania jest realizacja
                działań na Twoje żądanie oraz mój prawnie uzasadniony interes polegający na
                zapewnieniu bieżącej obsługi posprzedażowej i technicznej.
              </li>
            </ul>
          </section>

          <section>
            <h2>4. Udostępnianie danych</h2>
            <p>
              Twoje dane osobowe nie są sprzedawane ani przekazywane podmiotom trzecim w celach
              marketingowych. Dostęp do nich mogą mieć wyłącznie zaufani dostawcy usług
              technologicznych, z których korzystam w celu prowadzenia Strony i poczty e-mail (np.
              dostawca hostingu), przy czym podmioty te przetwarzają dane wyłącznie na podstawie
              moich wytycznych i w celu zapewnienia stabilności technicznej usługi.
            </p>
            <p>
              Dane mogą zostać również udostępnione uprawnionym organom państwowym, jeżeli taki
              obowiązek będzie wynikał z przepisów powszechnie obowiązującego prawa.
            </p>
          </section>

          <section>
            <h2>5. Okres przechowywania danych</h2>
            <p>
              Twoje dane osobowe będą przechowywane przez okres niezbędny do obsługi korespondencji
              i udzielenia odpowiedzi na przesłane zapytanie, a po zakończeniu kontaktu – przez czas
              wymagany do zabezpieczenia ewentualnych roszczeń lub do momentu zgłoszenia przez
              Ciebie sprzeciwu wobec ich dalszego przechowywania.
            </p>
          </section>

          <section>
            <h2>6. Twoje prawa</h2>
            <p>
              W związku z przetwarzaniem przeze mnie Twoich danych osobowych, przysługują Ci
              następujące prawa:
            </p>
            <ul>
              <li>Prawo dostępu do treści swoich danych oraz otrzymania ich kopii,</li>
              <li>Prawo do sprostowania (poprawiania) swoich danych,</li>
              <li>Prawo do usunięcia danych („prawo do bycia zapomnianym”),</li>
              <li>Prawo do ograniczenia przetwarzania danych,</li>
              <li>Prawo do wniesienia sprzeciwu wobec przetwarzania danych,</li>
              <li>
                Prawo do wniesienia skargi do organu nadzorczego (Prezesa Urzędu Ochrony Danych
                Osobowych), jeśli uznasz, że przetwarzanie danych narusza przepisy RODO.
              </li>
            </ul>
            <p>
              Aby skorzystać ze swoich praw, wystarczy wysłać stosowną prośbę na adres e-mail{' '}
              <Link to="/contact">kontakt@norbertfila.com</Link>.
            </p>
            <p>
              Należy pamiętać, że jeśli nie wyrazisz zgody na zbieranie lub przetwarzanie wymaganych
              danych osobowych lub wycofasz zgodę na przetwarzanie ich w wymaganych celach, możesz
              nie mieć dostępu do usług, w związku z którymi Twoje dane zostały pozyskane, ani
              możliwości korzystania z nich.
            </p>
          </section>

          <section>
            <h2>7. Bezpieczeństwo danych</h2>
            <p>
              Bezpieczeństwo Twoich danych jest dla mnie ważne i będę stosować rozsądne środki
              bezpieczeństwa, aby zapobiec utracie, niewłaściwemu wykorzystaniu lub nieautoryzowanej
              modyfikacji Twoich danych pozostających pod moją kontrolą. Jednak ze względu na
              nieodłączne ryzyko nie mogę zagwarantować całkowitego bezpieczeństwa, a co za tym
              idzie, nie mogę zapewnić ani zagwarantować bezpieczeństwa jakichkolwiek informacji,
              które mi przekazujesz, a robisz to na własne ryzyko.
            </p>
          </section>

          <section>
            <h2>8. Linki do stron trzecich i wykorzystanie Twoich danych</h2>
            <p>
              Serwis może zawierać linki do innych stron internetowych, które nie są przeze mnie
              obsługiwane. Niniejsza Polityka Prywatności nie dotyczy polityk prywatności ani innych
              praktyk podmiotów trzecich, w tym stron internetowych i usług, do których możesz
              przejść przez link dostępny w Serwisie.
            </p>
            <p>
              Zalecam zapoznanie się z polityką prywatności każdej odwiedzanej witryny przed
              podaniem swoich danych osobowych.
            </p>
          </section>

          <section>
            <h2>9. Pliki cookie (Ciasteczka)</h2>
            <p>
              Strona może wykorzystywać pliki cookie w celach statystycznych oraz w celu zapewnienia
              prawidłowego działania jej funkcji technicznych. Szczegółowe informacje na temat
              zarządzania plikami cookie znajdziesz w ustawieniach swojej przeglądarki internetowej.
            </p>
            <p>
              Pełny opis wykorzystywanych ciasteczek oraz ustawień zgody znajdziesz w{' '}
              <Link to="/cookie-policy">Polityce Cookies</Link>.
            </p>
          </section>
        </article>
      </div>
    </main>
  )
}
