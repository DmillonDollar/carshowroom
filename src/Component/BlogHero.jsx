import React from 'react'
import { Link } from 'react-router-dom'
// import slider from '../assets/car8-660x440.jpg.png'

const BlogHero = () => {
  
  return (
    <div className='blogbackground min-h-screen flex mt-14 items-center justify-center flex-col '>
      <div>
          <div>
           <h1 className='fontHeader text-[#FF0000]'>LATEST CAR NEWS</h1>
           </div>

           <div className='flex justify-center gap-3'>
                <Link to= '/allcars'>
                  <button className='para-header text-white p-2 hover:text-[#FF0000] hover:scale-110 border-white border-4  rounded-full px-5'> Inventory</button>
                </Link>
            
          <Link to= "/signup">
            <button className='para-header text-white p-2 hover:text-[#FF0000] hover:scale-110 border-white border-4  rounded-full px-5
            '> Get Started</button>
          </Link>
          </div>
           
      </div>
        
        
    </div>
  )
}

export default BlogHero