import React from 'react'
import RecipeCard from './RecipeCard'
import { useRecipe } from '../../context/RecipeProvider'

const Recipes = () => {
  const { state } = useRecipe();
  return (
    <div className='grid-cols-4 px-10 py-5 grid items-start justify-center gap-6 mx-8'>
      {
        state?.recipes?.map(recipe => (
          <RecipeCard 
          key={recipe.id}
          recipe={recipe}
          />
        ))
      }
    </div>
  )
}

export default Recipes
