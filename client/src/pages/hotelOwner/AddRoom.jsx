import React from 'react'
import { useState } from 'react'
import Title from '../../components/Title';



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
            <img className='bg-gray-400 rounded border border-amber-100 cursor-pointer'
             src={images[keys] ? URL.createObjectURL(images[keys]) : } alt="" />
          </label>

      ))
     }

    </div>
    
    </form>
  )
}

export default AddRoom