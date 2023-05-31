// This file applies to every root in the application
import Navigation from "./components/Navbar"
import "./globals.css"

export interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
      <html lang="en" className="text-3x h-screen overflow-auto">
        <body className="text-black bg-white h-screen w-full overflow-auto pb-20">
          <Navigation />
          <main className="prose-slate md:mt-5 p-5 md:pl-4 md:p-0 max-w-2xl m-auto">
            {children}
          </main>
        </body>
      </html>
  )
}
