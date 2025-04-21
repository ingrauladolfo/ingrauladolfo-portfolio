import React from 'react'
import SKILLS from '@/assets/data/SkillsData'
import StackImage from './StackImage'



const Stack = () => {
  return (
    <div className="h-full mt-12">
      <div className="h-fit grid grid-cols-3 md:grid-cols-4 xl:grid-cols-6 w-full gap-4">
        {SKILLS.map((skill) => (
          <StackImage key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  )
}

export default Stack
