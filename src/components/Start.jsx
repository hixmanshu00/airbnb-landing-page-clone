import React from 'react'
import start from '../assets/start.jpg'
const Start = () => {
  return (
    <div className='relative'>
      <div className=''>
        <img src={start} alt="/" className=' w-full sm:max-h-[350px] md:max-h-[550px] object-cover '/>
      </div>
      <div className="absolute top-0 left-0 bg-gradient-to-r from-black/80 to-transparent md:w-[40%] h-full px-8" >
        <div className="flex flex-col justify-center mx-auto h-full  text-white md:max-w-[415px]">
            <h3 className='text-3xl md:text-5xl font-semibold'>Start your hosting journey</h3>
            <p className='my-3 md:text-xl'>Let’s get your listing set up, together.</p>
            <button className="bg-gradient-to-r from-rose-600 to-pink-600  md:text-xl md:w-44 w-28 rounded-lg p-1 md:p-3">Get started</button>

        </div>
       </div>

    </div>
  )
}

export default Start
