import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import '../styles/variables.css'
import '../styles/global.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://norbertfila.com'),
  title: {
    default: 'Norbert Fila - Web Developer dla Biznesu',
    template: '%s | Norbert Fila',
  },
  description:
    'Projektuje i koduje od podstaw szybkie strony internetowe oraz landing page nastawione na konwersje.',
  robots: {
    index: true,
    follow: true,
  },
}

type RootLayoutProps = {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pl">
      <body>{children}</body>
    </html>
  )
}
