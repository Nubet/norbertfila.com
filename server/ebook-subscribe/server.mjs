import http from 'node:http'
import { getConfig } from './config.mjs'
import { parsePayload, validatePayload } from './validation.mjs'
import { checkRateLimit } from './rate-limit.mjs'
import { addSubscriberToMailerLite } from './mailerlite.mjs'

const config = getConfig()

function json(res, statusCode, body) {
  res.writeHead(statusCode, {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': config.allowedOrigin,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Accept',
    Vary: 'Origin',
  })
  res.end(JSON.stringify(body))
}

function methodNotAllowed(res) {
  res.setHeader('Allow', 'POST, OPTIONS')
  json(res, 405, { message: 'Method Not Allowed' })
}

function getIp(req) {
  const forwarded = req.headers['x-forwarded-for']
  if (typeof forwarded === 'string' && forwarded.length > 0) {
    return forwarded.split(',')[0].trim()
  }
  return req.socket.remoteAddress ?? 'unknown'
}

const server = http.createServer((req, res) => {
  if (req.method === 'OPTIONS') {
    json(res, 204, {})
    return
  }

  if (req.url !== '/api/ebook-subscribe') {
    json(res, 404, { message: 'Not found' })
    return
  }

  if (req.method !== 'POST') {
    methodNotAllowed(res)
    return
  }

  let body = ''

  req.on('data', (chunk) => {
    body += chunk
    if (body.length > 50_000) {
      req.destroy()
    }
  })

  req.on('end', async () => {
    try {
      const payload = parsePayload(body)
      const validated = validatePayload(payload)

      if (!validated.ok) {
        json(res, 400, { message: validated.message })
        return
      }

      const ip = getIp(req)
      const rateLimit = checkRateLimit({ ip, email: validated.value.email })

      if (!rateLimit.ok) {
        json(res, 429, { message: rateLimit.message })
        return
      }

      const result = await addSubscriberToMailerLite({
        apiKey: config.apiKey,
        groupId: config.groupId,
        email: validated.value.email,
        name: validated.value.name,
      })

      if (!result.ok) {
        json(res, 502, {
          message:
            'Wystąpił problem z zapisem. Spróbuj ponownie za chwilę albo napisz na kontakt@norbertfila.com.',
        })
        return
      }

      json(res, 200, {
        message: 'Zapisano poprawnie. Sprawdź skrzynkę e-mail i odbierz e-book.',
      })
    } catch {
      json(res, 500, {
        message: 'Wystąpił błąd serwera. Spróbuj ponownie za chwilę.',
      })
    }
  })

  req.on('error', () => {
    if (!res.headersSent) {
      json(res, 400, { message: 'Nie udało się odczytać danych żądania.' })
    }
  })
})

server.listen(config.port, () => {
  process.stdout.write(`Ebook subscribe API listening on :${config.port}\n`)
})
