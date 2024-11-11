import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FaCarAlt, FaShoppingCart, FaUser, FaPen } from 'react-icons/fa'
import DataContext from '../Registration/UseContext/DataContext'




const Admin = () => {
  const context = useContext(DataContext)
  const {products, blogs} = context
  return (
    <div>
      <h1 className='mb-4 dashboards-header'>Dashboard</h1>

      <div className='flex  flex-wrap gap-14 justify-center'>
         
              <div className=' w-[30%] flex border-2 border-black p-3  bg-black text-white flex-col items-center gap-9 rounded-md'>
                          <Link to= '/admin/allblogs' className='flex flex-col items-center'>
                          <div className=' flex'>
                            <h1 className=' text-2xl'>No of Car Blogs<FaPen className='inline text-2xl m-6 text-[#F8E231]'/></h1>
                          </div> 
                          
                          <div>
                          <h1 className='text-3xl'>{blogs.length}</h1>
                          </div>
                          </Link>
                  </div>


          <div className=' w-[30%] flex border-2 border-black p-3  bg-black text-white flex-col items-center gap-9 rounded-md'>
                  <Link to= '/admin/product' className='flex flex-col items-center'>
                 <div className=' flex'>
                   <h1 className=' text-2xl'>No of Cars<FaCarAlt className='inline text-2xl m-6 text-[#F8E231]'/></h1>
                  </div> 
                  
                  <div>
                  <h1 className='text-3xl'>{products.length}</h1>
                  </div>
                  </Link>
          </div>


          <div className=' w-[30%] flex border-2 border-black p-3  bg-black text-white flex-col items-center gap-9 rounded-md'>
                  <Link to= '/admin/user'className='flex flex-col items-center' >
                  <div className=' flex'>
                    <h1 className=' text-2xl'>No of Users<FaUser className='inline text-2xl m-6 text-[#F8E231]'/></h1>
                   </div> 
                   
                   <div>
                   <h1 className='text-3xl'>2</h1>
                   </div>
                   </Link>
           </div>


           <div className=' w-[30%] border-2 border-black p-3  bg-black text-white  gap-9 rounded-md'>
                  <Link to= '/admin/orders'className='flex flex-col items-center'>
                      <div className=' flex'>
                        <h1 className=' text-2xl'>No of Orders<FaShoppingCart className='inline text-2xl m-6 text-[#F8E231]'/></h1>
                      </div> 
                      
                      <div>
                      <h1 className='text-3xl '>2</h1>
                      </div>
                  </Link>
           </div>
       
      </div>
    </div>
  )
}

export default Admin