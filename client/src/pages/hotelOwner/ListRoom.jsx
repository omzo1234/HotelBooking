import React, { useState } from 'react'
import { roomsDummyData } from '../../assets/assets'
import Title from '../../components/Title'

const ListRoom = () => {
  const [rooms, setRooms] =useState(roomsDummyData)
  return (
    <div>
      <Title align='left' title='List Rooms' font='outfit' subTitle='manage, list your room, keep information
      up to date for better user experience'/>
          <p className=''>All Rooms</p>
          <div className='bg-gray-50 max-w-3xl border border-gray-300 text-left rounded-lg
          max-h-8- overflow-y-scroll mt-3'></div>
           <table className='w-full'>
             <thead className='bg-gray-300'>
                <tr>
                  <th className='py-3 px-4 text-gray-500 font-medium'>Name</th>
                  <th className='py-3 px-4 text-gray-500 font-medium max-sm:hidden'>Facility</th>
                  <th className='py-3 px-4 text-gray-500 font-medium '>Price / Night</th>
                  <th className='py-3 px-4 text-gray-500 font-medium text-center'>Actions</th>
                </tr>
              </thead>
              <tbody className='text-sm'>
                {
                  rooms.map((item, index )=>(
                    <tr key={index}>
                          <td className='py-3 px-4 border-t border-gray-300'>
                            {item.roomType}
                          </td>
                            <td className='py-3 px-4 border-t border-gray-300 max-sm:hidden'>
                            {item.amenities.join(', ')}
                          </td>
                            <td className='py-3 px-4 border-t border-gray-300 '>
                            {item.pricePerNight}
                          </td>
                         <td className='py-3 px-4 border-t border-gray-300 text-sm text-center
                         text-red-500'>
                              <label className='relative inline-flex items-center cursor-pointer text-gray-900 gap-3'>
                                <input type="checkbox" className='sr-only peer' checked={item.isAvailable} />
                                <div className='w-12 h-7 bg-slate-300 rounded-full peer peer-checked:bg-blue-600 transition-colors
                                duration-200'></div>
                                <span className='dot absolute left-1 top-1 bg-white w-5 h-5 rounded-full  transition-transform
                                ease-in-out duration-200 peer-checked:translate-x-5'></span>
                              </label>
                         </td>
                    </tr>
                  ))
                }
              </tbody>

           </table>
    </div>
  )
}

export default ListRoom