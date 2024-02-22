import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Button, ButtonGroup } from "@nextui-org/button";
import { faXTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Page() {
    return (
      <>
        <h1 className='font-bold text-3xl mb-5'>About</h1>
        <p className='my-5'>Hi, my name is Brandon Tran. I graduated from the University of Omaha - Nebraska with a Bachelor&apos;s of Science in Computer Science. I am passionate about software development, specifically in front-end development. I believe that we can change the world through building accessible sites.</p>

        <div className='flex flex-row gap-3'>
          <Link href='https://brandonleetran-resume.vercel.app/' className='text-sm' target='_blank'>Visit my portfolio <FontAwesomeIcon icon={faArrowRight}/></Link>
          <Link href='https://brandonleetran-resume.vercel.app/' className='text-sm' target='_blank'>Subscribe to blog updates <FontAwesomeIcon icon={faArrowRight}/></Link>
        </div>
      </>
    )
  }