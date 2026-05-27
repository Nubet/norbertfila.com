import axios from 'axios'
import { httpClient, mapHttpError } from '@/infrastructure/http/httpClient'

type EbookSubscribePayload = {
  email: string
  name?: string
  honeypot?: string
}

export class EbookSubscribeError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'EbookSubscribeError'
  }
}

function validateEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function subscribeToEbook(payload: EbookSubscribePayload) {
  const email = payload.email.trim().toLowerCase()

  if (!validateEmail(email)) {
    throw new EbookSubscribeError('Podaj poprawny adres e-mail.')
  }

  try {
    await httpClient.post('/api/ebook-subscribe', {
      email,
      name: payload.name?.trim() ?? '',
      honeypot: payload.honeypot ?? '',
      source: 'homepage-ebook',
    })
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const apiMessage = error.response?.data?.message
      if (typeof apiMessage === 'string' && apiMessage.trim().length > 0) {
        throw new EbookSubscribeError(apiMessage)
      }
    }

    const mapped = mapHttpError(error)
    throw new EbookSubscribeError(
      mapped.message ||
        'Nie udało się zapisać. Spróbuj ponownie za chwilę albo napisz na kontakt@norbertfila.com.'
    )
  }
}
