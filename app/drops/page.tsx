import { getServerSession } from "next-auth/next"
import authOptions from "pages/api/auth/[...nextauth]"
import { Login } from "components/Login"
import Message from "../../components/Message"

// export default async function Page() {
//   // this is an example how to get the session from a server component
//   // const session = await getServerSession(authOptions)
//   //console.log(session)

//   return (
//     <>
//         <h1 className="m-0 text-2xl mb-5">#drops</h1>
//         <Login/>
//         <div className="flex flex-col gap-2 text-sm">
//           <Message avatar="" username="brandonleetran">This is currently in development</Message>
//           <Message avatar="" username="brandonleetran">This is currently in development</Message>
//         </div>
//     </>
//   )
// }

export default function Page() {
  return <div className="prose">Under development</div>
}