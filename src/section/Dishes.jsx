import React, { useState } from 'react'
import Animated from '../component/Animated'
import { dishes } from '../../data/data'
 import {motion} from 'motion/react'

const Dishes = () => {

    const [rotate, setRotate] = useState({})
  
  return (
    <section id='dishes' className='px-auto mt-44'>
        <div className='text-center'>
            <Animated delay={0.3}>
                <p className='justify-center items-center text-orange-500 font-medium uppercase'>Chef's Signature Selection</p>
               
            </Animated>

            <Animated delay={0.4}>
                <h2 className='mt-3 font-medium text-5xl text-balance'>Discover our <br /> signature dishes</h2>
            </Animated>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-18 max-w-5xl mx-auto mt-15'>
            {dishes.map((dish, index)=>(
                <Animated key={index} delay={index * 0.1} y={80} classname='flex flex-col items-center text-center shrink-0 cursor-pointer'
                onMouseEnter={()=> setRotate((prev)=> ({...prev, [index]: (prev[index] || 0)+180}))}>
                    <motion.div animate={{rotate : rotate[index] || 0}} transition={{type: "spring",stiffness: 15, damping: 80}}>
                        <img src={dish.img} alt={dish.title} className='size-30 md:size-35 object-cover ' />
                        
                    </motion.div>
                    <span className='mt-3'>{dish.title}</span><br />
                    {/* <span className='text-zinc-600 '>{dish.price}</span> */}
                    <p className='text-zinc-600'>{dish.price}</p>
                
                </Animated>

            ))}
        </div>
    </section>
  )
}

export default Dishes