import React from 'react'
import { OrbitProgress } from 'react-loading-indicators'
import loader from '../assets/fec686_9cfc1444668b4ae9bd77f2c9e2fa28ed~mv2.gif'
const Loading = () => {
  return (
    <div className='w-[30%]'>
       <img src={loader} className='w-full'/>
    </div>
    
    
  )
}

export default Loading
