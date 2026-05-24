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
      'Tworzę czysty kod w nowoczesnym stacku (Next.js, React), aby zapewnić Twojej stronie błyskawiczne ładowanie, maksymalne bezpieczeństwo i znacznie lepsze pozycjonowanie w Google.',
  },
  {
    question: 'Czy mogę samodzielnie edytować treści na stronie?',
    answer:
      'Tak, na życzenie wdrażam intuicyjny system CMS, który umożliwia łatwą, samodzielną edycję tekstów czy dodawanie produktów za pomocą prostego formularza.',
  },
  {
    question: 'Czy tworzysz strony wielojęzyczne?',
    answer:
      'Tak, na życzenie dostosowuję witrynę do obsługi wielu wersji językowych (np. PL/EN), dbając jednocześnie o ich poprawne pozycjonowanie na rynkach zagranicznych.',
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
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
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`${styles.faqItem} ${openIndex === index ? styles.open : ''}`}
            >
              <button
                className={styles.question}
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span>{faq.question}</span>
                <ChevronDown className={styles.icon} />
              </button>
              <div
                className={styles.answerWrapper}
                style={{
                  gridTemplateRows: openIndex === index ? '1fr' : '0fr',
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
