import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import one from "../assets/cOne.jpg";
import two from "../assets/cTwo.jpg";
import three from "../assets/cThree.jpg";
import four from "../assets/cFour.jpg";
import five from "../assets/cFive.jpg";
import {MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight} from 'react-icons/md'

const People = () => {
  const arrowStyles = {
    position: 'absolute',
    zIndex: 2,
    top: 'calc(50% - 15px)',
    width: 30,
    height: 30,
    cursor: 'pointer',
};

const indicatorStyles = {
    background: '#cdd0d4',
    width: 6,
    height: 6,
    display: 'inline-block',
    margin: '0 4px',
};
  return (
    <div className="w-full ">
      <Carousel
        showArrows={true}
        showStatus={false}
        showIndicators={true}
        showThumbs={false}
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
                hasPrev && (
                    <button type="button" onClick={onClickHandler} title={label} style={{ ...arrowStyles, left: -10 }} className="hidden md:block mr-4">
                        <MdOutlineKeyboardArrowLeft size={26} className="bg-white hover:bg-gray-50 rounded-full shadow-md font-light " />
                    </button>
                )
            }
        renderArrowNext={(onClickHandler, hasNext, label) =>
                hasNext && (
                    <button type="button" onClick={onClickHandler} title={label} style={{ ...arrowStyles, right: -10 }} className="hidden md:block ml-4 lg:mr-4">
                        <MdOutlineKeyboardArrowRight size={26} className="bg-white hover:bg-gray-50 rounded-full shadow-md font-light "/>
                    </button>
                )
            }
            renderIndicator={(onClickHandler, isSelected, index, label) => {
                if (isSelected) {
                    return (
                        <li
                            className="rounded-full"
                            style={{ ...indicatorStyles, background: '#000' }}

                        />
                    );
                }
                return (
                    <li
                        className="rounded-full"
                        style={indicatorStyles}
                        onClick={onClickHandler}
                        onKeyDown={onClickHandler}
                        value={index}
                        key={index}
                        role="button"
                        tabIndex={0}
                        title={`${label} ${index + 1}`}
                        aria-label={`${label} ${index + 1}`}
                    />
                );
            }}


        className=" my-12 md:px-20 px-4"
      >
        <div className="grid grid-flow-row md:grid-flow-col md:h-[470px] mx-auto  my-12 rounded-xl  bg-gray-100 max-w-[1270px] space-between justify-between ">
          <img
            src={one}
            alt="/"
            className="max-w-[640px] h-full w-[50%] rounded-l-2xl object-center"
          />
          <div className="flex flex-col text-left m-8">
            <p className=" sm:text-2xl font-thin sm:m-20   max-w-[470px]">
              "Hosting has been so rewarding and life-changing. It’s allowed us
              to pursue our passion for interior design and helped us realise
              our niche – that we really love renovating spaces for others to
              enjoy."
            </p>
            <p className="sm:mx-20 sm:mt-[-70px] mt-4 text-gray-800">
              Catherine, <br />
              interior designer and Host in Columbus, Ohio
            </p>
            <p className="sm:mx-20 underline my-4 text-sm ">Get Host tips</p>
          </div>
        </div>

        <div className="grid grid-flow-row md:grid-flow-col md:h-[470px] mx-auto  my-12 rounded-xl  bg-gray-100 max-w-[1270px] space-between justify-between">
          <img
            src={two}
            alt="/"
            className="max-w-[640px] w-full rounded-l-2xl h-full object-center"
          />
          <div className="flex flex-col text-left m-8">
            <p className=" sm:text-2xl font-thin sm:m-20   max-w-[470px]">
              "Hosting has been so rewarding and life-changing. It’s allowed us
              to pursue our passion for interior design and helped us realise
              our niche – that we really love renovating spaces for others to
              enjoy."
            </p>
            <p className="sm:mx-20 sm:mt-[-70px] mt-4 text-gray-800">
              Catherine, <br />
              interior designer and Host in Columbus, Ohio
            </p>
            <p className="sm:mx-20 underline my-4 text-sm ">Get Host tips</p>
          </div>
        </div>

        <div className="grid grid-flow-row md:grid-flow-col mx-auto rounded-xl my-12 bg-gray-100 max-w-[1270px] md:h-[470px]  space-between justify-between ">
          <img
            src={three}
            alt="/"
            className="max-w-[640px] w-full rounded-l-2xl h-full object-center"
          />
          <div className="flex flex-col text-left m-8">
            <p className=" sm:text-2xl font-thin sm:m-20   max-w-[470px]">
              "Hosting has been so rewarding and life-changing. It’s allowed us
              to pursue our passion for interior design and helped us realise
              our niche – that we really love renovating spaces for others to
              enjoy."
            </p>
            <p className="sm:mx-20 sm:mt-[-70px] mt-4 text-gray-800">
              Catherine, <br />
              interior designer and Host in Columbus, Ohio
            </p>
            <p className="sm:mx-20 underline my-4 text-sm ">Get Host tips</p>
          </div>
        </div>

        <div className="grid grid-flow-row md:grid-flow-col mx-auto rounded-xl my-12 bg-gray-100 max-w-[1270px] md:h-[470px]  space-between justify-between ">
          <img
            src={four}
            alt="/"
            className="max-w-[640px] w-full rounded-l-2xl h-full object-center"
          />
          <div className="flex flex-col text-left m-8">
            <p className=" sm:text-2xl font-thin sm:m-20   max-w-[470px]">
              "Hosting has been so rewarding and life-changing. It’s allowed us
              to pursue our passion for interior design and helped us realise
              our niche – that we really love renovating spaces for others to
              enjoy."
            </p>
            <p className="sm:mx-20 sm:mt-[-70px] mt-4 text-gray-800">
              Catherine, <br />
              interior designer and Host in Columbus, Ohio
            </p>
            <p className="sm:mx-20 underline my-4 text-sm ">Get Host tips</p>
          </div>
        </div>

        <div className="grid grid-flow-row md:grid-flow-col mx-auto rounded-xl my-12 bg-gray-100 max-w-[1270px] md:h-[470px]  space-between justify-between ">
          <img
            src={five}
            alt="/"
            className="max-w-[640px] h-full w-full rounded-l-2xl object-center"
          />
          <div className="flex flex-col text-left m-8">
            <p className=" sm:text-2xl font-thin sm:m-20   max-w-[470px]">
              "Hosting has been so rewarding and life-changing. It’s allowed us
              to pursue our passion for interior design and helped us realise
              our niche – that we really love renovating spaces for others to
              enjoy."
            </p>
            <p className="sm:mx-20 sm:mt-[-70px] mt-4 text-gray-800">
              Catherine, <br />
              interior designer and Host in Columbus, Ohio
            </p>
            <p className="sm:mx-20 underline my-4 text-sm ">Get Host tips</p>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default People;
