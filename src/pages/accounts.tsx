import { linkEnum } from "@/enums/link";
import {
  AccountIcon,
  BarIcon,
  CardIcon,
  CoinIcon,
  PaypalIcon,
  Service2nIcon,
  Settings2Icon,
} from "@/assets/icons";
import Body from "@/components/layout/Body";
import IconCard from "@/components/ui/card/IconCard";
import CreditCard from "@/components/ui/card/CreditCard";

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
          <div className="bg-white p-7 rounded-lg overflow-hidden"></div>
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
          <div className="bg-white p-7 rounded-lg overflow-hidden"></div>
        </div>
        <div className='flex flex-col gap-5'>
          <p className='text-primary-200 text-xl'>Invoices Sent</p>
          <ul className='bg-white rounded-xl overflow-hidden text-primary-200 p-5 space-y-4'>
            <li className='flex items-center gap-3'>
              <div className='w-[55px] h-[55px] flex items-center justify-center bg-yellow/20 text-yellow rounded-full'>
                <CardIcon />
              </div>
              <div className='w-[calc(100%-55px-0.75rem)] space-y-1 flex items-center justify-between'>
                <div className='space-y-1'>
                  <p className='text-black text-lg'>Deposit from my Card</p>
                  <p className='text-primary-400'>25 January 2021</p>
                </div>
                <p className='text-magenta font-bold'>-$500</p>
              </div>
            </li>
            <li className='flex items-center gap-3'>
              <div className='w-[55px] h-[55px] flex items-center justify-center bg-primary-100/20 text-primary-100 rounded-full'>
                <PaypalIcon />
              </div>
              <div className='w-[calc(100%-55px-0.75rem)] space-y-1 flex items-center justify-between'>
                <div className='space-y-1'>
                  <p className='text-black text-lg'>Deposit Paypal</p>
                  <p className='text-primary-400'>25 January 2021</p>
                </div>
                <p className='text-cyan font-bold'>+$500</p>
              </div>
            </li>
            <li className='flex items-center gap-3'>
              <div className='w-[55px] h-[55px] flex items-center justify-center bg-cyan/20 text-cyan rounded-full'>
                <CoinIcon />
              </div>
              <div className='w-[calc(100%-55px-0.75rem)] space-y-1 flex items-center justify-between'>
                <div className='space-y-1'>
                  <p className='text-black text-lg'>Jemi Wilson</p>
                  <p className='text-primary-400'>25 January 2021</p>
                </div>
                <p className='text-cyan font-bold'>+$500</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </Body>
  );
}

export default Accounts;
