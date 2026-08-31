'use client'

import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { ScrollReveal } from '@/components/ScrollReveal/ScrollReveal'
import { trackAnalyticsEvent } from '@/features/analytics/googleAnalytics'
import styles from './Offer.module.css'

const offerItems = [
  {
    id: 'service-01',
    number: '01',
    title: 'Profesjonalna strona firmowa',
    summary:
      'Zbuduj autorytet i wiarygodny wizerunek od pierwszych sekund. Strona zaprojektowana tak, aby budować zaufanie i w przemyślany sposób prezentować Twoje usługi.',
    fit: 'Idealne, gdy Twoja obecna strona przestała nadążać za rozwojem Twojego biznesu.',
    deliverables: [
      'architektura informacji budująca zaufanie',
      'minimalistyczny i elegancki projekt wizualny',
      'błyskawiczne ładowanie i pełna responsywność',
    ],
  },
  {
    id: 'service-02',
    number: '02',
    title: 'Landing page konwertujący ruch w klientów',
    summary:
      'Skoncentrowane doświadczenie zaprojektowane wokół jednego celu. Każdy element strony prowadzi użytkownika do podjęcia kluczowej dla biznesu decyzji.',
    fit: 'Niezbędne przy kampaniach reklamowych, premierach nowych usług i promocjach.',
    deliverables: [
      'układ strategicznie prowadzący do konwersji',
      'perswazyjny copywriting i wyraźne CTA',
      'struktura gotowa pod optymalizację i analizę',
    ],
  },
  {
    id: 'service-03',
    number: '03',
    title: 'Audyt i przebudowa ścieżki klienta (UX/UI)',
    summary:
      'Eliminuję chaos informacyjny. Projektuję logiczne i intuicyjne rozwiązania, dzięki którym Twój klient z łatwością dotrze do celu.',
    fit: 'Gdy masz wartościową ofertę, ale użytkownicy gubią się na Twojej stronie.',
    deliverables: [
      'uporządkowanie oferty i czytelny podział usług',
      'precyzyjne komunikowanie wartości marki',
      'płynne przejście od zainteresowania do kontaktu',
    ],
  },
  {
    id: 'service-04',
    number: '04',
    title: 'Optymalizacja punktów styku i formularzy',
    summary:
      'Projektuję interakcje bez zbędnego tarcia. Ułatwiam kontakt z Twoją firmą, sprawiając, że przesłanie zapytania jest naturalnym krokiem.',
    fit: 'Dla biznesów, które generują ruch, ale zmagają się z niskim współczynnikiem zapytań.',
    deliverables: [
      'formularze dopasowane do procesu decyzyjnego',
      'strategiczne rozmieszczenie punktów kontaktu',
      'mikrocopy usuwające obiekcje przed kontaktem',
    ],
  },
  {
    id: 'service-05',
    number: '05',
    title: 'Integracje API, CMS i wdrożenia AI',
    summary:
      'Łączę frontend z zaawansowanym backendem. Projektuję i wdrażam integracje ze współczesnymi narzędziami, eliminując ograniczenia standardowych szablonów.',
    fit: 'Gdy Twoja strona wymaga dynamicznego zarządzania treścią, zewnętrznych integracji lub asystentów AI.',
    deliverables: [
      'wdrożenie i konfiguracja nowoczesnych systemów Headless CMS',
      'integracja z zewnętrznym API oraz budowa własnego API',
      'implementacja inteligentnych chatbotów i asystentów AI',
    ],
  },
  {
    id: 'service-06',
    number: '06',
    title: 'Infrastruktura, hosting i domeny',
    summary:
      'Zdejmuję z Ciebie ciężar setupu technologicznego. Przeprowadzam rzetelną analizę i dobieram rozwiązania infrastrukturalne optymalne dla specyfiki Twojego projektu.',
    fit: 'Gdy nie chcesz tracić czasu na technikalia i szukasz kogoś, kto skonfiguruje serwer od A do Z.',
    deliverables: [
      'dobór najlepszego hostingu pod Twój stack technologiczny',
      'rekomendacja i pomoc u zaufanego dostawcy domeny',
      'pełna konfiguracja DNS, rekordów oraz certyfikatów SSL',
    ],
  },
] as const

const signalPoints = [
  'Zależy Ci na profesjonalnym wizerunku od pierwszego wejścia na stronę',
  'Prowadzisz działania marketingowe, ale brakuje Ci skutecznego narzędzia do konwersji',
  'Twoja obecna strona nie odzwierciedla jakości i wartości świadczonych przez Ciebie usług',
] as const

