'use client'

import React, { useRef, useEffect } from 'react'
import Image from 'next/image'
import styles from './ParallaxBackground.module.css'

interface ParallaxBackgroundProps {
  videoSrc: string
  webmSrc?: string
  posterSrc: string
  overlayVariant?: 'minimal' | 'studio' | 'editorial' | 'none'
  children?: React.ReactNode
  className?: string
}

export function ParallaxBackground({
  videoSrc,
  webmSrc,
  posterSrc,
  overlayVariant = 'minimal',
  children,
  className = '',
}: ParallaxBackgroundProps) {
  const mediaRef = useRef<HTMLDivElement>(null)

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
        <Image
          src={posterSrc}
          alt=""
          fill
          priority
          className={styles.poster}
          sizes="100vw"
        />
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
        {overlayVariant !== 'none' && (
          <div className={`${styles.overlay} ${overlayClass}`} />
        )}
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  )
}
