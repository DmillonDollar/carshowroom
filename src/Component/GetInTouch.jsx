import React, { useState } from 'react'

const GetInTouch = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState("")
    const [comment, setComment] = useState('')
    return (
        <div className='flex flex-col items-center bg-[#333] p-24 raleway '>
            <div className='text-center'>
                <h1 className=' text-white text-5xl font-extrabold mb-8'>GET <span className='font-sans font-thin'>IN TOUCH</span></h1>
                <p className='text-white w-[600px] mb-8'>Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</p>
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
                                className='w-[400px] h-[50px] px-2 bg-[#333] text-white border-b border-white focus:outline-none'
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
                                className='w-[400px] h-[50px] bg-[#333] text-white border-b border-white focus:outline-none'  
                                />
                            </div>
                   
                </div>

                 <div>
                            <textarea cols={100} rows={10}
                            placeholder='Comments'
                            required
                            value={comment}
                                onChange={(e)=>setComment(e.target.value) }
                                className=' bg-[#333] border-b border-white focus:outline-none px-2 text-white'
                            ></textarea>
                               
                </div>
                <div>
                        <button className='border-4 border-white w-[820px] p-4 rounded-full text-[15px] font-bold text-white hover:bg-red-600 hover:border-red-600 hover:text-black hover:font-bold'>SEND</button>
                </div>
                
            </form>
        </div>
    )
}

export default GetInTouch
