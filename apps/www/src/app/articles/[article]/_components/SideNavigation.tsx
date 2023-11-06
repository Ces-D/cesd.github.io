import Link from 'next/link'
import { appRoutes } from '@/utils/routes'
import styles from '../page.module.scss'

export default function SideNavigation() {
  return (
    <aside className={styles['side-nav']}>
        <ul className={styles['side-nav__list']}>
          {Array.from({ length: 33 }).map((_, i) => (
            <li className={styles['side-nav__list__item']} key={i}>
              <Link href={appRoutes.article('test')}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent et tempor nunc, eu aliquam ex.
              </Link>
            </li>
          ))}
        </ul>
    </aside>
  )
}
