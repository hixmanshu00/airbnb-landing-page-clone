import React from "react";
import support from "../assets/support.jpg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Support = () => {
    const indicatorStyles = {
        background: '#cdd0d4',
        width: 6,
        height: 6,
        display: 'inline-block',
        margin: '0px 4px 0px 0px',

        
        
    };
  return (
    <div className="mt-20">
      <div className="md:flex flex-row-reverse md:px-8 lg:px-16 items-center">
        <img
          src={support}
          alt=""
          className="h-[240px] md:h-[405px] w-full object-cover rounded-lg md:max-w-[55%]"
        />
        <div className=" mt-8 sm:mt-8 pr-8 sm:pr-3 px-8">
          <h4 className="uppercase text-sm md:font-semibold md:text-lg">
            Have questions?
          </h4>
          <h3 className="text-3xl font-semibold mt-2 md:text-5xl">
            Get free one-on-one help from Airbnb’s best Hosts
          </h3>
          <button className="p-3 bg-[#222222] hover:bg-black text-white font-semibold w-40 rounded-lg mt-6">
            Ask a Superhost
          </button>
        </div>
      </div>

      <div className="px-8 py-12 mt-8 flex flex-col gap-4 lg:px-24 ">
        <h2 className="text-5xl font-semibold">How we support you</h2>

        <div className="md:grid hidden grid-flow-col grid-cols-3 gap-12 py-8">
          <div>
            <h3 className="text-2xl font-semibold">Host protection and insurance</h3>
            <p className="text-gray-600  py-4">
              To support you in the rare event of an incident, most Airbnb
              bookings include property damage protection and liability
              insurance of up to $1m USD.
            </p>
            <p className="underline text-sm font-semibold">
              How you're protected while Hosting
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold">COVID-19 safety guidelines</h3>
            <p className="text-gray-600  py-4">
              To help protect the health of our community, we’ve partnered with
              experts to create safety practices for everyone, plus a cleaning
              process for hosts.
            </p>
            <p className="underline text-sm font-semibold">
              Get to know the enhanced cleaning process{" "}
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold">High guest standards</h3>
            <p className="text-gray-600 py-4">
              To give Hosts peace of mind, we offer guest identification and let
              you check out reviews of guests before they book. Our new Guest
              Standards Policy sets higher expectations for behaviour.
            </p>
            <p className="underline text-sm font-semibold">
              Steps we take to help Hosts feel confident
            </p>
          </div>
        </div>

        <Carousel
        showArrows={false}
        showStatus={false}
        showIndicators={true}
        showThumbs={false}

            renderIndicator={(onClickHandler, isSelected, index, label) => {
                if (isSelected) {
                    return (
                        <li
                            className="rounded-full "
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


        className="md:hidden"
      >
            <div className="text-left py-10">
            <h3 className="text-2xl font-semibold">Host protection and insurance</h3>
            <p className="text-gray-600  py-4">
              To support you in the rare event of an incident, most Airbnb
              bookings include property damage protection and liability
              insurance of up to $1m USD.
            </p>
            <p className="underline text-sm font-semibold">
              How you're protected while Hosting
            </p>
          </div>

          <div className="text-left py-10">
            <h3 className="text-2xl font-semibold">COVID-19 safety guidelines</h3>
            <p className="text-gray-600  py-4">
              To help protect the health of our community, we’ve partnered with
              experts to create safety practices for everyone, plus a cleaning
              process for hosts.
            </p>
            <p className="underline text-sm font-semibold">
              Get to know the enhanced cleaning process{" "}
            </p>
          </div>

          <div className="text-left py-10">
            <h3 className="text-2xl font-semibold">High guest standards</h3>
            <p className="text-gray-600 py-4">
              To give Hosts peace of mind, we offer guest identification and let
              you check out reviews of guests before they book. Our new Guest
              Standards Policy sets higher expectations for behaviour.
            </p>
            <p className="underline text-sm font-semibold">
              Steps we take to help Hosts feel confident
            </p>
          </div>
      </Carousel>
      </div>
    </div>
  );
};

export default Support;
