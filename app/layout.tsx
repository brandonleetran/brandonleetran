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
    <html lang="en" className="text-3x h-screen overflow-auto">
      <body className="text-black bg-white h-screen w-full overflow-auto">
        <Navigation/>
        <main className="prose-slate md:mt-10 p-5 md:pl-4 md:p-0 max-w-2xl m-auto">
          {children}
        </main>
      </body>
    </html>
  )
}
