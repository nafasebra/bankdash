import { 
  ArrowUpIcon, 
  ArrowDownIcon 
} from "@/assets/icons"

function Table() {
  return (
    <div className='p-5 bg-white overflow-hidden rounded-lg'>
      <div className="overflow-x-auto">
        <div className="inline-block min-w-full overflow-hidden" >
          <table className="min-w-full leading-normal">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th
                  className="px-5 py-3 whitespace-nowrap text-left font-semibold text-dark-blue"
                >
                  Description
                </th>
                <th
                  className="px-5 py-3 whitespace-nowrap text-left font-semibold text-dark-blue text-lg"
                >
                  Transaction ID
                </th>
                <th
                  className="px-5 py-3 whitespace-nowrap text-left font-semibold text-dark-blue text-lg"
                >
                  Type
                </th>
                <th
                  className="px-5 py-3 whitespace-nowrap text-left font-semibold text-dark-blue text-lg"
                >
                  Card
                </th>
                <th className="px-5 py-3 whitespace-nowrap text-left font-semibold text-dark-blue text-lg">
                  Date
                </th>
                <th className="px-5 py-3 whitespace-nowrap font-semibold text-dark-blue text-lg text-center">
                  Amount
                </th>
                <th className="px-5 py-3 whitespace-nowrap text-left font-semibold text-dark-blue text-lg">
                  Receipt
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-5 py-5 bg-white">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center flex-shrink-0 text-dark-blue w-10 h-10">
                      <ArrowUpIcon />
                    </div>
                    <p className="text-primary-200">
                      Molly Sanders
                    </p>
                  </div>
                </td>
                <td className="px-5 py-5 bg-white text-sm">
                  <p className="text-gray-900 whitespace-nowrap">#12548796</p>
                </td>
                <td className="px-5 py-5 bg-white text-sm">
                  <p className="text-gray-900 whitespace-nowrap">Shopping</p>
                </td>
                <td className="px-5 py-5 bg-white text-sm">
                  <p className="text-gray-900 whitespace-nowrap">1234 ****</p>
                </td>
                <td className="px-5 py-5 bg-white text-sm">
                  <p className="text-gray-900 whitespace-nowrap">28 Jan, 12.30 AM</p>
                </td>
                <td className="px-5 py-5 bg-white text-sm text-center">
                  <p className="text-magenta whitespace-nowrap">-$2,500</p>
                </td>
                <td className="px-5 py-5 bg-white text-sm text-right">
                  <a href="#" className="mx-auto flex items-center justify-center py-2 px-4 rounded-full border-2 border-dark-blue text-dark-blue text-center">Download</a>
                </td>
              </tr>
              <tr>
                <td className="px-5 py-5 bg-white">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center flex-shrink-0 text-dark-blue w-10 h-10">
                      <ArrowDownIcon />
                    </div>
                    <p className="text-primary-200">
                      Molly Sanders
                    </p>
                  </div>
                </td>
                <td className="px-5 py-5 bg-white text-sm">
                  <p className="text-gray-900 whitespace-nowrap">#12548796</p>
                </td>
                <td className="px-5 py-5 bg-white text-sm">
                  <p className="text-gray-900 whitespace-nowrap">Shopping</p>
                </td>
                <td className="px-5 py-5 bg-white text-sm">
                  <p className="text-gray-900 whitespace-nowrap">1234 ****</p>
                </td>
                <td className="px-5 py-5 bg-white text-sm">
                  <p className="text-gray-900 whitespace-nowrap">28 Jan, 12.30 AM</p>
                </td>
                <td className="px-5 py-5 bg-white text-sm text-center">
                  <p className="text-magenta whitespace-nowrap">-$2,500</p>
                </td>
                <td className="px-5 py-5 bg-white text-sm text-right">
                  <a href="#" className="mx-auto flex items-center justify-center py-2 px-4 rounded-full border-2 border-dark-blue text-dark-blue text-center">Download</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Table