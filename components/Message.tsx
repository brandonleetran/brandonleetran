interface MessageProps {
  children: React.ReactNode
  username: string
  avatar: string
}

export const Message = ({ children, username }: MessageProps) => {
  return (
    <div className="leading-4 md:leading-6">
      <div className="inline align-middle"><span className="text-neutral-400">{username}:</span> {children}</div>
    </div>
  )
}

export default Message
