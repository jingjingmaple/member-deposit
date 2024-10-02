import axios from 'axios'

export async function sendTransactionNotification(payload: {
  erp_member_key: string
  amount: number
  transaction_id: number
}) {
  return await axios.post('https://httpbin.org/post', payload).then((result) => {
    return result.data
  })
}
