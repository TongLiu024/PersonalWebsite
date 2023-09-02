import React from 'react'
import hikingApp from '../assets/BC hiking blogger App.jpg'

/* when use group property, have to apply it also in the element of the img, (ie. group-hover: opacity/60) 
 tracking-wider controls the (letter spacing) of an element */
const ProjectData = ({title, srcimg, technology, link}) => {
  return (
    <div className='relative flex w-full h-auto items-center justify-center rounded-xl shadow-xl shadow-grey-500 group hover:bg-gradient-to-r from-grey-200 to-purple-900 hover:scale-105'>
        <img src={srcimg} alt="/" className='rounded-xl group-hover:opacity-50'/>
        <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
            <h3 className='text-2xl text-center text-white font-bold'>{title}</h3>
            <p className='pb-4 pt-2 text-white text-center'>{technology}</p>
            <a href={link} className="" target="_blank">
                <p className=' bg-white text-purple-900 text-center p-3 rounded-lg font-bold cursor-pointer'>More Info</p>
            </a>
        </div>
    </div>
  )
}

export default ProjectData
