import styles from './art.module.css'

export function HorizontalIntrigue() {
  return (
    <div className={styles['horizontal-intrigue']}>
      <div className={styles['horizontal-intrigue__bar1']}>
        <div className={styles['horizontal-intrigue__bar2']} />
      </div>
    </div>
  )
}

export function DottedIntrigue() {
  return (
    <div className={styles['dotted-intrigue']}>
      <div className={styles['dotted-intrigue__lollipop']}>
        <div className={styles['dotted-intrigue__lollipop__stick']} />
        <div className={styles['dotted-intrigue__lollipop__candy']} />
      </div>
      <div className={styles['dotted-intrigue__circle']}>
        <div />
      </div>
      <div className={styles['dotted-intrigue__lollipop']}>
        <div className={styles['dotted-intrigue__lollipop__candy']} />
        <div className={styles['dotted-intrigue__lollipop__stick']} />
      </div>
    </div>
  )
}
