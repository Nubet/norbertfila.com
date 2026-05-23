import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { MoveLeft } from 'lucide-react'
import { setSeo } from '../../utils/seo'
import styles from './ContactPage.module.css'

export default function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0)

    setSeo({
      title: 'Kontakt i formularz wyceny - Norbert Fila',
      description:
        'Wypełnij formularz wyceny strony internetowej. Napisz, czego potrzebujesz, a przygotuję darmową, niezobowiązującą propozycję.',
      canonicalUrl: 'https://norbertfila.com/portfolio/contact',
    })
  }, [])

  return (
    <main className={styles.page}>
      <div className={styles.wrap}>
        <Link to="/" className={styles.backLink}>
          <MoveLeft size={18} /> Powrót na stronę główną
        </Link>

        <header className={styles.header}>
          <p className={styles.eyebrow}>Formularz kontaktowy</p>
          <h1>Bezpłatna wycena projektu</h1>
          <p className={styles.lead}>
            Planujesz stronę internetową lub sklep online? Wypełnij krótki formularz, a przygotuję dla Ciebie
            indywidualną wycenę dopasowaną do Twoich potrzeb.
          </p>
          <p className={styles.lead}>
            Im więcej szczegółów podasz, tym lepiej będę mogła dopasować ofertę. Nie musisz znać się na
            technologiach - wystarczy, że opiszesz, czego potrzebujesz, a resztą zajmę się ja.
          </p>
          <p className={styles.note}>
            Odpowiadam zazwyczaj w ciągu 24 godzin. Wycena jest niezobowiązująca i darmowa.
          </p>
        </header>

        <form className={styles.form}>
          <div className={styles.grid}>
            <label className={styles.field}>
              <span>1) Rodzaj projektu</span>
              <select name="rodzaj-projektu" defaultValue="" required>
                <option value="" disabled>
                  Wybierz opcję
                </option>
                <option>Strona firmowa</option>
                <option>Landing page</option>
                <option>Wizytówka</option>
                <option>Przeróbki istniejącej strony</option>
                <option>Strona internetowa</option>
              </select>
            </label>

            <label className={styles.field}>
              <span>2) Czy posiadasz materiały? (logo, grafiki itd.)</span>
              <select name="materialy" defaultValue="" required>
                <option value="" disabled>
                  Wybierz opcję
                </option>
                <option>Tak, mam komplet materiałów</option>
                <option>Mam część materiałów</option>
                <option>Nie, potrzebuję wsparcia</option>
              </select>
            </label>

            <label className={styles.field}>
              <span>3) Jaka jest planowana liczba podstron?</span>
              <select name="liczba-podstron" defaultValue="" required>
                <option value="" disabled>
                  Wybierz opcję
                </option>
                <option>Nie wiem</option>
                <option>1-3</option>
                <option>4-7</option>
                <option>8-10</option>
                <option>Więcej niż 10</option>
              </select>
            </label>

            <label className={styles.field}>
              <span>6) Planowany budżet</span>
              <select name="budzet" defaultValue="" required>
                <option value="" disabled>
                  Wybierz opcję
                </option>
                <option>Nie wiem</option>
                <option>Do 800 zł</option>
                <option>800-1500 zł</option>
                <option>1500-2500 zł</option>
                <option>Powyżej 2500 zł</option>
              </select>
            </label>

            <label className={styles.fieldWide}>
              <span>4) Opis projektu lub Twoje oczekiwania</span>
              <textarea
                name="opis"
                rows={5}
                required
                placeholder="Napisz, jaki jest cel strony, do kogo ma trafić i co ma się na niej znaleźć."
              />
            </label>

            <label className={styles.fieldWide}>
              <span>5) Czy chcesz jakieś dodatkowe specjalne funkcje?</span>
              <textarea
                name="funkcje"
                rows={4}
                placeholder="Np. formularz leadowy, blog, rezerwacje, integracje, sklep online, wielojęzyczność."
              />
            </label>

            <label className={styles.field}>
              <span>7) Twoje imię i nazwisko</span>
              <input name="imie-nazwisko" type="text" required />
            </label>

            <label className={styles.field}>
              <span>8) Twój e-mail</span>
              <input name="email" type="email" required />
            </label>

            <label className={styles.fieldWide}>
              <span>9) Numer telefonu (opcjonalnie)</span>
              <input name="telefon" type="tel" placeholder="Opcjonalnie" />
            </label>
          </div>

          <button type="submit" className={styles.submitButton}>
            Wyślij zapytanie
          </button>
        </form>

        <aside className={styles.directContact}>
          <h2>Nie lubisz formularzy?</h2>
          <p>
            Możesz skontaktować się ze mną bezpośrednio:{' '}
            <a href="mailto:contact@norbertfila.com">contact@norbertfila.com</a>
          </p>
        </aside>
      </div>
    </main>
  )
}
