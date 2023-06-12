import Prisma from '@/libs/Prisma'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
    // get object from body
    const res = await request.json()

    // add to database
    const result = await Prisma.drop.create({
        data: res
    })

    // TODO: Add http response
    return NextResponse.json({ result })
}