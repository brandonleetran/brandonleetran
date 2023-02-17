interface MessageProps {
  children: React.ReactNode;
  username: string
  avatar: string
}

export const Message = ({ children, username, avatar }: MessageProps) => {
  return (
    <div className="leading-4 md:leading-6">
      <div className="inline-block bg-gray-100 h-6 w-6 rounded align-middle mr-2"></div>
      <div className="inline align-middle"><span className="text-stone-500 font-medium">{username}:</span> {children}</div>
    </div>
  )
}

export default Message
