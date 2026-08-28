const CLARITY_ID = 'y9dp0diclu'
const CLARITY_SRC = `https://www.clarity.ms/tag/${CLARITY_ID}`

type ClarityWindow = Window & {
  clarity?: ((...args: unknown[]) => void) & { q?: unknown[] }
  __nfClarityLoaded?: boolean
}

function getClarityWindow() {
  return window as unknown as ClarityWindow
}

function loadClarity() {
  const clarityWindow = getClarityWindow()

  if (clarityWindow.__nfClarityLoaded) {
    return
  }

  clarityWindow.clarity =
    clarityWindow.clarity ||
    function clarity(...args: unknown[]) {
      ;(clarityWindow.clarity!.q = clarityWindow.clarity!.q || []).push(args)
    }

  const script = document.createElement('script')
  script.async = true
  script.src = CLARITY_SRC
  document.head.appendChild(script)

  clarityWindow.__nfClarityLoaded = true
}

export function updateClarityConsent(granted: boolean) {
  if (typeof window === 'undefined' || !granted) {
    return
  }

  loadClarity()
}
