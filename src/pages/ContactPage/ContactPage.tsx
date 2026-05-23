import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Mail, Clock, CheckCircle2, User, Send, Phone } from 'lucide-react'
import { setSeo } from '../../utils/seo'
import styles from './ContactPage.module.css'

export default function ContactPage() {
  const [projectType, setProjectType] = useState<string>('')
  const [budget, setBudget] = useState<string>('')

  useEffect(() => {
    window.scrollTo(0, 0)

    setSeo({
      title: 'Kontakt i wycena | Norbert Fila',
      description: 'Zbudujmy coś świetnego. Napisz, jakiego projektu potrzebujesz, a przygotuję darmową propozycję.',
      canonicalUrl: 'https://norbertfila.com/portfolio/contact',
    })
  }, [])

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        
        {/* Navigation */}
        <nav className={styles.nav}>
          <Link to="/" className={styles.backLink}>
            <ArrowLeft size={20} /> Wróć do portfolio
          </Link>
        </nav>

        <div className={styles.layoutGrid}>
          
          {/* Left Panel - Information & Trust */}
          <aside className={styles.infoPanel}>
            <div className={styles.stickyWrap}>
              <h1 className={styles.title}>Porozmawiajmy o Twoim biznesie.</h1>
              <p className={styles.lead}>
                Nie musisz znać się na technologii. Opowiedz mi o swoim pomyśle i celach, a ja zajmę się resztą – od koncepcji po kod gotowy do zarabiania.
              </p>

              <div className={styles.contactCards}>
                <div className={styles.contactCard}>
                  <div className={styles.cardIcon}><Clock size={24} /></div>
                  <div>
                    <h4>Szybka odpowiedź</h4>
                    <p>Zazwyczaj odpowiadam w ciągu 24 godzin z gotowym planem działania i wyceną.</p>
                  </div>
                </div>
                
                <div className={styles.contactCard}>
                  <div className={styles.cardIcon}><Mail size={24} /></div>
                  <div>
                    <h4>Bezpośredni kontakt</h4>
                    <a href="mailto:contact@norbertfila.com" className={styles.directMail}>
                      contact@norbertfila.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Founder snippet */}
              <div className={styles.founderSnippet}>
                <img 
                  src={`${import.meta.env.BASE_URL}profile/NorbertFilaAvatar.webp`} 
                  alt="Norbert Fila" 
                  className={styles.avatar} 
                  loading="lazy"
                />
                <div>
                  <strong>Norbert Fila</strong>
                  <span>Freelancer</span>
                </div>
              </div>
            </div>
          </aside>

          {/* Right Panel - Interactive Form */}
          <section className={styles.formPanel}>
            <form className={styles.form}>
              
              {/* Interactive Pills - Project Type */}
              <div className={styles.formGroup}>
                <label className={styles.groupLabel}>1) Rodzaj projektu</label>
                <div className={styles.pillGroup}>
                  {['Strona firmowa', 'Landing page', 'Wizytówka', 'Przeróbki istniejącej strony', 'Inne'].map((type) => (
                    <button
                      key={type}
                      type="button"
                      className={`${styles.pill} ${projectType === type ? styles.pillActive : ''}`}
                      onClick={() => setProjectType(type)}
                    >
                      {projectType === type && <CheckCircle2 size={16} />}
                      {type}
                    </button>
                  ))}
                </div>
                <input type="hidden" name="rodzaj-projektu" value={projectType} />
              </div>

              <div className={styles.inputGrid}>
                {/* Select - Materials */}
                <div className={styles.formGroup}>
                  <label className={styles.groupLabel} htmlFor="materialy">2) Czy posiadasz materiały?</label>
                  <select id="materialy" name="materialy" className={styles.input} defaultValue="" required>
                    <option value="" disabled>Wybierz opcję</option>
                    <option value="komplet">Tak, mam komplet materiałów</option>
                    <option value="czesc">Mam część materiałów</option>
                    <option value="brak">Nie, potrzebuję wsparcia</option>
                  </select>
                </div>

                {/* Select - Pages */}
                <div className={styles.formGroup}>
                  <label className={styles.groupLabel} htmlFor="liczba-podstron">3) Liczba podstron</label>
                  <select id="liczba-podstron" name="liczba-podstron" className={styles.input} defaultValue="" required>
                    <option value="" disabled>Wybierz opcję</option>
                    <option value="nie-wiem">Nie wiem</option>
                    <option value="1-3">1-3</option>
                    <option value="4-7">4-7</option>
                    <option value="8-10">8-10</option>
                    <option value="powyzej-10">Więcej niż 10</option>
                  </select>
                </div>
              </div>

              {/* Text Area - Description */}
              <div className={styles.formGroup}>
                <label className={styles.groupLabel} htmlFor="opis">4) Opis projektu lub Twoje oczekiwania</label>
                <textarea 
                  id="opis"
                  name="opis" 
                  rows={4} 
                  required
                  className={styles.textarea}
                  placeholder="Napisz, jaki jest cel strony, do kogo ma trafić i co ma się na niej znaleźć."
                ></textarea>
              </div>

              {/* Text Area - Features */}
              <div className={styles.formGroup}>
                <label className={styles.groupLabel} htmlFor="funkcje">5) Dodatkowe, specjalne funkcje (opcjonalnie)</label>
                <textarea 
                  id="funkcje"
                  name="funkcje" 
                  rows={3} 
                  className={styles.textarea}
                  placeholder="Np. formularz leadowy, blog, rezerwacje, integracje, sklep online, wielojęzyczność."
                ></textarea>
              </div>

              {/* Interactive Pills - Budget */}
              <div className={styles.formGroup}>
                <label className={styles.groupLabel}>6) Planowany budżet</label>
                <div className={styles.pillGroup}>
                  {['Nie wiem', 'Do 800 zł', '800-1500 zł', '1500-2500 zł', 'Powyżej 2500 zł'].map((amount) => (
                    <button
                      key={amount}
                      type="button"
                      className={`${styles.pill} ${budget === amount ? styles.pillActive : ''}`}
                      onClick={() => setBudget(amount)}
                    >
                      {budget === amount && <CheckCircle2 size={16} />}
                      {amount}
                    </button>
                  ))}
                </div>
                <input type="hidden" name="budzet" value={budget} required />
              </div>

              {/* Standard Inputs - Contact Details */}
              <div className={styles.inputGrid}>
                <div className={styles.formGroup}>
                  <label className={styles.groupLabel} htmlFor="name">7) Twoje imię i nazwisko *</label>
                  <div className={styles.inputWrapper}>
                    <User size={20} className={styles.inputIcon} />
                    <input type="text" id="name" name="imie-nazwisko" required className={styles.input} placeholder="Jan Kowalski" />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.groupLabel} htmlFor="email">8) Twój e-mail *</label>
                  <div className={styles.inputWrapper}>
                    <Mail size={20} className={styles.inputIcon} />
                    <input type="email" id="email" name="email" required className={styles.input} placeholder="jan@firma.pl" />
                  </div>
                </div>
              </div>
              
              <div className={styles.formGroup}>
                <label className={styles.groupLabel} htmlFor="phone">9) Numer telefonu (opcjonalnie)</label>
                <div className={styles.inputWrapper}>
                  <Phone size={20} className={styles.inputIcon} />
                  <input type="tel" id="phone" name="telefon" className={styles.input} placeholder="+48 000 000 000" />
                </div>
              </div>

              <div className={styles.submitWrapper}>
                <button type="submit" className={styles.submitBtn}>
                  Wyślij zapytanie <Send size={20} />
                </button>
                <p className={styles.privacyNote}>
                  Wysyłając formularz, akceptujesz politykę prywatności.
                </p>
              </div>

            </form>
          </section>

        </div>
      </div>
    </main>
  )
}
