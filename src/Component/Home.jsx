import React from 'react'
import Hero from '../MainLayout/Hero'
import MainLayout from '../MainLayout/MainLayout'
import AppStore from './AppStore'
import CarPartner from './CarPartner'
import ScrollTrig from './ScrollTrig'
import GetInTouch from './GetInTouch'
import AboutUs from './AboutUs'
import Footer from './Footer'
import WhyChooseUs from './WhyChooseUs'

const Home = () => {
  return (

    <MainLayout>
         <Hero/>
         <div >
          <CarPartner/>
          <AboutUs/>
          <WhyChooseUs/>
          <AppStore/>
          <ScrollTrig/>
          <GetInTouch/>
         
          <Footer/>
         </div>
    </MainLayout>
      
    
   
    
  )
}

export default Home