import Image from 'next/image'

const Logo = ({ path }: { path: string }) => {
    return (
        <Image width="50" height="50" className="py-5 ring-gray-300 hover:translate-y-[-10px] transition-all" src={path} alt="Bordered avatar" />
    )
}

export default Logo;