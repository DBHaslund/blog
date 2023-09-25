import { getRecipes } from '../_utils/wordpress';
import RecipeExcerpt from '../_components/Content/RecipeExcerpt';

const Recipes = async () => {
  const recipes: wpRecipe[] = await getRecipes();

  return (
    <section>
      {recipes.map((recipe) => (
        <RecipeExcerpt key={recipe.id} {...recipe} />
      ))}
    </section>
  );
};

export default Recipes;
