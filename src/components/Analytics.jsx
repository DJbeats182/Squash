import React from 'react'
import Laptop from '../assets/squasha.png'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-4' src={Laptop} alt="Sasha the Corgi" title='"Hey! Im CUTE!!!"' />
            <div className='flex flex-col justify-center'>
            <p className='text-[#d9833b] font-bold'>THE COMPLETE HISTORY OF SASHA</p>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Learn about the history of Corgis</h1>
            <p className=''>Corgis, hailing from Wales, evolved as versatile herders, specializing in cattle. Pembroke and Cardigan breeds emerged, gaining popularity, notably with British royalty, for their distinctive appearance and charming demeanor.</p>
            <button className='bg-black text-[#d9833b] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 hover:bg-[#3c3c3c] hover:scale-105 duration-300'>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Analytics