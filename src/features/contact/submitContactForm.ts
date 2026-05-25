import { sendContactForm } from './contactGateway'
import { enforceContactRateLimit } from './contactRateLimiter'
import { validateContactPayload } from './contactValidation'
import { ContactFormError } from './contactErrors'

export type ContactFormPayload = {
  projectType: string
  budget: string
  materials: string
  pagesCount: string
  description: string
  fullName: string
  email: string
  phone: string
  honeypot: string
}

export async function submitContactForm(payload: ContactFormPayload) {
  validateContactPayload(payload)
  enforceContactRateLimit()
  await sendContactForm(payload)
}

export { ContactFormError }
