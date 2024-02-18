import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Blog | Brandon Lee Tran',
    description:'Read my blogs'
}

interface BlogLayoutProps {
    children : React.ReactNode
}
  
export default function BlogLayout({ children } : BlogLayoutProps ) {
    return <>
        {children}
    </>
}