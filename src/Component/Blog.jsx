import React from 'react'
import MainLayout from '../MainLayout/MainLayout'
import BlogCard from './BlogCard'
import BlogHero from './BlogHero'
import BlogText from './BlogText'
import GetInTouch from './GetInTouch'
import Footer from './Footer'

const Blog = () => {
  return (
    <MainLayout>
      <BlogHero/>
      <div className=' mt-10'>

      <div className='text-center mb-10'>
        <h1 className='text-4xl font-bold'>POPULAR <span className='font-sans text-[#831e1e] leading-[4rem]'> CAR BLOG</span></h1>
        </div>

     <BlogCard/>
     <BlogText/>
     <GetInTouch/>
     <Footer/>
      </div>
    
  </MainLayout>
  )
}

export default Blog