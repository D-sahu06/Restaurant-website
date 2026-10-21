import { Section } from 'lucide-react'
import React from 'react'
import { statsData } from '../../data/data'
import Animated from '../component/Animated'

const Stats = () => {
  return (
   <section id='stats' className='px-auto mt-32'>
    <div className='flex flex-col md:flex-row items-center justify-center gap-12 md:gap-25 max-w-7xl mx-auto'>
        {statsData.map((item, index)=>(
            <Animated key={index} delay={0.3} classname='flex flex-col items-center '>
                <span className='text-6xl'>{item.number}</span>
                <span className='mt-5.5 text-2xl'>{item.title}</span>
                <span className='mt-3.5 font-light text-zinc-600 max-w-72'>{item.description}</span>

            </Animated>
        ))}

    </div>

   </section>
  )
}

export default Stats