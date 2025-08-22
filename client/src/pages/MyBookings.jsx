import React, { useState } from 'react'
import Title from '../components/Title'
import { assets, userBookingsDummyData } from '../assets/assets'

const MyBookings = () => {
    const[ bookings, setBookings ] = useState(userBookingsDummyData);
  return (
    <div className='py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32'>
        <Title title='My Bookings' subTitle='Easily manage your bookings
        and stay up-to-date with your travel plans' align={"left"}/>

        <div className='max-w-6xlmt-8 w-full text-gray-800'>
            <div className='hidden md:grid md:grid-cols-3 items-center justify-between border-b border-gray-500 pb-4 mt-6'>
                <div className='w-1/3'>Hotel</div>
                <div className='w-1/3'>Date & Timing</div>
                <div className='w-1/3'>Payment</div>
            </div>
            { bookings.map((booking) => (
                <div key={booking._id} className='grid grid-cols-1 md:grid-cols-[3fr_2fr_1fr] w-full first:border-t gap-4 py-4 border-b border-gray-300'>
                       {/* Hotel Details */}
                       <div className='flex flex-col md:flex-row'>
                        <img src={booking.room.images[1]} alt='hotel-image' />
                        <div className='flex flex-col gap-1.5 max-md:mt-3 min-md:ml-4'>
                            <p className='font-semibold'>{booking.hotel.name}
                            <span className='text-sm text-gray-600'>{booking.room.roomType}</span>
                        </p>
                         <div className='flex items-center gap-2 mt-1'> 
                            <img src={assets.locationIcon} alt="location-icon" />
                            <span className='text-sm text-gray-600'>{booking.hotel.address}</span>
                         </div>
                         <div className='flex items-center gap-2 mt-1'> 
                            <img src={assets.guestsIcon} alt="guests-icon" />
                            <span className='text-sm text-gray-600'>Guest: {booking.guests}</span>
                         </div>
                         <p>Total : ${booking.totalPrice}</p>
                        </div>
                       </div>
                       {/* Date & Timing */}
                       <div className='flex flex-col items-start md:items-center md:gap-6 gap-8 mt-3'>
                            <div>
                                <p>Check In</p>
                                <p className='className="text-sm text-gray-600"'>{
                                    new Date(booking.checkInDate).toDateString()}</p>  
                            </div>
                            <div>
                                <p>Check Out</p>
                                <p className='className="text-sm text-gray-600"'>{
                                    new Date(booking.checkOutDate).toDateString()}</p>  
                            </div>
                       </div>
                       {/* Payment */}
                       <div></div>
                </div>
            ))

            }
        </div>
    </div>
  )
}

export default MyBookings