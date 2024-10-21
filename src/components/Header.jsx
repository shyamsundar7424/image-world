import React from 'react'
import header_img from '../assets/header_img.png'
import upload_btn_icon from "../assets/upload_btn_icon.svg"

const Header = () => {
  return (
    <div className='flex items-center justify-between max-sm:col-reverse gap-y-10 px-4 mt-10 lg:px-44 sm:mt-20 '>
      <div>
        <h1 className='text-4xl xl:text-5xl 2xl:text-6xl font-bold text-neutral-700 leanding-right'>
            Free Image Generator,<br className='max-md:hidden' />
            <span className='bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent'>
                AI world</span><br className='max-md:hidden'/>
            and background remove.
        </h1>
            <p className='my-6 text-[15px] text-gray-500'>An AI image background remover uses artificial intelligence <br />
            to automatically separate the main subject of an image  <br /> from its background.  </p>
          <div>
            <input type="file" name='' id='upload1' hidden />
            <label className='inline-flex gap-3 px-8 py-3.5 rounded-full cursor-pointer
                             bg-gradient-to-r from-violet-600 to-fuchsia-500 m-auto hover:scale-105 transition-all duration-700' htmlFor="upload1">
                <img width={20} src={upload_btn_icon} alt="" />
                <p className='text-white text-sm' >Upload your image</p>
            </label>
          </div>
      </div>

      <div className='w-full max-w-md'>
         <img src={header_img} alt="Error" />
      </div>
    </div>
  )
}

export default Header
