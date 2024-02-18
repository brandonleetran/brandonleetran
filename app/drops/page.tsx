import Login from '@/components/Login'
import Message from '@/components/Message'
import AuthContext from '@/libs/AuthContext'
import Prisma from '@/libs/Prisma'

export const dynamic = 'force-dynamic'

const fetchDrops = async () => {
  return await Prisma.drop.findMany()
}

export default async function Page() {
  let drops = await fetchDrops()
  drops = drops.reverse()
  return (
    <>
        <h1 className="text-medium text-2xl mb-5">sign a drop</h1>
        <AuthContext>
          <Login/>
        </AuthContext>
        <div className="flex flex-col gap-2 text-sm">
          {drops.map((drop : any) => (
            <Message key={drop.id} avatar="" username={drop.name}>{drop.message}</Message>
          ))}
        </div>
    </>
  )
}