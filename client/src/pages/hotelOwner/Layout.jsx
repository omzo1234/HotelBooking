import React from 'react'
import Navbar from '../../components/hotelOwner/Navbar'
import Sidebar from '../../components/hotelOwner/Sidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='flex flex-col h-screen'>
        <Navbar/>
        <div className='flex h-full'>
            <Sidebar/>
        </div>
        
        <div className='flex-1 p-4 pt-10 h-full md:px-10'>
                <Outlet/>
        </div>
    </div>
  )
}

export default Layout