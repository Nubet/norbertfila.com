import styles from './Education.module.css'

const education = [
  {
    institution: 'Politechnika Łódzka',
    degree: 'Studia inżynierskie na kierunku Computer Science',
    dates: 'Październik 2024 - Obecnie',
    details: [
      'Obecnie na 2. roku (planowane ukończenie: 2027).',
      'Program obejmował m.in. Algorithms & Data Structures, OOP (C++), Java Fundamentals, Databases, and Computer Networks',
    ],
  },
]

const certifications = [
  {
    name: 'Laureat Konkursu InfoSukces',
    issuer: 'Politechnika Łódzka',
    year: '2024',
    url: 'https://media.licdn.com/dms/image/v2/D4D2DAQH0WAgrkgtAaA/profile-treasury-image-shrink_1280_1280/B4DZeDYEu9HkAQ-/0/1750255833350?e=1780693200&v=beta&t=tpxtfeRHRI42ttukVyWLyrFzqMHxymnJ1jfUVeGxy3A',
  },
  {
    name: 'CCNA: Intro to Networks',
    issuer: 'Cisco Networking Academy',
    year: '2025',
    url: 'https://www.credly.com/badges/3f1f196f-1856-41b8-aed8-bca30de2a927/public_url',
  },
]

export default function Education() {
  return (
    <section className="section" id="education">
      <div className="section-heading">
        <h2>EDUKACJA.</h2>
      </div>
      <div className={styles.container}>
        <div className={styles.mainTimeline}>
          {education.map((item) => (
            <article className={styles.timelineCard} key={item.institution}>
              <div className={styles.timelineHeader}>
                <h3 className={styles.institution}>{item.institution}</h3>
                <div className={styles.meta}>
                  <span className={styles.degree}>{item.degree}</span>
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

        <div className={styles.certificationsSidebar}>
          <h3 className={styles.sidebarTitle}>CERTYFIKATY</h3>
          <div className={styles.certList}>
            {certifications.map((cert) => (
              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.certCard}
                key={cert.name}
              >
                <div className={styles.certHeader}>
                  <h4 className={styles.certName}>{cert.name}</h4>
                  <span className={styles.certYear}>{cert.year}</span>
                </div>
                <p className={styles.certIssuer}>{cert.issuer}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
