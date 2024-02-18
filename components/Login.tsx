'use client'
import { useRouter } from 'next/navigation'
import { useSession, signIn, signOut } from "next-auth/react"
import Image from 'next/image'
import { useState } from 'react'

export const Login = () => {
  // instantiate hooks
  const [message, setMessage] = useState('')
  const { data: session } = useSession()
  const router = useRouter()

  // create type object for database
  type Drop = {
    name : string,
    email: string
    message : string
  }

  const createDrop = async (e : any)  => {

    // prevent default
    e.preventDefault()

    // create drop
    const drop: Drop = {
      name: session?.user.name || '',
      email: session?.user.email || '',
      message: message,
    }

    // add drop to database here
    if (message.length > 0) {
      const url = '/api/drops'
      try
      {
        const res = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(drop),
        })

        if (res.ok) {
          setMessage('')
          // reload the page
          router.refresh()
        }
        else {
          // TODO
          console.error('Failed to add a drop!')
        }
      }
      catch (error) {
        // TODO
        console.error('Tried to POST drop')
      }
    }
    else {
      // TODO
      console.log('Message is empty')
    }
  }

  if (session) {
    return (
      <>
        <form id="drops-form" onSubmit={(createDrop)} className="flex text-sm max-w-md relative">
          <input value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Add your drop..." className="text-black border rounded-md pl-3 pr-20 py-2 w-full"/>
          <button type="submit" className="rounded-md w-16 absolute text-neutral-500 hover:text-black transition-all bg-neutral-100 right-1 h-7 top-1 text-xs">Sign</button>
        </form>
        <button className="text-neutral-400 hover:text-white transition-all inline-block mt-2 mb-6 cursor-pointer text-xs" onClick={() => signOut()}>&rarr;	Sign out</button>
      </>
    )
  }
  else {
    return (
      <div className="mb-5">
        <button onClick={() => signIn('github')} className="bg-black text-white p-4 block rounded text-center cursor-pointer tracking-tight max-w-sm">
          <Image alt="Github" className="inline mr-2 align-bottom" src="/logos/github-light.png" width="25" height="25" />
          Sign in with Github
        </button>
      </div>
    )
  }
}

export default Login
