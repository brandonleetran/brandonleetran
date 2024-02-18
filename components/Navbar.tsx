'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const Navigation = () => {

  const pathname = usePathname()
  const links = [ 
    { path: '/', name: 'Home' },
    { path: '/work', name: 'Work' },
    { path: '/blog', name: 'Blog' },
    { path: '/drops', name: 'Drops' }
  ]

  const isActive = (path : string) => {
    return path === pathname
  }

  return (
    <nav className="max-w-2xl m-auto mt-14 mb-14">
      <ul className="flex">
        {links.map((link) => (
              <li key={link.path}>
                <Link href={link.path} className={`${isActive(link.path) ? "text-white" : "text-neutral-400"} hover:text-white lowercase pr-4 duration-300`}>
                  {link.name}
                </Link>
              </li>
            ))}
      </ul>
    </nav>
  )
}

export default Navigation
