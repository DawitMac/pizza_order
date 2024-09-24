import Image from 'next/image'
import React from 'react'
import { CiSearch } from "react-icons/ci";

const Hero = () => {
  return (
    <div className='relative flex items-start justify-between bg-gradient-to-b from-white via-[#ffc993] to-[#fff8f1] h-[screen]'>
      <div className='flex flex-col items-start justify-center gap-3 p-16'>
        <h1 className='text-[130px] font-bold text-gradient'>Order us</h1>
        <p className='text-2xl  font-semibold mb-8 text-slate-800'>In publishing and graphic design, Lorem ipsum is a placeholder <br /> text commonly used to demonstrate the visual form of a <br /> document or a typeface without.</p>
        <div className='flex items-center relative h-24 w-full bg-white rounded-full'>
            <input type='text' placeholder='search' className='px-5 w-[80%] h-20 focus:outline-none rounded-full placeholder:text-3xl text-2xl' />
            <span className='p-5 bg-[#FF8100] text-white rounded-full absolute right-2'>
            <CiSearch size={35}  />
            </span>
        </div>
      </div>
      <div className='flex item-center justify-center h-[650px] w-[400px]'>
         <Image src="/image (2).png" alt="hero" width={794} height={806} className='z-10'/>  
         <Image src="/image.png" alt='pizza_ingredient' width={214} height={239} className='absolute rotate-[-30deg] top-[10%] left-[60%]' />
      <Image src="/image.png" alt='pizza_ingredient' width={214} height={239} className='absolute rotate-[-210deg] bottom-[10%] right-[20%] z-0' />
      </div>
      
    </div>
  )
}

export default Hero