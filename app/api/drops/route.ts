import Prisma from '@/libs/Prisma'

export async function POST(request: Request) {
    // get object from body
    const res = await request.json()

    // add to database
    await Prisma.drop.create({
        data: res
    })

    // TODO: Add http response
}