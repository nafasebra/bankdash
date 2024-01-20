import { linkEnum } from '@/enums/link'
import Body from '@/components/layout/Body'
import { AccountIcon, BarIcon, Service2nIcon, Settings2Icon } from '@/assets/icons'

function Loans() {
  return (
    <Body pageName={linkEnum.Loans}>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5'>
        <div className='flex items-center gap-3 bg-white rounded-xl p-5'>
          <div className='w-12 h-12 flex items-center justify-center rounded-full bg-primary-100/20 text-primary-100'>
            <div className="w-6 h-6 flex items-center justify-center">
              <AccountIcon />
            </div>
          </div>
          <div className='w-[calc(100%-3.75rem)]'>
            <p className='text-sm text-primary-400 leading-0'>Personal Loans</p>
            <p className='text-2xl font-semibold text-black leading-0'>$50,000</p>
          </div>
        </div>
        <div className='flex items-center gap-3 bg-white rounded-xl p-5'>
          <div className='w-12 h-12 flex items-center justify-center rounded-full bg-yellow/20 text-yellow'>
            <div className="w-6 h-6 flex items-center justify-center">
              <Service2nIcon />
            </div>
          </div>
          <div className='w-[calc(100%-3.75rem)]'>
            <p className='text-sm text-primary-400 leading-0'>Personal Loans</p>
            <p className='text-2xl font-semibold text-black leading-0'>$50,000</p>
          </div>
        </div>
        <div className='flex items-center gap-3 bg-white rounded-xl p-5'>
          <div className='w-12 h-12 flex items-center justify-center rounded-full bg-magenta/20 text-magenta'>
            <div className="w-6 h-6 flex items-center justify-center">
              <BarIcon />
            </div>
          </div>
          <div className='w-[calc(100%-3.75rem)]'>
            <p className='text-sm text-primary-400 leading-0'>Personal Loans</p>
            <p className='text-2xl font-semibold text-black leading-0'>$50,000</p>
          </div>
        </div>
        <div className='flex items-center gap-3 bg-white rounded-xl p-5'>
          <div className='w-12 h-12 flex items-center justify-center rounded-full bg-cyan/20 text-cyan'>
            <div className="w-6 h-6 flex items-center justify-center">
              <Settings2Icon />
            </div>
          </div>
          <div className='w-[calc(100%-3.75rem)]'>
            <p className='text-sm text-primary-400 leading-0'>Personal Loans</p>
            <p className='text-2xl font-semibold text-black leading-0'>$50,000</p>
          </div>
        </div>
      </div>
    </Body>
  )
}

export default Loans
