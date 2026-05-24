import { MessageSquare } from 'lucide-react'
import { Link } from 'react-router-dom'
import styles from './StickyCTA.module.css'

export function StickyCTA() {
  return (
    <Link to="/contact" className={styles.stickyCta} aria-label="Darmowa wycena">
      <MessageSquare size={20} className={styles.icon} />
      <span className={styles.text}>Darmowa wycena</span>
    </Link>
  )
}
