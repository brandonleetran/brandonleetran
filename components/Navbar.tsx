'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-regular-svg-icons'
import { Button } from "@nextui-org/button";
import { useState } from 'react'

const Navigation = () => {

  const [isDark, setIsDark] = useState(true)
  const pathname = usePathname()

  const links = [ 
    { path: '/', name: 'Home' },
    { path: '/about', name: 'About' },
    { path: '/blog', name: 'Blog' },
    { path: '/drops', name: 'Drops' }
  ]

  const isActive = (path : string) => {
    return path === pathname
  }

  const toggleIcon = () => {
    setIsDark(!isDark);
  }

  return (
    <nav className="max-w-2xl m-auto pt-14 mb-10 flex items-baseline justify-between">
      <ul className="flex">
        {links.map((link) => (
              <li key={link.path}>
                <Link href={link.path} className={`${isActive(link.path) ? "text-white" : "text-neutral-400"} hover:text-white pr-4 duration-300`}>
                  {link.name}
                </Link>
              </li>
            ))}
      </ul>
      <Button onClick={toggleIcon} size='sm' className='border-2 border-neutral-400 bg-transparent text-neutral-400 hover:border-white hover:text-white transition-all' isIconOnly variant="faded" aria-label='Change theme'><FontAwesomeIcon icon={isDark as boolean ? faSun : faMoon} /></Button>
    </nav>
  )
}

export default Navigation
