import Link from 'next/link'
import { appRoutes } from '@/utils/routes'
import styles from '../page.module.scss'

interface TArticle {
  slug: string
  title: string
}

export default function ArticleNavigation(props: {
  nextArticle?: TArticle
  previousArticle?: TArticle
}) {
  return (
    <section className={styles['article-nav']}>
      {props.previousArticle ? (
        <Link
          className={styles['article-nav__action']}
          href={appRoutes.article(props.previousArticle.slug)}
        >
          {props.previousArticle.title}
        </Link>
      ) : null}
      {props.nextArticle ? (
        <Link
          className={styles['article-nav__action']}
          href={appRoutes.article(props.nextArticle.slug)}
        >
          {props.nextArticle.title}
        </Link>
      ) : null}
    </section>
  )
}
