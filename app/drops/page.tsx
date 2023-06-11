import Login from '@/components/Login'
import Message from '@/components/Message'
import AuthContext from '@/libs/AuthContext'
import Prisma from '@/libs/Prisma'

const fetchDrops = async () => {
  const res = await Prisma.drop.findMany()
  return res
}

export default async function Page() {
  const drops = await fetchDrops()
  console.log(drops)

  return (
    <>
        <h1 className="m-0 text-2xl mb-5">Drops</h1>
        <AuthContext>
          <Login/>
        </AuthContext>
        <div className="flex flex-col gap-2 text-sm">
          {drops.map((drop) => (
            <Message key={drop.id} avatar="" username={drop.name}>{drop.message}</Message>
          ))}
        </div>
    </>
  )
}