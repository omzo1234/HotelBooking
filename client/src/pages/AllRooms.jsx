
import { assets, facilityIcons, roomsDummyData } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import StarRating from '../components/StarRating'
import { useState } from 'react';

const AllRooms = (room) => {
    const navigate = useNavigate();
    const [openFilters, setOpenFilters] = useState(false);
  return (
    <div key={room._id} className='flex flex-col-reverse lg:flex-row justify-between items-start pt-28 md:pt-35 px-4 
    md:px-16 lg:px-24 gap-8 xl:px-32'>
        <div>
            <div className='flex flex-col items-start text-left'>
            <h1 className='text-4xl font-family text-center my-8'>All Rooms</h1>
            <p className='text-sm max-w-174 md:text-base mt-2'>Prenez avantage de nos offres illimite et profitez de nos meilleurs tarifs</p>
            </div>
            {roomsDummyData.map((room)=>(
                <div key={room._id} className='flex flex-col md:flex-row items-start md:items-center gap-4 mt-8'>
                    <img src={room.images[0]} alt="hotel-img" title='View-Room-Details' className='max-h-70 md:w-1/2 rounded-xl shadow-lg object-cover
                    cursor-pointer' onClick={()=>{(navigate(`/rooms/${room._id}`));scrollTo(0, 0)}} />
                    <div className='md:w-1/2 gap-2 flex-col'>
                        <p onClick={()=>{(navigate(`/rooms/${room._id}`));scrollTo(0, 0)}}
                        className='text-2xl font-semibold mt-4'>{room.hotel.name}</p>
                        <p className='text-sm text-gray-600 mt-2'>{room.hotel.city}</p>
                        <div className='flex items-center mt-2'>
                            <StarRating />
                        <p className='text-lg font-bold ml-2'>+200 vistes</p>
                        </div>
                        <div className='flex items-center mt-2'>
                            <img src={assets.locationIcon} alt="location-icon" />
                            <span  className='text-sm text-gray-600 ml-2'>{room.hotel.address}</span>
                        </div>
                        {/*Hotel room amenities*/}
                        <div className='flex flex-wrap items-center gap-4 mt-4'>
                            {room.amenities.map((item, index)=>(
                                <div key={index} className='flex flex-col items-center rounded-b-lg px-3 gap-1 bg-[#F5F5FF]/70'>
                                    <img src={facilityIcons[item]} alt={item}
                                    className='w-5 h-5' />
                                    <p className='text-xs'>{item}</p>
                                </div>

                            ))}
                        </div>
                        <div className='flex items-center justify-between mt-4'>
                            <p className='text-lg font-semibold'>${room.pricePerNight} / night</p>
                            <button onClick={()=>{(navigate(`/rooms/${room._id}`));scrollTo(0, 0)}}
                            className='bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300'>View Details</button>
                        </div>

                    </div>
                </div>
                
            ))}
        </div>
        
        <div>
            {/* Filters Section */}
            <div className='flex flex-col items-start gap-4'>
                <div className='flex items-center gap-2'>
                    <p className='text-lg font-semibold'>Filters</p>
                    <img src={assets.badgeIcon} alt="filter-icon" className='h-5 cursor-pointer' onClick={()=>setOpenFilters(!openFilters)}/>

                </div>
                {openFilters && (
                    <div className='flex flex-col items-start gap-4'>
                        <div className='flex flex-col items-start gap-2'>
                            <p className='text-sm text-gray-500'>Price</p>
                            <div className='flex items-center gap-2'>
                                <input type="range" min="0" max="1000" step="10" className='w-full' />
                                <p className='text-sm text-gray-500'>1000$</p>
                            </div>
                        </div>
                        <div className='flex flex-col items-start gap-2'>
                            <p className='text-sm text-gray-500'>Rating</p>
                            <div className='flex items-center gap-2'>
                                <input type="range" min="0" max="5" step="1" className='w-full' />
                                <p className='text-sm text-gray-500'>5</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    </div>
  )
}

export default AllRooms