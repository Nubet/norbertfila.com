import { Outfit, Space_Grotesk } from 'next/font/google'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin', 'latin-ext'],
  weight: 'variable',
  display: 'swap',
  variable: '--font-space-grotesk',
})

const outfit = Outfit({
  subsets: ['latin', 'latin-ext'],
  weight: 'variable',
  display: 'swap',
  variable: '--font-outfit',
})

export { spaceGrotesk, outfit }
