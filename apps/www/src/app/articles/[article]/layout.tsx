import type { PropsWithChildren } from 'react'
import styles from './page.module.scss'
import SideNavigation from './_components/SideNavigation'

export default function ArticleLayout(props: PropsWithChildren) {
  return (
    <main className={styles['layout']}>
      <SideNavigation />
      {props.children}
    </main>
  )
}
