import React from 'react'
import Animated from '../component/Animated'
import { faqs } from '../../data/data'
import { X, Plus } from 'lucide-react'

const Faq = () => {
  return (
     <section id='faq' className='px-auto mt-44'>
        <div className='text-center'>
            <Animated delay={0.3}>
                <p className='justify-center items-center text-amber-500 font-medium '>FAQs</p>
               
            </Animated>

            <Animated delay={0.4}>
                <h2 className='mt-3 font-medium text-5xl text-balance'>Frequently Asked Questions</h2>
            </Animated>
        </div>

        <div className='space-y-3 mt-7'>
            {faqs.map((faq,index)=>(
                <Animated key={index} delay={index * 0.15} y={150}>
                    <details className='border border-slate-200 text-zinc-500 rounded-lg group'>
                        <summary className='flex items-center justify-between p-4 cursor-pointer list-none hover:bg-slate-50/50 
                        transition-colors [&::-webkit-details-marker]:hidden'>
                            <span className='text-zinc-700 pr-4'>{faq.question}</span>
                            <span className='size-7 rounded-full bg-black/5 grid place-content-center shrink-0'>
                                <Plus size={14} className='group-open:hidden' />
                                <X size={14} className='hidden group-open:block' />
                            </span>
                        </summary>
                        <p className='px-5 pb-4 leading-relaxed'>{faq.answer}</p>
                    </details>
            
                </Animated>
            ))}
        </div>
    </section> 
  )
}

export default Faq