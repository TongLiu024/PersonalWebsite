import React from 'react'
import ProjectData from './ProjectData'
import hikingApp from '../assets/BC hiking blogger App.jpg'
import netflixApp from '../assets/netflix app.jpg'
import mobileApp from '../assets/mobile app.jpg'
import fundraisingApp from '../assets/java personal project.jpg'

const projectItems = [
    {
        title: "Donation Fundraising App",
        srcimg: fundraisingApp,
        technology: "Java Swing",
        link: "https://github.com/TongLiu024/Java-Personal-Project.git",
        

    },

    {
        title: "BC hiking Guider and Blogger",
        srcimg: hikingApp,
        technology: "MERNS",
        link: "https://github.com/TongLiu024/Java-Personal-Project.git",
        

    },

    {
        title: "Mobile App",
        srcimg: mobileApp,
        technology: "React js",
        link: "https://github.com/TongLiu024/Java-Personal-Project.git",
        

    },

    { 
        title: "Netflix App",
        srcimg: netflixApp,
        technology: "React js",
        link: "https://github.com/TongLiu024/Java-Personal-Project.git",
    }
]

const Projects = () => {
  return (
    <div id="projects" className='max-w-[1040px] m-auto md:pl-20 p-4 py-18'>
        <h1 className='text-4xl py-4 px-2 mb-10 text-center text-black font-bold '>Technical Projects</h1>
        <p className='text-center py-6'> the following projects showcases my technical skillsets
         </p>
         <div className='grid sm:grid-cols-2  gap-14'>
            {projectItems.map(
                (project, idx) => (
                <ProjectData
                key={idx}
                title={project.title} 
                srcimg={project.srcimg} 
                technology={project.technology} 
                link={project.link} 
                 />
                ))}
        
         </div>
      
    </div>
  )
}

export default Projects

