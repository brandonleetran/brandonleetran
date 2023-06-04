'use client'
import { useSession } from "next-auth/react"

interface MessageProps {
  children: React.ReactNode;
  username: string
  avatar: string
}

export const Message = ({ children, username, avatar }: MessageProps) => {
  const { data: session } = useSession()

  return (
    <div className="leading-4 md:leading-6">
      <img src={session?.user.image} className="inline-block bg-gray-100 h-6 w-6 rounded align-middle mr-2"></img>
      <div className="inline align-middle"><span className="text-stone-500">{username}:</span> {children}</div>
    </div>
  )
}

export default Message
