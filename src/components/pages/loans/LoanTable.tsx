function LoanTable() {
  return (
    <div className="overflow-x-auto">
      <div className="inline-block min-w-full overflow-hidden">
        <table className="min-w-full leading-normal">
          <thead>
            <tr className="border-b-2 border-gray-200">
              <th className="px-5 py-3 whitespace-nowrap text-left font-semibold text-primary-400">
                SL No
              </th>
              <th className="px-5 py-3 whitespace-nowrap text-left font-semibold text-primary-400 text-lg">
                Loan Money
              </th>
              <th className="px-5 py-3 whitespace-nowrap text-left font-semibold text-primary-400 text-lg">
                Left to repay
              </th>
              <th className="px-5 py-3 whitespace-nowrap text-left font-semibold text-primary-400 text-lg">
                Duration
              </th>
              <th className="px-5 py-3 whitespace-nowrap font-semibold text-primary-400 text-lg text-center">
                Interest rate
              </th>
              <th className="px-5 py-3 whitespace-nowrap text-left font-semibold text-primary-400 text-lg">
                Installment
              </th>
              <th className="px-5 py-3 whitespace-nowrap text-left font-semibold text-primary-400 text-lg">
                Repay
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr>
              <td className="px-5 py-5 bg-white">
                <p className="whitespace-nowrap"> 01. </p>
              </td>
              <td className="px-5 py-5 bg-white text-sm">
                <p className="whitespace-nowrap">#$100,000</p>
              </td>
              <td className="px-5 py-5 bg-white text-sm">
                <p className="whitespace-nowrap">$40,500</p>
              </td>
              <td className="px-5 py-5 bg-white text-sm">
                <p className="whitespace-nowrap">8 Months</p>
              </td>
              <td className="px-5 py-5 bg-white text-sm">
                <p className="whitespace-nowrap">12%</p>
              </td>
              <td className="px-5 py-5 bg-white text-sm text-center">
                <p className="whitespace-nowrap">$2,000 / month</p>
              </td>
              <td className="px-5 py-5 bg-white text-sm text-right">
                <a
                  href="#"
                  className="mx-auto flex items-center justify-center py-2 px-4 rounded-full border-2 border-primary-100 text-primary-100 text-center"
                >
                  Reply
                </a>
              </td>
            </tr>
            <tr>
              <td className="px-5 py-5 bg-white">
                <p className="whitespace-nowrap"> 01. </p>
              </td>
              <td className="px-5 py-5 bg-white text-sm">
                <p className="whitespace-nowrap">#$100,000</p>
              </td>
              <td className="px-5 py-5 bg-white text-sm">
                <p className="whitespace-nowrap">$40,500</p>
              </td>
              <td className="px-5 py-5 bg-white text-sm">
                <p className="whitespace-nowrap">8 Months</p>
              </td>
              <td className="px-5 py-5 bg-white text-sm">
                <p className="whitespace-nowrap">12%</p>
              </td>
              <td className="px-5 py-5 bg-white text-sm text-center">
                <p className="whitespace-nowrap">$2,000 / month</p>
              </td>
              <td className="px-5 py-5 bg-white text-sm text-right">
                <a
                  href="#"
                  className="mx-auto flex items-center justify-center py-2 px-4 rounded-full border-2 border-black text-black text-center"
                >
                  Reply
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default LoanTable;
