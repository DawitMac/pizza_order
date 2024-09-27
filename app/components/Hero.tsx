import Image from 'next/image'
import React from 'react'
import { CiSearch } from "react-icons/ci";

const Hero = () => {
  return (
    <div className='relative flex sm:items-start items-center sm:justify-between justify-center bg-gradient-to-b from-white via-[#ffc993] to-[#fff8f1] h-[screen]'>
      <div className='flex flex-col sm:items-start items-center justify-center gap-3 sm:p-16 pt-32 sm:w-[60%] w-[80%]'>
        <h1 className='text-7xl sm:text-[100px] md:text-[130px] font-bold text-gradient'>Order us</h1>
        <p className='text-lg sm:text-xl md:text-2xl  font-semibold mb-8 text-slate-800 whitespace-wrap'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without.</p>
        <div className='flex items-center relative sm:h-24 h-20 w-full bg-white rounded-full'>
            <input type='text' placeholder='search' className='px-5 w-[80%] h-20 focus:outline-none rounded-full placeholder:text-3xl text-2xl' />
            <span className='p-5 bg-[#FF8100] text-white rounded-full absolute right-2'>
            <CiSearch size={35}  />
            </span>
        </div>
      </div>
      <div className='sm:flex item-center justify-center h-[650px] w-[400px] hidden'>
         <Image src="/image (2).png" alt="hero" width={794} height={806} priority={false} className='absolute z-10 w-[30%] right-0 '/>  
         <Image src="/image.png" alt='pizza_ingredient' width={214} height={239} className='absolute rotate-[-30deg] top-[10%] left-[60%] ' />
      <Image src="/leaf2.png" alt='pizza_ingredient' width={214} height={239} className='absolute rotate-[0deg] bottom-[5%] right-[20%] z-0 ' />
      </div>
      
    </div>
  )
}

export default Hero