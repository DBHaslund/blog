'use client';
import { useState } from 'react';
import RecipeExcerpt from './RecipeExcerpt';

interface Recipe {
  recipes: wpRecipe[];
}

const RecipeList = (recipes: Recipe) => {
  const [query, setQuery] = useState<string>('');

  return (
    <>
      <div className='w-full flex justify-end'>
        <input
          type='text'
          value={query}
          onChange={(e: any) => setQuery(e.target.value)}
          placeholder='Search...'
          className='w-[20%] min-w-[125px] mr-6 border p-1'
        />
      </div>
      {recipes.recipes
        .filter((recipe) => {
          if (query === '') {
            return recipe;
          } else if (
            recipe.title.rendered.toLowerCase().includes(query.toLowerCase())
          ) {
            return recipe;
          }
        })
        .map((recipe) => (
          <RecipeExcerpt key={recipe.id} {...recipe} />
        ))}
    </>
  );
};

export default RecipeList;