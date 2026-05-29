'use client'

import { showCookiePreferences } from '@/features/cookies/cookieConsent'
import styles from '@/views/LegalPages/LegalPages.module.css'

export function CookiePreferencesButton() {
  return (
    <button type="button" className={styles.manageButton} onClick={showCookiePreferences}>
      Zmien ustawienia cookies
    </button>
  )
}
