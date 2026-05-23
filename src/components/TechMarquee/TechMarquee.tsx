import styles from './TechMarquee.module.css';

const technologies = [
  {
    name: 'HTML5',
    svg: (
      <svg viewBox="0 0 384 512" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 32L34.9 392.5 192 480l157.1-87.5L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-98.5 26.4-98.5-26.4-6.6-73.9h48.3l3.4 38.2 53.4 14.3 53.4-14.3 6.8-73.9H114.2l-10.4-118.4h208.4l-4 30.2z" fill="#E34F26"/>
      </svg>
    )
  },
  {
    name: 'CSS3',
    svg: (
      <svg viewBox="0 0 384 512" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 32l34.9 392.5L192 480l157.1-87.5L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3.1h111.5l-12.8 146.6-98.5 28.7-98.5-28.7-6.2-69.8h48.2l3.2 32.5 53.3 15.6 53.3-15.6 5.6-60.6H111.5l-4.4-49.8H193l113.9-35.4L313.1 112z" fill="#1572B6"/>
      </svg>
    )
  },
  {
    name: 'TypeScript',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.5 1.5h21v21h-21v-21z" fill="#3178C6"/>
        <path d="M13.65 19.382c0-.52-.303-1.04-1.258-1.52l-2.078-.97c-1.144-.52-1.748-1.15-1.748-2.05 0-1.28 1.1-2.078 2.65-2.078 1.54 0 2.45.67 2.92 1.488l-1.52.887c-.244-.504-.76-1.008-1.41-1.008-.66 0-1.05.35-1.05.772 0 .47.28.8 1.13.19l1.83.858c1.36.63 2.06 1.34 2.06 2.37 0 1.4-1.12 2.22-2.82 2.22-1.77 0-2.85-.8-3.32-1.74l1.54-.88c.32.61.94 1.25 1.77 1.25.8 0 1.28-.35 1.28-.8m-2.45-8.5v1.65H8.78V20.1H7.07v-7.58H4.63v-1.65h6.57" fill="#FFF"/>
      </svg>
    )
  },
  {
    name: 'React',
    svg: (
      <svg viewBox="-11.5 -10.232 23 20.463" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle r="2.05" fill="#61DAFB"/>
        <g stroke="#61DAFB" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2"/>
          <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
          <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
        </g>
      </svg>
    )
  },
  {
    name: 'Next.js',
    svg: (
      <svg viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="90" cy="90" r="90" fill="#000"/>
        <path d="M149.508 157.619L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.619Z" fill="url(#paint0_linear_1_41)"/>
        <path d="M115.012 54H127.126V112.774H115.012V54Z" fill="url(#paint1_linear_1_41)"/>
        <defs>
          <linearGradient id="paint0_linear_1_41" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
            <stop stopColor="#fff"/>
            <stop offset="1" stopColor="#fff" stopOpacity="0"/>
          </linearGradient>
          <linearGradient id="paint1_linear_1_41" x1="121.069" y1="54" x2="120.735" y2="106.874" gradientUnits="userSpaceOnUse">
            <stop stopColor="#fff"/>
            <stop offset="1" stopColor="#fff" stopOpacity="0"/>
          </linearGradient>
        </defs>
      </svg>
    )
  },
  {
    name: 'Tailwind',
    svg: (
      <svg viewBox="0 0 54 33" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.8-4.9 9.4-4.1 2.1.5 3.6 2 5.2 3.7C30.6 13 33.7 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.8 4.9-9.4 4.1-2.1-.5-3.6-2-5.2-3.7C36.9 3.2 33.8 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.8-4.9 9.4-4.1 2.1.5 3.6 2 5.2 3.7 2.5 2.6 5.6 5.8 12.4 5.8 7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.8 4.9-9.4 4.1-2.1-.5-3.6-2-5.2-3.7-2.5-2.6-5.6-5.8-12.4-5.8z" fill="#06B6D4"/>
      </svg>
    )
  }
];

export function TechMarquee() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <p className={styles.label}>
          Nowoczesne technologie jako fundament stabilności:
        </p>
        <div className={styles.trackContainer}>
          <div className={styles.track}>
            {/* 
              Render the set twice to create a seamless infinite loop.
              The animation moves the track from 0 to -50%.
            */}
            {[...Array(2)].map((_, i) => (
              <div key={i} className={styles.techSet} aria-hidden={i === 1}>
                {technologies.map((tech) => (
                  <div key={tech.name} className={styles.techItem} title={tech.name}>
                    <div className={styles.icon}>{tech.svg}</div>
                    <span className={styles.name}>{tech.name}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
