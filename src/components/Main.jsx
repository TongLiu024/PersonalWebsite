import React from 'react'
import backgroundimg from '../assets/bg3.jpg'
import { TypeAnimation } from 'react-type-animation'
import {FaLinkedin, FaGithub, FaInstagram} from 'react-icons/FA'

// w: full =width: 100%; means be as big as the parent element
//problems: auto resize  
const Main = () => {
  return (
  <div id="main">
    <img  className="w-full h-screen object:cover object-left " src={backgroundimg}  />
    
    <div className="w-full h-screen bg-white/40 absolute top-0 left-0">
      
    
      <div className="max-w-[800px] m-auto h-full w-full flex flex-col justify-center items-center ">
        <h1 className='sm:text-4xl  text-4xl font-bold text-black'>Jonathon Liu </h1>
        <div className='flex pt-4 text-2xl '>
          <h2 className=' text-black'>I am a</h2>
        <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Software Developer',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Materials Scientist',
        2000,
        'Chemical Engineer',
        1000,
        'Tech Enthusiast',
        1000
      ]}
      wrapper="span"
      speed={40}
      cursor={true}
      style={{ fontSize: '1em', paddingLeft: '5px', color:"#00009b"}}
      repeat={Infinity}
      
    />
     </div>
     <div className="cursor:pointer flex justify-between pt-6 w-[200px]">
    <FaGithub className="cursor-pointer" size={25} />
    <FaLinkedin className="cursor-pointer" size={25}/>
    <FaInstagram className="cursor-pointer" size={25}/>
    </div>
    </div>
   
   
    </div>
</div>
  
  )
}

export default Main
