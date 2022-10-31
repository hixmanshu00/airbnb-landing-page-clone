import React from "react";
import heroBg from "../assets/hero.jpg";
import heroBgMd from "../assets/heroBgMd.jpg";
import { FaAirbnb } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="w-full h-[650px] md:h-[550px] overflow-hidden relative text-white ">
      <img src={heroBg} alt="" className="w-full h-full object-cover hidden md:inline-block" />
      <img src={heroBgMd} alt="" className="w-full h-full object-cover md:hidden object-top" />
      
      <div className="w-[750px] h-full absolute md:bg-gradient-to-r bg-gradient-to-t from-black/70  md:from-black/95 to-transparent  top-0 left-0" >

      <div className="w-full absolute top-0 left-0 text-white ">
        <div className="m-5 w-auto hidden md:inline-block">
          <FaAirbnb size={40} className="" />
        </div>
        <div className="m-8 lg:mx-[15%] mt-[300px] sm:mt-0 animate-fade-in-up ">
          <div className="max-w-[300px] sm:max-w-[490px]">
            <h3 className="uppercase font-bold text-sm md:text-xl">Become a host</h3>
            <h2 className="text-3xl md:text-6xl font-bold  my-4">
              Host your space, share your world
            </h2>
          </div>

          <p className="font-thin md:text-xl max-w-[320px] sm:max-w-[465px] ">
            The art of hosting is rooted in thoughtful design. Share your unique
            aesthetic with guests and earn extra income on a schedule that works
            for you.
          </p>

          <button className="btn bg-gradient-to-r from-rose-600 to-pink-600  text-xl">Try hosting</button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Hero;
