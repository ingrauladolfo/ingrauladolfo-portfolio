import Card from '@/components/Card'
import React from 'react'
import { FaFolder } from 'react-icons/fa'

const Projects = () => {
  return (
    <section className='py-20 w-full mx-auto lg:w-[740px] pb-32'>
    <div className="max-w-7xl mx-auto px-4 py-8 text-white">
      <h2 className="flex items-center font-semibold gap-x-8 text-3xl mb-8 text-center">
        <FaFolder className="mr-0" size={18} />
        Proyectos
      </h2>
      <Card />
    </div>
  </section>

  )
}

export default Projects