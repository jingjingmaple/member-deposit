const HistoryPage = () => {
  return (
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
        <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
          <th
            scope="row"
            className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
          >
            19 September 2024 08:34
          </th>

          <td className="px-6 py-4">$2999</td>
        </tr>
        <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
          <th
            scope="row"
            className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
          >
            19 September 2024 08:34
          </th>
          <td className="px-6 py-4">$1999</td>
        </tr>
      </tbody>
    </table>
  )
}

export default HistoryPage
