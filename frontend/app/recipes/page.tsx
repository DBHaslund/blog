import { getRecipes } from '../_utils/wordpress';
import RecipeExcerpt from '../_components/Content/RecipeExcerpt';
import Container from '../_components/UI/Container';
import RecipeList from '../_components/Content/RecipeList';

const Recipes = async () => {
  const recipes: wpRecipe[] = await getRecipes();

  return (
    <section>
      <Container className='md:flex'>
      <RecipeList recipes={recipes} />
      </Container>
    </section>
  );
};

export default Recipes;
