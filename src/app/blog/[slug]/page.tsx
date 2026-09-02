import { ArticleJsonLd, BreadcrumbJsonLd } from 'next-seo'
import { notFound } from 'next/navigation'
import { getBlogPostBySlug, getBlogPosts, getRelatedBlogPosts } from '@/data/blog'
import {
  absoluteUrl,
  createBreadcrumbItems,
  defaultArticleImage,
  organizationJsonLd,
  personJsonLd,
} from '@/shared/seo/jsonLd'
import { createPageMetadata } from '@/shared/seo/metadata'
import { EditorialPage } from '@/views/Editorial/EditorialPage'

export function generateStaticParams() {
  return getBlogPosts().map((post) => ({ slug: post.slug }))
}

type BlogPostPageProps = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)

  if (!post) {
    return createPageMetadata({
      title: 'Blog',
      description: 'Blog o stronach internetowych i SEO.',
      path: '/blog',
    })
  }

  return createPageMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    keywords: [post.targetKeyword, post.category.toLowerCase(), 'norbert fila'],
  })
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = getRelatedBlogPosts(post.slug).map((candidate) => ({
    title: candidate.displayTitle || candidate.title,
    description: candidate.excerpt,
    href: `/blog/${candidate.slug}`,
    meta: `${candidate.category} • ${candidate.readingTime}`,
  }))

  return (
    <>
      <BreadcrumbJsonLd
        items={createBreadcrumbItems([
          { name: 'Start', path: '/' },
          { name: 'Blog', path: '/blog' },
          { name: post.title, path: `/blog/${post.slug}` },
        ])}
      />
      <ArticleJsonLd
        type="BlogPosting"
        headline={post.title}
        url={absoluteUrl(`/blog/${post.slug}`)}
        author={personJsonLd}
        publisher={organizationJsonLd}
        datePublished={post.publishedAt}
        dateModified={post.publishedAt}
        image={defaultArticleImage}
        description={post.description}
        isAccessibleForFree
        mainEntityOfPage={absoluteUrl(`/blog/${post.slug}`)}
      />
      <EditorialPage
        eyebrow={post.category}
        plainTitle
        title={post.title}
        description={post.description}
        intro={post.intro}
        meta={[`Fraza: ${post.targetKeyword}`, `Publikacja: ${post.publishedAt}`, post.readingTime]}
        markdownBody={post.body}
        relatedPosts={relatedPosts}
        ctaTitle={post.ctaTitle}
        ctaDescription={post.ctaDescription}
        ctaLabel="Przejdź do kontaktu"
        ctaHref="/kontakt"
      />
    </>
  )
}
