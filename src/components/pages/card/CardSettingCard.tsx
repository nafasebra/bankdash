import { AppleIcon, CashOIcon, GoogleIcon, LockIcon } from '@/assets/icons'

function CardSettingCard() {
  return (
    <ul className="text-primary-200 space-y-6">
      <li className="flex items-center gap-3">
        <div className="w-[55px] h-[55px] flex items-center justify-center bg-yellow/20 text-yellow rounded-2xl">
          <div className="w-6 h-6">
            <CashOIcon />
          </div>
        </div>
        <div className="w-[calc(100%-55px-0.75rem)] space-y-1">
          <p className="text-black text-lg">Block Card</p>
          <p className="text-primary-400">Instantly block your card</p>
        </div>
      </li>
      <li className="flex items-center gap-3">
        <div className="w-[55px] h-[55px] flex items-center justify-center bg-primary/20 text-primary rounded-2xl">
          <div className="w-6 h-6">
            <LockIcon />
          </div>
        </div>
        <div className="w-[calc(100%-55px-0.75rem)] space-y-1">
          <p className="text-black text-lg">Change Pic Code</p>
          <p className="text-primary-400">Withdraw without any card</p>
        </div>
      </li>
      <li className="flex items-center gap-3">
        <div className="w-[55px] h-[55px] flex items-center justify-center bg-magenta/20 text-magenta rounded-2xl">
          <div className="w-6 h-6">
            <GoogleIcon />
          </div>
        </div>
        <div className="w-[calc(100%-55px-0.75rem)] space-y-1">
          <p className="text-black text-lg">Add to Google Pay</p>
          <p className="text-primary-400">Withdraw without any card</p>
        </div>
      </li>
      <li className="flex items-center gap-3">
        <div className="w-[55px] h-[55px] flex items-center justify-center bg-cyan/20 text-cyan rounded-2xl">
          <div className="w-6 h-6">
            <AppleIcon />
          </div>
        </div>
        <div className="w-[calc(100%-55px-0.75rem)] space-y-1">
          <p className="text-black text-lg">Add to Apple Pay</p>
          <p className="text-primary-400">Withdraw without any card</p>
        </div>
      </li>
      <li className="flex items-center gap-3">
        <div className="w-[55px] h-[55px] flex items-center justify-center bg-cyan/20 text-cyan rounded-2xl">
          <div className="w-6 h-6">
            <AppleIcon />
          </div>
        </div>
        <div className="w-[calc(100%-55px-0.75rem)] space-y-1">
          <p className="text-black text-lg">Add to Apple Store</p>
          <p className="text-primary-400">Withdraw without any card</p>
        </div>
      </li>
    </ul>
  )
}

export default CardSettingCard