import React from 'react'
import Animated from '../component/Animated'

const About = () => {
  return (
    <section id='about' className='px-auto mt-44'>
        <div className='flex flex-col md:flex-row gap-14 md:gap-18 max-w-7xl mx-auto'>

            {/* left side content img */}
            <Animated scale={0.5} y={0}>
                <img src="/assets/about.png" alt="dish" className='max-w-137 w-full h-full object-cover rounded-3xl '/>
            </Animated>

            {/* right side content */}
           <Animated scale={0.5} y={0}>
            <div className='flex'>
                <img src="/assets/iconL.png" alt="left png" />
                <span className='text-zinc-900'>CRAFTED WITH PASSION</span>
                <img src="/assets/iconR.png" alt="right png" />
            </div>
            <Animated className='mt-5'>
                <h1 className='font-medium md:text-5xl text-balance'>Experience dining <br /> beyond expectations</h1>
            </Animated>

            <Animated className='mt-5' delay={0.3}>
                <h6 className='text-zinc-700'>We Combine fresh local ingredients, creative recipes and <br />elegant presentation to deliver a memorable experience <br />with every visit.</h6>
            </Animated>

            <Animated classname='mt-9 bg-orange-500 text-white p-2 pr-8 rounded-lg flex items-center gap-3 w-fit'>
                <img src="/assets/about.png" alt="dish" className='size-15 rounded-lg object-cover shrink-0' />
                <div className='flex flex-col gap-2'>
                    <p>Bistro Royale, NY</p>
                    <a href="#">View on Map</a>
                </div>
            </Animated>    
           </Animated>

        </div>

        
    </section>
  )
}

export default About