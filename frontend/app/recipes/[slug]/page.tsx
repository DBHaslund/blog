import { notFound } from 'next/navigation';
import Recipe from '@/app/_components/Content/Recipe';
import { getRecipe, getSlugs } from '@/app/_utils/wordpress';
import Container from '@/app/_components/UI/Container';
import Card from '@/app/_components/UI/Card';

const RecipePage = async ({ params: { slug } }: Slug) => {
  const recipe = await getRecipe(slug);
  if (!recipe) {
    notFound();
  }

  return (
    <Container className='w-4/5 m-auto'>
      <Card>
        <Recipe {...recipe} />
      </Card>
    </Container>
  );
};

export const generateStaticParams = async () => {
  const recipeSlugs = await getSlugs('recipe');
  return recipeSlugs;
};

export default RecipePage;

export const generateMetadata = async ({ params: { slug } }: Slug) => {
  const recipe = await getRecipe(slug);

  return {
    title: recipe.title.rendered,
  };
};
