import { BreadcrumbJsonLd, ProfilePageJsonLd } from 'next-seo'
import { createBreadcrumbItems, personJsonLd } from '@/shared/seo/jsonLd'
import { About } from '@/views/About/About'

export const metadata = {
  title: 'O mnie',
  description:
    'Przekształcam surowe pomysły w działające rozwiązania. Dowiedz się więcej o moim doświadczeniu i inżynieryjnym podejściu.',
}

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={createBreadcrumbItems([
          { name: 'Start', path: '/' },
          { name: 'O mnie', path: '/about' },
        ])}
      />
      <ProfilePageJsonLd mainEntity={personJsonLd} />
      <About />
    </>
  )
}
