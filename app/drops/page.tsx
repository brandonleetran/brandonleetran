import { getServerSession } from "next-auth/next"
import authOptions from "pages/api/auth/[...nextauth]"
import Login from "components/Login"
import Message from "./Message"

export default async function Page() {
  // this is an example how to get the session from a server component
  // const session = await getServerSession(authOptions)
  //console.log(session)

  //if (!session) {
  //  return <Login />
  //}
  return (
    <div className="flex flex-col gap-2 text-xs md:text-sm lg:text-md">
      <Message avatar="" username="brandonleetran">This is currently in development</Message>
      <Message avatar="" username="mynguyen">Users will be able to authenticate via Github</Message>
      <Message avatar="" username="stevenkoontz">And will be able to send drops</Message>
      <Message avatar="" username="jaredbledsoe">That square is a placeholder for an avatar</Message>
      <Message avatar="" username="rogermarquis">This should be done by March</Message>
      <Message avatar="" username="dannydao">You can stop reading now</Message>
      <Message avatar="" username="jimmyc">Ok, maybe one more user for testing purposes</Message>
    </div>
  )
}
