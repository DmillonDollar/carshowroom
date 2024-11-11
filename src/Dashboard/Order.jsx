import React, {useContext} from 'react'
import car from '../assets/car8-660x440.jpg.png'
import { FaPenAlt, FaTrashAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import DataContext from '../Registration/UseContext/DataContext'
import Loading from '../Loading/Loading'

const Order = () => {
  const context = useContext(DataContext)
  const {order, loading} = context

  return (
    <div>
      <h1>Orders</h1>

      <div className='flex justify-center'>
          <table className='border-collapse border-2 border-white  bg-[#000000] text-white border-solid' >
          <th className='border border-white px-2 text-2xl'>Car Name</th>
          <th className='border border-white px-2 text-2xl'>UserName</th>
          <th className='border border-white px-2 text-2xl'>User PhoneNumber</th>
          <th className='border border-white px-2 text-2xl'>PaymentId</th>
          
             <th className='border border-white px-2 text-2xl'>Car Category</th>
             <th className='border border-white px-2 text-2xl'>Car Description</th>
             <th className='border border-white px-2 text-2xl'>Car Image</th>
             <th className='border border-white px-2 text-2xl'>Car Price</th>
             

             <tbody>
             {loading && <div><Loading/></div>}
             {!orderByChild.lenth ==0 ? order.cartItems.map((items)=>{
                const {name, category, description, price, imageurl}= items;
                <tr>
              <td className='border border-white p-2 align-text-top'>{name}</td>
              <td className='border border-white p-2 align-text-top'>{order.addressinfo.name}</td>
                <td className='border border-white p-2 align-text-top'>{order.addressinfo.phonenumber}</td>
                <td className='border border-white px-2 align-text-top '>{items.paymentId}</td>
                <td className='border border-white p-2 align-text-top'>{category}</td>
                <td className='border border-white p-2 align-text-top'>{description}</td>
                <td className='border border-white p-2 '><div className='flex justify-center w-full'>
                <img src={imageurl} width='200px'className=''/>
                  </div> </td>
                <td className='border border-white p-2 align-text-top'>{price}</td>

                <td className='border border-white p-2 '><div className='flex gap-4'> 
                  <Link to ='/update'>
                    <FaPenAlt className='hover:text-[#F8E231] cursor-pointer text-xl'/>
                  </Link> 
                     <FaTrashAlt className='hover:text-[#F8E231] cursor-pointer'/>
                  </div>
                  </td>
              </tr>
            }
          
             )    :<p>No Items to display</p>}
              
             </tbody>


      
          </table>
      </div>
    </div>

  )
}

export default Order