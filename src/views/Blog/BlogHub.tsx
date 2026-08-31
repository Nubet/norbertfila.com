'use client'

import { useSearchParams } from 'next/navigation'
import { blogPosts, getBlogCategories } from '@/data/blogPosts'
import { EditorialHub } from '@/views/Editorial/EditorialPage'

const featuredSlugs = [
  'ile-kosztuje-strona-internetowa-w-lodzi',
  'strony-internetowe-lodz-jak-wybrac-wykonawce-dla-firmy-uslugowej',
]

export function BlogHub() {
  const searchParams = useSearchParams()
  const category = searchParams.get('category')
  const categories = getBlogCategories()
  const activeCategory = categories.includes(category ?? '') ? category : undefined
  const visiblePosts = activeCategory
    ? blogPosts.filter((post) => post.category === activeCategory)
    : blogPosts

  const featuredItems = featuredSlugs
    .map((slug) => blogPosts.find((post) => post.slug === slug))
    .filter((post): post is (typeof blogPosts)[number] => Boolean(post))
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
