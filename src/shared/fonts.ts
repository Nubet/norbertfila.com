import localFont from 'next/font/local'
import { Montserrat, Great_Vibes } from 'next/font/google'

const theSeasons = localFont({
  src: [
    {
      path: './assets/fonts/the-seasons/The Seasons Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './assets/fonts/the-seasons/The Seasons Light Italic.ttf',
      weight: '300',
      style: 'italic',
    },
    {
      path: './assets/fonts/the-seasons/The Seasons Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './assets/fonts/the-seasons/The Seasons Italic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: './assets/fonts/the-seasons/The Seasons Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './assets/fonts/the-seasons/The Seasons Bold Italic.ttf',
      weight: '700',
      style: 'italic',
    },
  ],
  display: 'swap',
  variable: '--font-the-seasons',
})

const montserrat = Montserrat({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500', '600'],
  display: 'swap',
  variable: '--font-montserrat',
})

const greatVibes = Great_Vibes({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
  variable: '--font-great-vibes',
})

export { theSeasons, montserrat, greatVibes }
