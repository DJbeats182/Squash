import React from 'react'
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='w-full shadow-2xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt='/' />
                <h2 className='text-2xl font-bold text-center py-8'>Basic Subscription</h2>
                <p className='text-center text-4xl font-bold'>$0/month</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>5 Cute Pictures</p>
                    <p className='py-2 border-b mx-8'>1 Kiss</p>
                    <p className='py-2 border-b mx-8'>Bark! Bark!</p>
                </div>
                <button className='bg-[#d9833b] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 hover:bg-[#ad6327]'>Start Trial</button>
            </div>
            <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Double} alt='/' />
                <h2 className='text-2xl font-bold text-center py-8'>Premium Subscription</h2>
                <p className='text-center text-4xl font-bold'>$19.95/month</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>10 Cute Pictures</p>
                    <p className='py-2 border-b mx-8'>5 Kisses</p>
                    <p className='py-2 border-b mx-8'>1/2 Tomatoe</p>
                </div>
                <button className='bg-black text-[#d9833b] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 hover:bg-[#3c3c3c]'>Start Trial</button>
            </div>
            <div className='w-full shadow-2xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Triple} alt='/' />
                <h2 className='text-2xl font-bold text-center py-8'>Pro Subscription</h2>
                <p className='text-center text-4xl font-bold'>$29.95/month</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>100 Cute Pictures</p>
                    <p className='py-2 border-b mx-8'>10 Sasha Shout-outs</p>
                    <p className='py-2 border-b mx-8'>1 Whole Tomatoe</p>
                </div>
                <button className='bg-[#d9833b] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 hover:bg-[#ad6327]'>Start Trial</button>
            </div>
        </div>
    </div>
  )
}

export default Cards