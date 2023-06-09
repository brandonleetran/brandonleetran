// app/page.tsx
// This file maps to the index route (/)
import Image from 'next/image'
import SocialMedia from '../components/SocialMedia'
import { Octokit } from 'octokit'

const octokit = new Octokit({
  auth: `${process.env.GITHUB_PAT}`
})

const fetchStats = async() => await octokit.request('GET ' + `${process.env.GITHUB_CONTRIBUTORS_ENDPOINT}`, { 
    owner: 'brandonleetran', 
    repo: 'brandonleetran',
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  }
)

export default async function Page() {
  const res = await fetchStats()
  const { total } = res.data[0]
  console.log(total)

  return (
    <section className="prose prose-neutral prose-sm md:prose-md max-w-xl">
      <div className="md:p-5 flex justify-start md:gap-10 flex-col md:flex-row bg-gradient-to-r from-rose-400 via-fuchsia-500 from-indigo-500 bg-[length:100%_2px] bg-no-repeat bg-bottom">
        <figure className="m-0 md:my-auto">
        <Image width="150" height="150" className="rounded-full" src="/brandon_tran.jpg" alt="brandonleetran" />
        </figure>
        <div className="pt-5 mb-5">
        <h1 className="m-0">Brandon Lee Tran</h1>
          <span>Software Developer</span>
          <div className="mt-3 flex flex-col gap-2">
            <a target="_blank" rel="noreferrer" className="flex items-center gap-2 text-stone-500 align-top no-underline font-normal" href="https://www.github.com/brandonleetran/brandonleetran">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>{total} commits on this repo</a>
              <a target="_blank" rel="noreferrer" className="flex items-center gap-2 text-stone-500 align-top no-underline font-normal" href="https://www.twitter.com/brandonleetrann">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>38k tweets all time</a>
              <a target="_blank" rel="noreferrer" className="flex items-center gap-2 text-stone-500 align-top no-underline font-normal" href="/blog">
              <svg className="h-5 w-5" width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.25 18.0001L9 11.2501L13.306 15.5571C14.5507 13.1029 16.6044 11.1535 19.12 10.0381L21.86 8.81809M21.86 8.81809L15.92 6.53809M21.86 8.81809L19.58 14.7591" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
              0 blog views all time</a>
          </div>
        </div>
      </div>

      <p className="mt-5 text-black">Hey, I&apos;m Brandon. I am a <i>Systems Application Developer</i> at Gallup. I am passionate about mentoring. My focus is learning new concepts each and everday. This site is just an another extension of my own self. <b>Please stay tuned for more ongoing changes.</b></p>
      <p className="text-black">I <b>enjoy</b> building websites, especially in front-end development. I am an academic learner, problem solver, and critical thinker. My Top 5 CliftonStrengths are <i>Achiever, Restorative, Deliberative, Learner, & Analytical</i>.</p>
      <p className="text-black">Outside of software, I am <b>passionate</b> about many pursuits. These include health/fitness, cooking, playing video games, sports, and listening to new music. My <b>favorite</b> food to cook is steak, my favorite game to play is Valorant, and my favorite teams are the Miami Heat and Minnesota Vikings.</p>
      <div className="flex justify-center flex-col mt-10 gap-5">
        <SocialMedia href="https://github.com/brandonleetran" username="@brandonleetran" application="GitHub" logoPath="/logos/github.png"/>
        <SocialMedia href="https://www.linkedin.com/in/brandon-lee-tran" username="@brandonleetran" application="LinkedIn" logoPath="/logos/linkedin.png"/>
        <SocialMedia href="https://www.twitter.com/brandonleetrann" username="@brandonleetrann" application="Twitter" logoPath='/logos/twitter.png'/>
      </div>
      <h2 className="mt-10">Get in Touch</h2>
      <form>
        <label className="text-xs" htmlFor="name">Your email</label>
        <input required type="text" name="username" id="username" autoComplete="username" className="mb-2 focus:focus-blue-ring w-full rounded-lg block flex-1 border bg-transparent py-2 pl-2 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6" placeholder="jdoe@gmail.com"/>
        
        <label className="text-xs" htmlFor="subject">Your subject</label>
        <input required type="text" name="subject" placeholder="Subject" className="mb-2 focus:focus-blue-ring w-full rounded-lg block flex-1 border bg-transparent py-2 pl-2 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6" />
        
        <label className="text-xs" htmlFor="email">Your message</label>
        <textarea required name="email" placeholder="Let me know how I can help you" className="mb-4 focus:focus-blue-ring h-32 w-full rounded-lg block flex-1 border bg-transparent py-2 pl-2 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6"/>
        
        <input type="submit" value="send" className="kaisei cursor-pointer py-1 px-4 rounded-md text-stone-500 hover:text-black transition-all bg-black/[.05] text-sm w-full sm:w-auto"/>
      </form>
    </section>
  )
}