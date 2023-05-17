// app/page.tsx
// This file maps to the index route (/)
import Image from 'next/image'
import Logo from './Logo'

export default function Page() {
  return (
    <section className="prose prose-neutral prose-sm md:prose-md max-w-xl">
      <div className="flex flex-col-reverse md:flex-row pb-10 mb-10 bg-gradient-to-r from-rose-400 via-fuchsia-500 from-indigo-500 bg-[length:100%_2px] bg-no-repeat bg-bottom">
        <div className="basis-2/3 max-w-md">
          <h1 className="m-0">Brandon Lee Tran</h1>
          <p className="mt-1">Software Developer</p>
          <p className="mb-0 text-black">Hey, I'm Brandon. I am a <i>Systems Application Developer</i> at Gallup. I also teach high school students HTML, CSS, and JavaScript on the weekends. My focus is learning new concepts each and everday. This site is just an another extension of my own self. <b>Please stay tuned for more ongoing changes.</b></p>
        </div>
        <figure className="md:ml-auto">
          <Image width="150" height="150" className="rounded-full" src="/brandon_tran.jpg" alt="brandonleetran" />
        </figure>
      </div>
      <p className="text-black">I <b>enjoy</b> building websites, especially in front-end development. I am an academic learner, problem solver, and critical thinker. My Top 5 CliftonStrengths are <i>Achiever, Restorative, Deliberative, Learner, & Analytical</i>.</p>
      <p className="text-black">Outside of software, I am <b>passionate</b> about many pursuits. These include health/fitness, cooking, playing video games, sports, and listening to new music. My <b>favorite</b> food to cook is steak, my favorite game to play is Valorant, and my favorite teams are the Miami Heat and Minnesota Vikings.</p>
      <p className="text-black">This site is currently hosted on Vercel as it is built with <b>NextJS</b> with a <i>sprinkle</i> of <b>Tailwind</b>. You can check out my portfolio, read my blogs, or insert a drop. You can follow me on socials listed below. Thanks for reading.</p>
      <div className="flex justify-center flex-col mt-10 gap-5">
        <a href="https://github.com/brandonleetran" target="_blank" className="focus:outline-none w-full h-full border focus:border-white hover:border-white focus:bg-gradient-to-r hover:bg-gradient-to-r bg-white transition-all from-rose-400 via-fuchsia-500 from-indigo-500 no-underline rounded-lg focus:p-[3px] hover:p-[3px]">
          <div className="transition-all p-5 w-full flex flex-row justify-between rounded-md bg-white">
            <div className="flex">
              <div className="m-auto">
                <Logo path="/logos/github.png" />
              </div>
              <div className="ml-5 flex flex-col">
                <div className="font-bold">@brandonleetran</div>
                <small className="text-stone-500">Github</small>
              </div>
            </div>
            <div className="my-auto">
              <Image width="15" height="15" className="m-0 ring-gray-300" src="/logos/external-link-symbol.png" alt="Bordered avatar" />
            </div>
          </div>
        </a>

        <a href="https://www.linkedin.com/in/brandon-lee-tran" target="_blank" className="focus:outline-none w-full h-full border focus:border-white hover:border-white focus:bg-gradient-to-r hover:bg-gradient-to-r bg-white transition-all from-rose-400 via-fuchsia-500 from-indigo-500 no-underline rounded-lg focus:p-[3px] hover:p-[3px]">
          <div className="transition-all p-5 w-full flex flex-row justify-between rounded-md bg-white">
            <div className="flex">
              <div className="m-auto">
                <Logo path="/logos/linkedin.png" />
              </div>
              <div className="ml-5 flex flex-col">
                <div className="font-bold">@brandonleetran</div>
                <small className="text-stone-500">LinkedIn</small>
              </div>
            </div>
            <div className="my-auto">
              <Image width="15" height="15" className="m-0 ring-gray-300" src="/logos/external-link-symbol.png" alt="Bordered avatar" />
            </div>
          </div>
        </a>

        <a href="https://twitter.com/brandonleetrann" target="_blank" className="focus:outline-none w-full h-full border focus:border-white hover:border-white focus:bg-gradient-to-r hover:bg-gradient-to-r bg-white transition-all from-rose-400 via-fuchsia-500 from-indigo-500 no-underline rounded-lg focus:p-[3px] hover:p-[3px]">
          <div className="transition-all p-5 w-full flex flex-row justify-between rounded-md bg-white">
            <div className="flex">
              <div className="m-auto">
                <Logo path="/logos/twitter.png" />
              </div>
              <div className="ml-5 flex flex-col">
                <div className="font-bold">@brandonleetran</div>
                <small className="text-stone-500">Twitter</small>
              </div>
            </div>
            <div className="my-auto">
              <Image width="15" height="15" className="m-0 ring-gray-300" src="/logos/external-link-symbol.png" alt="Bordered avatar" />
            </div>
          </div>
        </a>
      </div>
      <h1 className="mt-10">Get in Touch</h1>
      <form>
        <label htmlFor="name">Your email</label>
        <input type="text" name="username" id="username" autoComplete="username" className="focus:focus-blue-ring w-full rounded-lg block flex-1 border bg-transparent py-2 pl-2 text-gray-900 focus:ring-fuchsia-400 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="jdoe@gmail.com"/><br/>
        <label htmlFor="subject">Your subject</label>
        <input type="text" name="subject" placeholder="Subject" className="focus:focus-blue-ring w-full rounded-lg block flex-1 border bg-transparent py-2 pl-2 text-gray-900 placeholder:text-gray-400 focus:ring-fuchsia-400 focus:ring-0 sm:text-sm sm:leading-6" /><br />
        <label htmlFor="email">Your message</label>
        <textarea name="email" placeholder="Let me know how I can help you" className="ocus:focus-blue-ring mb-2 h-32 w-full rounded-lg block flex-1 border bg-transparent py-2 pl-2 text-gray-900 focus:ring-fuchsia-400 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"/><br />
        <input type="submit" value="#send" className="bg-black/[.05] focus:focus-blue-ring hover:bg-transparent hover:border text-black cursor-pointer font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center transition-colors"/><br />
      </form>
    </section>
  )
}