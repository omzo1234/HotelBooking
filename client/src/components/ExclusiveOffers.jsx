import React from 'react'
import Title from './Title'
import { assets, exclusiveOffers } from '../assets/assets'

const ExclusiveOffers = () => {
  return (
    <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 py-20 xl:px-32 pt-20 pb-30'>
        <div className='flex flex-col items-center md:flex-row px-6 md:px-16 lg:px-24 bg-slate-50 py-20 justify-between w-full'>
            <Title align={"left"} title={"Exclusive Offers"} subTitle={"Decouvrez nos offres exclusives et des tarifs exceptionnels"} />
            <button className='group flex px-8 py-2.5 rounded-full text-black hover:bg-gray-800 transition-all duration-300 cursor-pointer'>
                Voir toutes les offres
                <img src={assets.arrowIcon} alt="arrow-icon" className='group-hover:translate-x-2 transition-all'/>
            </button>
        </div>
        <div div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 w-full'>
          {exclusiveOffers.map((item)=>(
            <div key={item._id} className='group relative flex flex-col items-startjustify-between gap-1 pt-12 md:pt-18 px-4 rounded-xl text-white
                      bg-no-repeat bg-cover bg-center' style={{backgroundImage: `url(${item.image})`}}>
                      <p className='px-3 py-1 absolute top-4 left-4 text-xs bg-white text-gray-800 font-medium rounded-full'>{item.priceOff}% OFF</p>
                <div>
                  <p className='text-2xl font-medium  font-playfair'>{item.title}</p>
                  <p>{item.description}</p>
                  <p className='text-xs text-white/70 mt-3'>Expiration Date: {item.expiryDate}</p>
                </div>
                <button className='group flex items-center px-8 py-2.5 rounded-full text-white hover:bg-blue-200 transition-all duration-300 cursor-pointer'>
                    Voir plus
                    <img src={assets.arrowIcon} alt="arrow-icon" className='group-hover:translate-x-2 transition-all'/>
                </button>
            </div>
                
             
          ))}
        </div>
    </div>
  )
}

export default ExclusiveOffers