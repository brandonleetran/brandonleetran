'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
const Navigation = () => {
  const pathName = usePathname()

  const isActiveLink = (path : string) => {
    return pathName === path ? "bg-black/[.05]" : ""
  }

  return (
    <nav className="backdrop-blur-3xl bg-white/[.6] w-full z-10 top-0 sticky md:py-5 pt-3 pb-3" aria-label='Navigation'>
      <div className="w-full m-auto max-w-2xl container flex flex-wrap items-center justify-end md:justify-center">
        <div className="w-full flex-grow flex items-center bg-transparent text-white z-20" id="nav-content">
          <ul className="text-sm font-normal flex flex-1 items-center text-left pl-1 md:pl-0">
            <li>
              <Link href="/" className={`font-bold hover:text-stone-500 hover:bg-black/[.05] bg-transparent inline-block py-2 px-4 text-black no-underline rounded-md transition-bg duration-300 ${isActiveLink('/')}`}>
                home
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className={`font-bold hover:text-stone-500 hover:bg-black/[.05] bg-transparent inline-block py-2 px-4 text-black no-underline rounded-md transition-bg duration-300 ${isActiveLink('/portfolio')}`}>
                portfolio
              </Link>
            </li>
            <li>
              <Link href="/blog" className={`font-bold hover:text-stone-500 hover:bg-black/[.05] bg-transparent inline-block py-2 px-4 text-black no-underline rounded-md transition-bg duration-300 ${isActiveLink('/blog')}`}>
                  blog
              </Link>
            </li>
            <li>
              <Link href="/drops" className={`font-bold hover:text-stone-500 hover:bg-black/[.05] bg-transparent inline-block py-2 px-4 text-black no-underline rounded-md transition-bg duration-300 ${isActiveLink('/drops')}`}>
                drops
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
