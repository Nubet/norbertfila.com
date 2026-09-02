export type BlogPost = {
  slug: string
  title: string
  displayTitle?: string
  description: string
  excerpt: string
  category: string
  publishedAt: string
  readingTime: string
  targetKeyword: string
  intro: string
  body: string
  relatedPostSlugs: string[]
  ctaTitle: string
  ctaDescription: string
}

export type BlogPostPreview = Pick<
  BlogPost,
  'slug' | 'title' | 'displayTitle' | 'excerpt' | 'category' | 'readingTime' | 'publishedAt'
>
