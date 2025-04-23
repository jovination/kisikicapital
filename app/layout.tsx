import type React from "react"
import type { Metadata } from "next"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"
import { Inter } from "next/font/google"
import { LiveChat } from "@/components/live-chat"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Kisiki Capital - Prop Trading Firm",
    template: "%s | Kisiki Capital",
  },
  description: "Get funded to trade with Kisiki Capital. We provide trading capital, expert mentorship, and a supportive community for traders worldwide.",
  keywords: [
    "prop trading",
    "funded trading",
    "trading capital",
    "forex trading",
    "stock trading",
    "crypto trading",
    "trading mentorship",
    "trading education",
  ],
  authors: [{ name: "Kisiki Capital" }],
  publisher: "Kisiki Capital",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://kisikicapital.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  openGraph: {
    title: "Kisiki Capital - Prop Trading Firm",
    description: "Get funded to trade with Kisiki Capital. We provide trading capital, expert mentorship, and a supportive community for traders worldwide.",
    url: "https://kisikicapital.com",
    siteName: "Kisiki Capital",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kisiki Capital",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kisiki Capital - Prop Trading Firm",
    description: "Get funded to trade with Kisiki Capital. We provide trading capital, expert mentorship, and a supportive community for traders worldwide.",
    images: ["/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
    yahoo: "yahoo-verification-code",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} min-h-screen bg-content-light-bg dark:bg-content-dark-bg text-content-light-text dark:text-content-dark-text`}>
        <ThemeProvider defaultTheme="system" storageKey="kisiki-theme">
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
            <LiveChat />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

import './globals.css'