import Link from 'next/link';
import Card from '../UI/Card';
import { sanitize } from 'isomorphic-dompurify';
import Image from 'next/image';

const RecipeExcerpt = ({ ...recipe }: wpRecipe) => {
  return (
    <div className='md:w-[30%]'>
      <Link href={`/recipes/${recipe.slug}`} className='hover:opacity-80'>
        <Card className=''>
          <h3 className='text-lg font-semibold border-b mb-2 pb-2 px-2 text-center'>
            {recipe.title.rendered}
          </h3>
          <p
            className='line-clamp-[5] px-2'
            dangerouslySetInnerHTML={{
              __html: sanitize(recipe.acm_fields.description),
            }}
          />
          {recipe.acm_fields.cover.source_url && (
            <Image
              src={recipe.acm_fields.cover.source_url}
              alt={recipe.acm_fields.cover.alt_text}
              width={300}
              height={200}
            />
          )}
        </Card>
      </Link>
    </div>
  );
};

export default RecipeExcerpt;
