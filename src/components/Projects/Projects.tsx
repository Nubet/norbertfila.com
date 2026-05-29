'use client'

import NextImage from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import {
  Github,
  ExternalLink,
  Download,
  ArrowRight,
  Code,
  X,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'
import styles from './Projects.module.css'

const ASSET_BASE_URL = '/'

const projects = [
  {
    title: 'StudyMood',
    description:
      'Aplikacja multiplatformowa łącząca produktywność z dbaniem o dobrostan psychiczny. Oferuje monitorowanie nastroju na dwuwymiarowej mapie energii i przyjemności, timery nauki oraz szybkie narzędzia samoregulacji, takie jak ćwiczenia oddechowe. Zbudowana w Kotlin Multiplatform.',
    tags: ['Kotlin Multiplatform', 'Compose', 'SQLDelight', 'Koin'],
    repoLink: 'https://github.com/Nubet/studymood-app-public',
    demoLink: null,
    downloadLink: null,
    featured: true,
    images: [
      `${ASSET_BASE_URL}study-mood/1.webp`,
      `${ASSET_BASE_URL}study-mood/2.webp`,
      `${ASSET_BASE_URL}study-mood/3.webp`,
      `${ASSET_BASE_URL}study-mood/4.webp`,
      `${ASSET_BASE_URL}study-mood/5.webp`,
      `${ASSET_BASE_URL}study-mood/6.webp`,
    ],
  },
  {
    title: 'Grayscale Everywhere',
    description:
      'Rozszerzenie do Firefox stawiające prywatność na pierwszym miejscu, które ogranicza cyfrowe rozpraszacze dzięki konfigurowalnym filtrom skali szarości na stronach internetowych. Zawiera białą listę domen i politykę zerowego zbierania danych.',
    tags: ['JavaScript', 'Bun', 'Firefox Add-on'],
    repoLink: 'https://github.com/Nubet/Grayscale-Filter-Extension',
    demoLink: null,
    downloadLink: 'https://addons.mozilla.org/en-US/firefox/addon/grayscale-everywhere/',
    featured: true,
    images: [
      `${ASSET_BASE_URL}grayscale-filter/1.webp`,
      `${ASSET_BASE_URL}grayscale-filter/2.webp`,
      `${ASSET_BASE_URL}grayscale-filter/3.webp`,
      `${ASSET_BASE_URL}grayscale-filter/4.webp`,
    ],
  },
  {
    title: 'ISTQB Tester App',
    description:
      'Mobilna aplikacja do nauki do ISTQB CTFL z nauką podzieloną na rozdziały, symulacją egzaminu, wyszukiwaniem w słowniczku, zakładkami i lokalnym śledzeniem postępu, które oznacza pytania jako opanowane po poprawnych odpowiedziach.',
    tags: ['Expo', 'React Native', 'TypeScript', 'sqlite'],
    repoLink: 'https://github.com/Nubet/istqb-tester-app',
    demoLink: null,
    downloadLink: '',
    featured: true,
    images: [
      `${ASSET_BASE_URL}ISTQB-tester-app/0-main-screen.webp`,
      `${ASSET_BASE_URL}ISTQB-tester-app/1-tryb-nauki.webp`,
      `${ASSET_BASE_URL}ISTQB-tester-app/2-tryb-nauki.webp`,
      `${ASSET_BASE_URL}ISTQB-tester-app/3-fiszki.webp`,
      `${ASSET_BASE_URL}ISTQB-tester-app/4-fiszki.webp`,
      `${ASSET_BASE_URL}ISTQB-tester-app/5-fiszki.webp`,
    ],
  },
  {
    title: 'MicMute',
    description:
      'Prosta aplikacja desktopowa na Windows i Linux, która pomaga kontrolować mikrofon podczas spotkań, streamów i pracy. Pozwala szybko wyciszać i odciszać jednym kliknięciem albo globalnym skrótem klawiaturowym.',
    tags: ['Electron', 'React', 'Vite', 'TypeScript'],
    repoLink: 'https://github.com/Nubet/MicMute',
    demoLink: null,
    downloadLink: 'https://github.com/Nubet/MicMute/releases',
    featured: true,
    images: [
      `${ASSET_BASE_URL}MicMute/audio-live.png`,
      `${ASSET_BASE_URL}MicMute/audio-muted.png`,
      `${ASSET_BASE_URL}MicMute/hotkeys.png`,
      `${ASSET_BASE_URL}MicMute/startup.png`,
      `${ASSET_BASE_URL}MicMute/alerts.png`,
    ],
  },
]

export default function Projects({ all = false }: { all?: boolean }) {
  const displayedProjects = all ? projects : projects.slice(0, 2)
  const [lightbox, setLightbox] = useState<null | { projectIndex: number; imageIndex: number }>(
    null
  )
  const closeButtonRef = useRef<HTMLButtonElement | null>(null)
  const portalTarget = typeof document !== 'undefined' ? document.body : null

  const openLightbox = (projectIndex: number) => {
    setLightbox({ projectIndex, imageIndex: 0 })
  }

  const closeLightbox = () => {
    setLightbox(null)
  }

  const activeProject = lightbox ? displayedProjects[lightbox.projectIndex] : null

  const goToPrevious = () => {
    if (!activeProject || !lightbox) return
    const total = activeProject.images.length
    const nextIndex = (lightbox.imageIndex - 1 + total) % total
    setLightbox({ projectIndex: lightbox.projectIndex, imageIndex: nextIndex })
  }

  const goToNext = () => {
    if (!activeProject || !lightbox) return
    const total = activeProject.images.length
    const nextIndex = (lightbox.imageIndex + 1) % total
    setLightbox({ projectIndex: lightbox.projectIndex, imageIndex: nextIndex })
  }

  useEffect(() => {
    if (!lightbox) return
    const scrollY = window.scrollY
    const previousBodyStyle = {
      overflow: document.body.style.overflow,
      paddingRight: document.body.style.paddingRight,
    }
    const previousHtmlStyle = {
      overflow: document.documentElement.style.overflow,
      scrollBehavior: document.documentElement.style.scrollBehavior,
    }

    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth

    document.documentElement.classList.add('lightbox-open')
    document.body.classList.add('lightbox-open')
    document.body.style.overflow = 'hidden'
    document.documentElement.style.overflow = 'hidden'
    document.documentElement.style.scrollBehavior = 'auto'
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`
    }

    const shiftImage = (direction: -1 | 1) => {
      setLightbox((previous) => {
        if (!previous) return previous
        const project = displayedProjects[previous.projectIndex]
        if (!project) return previous
        const total = project.images.length
        const nextIndex = (previous.imageIndex + direction + total) % total
        return { projectIndex: previous.projectIndex, imageIndex: nextIndex }
      })
    }

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeLightbox()
        return
      }
      if (event.key === 'ArrowLeft') {
        shiftImage(-1)
        return
      }
      if (event.key === 'ArrowRight') {
        shiftImage(1)
      }
    }

    window.addEventListener('keydown', handleKey)
    closeButtonRef.current?.focus()

    return () => {
      document.documentElement.classList.remove('lightbox-open')
      document.body.classList.remove('lightbox-open')
      document.body.style.overflow = previousBodyStyle.overflow
      document.body.style.paddingRight = previousBodyStyle.paddingRight
      document.documentElement.style.overflow = previousHtmlStyle.overflow
      document.documentElement.style.scrollBehavior = previousHtmlStyle.scrollBehavior
      requestAnimationFrame(() => {
        window.scrollTo(0, scrollY)
      })
      window.removeEventListener('keydown', handleKey)
    }
  }, [lightbox, displayedProjects])

  useEffect(() => {
    if (!activeProject || !lightbox) return
    const total = activeProject.images.length
    if (total <= 1) return
    const nextIndex = (lightbox.imageIndex + 1) % total
    const prevIndex = (lightbox.imageIndex - 1 + total) % total
    const preload = (index: number) => {
      const image = new window.Image()
      image.src = activeProject.images[index]
    }
    preload(nextIndex)
    preload(prevIndex)
  }, [activeProject, lightbox])

  return (
    <section className="section" id="projects">
      {!all && (
        <div className="section-heading">
          <h2>PROJEKTY.</h2>
          <div
            className="shape-square"
            style={{
              position: 'absolute',
              right: '-40px',
              top: '-40px',
              zIndex: 1,
              transform: 'rotate(10deg)',
            }}
          ></div>
        </div>
      )}

      <div className={styles.projects}>
        {displayedProjects.map((project, index) => {
          const imageSrc = project.images[0]
          const totalImages = project.images.length
          return (
            <article className={styles.card} key={project.title}>
              <div className={styles.visual}>
                <button
                  type="button"
                  className={styles.imageButton}
                  onClick={() => openLightbox(index)}
                  aria-label={`Otwórz obraz projektu ${project.title}`}
                >
                  <NextImage
                    src={imageSrc}
                    alt={project.title}
                    width={960}
                    height={640}
                    quality={100}
                    loading="lazy"
                    sizes="(max-width: 768px) 92vw, (max-width: 1200px) 46vw, 540px"
                  />
                  <div className={styles.imageOverlay}>
                    <span className={styles.imageBadge}>GALERIA</span>
                    <span className={styles.imageCount}>{totalImages} ZDJĘCIA</span>
                  </div>
                </button>
              </div>

              <div className={styles.content}>
                <div className={styles.header}>
                  <h3 className={styles.title}>{project.title}</h3>
                  {project.featured && <div className={styles.featuredBadge}>WYRÓŻNIONE</div>}
                </div>

                <p className={styles.description}>{project.description}</p>

                <div className={styles.tags}>
                  {project.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>

                <div className={styles.links}>
                  {project.repoLink && (
                    <a
                      href={project.repoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${styles.link} ${styles.sourceLink}`}
                    >
                      <Github size={20} strokeWidth={2.5} /> KOD
                    </a>
                  )}

                  {project.downloadLink !== null ? (
                    project.downloadLink ? (
                      <a
                        href={project.downloadLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${styles.link} ${styles.getItLink}`}
                      >
                        <Download size={20} strokeWidth={2.5} /> POBIERZ
                      </a>
                    ) : (
                      <span
                        className={`${styles.link} ${styles.getItLink}`}
                        style={{ opacity: 0.5, cursor: 'default' }}
                      >
                        <Download size={20} strokeWidth={2.5} /> POBIERZ
                      </span>
                    )
                  ) : project.demoLink ? (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.link}
                    >
                      <ExternalLink size={20} strokeWidth={2.5} /> WERSJA LIVE
                    </a>
                  ) : null}

                  {!project.repoLink && !project.demoLink && !project.downloadLink && (
                    <span className={styles.link} style={{ opacity: 0.5, cursor: 'default' }}>
                      <Code size={20} strokeWidth={2.5} /> W TRAKCIE
                    </span>
                  )}
                </div>
              </div>
            </article>
          )
        })}
      </div>

      {!all ? (
        <div className={styles.viewAll}>
          <Link href="/projects" className={styles.viewAllLink}>
            ZOBACZ WSZYSTKIE PROJEKTY <ArrowRight size={20} strokeWidth={3} />
          </Link>
        </div>
      ) : (
        <div className={styles.viewAll}>
          <a
            href="https://github.com/nubet?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.viewAllLink}
          >
            PRZEGLĄDAJ GITHUB <ArrowRight size={20} strokeWidth={3} />
          </a>
        </div>
      )}

      {portalTarget &&
        activeProject &&
        lightbox &&
        createPortal(
          <div
            className={styles.lightbox}
            onClick={closeLightbox}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault()
                closeLightbox()
              }
            }}
            onWheel={(event) => event.preventDefault()}
            onTouchMove={(event) => event.preventDefault()}
            role="dialog"
            aria-modal="true"
            tabIndex={0}
          >
            <div className={styles.lightboxContent} onClick={(event) => event.stopPropagation()}>
              <button
                type="button"
                className={styles.lightboxClose}
                onClick={closeLightbox}
                aria-label="Zamknij obraz"
                ref={closeButtonRef}
              >
                <X size={32} strokeWidth={3} />
              </button>
              <div className={styles.lightboxImageContainer}>
                <NextImage
                  className={styles.lightboxImage}
                  src={activeProject.images[lightbox.imageIndex]}
                  alt={`${activeProject.title} zrzut ekranu`}
                  width={1440}
                  height={900}
                  quality={100}
                  sizes="100vw"
                  priority
                />
              </div>
              {activeProject.images.length > 1 && (
                <div className={styles.lightboxControls}>
                  <button
                    type="button"
                    className={styles.lightboxControl}
                    onClick={goToPrevious}
                    aria-label="Poprzednie zdjęcie"
                  >
                    <ChevronLeft size={32} strokeWidth={3} />
                  </button>
                  <span className={styles.lightboxIndicator}>
                    {lightbox.imageIndex + 1} / {activeProject.images.length}
                  </span>
                  <button
                    type="button"
                    className={styles.lightboxControl}
                    onClick={goToNext}
                    aria-label="Następne zdjęcie"
                  >
                    <ChevronRight size={32} strokeWidth={3} />
                  </button>
                </div>
              )}
            </div>
          </div>,
          portalTarget
        )}
    </section>
  )
}
