'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { ScrollReveal } from '@/components/ScrollReveal/ScrollReveal'
import styles from './CaseStudy.module.css'
import { CaseStudyData } from '@/data/caseStudies'
import { notFound } from 'next/navigation'

interface CaseStudyProps {
  data: CaseStudyData
}

export function CaseStudy({ data }: CaseStudyProps) {
  if (!data) return notFound()

  return (
    <main className={styles.pageWrapper}>
      <div className={styles.container}>
        <section className={styles.hero}>
          <ScrollReveal>
            <div className={styles.openingImageWrapper}>
              <img
                src={data.openingImage}
                alt={data.title}
                className={styles.openingImage}
                loading="lazy"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className={styles.heroGrid}>
              <div className={styles.titleColumn}>
                <h1 className={styles.projectTitle}>{data.title}</h1>
              </div>

              <div className={styles.contentColumn}>
                <div className={styles.projectGoal}>
                  <p>{data.clientDescription}</p>
                </div>

                <aside className={styles.projectDataHorizontal}>
                  <div className={styles.dataGroup}>
                    <span className={styles.dataLabel}>Rola</span>
                    <span className={styles.dataValue}>{data.role}</span>
                  </div>
                  <div className={styles.dataGroup}>
                    <span className={styles.dataLabel}>Branża</span>
                    <span className={styles.dataValue}>{data.industry}</span>
                  </div>
                  <div className={styles.dataGroup}>
                    <span className={styles.dataLabel}>Rok</span>
                    <span className={styles.dataValue}>{data.year}</span>
                  </div>
                </aside>
              </div>
            </div>
          </ScrollReveal>
        </section>

        <ScrollReveal>
          <hr className={styles.divider} />
        </ScrollReveal>

        <section className={styles.overviewSection}>
          <ScrollReveal>
            <h2 className={styles.overviewTitle}>O projekcie</h2>
            <p className={styles.overviewText}>{data.overviewText}</p>
          </ScrollReveal>
        </section>

        <section className={styles.asymmetricGallery}>
          <ScrollReveal>
            <div className={styles.mockupFull}>
              <img
                src={data.galleryImage1}
                alt={`${data.title} - 1`}
                className={styles.galleryImageFull}
                loading="lazy"
              />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className={styles.mockupCropped}>
              <img
                src={data.galleryImage2}
                alt={`${data.title} - 2`}
                className={styles.galleryImageCropped}
                loading="lazy"
              />
            </div>
          </ScrollReveal>
        </section>
      </div>

      <section className={styles.scrollingMockupSection}>
        <ScrollReveal>
          <div className={styles.mockupHeader}>
            <h3 className={styles.mockupTitle}>Pełen obraz</h3>
            <p className={styles.mockupDesc}>
              Przewiń okno poniżej, aby zobaczyć projekt z bliska.
            </p>
          </div>
          <div className={styles.monitorWrapper}>
            <div className={styles.monitorFrame}>
              <div className={styles.mockupWindow}>
                <img
                  src={data.fullPageMockup}
                  alt={`Pełny podgląd ${data.title}`}
                  className={styles.mockupImage}
                  loading="lazy"
                />
              </div>
            </div>
            <div className={styles.monitorStand}></div>
            <div className={styles.monitorBase}></div>
          </div>
        </ScrollReveal>
      </section>

      <div className={styles.container}>
        <nav className={styles.projectNav}>
          {data.prevProjectSlug && data.prevProjectName ? (
            <Link href={`/portfolio/${data.prevProjectSlug}`} className={styles.navLink}>
              <span className={styles.navDirection}>Poprzedni</span>
              <span className={styles.navProjectName}>
                <ArrowLeft size={20} /> {data.prevProjectName}
              </span>
            </Link>
          ) : (
            <div style={{ flex: 1 }}></div>
          )}

          {data.nextProjectSlug && data.nextProjectName ? (
            <Link
              href={`/portfolio/${data.nextProjectSlug}`}
              className={`${styles.navLink} ${styles.next}`}
            >
              <span className={styles.navDirection}>Następny</span>
              <span className={styles.navProjectName}>
                {data.nextProjectName} <ArrowRight size={20} />
              </span>
            </Link>
          ) : (
            <div style={{ flex: 1 }}></div>
          )}
        </nav>
      </div>

      <section className={styles.finalCtaSection}>
        <div className={styles.container}>
          <ScrollReveal>
            <h2 className={styles.finalCtaTitle}>Czas na Twój projekt.</h2>
            <Link href="/contact" className={styles.finalCtaButton}>
              Porozmawiajmy o współpracy
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
