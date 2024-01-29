import styles from '../page.module.scss'

export default function ArticleCard() {
  return (
    <div className={styles['card']}>
      <h5>Articles</h5>
      <ul>
        <li> Article 1 </li>
        <li>Article 2</li>
      </ul>
    </div>
  )
}
