import BankLogo from "@/assets/images/bank-logo.svg";
import ChipCard from "@/assets/images/Chip_Card.png";

function CreditCard() {
  return (
    <div className="bg-primary-100 rounded-xl overflow-hidden text-white">
      <div className="px-6 py-5 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm">Balance</p>
            <p className="text-2xl">$5,756</p>
          </div>
          <img src={ChipCard} className="w-[35px]" />
        </div>
        <div className="grid grid-cols-2 gap-5">
          <div className="space-y-1">
            <p className="text-sm text-white/80">CARD HOLDER</p>
            <p className="text-xl">Eddy Cusuma</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm text-white/80">VALID THRU</p>
            <p className="text-xl">12/22</p>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-br from-white/15 to-transparent flex items-center justify-between px-6 py-4">
        <p className="font-bold text-xl">3778 **** **** 1234</p>
        <img src={BankLogo} className="w-[50px]" />
      </div>
    </div>
  );
}

export default CreditCard;
