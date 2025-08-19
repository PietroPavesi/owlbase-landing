import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Owlbase.ai - The future of knowledge work',
  description: 'Turn expert conversations into training guides, process docs & AI-ready context. Owly uses AI to interview your experts and automatically generate business documentation.',
  keywords: 'AI, knowledge management, expert interviews, process documentation, training materials, organizational wisdom',
  authors: [{ name: 'Owlbase.ai' }],
  creator: 'Owlbase.ai',
  publisher: 'Owlbase.ai',
  openGraph: {
    title: 'Owlbase.ai - Transform Expert Knowledge',
    description: 'Turn expert conversations into training guides, process docs & AI-ready context.',
    url: 'https://owlbase.ai',
    siteName: 'Owlbase.ai',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Owlbase.ai - Transform Expert Knowledge',
    description: 'Turn expert conversations into training guides, process docs & AI-ready context.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}