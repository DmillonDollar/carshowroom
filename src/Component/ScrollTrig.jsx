import React, { useState } from 'react'
import ScrollTrigger from 'react-scroll-trigger'
import CountUp from 'react-countup'
import { FaPerson, FaCar, FaBlog, FaComputer, FaPen } from 'react-icons/fa6'

const ScrollTrig = () => {
  const [countup, setCountup] = useState(false)
  return (
    <div className='grid grid-cols-4  px-16 py-24 raleway bg-red-600 text-white  place-content-center'>
      {/* first */}
        <div className='flex gap-2 flex-col items-center text-center'>
            <div className='bg-black p-3 rounded-[50%]'>
               <FaPerson  className='text-3xl'/>
            </div>
            
            <div>
                  <ScrollTrigger onEnter={()=> setCountup(true)} onExit={()=> setCountup(false)}>
                      <h1 className='text-4xl font-extrabold 
                       leading-14'>
                        {
                          countup && <div>
                           + <CountUp start={0} end={19500} duration={2.75} />
                          </div>
                       

                        }
                        
                      </h1>
                  </ScrollTrigger>

                <p className='font-bold text-center text-xl'>Client</p>
            </div>
        </div>

{/* second */}

        <div className='flex gap-2 flex-col items-center '>
            <div  className='bg-black p-3 rounded-[50%]'>
             <FaCar  className='text-2xl'/>
            </div>
            
            <div>
                  <ScrollTrigger onEnter={()=> setCountup(true)} onExit={()=> setCountup(false)}>
                      <h1 className='text-4xl font-extrabold 
                       leading-14'>
                        {
                          countup && <div>
                          + <CountUp start={0} end={2000} duration={2.75} />
                         </div>
                        }
                        
                      </h1>
                  </ScrollTrigger>

                <p className='font-bold text-center text-xl'>Top Cars</p>
            </div>
        </div>


{/* third */}
        <div className='flex gap-2 flex-col items-center'>
            <div  className='bg-black p-3 rounded-[50%]'>
                <FaPen  className='text-2xl'/>
            </div>
            
            <div>
                  <ScrollTrigger onEnter={()=> setCountup(true)} onExit={()=> setCountup(false)}>
                      <h1 className='text-4xl font-extrabold 
                       leading-14'>
                        {
                           countup && <div>
                           + <CountUp start={0} end={195} duration={2.75} />
                          </div>
                        }
                        
                      </h1>
                  </ScrollTrigger>

                <p className='font-bold text-center text-xl'>Blog</p>
            </div>
        </div>


{/* fourth */}
        <div className='flex gap-2 flex-col items-center'>
            <div  className='bg-black p-3 rounded-[50%]'>
                <FaComputer className='text-2xl'/>
            </div>
            
            <div>
                  <ScrollTrigger onEnter={()=> setCountup(true)} onExit={()=> setCountup(false)}>
                      <h1 className='text-4xl font-extrabold 
                       leading-14'>
                        {
                           countup && <div>
                           +  <CountUp start={0} end={500} duration={2.75} />
                          </div>
                        }
                        
                      </h1>
                  </ScrollTrigger>

                <p className='font-bold text-center text-xl'>Customer Service</p>
            </div>
        </div>
    </div>
  )
}

export default ScrollTrig