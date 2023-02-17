'use client'

import { useSession, signIn, signOut } from "next-auth/react"

export const Login = () => {
  // this is an example on how to get the session from the client side
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        Signed in as {session.user?.name} <br />
        <a onClick={() => signOut()}>Sign out</a>
      </>
    )
  }
  return (
    <div className="mt-10">
      <a className="bg-black text-white p-4 block md:inline rounded text-center cursor-pointer tracking-tight" onClick={() => signIn('github')}>
        <img className="inline mr-2 align-bottom" src="/logos/github-light.png" width="25" height="25"/>
        Sign in with Github</a>
    </div>
  )
}

export default Login
