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
  const videoRef = useRef<HTMLVideoElement>(null)
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false)
  const [readyVideoKey, setReadyVideoKey] = useState<string | null>(null)
  const preferredVideoSrc = webmSrc ?? videoSrc
  const preferredVideoType = webmSrc ? 'video/webm' : 'video/mp4'
  const videoKey = shouldLoadVideo ? preferredVideoSrc : null
  const isVideoReady = videoKey !== null && readyVideoKey === videoKey

  const revealVideo = () => {
    const video = videoRef.current

    if (!video) {
      return
    }

    video.currentTime = 0
    void video.play().catch(() => undefined)
    setReadyVideoKey(videoKey)
  }

  const syncVideoReadiness = () => {
    const video = videoRef.current

    if (!video || video.readyState < HTMLMediaElement.HAVE_ENOUGH_DATA) {
      return
    }

    revealVideo()
  }

  useEffect(() => {
    const desktopMediaQuery = window.matchMedia('(min-width: 768px)')

    const syncShouldLoadVideo = () => {
      if (document.readyState !== 'complete') {
        return
      }

      setShouldLoadVideo(!disableVideoOnMobile || desktopMediaQuery.matches)
    }

    syncShouldLoadVideo()

    const handleLoad = () => syncShouldLoadVideo()
    const handleViewportChange = () => syncShouldLoadVideo()

    window.addEventListener('load', handleLoad)
    desktopMediaQuery.addEventListener('change', handleViewportChange)

    return () => {
      window.removeEventListener('load', handleLoad)
      desktopMediaQuery.removeEventListener('change', handleViewportChange)
    }
  }, [disableVideoOnMobile])

  useEffect(() => {
    if (!videoKey) {
      setReadyVideoKey(null)
    }
  }, [videoKey])

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
          style={{ display: isVideoReady ? 'none' : undefined }}
          sizes="100vw"
        />
        {shouldLoadVideo && (
          <video
            key={videoKey ?? 'poster-only'}
            ref={videoRef}
            className={styles.video}
            style={{ display: isVideoReady ? 'block' : 'none' }}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={posterSrc}
            onLoadedMetadata={syncVideoReadiness}
            onCanPlayThrough={syncVideoReadiness}
            onProgress={syncVideoReadiness}
            onPlaying={revealVideo}
          >
            <source src={preferredVideoSrc} type={preferredVideoType} />
          </video>
        )}
        {overlayVariant !== 'none' && <div className={`${styles.overlay} ${overlayClass}`} />}
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  )
}
