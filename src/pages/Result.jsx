import React from 'react'
import image_w_bg from '../assets/image_w_bg.png'
import image_wo_bg from '../assets/image_wo_bg.png'

const Result = () => {
  return (
    <div className='mx-4 my-3 lg:mx-44 mt-14 min-h-[75vh]'>
      <div className='bg-white rounder-lg px-8 py-6 drop-shadow-sm'>
        <div className='flex flex-col sm:grid grid-cols-2 gap-8'>

          <div>
            <p className='font-semibold text-gray-600 mb-2'>Original</p>
            <img className='rounded-md border' src={image_w_bg} alt="" />
          </div>
           
           <div className='flex flex-col'>
           <p className='font-semibold text-gray-600 mb-2'>Background Removed</p>
           <div className='rounded-md border border-gray-300 h-full relative bg-layer overflow-hidden'> 
            {/*<img className='rounded-md border' src={image_wo_bg} alt="" />*/}
            </div>
           <div className='absolute right-1/1.6 bottom-1/2 transform translate-x-1/2 translate-y-1/2'>
           <div className='animate-spin h-10 w-10 border-4 border-blue-500 border-t-transparent rounded-full'></div>
           </div>
           </div>

        </div>
      </div>
    </div>
  )
}

export default Result
