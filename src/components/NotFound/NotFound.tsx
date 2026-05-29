import Link from 'next/link'
import { Home, MoveLeft } from 'lucide-react'
import styles from './NotFound.module.css'

export default function NotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.shape1}></div>
      <div className={styles.shape2}></div>
      <div className={styles.shape3}></div>

      <div className={styles.content}>
        <div className={styles.errorCodeContainer}>
          <h1 className={styles.errorCode}>404</h1>
          <span className={styles.badge}>NIE ZNALEZIONO</span>
        </div>

        <div className={styles.messageBox}>
          <h2 className={styles.messageTitle}>ZAGUBIŁEŚ SIĘ W SIECI?</h2>
          <p className={styles.messageText}>Niestety, taka strona nie istnieje.</p>
        </div>

        <div className={styles.actions}>
          <Link href="/" className={styles.backButton}>
            <MoveLeft size={24} strokeWidth={3} />
            WRÓĆ NA STRONĘ GŁÓWNĄ
            <Home size={24} strokeWidth={3} />
          </Link>
        </div>
      </div>

      <div className={styles.gridOverlay}></div>
    </div>
  )
}
