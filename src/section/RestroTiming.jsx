import React from 'react'
import Animated from '../component/Animated'
import { timingData } from '../../data/data'

const RestroTiming = () => {
  return (
   <section id='#contact' className='px-auto mt-44'>
     <Animated scale={0.8} y={0}
     classname="w-full max-w-5xl h-162.5 rounded-3xl bg-cover bg-center flex items-center justify-center md:justify-start px-16 md:px-14 
     overflow-hidden mx-auto bg-[url('/assets/restro-timing.png')]">

        <div className='bg-white h-122 w-85 ml-15 rounded-2xl'>
            <Animated>
                 <h3 className='p-4 font-medium text-xl'>Opening Timing :</h3>
            </Animated>
            {timingData.map((items,index)=>(
                <Animated key={index} classname='flex px-8 justify-between items-center space-y-7 '>
                    <span className='text-zinc-500'>{items.day}</span>
                    <h2 className={`font-medium ${items.hours === "Closed" ? "text-zinc-400" : "text-zinc-500"}`}>{items.hours}</h2>

                </Animated>
            ))}

            <Animated delay={0.3} classname='mt-3 flex justify-center items-center px-2 py-3' >
                <a href='#booking-process' className='bg-orange-500 text-white rounded-full px-4 py-3'>Book a Table</a>
            </Animated>
        </div>

     </Animated>

   </section>
  )
}

export default RestroTiming