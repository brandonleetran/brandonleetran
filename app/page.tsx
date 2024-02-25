import Prisma from '@/libs/Prisma'
import Link from 'next/link'
import { config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-regular-svg-icons'
import { faArrowRight, faArrowTrendUp, faDroplet } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import Image from 'next/image'
import { Tooltip } from '@nextui-org/tooltip'

config.autoAddCss = false

// make this a dynamic route segment
export const dynamic = 'force-dynamic'

// fetch drops
const fetchDropCount = async () => await Prisma.drop.count()

export default async function Page() {
  const dropCount = await fetchDropCount()

  return (
    <section>
      <h1 className='font-bold text-3xl'>Brandon Lee Tran</h1>
      <small>Frontend Software Developer</small>
      <div className='mt-5 flex gap-5 md:gap-10 items-center'>
        <Tooltip className='text-xs text-white bg-[#111010] border px-3' offset={15} color='foreground' placement='right' showArrow={false} content='Yes, this was generated using an AI'>
          <Image src='/brandonleetran.webp' alt='Brandon Lee Tran' width='100' height='100'/>
        </Tooltip>
        <div>
          <p><FontAwesomeIcon icon={faGithub} className='min-w-[30px]'/><span>135 commits to this repo</span></p>
          <p><FontAwesomeIcon icon={faArrowTrendUp} className='min-w-[30px]'/><span>0 blog views all time</span></p>
          <p><FontAwesomeIcon icon={faDroplet} className='min-w-[30px]'/><span>{dropCount} drops all time</span></p>
        </div>
      </div>
      <p className='mt-5'>Hi, I&apos;m <Link href='/about' className='text-white text-sm underline decoration-neutral-500'>Brandon</Link> 👋🏽. I am a <b>Software Developer at Gallup.</b> I am an academic lifer with a keen interest in building accessible performant sites. My passion in software is in frontend development where I have mentored students HTML, CSS, and JavaScript. This website is simply an extension of myself. Stay tuned for more updates!</p>
      <h2 className='font-bold text-2xl my-5'>Featured Posts</h2>
      <div className='h-auto flex flex-col md:flex-row gap-5 mb-5 text-md font-semibold'>
        <div className='flex-1 md:h-[200px] bg-gradient-to-r from-purple-500  to-pink-500 p-1 rounded-lg'>
          <div className='p-5 h-full bg-[#111010] rounded-md flex flex-col justify-between'>
          <h3>What&apos;s it like being a frontend software developer?</h3>
            <p className='font-thin mt-5'><span className='mr-[10px]'><FontAwesomeIcon icon={faEye} /></span>0</p>
          </div>
        </div>
        <div className='flex-1 md:h-[200px] bg-gradient-to-r from-orange-500 via-white to-yellow-500 p-1 rounded-lg'>
          <div className='p-5 h-full bg-[#111010] rounded-md flex flex-col justify-between'>
            <h3>Using React with ASP.NET Core Web API</h3>
            <p className='font-thin mt-5'><span className='mr-[10px]'><FontAwesomeIcon icon={faEye} /></span>0</p>
          </div>
        </div>
        <div className='flex-1 md:h-[200px] bg-gradient-to-r from-blue-500 to-teal-500 p-1 rounded-lg'>
          <div className='p-5 h-full bg-[#111010] rounded-md flex flex-col justify-between'>
            <h3>Learning WAI-ARIA Patterns: The Tabs Pattern</h3>
            <p className='font-thin mt-5'><span className='mr-[10px]'><FontAwesomeIcon icon={faEye} /></span>0</p>
          </div>
        </div>
      </div> 
      <Link href='/blog' className='text-neutral-400 text-sm transition-all hover:text-white'>Read all posts <FontAwesomeIcon icon={faArrowRight}/></Link>
      <h2 className='font-bold text-2xl my-5'>Highlights</h2>
      <div className='flex w-full gap-5 flex-col md:flex-row'>
        <div className='flex justify-center bg-neutral-800 px-5 py-3 border border-neutral-600 rounded items-center'>
            <a href='https://brandonleetran-resume.vercel.app' className='portfolio' target='_blank'>
              Portfolio
            </a>
        </div>
        <div className='flex justify-center bg-neutral-800 px-5 py-3 border border-neutral-600 rounded items-center'>
          <a href='https://blind-simon-says.vercel.app/' className='blind-simon-says' target='_blank'>
            Blind Simon Says
          </a>
        </div>
      </div>
    </section>
  )
}