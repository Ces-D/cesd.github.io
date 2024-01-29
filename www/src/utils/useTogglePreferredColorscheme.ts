'use client'

import { useEffect, useState } from 'react'

const PREFERS_COLOR_SCHEME = 'prefers-color-scheme'

type IThemes = 'dark' | 'light'

export function useTogglePreferredColorScheme() {
  const [colorScheme, setColorScheme] = useState<IThemes>(
    () =>
      (localStorage.getItem(PREFERS_COLOR_SCHEME) as IThemes | null) || 'light'
  )

  useEffect(() => {
    if (colorScheme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark')
      localStorage.setItem(PREFERS_COLOR_SCHEME, 'dark')
    } else {
      document.documentElement.setAttribute('data-theme', 'light')
      localStorage.setItem(PREFERS_COLOR_SCHEME, 'light')
    }
  }, [colorScheme])

  const toggleColorScheme = () => {
    if (colorScheme === 'dark') {
      setColorScheme('light')
    } else {
      setColorScheme('dark')
    }
  }

  return {
    colorScheme,
    toggleColorScheme,
  }
}
