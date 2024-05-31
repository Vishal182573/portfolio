import React from 'react'
import SkillCard from './SkillCard'

export default function LandingPageSkillsContainer() {
  return (
    <div className='border-t-[1px]  border-[#c4c4f5] mx-8 mt-[8vh] px-8 pt-4 lg:px-12' id='Skills-Set'>
      <div className="skills-set-container h-10 flex justify-start items-center text-2xl font-bold font-[Poppins] mt-4 border-b-2 border-[#c4c4f8]" ><span className='bg-white border-2 w-4 h-4 rounded-full mx-2'></span>Skill set </div>
      <div className=" flex justify-center items-center">
        <SkillCard/>
      </div>
    </div>
  )
}
