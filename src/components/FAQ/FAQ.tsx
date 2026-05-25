import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import styles from './FAQ.module.css'

const faqs = [
  {
    question: 'Ile kosztuje stworzenie strony internetowej?',
    answer:
      'Cena zależy od specyfikacji projektu, a najprostsze, dedykowane strony startują od około 700 zł - napisz do mnie, a darmową wycenę otrzymasz zazwyczaj w ciągu 12 godzin.',
  },
  {
    question: 'Jak długo trwa realizacja strony internetowej?',
    answer:
      'Tworzenie autorskiej witryny trwa zazwyczaj od 7 do 21 dni roboczych, w zależności od skomplikowania projektu oraz sprawności naszej komunikacji.',
  },
  {
    question: 'Czy pomagasz z domeną, hostingiem i instalacją?',
    answer:
      'Tak, kompleksowo doradzam przy wyborze najlepszych opcji i zajmuję się stroną od unikalnego projektu graficznego aż po bezpieczne wdrożenie na serwer produkcyjny.',
  },
  {
    question: 'Czy strona będzie dostosowana do urządzeń mobilnych?',
    answer:
      'Oczywiście, wszystkie projekty tworzę w technologii RWD, co gwarantuje ich bezbłędne i automatyczne dopasowanie do ekranów smartfonów, tabletów oraz komputerów.',
  },
  {
    question: 'Dlaczego kodujesz strony od podstaw, zamiast używać WordPressa?',
    answer:
      'Wiele stron na WordPressie powstaje przez szybkie składanie szablonu, co często ogranicza jakość i możliwości rozwoju. U mnie każda strona jest projektowana i kodowana pod konkretną firmę: pod Twoją ofertę, klientów i cele sprzedażowe. Efekt to większa szybkość, lepsze SEO, lepsza konwersja i pełna elastyczność — mogę wdrożyć praktycznie każdą funkcję, której potrzebujesz teraz lub w przyszłości. Przede wszystkim jednak dostajesz unikalną stronę, która wyróżnia Cię na tle konkurencji, zamiast kolejnej kopii z tego samego szablonu.',
  },
  {
    question: 'Czy mogę samodzielnie edytować treści na stronie?',
    answer:
      'Tak, na życzenie wdrażam intuicyjny system CMS, dzięki któremu samodzielnie edytujesz treści na stronie: teksty, zdjęcia, realizacje, wpisy blogowe - bez znajomości kodu i bez angażowania programisty do każdej zmiany.',
  },
  {
    question: 'Czy tworzysz strony wielojęzyczne?',
    answer:
      'Tak, na życzenie dostosowuję witrynę do obsługi wielu wersji językowych (np. PL/EN), dbając jednocześnie o ich poprawne pozycjonowanie na rynkach zagranicznych.',
  },
]

export function FAQ() {
  const [openQuestion, setOpenQuestion] = useState<string | null>(null)

  const toggleFAQ = (question: string) => {
    setOpenQuestion(openQuestion === question ? null : question)
  }

  return (
    <section className={styles.faqSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Najczęściej zadawane pytania</h2>
          <p className={styles.subtitle}>
            Masz wątpliwości? Tu znajdziesz szybkie odpowiedzi na najczęstsze pytania.
          </p>
        </div>
        <div className={styles.faqList}>
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className={`${styles.faqItem} ${openQuestion === faq.question ? styles.open : ''}`}
            >
              <button
                type="button"
                className={styles.question}
                onClick={() => toggleFAQ(faq.question)}
                aria-expanded={openQuestion === faq.question}
              >
                <span>{faq.question}</span>
                <ChevronDown className={styles.icon} />
              </button>
              <div
                className={styles.answerWrapper}
                style={{
                  gridTemplateRows: openQuestion === faq.question ? '1fr' : '0fr',
                }}
              >
                <div className={styles.answer}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
