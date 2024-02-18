import Link from 'next/link'

export default function Page() {
    return (
      <>
        <h1 className="text-medium text-2xl mb-5">my work</h1>
        <p className="mb-2">This is currently under development.</p>
        <p>In the meantime, please navigate to <Link className="text-white font-semibold px-[5px] pb-[2px] bg-zinc-800 rounded border" href="https://brandonleetran-resume.vercel.app/"> &#128187;brandonleetran-resume</Link>.</p>
      </>
    )
  }