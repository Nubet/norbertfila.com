export type CookieDefinition = {
  name: string
  domain: string
  description: string
  expiration: string
}

export const analyticsCookies: CookieDefinition[] = [
  {
    name: '_ga',
    domain: 'norbertfila.com',
    description: 'Google Analytics: rozróżnianie unikalnych użytkowników.',
    expiration: '2 lata',
  },
  {
    name: '_ga_*',
    domain: 'norbertfila.com',
    description: 'Google Analytics 4: utrzymanie stanu sesji i pomiar zdarzeń.',
    expiration: '2 lata',
  },
  {
    name: '_gid',
    domain: 'norbertfila.com',
    description: 'Google Analytics: rozróżnianie użytkowników w ciągu 24 godzin.',
    expiration: '24 godziny',
  },
]

export const strictlyNecessaryCookies: CookieDefinition[] = [
  {
    name: 'cc_cookie',
    domain: 'norbertfila.com',
    description: 'Zapamiętuje Twoje ustawienia zgody na ciasteczka.',
    expiration: '6 miesięcy',
  },
]
