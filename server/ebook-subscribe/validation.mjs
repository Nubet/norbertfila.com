const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function parsePayload(rawBody) {
  try {
    return JSON.parse(rawBody)
  } catch {
    return null
  }
}

export function validatePayload(payload) {
  if (!payload || typeof payload !== 'object') {
    return { ok: false, message: 'Niepoprawny format danych.' }
  }

  const email = String(payload.email ?? '')
    .trim()
    .toLowerCase()
  const name = String(payload.name ?? '').trim()
  const honeypot = String(payload.honeypot ?? '').trim()

  if (honeypot) {
    return { ok: false, message: 'Wykryto nieprawidłowe zgłoszenie.' }
  }

  if (!EMAIL_REGEX.test(email)) {
    return { ok: false, message: 'Podaj poprawny adres e-mail.' }
  }

  return {
    ok: true,
    value: {
      email,
      name,
    },
  }
}
