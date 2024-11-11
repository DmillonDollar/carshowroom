import React, { useContext } from 'react'
import car from '../assets/car8-660x440.jpg.png'
import { FaPenAlt, FaTrashAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import DataContext from '../Registration/UseContext/DataContext'
import Loading from '../Loading/Loading'

const AllBlogs = () => {
  const context = useContext(DataContext)
  const {blogs, loading, error, handleDeleteBlog, editBlog} = context
  return (
    <div>
      <h4 className='dashboards-header'>Blogs</h4>


      <div className='text-right mb-2'>
        <Link to='/addblog'>
        <button className='bg-[#F8E231] text-xl p-3 font-semibold rounded-lg'>ADD BLOG</button>
        </Link>
       
      </div>

      <div className='flex w-full'>
        {error && <p>{error}</p> }
        {loading ? <div className='w-full flex justify-center'><Loading/> </div>:
        
        
      
          <table className='border-collapse border-2 border-white  bg-[#000000] text-white border-solid w-full' >
            <thead>
              <tr>
              <th className='border border-white px-2 text-2xl'>Blog Title</th>
             <th className='border border-white px-2 text-2xl'>Blog SubTitle</th>
             <th className='border border-white px-2 text-2xl'>Blog Description</th>
             <th className='border border-white px-2 text-2xl'>Blog Image</th>
             
              </tr>
      
            </thead>
             
             
              {blogs.map((item)=>(
                  <tbody key={item.id}>
                  <tr>
                    <td className='border border-white p-2 align-text-top'>{item.title}</td>
                    <td className='border border-white px-2 align-text-top '>{item.subtitle}</td>
                    <td className='border border-white p-2 align-text-top'>{item.description}</td>
                    <td className='border border-white p-2 '><div className='flex justify-center w-full'>
                    <img src={item.images} width='200px'className=''/>
                      </div> </td>
        

                      <td className='border border-white p-2 '><div className='flex gap-4'> 
                      <Link to ='/updateblog'>
                        <FaPenAlt className='hover:text-[#F8E231] cursor-pointer text-xl' onClick={()=>editBlog(item)}/>
                      </Link> 
                        <FaTrashAlt onClick={()=>handleDeleteBlog(item.id)} className='hover:text-[#F8E231] cursor-pointer'/>
                      </div>
                      </td>
                  </tr>
                  </tbody>
              ))}

          </table>
            }
      </div>
    </div>

  )
}


export default AllBlogs