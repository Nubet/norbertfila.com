'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Clock } from 'lucide-react'
import { ScrollReveal } from '@/components/ScrollReveal/ScrollReveal'
import { portfolioProjects } from '@/data/portfolio'
import styles from './Portfolio.module.css'

const categories = ['Wszystko', ...Array.from(new Set(portfolioProjects.map((p) => p.category)))]

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('Wszystko')
  const [comingSoonId, setComingSoonId] = useState<string | null>(null)

  const handleReadMoreClick = (e: React.MouseEvent, project: typeof portfolioProjects[0]) => {
    if (!project.isReady) {
      e.preventDefault()
      setComingSoonId(project.id)
      setTimeout(() => setComingSoonId(null), 3000)
    }
  }

  const filteredProjects =
    activeCategory === 'Wszystko'
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.category === activeCategory)

  return (
    <div className={styles.portfolioPage}>
      <div className={styles.headerSpacer} />

      <section className={styles.heroSection}>
        <div className={styles.container}>
          <ScrollReveal>
            <h1 className={styles.pageTitle}>Zrealizowane Projekty</h1>
            <p className={styles.pageSub}>Zobacz wybrane realizacje z podziałem na branże.</p>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className={styles.filterBar}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`${styles.filterBtn} ${activeCategory === cat ? styles.filterBtnActive : ''}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className={styles.gallerySection}>
        <div className={styles.container}>
          <div className={styles.portfolioGrid}>
            {filteredProjects.map((project, idx) => (
              <ScrollReveal delay={Math.min(idx * 50, 300)} key={project.id}>
                <article className={styles.portfolioCard} id={project.id}>
                  {project.images ? (
                    <div className={styles.mobileScreenshotsWrapper}>
                      {project.images.map((img, i) => (
                        <div key={i} className={styles.mobileScreenshot}>
                          <Image
                            src={img}
                            alt={`${project.title} screen ${i + 1}`}
                            fill
                            className={styles.projectImage}
                            sizes="(max-width: 768px) 33vw, 20vw"
                          />
                        </div>
                      ))}
                      <div className={styles.categoryPill}>{project.category}</div>
                    </div>
                  ) : (
                    <div className={styles.portfolioImageWrapper}>
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className={styles.projectImage}
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className={styles.categoryPill}>{project.category}</div>
                    </div>
                  )}
                  <div className={styles.portfolioInfo}>
                    <h3 className={styles.portfolioTitle}>{project.title}</h3>
                    <p className={styles.portfolioDesc}>{project.description}</p>
                    <Link 
                      href={`#${project.id}`} 
                      className={styles.readMoreBtn}
                      onClick={(e) => handleReadMoreClick(e, project)}
                    >
                      {comingSoonId === project.id ? (
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: 'var(--color-gold)' }}>
                          Wkrótce dostępne <Clock size={18} />
                        </span>
                      ) : (
                        <>Czytaj dalej <ArrowRight size={18} /></>
                      )}
                    </Link>
                  </div>
                </article>
              </ScrollReveal>
            ))}

            {filteredProjects.length === 0 && (
              <p className={styles.noResults}>Brak projektów w tej kategorii.</p>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
