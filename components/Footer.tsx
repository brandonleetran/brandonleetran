import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXTwitter, faSpotify } from '@fortawesome/free-brands-svg-icons'
import { faCopyright } from '@fortawesome/free-regular-svg-icons'

interface FooterProps {
    children?: React.ReactNode
}

const Footer = ({children} : FooterProps) => {
    return (
        <>
            <hr />
            <footer className='max-w-2xl m-auto'>
                <p className='my-5'><FontAwesomeIcon icon={faSpotify} color='#1ED760'/><span className='ml-2 text-sm'>Last played: Alan Walker - Fade</span></p>
                <div className='grid grid-cols-3 gap-5'>
                    <div className='flex flex-col gap-3'>
                        <Link href='/'>Home</Link>
                        <Link href='/about'>About</Link>
                        <Link href='/subscribe'>Subscribe</Link>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <Link href='https://www.x.com/brandonleetrann' target='_blank'><FontAwesomeIcon icon={faXTwitter}/></Link>
                        <Link href='https://www.github.com/brandonleetran' target='_blank'>GitHub</Link>
                        <Link href='https://www.linkedin.com/in/brandon-lee-tran' target='blank'>LinkedIn</Link>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <Link href='https://brandonleetran-resume.vercel.app/' target='_blank'>Portfolio</Link>
                        <Link href='/blog'>Blog</Link>
                        <Link href='/drops'>Sign a Drop</Link>
                    </div>
                </div>
                <p className='pb-14 text-left text-sm mt-5'>Copyright <FontAwesomeIcon icon={faCopyright}/> 2024 Brandon Lee Tran</p>
            </footer>
        </>
    )
}

export default Footer