import type { MetadataRoute } from 'next'
import { indexedRoutes, siteConfig } from '@/shared/seo/site'

const routePriorities: Record<(typeof indexedRoutes)[number], number> = {
  '/': 1,
  '/portfolio': 0.9,
  '/contact': 0.9,
  '/projects': 0.8,
  '/privacy-policy': 0.5,
  '/cookie-policy': 0.5,
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  return indexedRoutes.map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: routePriorities[path],
  }))
}
