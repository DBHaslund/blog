'use client'
import { useState, useEffect } from 'react';

import { getRecipes } from '../_utils/wordpress';
import Recipe from '../_components/Content/Recipe';

const Recipes = () => {
  const [recipes, setRecipes] = useState([] as wpRecipe[]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const data: wpRecipe[] = await getRecipes();
      setRecipes(data);
    };

    fetchRecipes();
  }, [getRecipes]);

  return <section>{recipes.map((recipe) => (
    <Recipe key={recipe.id} {...recipe} />
  ))}</section>
}

export default Recipes;