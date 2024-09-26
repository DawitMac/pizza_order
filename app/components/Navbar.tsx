"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { menu } from '@/utils/data'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { CiMenuBurger } from 'react-icons/ci'

const Navbar = () => {
    const [ open , setOpen ] = useState(false)
    const pathname = usePathname()
  return (
    <nav>
    <div className='fixed w-screen z-50  bg-transparent h-20 flex items-center justify-between px-5'>
            <Image src="/logo.png" alt='logo' width={130} height={50} />
        <ul className='md:flex items-center justify-evenly gap-20 hidden '>
            {
                menu.map((link , i)=>(
                    <li key={i} className={`text-2xl font-semibold ${pathname === link.path ? 'text-[#FF8100]' : 'text-slate-900'}`}>{link.name}</li>
                ))
            }
        </ul>
       <span className='flex items-center justify-center gap-3'>
       <button className='text-white bg-[#FF8100] text-2xl font-semibold px-8 py-3 rounded-[5px]'>Register</button>
        <button className='flex md:hidden cursor-pointer hover:scale-105 duration-300 ease-in-out' 
            onClick={()=> setOpen(!open)}>
             <CiMenuBurger size={40} className='font-extrabold'/>
            </button>
       </span>
    </div>
    <div  className={`absolute left-0 flex items-center justify-center  w-full transition-all duration-300 ease-linear z-50  ${open ? 'top-24 opacity-1 z-10' : '-top-24 opacity-0 -z-10'}`}  >
    <ul  className={`flex flex-col md:hidden items-start justify-center gap-6 p-16 text-xl w-full bg-[#FF8100] text-white `} >
        {
            menu.map((list , index ) => (
                <li  key={index} className={`text-2xl font-semibold ${pathname === list.path ? 'text-gray-900' : 'text-white'}`} onClick={()=>setOpen(false)}>
                    <Link href="/">{list.name}</Link>
                </li>
            ))
        }
    </ul>
    </div>
    </nav>
  )
}

export default Navbar