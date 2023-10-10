import { getRecipes } from '../_utils/wordpress';
import RecipeExcerpt from '../_components/Content/RecipeExcerpt';
import Container from '../_components/UI/Container';
import RecipeList from '../_components/Content/RecipeList';

const Recipes = async () => {
  const recipes: wpRecipe[] = await getRecipes();

  return (
    <section>
      <Container className='w-4/5 m-auto'>
        <h1 className='hover:opacity-80 text-3xl font-semibold underline decoration-white decoration-1 w-full text-center'>
          Recipes
        </h1>
        <RecipeList recipes={recipes} />
      </Container>
    </section>
  );
};

export default Recipes;
