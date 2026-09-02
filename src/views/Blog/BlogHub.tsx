'use client'

import { useSearchParams } from 'next/navigation'
import type { BlogPostPreview } from '@/data/blogTypes'
import { EditorialHub } from '@/views/Editorial/EditorialPage'

type BlogHubProps = {
  posts: BlogPostPreview[]
  featuredPosts: BlogPostPreview[]
}

export function BlogHub({ posts, featuredPosts }: BlogHubProps) {
  const searchParams = useSearchParams()
  const categories = [...new Set(posts.map((post) => post.category))]
  const category = searchParams.get('category')
  const activeCategory = categories.includes(category ?? '') ? category : undefined
  const visiblePosts = activeCategory
    ? posts.filter((post) => post.category === activeCategory)
    : posts

  const featuredItems = featuredPosts
    .map((post) => ({
      title: post.displayTitle || post.title,
      description: post.excerpt,
      href: `/blog/${post.slug}`,
      meta: `${post.category} • ${post.readingTime}`,
    }))

  const categoryItems = [
    { label: 'Wszystkie', href: '/blog', active: !activeCategory },
    ...categories.map((item) => ({
      label: item,
      href: `/blog?category=${encodeURIComponent(item)}`,
      active: item === activeCategory,
    })),
  ]

  return (
    <EditorialHub
      eyebrow="Blog"
      plainTitle
      title="Piszę o tym, co realnie wpływa na skuteczność strony firmowej."
      description="Znajdziesz tu tematy, które pomagają lepiej zrozumieć koszt strony, decyzje technologiczne, SEO lokalne i sposób prezentowania oferty usługowej."
      featuredItems={activeCategory ? undefined : featuredItems}
      categories={categoryItems}
      items={visiblePosts.map((post) => ({
        title: post.displayTitle || post.title,
        description: post.excerpt,
        href: `/blog/${post.slug}`,
        meta: `${post.category} • ${post.readingTime}`,
      }))}
    />
  )
}
