const WINDOW_MS = 15 * 60 * 1000
const MAX_REQUESTS_PER_IP = 20
const MAX_REQUESTS_PER_EMAIL = 3

const byIp = new Map()
const byEmail = new Map()

function prune(now, map) {
  for (const [key, timestamps] of map.entries()) {
    const valid = timestamps.filter((value) => now - value < WINDOW_MS)
    if (valid.length === 0) {
      map.delete(key)
      continue
    }
    map.set(key, valid)
  }
}

function takeSlot(map, key, max, now) {
  const current = map.get(key) ?? []
  const valid = current.filter((value) => now - value < WINDOW_MS)
  if (valid.length >= max) {
    return false
  }
  valid.push(now)
  map.set(key, valid)
  return true
}

export function checkRateLimit({ ip, email }) {
  const now = Date.now()
  prune(now, byIp)
  prune(now, byEmail)

  if (!takeSlot(byIp, ip, MAX_REQUESTS_PER_IP, now)) {
    return { ok: false, message: 'Za dużo prób z tego adresu IP. Spróbuj ponownie za kilka minut.' }
  }

  if (!takeSlot(byEmail, email, MAX_REQUESTS_PER_EMAIL, now)) {
    return {
      ok: false,
      message: 'Ten adres e-mail był już niedawno użyty. Spróbuj ponownie później.',
    }
  }

  return { ok: true }
}
