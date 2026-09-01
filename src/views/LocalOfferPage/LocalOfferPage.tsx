import Image from 'next/image'
import Link from 'next/link'
import { getBlogPostBySlug } from '@/data/blogPosts'
import type { LocalOfferPageData } from '@/data/localOfferPages'
import { portfolioProjects } from '@/data/portfolio'
import { TrackedLink } from '@/components/TrackedLink/TrackedLink'
import styles from './LocalOfferPage.module.css'

type LocalOfferPageProps = {
  page: LocalOfferPageData
}

export function LocalOfferPage({ page }: LocalOfferPageProps) {
  const relatedPosts = page.relatedPostSlugs
    .map((slug) => getBlogPostBySlug(slug))
    .filter((post): post is NonNullable<typeof post> => Boolean(post))
  const showcaseProjects = (page.showcaseProjectIds ?? [])
    .map((id) => portfolioProjects.find((project) => project.id === id))
    .filter((project): project is NonNullable<typeof project> => Boolean(project))

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <section className={styles.hero}>
          <div className={styles.heroHeader}>
            <p className={styles.eyebrow}>{page.eyebrow}</p>
            <h1 className={styles.title}>{page.title}</h1>
            <p className={styles.description}>{page.description}</p>
            <div className={styles.actions}>
              <TrackedLink
                href="/kontakt"
                className={styles.primaryCta}
                eventName="local_offer_cta_clicked"
                eventParams={{ city: page.city, location: 'hero' }}
              >
                Porozmawiajmy o Twojej stronie
              </TrackedLink>
              <Link href="/portfolio" className={styles.secondaryCta}>
                Zobacz realizacje
              </Link>
            </div>
          </div>
        </section>

        <section className={styles.leadSection}>
          <div className={styles.leadGrid}>
            <div className={styles.leadLabel}>
              <span className={styles.sectionLabel}>Dlaczego warto</span>
            </div>
            <div className={styles.leadContent}>
              <p className={styles.lead}>{page.lead}</p>
              <ul className={styles.pointList}>
                {page.heroPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {showcaseProjects.length > 0 ? (
          <section className={styles.showcaseSection}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionLabel}>Wybrane realizacje</span>
              <h2 className={styles.sectionTitle}>
                {page.showcaseTitle ?? 'Przykłady realizacji'}
              </h2>
              {page.showcaseDescription ? (
                <p className={styles.sectionBody}>{page.showcaseDescription}</p>
              ) : null}
            </div>
            <div className={styles.showcaseGrid}>
              {showcaseProjects.map((project) => {
                const href = project.isReady
                  ? `/portfolio/${project.id}`
                  : `/portfolio#${project.id}`

                return (
                  <TrackedLink
                    key={project.id}
                    href={href}
                    className={styles.showcaseCard}
                    eventName="local_offer_portfolio_clicked"
                    eventParams={{ city: page.city, project: project.id }}
                  >
                    <div className={styles.showcaseImageWrap}>
                      <Image
                        src={project.image.src}
                        alt={`Projekt strony internetowej (widok z komputera): ${project.title}`}
                        width={project.image.width}
                        height={project.image.height}
                        className={styles.showcaseImage}
                        sizes="(max-width: 900px) 100vw, 50vw"
                      />
                      <span className={styles.showcaseCategory}>{project.category}</span>
                    </div>
                    <div className={styles.showcaseBody}>
                      <h3 className={styles.showcaseTitle}>{project.title}</h3>
                      <p className={styles.showcaseText}>{project.shortDescription}</p>
                      <span className={styles.showcaseCta}>
                        {project.isReady ? 'Zobacz pełne case study' : 'Zobacz projekt w portfolio'}
                      </span>
                    </div>
                  </TrackedLink>
                )
              })}
            </div>
          </section>
        ) : null}

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Dla kogo</span>
            <h2 className={styles.sectionTitle}>{page.audienceTitle}</h2>
            <p className={styles.sectionBody}>{page.audienceIntro}</p>
          </div>
          <div className={styles.audienceGrid}>
            {page.audiences.map((audience) => (
              <article key={audience.name} className={styles.audienceCard}>
                <h3 className={styles.audienceTitle}>{audience.name}</h3>
                <p className={styles.audienceText}>{audience.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.contentGrid}>
            {page.sections.map((section) => (
              <article key={section.title} className={styles.contentCard}>
                <h2 className={styles.sectionTitle}>{section.title}</h2>
                <div className={styles.contentBody}>
                  <div className={styles.bodyStack}>
                    {section.body.map((paragraph) => (
                      <p key={paragraph} className={styles.sectionBody}>
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  {section.points ? (
                    <ul className={styles.sectionList}>
                      {section.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  ) : null}
                  {section.table ? (
                    <div className={styles.tableWrapper}>
                      <table className={styles.table}>
                        <thead>
                          <tr>
                            {section.table.headers.map((header) => (
                              <th key={header}>{header}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {section.table.rows.map((row) => (
                            <tr key={row.join('|')}>
                              {row.map((cell, index) => (
                                <td key={`${cell}-${index}`}>{cell}</td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.faqSection}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>FAQ</span>
            <h2 className={styles.sectionTitle}>
              Najczęstsze pytania o strony internetowe {page.city}
            </h2>
            <p className={styles.sectionBody}>Kliknij w pytanie, aby rozwinąć odpowiedź.</p>
          </div>
          <div className={styles.faqList}>
            {page.faqs.map((faq) => (
              <details key={faq.question} className={styles.faqItem}>
                <summary className={styles.faqQuestion}>
                  <span>{faq.question}</span>
                  <span className={styles.faqIcon} aria-hidden="true" />
                </summary>
                <div className={styles.faqAnswerWrapper}>
                  <p className={styles.faqAnswer}>{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </section>

        {relatedPosts.length > 0 ? (
          <section className={styles.relatedSection}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionLabel}>Powiązane treści</span>
              <h2 className={styles.sectionTitle}>Przeczytaj też</h2>
            </div>
            <div className={styles.relatedGrid}>
              {relatedPosts.map((post) => (
                <TrackedLink
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className={`${styles.relatedCard} ${styles.relatedLink}`}
                  eventName="local_offer_related_clicked"
                  eventParams={{ city: page.city, slug: post.slug }}
                >
                  <span className={styles.relatedMeta}>{post.category}</span>
                  <h3 className={styles.relatedTitle}>{post.displayTitle || post.title}</h3>
                  <p className={styles.relatedText}>{post.excerpt}</p>
                </TrackedLink>
              ))}
            </div>
          </section>
        ) : null}

        <section className={styles.closingSection}>
          <div className={styles.closingCard}>
            <span className={styles.sectionLabel}>Kontakt</span>
            <h2 className={styles.closingTitle}>{page.ctaTitle}</h2>
            <p className={styles.closingText}>{page.ctaDescription}</p>
            <div className={styles.closingAction}>
              <TrackedLink
                href="/kontakt"
                className={styles.primaryCta}
                eventName="local_offer_cta_clicked"
                eventParams={{ city: page.city, location: 'closing' }}
              >
                Napisz do mnie
              </TrackedLink>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
