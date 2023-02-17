import { getServerSession } from "next-auth/next"
import authOptions from "pages/api/auth/[...nextauth]"
import { Login } from "components/Login"
import Message from "./Message"

export default async function Page() {
  // this is an example how to get the session from a server component
  // const session = await getServerSession(authOptions)
  //console.log(session)

  return (
    <>
        <div className="flex flex-col gap-2 text-xs md:text-sm">
          <Message avatar="" username="brandonleetran">This is currently in development</Message>
          <Message avatar="" username="mynguyen">Users will be able to authenticate via Github</Message>
          <Message avatar="" username="stevenkoontz">And will be able to send drops</Message>
          <Message avatar="" username="jaredbledsoe">That square is a placeholder for an avatar</Message>
          <Message avatar="" username="rogermarquis">This should be done by March</Message>
          <Message avatar="" username="dannydao">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quod inventore sunt esse exercitationem cupiditate fuga possimus est, similique quam soluta deserunt illo eaque, molestias neque amet? Aliquam deserunt alias, accusantium eum facilis exercitationem ipsum in officiis aut, quibusdam porro consequuntur pariatur rerum dignissimos cupiditate optio soluta.</Message>
          <Message avatar="" username="jimmyc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime laboriosam esse tempora reprehenderit quisquam assumenda ipsam vero impedit quibusdam, ipsum dignissimos, fugit, veniam vel provident. Quia quasi veritatis omnis? Deserunt assumenda cupiditate nesciunt dolores placeat iure praesentium omnis, animi perferendis cumque nisi id accusantium est minus magnam possimus delectus iusto totam fuga eum dolorem vitae. Illo at ex asperiores accusantium eius. Assumenda animi illum suscipit aliquam possimus nostrum aliquid ducimus laboriosam architecto, ullam blanditiis beatae enim, in modi libero, quas provident. Nisi assumenda molestiae, alias tempora repellat fugiat beatae ipsum atque dicta tempore esse, dolorem sed facere voluptatum voluptatibus ratione!</Message>
        </div>
        <Login/>
    </>
  )
}
