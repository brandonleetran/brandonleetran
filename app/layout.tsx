// This file applies to every root in the application

import Navigation from './navbar';
import Footer from './footer';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className="text-3x h-screen overflow-auto">
      <body className="text-black bg-white h-screen w-full overflow-auto">
        <Navigation/>
        <main className="max-w-2xl m-auto px-4">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  )
}
