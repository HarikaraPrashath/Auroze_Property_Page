import type { Metadata } from 'next'
import { Inter, Roboto, Allura, Noto_Serif, Great_Vibes } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import SiteChatbot from '@/components/site-chatbot'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-roboto',
  display: 'swap',
})

const momo = Allura({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-momo',
  display: 'swap',
})

const notoSerif = Noto_Serif({
  subsets: ['latin'],
  variable: '--font-noto-serif',
  display: 'swap',
})

const momoSignature = Great_Vibes({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-momo-signature',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'SoulRoots | Premium Property Management Sri Lanka',
    template: '%s | SoilRoots',
  },
  description: 'Premium property management, rental operations, tenant coordination, and maintenance services in Sri Lanka.',
  keywords: 'property management, rental services, tenant management, property maintenance, housekeeping, Sri Lanka',
  generator: 'v0.app',
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${roboto.variable} ${momo.variable} ${notoSerif.variable} ${momoSignature.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <SiteChatbot />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
