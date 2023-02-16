interface MessageProps {
  children: React.ReactNode
  username: string
  avatar: string
}

export const Message = ({ children, username, avatar }: MessageProps) => {
  return (
    <div className="flex flex-row gap-1">
        <span className="bg-gray-100 h-4 w-4 rounded my-auto basis-4"></span>
        <div className="text-stone-500 font-medium">{username}:</div>
        <div>{children}</div>
    </div>
  )
}

export default Message
