import React, { useState } from 'react'
import { Filters, RecipeModal, Recipes } from '../components'
import { AiOutlinePlus } from 'react-icons/ai'
const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className='relative'>
      <h1 className='underline italic text-3xl font-semibold'>Recipe Organizer</h1>
      <Filters />
      <Recipes />

      <div 
      onClick={(val) => setIsModalOpen(true)}
      className='fixed bg-blue-500 text-white rounded-full w-12 h-12 hover:cursor-pointer hover:bg-blue-600 transition-all duration-300 ease-in-out flex items-center justify-center right-20 bottom-24'>
        <AiOutlinePlus className='w-6 h-6' />
      </div>
      {
        isModalOpen &&
        <RecipeModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        />
      }
    </div>
  )
}

export default Home
