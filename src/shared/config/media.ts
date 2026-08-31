const cdnBaseUrl = 'https://cdn.norbertfila.com'

export const media = {
  home: {
    hero: {
      mp4: `${cdnBaseUrl}/home/hero/background.mp4`,
      webm: `${cdnBaseUrl}/home/hero/background.webm`,
      poster: '/home/hero/poster.webp',
    },
    contact: {
      mp4: `${cdnBaseUrl}/home/contact/contact-background.mp4`,
      webm: `${cdnBaseUrl}/home/contact/contact-background.webm`,
      poster: '/home/contact/contact-poster.jpg',
    },
  },
} as const
