import SearchBar from './_components/SearchBar'
import ArticlePreviewBox from './_components/ArticlePreviewBox'
import styles from './page.module.scss'

// TODO: load all the posts

export default function ArticlesPage() {
  return (
    <main className={styles.layout}>
      <section className={styles['article-previews']}>
        <ArticlePreviewBox />
        <ArticlePreviewBox />
        <ArticlePreviewBox />
        <ArticlePreviewBox />
      </section>
      <SearchBar />
    </main>
  )
}
