import axios, { AxiosError } from 'axios'
import { AppError } from '@/shared/errors/AppError'

export class HttpError extends AppError {
  readonly status?: number

  constructor(message: string, code: string, status?: number, details?: unknown) {
    super(message, code, details)
    this.name = 'HttpError'
    this.status = status
  }
}

export const httpClient = axios.create({
  timeout: 12000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export function mapHttpError(error: unknown): HttpError {
  if (error instanceof HttpError) {
    return error
  }

  if (axios.isAxiosError(error)) {
    const axiosError = error as AxiosError
    const status = axiosError.response?.status

    if (status === 429) {
      return new HttpError('Zbyt wiele prób. Spróbuj ponownie za chwilę.', 'RATE_LIMITED', status)
    }

    if (status && status >= 500) {
      return new HttpError(
        'Problem po stronie serwera. Spróbuj ponownie za chwilę.',
        'SERVER_ERROR',
        status
      )
    }

    if (axiosError.code === 'ECONNABORTED') {
      return new HttpError(
        'Przekroczono czas oczekiwania. Sprawdź połączenie i spróbuj ponownie.',
        'TIMEOUT'
      )
    }

    return new HttpError(
      'Nie udało się połączyć z formularzem.',
      'NETWORK_ERROR',
      status,
      axiosError
    )
  }

  return new HttpError(
    'Wystąpił nieoczekiwany problem z połączeniem.',
    'UNKNOWN_HTTP_ERROR',
    undefined,
    error
  )
}
