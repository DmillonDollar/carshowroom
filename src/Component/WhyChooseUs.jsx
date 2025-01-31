import React from 'react'
import { FaTaxi, FaDotCircle, FaServicestack } from 'react-icons/fa'
// import { FaServicestack } from 'react-icons/fa'
import about from '../assets/Car Project Image/whychooseus.png'
const WhyChooseUs = () => {
  return (
    <div className='mt-20'>
        <div className='flex bg-black  mb-20 items-center gap-[30px] p-4 px-10'>
            {/* FirstPart */}
                    <div className='w-[60%]'>

                        <div className='flex flex-col text-white '>

                            <div className='flex items-center gap-5'>
                                <FaTaxi className=' text-2xl'/>
                                <p className='font-extrabold text-[25px]'>WHY CHOOSE US</p>
                            </div>

                            <div className='mb-2'>
                            <h1 className='text-4xl font-extrabold'>We Are Dedicated <span className='text-red-700'>To</span></h1>
                            </div>

                            <div className='mb-4'>
                            <h1 className='text-4xl font-extrabold'><span className='text-red-700'>Provide </span>Quality Service.</h1>
                            </div>

                            
                            <div className='mt-5'>
                                <img src={about}/>
                            </div>
                        </div>

                     </div>


                    <div className='w-[20%]'>
                        <div className='flex flex-col gap-4'>

                            {/* first Part */}

                                    <div className='bg-white rounded-xl p-3 w-[100%]'>
                                        <div className='flex flex-col  text-black'>
                                            <div className='flex justify-between items-center'>
                                                <div className='p-3 bg-red-600 rounded-[50%]'>
                                                    <FaServicestack className='text-4xl text-white'/>
                                                </div>
                                                <div>
                                                <p className='text-4xl fill-none text-red-600 font-extrabold'>01</p>
                                                </div>
                                            </div>

                                            <div>
                                            <p className='text-2xl  font-extrabold'>Best Quality Cars</p>
                                            </div>

                                            <div className='leading-8'>
                                            <p>There are many variations of the passages </p>
                                            </div>

                                        </div>
                                    </div>



                            {/* secondpart */}

                                <div className='bg-white rounded-xl p-3 w-[100%]'>
                                    <div className='flex flex-col text-black'>
                                        <div className='flex justify-between items-center'>
                                            <div className='p-3 bg-red-600 rounded-[50%]'>
                                                <FaServicestack className='text-4xl text-white'/>
                                            </div>
                                            <div>
                                            <p className='text-4xl fill-none text-red-600 font-extrabold'>02</p>
                                            </div>
                                        </div>

                                        <div>
                                        <p className='text-2xl  font-extrabold'>Best Quality Cars</p>
                                        </div>

                                        <div className='leading-8 '>
                                        <p>There are many variations of the passages  </p>
                                        </div>

                                    </div>
                                </div>
                
                        </div>
                    </div>




                    {/* Third Section */}



                    <div className='w-[20%]'>
                        <div className='flex flex-col gap-4'>

                            {/* first Part */}

                            <div className='bg-white rounded-xl p-3 w-[100%]'>
                                <div className='flex flex-col text-black'>
                                    <div className='flex justify-between items-center'>
                                        <div className='p-3 bg-red-600 rounded-[50%]'>
                                            <FaServicestack className='text-4xl text-white'/>
                                        </div>
                                        <div>
                                        <p className='text-4xl fill-none text-red-600 font-extrabold'>01</p>
                                        </div>
                                    </div>

                                    <div>
                                    <p className='text-2xl  font-extrabold'>Best Quality Cars</p>
                                    </div>

                                    <div className='leading-8 '>
                                    <p>There are many variations of the passages</p>
                                    </div>

                                </div>
                            </div>



                            {/* secondpart */}

                            <div className='bg-white rounded-xl p-3 w-[100%]'>
                                <div className='flex flex-col text-black'>
                                    <div className='flex justify-between items-center'>
                                        <div className='p-3 bg-red-600 rounded-[50%]'>
                                            <FaServicestack className='text-4xl text-white'/>
                                        </div>
                                        <div>
                                        <p className='text-4xl fill-none text-red-600 font-extrabold'>02</p>
                                        </div>
                                    </div>

                                    <div>
                                    <p className='text-2xl  font-extrabold'>Best Quality Cars</p>
                                    </div>

                                    <div className='leading-8 '>
                                    <p>There are many variations of the passages </p>
                                    </div>

                                </div>
                            </div>
                
                        </div>


                
                    </div>
        </div>
    </div>
  )
}

export default WhyChooseUs