'use client'

import { useSession, signIn, signOut } from "next-auth/react"

export const Login = () => {
  // this is an example on how to get the session from the client side
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        <form className="mb-5 text-sm max-w-md">
          <input placeholder="Send your drop" className=" border rounded px-3 py-2 transition-colors focus:outline-none focus:border-2 focus:border-fuchsia-600 focus:border-opacity-30 w-full">
          </input>
          <a className="inline-block mt-2 cursor-pointer text-xs" onClick={() => signOut()}>Sign out</a>
        </form>
      </>
    )
  }
  return (
    <div className="mb-5">
      <a className="bg-black text-white p-4 block rounded text-center cursor-pointer tracking-tight max-w-sm" onClick={() => signIn('github')}>
        <img className="inline mr-2 align-bottom" src="/logos/github-light.png" width="25" height="25" />
        Sign in with Github</a>
    </div>
  )
}

export default Login
