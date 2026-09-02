import 'server-only'
import { readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import matter from 'gray-matter'
import type { BlogPost } from '@/data/blogTypes'

type BlogFrontmatter = Omit<BlogPost, 'body'>

const blogDirectory = join(process.cwd(), 'content', 'blog')

export const featuredBlogSlugs = [
  'ile-kosztuje-strona-internetowa-w-lodzi',
  'strony-internetowe-lodz-jak-wybrac-wykonawce-dla-firmy-uslugowej',
] as const

function requireString(data: Record<string, unknown>, key: keyof BlogFrontmatter) {
  const value = data[key]

  if (typeof value !== 'string' || value.trim().length === 0) {
    throw new Error(`Missing or invalid blog field: ${String(key)}`)
  }

  return value
}

function requireStringArray(data: Record<string, unknown>, key: keyof BlogFrontmatter) {
  const value = data[key]

  if (!Array.isArray(value) || value.some((item) => typeof item !== 'string')) {
    throw new Error(`Missing or invalid blog field: ${String(key)}`)
  }

  return value
}

function parseBlogPost(fileName: string): BlogPost {
  const source = readFileSync(join(blogDirectory, fileName), 'utf8')
  const { data, content } = matter(source)
  const frontmatter = data as Record<string, unknown>
  const body = content.trim()

  if (!body) {
    throw new Error(`Blog post ${fileName} has empty body`)
  }

  const title = requireString(frontmatter, 'title')
  const slug = requireString(frontmatter, 'slug')

  return {
    slug,
    title,
    displayTitle:
      typeof frontmatter.displayTitle === 'string' ? frontmatter.displayTitle : undefined,
    description: requireString(frontmatter, 'description'),
    excerpt: requireString(frontmatter, 'excerpt'),
    category: requireString(frontmatter, 'category'),
    publishedAt: requireString(frontmatter, 'publishedAt'),
    readingTime: requireString(frontmatter, 'readingTime'),
    targetKeyword: requireString(frontmatter, 'targetKeyword'),
    intro: requireString(frontmatter, 'intro'),
    relatedPostSlugs: requireStringArray(frontmatter, 'relatedPostSlugs'),
    ctaTitle: requireString(frontmatter, 'ctaTitle'),
    ctaDescription: requireString(frontmatter, 'ctaDescription'),
    body,
  }
}

function compareBlogPosts(left: BlogPost, right: BlogPost) {
  const dateDelta = new Date(right.publishedAt).getTime() - new Date(left.publishedAt).getTime()

  if (dateDelta !== 0) {
    return dateDelta
  }

  return left.title.localeCompare(right.title, 'pl')
}

export function getBlogPosts() {
  return readdirSync(blogDirectory)
    .filter((fileName) => fileName.endsWith('.md'))
    .map(parseBlogPost)
    .sort(compareBlogPosts)
}

export function getBlogPostBySlug(slug: string) {
  return getBlogPosts().find((post) => post.slug === slug)
}

export function getBlogCategories() {
  return [...new Set(getBlogPosts().map((post) => post.category))]
}

export function getRelatedBlogPosts(slug: string) {
  const posts = getBlogPosts()
  const currentPost = posts.find((post) => post.slug === slug)

  if (!currentPost) {
    return []
  }

  if (currentPost.relatedPostSlugs.length > 0) {
    return currentPost.relatedPostSlugs
      .map((relatedSlug) => posts.find((post) => post.slug === relatedSlug))
      .filter((post): post is BlogPost => Boolean(post))
  }

  return posts
    .filter((post) => post.slug !== slug)
    .sort((left, right) => {
      const leftScore = Number(left.category === currentPost.category)
      const rightScore = Number(right.category === currentPost.category)

      if (leftScore !== rightScore) {
        return rightScore - leftScore
      }

      return compareBlogPosts(left, right)
    })
    .slice(0, 3)
}
