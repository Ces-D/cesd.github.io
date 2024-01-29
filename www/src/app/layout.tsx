import '@/styles/fonts.css'
import '@/styles/palette.css'
import '@/styles/spacing.css'
import '@/styles/resets.css'
import type { Metadata, Viewport } from 'next'
import MastHead from '@/components/MastHead'

export const metadata: Metadata = {
  title: 'Cesar Diaz',
  description:
    "Dive into my tech repository. Here you'll find my technological projects, coding milestones, and opinions into the tech-scape. Eager to shape the digital today?",
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <MastHead />
        {children}
      </body>
    </html>
  )
}
