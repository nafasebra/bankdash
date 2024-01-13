import { linkEnum } from '@/enums/link'
import Body from '../components/layout/Body'
import BankLogo from '@/assets/images/bank-logo.svg'
import ChipCard from '@/assets/images/Chip_Card.png'
import BankLogoBlack from '@/assets/images/bank-logo-black.svg'
import ChipCardBlack from '@/assets/images/Chip_Card-black.png'
import { CardIcon, CoinIcon, PaypalIcon } from '@/assets/icons'

function Home() {
  return (
    <Body pageName={linkEnum.Dashboard}>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
        <div className='col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-5'>
          <div className='grid grid-cols-2 col-span-1 lg:col-span-2'>
            <p className='flex items-center text-2xl font-semibold text-primary-200'>Home</p>
            <p className='flex items-center justify-end text-lg text-primary-200'>See All</p>
          </div>
          <div className='bg-primary-100 rounded-xl overflow-hidden text-white'>
            <div className='px-6 py-5 space-y-6'>
              <div className='flex items-center justify-between'>
                <div>
                  <p className='text-sm'>Balance</p>
                  <p className='text-2xl'>$5,756</p>
                </div>
                <img src={ChipCard} className='w-[35px]' />
              </div>
              <div className='grid grid-cols-2 gap-5'>
                <div className='space-y-1'>
                  <p className='text-sm text-white/80'>CARD HOLDER</p>
                  <p className='text-xl'>Eddy Cusuma</p>
                </div>
                <div className='space-y-1'>
                  <p className='text-sm text-white/80'>VALID THRU</p>
                  <p className='text-xl'>12/22</p>
                </div>
              </div>
            </div>
            <div className='bg-gradient-to-br from-white/15 to-transparent flex items-center justify-between px-6 py-4'>
              <p className='font-bold text-xl'>3778 **** **** 1234</p>
              <img src={BankLogo} className='w-[50px]' />
            </div>
          </div>
          <div className='bg-white rounded-xl overflow-hidden text-primary-200'>
            <div className='px-6 py-5 space-y-6'>
              <div className='flex items-center justify-between'>
                <div>
                  <p className='text-sm'>Balance</p>
                  <p className='text-2xl'>$5,756</p>
                </div>
                <img src={ChipCardBlack} className='w-[35px]' />
              </div>
              <div className='grid grid-cols-2 gap-5'>
                <div className='space-y-1'>
                  <p className='text-sm text-white/80'>CARD HOLDER</p>
                  <p className='text-xl'>Eddy Cusuma</p>
                </div>
                <div className='space-y-1'>
                  <p className='text-sm text-white/80'>VALID THRU</p>
                  <p className='text-xl'>12/22</p>
                </div>
              </div>
            </div>
            <div className='border-t border-gray-200 flex items-center justify-between px-6 py-4'>
              <p className='font-bold text-xl'>3778 **** **** 1234</p>
              <img src={BankLogoBlack} className='w-[50px]' />
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-5'>
          <p className='flex items-center text-2xl font-semibold text-primary-200'>Recent Transaction</p>
          <ul className='bg-white rounded-xl overflow-hidden text-primary-200 p-5 space-y-4'>
            <li className='flex items-center gap-3'>
              <div className='w-[55px] h-[55px] flex items-center justify-center bg-yellow/20 text-yellow rounded-full'>
                <CardIcon />
              </div>
              <div className='w-[calc(100%-55px-0.75rem)] space-y-1 flex items-center justify-between'>
                <div className='space-y-1'>
                  <p className='text-black text-lg'>Deposit from my Card</p>
                  <p className='text-dark-blue'>25 January 2021</p>
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
                  <p className='text-dark-blue'>25 January 2021</p>
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
                  <p className='text-dark-blue'>25 January 2021</p>
                </div>
                <p className='text-cyan font-bold'>+$500</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </Body>
  )
}

export default Home
