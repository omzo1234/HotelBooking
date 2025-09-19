import React from 'react'
import { assets, cities } from '../assets/assets'

const HotelReg= () =>{
  return(
    <div className='fixed top-0 left-0 right-0 bottom-0 scale-z-100 flex items-center justify-center bg-black/50'>
      
      
      <form className='flex bg-white rounded-xl max-w-4xl'>
            
      <img src={assets.regImage} alt="reg-image" className='w-1/2 rounded-xl hidden md:block'/>
      
      <div className='relative flex flex-col items-center md:w-1/2 p-7 md:p-10'>
           <img src={assets.closeIcon} alt="close-icon" className='cursor-pointer absolute top-4
           right-4 w-4 h-4'/>
           <p className='text-2xl font-semibold mt-6'>Register Now</p>

           {/*Hotel Name */}
           <div className='w-full mt-4'>
            <label htmlFor="name" className='font-semibold text-gray-500'>Hotel Name</label>
            <input id='name' type="text" className='border border-gray-200 rounded w-full px-3 py-2.5 mt-1 outline-indigo-50' placeholder='type here' required/>
           </div>

           {/*Hotel Contact */}
           <div className='w-full mt-4'>
            <label htmlFor="contact" className='font-semibold text-gray-500'>Phone</label>
            <input id='contact' type="text" className='border border-gray-200 rounded w-full px-3 py-2.5 mt-1 outline-indigo-50' placeholder='type here' required/>
           </div>
           
           {/*Hotel Address */}
           <div className='w-full mt-4'>
            <label htmlFor="Address" className='font-semibold text-gray-500'>Address</label>
            <input id='address' type="text" className='border border-gray-200 rounded w-full px-3 py-2.5 mt-1 outline-indigo-50' placeholder='type here' required/>
           </div>
           
            {/*Select City */} 
           <div className='w-full mt-4 max-w-30 mr-auto'>
            <label htmlFor="city" className='className="border border-gray-500 rounded outline-amber-100 w-full px-3 py-2.5 font-light "'>City</label>
            <select  id="city">
              <option  value=""></option>
                {cities.map((city)=>(
                      <option key={city} value={city}>{city}</option>
                ))}
              
            </select>
           
           </div>

           <button className='bg-indigo-500 rounded text-white transition-all cursor-pointer mt-6 
            mr-auto py-2.5 px-6'>Register</button>

         </div>
            
      </form>
      
    </div>
  )
}
export default HotelReg