import React, { useState } from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    }

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
        <div className='hover:cursor-pointer hover:scale-125 duration-300'>
        <h1 className='w-full text-3xl font-bold text-[#d9833b]'>SQUASH.</h1>
        </div>
        <ul className='hidden md:flex'>
            <li className='p-4 hover:cursor-pointer hover:text-[#d9833b]'>Home</li>
            <li className='p-4 hover:cursor-pointer hover:text-[#d9833b]'>Puppies</li>
            <li className='p-4 hover:cursor-pointer hover:text-[#d9833b]'>Resources</li>
            <li className='p-4 hover:cursor-pointer hover:text-[#d9833b]'>About</li>
            <li className='p-4 hover:cursor-pointer hover:text-[#d9833b]'>Contact</li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
            {nav ? <AiOutlineClose className='hover:cursor-pointer' size={20}/> : <AiOutlineMenu className='hover:cursor-pointer' size={20} />}            
        </div>
        <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%] h-full ease-in-out duration-1000'}>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4 hover:cursor-pointer'>SQUASH.</h1>
            <ul className='uppercase p-4'>
            <li className='p-4 border-b border-gray-600 hover:cursor-pointer hover:text-[#d9833b]'>Home</li>
            <li className='p-4 border-b border-gray-600 hover:cursor-pointer hover:text-[#d9833b]'>Puppies</li>
            <li className='p-4 border-b border-gray-600 hover:cursor-pointer hover:text-[#d9833b]'>Resources</li>
            <li className='p-4 border-b border-gray-600 hover:cursor-pointer hover:text-[#d9833b]'>About</li>
            <li className='p-4 hover:cursor-pointer hover:text-[#d9833b]'>Contact</li> 
            </ul>                     
        </div> 
    </div>
  );
};

export default Navbar