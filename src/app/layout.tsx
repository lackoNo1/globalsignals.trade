import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Global Signals | AI-Powered Trading Platform',
  description: 'The future of trading is almost here. AI-powered signals that see the future. Trade anything, anywhere. CFDs, Options, Crypto, Oil, Metals.',
  keywords: 'trading signals, AI trading, copy trading, MT5, TradeStation, Binance, CFD trading, options trading, crypto trading',
  openGraph: {
    title: 'Global Signals - Coming Soon',
    description: 'The most intelligent trading platform on Earth. Coming soon.',
    url: 'https://globalsignals.trade',
    siteName: 'Global Signals',
    images: [
      {
        url: 'https://globalsignals.trade/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}