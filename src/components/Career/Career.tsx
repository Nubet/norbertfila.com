import styles from './Career.module.css'

const career = [
  {
    company: 'SKN Main',
    subtitle: '(Politechnika Łódzka)',
    role: 'Członek Koła Naukowego',
    dates: 'Kwiecień 2026 - Obecnie',
    details: [
      'Współtworzę badawczy projekt systemu BCI (Brain-Computer Interface) służący do przetwarzania cyfrowych sygnałów EEG i analizy fal mózgowych w celu detekcji stanu skupienia użytkownika.',
      'Implementuję algorytmy pre-processingu dla surowych szeregów czasowych, realizując ekstrakcję danych z bazy i ich precyzyjną segmentację na kilkusekundowe okna pomiarowe (tzw. epoki).',
      'Opracowuję logikę automatycznego tagowania wyodrębnionych fragmentów sygnału (klasyfikacja stanów: skoncentrowany / nieskoncentrowany), przygotowując znormalizowany zbiór danych pod dalszą filtrację i analizę.',
    ],
  },
  {
    company: 'Freelance',
    subtitle: 'useme.com',
    role: 'React Web Developer',
    dates: 'Marzec 2026 - Obecnie',
    details: [
      'Realizuję dedykowane rozwiązania webowe, w tym landing page, one-pagery i cyfrowe wizytówki.',
      'Prowadzę cały proces od wstępnego projektu UI po kod gotowy do wdrożenia.',
      'Optymalizuję wydajność stron i dbam o responsywny, skalowalny design.',
    ],
  },
  {
    company: 'SKN Telin',
    subtitle: '(Politechnika Łódzka)',
    role: 'Java Backend Developer',
    dates: 'Październik 2025 - Obecnie',
    details: [
      'Współtworzyłem „IdeaDeck" – scentralizowaną platformę webową do zarządzania ogłoszeniami akademickimi i inicjatywami studenckimi.',
      'Projektowałem i rozwijałem backend w ekosystemie Java i Spring Boot, implementując architekturę REST API do obsługi użytkowników i zgłoszeń.',
      'Odpowiadałem za bezpieczeństwo aplikacji – zintegrowałem system Keycloak, wdrażając nowoczesne mechanizmy uwierzytelniania i zarządzania tożsamością (IAM).',
      'Wspierałem pracę zespołu frontendowego poprzez tworzenie przejrzystej dokumentacji API oraz dostarczanie przykładowych komponentów integracyjnych.',
      'Zaprojektowałem logo platformy oraz konsultowałem makiety UI/UX, dbając o spójność interfejsu z ograniczeniami i logiką biznesową backendu.',
    ],
  },
]

export default function Career() {
  return (
    <section className="section" id="career">
      <div className="section-heading">
        <h2>DOŚWIADCZENIE.</h2>
        <div
          className="shape-circle"
          style={{
            position: 'absolute',
            left: '-60px',
            top: '20px',
            zIndex: -1,
            width: '80px',
            height: '80px',
          }}
        ></div>
      </div>
      <div className={styles.timeline}>
        {career.map((item) => (
          <article className={styles.card} key={item.company}>
            <div className={styles.header}>
              <div className={styles.companyInfo}>
                <h3 className={styles.company}>{item.company}</h3>
                <span className={styles.subtitle}>{item.subtitle}</span>
              </div>
              <div className={styles.meta}>
                <span className={styles.role}>{item.role}</span>
                <span className={styles.dates}>{item.dates}</span>
              </div>
            </div>
            <ul className={styles.list}>
              {item.details.map((detail) => (
                <li key={detail}>
                  <div className={styles.bullet}></div>
                  {detail}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
