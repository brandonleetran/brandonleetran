'use client'

import { useSession, signIn, signOut } from "next-auth/react"
import Image from 'next/image'

export const Login = () => {
  // this is an example on how to get the session from the client side
  const { data: session } = useSession()
  if (!session) {
    return (
      <>
        <form className="flex text-sm max-w-md relative">
          <input placeholder="Add your drop..." className="text-black border focus:outline-none rounded-md pl-3 pr-20 py-2 w-full"/>
          <button className="rounded-md w-16 absolute text-neutral-500 hover:text-black transition-all bg-neutral-100 right-1 h-7 top-1 text-xs">Sign</button>
        </form>
        <a className="text-neutral-400 hover:text-white transition-all inline-block mt-2 mb-6 cursor-pointer text-xs" onClick={() => signOut()}>&rarr;	Sign out</a>
      </>
    )
  }
  else {
    return (
      <div className="mb-5">
        <a onClick={() => signIn('github')} className="bg-black text-white p-4 block rounded text-center cursor-pointer tracking-tight max-w-sm">
          <Image alt="Github" className="inline mr-2 align-bottom" src="/logos/github-light.png" width="25" height="25" />
          Sign in with Github
        </a>
      </div>
    )
  }
}

export default Login
