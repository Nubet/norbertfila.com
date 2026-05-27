import Link from 'next/link'
import Projects from '@/components/Projects/Projects'
import { MoveLeft } from 'lucide-react'
import styles from './ProjectsPage.module.css'

export default function ProjectsPage() {
  return (
    <div className="page">
      <header className={styles.header}>
        <Link href="/" className={styles.backLink}>
          <MoveLeft size={20} strokeWidth={3} /> BACK TO HOME
        </Link>
        <h1 className={styles.title}>ALL PROJECTS.</h1>
      </header>

      <Projects all={true} />
    </div>
  )
}
