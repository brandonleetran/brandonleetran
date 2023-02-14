import { getServerSession } from "next-auth/next"
import authOptions from "pages/api/auth/[...nextauth]"
import Login from "components/Login"

export default async function Page() {
  // this is an example how to get the session from a server component
  // const session = await getServerSession(authOptions)
  //console.log(session)

  //if (!session) {
    return <Login />
  //}
}
