// app/page.tsx
// This file maps to the index route (/)
import Image from 'next/image'
import SocialMedia from '../components/SocialMedia'
import { Octokit }  from 'octokit'
import Prisma from '@/libs/Prisma'

// make this a dynamic route segment
export const dynamic = 'force-dynamic'

// fetch drops
const fetchDrops = async () => await Prisma.drop.count()


// const octokit = new Octokit({
//   auth: `${process.env.GITHUB_PAT}`
// })

// const fetchCommits = async () : Promise<any | null> => {
//   try {
//     const res = await octokit.request('GET ' + `${process.env.GITHUB_CONTRIBUTORS_ENDPOINT}`, { 
//       owner: 'brandonleetran', 
//       repo: 'brandonleetran'
//     })

//     console.log(res)
    
//     if (res.status == 200) return res
//     if (res.status === 202){
//       // if the data hasn't been cached when you query a repository's statistics, 
//       // you'll receive a 202 response; a background job is also fired to start compiling these statistics.
//       // you should allow the job a short time to complete, and then submit the request again
//       // if the job has completed, that request will receive a 200 response with the statistics in the response body
//       console.log('202 Accepted. Waiting for the response...')
//       await new Promise(res => setTimeout(res, 10000))
//       return await fetchCommits()
//     }

//     // console.log(`Success! Status ${res?.status}. Rate limit remaining: ${res?.headers[ 'x-ratelimit-remaining']}`)

//   }
//   catch (error : any) {
//     console.log(error)
//     console.log(`Error! Status: ${error.status}.`)
//     return Promise<null>
//   }
// }

export default async function Page() {
  // fetchStats and log the response
  //const commits = await fetchCommits()
  const drops = await fetchDrops()
  // console.log(commits)

  // // check if the response is null or undefined
  // const { total } = (commits == (null || undefined)) ? { total: 0 } : commits.data[0]
  // console.log(`The total is ${total}!`)

  return (
    <section>
    </section>
  )
}