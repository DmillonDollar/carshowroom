import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/wild-cars-high-resolution-logo-transparent (1).png'


const Footer = () => {
    const [email, setEmail]= useState("")
    return (
        <div className='px-10 bg-black p-4 text-white'>
            <div className='grid grid-cols-3 gap-3 text-xl font-bold'>
                <div className='flex gap-4 items-center'>
                    <div>
                    <Link to="/">
                <img 
                src={logo}
                className='w-[500px]'
                />
                </Link>
                    </div>
                    <div>
                        <p className='leading-10'>523 Sylvan Ave, 5th Floor CA 94041USA, </p>
                        <p className='leading-10'>+1 (234) 56789, +1 987 654 3210</p>
                        <p className='leading-10 hover:text-blue-700 cursor-pointer'>support@agrocompany.com</p>
                    </div>
                </div>
                <div className='flex gap-6 items-center'>
                    <p className='hover:text-blue-700 cursor-pointer'>Facebook</p>
                    <p className='hover:text-blue-700 cursor-pointer'> Twitter</p>
                    <p className='hover:text-blue-700 cursor-pointer'>Instagram</p>
                </div>
                <div>
                    <form className='grid grid-rows-2  place-content-center'>
                        <div>
                            <div><h1>GET A NEWSLATTER</h1></div>
                        </div>
                        <div>
                        <label className='hidden'>NewsLatter:</label>
                                <input
                                required
                                type='email'
                                value={email}
                                onChange={(e)=>setEmail(e.target.value) }
                                placeholder='Email Address'
                                className='w-[200px] h-[50px] px-2 ]  mb-2 border-b border-white bg-black focus:outline-none'
                                />
                        </div>
                        <button className='boreder-3 border-black p-2 bg-red-600 rounded'>Sumbit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Footer
