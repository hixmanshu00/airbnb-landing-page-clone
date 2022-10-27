import React from 'react'
import {TbWorld, TbCurrencyRupee} from 'react-icons/tb'
import {ImFacebook,ImTwitter,ImInstagram} from 'react-icons/im'


const Footer = () => {
  return (
    <div className='bg-[#f7f7f7]'>
      <div className="p-6 border-t pt-8 lg:flex justify-evenly">
        <div className="text-sm border-b pb-4 md:border-none">
        <h4 className='font-semibold mb-1'>Support</h4>

            <ul className='md:grid grid-flow-row grid-rows-3 grid-cols-3 lg:flex flex-col '>
                <li className='my-2 text-gray-500 cursor-pointer hover:underline'>Help Centre</li>
                <li className='my-2 text-gray-500 cursor-pointer hover:underline'>AirCover</li>
                <li className='my-2 text-gray-500 cursor-pointer hover:underline'>Safety information</li>
                <li className='my-2 text-gray-500 cursor-pointer hover:underline'>Supporting people with disabilities</li>
                <li className='my-2 text-gray-500 cursor-pointer hover:underline'>Cancellation options</li>
                <li className='my-2 text-gray-500 cursor-pointer hover:underline'>Our COVID-19 Response</li>
                <li className='my-2 text-gray-500 cursor-pointer hover:underline'>Report a neighbourhood concern</li>
            </ul>
        </div>

        <div className="text-sm my-6 border-b pb-4 lg:my-0 md:border-none">
        <h4 className='font-semibold mb-1'>Community</h4>

            <ul className='md:grid grid-flow-row grid-cols-3 lg:flex flex-col'>
                <li className='my-2 text-gray-500 cursor-pointer hover:underline'>Airbnb.org: disaster relief housing</li>
                <li className='my-2 text-gray-500 cursor-pointer hover:underline'>Support Afghan refugees</li>
                <li className='my-2 text-gray-500 cursor-pointer hover:underline'>Combating discrimination</li>
            </ul>
        </div>

        <div className="text-sm border-b pb-4 md:border-none">
        <h4 className='font-semibold mb-1'>Hosting</h4>

            <ul className='md:grid grid-flow-row grid-rows-2 grid-cols-3 lg:flex flex-col'>
                <li className='my-2 text-gray-500 cursor-pointer hover:underline'>Try hosting</li>
                <li className='my-2 text-gray-500 cursor-pointer hover:underline'>AirCover for Hosts</li>
                <li className='my-2 text-gray-500 cursor-pointer hover:underline'>Explore hosting resources</li>
                <li className='my-2 text-gray-500 cursor-pointer hover:underline'>Visit our community forum</li>
                <li className='my-2 text-gray-500 cursor-pointer hover:underline'>How to host responsibly</li>
            </ul>
        </div>

        <div className="text-sm my-6 border-b pb-4 lg:my-0 md:border-none">
        <h4 className='font-semibold mb-1'>Airbnb</h4>

            <ul className='md:grid grid-flow-row grid-rows-2 grid-cols-3 lg:flex flex-col'>
                <li className='my-2 text-gray-500 cursor-pointer hover:underline'>Newsroom</li>
                <li className='my-2 text-gray-500 cursor-pointer hover:underline'>Learn about new features</li>
                <li className='my-2 text-gray-500 cursor-pointer hover:underline'>Letter from our founders</li>
                <li className='my-2 text-gray-500 cursor-pointer hover:underline'>Careers</li>
                <li className='my-2 text-gray-500 cursor-pointer hover:underline'>Investors</li>
            </ul>
        </div>
      </div>

      <div className="border-b hidden md:block mx-36"></div>

      <div className="p-6 md:flex md:flex-row-reverse md:justify-between md:px-36">
        <div className="">
            <ul className='flex gap-6'>
                <li className='flex gap-1 hover:underline hover:text-gray-700 cursor-pointer'><TbWorld size={18}/><span className='text-sm font-medium'>English (IN)</span></li>
                <li className='flex gap-1 hover:underline hover:text-gray-700 cursor-pointer md:mr-4'><TbCurrencyRupee size={18}/><span className='text-sm'>INR</span></li>
                <li className='hidden md:block hover:text-gray-700 cursor-pointer'><ImFacebook /></li>
                <li className='hidden md:block hover:text-gray-700 cursor-pointer'><ImTwitter /></li>
                <li className='hidden md:block hover:text-gray-700 cursor-pointer'><ImInstagram /></li>
            </ul>
        </div>
        <div className="md:flex gap-2">
            <div className="text-sm text-gray-500 mt-4 md:mt-0">
                <p>&#169; 2022 Airbnb, Inc</p>
            </div>
            <div className="text-sm text-gray-500">
                <ul className='flex gap-2 lg:gap-4'>
                    <li className='cursor-pointer hover:underline'>Privacy</li>
                    {/* <div className="pb-2"></div> */}
                    <li className='cursor-pointer hover:underline'>Terms</li>
                    <li className='cursor-pointer hover:underline'>Sitemap</li>
                    <li className='cursor-pointer hover:underline'>Company details</li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
