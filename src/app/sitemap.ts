import type { MetadataRoute } from 'next'
import { getBlogPosts } from '@/data/blog'
import { caseStudies } from '@/data/caseStudies'
import { localOfferPages } from '@/data/localOfferPages'
import { siteConfig, staticIndexedRoutes } from '@/shared/seo/site'

export const dynamic = 'force-static'

const routePriorities: Record<(typeof staticIndexedRoutes)[number], number> = {
  '/': 1,
  '/about': 0.7,
  '/portfolio': 0.9,
  '/kontakt': 0.9,
  '/blog': 0.85,
  '/privacy-policy': 0.5,
  '/cookie-policy': 0.5,
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const blogPosts = getBlogPosts()

  const staticPages = staticIndexedRoutes.map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: routePriorities[path],
  }))

  const portfolioPages = caseStudies.map((study) => ({
    url: `${siteConfig.url}/portfolio/${study.id}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const articlePages = blogPosts.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }))

  const localOfferRoutePages = localOfferPages.map((page) => ({
    url: `${siteConfig.url}/oferta/${page.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [...staticPages, ...portfolioPages, ...articlePages, ...localOfferRoutePages]
}
