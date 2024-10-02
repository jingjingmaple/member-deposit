'use client'
import moment from 'moment'
import { useEffect, useState } from 'react'

const HistoryPage = () => {
  const [data, setData] = useState<any>(null)
  useEffect(() => {
    fetch('/api/deposit').then(async (result: any) => {
      const response = await result.json()
      console.log('result', response)
      setData(response.data)
    })
  }, [])
  return !data ? (
    <div>Loading...</div>
  ) : (
    <table className="w-full text-left text-sm text-gray-500 rtl:text-right dark:text-gray-400">
      <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="px-6 py-3">
            Time
          </th>

          <th scope="col" className="px-6 py-3">
            Amount
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((item: any) => (
          <tr key={item.id} className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
            <th
              scope="row"
              className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
            >
              {moment(item.created_at).format('dddd D, MMMM YYYY, HH:mm:ss')}
            </th>

            <td className="px-6 py-4">{item.amount} THB</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default HistoryPage
