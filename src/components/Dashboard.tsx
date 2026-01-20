import React from 'react'

const Dashboard = () => {
  return (
    <section className='p-4 w-full flex justify-evenly border-b'>
        {/* total count */}
        <div className='bg-gray-200 rounded-md p-4 flex flex-col gap-4 w-1/5 justify-center'>
            <div>Total Products</div>
            <div className=' rounded-md font-bold'>999</div>
        </div>
        {/* list of low stock */}
       <div className='bg-gray-200 rounded-md p-4 flex flex-col gap-4 w-1/5 justify-center'>
            <div>Low Stock</div>
            <div className=' rounded-md font-bold'>1</div>
        </div>
        {/* total value */}
        <div className='bg-gray-200 rounded-md p-4 flex flex-col gap-4 w-1/5 justify-center'>
            <div>Total Inventory Value</div>
            <div className=' rounded-md font-bold'>Rs. 99999999</div>
        </div>
    </section>
  )
}

export default Dashboard