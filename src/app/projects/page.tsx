import type { Metadata } from 'next'
import ProjectsPage from '../../pages/ProjectsPage/ProjectsPage'

export const metadata: Metadata = {
  title: 'Projects - Norbert Fila Portfolio',
  description:
    'Browse software projects by Norbert Fila, including frontend and full-stack case studies.',
  alternates: {
    canonical: '/projects',
  },
}

export default function ProjectsRoutePage() {
  return <ProjectsPage />
}
