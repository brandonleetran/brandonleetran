// app/page.tsx
// This file maps to the index route (/)
import Image from 'next/image'
import Logo from './logo'

export default function Page() {
  return (
    <section className="prose prose-zinc prose-sm md:prose-md">
      <div className="flex flex-col-reverse md:flex-row pb-10 mb-10 bg-gradient-to-r from-rose-400 via-fuchsia-500 from-indigo-500 bg-[length:100%_2px] bg-no-repeat bg-bottom">
        <div className="basis-2/3 max-w-md">
          <h1 className="m-0">Brandon Lee Tran</h1>
          <p className="mt-1">Software Developer</p>
          <p className="mb-0">Welcome, I am a Front-end Developer based in Omaha, NE with a passion for full-stack development. I enjoy learning new technologies, cooking, and gaming on the side. This site is currently under development. Please stay tuned for more ongoing changes.</p>
        </div>
        <figure className="md:ml-auto">
          <Image width="150" height="150" className="rounded-full" src="/brandon_tran.jpg" alt="brandonleetran" />
        </figure>
      </div>
      <h2>Skills</h2>
      <div className="flex-wrap flex gap-x-5">
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
      <h2>Qualifications</h2>
      <p>In Development</p>
      <h2>Blog</h2>
      <p>In Development</p>
      <h2>Get In Touch</h2>
      <p>In Development</p>
    </section>
  );
}