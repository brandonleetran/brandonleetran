// app/page.tsx
// This file maps to the index route (/)
import Image from 'next/image'
import SocialMedia from '../components/SocialMedia'
import { Octokit }  from 'octokit'
import { fetchDrops } from '@/components/Stats'

const octokit = new Octokit({
  auth: `${process.env.GITHUB_PAT}`
})

export const dynamic = 'force-dynamic'

const fetchCommits = async () : Promise<any | null> => {
  try {
    const res = await octokit.request('GET ' + `${process.env.GITHUB_CONTRIBUTORS_ENDPOINT}`, { 
      owner: 'brandonleetran', 
      repo: 'brandonleetran'
    })

    console.log(res)
    
    if (res.status == 200) return res
    if (res.status === 202){
      // if the data hasn't been cached when you query a repository's statistics, 
      // you'll receive a 202 response; a background job is also fired to start compiling these statistics.
      // you should allow the job a short time to complete, and then submit the request again
      // if the job has completed, that request will receive a 200 response with the statistics in the response body
      console.log('202 Accepted. Waiting for the response...')
      await new Promise(res => setTimeout(res, 10000))
      return await fetchCommits()
    }

    // console.log(`Success! Status ${res?.status}. Rate limit remaining: ${res?.headers[ 'x-ratelimit-remaining']}`)

  }
  catch (error : any) {
    console.log(error)
    console.log(`Error! Status: ${error.status}.`)
    return Promise<null>
  }
}

export default async function Page() {
  // fetchStats and log the response
  const commits = await fetchCommits()
  const drops = await fetchDrops()

  console.log(drops)
  console.log(commits)

  // check if the response is null or undefined
  const { total } = (commits == (null || undefined)) ? { total: 0 } : commits.data[0]
  console.log(`The total is ${total}!`)

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
              <a target="_blank" rel="noreferrer" className="flex items-center gap-2 text-stone-500 align-top no-underline font-normal" href="/drops">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 50 50">
              <path fill="#231F20" d="M23.779,40.594c6.617,0,12-5.188,12-11.564c0-2.114-0.599-4.184-1.749-6.012L24.599,9.035  c-0.186-0.276-0.497-0.441-0.829-0.441c-0.333,0-0.644,0.166-0.829,0.441l-9.436,14.018c-1.129,1.798-1.726,3.865-1.726,5.976  C11.779,35.406,17.162,40.594,23.779,40.594z M15.181,24.144l8.59-12.76l8.584,12.726c0.933,1.482,1.425,3.184,1.425,4.92  c0,5.274-4.486,9.564-10,9.564s-10-4.291-10-9.564C13.779,27.295,14.271,25.596,15.181,24.144z"/>
              </svg>{drops} drops all time</a>
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