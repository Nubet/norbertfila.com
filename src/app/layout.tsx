import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { Archivo, Outfit, Space_Grotesk } from 'next/font/google'
import { Footer } from '@/components/Footer/Footer'
import { CookieConsentManager } from '@/features/cookies/CookieConsentManager'
import { siteConfig } from '@/shared/seo/site'
import '../styles/variables.css'
import '../styles/global.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  variable: '--font-space-grotesk',
})

const archivo = Archivo({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  variable: '--font-archivo',
})

const outfit = Outfit({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  variable: '--font-outfit',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: '%s | Norbert Fila',
  },
  description: siteConfig.description,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: siteConfig.locale,
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: '/profile/avatar.webp',
        width: 1200,
        height: 630,
        alt: 'Norbert Fila',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: ['/profile/avatar.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
}

type RootLayoutProps = {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pl" className={`${spaceGrotesk.variable} ${archivo.variable} ${outfit.variable}`}>
      <body>
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <main style={{ flex: 1 }}>{children}</main>
          <Footer />
          <CookieConsentManager />
        </div>
      </body>
    </html>
  )
}
