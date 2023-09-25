import { notFound } from 'next/navigation';
import Recipe from '@/app/_components/Content/Recipe';
import { getRecipe, getSlugs } from '@/app/_utils/wordpress';

interface Props {
  params: {
    slug: string;
  };
}

const RecipePage = async ({ params: { slug } }: Props) => {
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
