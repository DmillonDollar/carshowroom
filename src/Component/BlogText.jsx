import React from 'react'
import { Link } from 'react-router-dom'
import image from '../assets/Car Project Image/getapp.png'

const BlogText = () => {
  return (
    <div  className=' p-3 mt-10 flex gap-2 px-16 raleway mb-10 items-center'>
       <div  className=' flex flex-col gap-5 w-1/2'>
       <div>
            <h1 className='font-extrabold text-3xl text-[#FF0000]'>WE AT <span className='font-thin  text-black font-sans'>WILDCARS</span></h1>
        </div>
        <div className='flex flex-col gap-8  font-thin   text-justify font-sans'>
            <p>We believe in helping brands create through strategy, story-telling, digital products, and integrated experiences on web, mobile, and in the world. And you’re here, friends, because you also believe.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi assumenda quibusdam, aperiam ab rerum maiores voluptatem officia, itaque saepe rem ratione alias architecto quam autem.</p>

            <div>
                <Link to= '/allcars'>
                    <button className='border-4 border-[#FF0000] px-[28px] py-[14px] rounded-full hover:border-[#FF0000] hover:bg-[#FF0000] hover:text-white font-semibold raleway text-xs text-[#4f4a37] cursor-pointer'>
                       OUR TOP CARS
                    </button> 
                </Link>  
            </div>
        </div>
       </div>

                <div>
                    <img src={image}/>      
                </div>
    </div>
  )
}

export default BlogText