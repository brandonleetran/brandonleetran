import Image from 'next/image'

interface LogoProps {
    children?: React.ReactNode,
    path: string
}

const Logo = ({path} : LogoProps) => {
    return (
        <Image width="25" height="25" className="m-0" src={path} alt="Bordered avatar" />
    )
}

export default Logo