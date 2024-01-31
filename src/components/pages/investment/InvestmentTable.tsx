import { AppleIcon } from "@/assets/icons"

function InvestmentTable() {
  return (
    <div className="overflow-hidden">
      <ul className="min-w-full overflow-x-auto space-y-3">
        {
          Array.from({length: 4}).map((_, index) => (
            <li key={index} className="min-w-[700px] bg-white rounded-lg flex gap-8 justify-between items-center py-4 px-5">
              <div className="flex items-center gap-5">
                <div className={`w-14 h-14 flex items-center justify-center rounded-full bg-magenta/20 text-magenta`}>
                  <div className="w-6 h-6 flex items-center justify-center">
                    <AppleIcon />
                  </div>
                </div>
                <div className="text-lg flex flex-col whitespace-nowrap">
                  <p className="text-black leading-0">Apple Store </p>
                  <p className="text-primary-400 leading-0">E-commerce, Marketplace</p>
                </div>
              </div>
              <div className="text-lg flex flex-col whitespace-nowrap">
                <p className="text-black leading-0">$54,000 </p>
                <p className="text-primary-400 leading-0">Envestment Value</p>
              </div>
              <div className="text-lg flex flex-col whitespace-nowrap">
                <p className="text-cyan leading-0">+16%</p>
                <p className="text-primary-400 leading-0">Return Value</p>
              </div>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default InvestmentTable