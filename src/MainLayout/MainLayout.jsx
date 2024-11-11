import React from 'react'
import Nav from './Nav'


const MainLayout = ({children}) => {
  return (
    <div className=''>
       <Nav/>
       <div className=''>
          {children}
       </div>

    </div>
       
       
    
  )
}

export default MainLayout