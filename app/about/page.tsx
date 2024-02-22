import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Button, ButtonGroup } from "@nextui-org/button";
import { faXTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Page() {
    return (
      <>
        <h1 className='font-bold text-3xl mb-5'>About</h1>
        <p className='my-5'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus cras adipiscing enim eu. Penatibus et magnis dis parturient montes nascetur ridiculus mus mauris. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At erat pellentesque adipiscing commodo. Facilisis volutpat est velit egestas dui id ornare arcu. Tellus integer feugiat scelerisque varius morbi enim nunc. Fames ac turpis egestas integer eget aliquet nibh praesent. Proin sagittis nisl rhoncus mattis rhoncus urna. At quis risus sed vulputate odio ut enim blandit. Purus semper eget duis at. Nec tincidunt praesent semper feugiat nibh. Amet consectetur adipiscing elit pellentesque habitant morbi tristique. At tempor commodo ullamcorper a lacus. Malesuada proin libero nunc consequat interdum varius sit. Sit amet porttitor eget dolor morbi non. Enim blandit volutpat maecenas volutpat blandit aliquam. Eu non diam phasellus vestibulum lorem sed risus ultricies tristique. Scelerisque purus semper eget duis at tellus at urna.
        </p>
        <div className='flex flex-row gap-3'>
          <Link href='https://brandonleetran-resume.vercel.app/' className='text-sm' target='_blank'>Visit my portfolio <FontAwesomeIcon icon={faArrowRight}/></Link>
          <Link href='https://brandonleetran-resume.vercel.app/' className='text-sm' target='_blank'>Subscribe to blog updates <FontAwesomeIcon icon={faArrowRight}/></Link>
        </div>
        <p className='my-5'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus cras adipiscing enim eu. Penatibus et magnis dis parturient montes nascetur ridiculus mus mauris. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At erat pellentesque adipiscing commodo. Facilisis volutpat est velit egestas dui id ornare arcu. Tellus integer feugiat scelerisque varius morbi enim nunc. Fames ac turpis egestas integer eget aliquet nibh praesent. Proin sagittis nisl rhoncus mattis rhoncus urna. At quis risus sed vulputate odio ut enim blandit. Purus semper eget duis at. Nec tincidunt praesent semper feugiat nibh. Amet consectetur adipiscing elit pellentesque habitant morbi tristique. At tempor commodo ullamcorper a lacus. Malesuada proin libero nunc consequat interdum varius sit. Sit amet porttitor eget dolor morbi non. Enim blandit volutpat maecenas volutpat blandit aliquam. Eu non diam phasellus vestibulum lorem sed risus ultricies tristique. Scelerisque purus semper eget duis at tellus at urna.
        </p>
      </>
    )
  }