import React from 'react'
import { roomsDummyData } from '../assets/assets'
import HotelCard from './HotelCard'
import Title from './Title'
import { useNavigate } from 'react-router-dom'


const FeaturedDestination = () => {
    const navigate = useNavigate();
  return (
    <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 py-20'>
        <Title title="Future Destination" subTitle="Decouvrez le meilleur des hotels avec nos offres exclusives et des tarifs exceptionnels"/>
        <div className='flex flex-wrap items-center justify-center gap-6 mt-20'>
            {roomsDummyData.slice(0, 4).map((room, index)=>(
                <HotelCard key={room._id} room={room} index={index}/>
            )
        )}
        </div>
        <button onClick={() => {navigate('/rooms');scrollTo(0, 0)}} className='px-8 py-2.5 mt-10 rounded-full bg-black text-white hover:bg-gray-800 transition-all duration-300 cursor-pointer'
            >
            Voir plus de Destination
        </button>
    </div>
  )
}

export default FeaturedDestination