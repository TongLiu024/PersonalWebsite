import React from 'react'

/* when use group property, have to apply it also in the element of the img, (ie. group-hover: opacity/60) 
 tracking-wider controls the (letter spacing) of an element */
const ProjectData = ({title, srcimg, technology}) => {
  return (
    <div className='relative flex  items-center justify-center rounded-xl shadow-xl shadow-grey-500 group '>
        <img src={srcimg} alt="landscape" className='rounded-xl group-hover:opacity-40'/>
        <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
            <h3 className='text-3xl text-center text-white font-bold'>{title}</h3>
            <p className='pb-4 pt-2 text-white text-center'>{technology}</p>
            <a href="w-full h-full" className="">
                <p className=' bg-white text-purple-900 text-center p-3 rounded-lg font-bold cursor-pointer'>More Info</p>
            </a>
        </div>
    </div>
  )
}

export default ProjectData
