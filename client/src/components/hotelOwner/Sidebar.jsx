import React from 'react'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
    const SidebarLinks = [
        {name:"Dashbord", path:'/owner',icon:assets.dashboardIcon},
        {name:"Add Room", path:'/owner/add-room',icon:assets.addIcon},
        {name:"List Room", path:'/owner/list-room',icon:assets.listIcon}
    ]
  return (
    <div className='flex flex-col duration-300 border-r rounded h-full transition-all md:w-64 w-16
    border-gray-500  '>
       {
        SidebarLinks.map((item, index )=>(
           <NavLink to={item.path} key={item.name} end='/owner' className={(({isActive})=>`flex items-center
           py-3 px-4 md:px-3 gap-3 ${isActive ? "border-r-4 bg-blue-200 border-blue-600 text-blue-600 md:border-r-[6px]":
           "hover:bg-gray-100/90 border-white text-gray-700"}`)}>
                <img src={item.icon} alt={item.name} className='min-w-6 min-h-6' />
                <p className='md:block hidden text-center' >{item.name}</p>
           </NavLink>
        ))
       } 

    </div>
  )
}

export default Sidebar