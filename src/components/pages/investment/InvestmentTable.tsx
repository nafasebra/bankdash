import { AppleIcon } from "@/assets/icons"

function InvestmentTable() {
  return (
    <div className="overflow-x-hidden">
      <div className="overflow-x-auto space-y-3">
        <div className="bg-white rounded-lg flex gap-10 justify-between py-4 px-5">
          <div className={`w-12 h-12 flex items-center justify-center rounded-full bg-magenta/20 text-magenta`}>
            <div className="w-6 h-6 flex items-center justify-center">
              <AppleIcon />
            </div>
          </div>
          <div className="text-lg flex flex-col whitespace-nowrap">
            <p className="text-black leading-0">Apple Store </p>
            <p className="text-primary-400 leading-0">E-commerce, Marketplace</p>
          </div>
          <div className="text-lg flex flex-col whitespace-nowrap">
            <p className="text-black leading-0">$54,000 </p>
            <p className="text-primary-400 leading-0">Envestment Value</p>
          </div>
          <div className="text-lg flex flex-col whitespace-nowrap">
            <p className="text-cyan leading-0">+16%</p>
            <p className="text-primary-400 leading-0">Return Value</p>
          </div>
        </div>
        <div className="bg-white rounded-lg flex gap-10 justify-between py-4 px-5">
          <div className={`w-12 h-12 flex items-center justify-center rounded-full bg-magenta/20 text-magenta`}>
            <div className="w-6 h-6 flex items-center justify-center">
              <AppleIcon />
            </div>
          </div>
          <div className="text-lg flex flex-col whitespace-nowrap">
            <p className="text-black leading-0">Apple Store </p>
            <p className="text-primary-400 leading-0">E-commerce, Marketplace</p>
          </div>
          <div className="text-lg flex flex-col whitespace-nowrap">
            <p className="text-black leading-0">$54,000 </p>
            <p className="text-primary-400 leading-0">Envestment Value</p>
          </div>
          <div className="text-lg flex flex-col whitespace-nowrap">
            <p className="text-cyan leading-0">+16%</p>
            <p className="text-primary-400 leading-0">Return Value</p>
          </div>
        </div>
        <div className="bg-white rounded-lg flex gap-10 justify-between py-4 px-5">
          <div className={`w-12 h-12 flex items-center justify-center rounded-full bg-magenta/20 text-magenta`}>
            <div className="w-6 h-6 flex items-center justify-center">
              <AppleIcon />
            </div>
          </div>
          <div className="text-lg flex flex-col whitespace-nowrap">
            <p className="text-black leading-0">Apple Store </p>
            <p className="text-primary-400 leading-0">E-commerce, Marketplace</p>
          </div>
          <div className="text-lg flex flex-col whitespace-nowrap">
            <p className="text-black leading-0">$54,000 </p>
            <p className="text-primary-400 leading-0">Envestment Value</p>
          </div>
          <div className="text-lg flex flex-col whitespace-nowrap">
            <p className="text-cyan leading-0">+16%</p>
            <p className="text-primary-400 leading-0">Return Value</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InvestmentTable