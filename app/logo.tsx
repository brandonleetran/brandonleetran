import Image from 'next/image'

const Logo = ({ path }: { path: string }) => {
    return (
        <Image width="25" height="25" className="m-0 ring-gray-300" src={path} alt="Bordered avatar" />
    )
}

export default Logo;