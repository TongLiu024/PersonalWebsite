import React from 'react'
import WorkData from './WorkData'

const WorkItems = [
    {
        year: "2021/01 - 2022/12",
        title: "Analytical Testing Technologist",
        duration: "2 Years",
        details: 
        "My responsibilities included operating and maintaining high-precision analytical instruments (ICP-MS and XRF Spectroscopy), conducting method development/validation (ISO 17024 accreditation) in collaboration with senior chemists, and supporting quality assurance througth data validation, internal auditing to ensures compliance with industry standards "
    },

    {
       year: " 2018/09 - 2020/12",
       title: "Research Scientist",
       duration: "2 year & 4 months",
       details: "I served as a key member of an interdisciplinary research team, directly supporting PIs in developing innovative biopolymer technoloiges. My role involved dissecting large data sets to optimize experimental designs and methodologies, as well as mentoring junior team members. I also translated our research into real-world applications by advancing our projects from theoretical concepts to patented, actionable technologies. "
       
    },

]

const Work = () => {
  return (
    <div id="work" className='max-w-[1080px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='font-bold text-4xl text-center text-black pb-10' >Work Experience</h1>
      {WorkItems.map((wk, idx) => (
        <WorkData 
        key={idx}
        duration={wk.duration}
        year={wk.year}
        details={wk.details}
        title={wk.title} />
      ))}
      
    </div>
  )
}

export default Work
