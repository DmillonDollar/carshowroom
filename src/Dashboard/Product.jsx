import React, { useContext } from 'react'
import car from '../assets/car8-660x440.jpg.png'
import { FaPenAlt, FaTrashAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import DataContext from '../Registration/UseContext/DataContext'
import Loading from '../Loading/Loading'


const Product = () => {
  const context = useContext(DataContext)
  const {products, loading, error,updateProduct, editProduct, selected, handleDelete,} = context
  return (
    <div>
      <h4 className='dashboards-header'>Product</h4>


      <div className='text-right mb-2'>
        <Link to='/addproduct'>
        <button className='bg-[#F8E231] text-xl p-3 font-semibold rounded-lg'>ADD PRODUCT</button>
        </Link>
       
      </div>

      <div className='flex w-full'>
        {/* {error && <p>{error}</p> } */}
        {loading ? <div className='w-full flex justify-center'><Loading/> </div>:
        
        
      
          <table className='border-collapse border-2 border-white  bg-[#000000] text-white border-solid w-full' >
            <thead>
              <tr>
              <th className='border border-white px-2 text-2xl'>Car Name</th>
             <th className='border border-white px-2 text-2xl'>Car Category</th>
             <th className='border border-white px-2 text-2xl'>Car Desciption</th>
             <th className='border border-white px-2 text-2xl'>Car Image</th>
             <th className='border border-white px-2 text-2xl'>Car Price</th>
              </tr>
      
            </thead>
             
             
              {products.length ===0 ? <div className='flex justify-center w-full text-2xl text-red-500'>No Product To display please add product!!</div>:products.map((item)=>(
                  <tbody key={item.id}>
                  <tr>
                    <td className='border border-white p-2 align-text-top'>{item.name}</td>
                    <td className='border border-white px-2 align-text-top '>{item.category}</td>
                    <td className='border border-white p-2 align-text-top'>{item.description}</td>
                    <td className='border border-white p-2 '><div className='flex justify-center w-full'>
                    <img src={item.images[0]} width='200px'className=''/>
                      </div> </td>
                    <td className='border border-white p-2 align-text-top'>{item.price}</td>

                    <td className='border border-white p-2 '><div className='flex gap-4'> 
                      <Link to ='/update'>
                        <FaPenAlt className='hover:text-[#F8E231] cursor-pointer text-xl' onClick={()=>editProduct(item)}/>
                      </Link> 
                        <FaTrashAlt onClick={()=>handleDelete(item.id)} className='hover:text-[#F8E231] cursor-pointer'/>
                      </div>
                      </td>
                  </tr>
                  </tbody>
              ))}


             {/* Next Part */}
             {/* <tbody>
              <tr>
                <td className='border border-white p-2 align-text-top'>Benz</td>
                <td className='border border-white px-2 align-text-top'>Car Category</td> 
                <td className='border border-white p-2 align-text-top'>Best Quality</td>
                <td className='border border-white p-2 '><div className='flex justify-center w-full'>
                <img src={car} width='200px'className=''/>
                  </div> </td>
                <td className='border border-white p-2 align-text-top'>$20,000</td>

                <td className='border border-white p-2 '><div className='flex gap-4'> 
                  <Link to ='/update'>
                    <FaPenAlt className='hover:text-[#F8E231] cursor-pointer text-xl'/>
                  </Link> 
                     <FaTrashAlt className='hover:text-[#F8E231] cursor-pointer'/>
                  </div>
                  </td>
              </tr>
             </tbody> */}
          </table>
            }
      </div>
    </div>

  )
}

export default Product