import { AccountOIcon, RenewIcon, SettingO2Icon } from "@/assets/icons";

function LastTransactionTable() {
  return (
    <ul className="bg-white rounded-xl overflow-hidden text-primary-200 p-5 space-y-4">
      <li className="flex items-center gap-3">
        <div className="w-[55px] h-[55px] flex items-center justify-center bg-cyan/20 text-cyan rounded-2xl">
          <div className="w-6 h-6">
            <RenewIcon />
          </div>
        </div>
        <div className="w-[calc(100%-375px-0.75rem)] space-y-1">
          <p className="text-black text-lg">Spotify Subscription</p>
          <p className="text-primary-400">25 Jan 2021</p>
        </div>
        <p className="w-[70px] text-primary-400">Shopping</p>
        <p className="w-[70px] text-primary-400">1234 ****</p>
        <p className="w-[70px] text-primary-400">Pending</p>
        <p className="w-[70px] text-magenta">-$150</p>
      </li>
      <li className="flex items-center gap-3">
        <div className="w-[55px] h-[55px] flex items-center justify-center bg-primary/20 text-primary rounded-2xl">
          <div className="w-6 h-6">
            <SettingO2Icon />
          </div>
        </div>
        <div className="w-[calc(100%-375px-0.75rem)] space-y-1">
          <p className="text-black text-lg">Spotify Subscription</p>
          <p className="text-primary-400">25 Jan 2021</p>
        </div>
        <p className="w-[70px] text-primary-400">Shopping</p>
        <p className="w-[70px] text-primary-400">1234 ****</p>
        <p className="w-[70px] text-primary-400">Pending</p>
        <p className="w-[70px] text-magenta">-$150</p>
      </li>
      <li className="flex items-center gap-3">
        <div className="w-[55px] h-[55px] flex items-center justify-center bg-magenta/20 text-magenta rounded-2xl">
          <div className="w-6 h-6">
            <AccountOIcon />
          </div>
        </div>
        <div className="w-[calc(100%-375px-0.75rem)] space-y-1">
          <p className="text-black text-lg">Spotify Subscription</p>
          <p className="text-primary-400">25 Jan 2021</p>
        </div>
        <p className="w-[70px] text-primary-400">Shopping</p>
        <p className="w-[70px] text-primary-400">1234 ****</p>
        <p className="w-[70px] text-primary-400">Pending</p>
        <p className="w-[70px] text-magenta">-$150</p>
      </li>
    </ul>
  );
}

export default LastTransactionTable;
