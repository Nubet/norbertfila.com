const MAILERLITE_URL = 'https://connect.mailerlite.com/api/subscribers'
const REQUEST_TIMEOUT_MS = 7000

export async function addSubscriberToMailerLite({ apiKey, groupId, email, name }) {
  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS)

  try {
    const response = await fetch(MAILERLITE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        email,
        fields: name ? { name } : {},
        groups: [groupId],
        status: 'active',
      }),
      signal: controller.signal,
    })

    if (!response.ok) {
      const data = await response.json().catch(() => null)
      const message = data?.message ?? 'Nie udało się zapisać do listy mailingowej.'
      return { ok: false, message }
    }

    return { ok: true }
  } catch (error) {
    if (error instanceof Error && error.name === 'AbortError') {
      return {
        ok: false,
        message: 'Przekroczono czas oczekiwania na odpowiedź. Spróbuj ponownie za chwilę.',
      }
    }

    return {
      ok: false,
      message: 'Wystąpił błąd połączenia z usługą mailingową. Spróbuj ponownie.',
    }
  } finally {
    clearTimeout(timeout)
  }
}
