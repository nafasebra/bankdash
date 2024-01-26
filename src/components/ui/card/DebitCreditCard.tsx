import CreditChart from "@/components/ui/chart/CreditChart";

function DebitCreditCard() {
  return (
    <div className="bg-white overflow-hidden p-6 space-y-6 rounded-lg">
      <div className="flex items-center justify-between gap-3">
        <p className="text-primary-400">
          <span className="text-primary-200">$7,560</span> Debited &{" "}
          <span className="text-primary-200">$5,420</span> Credited in this Week
        </p>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-3">
            <div className="rounded-md w-5 h-5 bg-primary-400"></div>
            <p className="text-primary-400">Debit</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="rounded-md w-5 h-5 bg-magenta"></div>
            <p className="text-primary-400">Credit</p>
          </div>
        </div>
      </div>
      <CreditChart />
    </div>
  );
}

export default DebitCreditCard;
