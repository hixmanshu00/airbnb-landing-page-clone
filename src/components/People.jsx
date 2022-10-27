import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import one from "../assets/cOne.jpg";
import two from "../assets/cTwo.jpg";
import three from "../assets/cThree.jpg";
import four from "../assets/cFour.jpg";
import five from "../assets/cFive.jpg";
import  {IoIosArrowDropleft, IoIosArrowDropright} from "react-icons/io"

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
                    <button type="button" onClick={onClickHandler} title={label} style={{ ...arrowStyles, left: 85 }}>
                        <IoIosArrowDropleft size={30} className="bg-gray-50 rounded-full " />
                    </button>
                )
            }
        renderArrowNext={(onClickHandler, hasNext, label) =>
                hasNext && (
                    <button type="button" onClick={onClickHandler} title={label} style={{ ...arrowStyles, right: 85 }}>
                        <IoIosArrowDropright size={30} className=""/>
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


        className="mx-auto my-12"
      >
        <div className="grid grid-flow-row md:grid-flow-col md:h-[470px] mx-auto  my-12 rounded-xl  bg-gray-100 max-w-[1270px] space-between justify-between ">
          <img
            src={one}
            alt="/"
            className="max-w-[640px] h-full w-[600px] rounded-l-2xl object-center"
          />
          <div className="flex flex-col text-left">
            <p className="text-2xl font-thin m-20 w-[470px]">
              "Hosting has been so rewarding and life-changing. It’s allowed us
              to pursue our passion for interior design and helped us realise
              our niche – that we really love renovating spaces for others to
              enjoy."
            </p>
            <p className="mx-20 mt-[-70px] text-gray-800">
              Catherine, <br />
              interior designer and Host in Columbus, Ohio
            </p>
            <p className="mx-20 underline my-4 text-sm ">Get Host tips</p>
          </div>
        </div>

        <div className="flex rounded-xl my-12 bg-gray-100 max-w-[1270px] mx-auto md:h-[470px]  space-between justify-between ">
          <img
            src={two}
            alt="/"
            className="max-w-[640px] w-full rounded-l-2xl h-full object-center"
          />
          <div className="flex flex-col text-left">
            <p className="text-2xl font-thin m-20 w-[470px]">
            "Give yourself permission to play. I’ve poured so much love into [restoring this space] – and I think guests come back for that very reason."
            </p>
            <p className="mx-20 mt-[-70px] text-gray-800">
            Tiffany, <br />
            former creative director and Host in Hollywood Beach, California
            </p>
            <p className="mx-20 underline my-4 text-sm ">Get Host tips</p>
          </div>
        </div>

        <div className="grid grid-flow-row md:grid-flow-col mx-auto rounded-xl my-12 bg-gray-100 max-w-[1270px] md:h-[470px]  space-between justify-between ">
          <img
            src={three}
            alt="/"
            className="max-w-[640px] w-full rounded-l-2xl h-full object-center"
          />
          <div className="flex flex-col text-left">
            <p className="text-2xl font-thin m-20 w-[470px]">
            "The part that I love most about hosting is the design and curating the spaces for the guests – cool details and making things they can interact with. You're helping them create memories."
            </p>
            <p className="mx-20 mt-[-70px] text-gray-800">
            Jordan, <br />
            architect and Host in Denver, Colorado
            </p>
            <p className="mx-20 underline my-4 text-sm ">Visit her profile</p>
          </div>
        </div>

        <div className="grid grid-flow-row md:grid-flow-col mx-auto rounded-xl my-12 bg-gray-100 max-w-[1270px] md:h-[470px]  space-between justify-between ">
          <img
            src={four}
            alt="/"
            className="max-w-[640px] w-full rounded-l-2xl h-full object-center"
          />
          <div className="flex flex-col text-left">
            <p className="text-2xl font-thin m-20 w-[470px]">
              "Doing the interior designing for our Airbnb by using vintage
              finds and contemporary touches was a really fun challenge. It was
              a labour of love and something we are really proud of."
            </p>
            <p className="mx-20 mt-[-70px] text-gray-800">
            Wyatt and Brett,<br />
            designers and makers in Chemainus, Canada
            </p>
            <p className="mx-20 underline my-4 text-sm ">Visit their profle</p>
          </div>
        </div>

        <div className="grid grid-flow-row md:grid-flow-col mx-auto rounded-xl my-12 bg-gray-100 max-w-[1270px] md:h-[470px]  space-between justify-between ">
          <img
            src={five}
            alt="/"
            className="max-w-[640px] h-full w-full rounded-l-2xl object-center"
          />
          <div className="flex flex-col text-left">
            <p className="text-2xl font-thin m-20 w-[470px]">
              "People really appreciate being in a different place. It's a
              stage; I set it up for the visual experience. Everything has a
              purpose to make the experience even more enjoyable."
            </p>
            <p className="mx-20 mt-[-70px] text-gray-800">
              Sarah, <br />
              graphic designer and Host in Rhinebeck, New York
            </p>
            <p className="mx-20 underline my-4 text-sm ">Visit their profle</p>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default People;
