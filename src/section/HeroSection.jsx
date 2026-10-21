import React from 'react'
import Animated from '../component/Animated'
import { Star } from 'lucide-react'

const HeroSection = () => {

 const avtars = [
  
    "/assets/user-1.jpeg",
    "/assets/user-2.jpeg",
    "/assets/user-3.jpeg",
    "/assets/user-4.jpeg"
  
 ]

  return (
   <section className="flex flex-col justify-center items-center min-h-screen bg-[url('/assets/heroBanner.png')]
   bg-cover bg-center bg-no-repeat px-4 pt-20">

    <Animated delay={0.3} y={-20}>
      <p className='text-orange-600 text-md'>WHERE FLAVOUR MEETS ELEGANCE</p>
    </Animated>
    <Animated>
      <h1 className='font-medium text-6xl'>Creafted for unforgettable </h1>
      <h1 className='text-6xl ml-30 font-medium'>dining moments</h1>
    </Animated>

    <Animated className='mt-2' delay={0.3}>
      <p>Experience carefully menus, fresh local ingredients and</p>
      <p>impeccable service in a space made for every celebration.</p>
    </Animated>

    <Animated delay={0.3} className='bg-orange-500 text-white mt-8 py-3 px-6 rounded-3xl hover:bg-orange-600 cursor-pointer'>Book a table</Animated>

      <Animated classname='flex' delay={0.3}>
        <div className='flex mt-8'>
          {avtars.map((src, i) => (
             <img key={i} src={src} alt="guest" className='flex size-10 rounded-full
             border-slate-50 border-2 hover:translate-y-px transition' />
          ))}
        </div>
        <div className=''>
          <div className='flex mt-8 ml-5'>
         
           {[...Array(5)].map((_,i)=>(
              <Star key={i} className='fill-orange-500 size-3.5 text-orange-500'/> 
           ))}
          </div>
            <p className='text-zinc-800 ml-5'>4.8/5 Rating - 10,000 reviews</p>
        </div>

      </Animated>
       

   </section>
  )
}

export default HeroSection