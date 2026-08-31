'use client'

import { createContext, useContext } from 'react'
import type { ReactNode } from 'react'
import { useBreakpoint } from '@/shared/hooks/useBreakpoint'
import styles from './DisableAnimationOnMobile.module.css'

type DisableAnimationOnMobileProps = {
  children: ReactNode
}

const DisableAnimationOnMobileContext = createContext(false)
const disableAnimationOnMobileClassName = 'disable-animation-on-mobile'

export function DisableAnimationOnMobile({ children }: DisableAnimationOnMobileProps) {
  const { isMd: isMobile } = useBreakpoint('md')

  return (
    <DisableAnimationOnMobileContext.Provider value={isMobile}>
      <div className={`${disableAnimationOnMobileClassName} ${styles.disableAnimationOnMobile}`}>
        {children}
      </div>
    </DisableAnimationOnMobileContext.Provider>
  )
}

export function useDisableAnimationOnMobile() {
  return useContext(DisableAnimationOnMobileContext)
}
