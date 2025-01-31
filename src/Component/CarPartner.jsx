import React from 'react'
import partner1 from '../assets/Car Project Image/toyotalogo.png'
import partner2 from '../assets/Car Project Image/mercedezlogo.png'
import partner3 from '../assets/Car Project Image/hyundailogo.png'
import partner4 from '../assets/Car Project Image/ferrarilogo.png'
import partner5 from '../assets/Car Project Image/toyotalogo.png'

const CarPartner = () => {
  return (
    <div className=' mt-20 mb-20'>
        <div className='mb-20 text-center'>
            <h1 className='  text-4xl'>Our Top <span className='font-sans font-extrabold text-[#c72e2e]'>Partner</span></h1>
        </div>
        <div className='px-16 flex gap-[80px] justify-center'>
            <div className='hover:scale-125 hover:transition-all'>
                <img src={partner1}/>
            </div>

            <div className='hover:scale-125 hover:transition-all'>
            <img src={partner2}/>
            </div>

            <div className='hover:scale-125 hover:transition-all'>
            <img src={partner3}/>
            </div>

            <div className='hover:scale-125 hover:transition-all'>
            <img src={partner4}/>
            </div>

            <div className='hover:scale-125 hover:transition-all'>
            <img src={partner5}/>
            </div>

        </div>
    </div>
  )
}

export default  CarPartner 
