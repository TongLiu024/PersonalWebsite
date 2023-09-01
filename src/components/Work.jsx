import React from 'react'
import WorkData from './WorkData'

const WorkItems = [
    {
        year: "2021/01 - 2022/12",
        title: "Analytical Testing Technologist",
        duration: "2 Years",
        details: 
        "My responsibilities included operating and maintaining high-precision analytical instruments (ICP-MS and XRF Spectroscopy) in a fast-paced laboratory environment, conducting method development/validation (ISO 17024 accreditation) in collaboration with senior chemists, and supporting quality assurance througth data validation, internal auditing to ensures compliance with industry standards "
    },

    {
       year: " 2018/09 - 2020/12",
       title: "Research Scientist",
       duration: "2 year & 4 months",
       details: "In this experience, I undertook the roles to support principlal investigators with research innovation, experimental design, analytical method optimization. I innovated and implemented two biopolymer based technology and updated technology  "
       
    },

]

const Work = () => {
  return (
    <div id="work" className='max-w-[1100px] m-auto md:pl-20 p-4 py-16'>
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
