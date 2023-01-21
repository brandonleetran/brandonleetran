// This file applies to every root in the application

import Navbar from './navbar';
import Footer from './footer';
import styles from './global.module.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <main>
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  )
}
