'use client'
import Link from 'next/link';
import Card from '../UI/Card';

const RecipeExcerpt = ({ ...recipe }: wpRecipe) => {
  return (
    <Card>
      <Link href={`/recipes/${recipe.slug}`}>
      <h3 className=''>{recipe.title.rendered}</h3>
      </Link>
      <p dangerouslySetInnerHTML={{ __html: recipe.acm_fields.description }} />
    </Card>
  );
};

export default RecipeExcerpt;
