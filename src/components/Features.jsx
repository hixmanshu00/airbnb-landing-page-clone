import React from "react";
import ing from "../assets/ing.jpg";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
let activeOne = true;

const Features = () => {
  const onChange = () => {
    activeOne = !activeOne;
    if(!activeOne){
      document.getElementById("1").style.color = "gray"
      document.getElementById("2").style.color = "black"
    }
    if(activeOne){
      document.getElementById("2").style.color = "gray"
      document.getElementById("1").style.color = "black"
    }
  }
  return (
    <div className="flex flex-col w-full p-6 lg:flex-row justify-evenly">
      <div className="max-w-[300px] md:max-w-[405px] mt-4 md:mt-10">
        <h3 className="text-3xl lg:text-5xl ">Your next chapter, made possible by 
        <span className="flex">
        Host
        <img src={ing} alt="/" className="w-14 m-[1.5px] md:w-20" />
        </span>
        </h3>
      </div>
      <div className="sm:hidden mt-4 text-left">
      <Carousel showStatus={false} showIndicators={true} onChange={onChange}>
      <div className="max-w-[310px] text-left">
          <h4 className="text-2xl">Share what you love</h4>
          <p className="py-4 text-gray-500 ">
            Indulge your love for design when you host Airbnb guests, who are
            drawn to authentic travel in creatively curated spaces.
          </p>
        </div>

        <div className="max-w-[310px] text-left">
          <h4 className="text-2xl">Host how you want to</h4>
          <p className="py-4 text-gray-500">
            Airbnb gives you the tools and support to earn extra income, be your
            own boss and invest in your passions.
          </p>
        </div>
        </Carousel>
        <div className="flex mt-[-50px] ">
          <div className="text-5xl" id="1">.</div>
          <div className="text-5xl text-gray-400" id="2">.</div>
        </div>
      </div>
      <div className="mt-12 sm:flex gap-12 hidden">

        <div className="max-w-[310px]">
          <h4 className="text-2xl">Share what you love</h4>
          <p className="py-4 text-gray-500">
            Indulge your love for design when you host Airbnb guests, who are
            drawn to authentic travel in creatively curated spaces.
          </p>
        </div>

        <div className="max-w-[310px]">
          <h4 className="text-2xl">Host how you want to</h4>
          <p className="py-4 text-gray-500">
            Airbnb gives you the tools and support to earn extra income, be your
            own boss and invest in your passions.
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default Features;
