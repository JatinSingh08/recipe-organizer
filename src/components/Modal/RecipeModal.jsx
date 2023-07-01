import React, { useEffect, useRef, useState } from 'react'
import { useRecipe } from '../../context/RecipeProvider';
import { ADD_RECIPE } from '../../reducers/constants';

const RecipeModal = ({isModalOpen, setIsModalOpen}) => {
  const modalRef = useRef(null);  
  const {state, dispatch} = useRecipe();
  const [formInputs, setFormInputs] = useState({
      id: state.recipes.length,
      title: "",
      cuisine: "",
      recipeimage: "https://www.deliciousmagazine.co.uk/wp-content/uploads/2023/03/960x1200-2023D061_SEO_SPAGHETTI_1__-2.jpg",
      ingredients: ["250g spaghetti","1 onion, finely chopped", "500g ground beef"],
      instructions: ["Cook the spaghetti according to the package instructions until al dente. Drain and set aside."]
  });

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ADD_RECIPE, payload: formInputs})
  }
  return (
    <div className="fixed top-0 left-0 right-0 z-50 p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-full bg-gray-600 bg-opacity-75">
    {isModalOpen && (
      <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50">
        <div ref={modalRef} className="bg-white w-[40vw] p-6 rounded-lg shadow-lg md:w-[60vw] md:h-[80vh] md:overflow-y-scroll sm:w-[80vw] ">
          <h2 className="text-xl font-semibold mb-4 md:mb-2 underline underline-offset-4">Enter Recipe</h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 md:grid-cols-1 sm:gap-1 gap-2 ">
              <label htmlFor="title" className="flex items-center justify-center gap-4 mb-2">
                Recipe Title:
                <input
                  id="title"
                  type="text"
                  placeholder="Enter Recipe Title"
                  className="border border-gray-300 rounded-lg p-2 mb-4 w-full mt-1"
                  onChange={(e) => setFormInputs({...formInputs, title: e.target.value})}
                  required
                />
              </label>

              <label htmlFor="cuisine" className="flex items-center justify-center gap-4 mb-2">
                Cuisine Type:
                <input
                  id="cuisine"
                  type="text"
                  placeholder="Cuisine Type"
                  className="border border-gray-300 rounded-lg p-2 mb-4 w-full mt-1"
                  onChange={(e) => setFormInputs({...formInputs, cuisine: e.target.value})}
                  required
                />
              </label>

              <label htmlFor="ingredients" className="flex items-center justify-center gap-4 mb-2 ">
                Ingredients:
                <input
                  id="ingredients"
                  type="text"
                  placeholder="Enter Ingredients"
                  className="border border-gray-300 rounded-lg p-2 mb-4 w-full mt-1"
                  onChange={(e) => setFormInputs({...formInputs, ingredients: [e.target.value]})}
                  required
                />
              </label>

              <label htmlFor="instructions" className="flex items-center justify-center gap-4 mb-2">
                Instructions:
                <textarea
                  id="instructions"
                  type="text"
                  placeholder="Enter Instructions"
                  className="border border-gray-300 rounded-lg p-2 mb-4 w-full mt-1"
                  onChange={(e) => setFormInputs({...formInputs, instructions: e.target.value})}
                  required
                />
              </label>
            </div>
           

            <div className="flex justify-end">
              <button
                type="button"
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded mr-2"
                onClick={closeModal}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    )}
  </div>
  )
}

export default RecipeModal
