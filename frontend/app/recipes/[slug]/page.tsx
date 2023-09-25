import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Recipe from '@/app/_components/Content/Recipe';
import { getRecipe, getSlugs } from '@/app/_utils/wordpress';

const RecipePage = async ({ params: { slug } }: Slug) => {
  const recipe = await getRecipe(slug);
  if (!recipe) {
    notFound();
  }

  return (
    <>
      <Recipe {...recipe}/>
    </>
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
    title: recipe.title.rendered
  }
}
