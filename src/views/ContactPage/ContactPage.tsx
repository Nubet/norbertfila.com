'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { ArrowLeft, Mail, Clock, CheckCircle2, User, Send, Phone } from 'lucide-react'
import { submitContactForm, ContactFormError } from '@/features/contact/submitContactForm'
import styles from './ContactPage.module.css'

export default function ContactPage() {
  const [projectType, setProjectType] = useState<string>('')
  const [budget, setBudget] = useState<string>('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; message: string } | null>(
    null
  )

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formElement = event.currentTarget

    if (isSubmitting) {
      return
    }

    const formData = new FormData(formElement)

    const payload = {
      projectType,
      budget,
      materials: String(formData.get('materialy') ?? ''),
      pagesCount: String(formData.get('liczba-podstron') ?? ''),
      description: String(formData.get('opis') ?? ''),
      fullName: String(formData.get('imie-nazwisko') ?? ''),
      email: String(formData.get('email') ?? ''),
      phone: String(formData.get('telefon') ?? ''),
      honeypot: String(formData.get('website') ?? ''),
    }

    setFeedback(null)
    setIsSubmitting(true)

    try {
      await submitContactForm(payload)
      formElement.reset()
      setProjectType('')
      setBudget('')
      setFeedback({
        type: 'success',
        message: 'Dziękuję! Formularz został wysłany. Odpowiem najszybciej, jak to możliwe.',
      })
    } catch (error) {
      if (error instanceof ContactFormError) {
        setFeedback({ type: 'error', message: error.message })
      } else {
        setFeedback({
          type: 'error',
          message: 'Wystąpił problem z wysyłką. Napisz bezpośrednio na kontakt@norbertfila.com.',
        })
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <Link href="/" className={styles.backLink}>
            <ArrowLeft size={20} /> Powrót
          </Link>
        </nav>

        <div className={styles.layoutGrid}>
          <aside className={styles.infoPanel}>
            <div className={styles.stickyWrap}>
              <h1 className={styles.title}>Porozmawiajmy o Twoim biznesie.</h1>
              <p className={styles.lead}>
                Nie musisz znać się na technologii. Opowiedz mi o swoim pomyśle i celach, a ja zajmę
                się resztą – od koncepcji po kod gotowy do zarabiania.
              </p>

              <div className={styles.contactCards}>
                <div className={styles.contactCard}>
                  <div className={styles.cardIcon}>
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4>Szybka odpowiedź</h4>
                    <p>
                      Zazwyczaj odpowiadam w ciągu 24 godzin z gotowym planem działania i wyceną.
                    </p>
                  </div>
                </div>

                <div className={styles.contactCard}>
                  <div className={styles.cardIcon}>
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4>Bezpośredni kontakt</h4>
                    <a href="mailto:kontakt@norbertfila.com" className={styles.directMail}>
                      kontakt@norbertfila.com
                    </a>
                  </div>
                </div>
              </div>

              <div className={styles.founderSnippet}>
                <img
                  src="/profile/avatar.webp"
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

          <section className={styles.formPanel}>
            <form className={styles.form} onSubmit={handleSubmit} noValidate>
              <div className={styles.honeypotField} aria-hidden="true">
                <label htmlFor="website">Website</label>
                <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
              </div>

              <div className={styles.formGroup}>
                <p id="project-type-label" className={styles.groupLabel}>
                  Rodzaj projektu
                </p>
                <div className={styles.pillGroup} role="group" aria-labelledby="project-type-label">
                  {[
                    'Strona firmowa',
                    'Landing page',
                    'Wizytówka',
                    'Przeróbki istniejącej strony',
                    'Inne',
                  ].map((type) => (
                    <button
                      key={type}
                      type="button"
                      aria-label={`Rodzaj projektu: ${type}`}
                      className={`${styles.pill} ${projectType === type ? styles.pillActive : ''}`}
                      onClick={() => setProjectType(type)}
                    >
                      {projectType === type && <CheckCircle2 size={16} />}
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div className={styles.inputGrid}>
                <div className={styles.formGroup}>
                  <label className={styles.groupLabel} htmlFor="materialy">
                    Czy posiadasz materiały?
                  </label>
                  <select
                    id="materialy"
                    name="materialy"
                    className={styles.input}
                    defaultValue=""
                    required
                  >
                    <option value="" disabled>
                      Wybierz opcję
                    </option>
                    <option value="komplet">Tak, mam komplet materiałów</option>
                    <option value="czesc">Mam część materiałów</option>
                    <option value="brak">Nie, potrzebuję wsparcia</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.groupLabel} htmlFor="liczba-podstron">
                    Liczba podstron
                  </label>
                  <select
                    id="liczba-podstron"
                    name="liczba-podstron"
                    className={styles.input}
                    defaultValue=""
                    required
                  >
                    <option value="" disabled>
                      Wybierz opcję
                    </option>
                    <option value="nie-wiem">Nie wiem</option>
                    <option value="1-3">1-3</option>
                    <option value="4-7">4-7</option>
                    <option value="8-10">8-10</option>
                    <option value="powyzej-10">Więcej niż 10</option>
                  </select>
                </div>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.groupLabel} htmlFor="opis">
                  Opis projektu lub Twoje oczekiwania
                </label>
                <textarea
                  id="opis"
                  name="opis"
                  rows={4}
                  required
                  className={styles.textarea}
                  placeholder="Napisz, jaki jest cel strony, do kogo ma trafić i co ma się na niej znaleźć."
                ></textarea>
              </div>

              <div className={styles.formGroup}>
                <p id="budget-label" className={styles.groupLabel}>
                  Planowany budżet
                </p>
                <div className={styles.pillGroup} role="group" aria-labelledby="budget-label">
                  {['Nie wiem', 'Do 800 zł', '800-1500 zł', '1500-2500 zł', 'Powyżej 2500 zł'].map(
                    (amount) => (
                      <button
                        key={amount}
                        type="button"
                        aria-label={`Budżet: ${amount}`}
                        className={`${styles.pill} ${budget === amount ? styles.pillActive : ''}`}
                        onClick={() => setBudget(amount)}
                      >
                        {budget === amount && <CheckCircle2 size={16} />}
                        {amount}
                      </button>
                    )
                  )}
                </div>
              </div>

              <div className={styles.inputGrid}>
                <div className={styles.formGroup}>
                  <label className={styles.groupLabel} htmlFor="name">
                    Imię i nazwisko *
                  </label>
                  <div className={styles.inputWrapper}>
                    <User size={20} className={styles.inputIcon} />
                    <input
                      type="text"
                      id="name"
                      name="imie-nazwisko"
                      required
                      className={styles.input}
                      placeholder="Jan Kowalski"
                    />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.groupLabel} htmlFor="email">
                    Twój e-mail *
                  </label>
                  <div className={styles.inputWrapper}>
                    <Mail size={20} className={styles.inputIcon} />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className={styles.input}
                      placeholder="jan@firma.pl"
                    />
                  </div>
                </div>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.groupLabel} htmlFor="phone">
                  Numer telefonu (opcjonalnie)
                </label>
                <div className={styles.inputWrapper}>
                  <Phone size={20} className={styles.inputIcon} />
                  <input
                    type="tel"
                    id="phone"
                    name="telefon"
                    className={styles.input}
                    placeholder="+48 000 000 000"
                  />
                </div>
              </div>

              <div className={styles.submitWrapper}>
                <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
                  {isSubmitting ? 'Wysyłanie...' : 'Wyślij zapytanie'} <Send size={20} />
                </button>
                {feedback && (
                  <p
                    className={
                      feedback.type === 'success' ? styles.feedbackSuccess : styles.feedbackError
                    }
                    role={feedback.type === 'error' ? 'alert' : 'status'}
                  >
                    {feedback.message}
                  </p>
                )}
                <p className={styles.privacyNote}>
                  Wysyłając formularz, akceptujesz{' '}
                  <Link href="/privacy-policy">politykę prywatności</Link>.
                </p>
              </div>
            </form>
          </section>
        </div>
      </div>
    </main>
  )
}
