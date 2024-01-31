import { RenewIcon } from "@/assets/icons";

function LastTransactionTable() {
  return (
    <div className="overflow-hidden">
      <ul className="min-w-full bg-white rounded-xl overflow-x-auto text-primary-200 p-5 space-y-4">
        {
          Array.from({length: 4}).map((_, index) => (
            <li key={index} className="min-w-[600px] flex items-center justify-between gap-3">
              <div className="w-[55px] h-[55px] basis-[55px] flex items-center justify-center bg-cyan/20 text-cyan rounded-2xl">
                <div className="w-6 h-6">
                  <RenewIcon />
                </div>
              </div>
              <div className="w-[200px] basis-[200px] space-y-1">
                <p className="text-black text-lg">Spotify Subscription</p>
                <p className="text-primary-400">25 Jan 2021</p>
              </div>
              <p className="w-[70px] basis-[70px] text-primary-400">Shopping</p>
              <p className="w-[70px] basis-[70px] text-primary-400">1234 ****</p>
              <p className="w-[70px] basis-[70px] text-primary-400">Pending</p>
              <p className="w-[70px] basis-[70px] text-magenta">-$150</p>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default LastTransactionTable;
