import styles from '../page.module.scss'

export default function ContactCard() {
  return (
    <div className={styles['card']}>
      <h5>Contact</h5>
      <div className={styles['card__grid']}>
        <div>Github</div>
        <div>Email</div>
      </div>
    </div>
  )
}
