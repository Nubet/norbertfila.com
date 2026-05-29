import type { Metadata } from 'next'
import ProjectsPage from '@/views/ProjectsPage/ProjectsPage'

export const metadata: Metadata = {
  title: 'Projekty - Portfolio Norberta Fili',
  description: 'Przegladaj projekty Norberta Fili, w tym realizacje frontendowe i full-stack.',
  alternates: {
    canonical: '/projects',
  },
}

export default function ProjectsRoutePage() {
  return <ProjectsPage />
}
