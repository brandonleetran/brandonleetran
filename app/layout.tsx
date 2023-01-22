// This file applies to every root in the application

import Navbar from './navbar';
import Footer from './footer';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className="text-3x h-screen">
      <body className="text-white bg-neutral-900 h-screen w-full fixed">
        <Navbar/>
        <main className="max-w-2xl m-auto">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  )
}
