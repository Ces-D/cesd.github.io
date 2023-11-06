import Image from 'next/image'
import Link from 'next/link'
import { appRoutes } from '@/utils/routes'
import styles from '../page.module.scss'

export default function ArticlePreviewBox() {
  return (
    <div className={styles['article-previews__box']}>
      <Link
        className={styles['article-previews__box__link']}
        href={appRoutes.article('test')}
      >
        <div className={styles['article-previews__box__image']}>
          <Image
            alt="article-preview"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            src="/images/loading.jpeg"
            style={{ objectFit: 'contain' }}
          />
        </div>
        <p className={styles['article-previews__box__text']}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et
          tempor nunc, eu aliquam ex. Quisque vestibulum pretium sem id egestas.
          Vivamus aliquam molestie vestibulum. Aliquam nec rhoncus lectus.
          Praesent sed condimentum ante. Nulla vulputate leo et feugiat
          volutpat. Praesent rhoncus vitae nunc ut lobortis. Proin augue massa,
          dignissim nec dignissim vel, interdum cursus purus. Sed ac sagittis
          sem. Nunc iaculis venenatis felis ac condimentum. Fusce dignissim
          pharetra porttitor.
        </p>
      </Link>
    </div>
  )
}
