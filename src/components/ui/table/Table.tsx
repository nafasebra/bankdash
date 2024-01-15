import { ArrowUpIcon, ArrowDownIcon } from "@/assets/icons"

function Table() {
  return (
    <div className='p-5 bg-white overflow-hidden rounded-lg'>
      <div className="overflow-x-auto">
        <div className="inline-block min-w-full overflow-hidden" >
          <table className="min-w-full leading-normal">
            <thead>
              <tr>
                <th
                  className="px-5 py-3 border-b-2 border-gray-200 text-left  font-semibold text-dark-blue"
                >
                  Client / Invoice
                </th>
                <th
                  className="px-5 py-3 border-b-2 border-gray-200 text-left  font-semibold text-dark-blue text-lg"
                >
                  Amount
                </th>
                <th
                  className="px-5 py-3 border-b-2 border-gray-200 text-left  font-semibold text-dark-blue text-lg"
                >
                  Issued / Due
                </th>
                <th
                  className="px-5 py-3 border-b-2 border-gray-200 text-left  font-semibold text-dark-blue text-lg"
                >
                  Status
                </th>
                <th
                  className="px-5 py-3 border-b-2 border-gray-200"
                ></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center flex-shrink-0 text-dark-blue w-10 h-10">
                      <ArrowUpIcon />
                    </div>
                    <p className="text-primary-200">
                      Molly Sanders
                    </p>
                  </div>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">$20,000</p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">Sept 28, 2019</p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <span
                    className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
                  >
                    <span
                      aria-hidden
                      className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                    ></span>
                    <span className="relative">Paid</span>
                  </span>
                </td>
                <td
                  className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right"
                >
                  <button
                    type="button"
                    className="inline-block text-dark-blue text-lg hover:text-gray-700"
                  >
                    <svg
                      className="inline-block h-6 w-6 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"
                      />
                    </svg>
                  </button>
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