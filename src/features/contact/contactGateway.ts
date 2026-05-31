import { httpClient, mapHttpError } from '@/infrastructure/http/httpClient'
import { getRuntimeEnv } from '@/shared/config/env'
import { ContactFormError } from './contactErrors'
import type { ContactFormPayload } from './submitContactForm'

function getContactEndpoint() {
  const endpoint = getRuntimeEnv().contactFormEndpoint

  if (!endpoint || typeof endpoint !== 'string') {
    throw new ContactFormError(
      'Formularz jest chwilowo niedostępny. Spróbuj ponownie za kilka minut.',
      'MISSING_ENDPOINT'
    )
  }

  return endpoint
}

export async function sendContactForm(payload: ContactFormPayload) {
  const endpoint = getContactEndpoint()

  try {
    await httpClient.post(endpoint, {
      'rodzaj-projektu': payload.projectType,
      budzet: payload.budget,
      materialy: payload.materials,
      'liczba-podstron': payload.pagesCount,
      opis: payload.description,
      'imie-nazwisko': payload.fullName,
      email: payload.email,
      telefon: payload.phone,
      _subject: `Nowe zapytanie ze strony od ${payload.fullName}`,
    })
  } catch (error) {
    const httpError = mapHttpError(error)

    throw new ContactFormError(
      'Nie udało się wysłać formularza. Napisz bezpośrednio na kontakt@norbertfila.com.',
      httpError.code,
      httpError
    )
  }
}
