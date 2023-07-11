import Image from 'next/image'
import React from 'react'
import {HiSearch,HiBell,HiChat} from "react-icons/hi"

const Header = () => {
  return (
    <div className='flex gap-3 md:gap-2 items-center p-6'>
        <Image src='/logo.png' alt='logo' width={50} height={50} className='hover:bg-gray-300 p-2 rounded-full cursor-pointer'/>
        <button className='bg-black text-white rounded-full p-2 px-4 hidden md:block'>Home</button>
        <button className='font-semibold p-2 px-4'>Create</button>
        <div className='bg-[#e9e9e9] p-3 hidden md:flex gap-3 items-center rounded-full w-full'>
            <HiSearch className='text-[25px] text-gray-500'/> 
            <input type='text' placeholder='Search' className='bg-transparent outline-none'/>
        </div>
            <HiSearch className='md:hidden text-[25px] text-gray-500'/> 
            <HiBell className='text-[40px] text-gray-500'/>
            <HiChat className='text-[40px] text-gray-500'/>
            <Image src="/man.png" alt='user-image' width={50} height={50} className='hover:bg-gray-300 p-2 rounded-full cursor-pointer'/>
    </div>
  )
}

export default Header