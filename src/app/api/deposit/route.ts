import { createMemberTransaction, getMemberTransaction } from '@/repository/deposit.repository'
import { getMember } from '@/repository/member.repository'
import { sendTransactionNotification } from '@/service/ERP.service'
import { getServerSession } from 'next-auth'
// import { authOptions } from '../auth/[...nextauth]'

// export const dynamic = 'force-static'
interface PostDepositParams {
  amount: string
}
export async function GET() {
  const session = await getServerSession()
  if (session) {
    // Signed in
    const user = session.user
    const userId = parseInt(user?.name ?? '')
    const result = await getMemberTransaction(userId)
    return Response.json({ result: true, data: result })
  } else {
    // Not Signed in
    return Response.error()
  }
}

export async function POST(request: Request) {
  const { amount } = (await request.json()) as PostDepositParams
  const session = await getServerSession()
  if (session) {
    // Signed in
    const user = session.user
    const userId = parseInt(user?.name ?? '')
    const membersData = await getMember(userId)
    if (membersData.length <= 0) throw `Can't find member data`
    const memberData = membersData[0]
    const insertResults = await createMemberTransaction({ member_id: userId, amount: amount })
    const { amount: insertAmount, id } = insertResults[0]
    sendTransactionNotification({
      erp_member_key: memberData.erp_member_key,
      amount: parseFloat(`${insertAmount}`),
      transaction_id: id,
    })
    return Response.json({ result: true, amount })
  } else {
    // Not Signed in
    return Response.error()
  }
}
