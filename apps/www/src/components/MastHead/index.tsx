import styles from './mastHead.module.css'
import ActionButtons from './ActionButtons'

export default function MastNavigation() {
  return (
    <nav className={styles['mast']}>
      <h1 className={styles['page-title']}>Home</h1>
      <ActionButtons />
    </nav>
  )
}
