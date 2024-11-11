import React, { useContext } from 'react'
import DataContext from '../Registration/UseContext/DataContext'
// import Loading from '../Loading/Loading'

const UpdateBlog = () => {
    const context = useContext(DataApi)
    const { updateBlog, blog,  handleNewBlogImages, loading, setBlog} = context
  return (
    <div className='  login_background flex items-center justify-center h-screen max-md:h-[110vh] raleway'>
    <div className=' flex justify-center items-center '>
        <div className='flex bg-white/30 backdrop-blur-md  p-5 items-center '>
        {/* {loading && <Loading/>} */}
            <div className='w-full text-white font-sans '>

                <div className='flex justify-center flex-col items-center w-full font-bold text-xl'>
            
                    <h1 className='dashboards-header'>Update Agro Blogs</h1>
                </div>

                <div className='mt-2'> 
                    <input 
                    autoComplete='off'
                    type='text'
                    placeholder='Enter Blog Title'
                    name='Blog  Title'
                    value={blog.title}
                    onChange={(e)=> setBlog({...blog, title:e.target.value})}
                    className='w-full outline-none rounded p-1 text-black'
                    />
                </div>
                
            
                
                <div className='mt-4'>
                <input
                autoComplete='off'
                type='text'
                placeholder='Enter Subtitle'
                name='Blog Subtitle'
                value={blog.subtitle}
                onChange={(e)=> setBlog({...blog, subtitle:e.target.value})}
                className='w-full outline-none rounded p-1  text-black'
                />
                </div>

                 <div className='text-lg font-semibold mb-1'>
                <label className='inline-block mb-2'>Blog Images</label>
                <div>
                    <input
                    type='file' multiple
                    placeholder='Select An Image'
                    onChange={handleNewBlogImages}
                    className='w-full outline-none rounded p-1 bg-red-950'
                    />
                </div>
                 </div>



                <div className='mt-3'>
                <textarea className='w-full h-32 text-black'
                type= 'text'
                placeholder='Description'
                value={blog.description}
                onChange={(e)=> setBlog({...blog, description:e.target.value})}
                ></textarea>
                </div>

                 
                <div className='flex items-center justify-center mt-2 font-extrabold text-3xl'><button className='bg-slate-900 text-white dashboards-header w-full  p-2 rounded  outline-none'
                onClick={ updateBlog}>UPDATE BLOGS</button></div>

    
            </div>
        </div>
    </div>
    
    

</div>
  )
}

export default UpdateBlog