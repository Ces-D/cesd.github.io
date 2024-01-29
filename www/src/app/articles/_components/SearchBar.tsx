import Link from 'next/link'
import { Search, GitBranch, Headphones, Octagon } from 'react-feather'
import { appRoutes } from '@/utils/routes'
import styles from '../page.module.scss'

export default function SearchBar() {
  return (
    <section className={styles['search-bar']}>
      <form className={styles['search-bar__keyboard']}>
        <input id="search-keyboard" type="text" />
        <Search size="1.5rem" />
      </form>
      <ul className={styles['search-bar__results']}>
        <li className={styles['search-bar__results__item']}>
          <Link href={appRoutes.article('test')}>
            <Headphones />
            <p>Life Article</p>
          </Link>
        </li>
        <li className={styles['search-bar__results__item']}>
          <Link href={appRoutes.article('test')}>
            <Octagon />
            <p>Miscellaneous Article</p>
          </Link>
        </li>
        <li className={styles['search-bar__results__item']}>
          <Link href={appRoutes.article('test')}>
            <GitBranch />
            <p>Tech Article</p>
          </Link>
        </li>

        <li className={styles['search-bar__results__item']}>
          <Link href={appRoutes.article('test')}>
            <Headphones />
            <p>Life Article</p>
          </Link>
        </li>
        <li className={styles['search-bar__results__item']}>
          <Link href={appRoutes.article('test')}>
            <Octagon />
            <p>Miscellaneous Article</p>
          </Link>
        </li>
        <li className={styles['search-bar__results__item']}>
          <Link href={appRoutes.article('test')}>
            <GitBranch />
            <p>Tech Article</p>
          </Link>
        </li>
        <li className={styles['search-bar__results__item']}>
          <Link href={appRoutes.article('test')}>
            <Headphones />
            <p>Life Article</p>
          </Link>
        </li>
        <li className={styles['search-bar__results__item']}>
          <Link href={appRoutes.article('test')}>
            <Octagon />
            <p>Miscellaneous Article</p>
          </Link>
        </li>
        <li className={styles['search-bar__results__item']}>
          <Link href={appRoutes.article('test')}>
            <GitBranch />
            <p>Tech Article</p>
          </Link>
        </li>
        <li className={styles['search-bar__results__item']}>
          <Link href={appRoutes.article('test')}>
            <Headphones />
            <p>Life Article</p>
          </Link>
        </li>
      </ul>
    </section>
  )
}
