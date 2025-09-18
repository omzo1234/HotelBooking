import React from 'react'
import { assets } from '../assets/assets'

const HotelReg= () =>{
  return(
    <div className='fixed top-0 left-0 right-0 bottom-0 scale-z-100 flex items-center justify-center bg-black/50'>
      <form action="">
            
      <img src={assets.regImage} alt="reg-image" className='w-1/2 rounded-xl hidden md:block'/>
      
      <div className='relative flex flex-col items-center md:w-1/2 p-7 md:p-10'>
           <img src={assets.closeIcon} alt="close-icon" className='cursor-pointer absolute top-4
           right-4 w-4 h-4'/>
           <p className='text-2xl font-semibold mt-6'>Register Now</p>
      </div>

      </form>
      
    </div>
  )
}
export default HotelReg