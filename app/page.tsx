import Prisma from '@/libs/Prisma'

// make this a dynamic route segment
export const dynamic = 'force-dynamic'

// fetch drops
const fetchDrops = async () => await Prisma.drop.count()

export default async function Page() {
  // const drops = await fetchDrops()

  return (
    <section>
    </section>
  )
}