import React from 'react'
import Navbar from './component/Navbar'
import HeroSection from './section/HeroSection'
import Stats from './section/Stats'
import Dishes from './section/Dishes'
import Feature  from './section/Feature'
import BookingProcess from './section/Table'
import RestroTiming from './section/RestroTiming'
import TestonomialSection from './section/TestonomialSection'
import Faq from './section/Faq'
import CTA from './section/CTA'
import Footer from './component/Footer'
import LenisScroll from './component/LenisScroll'
import About from './section/About'

const App = () => {
  return (
    <>
    <LenisScroll />
    <Navbar/>
    <HeroSection />
    {/* <Another /> */}
    <About />
    <Stats />
    <Dishes />
    <Feature />
    <BookingProcess />
    <RestroTiming />
    <TestonomialSection />
    <Faq />
    <CTA />
    <Footer />
    </>
  )
}

export default App