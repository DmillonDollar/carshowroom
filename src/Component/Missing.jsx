import React from 'react'
import logo from '../assets/wild-cars-high-resolution-logo-transparent (1).png'
import { Link } from 'react-router-dom'


const Missing = () => {
  return (
    <div className='bg-[#F2F5FB] h-screen'>
            
            <div className='flex justify-left bg-black p-3'>
                <Link to="/">
                <img 
                src={logo}
                width={"150px"}
                />
                </Link>
                
            </div>

            <div className='p-6'>
                <h1 className='fontHeader'> Page Not Found!!!!</h1>
                <h3 className='dashboards-header'>Visit Our <span className='underline text-red-600 hover:text-[#F8E231]'><Link to ='/'>HomePage</Link></span></h3>
            </div>
    </div>
  )
}

export default Missing