const process = [
  {
    step: '01',
    title: 'Rozmowa i strategia',
    text: 'Poznaję Twój biznes, analizujemy cele i identyfikujemy miejsca, w których obecnie tracisz klientów.',
  },
  {
    step: '02',
    title: 'Projektowanie (UX/UI)',
    text: 'Tworzę spójną architekturę informacji i dopracowany interfejs wizualny. Skupiam się na estetyce, użyteczności i płynnym prowadzeniu użytkownika do akcji.',
  },
  {
    step: '03',
    title: 'Programowanie i wdrożenie',
    text: 'Przekładam projekt na szybki, responsywny kod. Dbamy o detale techniczne, gotowość do skalowania i płynne działanie.',
  },
] as const

export function Offer() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <section className={styles.hero}>
          <ScrollReveal>
            <span className={styles.eyebrow}>Oferta</span>
            <h1 className={styles.title}>Strony internetowe, które pomagają klientowi podjąć decyzję.</h1>
            <p className={styles.lead}>
              Projektuję i wdrażam dopracowane strony dla firm usługowych. 
              Dostarczam rozwiązania, które budują autorytet w oczach klientów i skutecznie zamieniają ich uwagę w realne zapytania.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={120}>
            <div className={styles.heroActions}>
              <Link
                href="/kontakt"
                className={styles.primaryCta}
                onClick={() =>
                  trackAnalyticsEvent('contact_clicked', {
                    location: 'offer_hero',
                    label: 'Porozmawiajmy o Twoim projekcie',
                  })
                }
              >
                Rozpocznij współpracę
              </Link>
              <Link href="/portfolio" className={styles.secondaryCta}>
                Zobacz realizacje
              </Link>
            </div>
          </ScrollReveal>
        </section>

        <section className={styles.signalSection}>
          <ScrollReveal>
            <div className={styles.signalCard}>
              <div className={styles.signalHeader}>
                Dostarczam wartość dla marek, którym:
              </div>
              <ul className={styles.signalList}>
                {signalPoints.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </section>

        <section className={styles.servicesSection}>
          <ScrollReveal>
            <div className={styles.sectionIntro}>
              <span className={styles.sectionLabel}>Zakres usług</span>
              <h2 className={styles.sectionTitle}>Co mogę dla Ciebie zaprojektować?</h2>
            </div>
          </ScrollReveal>

          <div className={styles.servicesGrid}>
            {offerItems.map((item, index) => (
              <ScrollReveal key={item.id} delay={index * 80}>
                <article id={item.id} className={styles.serviceCard}>
                  <div className={styles.serviceTopRow}>
                    <span className={styles.serviceNumber}>{item.number}</span>
                    <span className={styles.serviceFitLabel}>Najlepsze dla</span>
                  </div>
                  <h3 className={styles.serviceTitle}>{item.title}</h3>
                  <p className={styles.serviceSummary}>{item.summary}</p>
                  <p className={styles.serviceFit}>{item.fit}</p>
                  <ul className={styles.deliverables}>
                    {item.deliverables.map((deliverable) => (
                      <li key={deliverable}>
                        <Check size={16} />
                        <span>{deliverable}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/kontakt"
                    className={styles.inlineCta}
                    onClick={() =>
                      trackAnalyticsEvent('contact_clicked', {
                        location: `offer_${item.number}`,
                        service: item.title,
                      })
                    }
                  >
                    Porozmawiajmy o tym rozwiązaniu <ArrowRight size={16} />
                  </Link>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </section>

        <section className={styles.processSection}>
          <ScrollReveal>
            <div className={styles.sectionIntroLeft}>
              <span className={styles.sectionLabel}>Metodologia</span>
              <h2 className={styles.sectionTitleLeft}>Proces oparty na rzetelnej strategii.</h2>
            </div>
          </ScrollReveal>

          <div className={styles.processGrid}>
            {process.map((item, index) => (
              <ScrollReveal key={item.step} delay={index * 100}>
                <div className={styles.processCard}>
                  <span className={styles.processStep}>{item.step}</span>
                  <h3 className={styles.processTitle}>{item.title}</h3>
                  <p className={styles.processText}>{item.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        <section className={styles.closingSection}>
          <ScrollReveal>
            <div className={styles.closingCard}>
              <span className={styles.sectionLabel}>Współpraca</span>
              <h2 className={styles.closingTitle}>Gotowy na stronę, która pracuje na Twój wizerunek?</h2>
              <p className={styles.closingText}>
                Opowiedz mi o swoim projekcie. Przeanalizujemy Twoją sytuację i dobierzemy rozwiązanie idealnie dopasowane do Twoich biznesowych ambicji.
              </p>
              <Link
                href="/kontakt"
                className={styles.primaryCta}
                onClick={() =>
                  trackAnalyticsEvent('contact_clicked', {
                    location: 'offer_closing',
                    label: 'Skontaktuj się ze mną',
                  })
                }
              >
                Skontaktuj się ze mną
              </Link>
            </div>
          </ScrollReveal>
        </section>
      </div>
    </main>
  )
}
