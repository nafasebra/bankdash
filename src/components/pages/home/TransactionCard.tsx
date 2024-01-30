import { CardIcon, CoinIcon, PaypalIcon } from "@/assets/icons";

function TransactionCard() {
  return (
    <ul className="text-primary-200 space-y-4">
      <li className="flex items-center gap-3">
        <div className="w-[55px] h-[55px] flex items-center justify-center bg-yellow/20 text-yellow rounded-full">
          <CardIcon />
        </div>
        <div className="w-[calc(100%-55px-0.75rem)] space-y-1 flex items-center justify-between">
          <div className="space-y-1">
            <p className="text-black text-lg">Deposit from my Card</p>
            <p className="text-primary-400">25 January 2021</p>
          </div>
          <p className="text-magenta font-semibold">-$500</p>
        </div>
      </li>
      <li className="flex items-center gap-3">
        <div className="w-[55px] h-[55px] flex items-center justify-center bg-primary-100/20 text-primary-100 rounded-full">
          <PaypalIcon />
        </div>
        <div className="w-[calc(100%-55px-0.75rem)] space-y-1 flex items-center justify-between">
          <div className="space-y-1">
            <p className="text-black text-lg">Deposit Paypal</p>
            <p className="text-primary-400">25 January 2021</p>
          </div>
          <p className="text-cyan font-semibold">+$500</p>
        </div>
      </li>
      <li className="flex items-center gap-3">
        <div className="w-[55px] h-[55px] flex items-center justify-center bg-cyan/20 text-cyan rounded-full">
          <CoinIcon />
        </div>
        <div className="w-[calc(100%-55px-0.75rem)] space-y-1 flex items-center justify-between">
          <div className="space-y-1">
            <p className="text-black text-lg">Jemi Wilson</p>
            <p className="text-primary-400">25 January 2021</p>
          </div>
          <p className="text-cyan font-semibold">+$500</p>
        </div>
      </li>
    </ul>
  );
}

export default TransactionCard;
