export function getConfig() {
  const apiKey = process.env.MAILERLITE_API_KEY
  const groupId = process.env.MAILERLITE_GROUP_ID
  const allowedOrigin = process.env.ALLOWED_ORIGIN ?? 'https://norbertfila.com'
  const port = Number(process.env.PORT ?? 8787)

  if (!apiKey) {
    throw new Error('Brak MAILERLITE_API_KEY')
  }

  if (!groupId) {
    throw new Error('Brak MAILERLITE_GROUP_ID')
  }

  return {
    apiKey,
    groupId,
    allowedOrigin,
    port,
  }
}
