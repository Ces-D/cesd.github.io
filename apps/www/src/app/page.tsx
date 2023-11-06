import SproutingPlants from '@/components/Art/Sprouts'
import styles from './page.module.css'

export default function HomePage() {
  return (
    <main className={styles.main}>
      <div className={styles.copy}>
        <p style={{ textAlign: 'center' }}>
          Dive into my tech repository. Here you'll find my technological
          projects, coding milestones, and opinions into the tech-scape. Eager
          to shape the digital today? I am!
        </p>
      </div>
      <SproutingPlants />
    </main>
  )
}
