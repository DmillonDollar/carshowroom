import React from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import MainLayout from '../MainLayout/MainLayout'



const AdminLayout = () => {
  return (
    <>
    <MainLayout>
      <div className='px-10 w-full bg-[#D01818] text-black font-extrabold text-[24px] h-[8vh] flex items-center fixed top-14 z-50 ' >
        <h1 className='hover:text-white hover:border-b-2 hover:border-b-[#F8E231] dashboards-header'>Admin Dashboard</h1>
      </div>
      <div className='flex gap-11 mb-30 '>
    <ul className='flex flex-col gap-20 p-6 w-[12%] bg-black text-red-600  h-screen fixed top-[100px] ' >
            <li className='text-[16px] font-bold hover:text-white hover:border-b-2 hover:border-b-[#F8E231] hover:transition-colour ease-in-out delay-150 duration-75 '><Link to ='/admin'>DASHBOARD</Link></li>
            <li className='text-[16px] font-bold hover:text-white hover:border-b-2 hover:border-b-[#F8E231]  w-20 hover:transition-colour ease-in-out delay-150 duration-75'><Link to= '/admin/product'>PRODUCTS</Link></li>


            <li className='text-[16px] font-bold hover:text-white hover:border-b-2 hover:border-b-[#F8E231]  w-12 hover:transition-colour ease-in-out delay-150 duration-75'><Link to= '/admin/user'>USERS</Link></li>
           
            
            <li className='text-[16px] font-bold hover:text-white hover:border-b-2 hover:border-b-[#F8E231]  w-12 hover:transition-colour ease-in-out delay-150 duration-75'><Link to= '/admin/allblogs'>BLOGS</Link></li>


            <li className='text-[16px] font-bold hover:text-white hover:border-b-2 hover:border-b-[#F8E231]  w-14 hover:transition-colour ease-in-out delay-150 duration-75'><Link to= '/admin/orders'>ORDERS</Link></li>
        </ul>
       <div className='p-6 w-[80%] ml-44 mt-24'>
          <Outlet/>
       </div>
     </div>
    </MainLayout>
     

    </>
       
       
    
  )
}

export default AdminLayout