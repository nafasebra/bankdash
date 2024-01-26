import BankLogo from "@/assets/images/bank-logo.svg";
import ChipCard from "@/assets/images/Chip_Card.png";
import BankLogoBlack from "@/assets/images/bank-logo-black.svg";
import ChipCardBlack from "@/assets/images/Chip_Card-black.png";

interface CreditCardProps {
  theme?: "blue" | "ocean" | "white";
}

function CreditCard(props: CreditCardProps) {
  const { theme = "blue" } = props;

  const renderTheme = () => {
    switch (theme) {
      case "blue":
        return "bg-primary-100 text-white";
      case "ocean":
        return "bg-gradient-to-tr from-primary-100 to-primary-300 text-white";
      case "white":
        return "bg-white text-primary-200";
      default:
        return "";
    }
  };

  return (
    <div className={`${renderTheme()} rounded-xl overflow-hidden`}>
      <div className="px-6 py-5 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm">Balance</p>
            <p className="text-2xl">$5,756</p>
          </div>
          {theme === "white" ? (
            <img src={ChipCardBlack} className="w-[35px]" />
          ) : (
            <img src={ChipCard} className="w-[35px]" />
          )}
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
        <p className="font-semibold text-xl">3778 **** **** 1234</p>
        {theme === "white" ? (
          <img src={BankLogoBlack} className="w-[50px]" />
        ) : (
          <img src={BankLogo} className="w-[50px]" />
        )}
      </div>
    </div>
  );
}

export default CreditCard;
