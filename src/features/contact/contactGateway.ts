import { httpClient, mapHttpError } from '../../infrastructure/http/httpClient'
import { ContactFormError } from './contactErrors'
import type { ContactFormPayload } from './submitContactForm'

function getContactEndpoint() {
  const endpoint = import.meta.env.VITE_CONTACT_FORM_ENDPOINT

  if (!endpoint || typeof endpoint !== 'string') {
    throw new ContactFormError(
      'Formularz jest chwilowo niedostępny. Spróbuj ponownie za kilka minut.',
      'MISSING_ENDPOINT'
    )
  }

  return endpoint
}

export async function sendContactForm(payload: ContactFormPayload) {
  try {
    await httpClient.post(getContactEndpoint(), {
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
      'Nie udało się wysłać formularza. Napisz bezpośrednio na kontatk@norbertfila.com.',
      httpError.code,
      httpError
    )
  }
}
