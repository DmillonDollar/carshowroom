import React from 'react'
import bgVid  from '../assets/videoplayback.webm'
import { Link } from 'react-router-dom'

const Video = () => {
  return (
    <div className='relative h-screen w-full'>
        <div className='overlay'></div>
        <video src={bgVid} className='w-full h-full object-cover' autoPlay loop playsInline/>
        <div className='video-text fontHeader text-white '>
            <h1>Explore Our Showroom</h1>
        </div>
    </div>
  )
}

export default Video