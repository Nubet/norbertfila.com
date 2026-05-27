import { MessageSquare } from 'lucide-react'
import styles from './StickyCTA.module.css'

export function StickyCTA() {
  return (
    <a href="/contact" className={styles.stickyCta} aria-label="Darmowa wycena">
      <MessageSquare size={20} className={styles.icon} />
      <span className={styles.text}>Darmowa wycena</span>
    </a>
  )
}
