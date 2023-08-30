import React, { useState } from 'react'
import {AiOutlineMenu, AiOutlineHome, AiOutlineProject, AiOutlineMail, AiOutlineComment} from "react-icons/ai"
import { GrProjects } from 'react-icons/gr'
import { BsPerson } from 'react-icons/bs'


/* justify-items: move all element within to the left, center or right horizontally
    items-center == align-items: center : within each element, aligh it to the center vertically*/


/* md: hidden @ above medium screen (768 px), the element is hidden  hidden = display: none
   md: block hidden @ above medium size: block, else (hidden) */
const Sidenav = () => {

  const [nav, setNav] = useState(false);

  /* define an arrow function here and directly use it in the {function_name}  */ 
  /* m-20 margin: 20rem should be automatically applied to the contents (elements) inside the element*/
  const handleNav = () => {
    setNav(!nav);
  }
  return (
    <div>
      <AiOutlineMenu onClick={handleNav} className='absolute top-4 right-4 z-[99] md:hidden'/>
  
    {nav? (
    <div className='fixed w-full h-screen bg-white/80 flex flex-col justify-center items-center z-20'>
      <a href="#main" className='w-[75%] flex items-center justify-center rounded-full shadow-lg bg-purple-50 shadow-grey-400 cursor-pointer m-2 p-4 hover:scale-110 ease-in duration-200'>
        <AiOutlineHome size={20}/>
        <span className='pl-4'>Home</span>
      </a>
   
      <a href="#main" className='w-[75%] flex items-center justify-center rounded-full shadow-lg bg-purple-50 shadow-grey-400 cursor-pointer m-2 p-4 hover:scale-110 ease-in duration-200'>
        <GrProjects size={20}/>
        <span className='pl-4'>Work</span>
      </a>
     
      <a href="#main" className='w-[75%] flex items-center justify-center rounded-full shadow-lg bg-purple-50 shadow-grey-400 cursor-pointer m-2 p-4 hover:scale-110 ease-in duration-200'>
        <AiOutlineProject size={20}/>
        <span className='pl-4'>Projects</span>
      </a>

      <a href="#main" className='w-[75%] flex items-center justify-center rounded-full shadow-lg bg-purple-50 shadow-grey-400 cursor-pointer m-2 p-4 hover:scale-110 ease-in duration-200'>
        <BsPerson size={20}/>
        <span className='pl-4'>Resume</span>
      </a>

      <a href="#main" className='w-[75%] flex items-center justify-center rounded-full shadow-lg bg-purple-50 shadow-grey-400 cursor-pointer m-2 p-4 hover:scale-110 ease-in duration-200'>
        <AiOutlineMail size={20}/>
        <span className='pl-4'>Contact</span>
      </a>

      <a href="#main" className='w-[75%] flex items-center justify-center rounded-full shadow-lg bg-purple-50 shadow-grey-400 cursor-pointer m-2 p-4 hover:scale-110 ease-in duration-200'>
        <AiOutlineComment size={20}/>
        <span className='pl-4'>Testimony</span>
      </a>
  
    </div>
      )
    : (
      ""
    )}
    <div className='md:block hidden fixed top-[25%]'>
      <div className="flex flex-col">
      <a href="#main" className="rounded-full bg-purple-200 shadow:lg shadow-grey-400 cursor:pointer hover:scale-110 ease-in duration-300 m-4 p-4">
        <AiOutlineHome size= {20}/>
      </a>

      <a href="#main" className="rounded-full bg-purple-200 shadow:lg shadow-grey-400 cursor:pointer hover:scale-110 ease-in duration-300 m-4 p-4">
        <GrProjects size= {20}/>
      </a>

      <a href="#main" className="rounded-full bg-purple-200 shadow:lg shadow-grey-400 cursor:pointer hover:scale-110 ease-in duration-300 m-4 p-4">
        <AiOutlineProject size= {20}/>
      </a>

      <a href="#main" className="rounded-full bg-purple-200 shadow:lg shadow-grey-400 cursor:pointer hover:scale-110 ease-in duration-300 m-4 p-4">
        <BsPerson size= {20}/>
      </a>


      <a href="#main" className="rounded-full bg-purple-200 shadow:lg shadow-grey-400 cursor:pointer hover:scale-110 ease-in duration-300 m-4 p-4">
        <AiOutlineMail size= {20}/>
      </a>

      <a href="#main" className="rounded-full bg-purple-200 shadow:lg shadow-grey-400 cursor:pointer hover:scale-110 ease-in duration-300 m-4 p-4">
        <AiOutlineComment size= {20}/>
      </a>

    


      </div>
      

      
    </div>
    </div>
  )
}

export default Sidenav
