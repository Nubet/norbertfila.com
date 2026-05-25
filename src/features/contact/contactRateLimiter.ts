import { ContactFormError } from './contactErrors'

const RATE_LIMIT_STORAGE_KEY = 'contact-form-rate-limit-v1'
const RATE_LIMIT_MAX_SUBMISSIONS = 3
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000

export function enforceContactRateLimit() {
  const now = Date.now()
  const raw = window.localStorage.getItem(RATE_LIMIT_STORAGE_KEY)

  if (!raw) {
    window.localStorage.setItem(RATE_LIMIT_STORAGE_KEY, JSON.stringify([now]))
    return
  }

  let entries: number[] = []

  try {
    const parsed = JSON.parse(raw)
    if (Array.isArray(parsed)) {
      entries = parsed.filter((value) => typeof value === 'number')
    }
  } catch {
    entries = []
  }

  const validEntries = entries.filter((timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS)

  if (validEntries.length >= RATE_LIMIT_MAX_SUBMISSIONS) {
    throw new ContactFormError('Wysłano zbyt wiele zgłoszeń. Spróbuj ponownie za około 10 minut.')
  }

  validEntries.push(now)
  window.localStorage.setItem(RATE_LIMIT_STORAGE_KEY, JSON.stringify(validEntries))
}
