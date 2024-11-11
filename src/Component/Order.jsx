import React, {useContext} from 'react'
import MainLayout from '../MainLayout/MainLayout'
import DataContext from '../Registration/UseContext/DataContext'
import GetInTouch from './GetInTouch'
import Footer from './Footer'

const Order = () => {
    const userid = JSON.parse(localStorage.getItem('user')).user.uid
    const context = useContext(DataContext)
    const { loading, order } = context
  return (
    <MainLayout>
   <div>

   <div>
      {loading && <Loading />}
      {!order.length > 0 ?
        (<>
          <div className=" pt-10">
            {
              order.filter(obj => obj.userid == userid).map((order) => {
                // order.cartItems.map()
                return (
                  <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
                    {
                      order.cartItems.map((item) => {
                        return (
                          <div className="rounded-lg md:w-2/3">
                            <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                              <img src={item.images[0]} alt="product-image" className="w-full rounded-lg sm:w-40" />
                              <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                                <div className="mt-5 sm:mt-0">
                                  <h2 className="text-lg font-bold text-gray-900" >{item.title}</h2>
                                  <p className="mt-1 text-xs text-gray-700" >{item.description}</p>
                                  <p className="mt-1 text-xs text-gray-700" >{item.price}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        )
                      })
                    }
                  </div>
                )
              })
            }
          </div>
        </>)
        :
        (
          <h2 className=' text-center tex-2xl text-black'>No Order</h2>
        )

      }
    </div>
   </div>
  </MainLayout>
  )
}

export default Order