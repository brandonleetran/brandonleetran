import Logo from './Logo'
import Link from 'next/link'

interface SocialMediaProps {
  children?: React.ReactNode,
  application: string,
  href: string
}

export const SocialMedia = ({application, href} : SocialMediaProps) => {
    return (
      <Link href={href} className="block text-neutral-400 hover:text-white transition-all  ">follow me on {application}</Link>
    )
}

export default SocialMedia