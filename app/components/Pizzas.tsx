import { topPizzas } from '@/utils/data'
import Image from 'next/image'
import React from 'react'

const Pizzas = () => {
  return (
    <div className='flex flex-col items-center justify-center p-8 bg-gradient-to-b from-[#FFF8F1] via-[#FFC993] to-[#FFF8F1] md:px-20 gap-6'>
        <p className='text-5xl text-black/50 py-10 w-full flex items-start justify-start'>Popular Pizzas</p>
        <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[25px]'>
            {
                topPizzas.map((pizza , i)=>(
                    <div key={i} className='bg-white p-[30px] rounded-[25px]'>
                      <div className='p-2 flex items-center justify-center bg-[#EA810033] rounded-full'>
                        <Image src={pizza.img} alt='pizza' width={272} height={276} />
                      </div>
                      <div>
                        <p className='text-md font-semibold'>{pizza.name}</p>
                        <p className='text-sm font-light text-slate-800'>{pizza.info}</p>
                      </div>
                      <div className='flex items-center justify-between'>
                        <p className='text-[#01C550] text-[45px] font-bold'>{pizza.price} <sub className='text-sm font-light text-slate-800'>Birr</sub></p>
                        <button className='text-white bg-[#FF8100] text-xl font-semibold px-4 py-2 rounded-[5px]'>Order</button>
                      </div>
                      <div className='h-[1px] bg-slate-400/50 w-full mb-2'></div>
                      <div className='flex items-center justify-between'>
                       <Image src={pizza.profile} alt='profile' width={50} height={50} className='rounded-full' />
                       <p className='text-xl font-bold'>{pizza.restaurant}</p>
                      </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Pizzas