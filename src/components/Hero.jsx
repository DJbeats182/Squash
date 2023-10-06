import React from 'react'
import Typed from 'react-typed'

const Hero = () => {
  return (
    <div className='text-white'>
        <div className='man-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
          <p className='text-[#d9833b] font-bold p-2'>LITERALLY SO CUTE!</p>
          <h1 className='md:text-6xl sm:text-6xl text-4xl font-bold md:py-6'>Keeping up with Sasha</h1>
          <div className='flex justify-center items-center'>
            <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>She goes by many names,</p>
            <Typed className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2' strings={['Sasha', 'Sashiii', 'Squasha']} typeSpeed={120} backSpeed={140} loop />
          </div>
          <p className='md:text-2xl text-xl font-bold text-gray-500'>Welcome to Sasha's super awesome <u>premium</u> subscription website!</p>
          <button className='bg-[#d9833b] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black hover:bg-[#ad6327] hover:scale-105 duration-300'>Get Started</button>
        </div>
    </div>
  );
};

export default Hero