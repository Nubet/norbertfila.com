import Projects from '../../components/Projects/Projects.tsx'
import Hero from '../../components/Hero/Hero'
import Career from '../../components/Career/Career'
import Education from '../../components/Education/Education'
import Skills from '../../components/Skills/Skills'
import { useEffect } from 'react'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { setSeo } from '../../utils/seo'
import { scrollToTopSmooth } from '../../infrastructure/browser/scroll'
import styles from './CVPage.module.css'

export default function CVPage() {
  useEffect(() => {
    scrollToTopSmooth()

    setSeo({
      title: 'Norbert Fila - CV / O mnie',
      description:
        'Szczegółowe informacje o moim wykształceniu, doświadczeniu i umiejętnościach twardych.',
      canonicalUrl: 'https://norbertfila.com/cv',
    })
  }, [])

  return (
    <div className="neo-brutalist-theme">
      <Link to="/" className={styles.backToHome} aria-label="Back to Home">
        <ArrowLeft size={16} />
        <span>Back to Home</span>
      </Link>
      <div className="page">
        <Hero />
        <Projects />
        <Career />
        <Education />
        <Skills />
      </div>
    </div>
  )
}
