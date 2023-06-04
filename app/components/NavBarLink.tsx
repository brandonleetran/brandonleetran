'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export interface NavBarLinkProps {
    children : React.ReactNode,
    path : string
}

const NavBarLink = ( { children, path } : NavBarLinkProps) => {
    const pathName = usePathname()

    const isActiveLink = (path : string) => {
      return pathName === path ? "text-black bg-black/[.05]" : "text-stone-500"
    }
    return (
        <Link href={path} className={`lowercase font-bold hover:text-black bg-transparent inline-block py-2 px-4 no-underline rounded-md transition-bg duration-300 ${isActiveLink(path)}`}>
            {children}
        </Link>
    )
}

export default NavBarLink