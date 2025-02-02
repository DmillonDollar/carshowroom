import React from 'react'
import MainLayout from '../MainLayout/MainLayout'
import Video from '../VideoBackground/Video'
import CarPartner from './CarPartner'
import AppStore from './AppStore'
import Filter from './Filter'
import ProductCard from './ProductCard'
import WhyChooseUs from './WhyChooseUs'
import Footer from './Footer'

const Inventory = () => {
  return (
    <MainLayout>
      <div className='mt-14'>
      <Video/>
      <CarPartner/>
      <Filter/>
      <ProductCard/>
      <AppStore/>
      <WhyChooseUs/>
      <Footer/>
      </div>
    
    </MainLayout>
  )
}

export default Inventory