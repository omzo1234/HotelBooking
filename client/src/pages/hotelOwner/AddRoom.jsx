import React from 'react'
import { useState } from 'react'
import Title from '../../components/Title';
import { assets } from '../../assets/assets';



const AddRoom = () => {
  const [images, setImages] = useState({
    1: null,
    2: null,
    3: null,
    4: null
  });
  const [inputs, setInputs] = useState({
    roomType: '',
    pricePerNight: 0,
    amaneties: {
      'Free WiFi': false,
      'Room Service': false,
      'Pool Access': false,
      'Free Breakfast': false,
      'Mountain View': false
      
    }

  });
  return (
    <form>
      <Title align="left" font="outfit" title="Add Room" subTitle="Add a room to your hotel and start receiving reservations"/>
    
    {/*Upload Area images*/}
    <p>Images</p>
    <div className=' grid grid-cols-2 gap-3 flex-wrap sm:flex'>
     {
      Object.keys(images).map((keys)=>(
          <label htmlFor={`roomImages${keys}`}>
            <img className='bg-gray-400 rounded border border-amber-100 cursor-pointer max-h-12'
             src={images[keys] ? URL.createObjectURL(images[keys]): assets.uploadArea} alt="" />
             <input type="file" accept='image/*' id={`roomImages${keys}`} hidden
              onChange={e=>setImages({...images,[keys]:e.target.files[0]})}/>

          </label>

      ))
     }

    </div>
    <div className='width-full flex max-sm:flex-col sm:gap-4 mt-4'>
          <div className='max-w-48 flex-1'>
            <p className='text-gray-500 mt-4'>Room Type</p>
           <select vakue={inputs.roomType} onChange={e=> setInputs({...inputs, roomType:e.target.value})}
            className='border border-gray-70 opacity-80 mt-1 pt-1 rounded w-full8'>
               <option> Select a room type</option>
               <option value="Single Bed">Single bed</option>
               <option value="Double Bed">Double Bed</option>
               <option value="Family Suite">Family Suite</option>
               <option value="Luxury Room">Luxury Room</option>

           </select>
          </div>
          <div>
            <p className='mt-4 text-gray-500'>
              Price <span>/night</span>
            </p>
              <input type="number" className='border border-gray-70 opacity-80 mt-1 pt-1 rounded w-full'
              value={inputs.pricePerNight} onChange={e=> setInputs({...inputs, pricePerNight:e.target.value})} />
          </div>
    </div>
    <div>
      <p className='mt-4 text-gray-500'>Ameneties</p>
        <div className='flex flex-col mt-1 text-gray-400 max-w-sm'>
          {Object.keys(inputs.amaneties).map((amenety, index)=>(
              <div key={index}>
                  <input type="checkbox" id={`amaneties${index + 1}`} 
                  checked={inputs.amaneties[amenety]} onChange={()=>setInputs({...inputs,
                    amaneties:{...inputs.amaneties, [amenety]:!inputs.amaneties[amenety]}
                  })} />
                  <label htmlFor={`amaneties${index + 1}`} > {amenety}</label>
              </div>

          ))}
        </div>
    </div>
    <button className='bg-primary rounded font-medium text-white border border-b-gray-700
    cursor-pointer mt-4 px-8 py-2'>
      Add Room
    </button>
    </form>
  )
}

export default AddRoom