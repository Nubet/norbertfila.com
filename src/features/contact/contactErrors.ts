import { AppError } from '@/shared/errors/AppError'

export class ContactFormError extends AppError {
  constructor(message: string, code = 'CONTACT_FORM_ERROR', details?: unknown) {
    super(message, code, details)
    this.name = 'ContactFormError'
  }
}
