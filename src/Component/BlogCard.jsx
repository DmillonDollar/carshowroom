import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = () => {
  return (
    <div className=''>
        <div className='grid grid-cols-3 px-16 gap-6 '>
            <div className='blog1 px-3'>
                {/* <div className='bg-[#fcdb5a] w-14 text-center font-bold text-[1.3rem] p-2'> <h1>3 <span className='font-sans font-medium text-[15px] text-[#b3b3b3]'>Dec</span></h1></div> */}
            </div>

            <div className='blog2 px-3'>
                {/* <div className='bg-[#fcdb5a] w-14 text-center font-bold text-[1.3rem] p-2'> <h1>3 <span className='font-sans font-medium text-[15px] text-[#b3b3b3]'>Dec</span></h1></div> */}
            </div>

            <div className='blog1 px-3'>
                {/* <div className='bg-[#fcdb5a] w-14 text-center font-bold text-[1.3rem] p-2'> <h1>3 <span className='font-sans font-medium text-[15px] text-[#b3b3b3]'>Dec</span></h1></div> */}
            </div>
        </div>


        <div className='grid grid-cols-3 px-16 gap-6 text-center '>
          <div className='p-6 raleway bg-white w-[90%] '>
            <h3 className='text-[#FF0000] text-[20px] leading-10 font-extrabold '>ROLLS ROYCE </h3>
            <h4 className='text-[20px] leading-10 font-bold'> Lorem ipsum dolor sit amet.</h4>
            <p className='mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id libero temporibus recusandae sequi dicta cumque!</p>
              <div>
                  <Link to= '/blog'>
                      <button className='border-4 border-[#FF0000] px-[28px] py-[14px] rounded-full hover:border-[#FF0000] hover:bg-[#FF0000] hover:text-white font-semibold raleway text-xs text-[#4f4a37] cursor-pointer'>
                          READ MORE
                      </button> 
                  </Link>  
              </div>
          </div>

          <div className='p-6 raleway bg-white w-[90%] '>
            <h3 className='text-[#FF0000] text-[20px] leading-10 font-extrabold'>AI SELFDRIVEN CARS </h3>
            <h4 className='text-[20px] leading-10 font-bold'> Lorem ipsum dolor sit amet.</h4>
            <p className='mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, eum facilis voluptatibus ad nostrum explicabo?</p>

            <div>
                  <Link to= '/blog'>
                      <button className='border-4 border-[#FF0000] px-[28px] py-[14px] rounded-full hover:border-[#FF0000] hover:bg-[#FF0000] hover:text-white font-semibold raleway text-xs text-[#4f4a37] cursor-pointer'>
                          READ MORE
                      </button> 
                  </Link>  
              </div>
          </div>

          <div className='p-6 raleway bg-white w-[90%] '>
            <h3 className='text-[#FF0000] text-[20px] leading-10 font-extrabold'>LEXUS STOCK CRASHING </h3>
            <h4 className='text-[20px] leading font-bold'> Lorem ipsum dolor sit amet.</h4>
            <p className='mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam iusto omnis, eius delectus culpa consectetur!.</p>

            <div>
                  <Link to= '/blog'>
                      <button className='border-4 border-[#FF0000] px-[28px] py-[14px] rounded-full hover:border-[#FF0000] hover:bg-[#FF0000] hover:text-white font-semibold raleway text-xs text-[#4f4a37] cursor-pointer'>
                          READ MORE
                      </button> 
                  </Link>  
              </div>
          </div>
              
        </div>

        

    </div>

  
 
    
  )
}

export default BlogCard