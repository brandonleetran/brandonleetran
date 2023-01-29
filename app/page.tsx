// app/page.tsx
// This file maps to the index route (/)
import Image from 'next/image'
import Logo from './logo'

export default function Page() {
  return (
    <>
      <div className="flex flex-col-reverse md:flex-row pb-10 bg-gradient-to-r from-rose-400 via-fuchsia-500 from-indigo-500 bg-[length:100%_2px] bg-no-repeat bg-bottom">
        <div className="pr-1 max-w-md">
          <h1 className="font-bold md:text-4xl mt-3 md:mt-0 text-gray-700">Brandon Lee Tran</h1>
          <p className="text-xs md:text-sm md:pt-3">Software Developer</p>
          <p className="mt-2 md:mt-4 text-sm text-zinc-700">Welcome, I am a Software Developer based in Omaha, NE with a passion for full-stack development. I enjoy learning new technologies and gaming on the side. This site is currently under development. Please stay tuned for more ongoing changes.</p>
        </div>
        <div className="md:ml-auto ml-0">
          <Image width="150" height="150" className="rounded-full" src="/brandon_tran.jpg" alt="Brandon Lee Tran" />
        </div>
      </div>
      <div>
        <h2 className="font-bold text-2xl text-gray-700 mt-10">Skills</h2>
        <div className="mt-5 flex-wrap flex gap-y-2.5	gap-x-5">
          <Logo path="/logos/html.png" />
          <Logo path="/logos/css-3.png" />
          <Logo path="/logos/js.png" />
          <Logo path="/logos/bootstrap.png" />
          <Logo path="/logos/tailwind.png" />
          <Logo path="/logos/react.png" />
          <Logo path="/logos/next.png" />
          <Logo path="/logos/java.png" />
          <Logo path="/logos/c-sharp.png" />
          <Logo path="/logos/aws.png" />
          <Logo path="/logos/github.png" />
          <Logo path="/logos/vs.png" />
          <Logo path="/logos/vscode.png" />
        </div>
      </div>
      <div>
        <h2 className="font-bold text-2xl text-gray-700 mt-10">Qualifications</h2>
        <p className="mt-5 text-sm">In Development</p>
      </div>
      <div>
        <h2 className="font-bold text-2xl text-gray-700 mt-10">Blog</h2>
        <p className="mt-5 text-sm">In Development</p>
      </div>
      <div>
        <h2 className="font-bold text-2xl text-gray-700 mt-10">Get In Touch</h2>
        <p className="mt-5 text-sm">In Development</p>
      </div>
    </>
  );
}