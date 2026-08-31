import { sendGAEvent } from '@next/third-parties/google'

export const GOOGLE_ANALYTICS_ID = 'G-85DP6VRY9K'

export const GOOGLE_ANALYTICS_CONSENT_BOOTSTRAP_SCRIPT = `
window.dataLayer = window.dataLayer || [];
window.gtag = window.gtag || function gtag(){window.dataLayer.push(arguments);};
window.__nfAnalyticsConsentGranted = false;
window.gtag('consent', 'default', {
  analytics_storage: 'denied',
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  wait_for_update: 500
});
`

type GtagCommand =
  | ['js', Date]
  | ['config', string, Record<string, unknown>?]
  | ['consent', 'default', Record<string, 'granted' | 'denied' | number>]
  | ['consent', 'update', Record<string, 'granted' | 'denied'>]
  | ['event', string, Record<string, unknown>?]

type AnalyticsWindow = Window & {
  dataLayer?: unknown[]
  gtag?: (...args: GtagCommand) => void
  __nfAnalyticsConsentGranted?: boolean
}

function getAnalyticsWindow() {
  return window as unknown as AnalyticsWindow
}

function disableAnalytics() {
  const analyticsWindow = getAnalyticsWindow()
  analyticsWindow.__nfAnalyticsConsentGranted = false
  analyticsWindow.gtag?.('consent', 'update', {
    analytics_storage: 'denied',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
  })
}

export function updateAnalyticsConsent(granted: boolean) {
  if (typeof window === 'undefined') {
    return
  }

  getAnalyticsWindow().__nfAnalyticsConsentGranted = granted

  if (!granted) {
    disableAnalytics()
    return
  }

  getAnalyticsWindow().gtag?.('consent', 'update', {
    analytics_storage: 'granted',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
  })
}

export function trackAnalyticsEvent(eventName: string, params: Record<string, unknown> = {}) {
  if (typeof window === 'undefined') {
    return
  }

  const analyticsWindow = getAnalyticsWindow()

  if (!analyticsWindow.__nfAnalyticsConsentGranted) {
    return
  }

  sendGAEvent('event', eventName, params)
}
