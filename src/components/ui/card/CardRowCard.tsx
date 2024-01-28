import { CashIcon } from "@/assets/icons";

function CardRowCard() {
  return (
    <div className="bg-white rounded-lg flex gap-10 items-center justify-between py-4 px-5">
      <div className="flex items-center gap-3">
        <div
          className={`w-12 h-12 flex items-center justify-center rounded-2xl bg-primary/10 text-primary`}
        >
          <div className="w-6 h-6 flex items-center justify-center">
            <CashIcon />
          </div>
        </div>
        <div className="flex flex-col whitespace-nowrap">
          <p className="text-black leading-0">Card Type </p>
          <p className="text-primary-400 leading-0">Secondary</p>
        </div>
      </div>
      <div className="flex flex-col whitespace-nowrap">
        <p className="text-black leading-0">Bank </p>
        <p className="text-primary-400 leading-0">DBL Bank</p>
      </div>
      <div className="flex flex-col whitespace-nowrap">
        <p className="text-black leading-0">Card Number </p>
        <p className="text-primary-400 leading-0">**** **** 5600</p>
      </div>
      <div className="flex flex-col whitespace-nowrap">
        <p className="text-black leading-0">Namain Card </p>
        <p className="text-primary-400 leading-0">William </p>
      </div>
      <a href="#" className="w-[150px] text-primary text-center">
        View details
      </a>
    </div>
  );
}

export default CardRowCard;
