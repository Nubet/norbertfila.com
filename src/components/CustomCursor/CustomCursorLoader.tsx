'use client'

import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'

const CustomCursor = dynamic(() => import('./CustomCursor').then((module) => module.CustomCursor), {
  ssr: false,
})

export function CustomCursorLoader() {
  const [shouldRenderCursor, setShouldRenderCursor] = useState(false)

  useEffect(() => {
    const desktopCursorMediaQuery = window.matchMedia(
      '(min-width: 1024px) and (hover: hover) and (pointer: fine)'
    )

    const syncShouldRenderCursor = () => {
      setShouldRenderCursor(desktopCursorMediaQuery.matches)
    }

    syncShouldRenderCursor()
    desktopCursorMediaQuery.addEventListener('change', syncShouldRenderCursor)

    return () => {
      desktopCursorMediaQuery.removeEventListener('change', syncShouldRenderCursor)
    }
  }, [])

  if (!shouldRenderCursor) {
    return null
  }

  return <CustomCursor />
}
