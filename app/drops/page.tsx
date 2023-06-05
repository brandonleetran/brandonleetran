import Login from '@/components/Login'
import Message from "@/components/Message"
import AuthContext from "@/components/AuthContext"

export default async function Page() {
  return (
    <>
        <h1 className="m-0 text-2xl mb-5">Drops</h1>
        <AuthContext>
          <Login/>
        </AuthContext>
        <div className="flex flex-col gap-2 text-sm">
          <Message avatar="" username="brandonleetran">This is currently in development</Message>
          <Message avatar="" username="brandonleetran">This is currently in development</Message>
        </div>
    </>
  )
}