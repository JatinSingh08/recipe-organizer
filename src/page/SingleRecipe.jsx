import React from 'react';
import { useParams } from 'react-router-dom';
import { data } from '../data/data';

const SingleRecipe = () => {
  const { id } = useParams();

  const recipe = data.find(({ id: recipeId }) => recipeId.toString() === id.toString());
  return (
    <div className='mt-4'>
      <h2 className='text-2xl font-semibold italic'>{recipe?.title}</h2>
      <div className='mx-6 p-4 flex gap-2 border-black border-4 h-[480px] shadow-lg rounded-2xl mt-4'>
        <img src={recipe.recipeimage} alt={recipe.title} className='w-[50%] object-contain ' />
        <div className=''>
          <h1 className='text-xl font-medium '>Cuisine: {recipe?.cuisine}</h1>
          <div className='mt-10'>
            <span className='text-lg font-medium'>Ingredients: </span>
            <p>{recipe.ingredients.join(', ')}</p>
          </div>
          <div className='mt-10'>
            <h1 className='text-lg font-medium'>Instructions: </h1>
            <ol>
              {recipe.instructions.map((inst, index) => (
                <li key={index}>{inst}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleRecipe;
