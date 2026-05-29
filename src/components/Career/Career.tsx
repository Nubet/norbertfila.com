import styles from './Career.module.css'

const career = [
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
      'Współtworząc "IdeaDeck" - scentralizowaną platformę do ogłoszeń akademickich i inicjatyw studenckich.',
      'Implementowałem backend w Java i Spring Boot, w tym REST API do zarządzania użytkownikami i zgłoszeniami.',
      'Korzystałem z Keycloak w celu zapewnienia bezpiecznego uwierzytelniania i zarządzania tożsamością.',
      'Wspierałem integrację frontendu, dostarczając dokumentację API i przykładowe komponenty.',
      'Zaprojektowałem logo platformy i wspierałem przeglądy UI/UX, aby zachować spójność z logiką backendu.',
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
