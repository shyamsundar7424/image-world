import React from 'react'
import './Navbar.css'
import navbarImage from './navbarImage/logo.svg'
//import {assets} from '../assets/assets'
import { Link } from 'react-router-dom'
import arrow_icon from '../assets/arrow_icon.svg'



const navbar = () => {
  return (
    <div className='flex items-center justify-between mx-4 py-3 lg:mx-44'>
      <div  className='navb'>
      <Link to='/'><img src={navbarImage} alt=" " className='w-12 sm:w-38' /></Link>
      <span className='LogoName'><p>Image World</p></span>
      </div>
      <Link to="https://ai-image-generator-ruddy.vercel.app/">
      <button className='bg-zinc-800 text-white flex item-center gap-4 px-4 py-2 sm:px-8 sm:py-3
       text-sm rounded-full cursor-pointer hover:bg-blue-500 hover:font-bold'>
        Get Started <img src={arrow_icon} alt="Error" className='w-4 sm:w-4'/>
      </button> 
      </Link>
      
    </div>
  )
}

export default navbar
