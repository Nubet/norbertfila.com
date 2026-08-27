'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { ScrollReveal } from '@/components/ScrollReveal/ScrollReveal'
import styles from './About.module.css'

export function About() {
  return (
    <main className={styles.pageWrapper}>
      <div className={styles.container}>
        <section className={styles.hero}>
          <ScrollReveal>
            <span className={styles.heroLabel}>O mnie</span>
            <h1 className={styles.heroTitle}>
              Przekształcam surowe pomysły w działające rozwiązania.
            </h1>
            <p className={styles.heroSubtitle}>
              Jestem studentem Computer Science na międzynarodowym wydziale IFE Politechniki
              Łódzkiej. Tworzę strony, które nie tylko świetnie wyglądają, ale też bezbłędnie
              działają. Łączę programistyczne zaplecze z okiem do detali.
            </p>
          </ScrollReveal>
        </section>

        <section className={styles.contentGrid}>
          <div className={styles.sectionBlock}>
            <ScrollReveal>
              <h2 className={styles.sectionTitle}>Filozofia Rzemiosła</h2>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className={styles.signatureSection}>
                <div className={styles.signatureMark} aria-hidden="true" />
                <div className={styles.bioText}>
                  <p>
                    Dobre oprogramowanie przypomina mi luksusowy zegarek. Większość ludzi widzi
                    tylko piękną tarczę, ale to precyzyjnie zaprojektowany mechanizm wewnątrz
                    decyduje o jego prawdziwej wartości. W wolnym czasie hobbystycznie składam
                    zegarki mechaniczne, co nauczyło mnie jednej ważnej rzeczy – cierpliwości i
                    dbałości o każdy, najmniejszy trybik.
                  </p>
                  <p>
                    To samo podejście stosuję podczas kodowania. Od analizy fal mózgowych (EEG) w
                    projekcie Koła Naukowego, po budowę skalowalnych systemów w Javie i nowoczesnych
                    stron internetowych. Kocham proces budowania – dlatego często można mnie spotkać
                    na hackathonach, gdzie przesuwam limity tego, co da się stworzyć w 24 godziny.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className={styles.sectionBlock}>
            <ScrollReveal>
              <h2 className={styles.sectionTitle}>Doświadczenie</h2>
            </ScrollReveal>

            <div className={styles.experienceList}>
              <ScrollReveal delay={100}>
                <div className={styles.experienceItem}>
                  <div className={styles.expHeader}>
                    <h3 className={styles.expRole}>Web Developer & Designer</h3>
                    <span className={styles.expDate}>Marzec 2026 - Obecnie</span>
                  </div>
                  <div className={styles.expCompany}>Freelance</div>
                  <div className={styles.expDesc}>
                    <ul>
                      <li>
                        Realizuję dedykowane rozwiązania webowe (landing page, strony firmowe,
                        sklepy internetowe).
                      </li>
                      <li>
                        Prowadzę cały proces od wstępnego projektu UI po wydajny, zoptymalizowany
                        kod.
                      </li>
                      <li>Optymalizuję działanie i dbam o responsywny, bezbłędny design.</li>
                    </ul>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <div className={styles.experienceItem}>
                  <div className={styles.expHeader}>
                    <h3 className={styles.expRole}>Członek Koła Naukowego</h3>
                    <span className={styles.expDate}>Kwiecień 2026 - Obecnie</span>
                  </div>
                  <div className={styles.expCompany}>SKN Main (Politechnika Łódzka)</div>
                  <div className={styles.expDesc}>
                    <ul>
                      <li>
                        Współtworzę badawczy projekt BCI (Brain-Computer Interface) do analizy fal
                        EEG i detekcji stanu skupienia.
                      </li>
                      <li>
                        Implementuję algorytmy pre-processingu dla surowych szeregów czasowych.
                      </li>
                      <li>
                        Opracowuję logikę automatycznego tagowania i klasyfikacji okien pomiarowych.
                      </li>
                    </ul>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <div className={styles.experienceItem}>
                  <div className={styles.expHeader}>
                    <h3 className={styles.expRole}>Java Backend Developer</h3>
                    <span className={styles.expDate}>Październik 2025 - Obecnie</span>
                  </div>
                  <div className={styles.expCompany}>SKN Telin (Politechnika Łódzka)</div>
                  <div className={styles.expDesc}>
                    <ul>
                      <li>
                        Współtworze „IdeaDeck" – scentralizowaną platformę webową do zarządzania
                        ogłoszeniami akademickimi i inicjatywami studenckimi.
                      </li>
                      <li>Zintegrowałem system Keycloak, wdrażając nowoczesne mechanizmy IAM.</li>
                      <li>
                        Zaimplementowałem Backend Java/Spring Boot (konta, filtracja, aplikacje)
                      </li>
                      <li>Zaprojektowałem logo platformy oraz robiłem techniczne review UI/UX.</li>
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <section className={styles.contentGrid}>
          <div className={styles.sectionBlock}>
            <ScrollReveal>
              <h2 className={styles.sectionTitle}>Edukacja</h2>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className={styles.experienceItem}>
                <div className={styles.expHeader}>
                  <h3 className={styles.expRole}>Computer Science (Inż.)</h3>
                  <span className={styles.expDate}>Październik 2024 - 2027</span>
                </div>
                <div className={styles.expCompany}>Politechnika Łódzka</div>
                <div className={styles.expDesc}>
                  <p>
                    Nauka na IFE to dla mnie codzienny kontakt z nowymi technologiami. Umiejętność
                    analitycznego rozwiązywania problemów i techniczne obycie bezpośrednio
                    przekładają się na szybkość, bezpieczeństwo i niezawodność stron, które buduję
                    dla biznesu.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className={styles.sectionBlock}>
            <ScrollReveal>
              <h2 className={styles.sectionTitle}>Certyfikaty</h2>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className={styles.experienceItem}>
                <div className={styles.expHeader}>
                  <h3 className={styles.expRole}>Laureat Konkursu InfoSukces</h3>
                  <span className={styles.expDate}>2024</span>
                </div>
                <div className={styles.expCompany}>Politechnika Łódzka</div>
              </div>
              <div className={styles.experienceItem}>
                <div className={styles.expHeader}>
                  <h3 className={styles.expRole}>CCNA: Intro to Networks</h3>
                  <span className={styles.expDate}>2025</span>
                </div>
                <div className={styles.expCompany}>Cisco Networking Academy</div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section className={styles.ctaSection}>
          <ScrollReveal>
            <h2 className={styles.ctaTitle}>Masz pomysł na projekt?</h2>
            <Link href="/contact" className={styles.ctaButton}>
              Porozmawiajmy o współpracy <ArrowRight size={20} />
            </Link>
          </ScrollReveal>
        </section>
      </div>
    </main>
  )
}
