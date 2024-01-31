import { linkEnum } from "@/types/enums/link";
import Body from "@/components/layout/Body";
import CreditCard from "@/components/ui/card/CreditCard";
import { ExpenseChart, WeeklyTabbar } from "@/components/pages/transaction";
import SectionWithTitle from "@/components/pages/SectionWithTitle";

function Transactions() {
  return (
    <Body pageName={linkEnum.Transactions}>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-5 lg:gap-x-5">
        <div className="col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="grid grid-cols-2 col-span-1 lg:col-span-2">
            <p className="flex items-center text-2xl font-semibold text-primary-200">
              Transactions
            </p>
            <p className="flex items-center justify-end text-lg text-primary-200">
              See All
            </p>
          </div>
          <CreditCard theme="blue" />
          <CreditCard theme="white" />
        </div>
        <SectionWithTitle title="Recent Transaction">
          <ExpenseChart />
        </SectionWithTitle>
      </div>
      <SectionWithTitle title="WeeLast Transactionkly Activity" container={false}>
        <WeeklyTabbar />
      </SectionWithTitle>
    </Body>
  );
}

export default Transactions;
