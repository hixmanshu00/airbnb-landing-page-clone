import React from "react";
import pricing from "../assets/pricing.jpg";
import pricing2 from "../assets/pricing2.jpg";
import {MdOutlineKeyboardArrowDown, } from 'react-icons/md'


const Pricing = () => {
  return (
    <div>
      <div className="md:m-10 relative lg:m-20 ">
        <img
          src={pricing}
          alt=""
          className="w-full  hidden rounded-2xl md:block px-0 min-h-[460px]"
        />
        <img
          src={pricing2}
          alt=""
          className="w-full sm:rounded-lg md:hidden max-h-[650px] object-cover"
        />
        <div className="bg-gradient-to-r from-black/40 lg:from-black/80  to-transparent sm:rounded-2xl absolute top-0 left-0 w-full h-full md:w-[50%]"></div>
        <div className="absolute text-white top-16 lg:left-24 md:left-16 left-7 sm:mt-28 mt-12 md:mt-0 pr-12 sm:pr-0 px-2 sm:px-0">
          <h4 className="font-bold md:text-lg text-white text-sm  ">
            CHECK IT OUT FOR YOURSELF
          </h4>
          <h3 className="text-3xl md:text-5xl mt-8 flex sm:flex-row gap-2 flex-col font-bold">Host your <span className="flex gap-2 w-52 sm:w-auto border-b-2">entire place <MdOutlineKeyboardArrowDown className="mt-1 "/></span></h3>
          <h3 className="text-3xl md:text-5xl mt-1 flex gap-2 font-bold">for <span className="flex gap-2  border-b-2">4 guests <MdOutlineKeyboardArrowDown className="mt-1 "/></span></h3>
          <h3 className="text-3xl md:text-5xl mt-1 flex gap-2 font-bold">in <span className="flex  gap-2 border-b-2">Delhi <MdOutlineKeyboardArrowDown className="mt-1 "/></span></h3>
          <h3 className="text-3xl md:text-5xl mt-1 font-bold">and earn upto <span className="text-[#ff385c]"> &#x20B9;60,712 </span>a month*</h3>
          <div className="flex flex-col md:flex-row gap-4 md:py-4 py-8 md:items-center">
          <button className="bg-gradient-to-r from-rose-600 to-pink-600  sm:text-xl w-40  rounded-lg p-3 font-semibold">Get started</button>
          <p className="text-sm underline font-semibold">How we estimate your earnings potential</p>
          </div>
        </div>
      </div>


    </div>
  );
};

export default Pricing;
