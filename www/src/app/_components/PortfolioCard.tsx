import styles from '../page.module.scss'

export default function PortfolioCard() {
  return (
    <div className={styles['card']}>
      <h5>Portfolio</h5>
      <ul>
        <li>Project 1</li>
        <li>Project 2</li>
        <li>Project 3</li>
      </ul>
    </div>
  )
}
