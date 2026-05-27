type RuntimeEnv = {
  contactFormEndpoint: string
  nodeEnv: 'development' | 'test' | 'production'
}

function getNodeEnv(): RuntimeEnv['nodeEnv'] {
  const raw = process.env.NODE_ENV
  if (raw === 'development' || raw === 'test' || raw === 'production') {
    return raw
  }

  return 'development'
}

function getClientString(name: string): string {
  const value = process.env[name]
  if (!value || value.trim().length === 0) {
    throw new Error(`Missing required environment variable: ${name}`)
  }

  return value
}

export function getRuntimeEnv(): RuntimeEnv {
  return {
    contactFormEndpoint: getClientString('NEXT_PUBLIC_CONTACT_FORM_ENDPOINT'),
    nodeEnv: getNodeEnv(),
  }
}
