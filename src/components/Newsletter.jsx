import React from 'react'

const Newsletter = () => {
  return (
    <div className='bg-[#f7f7f7]'>
        <div className='max-w-[1270px] flex flex-col md:flex-row justify-between px-6 mx-auto md:py-20 py-8 bg-[#f7f7f7]'>
      <div>
        <h2 className='md:text-5xl font-bold max-w-[480px] text-4xl'>Find out more and connect with expert Hosts</h2>
        <p className='max-w-[480px] md:my-8 my-4 text-gray-600'>We’ll share more about hosting and give you access to live webinars where experienced hosts can answer your questions.</p>
      </div>

      <div className='flex flex-col text-sm mr-12'>
        <input type="email" name="email" id="email" placeholder='Email address' className='p-4 border rounded-lg md:max-w-[440px] max-w-[460px]'/>
        <input type="number" name="phone" id="phone" placeholder='Phone number (Optional)' className='p-4 border rounded-lg md:max-w-[440px] max-w-[460px]'/>
        <div className='flex gap-4 my-8'>
            <input type="checkbox" name="check" id="check" className='w-5 text-black'/>
            <p className='md:max-w-[440px] max-w-[460px] text-xs text-gray-600'>I want to receive occasional insights and information from Airbnb about hosting and can unsubscribe at any time.</p>
        </div>
        <button className='p-4 bg-[#222222] text-white font-semibold w-28 rounded-lg'>Sign up</button>
        <p className='max-w-[440px] text-xs text-gray-600 mt-8'>
        By selecting "Sign up", I agree that Airbnb will process my personal information in accordance with the <span className='text-black underline'>Airbnb Privacy Policy</span>
        </p>
      </div>
    </div>
    </div>

  )
}

export default Newsletter
