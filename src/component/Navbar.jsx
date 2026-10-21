import React , {useEffect, useState} from 'react'
import { navLinks } from '../../data/data'
import {MenuIcon, XIcon} from 'lucide-react'

const Navbar = () => {

  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // useEffect(()=>{
  //    const handleScroll = () => {
  //     setScrolled(window.scrollY > 10);
  //    }
  //    window.addEventListener("scroll", handleScroll)
  //    return (()=> window.removeEventListener("scroll", handleScroll))
  // },[])

  useEffect(()=>{
   const handleScroll = ()=> {
        setScrolled(window.scrollY > 10)
   }
        window.addEventListener("scroll", handleScroll)
        return (()=> window.removeEventListener("scroll", handleScroll))
   
  },[])
  
  return (
    <>
        <nav className={`fixed top-0 z-20 px-auto w-full trannsaction-all duration-300 ${scrolled ? 'bg-white/70 backdrop-blur-md':'bg-transparent'}`}>
            <div className='flex items-center justify-between font-medium py-4 mx-auto max-w-7xl'>
                <a href=""><img src="/assets/logo.svg" alt="logo" /></a>

                {/* desktop navigation links */}
                <div className='items-center gap-10 hidden md:flex'>
                  {navLinks.map((link) => (
                    <a key={link.name} href={link.href} className='hover:text-zinc-600'> {link.name}</a>
                  ))}
                </div>

                <a href="/booking - process" className='bg-orange-500 text-white px-6 py-3 rounded-full transition hidden md:block hover:bg-orange-500'>Book a Table</a>
                
                <button onClick={()=>{
                  setMobileOpen(true)
                }}
                className='md:hidden bg-zinc-800 text-white p-2 rounded-md aspect-square'>
                  <MenuIcon />
                </button>
            </div>
        </nav>

          {/* {   mobile navigation drawer} */}

        <div className={`flex flex-col items-center justify-center p-8 fixed inset-0 bg-white/70 backdrop-blur-md z-40 transform
          transition-transform duration-300 ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className='flex flex-col items-center font-medium space-y-6'>
            {navLinks.map((link) => (
                <a key={link.name} href={link.href} className='text-2xl text-zinc-800 transition-colors duration-300 hover:text-orange-500 cursor-pointer'
                onClick={() =>{
              setMobileOpen(false)
            }}>{link.name}
                </a>
            ))}

            <button onClick={() =>{
              setMobileOpen(false)
            }}
            className='p-2 bg-zinc-800 text-white rounded-md aspect-square'>
              <XIcon />
            </button>
          </div>
        </div>
    </>
  )
}

export default Navbar