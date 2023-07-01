import React, { createContext, useContext, useReducer } from 'react'
import { RecipeReducer, initalState } from '../reducers/RecipeReducer';

const RecipeContext = createContext();
const RecipeProvider = ({children}) => {
  const [state, dispatch] = useReducer(RecipeReducer, initalState);
  return (
    <RecipeContext.Provider
    value={{
      state,
      dispatch
    }}
    >
      {children}
    </RecipeContext.Provider>
  )
}
const useRecipe = () => useContext(RecipeContext);
export { useRecipe, RecipeProvider };
