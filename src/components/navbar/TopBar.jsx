import React from 'react'

function TopBar() {
  return (
    <div className='w-full flex justify-around content-center p-6 sticky -top-10  z-50'>
        <h1 className='text-2xl font-bold text-gray-700'>
            MMC
        </h1>
        <ul className='flex justify-between content-center space-x-4'>
            <li className='text-gray-700 font-bold'>
                Home
            </li>
            <li className='text-gray-700 font-bold'>
                Products
            </li>
            <li className='text-gray-700 font-bold'>
                Orders
            </li>
            <li className='text-gray-700 font-bold'>
                Customers
            </li>
        </ul>
    </div>
  )
}

export default TopBar