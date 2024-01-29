import ArticleNavigation from './_components/ArticleNavigation'
import styles from './page.module.scss'

export default function ArticlePage(props: { params: { article: string } }) {
  return (
    <div className={styles['article-container']}>
      <h1 className={styles['article-container__title']}>
        {props.params.article}
      </h1>
      <article className={styles['article-container__article']}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et
          tempor nunc, eu aliquam ex. Quisque vestibulum pretium sem id egestas.
          Vivamus aliquam molestie vestibulum. Aliquam nec rhoncus lectus.
          Praesent sed condimentum ante. Nulla vulputate leo et feugiat
          volutpat. Praesent rhoncus vitae nunc ut lobortis. Proin augue massa,
          dignissim nec dignissim vel, interdum cursus purus. Sed ac sagittis
          sem. Nunc iaculis venenatis felis ac condimentum. Fusce dignissim
          pharetra porttitor.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et
          tempor nunc, eu aliquam ex. Quisque vestibulum pretium sem id egestas.
          Vivamus aliquam molestie vestibulum. Aliquam nec rhoncus lectus.
          Praesent sed condimentum ante. Nulla vulputate leo et feugiat
          volutpat. Praesent rhoncus vitae nunc ut lobortis. Proin augue massa,
          dignissim nec dignissim vel, interdum cursus purus. Sed ac sagittis
          sem. Nunc iaculis venenatis felis ac condimentum. Fusce dignissim
          pharetra porttitor.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et
          tempor nunc, eu aliquam ex. Quisque vestibulum pretium sem id egestas.
          Vivamus aliquam molestie vestibulum. Aliquam nec rhoncus lectus.
          Praesent sed condimentum ante. Nulla vulputate leo et feugiat
          volutpat. Praesent rhoncus vitae nunc ut lobortis. Proin augue massa,
          dignissim nec dignissim vel, interdum cursus purus. Sed ac sagittis
          sem. Nunc iaculis venenatis felis ac condimentum. Fusce dignissim
          pharetra porttitor.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et
          tempor nunc, eu aliquam ex. Quisque vestibulum pretium sem id egestas.
          Vivamus aliquam molestie vestibulum. Aliquam nec rhoncus lectus.
          Praesent sed condimentum ante. Nulla vulputate leo et feugiat
          volutpat. Praesent rhoncus vitae nunc ut lobortis. Proin augue massa,
          dignissim nec dignissim vel, interdum cursus purus. Sed ac sagittis
          sem. Nunc iaculis venenatis felis ac condimentum. Fusce dignissim
          pharetra porttitor.
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et
          tempor nunc, eu aliquam ex. Quisque vestibulum pretium sem id egestas.
          Vivamus aliquam molestie vestibulum. Aliquam nec rhoncus lectus.
          Praesent sed condimentum ante. Nulla vulputate leo et feugiat
          volutpat. Praesent rhoncus vitae nunc ut lobortis. Proin augue massa,
          dignissim nec dignissim vel, interdum cursus purus. Sed ac sagittis
          sem. Nunc iaculis venenatis felis ac condimentum. Fusce dignissim
          pharetra porttitor.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et
          tempor nunc, eu aliquam ex. Quisque vestibulum pretium sem id egestas.
          Vivamus aliquam molestie vestibulum. Aliquam nec rhoncus lectus.
          Praesent sed condimentum ante. Nulla vulputate leo et feugiat
          volutpat. Praesent rhoncus vitae nunc ut lobortis. Proin augue massa,
          dignissim nec dignissim vel, interdum cursus purus. Sed ac sagittis
          sem. Nunc iaculis venenatis felis ac condimentum. Fusce dignissim
          pharetra porttitor.
        </p>
      </article>
      <ArticleNavigation
        nextArticle={{
          slug: 'what-what-what-what',
          title:
            'This is a test for a long title that is long because of many words that are here. This should not happen but you never know',
        }}
        previousArticle={{
          slug: 'this-is-a-long-slug-that-is-long-and-difficult-to-remember-but-whatever-is-needed-shall-be-done-yap-yap-yap-ya',
          title:
            'This is a test for a long title that is long because of many words that are here. This should not happen but you never know',
        }}
      />
    </div>
  )
}
