'use server'
import { db } from '@/db/drizzle'
import { memberTransactionModel } from '@/db/model/member_transaction.schema'
import { eq, InferInsertModel } from 'drizzle-orm'

export const getMemberTransaction = async (member_id: number) => {
  const data = await db
    .select()
    .from(memberTransactionModel)
    .where(eq(memberTransactionModel.member_id, member_id))
  return data
}

export const createMemberTransaction = async (
  params: InferInsertModel<typeof memberTransactionModel>,
) => {
  const { member_id, amount } = params
  return await db
    .insert(memberTransactionModel)
    .values({
      member_id,
      amount,
    })
    .returning()
}
