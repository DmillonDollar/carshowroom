import React from 'react'
import MainLayout from '../MainLayout/MainLayout'
import Video from '../VideoBackground/Video'
import CarPartner from './CarPartner'
import AppStore from './AppStore'
import Filter from './Filter'
import ProductCard from './ProductCard'

const Inventory = () => {
  return (
    <MainLayout>
      <div className='mt-14 mb-80'>
      <Video/>
      <CarPartner/>
      <Filter/>
      <ProductCard/>
      <AppStore/>
      </div>
    
    </MainLayout>
  )
}

export default Inventory