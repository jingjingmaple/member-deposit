import { createMember } from '@/repository/member.repository'
import { hash } from 'bcrypt'
import { NextResponse } from 'next/server'

interface PostRegisterParams {
  username: string
  password: string
  erp_member_key: string
}

export async function POST(request: Request) {
  try {
    const { username, password, erp_member_key } = (await request.json()) as PostRegisterParams

    const hashedPassword = await hash(password, 10)

    const response = await createMember({ username, password: hashedPassword, erp_member_key })
  } catch (e) {
    console.log({ e })
  }

  return NextResponse.json({ message: 'success' })
}
