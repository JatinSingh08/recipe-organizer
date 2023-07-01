import { data } from "../data/data";
import { ADD_RECIPE } from "./constants";

const initalState = {
  recipes: data,
  searchValue: ''
}

const RecipeReducer = (state, action) => {
  switch (action.type) {
    case ADD_RECIPE:
      return {
        recipes: [...state.recipes, action.payload]
      }
  
    default:
      break;
  }
}
export { initalState, RecipeReducer };