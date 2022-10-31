import React from 'react'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import wOne from '../assets/wOne.jpg'
import wTwo from '../assets/wTwo.jpg'
import wThree from '../assets/wThree.jpg'
import wFour from '../assets/wFour.jpg'
import wFive from '../assets/wFive.jpg'
import {MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight} from 'react-icons/md'


class Working extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            slideWidth: 30,
            winWidth: window.innerWidth,
        }
        this.setWidth = this.setWidth.bind(this);
        this.setWin = this.setWin.bind(this);
    }

    setWin(){
        this.setState({
            winWidth: window.innerWidth
        })
        this.setWidth(this.state.winWidth)
    }

    setWidth(x){
        let y = 100 - 0.048 * x;
        if(x<450){
            y=90
        }
            this.setState({
                slideWidth: y
            })
    }


    render(){
    const timeout = setTimeout(this.setWin,500)

        const arrowStyles = {
            position: 'absolute',
            zIndex: 2,
            top: 'calc(50% - 45px)',
            width: 30,
            height: 30,
            cursor: 'pointer',
        };
        return(
            <div className='ml-12 lg:m-20'>
            <h3 className='text-4xl font-bold my-12 lg:text-5xl lg:px-4  '>How hosting works</h3>
            <Carousel
              showArrows={true}
              centerMode={true}
              centerSlidePercentage={this.state.slideWidth}
              showStatus={false}
              showIndicators={false}
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
                          <button type="button" onClick={onClickHandler} title={label} style={{ ...arrowStyles, right: -10 }} className="hidden md:block ml-4 ">
                              <MdOutlineKeyboardArrowRight size={26} className="bg-white hover:bg-gray-50 rounded-full shadow-md font-light "/>
                          </button>
                      )
                  }
              className=" my-12 md:px-4 w-full"
            >
              <div className='flex flex-col  max-w-[320px] text-left'>
                  <img src={wOne} alt="" className='rounded-lg md:h-[200px]'/>
                  <h4 className='font-semibold text-lg pt-4 pb-2'>Why host on Airbnb?</h4>
                  <p className='font-extralight text-gray-600 text-sm'>Hosts reveal what they love about sharing their space on Airbnb.</p>
              </div>
      
              <div className='flex flex-col  max-w-[320px] text-left'>
                  <img src={wTwo} alt="" className='rounded-lg h-[200px]'/>
                  <h4 className='font-semibold text-lg pt-4 pb-2'>How to get started on Airbnb</h4>
                  <p className='font-extralight text-gray-600 text-sm'>From creating your listing to prepping your space, learn how to start hosting.</p>
              </div>
              <div className='flex flex-col  max-w-[320px] text-left'>
                  <img src={wThree} alt="" className='rounded-lg h-[200px]'/>
                  <h4 className='font-semibold text-lg pt-4 pb-2'>How to earn money on Airbnb</h4>
                  <p className='font-extralight text-gray-600 text-sm'>Here's what every host needs to know about pricing and payouts.</p>
              </div>
              <div className='flex flex-col  max-w-[320px] text-left'>
                  <img src={wFour} alt="" className='rounded-lg h-[200px]'/>
                  <h4 className='font-semibold text-lg pt-4 pb-2'>Designing your space</h4>
                  <p className='font-extralight text-gray-600 text-sm'>Designing your space for guests can be way to boost your bookings.</p>
              </div>
              <div className='flex flex-col  max-w-[320px] text-left'>
                  <img src={wFive} alt="" className='rounded-lg h-[200px]'/>
                  <h4 className='font-semibold text-lg pt-4 pb-2'>Secrets from a seasoned Superhost</h4>
                  <p className='font-extralight text-gray-600 text-sm'>Superhost Nikki shares her tips, from setting up to standing out.</p>
              </div>
              </Carousel>
          </div>
        )
    }

    


}



export default Working
