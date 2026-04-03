import type { Metadata } from 'next'
import { Michroma, Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const michroma = Michroma({
  weight: '400',
  variable: '--font-michroma',
  subsets: ['latin'],
})

const spaceGrotesk = Space_Grotesk({
  weight: ['400', '500', '700'],
  variable: '--font-space-grotesk',
  subsets: ['latin'],
})

const jetbrainsMono = JetBrains_Mono({
  weight: ['400', '500', '700'],
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Kevin's Nest",
  description: 'Software Developer. I build systems, debug failures, and document everything in between.',
  keywords: ['software engineer', 'developer', 'portfolio', 'systems'],
  metadataBase: new URL('https://kevinnest.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://kevinnest.com',
    siteName: "Kevin's Nest",
    title: "Kevin's Nest",
    description: 'Software Developer. I build systems, debug failures, and document everything in between.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${michroma.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <body className="bg-white text-gray-900 antialiased">
        {children}
      </body>
    </html>
  )
}
