// This file applies to every root in the application
import Navigation from '@/components/Navbar'
import Footer from '@/components/Footer'
import './globals.css'
import type { Metadata } from 'next'
import { Providers } from "./providers";

export interface RootLayoutProps {
  children: React.ReactNode
}

export const metadata: Metadata = {
  title: 'Brandon Lee Tran',
  description:
    "Front-end developer, blogger, dog dad.",
  openGraph: {
    type: 'website',
    url: 'https://brandonleetran.tech/',
    title: 'Brandon Lee Tran - Software Developer',
    description: 'Front-end developer, blogger, dog dad.',
    images: [
      {
        url: '/android-chrome-512x512.png',
        alt: 'Brandon Lee Tran',
        width: 150,
        height: 150,
      },
    ]
  },
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
      <html lang="en" className="text-white bg-[#111010]">
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="mask-icon" href="/favicon/apple-touch-icon.png" color="#5bbad5"/>
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <body className="text-white bg-[#111010] px-10">
          <Navigation />
          <main className="max-w-2xl m-auto">
            <Providers>
              {children}
            </Providers>
          </main>
          <Footer  />
        </body>
      </html>
  )
}
