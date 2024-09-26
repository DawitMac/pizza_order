import { topRestaurants } from '@/utils/data';
import Image from 'next/image';
import React from 'react';

const TopRestaurants = () => {
  return (
    <section className='bg-gradient-to-b from-[#FFF8F1] via-[#FFC993] to-[#FFF8F1] md:px-20 px-10 h-[100dvh] '>
      <h1 className='text-5xl text-black/50 py-20'>Top Restaurants</h1>
      <div className=' flex gap-6 overflow-x-auto hide-scrollbar'>
      <div className='relative flex items-center justify-start gap-6'>
        {topRestaurants.map((restaurant, i) => (
          <div key={i} className='flex w-[574px] h-[154px] p-4 gap-6 rounded-lg bg-white'>
            <div className='flex flex-col items-start justify-center w-1/2 gap-4'>
              <div className='flex items-center gap-3'>
                <Image src={restaurant.img} alt='profile' width={50} height={50} className='rounded-full' />
                <p className='text-2xl font-bold'>{restaurant.name}</p>
              </div>
              <p className='text-md text-slate-800'>{restaurant.info}</p>
            </div>
            <div className='flex items-center justify-center bg-[#0080000D] w-1/2 h-108 rounded-lg gap-4 p-4'>
              <div className='p-4 rounded-full flex items-center justify-center bg-[#FF810033]'>
                <Image src='/mask.png' alt='Ellipse' width={40} height={40} />
              </div>
              <div>
                <p className='text-black/50 text-md font-normal'>Number of orders</p>
                <p className='text-2xl font-bold text-[#FF8100]'>2K</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default TopRestaurants;