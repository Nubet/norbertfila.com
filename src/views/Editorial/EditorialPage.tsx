import type { ReactNode } from 'react'
import Link from 'next/link'
import type { ContentSection } from '@/data/editorial'
import styles from './EditorialPage.module.css'

const inlineLinkPattern = /\[([^\]]+)\]\((\/[^)]+)\)/g

function renderParagraphContent(paragraph: string) {
  const matches = [...paragraph.matchAll(inlineLinkPattern)]

  if (matches.length === 0) {
    return paragraph
  }

  const parts: Array<string | ReactNode> = []
  let lastIndex = 0

  for (const match of matches) {
    const [fullMatch, label, href] = match
    const matchIndex = match.index ?? 0

    if (matchIndex > lastIndex) {
      parts.push(paragraph.slice(lastIndex, matchIndex))
    }

    parts.push(
      <Link key={`${href}-${matchIndex}`} href={href} className={styles.inlineLink}>
        {label}
      </Link>
    )

    lastIndex = matchIndex + fullMatch.length
  }

  if (lastIndex < paragraph.length) {
    parts.push(paragraph.slice(lastIndex))
  }

  return parts
}

type EditorialHubItem = {
  title: string
  description: string
  href: string
  meta: string
}

type EditorialHubCategory = {
  label: string
  href: string
  active?: boolean
}

type EditorialPageProps = {
  eyebrow: string
  title: string
  description: string
  intro: string
  meta?: string[]
  sections: ContentSection[]
  relatedPosts?: EditorialHubItem[]
  plainTitle?: boolean
  ctaTitle?: string
  ctaDescription?: string
  ctaLabel?: string
  ctaHref?: string
}

export function EditorialPage({
  eyebrow,
  title,
  description,
  intro,
  meta,
  sections,
  relatedPosts,
  plainTitle,
  ctaTitle,
  ctaDescription,
  ctaLabel,
  ctaHref,
}: EditorialPageProps) {
  return (
    <article className={styles.page}>
      <header className={styles.hero}>
        <p className={styles.eyebrow}>{eyebrow}</p>
        <h1 className={plainTitle ? styles.plainTitle : styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
        {meta && meta.length > 0 ? (
          <div className={styles.meta}>
            {meta.map((item) => (
              <span key={item} className={styles.metaItem}>
                {item}
              </span>
            ))}
          </div>
        ) : null}
      </header>

      <div className={styles.content}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Dlaczego ten temat ma znaczenie</h2>
          <p className={`${styles.paragraph} ${styles.introParagraph}`}>{intro}</p>
        </section>

        {sections.map((section) => (
          <section key={section.title} className={styles.section}>
            <h2 className={styles.sectionTitle}>{section.title}</h2>
            {section.body.map((paragraph) => (
              <p key={paragraph} className={styles.paragraph}>
                {renderParagraphContent(paragraph)}
              </p>
            ))}
            {section.points ? (
              <ul className={styles.list}>
                {section.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}

        {ctaLabel && ctaHref ? (
          <section className={styles.ctaBox}>
            <h2 className={styles.sectionTitle}>{ctaTitle ?? 'Porozmawiajmy o Twojej stronie'}</h2>
            {ctaDescription ? <p className={styles.paragraph}>{ctaDescription}</p> : null}
            <Link href={ctaHref} className={styles.ctaLink}>
              {ctaLabel}
            </Link>
          </section>
        ) : null}

        {relatedPosts && relatedPosts.length > 0 ? (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Powiązane wpisy</h2>
            <div className={styles.relatedGrid}>
              {relatedPosts.map((post) => (
                <Link key={post.href} href={post.href} className={styles.relatedCard}>
                  <span className={styles.relatedMeta}>{post.meta}</span>
                  <h3 className={styles.relatedTitle}>{post.title}</h3>
                  <p className={styles.relatedText}>{post.description}</p>
                </Link>
              ))}
            </div>
          </section>
        ) : null}
      </div>
    </article>
  )
}

type EditorialHubProps = {
  eyebrow: string
  title: string
  description: string
  items: EditorialHubItem[]
  featuredItems?: EditorialHubItem[]
  categories?: EditorialHubCategory[]
  plainTitle?: boolean
}

export function EditorialHub({
  eyebrow,
  title,
  description,
  items,
  featuredItems,
  categories,
  plainTitle,
}: EditorialHubProps) {
  return (
    <section className={styles.hub}>
      <header className={styles.hubHeader}>
        <p className={styles.eyebrow}>{eyebrow}</p>
        <h1 className={plainTitle ? styles.plainTitle : styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
      </header>

      {featuredItems && featuredItems.length > 0 ? (
        <section className={styles.featuredSection}>
          <div className={styles.featuredHeader}>
            <p className={styles.featuredEyebrow}>Kluczowa wiedza</p>
            <h2 className={styles.featuredTitle}>Wyróżnione publikacje</h2>
          </div>
          <div className={styles.featuredGrid}>
            {featuredItems.map((item) => (
              <Link key={item.href} href={item.href} className={styles.featuredCard}>
                <span className={styles.featuredMeta}>{item.meta}</span>
                <h3 className={styles.featuredCardTitle}>{item.title}</h3>
                <p className={styles.featuredText}>{item.description}</p>
              </Link>
            ))}
          </div>
        </section>
      ) : null}

      {categories && categories.length > 0 ? (
        <nav className={styles.categoryNav} aria-label="Kategorie bloga">
          {categories.map((category) => (
            <Link
              key={category.href}
              href={category.href}
              className={category.active ? styles.categoryChipActive : styles.categoryChip}
            >
              {category.label}
            </Link>
          ))}
        </nav>
      ) : null}

      <div className={styles.hubGrid}>
        {items.map((item) => (
          <Link key={item.href} href={item.href} className={styles.cardLinkWrapper}>
            <article className={styles.card}>
              <div className={styles.cardMetaWrapper}>
                <span className={styles.cardMeta}>{item.meta.split(' • ')[0]}</span>
                <span className={styles.cardMeta} style={{ color: 'var(--color-gold)' }}>
                  {item.meta.split(' • ')[1]}
                </span>
              </div>
              <div className={styles.cardMain}>
                <h2 className={styles.cardTitle}>{item.title}</h2>
                <p className={styles.cardText}>{item.description}</p>
              </div>
              <div className={styles.cardArrow}>
                <span>→</span>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  )
}
