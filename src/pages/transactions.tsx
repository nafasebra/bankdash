import { linkEnum } from '@/enums/link'
import Body from '@/components/layout/Body'
import CreditCard from '@/components/ui/card/CreditCard'
import Table from '@/components/ui/table/Table'
import SimpleBarChart from '@/components/ui/chart/SimpleBarChart'
import Tabbar from '@/components/ui/tabbar/Tabbar'

function Transactions() {
  return (
    <Body pageName={linkEnum.Transactions}>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
        <div className='col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-5'>
          <div className='grid grid-cols-2 col-span-1 lg:col-span-2'>
            <p className='flex items-center text-2xl font-semibold text-primary-200'>Transactions</p>
            <p className='flex items-center justify-end text-lg text-primary-200'>See All</p>
          </div>
          <CreditCard theme='blue' />
          <CreditCard theme='white' />
        </div>
        <div className='flex flex-col gap-5'>
          <p className='flex items-center text-2xl font-semibold text-primary-200'>Recent Transaction</p>
          <div className='bg-white rounded-lg overflow-hidden p-5'>
            <SimpleBarChart />
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-5'>
        <p className='text-primary-200 text-xl'>Weekly Activity</p>
        <Tabbar />
        <Table />
      </div>
    </Body>
  )
}

export default Transactions
