export const GOOGLE_ANALYTICS_ID = 'G-85DP6VRY9K'
export const GOOGLE_ANALYTICS_SRC = `https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}`

export const GOOGLE_ANALYTICS_CONSENT_BOOTSTRAP_SCRIPT = `
window.dataLayer = window.dataLayer || [];
window.gtag = window.gtag || function gtag(){window.dataLayer.push(arguments);};
window.__nfAnalyticsConsentGranted = false;
window['ga-disable-${GOOGLE_ANALYTICS_ID}'] = true;
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
  __nfGaLoaded?: boolean
  __nfGaTrackingInstalled?: boolean
  __nfGaLastPath?: string
  __nfAnalyticsConsentGranted?: boolean
  [key: `ga-disable-${string}`]: boolean | undefined
}

function getAnalyticsWindow() {
  return window as unknown as AnalyticsWindow
}

function getCurrentPath() {
  return `${window.location.pathname}${window.location.search}`
}

function trackPageView() {
  const analyticsWindow = getAnalyticsWindow()
  const currentPath = getCurrentPath()

  if (
    !analyticsWindow.gtag ||
    !analyticsWindow.__nfAnalyticsConsentGranted ||
    analyticsWindow.__nfGaLastPath === currentPath
  ) {
    return
  }

  analyticsWindow.__nfGaLastPath = currentPath
  analyticsWindow.gtag('config', GOOGLE_ANALYTICS_ID, {
    page_path: currentPath,
    page_title: document.title,
    page_location: window.location.href,
  })
}

function installNavigationTracking() {
  const analyticsWindow = getAnalyticsWindow()

  if (analyticsWindow.__nfGaTrackingInstalled) {
    return
  }

  const pushState = window.history.pushState.bind(window.history)
  const replaceState = window.history.replaceState.bind(window.history)

  window.history.pushState = (...args) => {
    pushState(...args)
    queueMicrotask(trackPageView)
  }

  window.history.replaceState = (...args) => {
    replaceState(...args)
    queueMicrotask(trackPageView)
  }

  window.addEventListener('popstate', trackPageView)
  analyticsWindow.__nfGaTrackingInstalled = true
}

function loadAnalytics() {
  const analyticsWindow = getAnalyticsWindow()

  if (analyticsWindow.__nfGaLoaded) {
    analyticsWindow[`ga-disable-${GOOGLE_ANALYTICS_ID}`] = false
    trackPageView()
    return
  }

  analyticsWindow.dataLayer = analyticsWindow.dataLayer || []
  analyticsWindow.gtag =
    analyticsWindow.gtag ||
    function gtag(...args: GtagCommand) {
      analyticsWindow.dataLayer?.push(args)
    }

  analyticsWindow.gtag('js', new Date())
  analyticsWindow.__nfGaLoaded = true
  analyticsWindow[`ga-disable-${GOOGLE_ANALYTICS_ID}`] = false
  installNavigationTracking()
  trackPageView()
}

function disableAnalytics() {
  const analyticsWindow = getAnalyticsWindow()
  analyticsWindow.__nfAnalyticsConsentGranted = false
  analyticsWindow[`ga-disable-${GOOGLE_ANALYTICS_ID}`] = true
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

  loadAnalytics()

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

  analyticsWindow.gtag?.('event', eventName, params)
}
