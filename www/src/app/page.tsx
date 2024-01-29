import { HorizontalIntrigue, DottedIntrigue } from '@/components/Art/Intrigue'
import ContactCard from './_components/ContactCard'
import ArticleCard from './_components/ArticleCard'
import PortfolioCard from './_components/PortfolioCard'
import styles from './page.module.scss'

export default function HomePage() {
  return (
    <main className={styles.main}>
      <section className={styles['dotted-section']}>
        <div className={styles.copy}>
          <DottedIntrigue />
          <h2 className={styles['copy__h']}>Hello, I'm Cesar</h2>
          <h5>Developer</h5>
          <p className={styles['copy__p']}>
            Dive into my tech repository. Here you'll find my technological
            projects, coding milestones, and opinions into the tech-scape. Eager
            to shape the digital today? I am!
          </p>
          <HorizontalIntrigue />
        </div>
        <div>
          <p>img</p>
        </div>
      </section>
      <section className={styles['dotted-section2']}>
        <div className={styles['dotted-section2__card-container']}>
          <ArticleCard />
          <PortfolioCard />
          <ContactCard />
        </div>
      </section>
    </main>
  )
}
