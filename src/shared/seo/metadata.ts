import type { Metadata } from 'next'
import { siteConfig } from '@/shared/seo/site'

type PageMetadataInput = {
  title: string
  description: string
  path: string
  keywords?: string[]
}

export function createPageMetadata({
  title,
  description,
  path,
  keywords,
}: PageMetadataInput): Metadata {
  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: 'article',
      locale: siteConfig.locale,
      url: `${siteConfig.url}${path}`,
      title,
      description,
      siteName: siteConfig.name,
      images: [
        {
          url: '/og/og-img.webp',
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/og/og-img.webp'],
    },
  }
}
