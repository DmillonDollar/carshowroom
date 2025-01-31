import React from 'react'
import about from '../assets/Car Project Image/carabout.png'
import { FaTaxi, FaDotCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const AboutUs = () => {
    return (
        <div>
            <div className='flex justify-center px-16 mt-20 gap-16 w-full'> 
                <div className='w-1/2'>
                    <img src={about}/>
                </div>
                <div className='flex flex-col w-1/2 gap-2'>

                        <div className='flex gap-5 items-center'>
                            <FaTaxi className='text-red-500 text-2xl'/>
                            <p className='text-red-700 font-extrabold text-[25px]'>ABOUT US</p>
                        </div>

                    <div className='mb-2'>
                        <h1 className='text-4xl font-extrabold'>World Largest <span className='text-red-700'>Car</span></h1>
                    </div>

                    <div className='mb-4'>
                        <h1 className='text-4xl font-extrabold'><span className='text-red-700'>Dealer </span> Marketplace.</h1>
                    </div>

                    <div className='mb-6'>
                        <p className='w-[70%] font-bold'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
                    </div>
                    <div className='flex flex-col font-bold gap-1 mb-8'>
                        <div className='flex items-center gap-3'>
                            <FaDotCircle className='text-red-500 '/>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className='flex items-center gap-3'>
                            <FaDotCircle className='text-red-500 '/>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className='flex items-center gap-3'>
                            <FaDotCircle className='text-red-500 '/>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        
                    </div>


                    <div>
                        <Link to='/allcars'>
                        <button className='border border-red-700 text-white rounded-2xl p-4 bg-red-700 font-extrabold hover:bg-black hover:text-white hover:border hover:border-black'>
                            Discover More --
                        </button>
                        </Link>
                    </div>
                       
                </div>
            </div>
        </div>
    )
}

export default AboutUs
