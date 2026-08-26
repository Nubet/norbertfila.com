'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { ArrowLeft, ArrowRight, Check } from 'lucide-react'
import { submitContactForm, ContactFormError } from '@/features/contact/submitContactForm'
import { ParallaxBackground } from '@/components/ParallaxBackground/ParallaxBackground'
import styles from './ContactPage.module.css'

export default function ContactPage() {
  const [step, setStep] = useState(-1)
  const [projectType, setProjectType] = useState('')
  const [budget, setBudget] = useState('')
  const [materials, setMaterials] = useState('')
  const [pagesCount, setPagesCount] = useState('')
  const [formValues, setFormValues] = useState({ opis: '', imie: '', email: '', telefon: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; message: string } | null>(
    null
  )
  const [stepError, setStepError] = useState<string | null>(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [step])

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormValues((prev) => ({ ...prev, [name]: value }))
    if (stepError) setStepError(null) // clear error on typing
  }

  const handleNextStep1 = () => {
    if (!projectType) return setStepError('Proszę wybrać rodzaj projektu.')
    if (!budget) return setStepError('Proszę określić planowany budżet.')
    setStepError(null)
    setStep(1)
  }

  const handleNextStep2 = () => {
    if (formValues.opis.trim().length < 25)
      return setStepError('Proszę opisać swój projekt (minimum 25 znaków).')
    if (!materials) return setStepError('Proszę wybrać, czy posiadasz materiały.')
    if (!pagesCount) return setStepError('Proszę określić szacowaną wielkość strony.')
    setStepError(null)
    setStep(2)
  }

  const prevStep = () => {
    setStepError(null)
    setStep((s) => Math.max(-1, s - 1))
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    if (isSubmitting) return

    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email)
    if (formValues.imie.trim().length < 3)
      return setStepError('Proszę podać poprawne imię i nazwisko.')
    if (!isEmailValid) return setStepError('Proszę podać poprawny adres e-mail.')

    setIsSubmitting(true)
    setStepError(null)
    setFeedback(null)

    const payload = {
      projectType,
      budget,
      materials,
      pagesCount,
      description: formValues.opis,
      fullName: formValues.imie,
      email: formValues.email,
      phone: formValues.telefon,
      honeypot: '',
    }

    try {
      await submitContactForm(payload)
      setStep(3) // Success step
    } catch (error) {
      if (error instanceof ContactFormError) {
        setFeedback({ type: 'error', message: error.message })
      } else {
        setFeedback({
          type: 'error',
          message: 'Wystąpił problem. Napisz bezpośrednio na kontakt@norbertfila.com',
        })
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className={styles.page}>
      <ParallaxBackground
        videoSrc="/home/contact-background.mp4"
        webmSrc="/home/contact-background.webm"
        posterSrc="/home/contact-poster.jpg"
        overlayVariant="studio"
      />
      <div className={styles.container}>
        {step === -1 && (
          <div className={styles.premiumIntro}>
            <h1 className={styles.premiumTitle}>Porozmawiajmy.</h1>
            <div className={styles.premiumActions}>
              <a
                href="https://calendly.com/kontakt-norbertfila/30min"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.premiumBtn}
              >
                Zarezerwuj rozmowę
              </a>
              <button onClick={() => setStep(0)} className={styles.premiumBtn}>
                Napisz wiadomość
              </button>
            </div>
          </div>
        )}

        {step >= 0 && step < 3 && (
          <header className={styles.header}>
            <div className={styles.headerTop}>
              <button onClick={prevStep} className={styles.backLink}>
                <ArrowLeft size={16} /> Powrót
              </button>
              <a href="mailto:kontakt@norbertfila.com" className={styles.directEmail}>
                kontakt@norbertfila.com
              </a>
            </div>
            <div className={styles.stepIndicator}>
              <span className={step >= 0 ? styles.activeStep : ''}>01. Zarys</span>
              <div className={styles.stepLine} />
              <span className={step >= 1 ? styles.activeStep : ''}>02. Szczegóły</span>
              <div className={styles.stepLine} />
              <span className={step >= 2 ? styles.activeStep : ''}>03. Kontakt</span>
            </div>
          </header>
        )}

        <div className={styles.formWindow}>
          {step === 0 && (
            <div className={styles.stepContent}>
              <h1 className={styles.stepTitle}>Jakiego projektu potrzebujesz?</h1>

              <div className={styles.optionsGrid}>
                {[
                  'Strona firmowa',
                  'Landing page',
                  'Sklep / E-commerce',
                  'Redesign strony',
                  'Coś innego',
                ].map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setProjectType(type)}
                    className={`${styles.luxuryPill} ${projectType === type ? styles.activePill : ''}`}
                  >
                    {type}
                  </button>
                ))}
              </div>

              <h2 className={styles.stepSubtitle}>Planowany budżet netto</h2>
              <div className={styles.optionsGrid}>
                {['Nie wiem', 'Do 1500 zł', '1500 - 3000 zł', 'Powyżej 3000 zł'].map((amount) => (
                  <button
                    key={amount}
                    type="button"
                    onClick={() => setBudget(amount)}
                    className={`${styles.luxuryPill} ${budget === amount ? styles.activePill : ''}`}
                  >
                    {amount}
                  </button>
                ))}
              </div>

              <div className={styles.actionRow}>
                {stepError && <div className={styles.errorMsgInline}>{stepError}</div>}
                <button type="button" onClick={handleNextStep1} className={styles.nextBtn}>
                  Dalej <ArrowRight size={18} />
                </button>
              </div>
            </div>
          )}

          {step === 1 && (
            <div className={styles.stepContent}>
              <h1 className={styles.stepTitle}>Opowiedz mi o wizji.</h1>

              <div className={styles.inputGroup}>
                <label className={styles.label}>
                  Cel projektu, inspiracje lub główne założenia *
                </label>
                <textarea
                  name="opis"
                  value={formValues.opis}
                  onChange={handleInputChange}
                  className={styles.textarea}
                  placeholder="Napisz, co chcesz osiągnąć..."
                  autoFocus
                />
              </div>

              <div className={styles.twoCol}>
                <div className={styles.inputGroup}>
                  <label className={styles.label}>Czy posiadasz materiały (teksty, zdjęcia)?</label>
                  <select
                    name="materials"
                    value={materials}
                    onChange={(e) => setMaterials(e.target.value)}
                    className={styles.select}
                  >
                    <option value="" disabled>
                      Wybierz opcję
                    </option>
                    <option value="komplet">Mam komplet</option>
                    <option value="czesc">Mam część</option>
                    <option value="brak">Potrzebuję pomocy</option>
                  </select>
                </div>
                <div className={styles.inputGroup}>
                  <label className={styles.label}>Szacowana wielkość strony</label>
                  <select
                    name="pagesCount"
                    value={pagesCount}
                    onChange={(e) => setPagesCount(e.target.value)}
                    className={styles.select}
                  >
                    <option value="" disabled>
                      Wybierz opcję
                    </option>
                    <option value="onepager">One-pager</option>
                    <option value="male">2-4 podstrony</option>
                    <option value="srednie">5-10 podstron</option>
                    <option value="duze">Więcej</option>
                  </select>
                </div>
              </div>

              <div className={styles.actionRowSpace}>
                <button type="button" onClick={prevStep} className={styles.prevBtn}>
                  Wstecz
                </button>
                <div className={styles.actionRowRight}>
                  {stepError && <div className={styles.errorMsgInline}>{stepError}</div>}
                  <button type="button" onClick={handleNextStep2} className={styles.nextBtn}>
                    Dalej <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <form className={styles.stepContent} onSubmit={handleSubmit} noValidate>
              <h1 className={styles.stepTitle}>Ostatni krok.</h1>

              <div className={styles.inputGroup}>
                <label className={styles.label}>Imię i nazwisko *</label>
                <input
                  type="text"
                  name="imie"
                  value={formValues.imie}
                  onChange={handleInputChange}
                  className={styles.input}
                  placeholder="Jan Kowalski"
                  autoFocus
                  required
                />
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.label}>Adres E-mail *</label>
                <input
                  type="email"
                  name="email"
                  value={formValues.email}
                  onChange={handleInputChange}
                  className={styles.input}
                  placeholder="jan@domena.pl"
                  required
                />
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.label}>Numer telefonu (opcjonalnie)</label>
                <input
                  type="tel"
                  name="telefon"
                  value={formValues.telefon}
                  onChange={handleInputChange}
                  className={styles.input}
                  placeholder="+48 000 000 000"
                />
              </div>

              {feedback?.type === 'error' && (
                <div className={styles.errorMsg}>{feedback.message}</div>
              )}

              <div className={styles.actionRowSpace}>
                <button
                  type="button"
                  onClick={prevStep}
                  className={styles.prevBtn}
                  disabled={isSubmitting}
                >
                  Wstecz
                </button>
                <div className={styles.actionRowRight}>
                  {stepError && <div className={styles.errorMsgInline}>{stepError}</div>}
                  <button type="submit" disabled={isSubmitting} className={styles.submitBtn}>
                    {isSubmitting ? 'Wysyłanie...' : 'Wyślij projekt'} <Check size={18} />
                  </button>
                </div>
              </div>
            </form>
          )}

          {step === 3 && (
            <div className={styles.stepContentSuccess}>
              <div className={styles.successIcon}>
                <Check size={48} />
              </div>
              <h1 className={styles.stepTitle}>Dziękuję za zaufanie.</h1>
              <p className={styles.successText}>
                Twoje zapytanie zostało pomyślnie wysłane. Przeanalizuję je i odpowiem najszybciej
                jak to możliwe (zazwyczaj w ciągu 24 godzin).
              </p>
              <Link href="/" className={styles.backHomeBtn}>
                Wróć na stronę główną
              </Link>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
