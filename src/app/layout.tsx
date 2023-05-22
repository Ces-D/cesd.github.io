import { Metadata } from 'next'
import '@/global.css'

// TODO: improve the metadata
export const metadata: Metadata = {
  title: 'Cesar Diaz',
  description: 'Web Developer',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
