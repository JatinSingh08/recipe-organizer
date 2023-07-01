import React from "react";
import { BiChevronRight } from "react-icons/bi";
import { Link } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  const { id ,title, cuisine, recipeimage, ingredients, instructions } = recipe;

  return (
    <div className="border h-96 rounded-md flex-col justify-between items-center">
      <div>
        <img src={recipeimage} alt={title} className=" h-56 object-contain" />
        <h1 className="text-lg mt-2 font-medium ">{title}</h1>
      </div>
      <div className="flex flex-col mt-10 px-6">
        <div className="flex justify-between">
          <h2 className="font-medium">Cuisine Type: </h2>
          <p>{cuisine}</p>
        </div>
        <div className="flex justify-between">
          <h2 className=" font-medium">Ingredients: </h2>
          <Link className="flex items-center justify-center hover:cursor-pointer" to={`/recipe/${id}`} >
              <span>See Recipe</span>
              <BiChevronRight className="mt-1"/>
          </Link>
        </div>
        <div className="flex justify-between">
          <h2 className="font-medium">Instructions: </h2>
          <Link className="flex items-center justify-center hover:cursor-pointer" to={`/recipe/${id}`}>
            <span>See Recipe</span>
            <BiChevronRight className="mt-1"/>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
