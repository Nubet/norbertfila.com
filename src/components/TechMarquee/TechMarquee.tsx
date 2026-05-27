import styles from './TechMarquee.module.css'
import {
  SiHtml5,
  SiCss,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiSanity,
  SiStrapi,
  SiVite,
} from '@icons-pack/react-simple-icons'

const technologies = [
  {
    name: 'HTML5',
    Icon: SiHtml5,
    color: '#E34F26',
  },
  {
    name: 'CSS3',
    Icon: SiCss,
    color: '#1572B6',
  },
  {
    name: 'TypeScript',
    Icon: SiTypescript,
    color: '#3178C6',
  },
  {
    name: 'React',
    Icon: SiReact,
    color: '#61DAFB',
  },
  {
    name: 'Next.js',
    Icon: SiNextdotjs,
    color: '#000000',
  },
  {
    name: 'Tailwind',
    Icon: SiTailwindcss,
    color: '#06B6D4',
  },
  {
    name: 'Sanity',
    Icon: SiSanity,
    color: '#F03E2F',
  },
  {
    name: 'Strapi',
    Icon: SiStrapi,
    color: '#4945FF',
  },
  {
    name: 'Vite',
    Icon: SiVite,
    color: '#646CFF',
  },
]

export function TechMarquee() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <p className={styles.label}>Nowoczesne technologie jako fundament stabilności:</p>
        <div className={styles.trackContainer}>
          <div className={styles.track}>
            {[...Array(2)].map((_, i) => (
              <div key={i} className={styles.techSet} aria-hidden={i === 1}>
                {technologies.map((tech) => (
                  <div key={tech.name} className={styles.techItem} title={tech.name}>
                    <div className={styles.icon}>
                      <tech.Icon color={tech.color} size={40} />
                    </div>
                    <span className={styles.name}>{tech.name}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
