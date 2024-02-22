import type { Metadata } from 'next'

interface AboutLayoutProps {
    children : React.ReactNode
}

export const metadata: Metadata = {
  title: 'About | Brandon Lee Tran',
  description:
    "About Brandon Lee Tran"
}

export default function AboutLayout({ children }: AboutLayoutProps) {
    return <>
      {children} 
    </>
}