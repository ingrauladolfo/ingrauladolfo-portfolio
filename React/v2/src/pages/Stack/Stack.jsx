import React from 'react'
import SKILLS from '@/assets/data/SkillsData'
import StackImage from './StackImage'
import { FaGear } from 'react-icons/fa6'
const Stack = () => {
  return (
    <section className='py-1 w-full mx-auto lg:w-[740px] pb-32'>
      <div className="h-full mt-2 max-w-7xl mx-auto px-4 py-8 text-white">
        <h2 className="flex items-center font-semibold gap-x-8 text-3xl mb-8 text-center">
          <FaGear className="mr-0" size={18} />
          Stack Tecnológico
        </h2>
        <div className="h-fit grid grid-cols-3 md:grid-cols-4 xl:grid-cols-6 w-full gap-4">
          {SKILLS.map((skill) => (
            <StackImage key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stack
