import React, {useState} from 'react'
import image_w_bg from '../assets/image_w_bg.png'
import image_wo_bg from '../assets/image_wo_bg.png'

const BgSider = () => {
    const[sliderPosition, setSliderPosition ]= useState(50)
    
    const handleSliderChange = (e)=>{
        setSliderPosition(e.target.value)
    }
  return (
    <div className='pb-10 md:py-20 mx-2'>
      <h1 className='mb-12 sm:mb-20 text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold
      font-bold text-neutral-700 leanding-right'>Remove with High <br /> quality and Accuracy</h1>

      <div className='relative w-full max-w-3xl overflow-hidden m-auto rounded-xl'>
        <img src={image_w_bg}  style={{clipPath:`inset(0 ${100.2 - sliderPosition}% 0 0)`}} alt="" />
        <img className='absolute top-0 w-full h-full' src={image_wo_bg}  style={{clipPath:`inset(0 0 0 ${sliderPosition}%)`}} alt="" />
        <input className='absolute top-1/2 left-1/2 transform -transform -translate-x-1/2 -translate-y-1/2 w-full z-10 slider' type="range" min={0} max={100} value={sliderPosition} onChange={handleSliderChange} />
      </div>
    </div>
  )
}

export default BgSider
