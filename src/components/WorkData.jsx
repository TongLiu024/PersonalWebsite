import React from 'react'
/* border-l border on the left 
 ml-10 10 rem 1 rem = 16 px
 px-6 stands for horizontal padding, py-6- vertical padding
 set text color or size: text-lg (text-base, text-tight, text-xl)  text-tahiti-400
 set font weight using font-normal font-semibold or font-bold
 line height using leading-none leading-tight leading-normal 

  */ 
const WorkExperience = ({year, duration, title, details}) => {
  return (
    <div>
      <ol className='flex flex-col md:flex-row relative border-l border-purple-50'>
        <li className='mb-10 ml-3'>
          <div className='absolute w-3 h-3 bg-purple-50 rounded-full mt-1.5 mb-1 -left-1.5 border-white'/>
          <p className='flex flex-wrap flex-row gap-5 justify-start items-center md:text-sm'>
            <span className='inline-block px-2 py-1 rounded-md bg-tahiti-900 font-semibold text-white'>{year}</span>
            <span className='font-semibold text-tahiti-800 text-lg'>{title}</span>
            <span className='my-1 text-sm font-normal leading-none font-semibold text-purple-200'>{duration}</span>
          </p>
          <p className='my-2 text-base font-normal text-grey-500'>{details}</p>
        </li>
      </ol>
    </div>
  )
}

export default WorkExperience
