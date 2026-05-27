'use client'

import Projects from '../../components/Projects/Projects'
import Hero from '../../components/Hero/Hero'
import Career from '../../components/Career/Career'
import Education from '../../components/Education/Education'
import Skills from '../../components/Skills/Skills'
import { ArrowLeft } from 'lucide-react'
import styles from './CVPage.module.css'

export default function CVPage() {
  return (
    <div className="neo-brutalist-theme">
      <a href="/" className={styles.backToHome} aria-label="Back to Home">
        <ArrowLeft size={16} />
        <span>Back to Home</span>
      </a>
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
