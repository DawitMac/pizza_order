"use client"
import { menu } from '@/utils/data'
import Image from 'next/image'
import React from 'react'
import { FaFacebookF, FaTelegramPlane ,FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { usePathname } from 'next/navigation';
import { CiYoutube } from 'react-icons/ci';

const Footer = () => {
    const pathname = usePathname()
  return (
    <div className='flex flex-col items-center justify-center  bg-black'>
        <div className='flex items-center justify-between bg-[#CCB691] py-4 w-full md:px-20 px-5'>
        <ul className='flex md:flex-row flex-col md:items-center items-start justify-evenly md:gap-20 gap-3'>
            {
                menu.map((link , i)=>(
                    <li key={i} className={`text-2xl font-semibold ${pathname === link.path ? 'text-[#FF8100]' : 'text-slate-900'}`}>{link.name}</li>
                ))
            }
        </ul>
        <div className='flex flex-col items-center justify-center gap-2 py-4 '>
        <Image src="/logo.png" alt='logo' width={130} height={50} />
        <span className='flex items-center justify-between w-72 bg-white py-1 px-2 rounded-[12px]'>
        <input className='px-3 py-2 md:w-[85%] w-auto' type='text' placeholder='Your feedback..' />
        <FaTelegramPlane size={30} color='#FF8100'  />
        </span>
        </div>
        </div>
        <div className='flex md:flex-row flex-col items-center md:justify-between justify-center md:px-20 px-10 w-full py-4 md:gap-0 gap-3'>
            <div className='flex md:flex-row flex-col items-center justify-center gap-2 '>
               <p className='text-lg text-white font-normal'>@2024 Pizza All Rights Reserved.</p>
               <p className='text-lg text-white font-normal'>Terms & Conditions</p>
            </div>
            <div className='flex items-center justify-center gap-3 '>
            <FaFacebookF size={23} color='white' />
            <FaLinkedinIn size={23} color='white'  />
            <FaTwitter size={23} color='white' />
            <CiYoutube size={23} color='white' />
            </div>
        </div>
    </div>
  )
}

export default Footer