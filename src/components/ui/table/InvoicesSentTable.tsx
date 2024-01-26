import { AccountOIcon, AppleIcon, PlaystationIcon } from "@/assets/icons";

function InvoicesSentTable() {
  return (
    <ul className="bg-white rounded-xl overflow-hidden text-primary-200 p-6 space-y-6">
      <li className="flex items-center gap-3">
        <div className="w-[55px] h-[55px] flex items-center justify-center bg-cyan/20 text-cyan rounded-2xl">
          <div className="w-6 h-6">
            <AppleIcon />
          </div>
        </div>
        <div className="w-[calc(100%-55px-0.75rem)] flex items-center justify-between">
          <div className="space-y-1">
            <p className="text-black text-lg">Apple Store</p>
            <p className="text-primary-400">5h ago</p>
          </div>
          <p className="text-primary-400">$450</p>
        </div>
      </li>
      <li className="flex items-center gap-3">
        <div className="w-[55px] h-[55px] flex items-center justify-center bg-yellow/20 text-yellow rounded-2xl">
          <div className="w-6 h-6">
            <AccountOIcon />
          </div>
        </div>
        <div className="w-[calc(100%-55px-0.75rem)] flex items-center justify-between">
          <div className="space-y-1">
            <p className="text-black text-lg">Michael</p>
            <p className="text-primary-400">2 days ago</p>
          </div>
          <p className="text-primary-400">+$500</p>
        </div>
      </li>
      <li className="flex items-center gap-3">
        <div className="w-[55px] h-[55px] flex items-center justify-center bg-primary/20 text-primary rounded-2xl">
          <div className="w-6 h-6">
            <PlaystationIcon />
          </div>
        </div>
        <div className="w-[calc(100%-55px-0.75rem)] flex items-center justify-between">
          <div className="space-y-1">
            <p className="text-black text-lg">Playstation</p>
            <p className="text-primary-400">5 days ago</p>
          </div>
          <p className="text-primary-400">$1085</p>
        </div>
      </li>
      <li className="flex items-center gap-3">
        <div className="w-[55px] h-[55px] flex items-center justify-center bg-magenta/20 text-magenta rounded-2xl">
          <div className="w-6 h-6">
            <AccountOIcon />
          </div>
        </div>
        <div className="w-[calc(100%-55px-0.75rem)] flex items-center justify-between">
          <div className="space-y-1">
            <p className="text-black text-lg">William</p>
            <p className="text-primary-400">10 days ago</p>
          </div>
          <p className="text-primary-400">$90</p>
        </div>
      </li>
    </ul>
  );
}

export default InvoicesSentTable;
