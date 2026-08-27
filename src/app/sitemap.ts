import type { MetadataRoute } from 'next'
import { blogPosts } from '@/data/blogPosts'
import { siteConfig, staticIndexedRoutes } from '@/shared/seo/site'

const routePriorities: Record<(typeof staticIndexedRoutes)[number], number> = {
  '/': 1,
  '/about': 0.7,
  '/portfolio': 0.9,
  '/contact': 0.9,
  '/projects': 0.8,
  '/blog': 0.85,
  '/privacy-policy': 0.5,
  '/cookie-policy': 0.5,
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticPages = staticIndexedRoutes.map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: routePriorities[path],
  }))

  const articlePages = blogPosts.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }))

  return [...staticPages, ...articlePages]
}
