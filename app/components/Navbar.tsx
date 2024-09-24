"use client"
import Image from 'next/image'
import React from 'react'
import { menu } from '@/utils/data'
import { usePathname } from 'next/navigation'

const Navbar = () => {
    const pathname = usePathname()
  return (
    <div className='sticky bg-white h-20 flex items-center justify-between px-5'>
            <Image src="/logo.png" alt='logo' width={130} height={50} />
        <ul className='flex items-center justify-evenly gap-20'>
            {
                menu.map((link , i)=>(
                    <li key={i} className={`text-2xl font-semibold ${pathname === link.path ? 'text-[#FF8100]' : 'text-slate-900'}`}>{link.name}</li>
                ))
            }
        </ul>
        <button className='text-white bg-[#FF8100] text-2xl font-semibold px-8 py-3 rounded-[5px]'>Register</button>
    </div>
  )
}

export default Navbar