import type { Metadata } from 'next'
import type { DefaultSeoProps } from 'next-seo/pages'
import { siteConfig } from '@/shared/seo/site'

export const defaultSeo: DefaultSeoProps = {
  titleTemplate: '%s | Norbert Fila',
  defaultTitle: siteConfig.title,
  description: siteConfig.description,
  canonical: siteConfig.url,
  languageAlternates: [
    {
      hrefLang: 'pl-PL',
      href: siteConfig.url,
    },
  ],
  openGraph: {
    type: 'website',
    locale: siteConfig.locale,
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/og/og-img.webp`,
        width: 1200,
        height: 630,
        alt: siteConfig.title,
      },
    ],
  },
  twitter: {
    cardType: 'summary_large_image',
  },
  robotsProps: {
    maxImagePreview: 'large',
    maxSnippet: -1,
    maxVideoPreview: -1,
  },
}

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: defaultSeo.defaultTitle ?? siteConfig.title,
    template: defaultSeo.titleTemplate ?? '%s',
  },
  description: defaultSeo.description,
  alternates: {
    canonical: '/',
    languages: {
      pl: '/',
      'pl-PL': '/',
    },
  },
  openGraph: {
    type: 'website',
    locale: defaultSeo.openGraph?.locale,
    url: defaultSeo.openGraph?.url,
    title: defaultSeo.openGraph?.title,
    description: defaultSeo.openGraph?.description,
    siteName: defaultSeo.openGraph?.siteName,
    images: [
      {
        url: '/og/og-img.webp',
        width: 1200,
        height: 630,
        alt: siteConfig.title,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: defaultSeo.openGraph?.title ?? defaultSeo.defaultTitle,
    description: defaultSeo.description,
    images: ['/og/og-img.webp'],
  },
  robots: {
    index: !defaultSeo.noindex,
    follow: !defaultSeo.nofollow,
    googleBot: {
      index: !defaultSeo.noindex,
      follow: !defaultSeo.nofollow,
      'max-image-preview': defaultSeo.robotsProps?.maxImagePreview ?? 'large',
      'max-snippet': defaultSeo.robotsProps?.maxSnippet ?? -1,
      'max-video-preview': defaultSeo.robotsProps?.maxVideoPreview ?? -1,
    },
  },
}

export default defaultSeo
