'use server'
import { db } from '@/db/drizzle'
import { Member, memberModel } from '@/db/model/member.schema'
import { eq, InferInsertModel, InferSelectModel } from 'drizzle-orm'
import { revalidatePath } from 'next/cache'

export const getMember = async () => {
  const data = await db.select().from(memberModel)
  return data
}

export const findMemberByUsername = async (username: string): Promise<Member> => {
  const data = await db.select().from(memberModel).where(eq(memberModel.username, username))
  if (data.length <= 0) throw `Can't find user.`
  return data[0]
}

export const createMember = async (params: InferInsertModel<typeof memberModel>) => {
  const { username, password, erp_member_key } = params
  await db.insert(memberModel).values({
    username,
    password,
    erp_member_key,
    status: true,
  })
}

export const deleteMember = async (id: number) => {
  await db.delete(memberModel).where(eq(memberModel.id, id))

  revalidatePath('/')
}

export const updateMember = async (id: number, params: InferSelectModel<typeof memberModel>) => {
  await db.update(memberModel).set(params).where(eq(memberModel.id, id))

  revalidatePath('/')
}
