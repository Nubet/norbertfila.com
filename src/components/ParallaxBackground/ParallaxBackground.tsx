'use client'

import React, { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
import styles from './ParallaxBackground.module.css'

interface ParallaxBackgroundProps {
  videoSrc: string
  webmSrc?: string
  posterSrc: string
  overlayVariant?: 'minimal' | 'studio' | 'editorial' | 'none'
  disableVideoOnMobile?: boolean
  children?: React.ReactNode
  className?: string
}

export function ParallaxBackground({
  videoSrc,
  webmSrc,
  posterSrc,
  overlayVariant = 'minimal',
  disableVideoOnMobile = false,
  children,
  className = '',
}: ParallaxBackgroundProps) {
  const mediaRef = useRef<HTMLDivElement>(null)
  const [shouldLoadVideo, setShouldLoadVideo] = useState(!disableVideoOnMobile)

  useEffect(() => {
    if (disableVideoOnMobile) {
      const checkScreenSize = () => {
        if (window.innerWidth >= 768) {
          setShouldLoadVideo(true)
        }
      }
      checkScreenSize()
      window.addEventListener('resize', checkScreenSize)
      return () => window.removeEventListener('resize', checkScreenSize)
    }
  }, [disableVideoOnMobile])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!mediaRef.current) return
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window

      const moveX = (clientX / innerWidth - 0.5) * 1.5
      const moveY = (clientY / innerHeight - 0.5) * 1.5

      mediaRef.current.style.transform = `translate(${moveX}%, ${moveY}%)`
    }

    const handleMouseLeave = () => {
      if (!mediaRef.current) return
      mediaRef.current.style.transform = `translate(0%, 0%)`
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  const overlayClass =
    overlayVariant === 'none'
      ? ''
      : overlayVariant === 'studio'
        ? styles.overlayStudio
        : overlayVariant === 'editorial'
          ? styles.overlayEditorial
          : styles.overlayMinimal

  return (
    <div className={`${styles.container} ${className}`}>
      <div className={styles.mediaContainer} aria-hidden="true" ref={mediaRef}>
        <Image src={posterSrc} alt="" fill priority className={styles.poster} sizes="100vw" />
        {shouldLoadVideo && (
          <video
            className={styles.video}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={posterSrc}
          >
            {webmSrc && <source src={webmSrc} type="video/webm" />}
            <source src={videoSrc} type="video/mp4" />
          </video>
        )}
        {overlayVariant !== 'none' && <div className={`${styles.overlay} ${overlayClass}`} />}
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  )
}
