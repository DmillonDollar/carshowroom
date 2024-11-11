import React from 'react'
import { Link } from 'react-router-dom'
// import slider from '../assets/car8-660x440.jpg.png'

const Hero = () => {
  
  return (
    <div className='background h-[50vh] flex mt-14 items-center justify-center flex-col '>
      <div>
          <div>
           <h1 className='fontHeader text-red-600'>Search Less. Live More</h1>
           </div>

           <div className='flex justify-center gap-3'>
                <Link to= '/allcars'>
                  <button className='para-header text-white p-2 hover:text-[#F8E231] hover:scale-110'> Inventory</button>
                </Link>
            
          <Link to= "/signup">
            <button className='para-header text-white p-2 hover:text-[#F8E231] hover:scale-110
            '> Get Started</button>
          </Link>
          </div>
           
      </div>
        
        
    </div>
  )
}

export default Hero