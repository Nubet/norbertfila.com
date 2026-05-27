'use client'

import { useEffect } from 'react'
import { initCookieConsent } from './cookieConsent'

export function CookieConsentManager() {
  useEffect(() => {
    initCookieConsent()
  }, [])

  return null
}
