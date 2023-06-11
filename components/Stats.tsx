import Prisma from '@/libs/Prisma'

export const dynamic = 'force-dynamic'

// fetch drops
export const fetchDrops = async () => await Prisma.drop.count()

