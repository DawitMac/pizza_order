"use client"
import { featured } from "@/utils/data";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const colors = ["#0088FE", "#00C49F", "#FFBB28"];
const delay = 3000;

function Feautred() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );
    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="flex flex-col items-center justify-center h-screen sm:w-[98dvw] w-screen overflow-hidden gap-10 bg-[#FFF8F1]">
      <div
        className=" flex items-center justify-center md:gap-16  sm:gap-8 gap-5  transition-all duration-1000  sm:px-3 px-10"
        style={{ transform: `translate3d(${index == 2 ? -100 :  Math.abs(-index * 100)}vw, 0, 0)` }}
      >
        {featured.map((feature, index) => (
          <div
            className="flex sm:flex-row flex-col items-center justify-between pl-10 gap-y-10 h-[100%] w-[95dvw] rounded-[40px]"
            key={index}
            style={{ backgroundColor: feature.background }}
          >
            <div className="flex flex-col items-start justify-start gap-10 md:py-10 sm:py-20 py-10">
              <span className="flex items-center justify-start text-3xl font-semibold text-white whitespace-wrap ">
                <p>{feature.title}</p>
                <p className="text-[#FF9921]">{feature.strong}</p>
              </span>
              <p className="text-lg font-normal text-white">{feature.info}</p>
              <button className='text-white bg-[#FF8100] text-xl font-semibold px-4 py-2 rounded-[5px]'>Register</button>
            </div>
            <Image src={feature.img} alt="featured" width={400} height={100} className="h-full" />
          </div>
        ))}
      </div>

      <div className="flex text-center transition-all duration-1000">
        {colors.map((color, idx) => (
          <div
            key={idx}
            className={`h-[20px] w-[20px] rounded-full cursor-pointer mt-15 mr-7 mb-0 transition-all duration-1000 ${index == idx ? 'bg-[#FF9921]' : 'bg-gray-300'}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Feautred;

//${index == 2 ? -100 :  Math.abs(-index * 100)}