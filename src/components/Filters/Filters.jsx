import React from "react";

const Filters = () => {
  return (
    <div className="border py-5 mx-8 rounded-lg px-4 my-4 flex items-center gap-4 bg-[#faf6f6]">
      <form class={`flex items-center`}>
        <div className={`relative w-96`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search"
            className="w-full py-1 pl-12 pr-4 text-gray-500 border rounded-3xl  bg-[#faf0eb] focus:bg-[#ffece2] focus:outline-none "
            name="searchValue"
            // value={state.filters.searchValue}
          />
        </div>
      </form>
      <div className="flex items-center justify-center gap-2">
        <span className="text-2xl font-medium">Filters: </span>
        <label htmlFor="name" className="flex items-center justify-center gap-1">
          <input type="radio" id="name" name="recipe"/>
          Name
        </label>
        <label htmlFor="ingredients"className="flex items-center justify-center gap-1">
          <input type="radio" id="ingredients" name="recipe"/>
          Ingredients
        </label>
        <label htmlFor="cuisine" className="flex items-center justify-center gap-1">
          <input type="radio" id="cuisine" name="recipe"/>
          Cuisine
        </label>
      </div>
    </div>
  );
};

export default Filters;
