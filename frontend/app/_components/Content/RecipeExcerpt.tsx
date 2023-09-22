import Link from 'next/link';

import DOMPurify from 'dompurify';

const RecipeExcerpt = (props: wpRecipe) => {
  return (
    <div className='border'>
      <Link href={`/recipes/${props.slug}`}>
      <h3 className='underline'>{props.title.rendered}</h3>
      </Link>
      <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(props.acm_fields.ingredientList) }} />
      <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(props.acm_fields.instructions) }} />
    </div>
  );
};

export default RecipeExcerpt;
