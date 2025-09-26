import React, { useState } from 'react'
import Title from '../../components/Title'
import { assets, dashboardDummyData } from '../../assets/assets'

const Dashbord = () => {
  const [dashbordData, setDashbordData] = useState(dashboardDummyData)
  return (
    <div>
      <Title align='left' font='outfit' title='Dashbord'/>
      <div className='flex gap-4 my-8'>
        {/*---Le nombre total d'hotel ---*/}
        <div className='bg-primary/3 border border-primary/10 rounded flex p-4 h-10'>
               <img src={assets.totalBookingIcon} className='h-4 max-sm:hidden'  />
               <div className='flex flex-col font-medium sm:'>
                <p className='text-blue-500 text-lg'>Total Booking</p>
                <p className='text-neutral-500 text-base'>{dashboardDummyData.totalBookings}</p>
               </div>
        </div>
        {/*--- total revenue ---*/}
         <div className='bg-primary/3 border border-primary/10 rounded flex p-4 h-10'>
               <img src={assets.totalBookingIcon} className='h-4 max-sm:hidden'  />
               <div className='flex flex-col font-medium sm:'>
                <p className='text-blue-500 text-lg'>Total Revenue</p>
                <p className='text-neutral-500 text-base'>{dashboardDummyData.totalRevenue}</p>
               </div>
        </div>
        
      </div>

      {/* Les reservations recentes */}
      <h2 className='text-xl text-blue-950/70 mb-5'> Recent Booking</h2>
          <div className='bg-gray-50 max-w-3xl border border-gray-300 text-left rounded-lg
          max-h-8- overflow-y-scroll'>
            <table className='w-full'>
              <thead className='bg-gray-300'>
                <tr>
                  <th className='py-3 px-4 text-gray-500 font-medium'>User Name</th>
                  <th className='py-3 px-4 text-gray-500 font-medium max-sm:hidden'>Room Name</th>
                  <th className='py-3 px-4 text-gray-500 font-medium text-center'>Total Amount</th>
                  <th className='py-3 px-4 text-gray-500 font-medium text-center'>Payment Status</th>
                </tr>
              </thead>
              <tbody>
                {dashbordData.bookings.map((item, index) => (
                  <tr key={index}>
                    <td className='py-3 px-4 text-gray-500 font-medium'>{item.user.username}</td>
                    <td className='py-3 px-4 text-gray-500 font-medium max-sm:hidden'>{item.room.roomType}</td>
                    <td className='py-3 px-4 text-gray-500 font-medium text-center'>{item.totalPrice}</td>
                    <td className='py-3 px-4 text-gray-500 font-medium text-center'>
                      <button className= {`px-3 py-1 text-xs rounded-full mx-auto ${item.isPaid ? "bg-green-100 text-green-600" : 
                        "bg-red-100 text-red-600"}`} >
                         {item.isPaid ? "Paid" : "Pending"}
                      </button>
                      </td>
                  </tr>
                ))}
              </tbody>
            </table>
            
          </div>

    </div>
  )
}

export default Dashbord