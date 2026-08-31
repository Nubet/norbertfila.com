'use client'
import { useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'
import { useDisableAnimationOnMobile } from '@/components/DisableAnimationOnMobile/DisableAnimationOnMobile'
import styles from './ScrollReveal.module.css'

interface ScrollRevealProps {
  children: ReactNode
  delay?: number
  className?: string
  disabled?: boolean
}

export function ScrollReveal({
  children,
  delay = 0,
  className = '',
  disabled = false,
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false)
  const domRef = useRef<HTMLDivElement>(null)
  const disableAnimationOnMobile = useDisableAnimationOnMobile()
  const isDisabled = disabled || disableAnimationOnMobile
  const isRevealed = isDisabled || isVisible

  useEffect(() => {
    if (isDisabled) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            if (domRef.current) {
              observer.unobserve(domRef.current)
            }
          }
        })
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    )

    const { current } = domRef
    if (current) {
      observer.observe(current)
    }

    return () => {
      if (current) observer.unobserve(current)
    }
  }, [isDisabled])

  return (
    <div
      ref={domRef}
      className={`${styles.reveal} ${isRevealed ? styles.visible : ''} ${className}`}
      style={isDisabled ? undefined : { transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
