import { getRecipes } from '../_utils/wordpress';
import RecipeExcerpt from '../_components/Content/RecipeExcerpt';
import Container from '../_components/UI/Container';

const Recipes = async () => {
  const recipes: wpRecipe[] = await getRecipes();

  return (
    <section>
      <Container className='md:flex'>
        {recipes.map((recipe) => (
          <RecipeExcerpt key={recipe.id} {...recipe} />
        ))}
      </Container>
    </section>
  );
};

export default Recipes;
