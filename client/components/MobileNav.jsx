import React from 'react'
import { FaRegUser } from 'react-icons/fa';
import { IoMenuSharp } from "react-icons/io5";


const MobileNav = () => {
  return (
    <div className='fixed z-50 flex items-center justify-between min-w-full h-[35px] bg-graybg md:hidden'>
       <div className='ms-2 '>
         <span className='text-white text-xl'><IoMenuSharp size={28}/></span>
       </div>

       <div>
       <h1 className="font-extrabold text-base text-white uppercase">IRC'S LuxeLodgings</h1>
       </div>

       <div className='me-2'>
       <span className='text-white text-lg'><FaRegUser/></span>
       </div>

    </div>
  )
}

export default MobileNav