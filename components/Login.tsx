'use client'

import { useSession, signIn, signOut } from "next-auth/react"

export default function Login() {
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
    <>
      Not signed in <br />
      <a onClick={() => signIn('github')}>Sign in</a>
    </>
  )
}
