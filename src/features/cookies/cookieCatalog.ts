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
  {
    name: '_clck',
    domain: 'norbertfila.com',
    description: 'Microsoft Clarity: zapisuje identyfikator użytkownika i preferencje analityczne.',
    expiration: '1 rok',
  },
  {
    name: '_clsk',
    domain: 'norbertfila.com',
    description:
      'Microsoft Clarity: łączy odsłony w jedną sesję i wspiera mapy kliknięć oraz nagrania.',
    expiration: '1 dzień',
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
