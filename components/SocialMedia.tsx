import Logo from './Logo'
import Image from 'next/image'

interface SocialMediaProps {
  children?: React.ReactNode,
  logoPath: string,
  username: string,
  application: string,
  href: string
}

export const SocialMedia = ({logoPath, username, application, href} : SocialMediaProps) => {
    return (
    <a href={href} target="_blank" rel="noreferrer" className="focus:outline-none">
        <div className="p-5 flex flex-row justify-between bg-neutral-800 border border-neutral-400 rounded">
          <div className="flex">
            <div className="m-auto">
              <Logo path={logoPath} />
            </div>
            <div className="ml-5 flex flex-col">
              <div className="font-bold">{username}</div>
              <small className="text-neutral-400">{application}</small>
            </div>
          </div>
          <div className="my-auto">
            <Image width="15" height="15" className="m-0" src="/logos/external-link-symbol.png" alt="Bordered avatar" />
          </div>
        </div>
      </a>
    )
}

export default SocialMedia