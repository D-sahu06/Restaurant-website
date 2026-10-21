import React from 'react'
import Animated from '../component/Animated'
import { Star } from 'lucide-react'
import { bookingSteps } from '../../data/data'

const BookingProcess = () => {
  return (
      <section id='booking' className='px-auto mt-50'>
        <div className='max-w-7xl mx-auto grid grid-cols-2 gap-16 md:gap-25'>
            {/* Left side */}
            <div className='flex flex-col text-center md:text-left'>
            <Animated delay={0.3}>
                <p className=' text-amber-600 font-medium uppercase'>table reservation process</p>
            </Animated>

            <Animated delay={0.4}>
                <h2 className='mt-3 font-medium text-4xl text-balance'>Reserve your table in<br />three simple steps</h2>
            </Animated>

            <div>
            <div className='flex mt-13 '>
                {[...Array(5)].map((_,i)=>(
                  <Star key={i} className='text-orange-500 fill-orange-500 size-5.5'/>
                ))}
            </div>
            <p className='mt-4 text-zinc-500'>"We had an amazing evening with delicious food. <br />excellent service, and a warm atomosphere, We'll <br /> definitely visit again"</p>
           </div>
           
          <Animated classname='flex' delay={0.5}>
            <div className='flex mt-5'>
                <img src="/assets/user-2.jpeg" alt="photo" className='size-10 rounded-full border-2 border-slate-50 cursor-pointer object-cover' />
                 <p className=' ml-3 text-xl font-medium'>Sofia Martinez</p>
            </div>
          </Animated>
            </div>

             {/* right side content */}
        <div className='space-y-14 text-left'>
            {bookingSteps.map((step, index)=>(
               <Animated key={index} classname='flex gap-9 items-start' delay={index * 0.15} y={150}>
                <span className='text-orange-500 font-medium text-lg shrink-0'>{step.number}</span>

                <div className='flex flex-col'>
                    <h2 className='text-xl mb-5'>{step.title}</h2>
                    <p className='text-zinc-500'>{step.description}</p>
                </div>
               </Animated>
               
            ))}

        </div>
        </div>
        </section>        
  )
}

export default BookingProcess