import { linkEnum } from "@/enums/link";
import {
  AccountIcon,
  BarIcon,
  Service2nIcon,
  Settings2Icon,
} from "@/assets/icons";
import Body from "@/components/layout/Body";
import IconCard from "@/components/ui/card/IconCard";
import CreditCard from "@/components/ui/card/CreditCard";
import LastTransactionTable from "@/components/ui/table/LastTransactionTable";

function Accounts() {
  return (
    <Body pageName={linkEnum.Accounts}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <IconCard
          icon={<AccountIcon />}
          supTitle="Personal Loans"
          title="$50,000"
          mainColor="text-primary-100"
          mainColorAlpha="bg-primary-100/20"
          reverse
        />
        <IconCard
          icon={<Service2nIcon />}
          supTitle="Corporate Loans"
          title="$100,000"
          mainColor="text-yellow"
          mainColorAlpha="bg-yellow/20"
          reverse
        />
        <IconCard
          icon={<BarIcon />}
          supTitle="Business Loans"
          title="$500,000"
          mainColor="text-magenta"
          mainColorAlpha="bg-magenta/20"
          reverse
        />
        <IconCard
          icon={<Settings2Icon />}
          supTitle="Custom Loans"
          title="Choose Money"
          mainColor="text-cyan"
          mainColorAlpha="bg-cyan/20"
          reverse
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className='col-span-1 lg:col-span-2 flex flex-col gap-5'>
          <p className='text-primary-200 text-xl'>Last Transaction</p>
          <LastTransactionTable />
        </div>
        <div className='flex flex-col gap-5'>
          <div className="flex items-center">
            <p className='text-primary-200 text-xl'>My Card</p>
            <p className='text-primary-200 text-lg'>See all</p>
          </div>
          <CreditCard theme='blue' />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className='col-span-1 lg:col-span-2 flex flex-col gap-5'>
          <p className='text-primary-200 text-xl'>Debit & Credit Overview</p>
          <div className="bg-white overflow-hidden p-6 rounded-lg"></div>
        </div>
        <div className='flex flex-col gap-5'>
          <p className='text-primary-200 text-xl'>Invoices Sent</p>
        </div>
      </div>
    </Body>
  );
}

export default Accounts;
