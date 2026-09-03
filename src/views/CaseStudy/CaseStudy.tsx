'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
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
            <Link href="/portfolio" className={styles.backLink}>
              <ArrowLeft size={18} /> Wróć do portfolio
            </Link>
          </ScrollReveal>

          <ScrollReveal>
            <div className={styles.openingImageWrapper}>
              <Image
                src={data.openingImage.src}
                alt={data.title}
                width={data.openingImage.width}
                height={data.openingImage.height}
                className={styles.openingImage}
                sizes="(max-width: 768px) 100vw, 1360px"
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

        {data.contentBlocks && data.contentBlocks.length > 0 ? (
          <div className={styles.contentBlocks}>
            {data.contentBlocks.map((block) => (
              <section key={block.id} className={styles[`block-${block.type}`]}>
                {block.type === 'text-only' && (
                  <ScrollReveal>
                    <div className={styles.textOnlyBlock}>
                      {block.title && <h2 className={styles.overviewTitle}>{block.title}</h2>}
                      {block.text && <p className={styles.overviewText}>{block.text}</p>}
                    </div>
                  </ScrollReveal>
                )}
                {block.type === 'full-image' && block.image && (
                  <ScrollReveal>
                    <div className={styles.fullImageBlock}>
                      <Image
                        src={block.image.src}
                        alt="Project visualization"
                        width={block.image.width}
                        height={block.image.height}
                        className={styles.fullImage}
                        sizes="100vw"
                      />
                    </div>
                  </ScrollReveal>
                )}
                {block.type === 'split-left' && (
                  <ScrollReveal>
                    <div className={styles.splitBlock}>
                      <div className={styles.splitImage}>
                        {block.image && (
                          <Image
                            src={block.image.src}
                            alt={block.title || 'App screenshot'}
                            width={block.image.width}
                            height={block.image.height}
                            className={styles.splitMockupImage}
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        )}
                      </div>
                      <div className={styles.splitText}>
                        {block.title && <h3 className={styles.splitTitle}>{block.title}</h3>}
                        {block.text && <p className={styles.overviewText}>{block.text}</p>}
                      </div>
                    </div>
                  </ScrollReveal>
                )}
                {block.type === 'split-right' && (
                  <ScrollReveal>
                    <div className={styles.splitBlockRight}>
                      <div className={styles.splitText}>
                        {block.title && <h3 className={styles.splitTitle}>{block.title}</h3>}
                        {block.text && <p className={styles.overviewText}>{block.text}</p>}
                      </div>
                      <div className={styles.splitImage}>
                        {block.image && (
                          <Image
                            src={block.image.src}
                            alt={block.title || 'App screenshot'}
                            width={block.image.width}
                            height={block.image.height}
                            className={styles.splitMockupImage}
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        )}
                      </div>
                    </div>
                  </ScrollReveal>
                )}
              </section>
            ))}
          </div>
        ) : (
          <>
            <section className={styles.overviewSection}>
              <ScrollReveal>
                <h2 className={styles.overviewTitle}>O projekcie</h2>
                <p className={styles.overviewText}>{data.overviewText}</p>
              </ScrollReveal>
            </section>

            {data.galleryImage1 && data.galleryImage2 && (
              <section className={styles.asymmetricGallery}>
                <ScrollReveal>
                  <div className={styles.mockupFull}>
                    <Image
                      src={data.galleryImage1.src}
                      alt={`${data.title} - 1`}
                      width={data.galleryImage1.width}
                      height={data.galleryImage1.height}
                      className={styles.galleryImageFull}
                      sizes="(max-width: 768px) 100vw, 60vw"
                    />
                  </div>
                </ScrollReveal>
                <ScrollReveal delay={200}>
                  <div className={styles.mockupCropped}>
                    <Image
                      src={data.galleryImage2.src}
                      alt={`${data.title} - 2`}
                      width={data.galleryImage2.width}
                      height={data.galleryImage2.height}
                      className={styles.galleryImageCropped}
                      sizes="(max-width: 768px) 100vw, 40vw"
                    />
                  </div>
                </ScrollReveal>
              </section>
            )}
          </>
        )}
      </div>

      {data.fullPageMockup && (
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
                  <Image
                    src={data.fullPageMockup.src}
                    alt={`Pełny podgląd ${data.title}`}
                    width={data.fullPageMockup.width}
                    height={data.fullPageMockup.height}
                    className={styles.mockupImage}
                    sizes="(max-width: 768px) 100vw, 1200px"
                  />
                </div>
              </div>
              <div className={styles.monitorStand}></div>
              <div className={styles.monitorBase}></div>
            </div>
          </ScrollReveal>
        </section>
      )}

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
            <Link href="/kontakt" className={styles.finalCtaButton}>
              Porozmawiajmy o współpracy
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
