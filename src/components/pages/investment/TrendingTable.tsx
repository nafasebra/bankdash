function TrendingTable() {
  return (
    <div className="p-2 bg-white overflow-hidden rounded-lg">
      <div className="overflow-x-auto">
        <div className="min-w-full overflow-hidden">
          <table className="min-w-full leading-normal">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="px-5 py-3 whitespace-nowrap text-left font-semibold text-primary-400">
                  SL No
                </th>
                <th className="px-5 py-3 whitespace-nowrap text-left font-semibold text-primary-400">
                  Name
                </th>
                <th className="px-5 py-3 whitespace-nowrap text-left font-semibold text-primary-400">
                  Price
                </th>
                <th className="px-5 py-3 whitespace-nowrap text-left font-semibold text-primary-400">
                  Return
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-5 py-5 bg-white">
                  <p className="whitespace-nowrap"> 01. </p>
                </td>
                <td className="px-5 py-5 bg-white text-sm">
                  <p className="whitespace-nowrap">Trivago</p>
                </td>
                <td className="px-5 py-5 bg-white text-sm">
                  <p className="whitespace-nowrap">$520</p>
                </td>
                <td className="px-5 py-5 bg-white text-sm">
                  <p className="text-cyan whitespace-nowrap">+5%</p>
                </td>
              </tr>
              <tr>
                <td className="px-5 py-5 bg-white">
                  <p className="whitespace-nowrap"> 01. </p>
                </td>
                <td className="px-5 py-5 bg-white text-sm">
                  <p className="whitespace-nowrap">Trivago</p>
                </td>
                <td className="px-5 py-5 bg-white text-sm">
                  <p className="whitespace-nowrap">$520</p>
                </td>
                <td className="px-5 py-5 bg-white text-sm">
                  <p className="text-cyan whitespace-nowrap">+5%</p>
                </td>
              </tr>
              <tr>
                <td className="px-5 py-5 bg-white">
                  <p className="whitespace-nowrap"> 01. </p>
                </td>
                <td className="px-5 py-5 bg-white text-sm">
                  <p className="whitespace-nowrap">Trivago</p>
                </td>
                <td className="px-5 py-5 bg-white text-sm">
                  <p className="whitespace-nowrap">$520</p>
                </td>
                <td className="px-5 py-5 bg-white text-sm">
                  <p className="text-cyan whitespace-nowrap">+5%</p>
                </td>
              </tr>
              <tr>
                <td className="px-5 py-5 bg-white">
                  <p className="whitespace-nowrap"> 01. </p>
                </td>
                <td className="px-5 py-5 bg-white text-sm">
                  <p className="whitespace-nowrap">Trivago</p>
                </td>
                <td className="px-5 py-5 bg-white text-sm">
                  <p className="whitespace-nowrap">$520</p>
                </td>
                <td className="px-5 py-5 bg-white text-sm">
                  <p className="text-cyan whitespace-nowrap">+5%</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default TrendingTable