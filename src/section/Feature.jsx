import React from 'react'
import Animated from '../component/Animated'
import {ChefHat, Heart, Leaf} from 'lucide-react'
import { featuresData } from '../../data/data'

const Feature = () => {

  const iconMap = {
    ChefHat,
    Leaf,
    Heart
  }

  return (
     <section id='feature' className='px-auto mt-44'>
        <div className='text-center'>
            <Animated delay={0.3}>
                <p className='justify-center items-center text-orange-500 font-medium uppercase'>what sets us apart</p>
               
            </Animated>

            <Animated delay={0.4}>
                <h2 className='mt-3 font-medium text-5xl text-balance'>Crafting memorable dining<br />experience</h2>
            </Animated>
        </div>

        <div className='flex flex-col md:flex-row justify-between items-center gap-14  max-w-7xl mx-auto'>
            <div className='space-y-10 max-w-md'>
                {featuresData.map((item, index)=>{
                      const IconComponent = iconMap[item.icon];
                      return(
                        <Animated key={index} y={150} delay={index * 0.15} classname='flex items-start gap-4 text-left'>
                            {IconComponent && <IconComponent className='text-orange-500 shrink-0 size-5 mt-0.5'/>}

                            <div>
                                <h2 className='text-xl mb-2'>{item.title}</h2>
                                <p className='max-w-sm text-zinc-600'>{item.description}</p>
                            </div>

                        </Animated>
                      )
                })}
               
            </div>
            <Animated x={50} y={0}>
                <img src="/assets/chef.png" alt="chef"  className='w-full rounded-3xl h-111 object-cover max-w-sm mt-15'/>
            </Animated>
        </div>
        </section>
  )
}

export default Feature