import type { Metadata } from 'next'

export interface DropsLayoutProps {
  children: React.ReactNode
}

export const metadata: Metadata = {
  title: 'Drops | Brandon Lee Tran',
  description:
    "Send a note!"
}

export default function DropsLayout({ children }: DropsLayoutProps) {
  return <>
    {children} 
  </>
}
