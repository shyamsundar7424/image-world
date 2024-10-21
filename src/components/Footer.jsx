import React from 'react'
import navbarImage from './navbarImage/logo.svg'
import facebook_icon from "../assets/facebook_icon.svg"
import twitter_icon from "../assets/twitter_icon.svg"
import google_plus_icon from "../assets/google_plus_icon.svg"
const Footer = () => {
  return (
    <div className='flex items-center justify-between gap-4 px-4 lg:px-44 py-3'>
      <img width={50} src={navbarImage} alt="" />
      <p className='flex-1 border-1 boarder-gray-400 p1-4 text-sm text-gray-500 max-sm:hidden'>
        &copy; 2020 All rights reserved. Developed by shyam and Divya
      </p>
      <div className='flex gap-1'>
        <img width={40} src={facebook_icon} alt="" />
        <img width={40} src={twitter_icon} alt="" />
        <img width={40} src={google_plus_icon} alt="" />
        
      </div>
    </div>
  )
}

export default Footer
