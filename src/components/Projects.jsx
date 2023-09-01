import React from 'react'
import ProjectData from './ProjectData'
import weatherApp from '../assets/weather app.jpg'
import netflixApp from '../assets/netflix app.jpg'
import mobileApp from '../assets/mobile app.jpg'
import carApp from '../assets/project1.jpg'


const Projects = () => {
  return (
    <div id="project" className='max-w-[1040px] m-auto md:pl-20 p-4 py-18'>
        <h1 className='text-4xl py-4 px-2 mb-10 text-center text-black font-bold '>Technical Projects</h1>
        <p className='text-center py-6'> the following projects showcases my technical skillsets
         </p>
         <div className='grid sm:grid-cols-2  gap-14'>
            <ProjectData srcimg ={weatherApp} title="BC hiking blog" technology="react JS"/>
            <ProjectData srcimg ={netflixApp} title="car shopper app"technology="react JS"/>
            <ProjectData srcimg ={mobileApp} title="shopper app" technology="react JS"/>
            <ProjectData srcimg={carApp} title="none" technology="react JS"/>
        
         </div>
      
    </div>
  )
}

export default Projects
