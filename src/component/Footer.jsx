import React from 'react'
import Animated from './Animated'
import { quickLinks, sitemapLinks, socialLinks } from '../../data/data'
import { Mail, Phone } from 'lucide-react'

const Footer = () => {
  return (
  <footer className='px-auto relative mt-44 overflow-hidden'>
    <div className='max-w-7xl mx-auto'>

        {/* row*/}
        <div className='flex flex-wrap gap-6 justify-between pb-8'>
            {/*column 1 brands & social links */}
            <div className='flex flex-col items-start text-left'>
                <Animated delay={0.3}>
                    <img src="/assets/logo.svg" alt="logo" />
                </Animated>

                <Animated delay={0.3}>
                    <p className='mt-3 text-sm/5.5 text-zinc-600 max-w-81.25'>
                        Serving freshly prepared dishes with authentic flavors, premium ingredients and exceptional hospitality every day.
                    </p>
                </Animated>

                <div className='flex items-center gap-2'>
                    {socialLinks.map((item, index)=>(
                       <Animated key={index} delay={index * 0.05}>
                        <a href={item.href} className='size-7.5 rounded-full border border-slate-300 grid place-content-center mt-5'>{item.icon}</a>

                       </Animated>
                    ))}
                </div>
            </div>

            {/* Quick Links */}
            <div>
                <p className='mb-5 font-medium'>Quick Links</p>
                {quickLinks.map((link,index)=>(
                    <Animated key={link.name} delay={index * 0.05}>
                        <a href={link.href} className='text-zinc-600 hover:text-zinc-500'>{link.name}</a>
                    </Animated>

                ))}
            </div>

             {/* Get in Touch */}
           <div className=''>
            <p className='font-medium mg-5'>Get in Touch</p>
             <div className='space-y-2 mt-4'>
                <Animated>
                    <a href="mailto:hello@gmail.com" className='flex items-center gap-1 text-zinc-600 hover:text-zinc-500'>
                        <Mail size={16} className='shrink-0'/>hello@gmail.com
                    </a>

                </Animated>

                <Animated delay={0.2}>
                    <a href="tel:987-654-3210" className='flex items-center gap-1 text-zinc-600 hover:text-zinc-500'>
                        <Phone size={16} className='shrink-0'/>987-654-3210
                    </a>

                </Animated>
             </div>
            
             </div>

            {/* {sitemap links} */}
            <div>
                <p className='mb-5 font-medium'>Sitemap</p>
                <div className='flex flex-col gap-2'>
                {sitemapLinks.map((link,index)=>(
                    <Animated key={link.name} delay={index * 0.05} >
                        <a href={link.href} className='text-zinc-600 hover:text-zinc-500'>{link.name}</a>

                    </Animated>
                ))}
                </div>
            </div>
        </div>

        {/* Bottom Bar */}

        <div className='border-t text-zinc-500 border-slate-200 py-4.5 flex justify-between items-center'>
            <p>©2026. All Right Reserved</p>
            <p>Designed & built by Dewansh</p>

        </div>
    </div>

         {/* Water mark logo */}
         <div className='absolute inset-0 text-center select-none -z-1 pointer-events-none'>
            <span className='text-[300px] tracking-wide font-urbanist font-semibold text-zinc-100/70'>RESTRO</span>
         </div>

  </footer>
  )
}

export default Footer