import React from 'react'
import { FaCar, FaGooglePlay, FaAppleAlt } from 'react-icons/fa'
import  apple from '../assets/Car Project Image/getapp.png'


const AppStore = () => {
  return (
    <div className='  flex items-center mb-20'>
        <div className='w-[45%] flex flex-col gap-3 px-16'>
            <div className='flex items-center gap-5 text-xl text-red-800 tracking-widest font-medium'>
                <FaCar/>
                <h1> GET OUR APP</h1>
            </div>


            <div>
                <h1 className='text-5xl font-extrabold'>Download Our <span className='text-red-700'>Motex</span> App For Free</h1>
            </div>

            <div>
                <p className='leading-2 mb-3 font-semibold'>
                There are many variations of passages available but the majority have suffered in some form going to use a passage by injected humour.
                </p>
            </div>

            <div className='flex gap-2 text-white'>
                <div className='flex gap-3 items-center font-bold bg-red-700 rounded-lg p-3 hover:bg-white hover:text-black cursor-pointer'>
                    <FaGooglePlay className='text-4xl'/>
                    <div>
                        <p>Get it On</p>
                        <p>GooglePlay</p>
                    </div>
                </div>

               
                <div className='flex gap-3 items-center font-bold bg-red-700 rounded-lg p-3 hover:bg-white hover:text-black cursor-pointer'>
                    <FaAppleAlt className='text-4xl'/>
                    <div>
                        <p>Get it On</p>
                        <p>Apple Store</p>
                    </div>
                    </div>
            </div>
           
        </div>

        <div>
            <img src={apple}/>
        </div>
    </div>
  )
}

export default AppStore