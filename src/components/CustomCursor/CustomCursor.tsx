'use client'

import React, { useEffect, useRef, useState } from 'react'
import styles from './CustomCursor.module.css'

const isElementDark = (el: HTMLElement | null): boolean => {
  if (!el || el === document.body || el === document.documentElement) return false

  const bg = window.getComputedStyle(el).backgroundColor

  const match = bg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/)
  if (match) {
    const r = parseInt(match[1])
    const g = parseInt(match[2])
    const b = parseInt(match[3])

    const alphaMatch = bg.match(/rgba?\([^,]+,[^,]+,[^,]+,\s*([0-9.]+)\)/)
    const a = alphaMatch ? parseFloat(alphaMatch[1]) : 1

    if (a > 0.5) {
      const luminance = (r * 299 + g * 587 + b * 114) / 1000
      if (luminance < 128) return true
      if (luminance >= 128) return false
    }
  }

  return isElementDark(el.parentElement)
}

export const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null)
  const circleRef = useRef<HTMLDivElement>(null)

  const mouse = useRef({ x: -100, y: -100 })
  const circle = useRef({ x: -100, y: -100 })

  const [isVisible, setIsVisible] = useState(false)
  const requestRef = useRef<number>(0)

  const isHovering = useRef(false)
  const isDarkSection = useRef(false)
  const lastTarget = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    if (isTouchDevice) return

    document.body.classList.add(styles.hideDefaultCursor)

    const onMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX
      mouse.current.y = e.clientY
      if (!isVisible) setIsVisible(true)

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`
      }

      const target = e.target as HTMLElement

      // Update interactive hover state
      const interactiveEl = target.closest('a, button, input, textarea, select, [role="button"]')
      if (interactiveEl && !isHovering.current) {
        isHovering.current = true
        circleRef.current?.classList.add(styles.hovered)
        dotRef.current?.classList.add(styles.hoveredDot)
      } else if (!interactiveEl && isHovering.current) {
        isHovering.current = false
        circleRef.current?.classList.remove(styles.hovered)
        dotRef.current?.classList.remove(styles.hoveredDot)
      }

      // Update dark background state only when target changes
      if (target !== lastTarget.current) {
        lastTarget.current = target
        const isDark = isElementDark(target)

        if (isDark && !isDarkSection.current) {
          isDarkSection.current = true
          circleRef.current?.classList.add(styles.onDark)
          dotRef.current?.classList.add(styles.onDarkDot)
        } else if (!isDark && isDarkSection.current) {
          isDarkSection.current = false
          circleRef.current?.classList.remove(styles.onDark)
          dotRef.current?.classList.remove(styles.onDarkDot)
        }
      }
    }

    const onMouseEnter = () => setIsVisible(true)
    const onMouseLeave = () => setIsVisible(false)

    window.addEventListener('mousemove', onMouseMove, { passive: true })
    document.addEventListener('mouseenter', onMouseEnter)
    document.addEventListener('mouseleave', onMouseLeave)

    const animate = () => {
      const ease = 0.15
      circle.current.x += (mouse.current.x - circle.current.x) * ease
      circle.current.y += (mouse.current.y - circle.current.y) * ease

      if (circleRef.current) {
        circleRef.current.style.transform = `translate3d(${circle.current.x}px, ${circle.current.y}px, 0) translate(-50%, -50%)`
      }

      requestRef.current = requestAnimationFrame(animate)
    }

    requestRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseenter', onMouseEnter)
      document.removeEventListener('mouseleave', onMouseLeave)
      cancelAnimationFrame(requestRef.current)
      document.body.classList.remove(styles.hideDefaultCursor)
    }
  }, [isVisible])

  return (
    <>
      <div
        ref={circleRef}
        className={`${styles.cursorCircle} ${isVisible ? styles.visible : ''}`}
      />
      <div ref={dotRef} className={`${styles.cursorDot} ${isVisible ? styles.visible : ''}`} />
    </>
  )
}
