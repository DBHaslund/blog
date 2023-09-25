'use client'
import Link from 'next/link';
import DOMPurify from 'dompurify';

const RecipeExcerpt = ({ ...recipe }: wpRecipe) => {
  return (
    <div className='border'>
      <Link href={`/recipes/${recipe.slug}`}>
      <h3 className='underline'>{recipe.title.rendered}</h3>
      </Link>
      <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(recipe.acm_fields.description) }} />
    </div>
  );
};

export default RecipeExcerpt;
