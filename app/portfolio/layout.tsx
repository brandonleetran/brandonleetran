import type { Metadata } from 'next'

interface PortfolioLayoutProps {
    children : React.ReactNode
}

export const metadata: Metadata = {
  title: 'Portfolio | Brandon Lee Tran',
  description:
    "Here's what I been up to."
}

export default function PortfolioLayoutProps({ children }: PortfolioLayoutProps) {
    return <>
      {children} 
    </>
}