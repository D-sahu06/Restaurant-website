import React from 'react'
import Animated from '../component/Animated'
import {  StarIcon } from 'lucide-react'
import { testimonials } from '../../data/data'

const TestonomialSection = () => {
  return (
   <section id='dishes' className='px-auto mt-44'>
        <div className='text-center'>
            <Animated delay={0.3}>
                <p className='justify-center items-center text-amber-500 font-medium uppercase'>loved by food lovers</p>
               
            </Animated>

            <Animated delay={0.4}>
                <h2 className='mt-3 font-medium text-5xl text-balance'>What Our Guests Says</h2>
            </Animated>
        </div>

        
        {/* Testonomial content */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto mt-5'>
            {testimonials.map((item, index)=>(
                <Animated key={index} y={80} delay={index * 0.2}
                classname='border border-slate-200 hover:bg-slate-50/50 rounded-2xl p-6 flex flex-col justify-between text-left'>
                    <div>
                        <div className='mb-4 flex gap-0.5'>
                            {[...Array(item.rating)].map((_,i)=>(
                                <StarIcon key={i} className='size-5 text-orange-500 fill-orange-500'/>

                            ))}
                        </div>
                        <p className='text-zinc-500  mb-6'>
                            "{item.review}"
                        </p>
                    </div>

                    <div className='flex  gap-3'>
                        <img src={item.avatar} alt={item.name} className='size-11 rounded-full object-cover shrink-0' />
                        <div>
                            <p className='font-medium'>{item.name}</p>
                            <p className='text-zinc-600'>{item.location}</p>
                        </div>
                    </div>
                </Animated>

            ))}

        </div>
    </section>
  )
}

export default TestonomialSection