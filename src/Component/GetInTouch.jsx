import React, { useState } from 'react'

const GetInTouch = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState("")
    const [comment, setComment] = useState('')
    return (
        <div className='flex flex-col items-center p-24 raleway '>
            <div className='text-center'>
                <h1 className='  text-5xl  font-extrabold mb-8'>GET <span className='font-sans font-thin text-red-900'>IN TOUCH</span></h1>
                <p className=' w-[600px] mb-8'>Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</p>
            </div>

            <form className='w-full flex items-center flex-col gap-10'>
                <div className='flex gap-10'>
                            <div >
                                <label className='hidden'>Name:</label>
                                <input
                                required
                                type='text'
                                value={name}
                                onChange={(e)=>setName(e.target.value) }
                                placeholder='Name'
                                className='w-[400px] h-[50px] px-2 border border-black rounded-full'
                                />
                            </div>

                            <div >
                            <label className='hidden'>Email:</label>
                                <input
                                required
                                type='email'
                                value={email}
                                onChange={(e)=>setEmail(e.target.value) }
                                placeholder='E-mail'
                                className='w-[400px] px-2 h-[50px] border border-black rounded-full'  
                                />
                            </div>
                   
                </div>

                 <div>
                            <textarea cols={100} rows={10}
                            placeholder='Comments'
                            required
                            value={comment}
                                onChange={(e)=>setComment(e.target.value) }
                                className=' p-2 border border-black rounded-lg'
                            ></textarea>
                               
                </div>
                <div>
                        <button className='border-4 border-black w-[820px] p-4 rounded-full text-[15px] font-bold  hover:bg-red-600 hover:border-red-600 hover:text-white hover:font-bold'>SEND</button>
                </div>
                
            </form>
        </div>
    )
}

export default GetInTouch
