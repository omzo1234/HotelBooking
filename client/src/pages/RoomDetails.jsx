import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { assets, facilityIcons, roomCommonData, roomsDummyData } from '../assets/assets';
import StarRating from '../components/StarRating';

const RoomDetails = () => {
    const {id} =useParams();
    const [room, setRoom] = useState(null);
    const[mainImage, setMainImage] = useState(null);

    useEffect(() => {
        const room = roomsDummyData.find(room => room._id ===id);
        room && setRoom(room);
        room && setMainImage(room.images[0]);
    }, [])
  return room && (
    <div className='py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32'>
    <div className='flex flex-col md:flex-row items-start  md:items-center gap-8 xl:px-32'>
       
        <h1 className='text-3xl md:text-4xl'>{room.hotel.name} <span className='text-sm font-inter'>({room.roomType}) </span></h1> 
        <p className='bg-orange-500 text-white px-2 py-1 
        rounded-full'>20% OFF</p>
        </div>
        {/* Room rating */}
        <div className='flex items-center gap-2 mt-2'>
            <StarRating />
            <p className='text-sm text-gray-600 mt-2'>+200 vistes</p>

        </div>
        {/*Room address*/}
        <div className='flex items-center gap-2 mt-2'>
            <img src={assets.locationIcon} alt="location-icon" />
            <span className='text-sm text-gray-600 ml-2'>{room.hotel.address}</span>
        </div>
        {/*Room images*/}
        <div className='flex flex-col lg:flex-row mt-6 gap-6 '>
            {/*Main image*/}
            <div className='lg:w-1/2 w-full'>
               <img src={mainImage} alt="Room image" 
               className='w-full rounded-xl shadow-lg object-cover'/>
            </div>

            <div className='grid grid-cols-2 gap-4 lg:w-1/2 w-full'>
              {room?.images.length > 1 && room.images.map((image, index)=>(
                <img key={index} src={image} alt={`Room image ${index + 1}`} 
                className={`w-full h-40 rounded-xl shadow-lg object-cover cursor-pointer`}
                style={{border: mainImage === image ? '2px solid #FF5722' : 'none'}}
                onClick={() => setMainImage(image)} />
              ))

              }
                
            </div>
        </div>
        {/*Room highlights*/}
        <div>
            <div>
                <h1 className='text-3xl md:text-4xl font-playfair'>Experimenter les plus grandes offres luxieux de nos hotels</h1>
                <div className='flex flex-wrap items-center mt-4 gap-4'>{room.amenities.map((item, index)=>(
                    <div key={index} className='flex items-center gap-2 mt-2 rounded-b-lg bg-gray-100'>
                        <img src={facilityIcons[item]} alt={item} className='w-6 h-6' />
                        <p className=''>{item}</p>
                    </div>

                ))}
                 </div>

            </div>
            {/*Room price*/}
            <div className='mt-8 lg:flex-row items-center justify-between'>
                
                 <p className='text-2xl font-semibold'>${room.pricePerNight}/night</p>
            </div>
        </div>
        {/*Check in and check out form*/}
        <form className='flex flex-col md:flex-row items-start md:items-center justify-between bg-white shadow-[0px_0px_20px_rgba(0,0,0,0.15)] p-6 rounded-x1
        md: mx-auto mt-16 max-w-6x1'>
                <div className='flex flex-col gap-4 w-full md:w-1/3 md:flex-row items-start md:items-center md:gap-4 text-gray-50'>
                   <div className='flex flex-col w-full'>
                     <label htmlFor="CheckInDate" className='font-medium'>Check-In</label>
                     <input type="Date" className='border-gray-100 px-4 py-2 rounded-lg mt-2' id='CheckInDate'
                    placeholder='Check-In' required />
                    </div>
                     <div className='w-px h-15 bg-gray-500/70 max-md:hidden'></div>
                   <div className='flex flex-col w-full'>
                     <label htmlFor="CheckOutnDate" className='font-medium'>Check-Out</label>
                     <input type="Date" className='border-gray-100 px-4 py-2 rounded-lg mt-2' id='CheckOutDate'
                    placeholder='Check-Out' required />
                    </div>
                    <div className='w-px h-15 bg-gray-500/70 max-md:hidden'></div>
                    <div className='flex flex-col w-full'>
                     <label htmlFor="Guests" className='font-medium'>Guests</label>
                     <input type="number" className='max-w-20 rounded-border-gray-100 px-4 py-2 outline-none' id='Guests'
                    placeholder='Check-Out' required />
                    </div>
                </div>
                <button type='submit' className='bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-300'>
                    Check Availabity
                </button>
        </form>
        {/*Common specifications*/}
        <div className=' mt-30'>
              {roomCommonData.map((spec, index) => (
                <div key={index} className='flex items-start gap-2'>
                    <img src={spec.icon} alt={`${spec.title}-icon`} className='w-6.5' />
                    <div>
                        <p className='font-semibold'>{spec.title}</p>
                        <p className='text-sm text-gray-600'>{spec.description}</p>
                    </div>
                </div>
            )
              )}
        </div>
        <div className='max-w-3x1 border-y border-gray-300 my-15 py-10 text-gray-500' >
                    <p>Guests will be allocated on the ground floor according to availability.
                    You get a comfortable Two bedroom apartment has a true city feeling. The
                    price quoted is for two guest, at the guest slot please mark the number of
                    guests to get the exact price for groups. The Guests will be allocated
                    ground floor according to availability. You get the comfortable two bedroom
                      apartment that has a true city feeling. </p>
        </div>
        
        {/* Hosted by*/}
        <div className='flex flex-col items-start gap-4'>
            <div className='flex gap-4'>
                <img src={room.hotel.owner.image} alt="Host" className='h-14 w-14
                md:h-18 md:w-18 rounded-full' />
            <div className='flex flex-col'>
                <p className='text-xl'>Hosted by {room.hotel.name}</p>
                <div className='flex items-center mt-1'>
                    <StarRating />
                    <p className='ml-2'>200+ reviews</p>
                </div>
             </div>
            </div>
            <div className='bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white transition-colors duration-300 cursor-pointer'>
                contact now
            </div>
        </div>
    </div>
   
  )
}

export default RoomDetails