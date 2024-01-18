import React from 'react'

function Tabbar() {
  return (
    <div className='flex border-b border-gray-200 gap-5'>
      <button className="py-4 px-2 font-bold text-primary-100 relative after:contents-['*'] after:absolute after:left-0 after:bottom-0 after:right-0 after:w-full after:h-1 after:bg-primary-100 after:rounded-t-lg">
        All Transactions
      </button>
      <button className='py-4 px-2 font-bold text-dark-blue'>
        Income
      </button>
      <button className='py-4 px-2 font-bold text-dark-blue'>
        Expense
      </button>
    </div>
  )
}

export default Tabbar