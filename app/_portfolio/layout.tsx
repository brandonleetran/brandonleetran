import type { Metadata } from 'next'

interface WorkLayoutProps {
    children : React.ReactNode
}

export const metadata: Metadata = {
  title: 'Work | Brandon Lee Tran',
  description:
    "Here's what I been up to."
}

export default function WorkLayoutProps({ children }: WorkLayoutProps) {
    return <>
      {children} 
    </>
}