import Logo from './Logo'
import Image from 'next/image'

interface SocialMediaProps {
  children?: React.ReactNode,
  logoPath: string,
  username: string,
  application: string,
  href: string
}

export const SocialMedia = ({children, logoPath, username, application, href} : SocialMediaProps) => {

    return (
        <a href={href} target="_blank" className="focus:outline-none w-full h-full border focus:border-white hover:border-white focus:bg-gradient-to-r hover:bg-gradient-to-r bg-white transition-all from-rose-400 via-fuchsia-500 from-indigo-500 no-underline rounded-lg focus:p-[3px] hover:p-[3px]">
        <div className="transition-all p-5 w-full flex flex-row justify-between rounded-md bg-white">
          <div className="flex">
            <div className="m-auto">
              <Logo path={logoPath} />
            </div>
            <div className="ml-5 flex flex-col">
              <div className="font-bold">{username}</div>
              <small className="text-stone-500">{application}</small>
            </div>
          </div>
          <div className="my-auto">
            <Image width="15" height="15" className="m-0 ring-gray-300" src="/logos/external-link-symbol.png" alt="Bordered avatar" />
          </div>
        </div>
      </a>
    )


}

export default SocialMedia