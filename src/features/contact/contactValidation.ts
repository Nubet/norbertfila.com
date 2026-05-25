import { ContactFormError } from './contactErrors'
import type { ContactFormPayload } from './submitContactForm'

export function validateContactPayload(payload: ContactFormPayload) {
  if (payload.honeypot.trim().length > 0) {
    throw new ContactFormError(
      'Nie udało się wysłać formularza. Odśwież stronę i spróbuj ponownie.',
      'SPAM_DETECTED'
    )
  }

  if (!payload.projectType) {
    throw new ContactFormError('Wybierz rodzaj projektu.', 'MISSING_PROJECT_TYPE')
  }

  if (!payload.budget) {
    throw new ContactFormError('Wybierz planowany budżet.', 'MISSING_BUDGET')
  }

  if (!payload.materials) {
    throw new ContactFormError('Wybierz, czy masz materiały.', 'MISSING_MATERIALS')
  }

  if (!payload.pagesCount) {
    throw new ContactFormError('Wybierz liczbę podstron.', 'MISSING_PAGES_COUNT')
  }

  if (!payload.description || payload.description.trim().length < 25) {
    throw new ContactFormError('Opisz projekt w minimum 25 znakach.', 'DESCRIPTION_TOO_SHORT')
  }

  if (!payload.fullName || payload.fullName.trim().length < 3) {
    throw new ContactFormError('Podaj imię i nazwisko.', 'INVALID_FULL_NAME')
  }

  if (!payload.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
    throw new ContactFormError('Podaj poprawny adres e-mail.', 'INVALID_EMAIL')
  }
}
