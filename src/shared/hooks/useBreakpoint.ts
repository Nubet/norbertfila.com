'use client'

import { useSyncExternalStore } from 'react'

const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
} as const

type BreakpointKey = keyof typeof breakpoints
type BreakpointResult<T extends BreakpointKey> = Record<`is${Capitalize<T>}`, boolean>

const getMediaQuery = (breakpoint: BreakpointKey) =>
  `(max-width: ${breakpoints[breakpoint] - 0.02}px)`

export function useBreakpoint<T extends BreakpointKey>(breakpoint: T): BreakpointResult<T> {
  const subscribe = (onStoreChange: () => void) => {
    const mediaQuery = window.matchMedia(getMediaQuery(breakpoint))

    mediaQuery.addEventListener('change', onStoreChange)

    return () => mediaQuery.removeEventListener('change', onStoreChange)
  }

  const getSnapshot = () => window.matchMedia(getMediaQuery(breakpoint)).matches

  const isBreakpoint = useSyncExternalStore(subscribe, getSnapshot, () => false)

  return {
    [`is${breakpoint.charAt(0).toUpperCase()}${breakpoint.slice(1)}`]: isBreakpoint,
  } as BreakpointResult<T>
}
