'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import styles from './NotFound.module.css'

export default function NotFound() {
  return (
    <div className={styles.wrapper}>
      <MessageDisplay />
      <CharactersAnimation />
      <CircleAnimation />
    </div>
  )
}

function MessageDisplay() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 1200)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={styles.messageOverlay}>
      <div className={`${styles.messageContent} ${isVisible ? styles.visible : ''}`}>
        <div className={styles.title}>Strona nie znaleziona</div>
        <div className={styles.errorCode}>404</div>
        <div className={styles.description}>
          Strona, której szukasz, mogła zostać usunięta, zmieniła nazwę lub jest tymczasowo
          niedostępna.
        </div>
        <div className={styles.actions}>
          <Link href="/" className={styles.homeButton}>
            Wróć na stronę główną
          </Link>
        </div>
      </div>
    </div>
  )
}

type StickFigure = {
  top?: string
  bottom?: string
  src: string
  transform?: string
  speedX: number
  speedRotation?: number
}

function CharactersAnimation() {
  const charactersRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const characters = charactersRef.current
    const stickFigures: StickFigure[] = [
      {
        top: '0%',
        src: 'https://raw.githubusercontent.com/RicardoYare/imagenes/9ef29f5bbe075b1d1230a996d87bca313b9b6a63/sticks/stick0.svg',
        transform: 'rotateZ(-90deg)',
        speedX: 1500,
      },
      {
        top: '10%',
        src: 'https://raw.githubusercontent.com/RicardoYare/imagenes/9ef29f5bbe075b1d1230a996d87bca313b9b6a63/sticks/stick1.svg',
        speedX: 3000,
        speedRotation: 2000,
      },
      {
        top: '20%',
        src: 'https://raw.githubusercontent.com/RicardoYare/imagenes/9ef29f5bbe075b1d1230a996d87bca313b9b6a63/sticks/stick2.svg',
        speedX: 5000,
        speedRotation: 1000,
      },
      {
        top: '25%',
        src: 'https://raw.githubusercontent.com/RicardoYare/imagenes/9ef29f5bbe075b1d1230a996d87bca313b9b6a63/sticks/stick0.svg',
        speedX: 2500,
        speedRotation: 1500,
      },
      {
        top: '35%',
        src: 'https://raw.githubusercontent.com/RicardoYare/imagenes/9ef29f5bbe075b1d1230a996d87bca313b9b6a63/sticks/stick0.svg',
        speedX: 2000,
        speedRotation: 300,
      },
    ]

    if (characters) {
      characters.innerHTML = ''
    }

    stickFigures.forEach((figure, index) => {
      const stick = document.createElement('img')
      stick.classList.add('characters')
      stick.style.position = 'absolute'
      stick.style.width = '18%'
      stick.style.height = '18%'

      if (figure.top) stick.style.top = figure.top
      if (figure.bottom) stick.style.bottom = figure.bottom

      stick.src = figure.src

      if (figure.transform) stick.style.transform = figure.transform

      characters?.appendChild(stick)

      stick.animate([{ left: '100%' }, { left: '-20%' }], {
        duration: figure.speedX,
        easing: 'linear',
        fill: 'forwards',
      })

      if (index === 0) return

      if (figure.speedRotation) {
        stick.animate([{ transform: 'rotate(0deg)' }, { transform: 'rotate(-360deg)' }], {
          duration: figure.speedRotation,
          iterations: Infinity,
          easing: 'linear',
        })
      }
    })

    return () => {
      if (characters) {
        characters.innerHTML = ''
      }
    }
  }, [])

  useEffect(() => {
    const handleResize = () => {
      if (charactersRef.current) {
        charactersRef.current.innerHTML = ''
        charactersRef.current.dispatchEvent(new Event('contentchanged'))
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return <div ref={charactersRef} className={styles.charactersContainer} />
}

interface Circulo {
  x: number
  y: number
  size: number
}

function CircleAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const requestIdRef = useRef<number>(0)
  const timerRef = useRef(0)
  const circulosRef = useRef<Circulo[]>([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const initArr = () => {
      circulosRef.current = []

      for (let index = 0; index < 300; index++) {
        const randomX =
          Math.floor(Math.random() * (canvas.width * 3 - canvas.width * 1.2 + 1)) +
          canvas.width * 1.2

        const randomY =
          Math.floor(Math.random() * (canvas.height - (canvas.height * -0.2 + 1))) +
          canvas.height * -0.2

        const size = canvas.width / 1000

        circulosRef.current.push({ x: randomX, y: randomY, size })
      }
    }

    const draw = () => {
      const context = canvas.getContext('2d')
      if (!context) return

      timerRef.current++
      context.setTransform(1, 0, 0, 1, 0, 0)

      const distanceX = canvas.width / 80
      const growthRate = canvas.width / 1000

      // Check computed style for theme color
      const computedStyle = getComputedStyle(document.documentElement)
      const particleColor = computedStyle.getPropertyValue('--color-accent').trim() || '#2f4f40'

      context.fillStyle = particleColor
      context.clearRect(0, 0, canvas.width, canvas.height)

      circulosRef.current.forEach((circulo) => {
        context.beginPath()

        if (timerRef.current < 65) {
          circulo.x = circulo.x - distanceX
          circulo.size = circulo.size + growthRate
        }

        if (timerRef.current > 65 && timerRef.current < 500) {
          circulo.x = circulo.x - distanceX * 0.02
          circulo.size = circulo.size + growthRate * 0.2
        }

        context.arc(circulo.x, circulo.y, circulo.size, 0, 360)
        context.fill()
      })

      if (timerRef.current > 500) {
        if (requestIdRef.current) {
          cancelAnimationFrame(requestIdRef.current)
        }
        return
      }

      requestIdRef.current = requestAnimationFrame(draw)
    }

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    timerRef.current = 0
    initArr()
    draw()

    const handleResize = () => {
      if (!canvas) return

      canvas.width = window.innerWidth
      canvas.height = window.innerHeight

      timerRef.current = 0
      if (requestIdRef.current) {
        cancelAnimationFrame(requestIdRef.current)
      }

      const context = canvas.getContext('2d')
      if (context) {
        context.reset()
      }

      initArr()
      draw()
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      if (requestIdRef.current) {
        cancelAnimationFrame(requestIdRef.current)
      }
    }
  }, [])

  return <canvas ref={canvasRef} className={styles.canvas} />
}
