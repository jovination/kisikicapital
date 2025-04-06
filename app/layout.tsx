import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Kisiki Capital - Expert Trade Funding & Advice',
  description:
    'Unlock your full trading potential with expert guidance and funding from Kisiki Capital, a trusted prop trading firm.',
  keywords: [
    'proprietary trading',
    'funded trading',
    'forex trading',
    'expert trading advice',
    'prop firm',
    'trade funding',
  ]
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
