import Link from 'next/link';
import Card from '../UI/Card';
import { sanitize } from 'isomorphic-dompurify';

const RecipeExcerpt = ({ ...recipe }: wpRecipe) => {
  return (
    <Card>
      <Link href={`/recipes/${recipe.slug}`}>
        <h3 className=''>{recipe.title.rendered}</h3>
      </Link>
      <p
        dangerouslySetInnerHTML={{
          __html: sanitize(recipe.acm_fields.description),
        }}
      />
    </Card>
  );
};

export default RecipeExcerpt;
