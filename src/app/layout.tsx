import { Metadata } from 'next'

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
