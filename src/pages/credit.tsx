import { linkEnum } from "@/enums/link";
import Body from "@/components/layout/body";
import CreditCard from "@/components/ui/card/credit-card";
import {
  AddCardForm,
  CardSettingCard,
  CardListContainer,
} from "@/components/pages/card"; 
import { ExpenseChart } from "@/components/pages/home";
import SectionWithTitle from "@/components/pages/section-with-title";

function Credit() {
  return (
    <Body pageName={linkEnum.Credit}>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-5 lg:gap-x-5">
        <CreditCard theme="ocean" />
        <CreditCard theme="blue" />
        <CreditCard theme="white" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-5 lg:gap-x-5">
        <div className="flex flex-col gap-5">
          <SectionWithTitle title="Card Expense Statistics">
            <ExpenseChart />
          </SectionWithTitle>
        </div>
        <div className="col-span-1 lg:col-span-2 flex flex-col gap-5">
          <SectionWithTitle title="Card List" container={false}>
            <CardListContainer />
          </SectionWithTitle>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-5 lg:gap-x-5">
        <div className="col-span-1 lg:col-span-2 flex flex-col gap-5">
          <SectionWithTitle title="Card List">
            <div className="pb-4">
              <p className="text-primary-400 leading-7">
                Credit Card generally means a plastic card issued by Scheduled
                Commercial Banks assigned to a Cardholder, with a credit limit,
                that can be used to purchase goods and services on credit or
                obtain cash advances.
              </p>
            </div>
            <AddCardForm />
          </SectionWithTitle>
        </div>
        <div className="flex flex-col gap-5">
          <SectionWithTitle title="Card Expense Statistics">
            <CardSettingCard />
          </SectionWithTitle>
        </div>
      </div>
    </Body>
  );
}

export default Credit;
