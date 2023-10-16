import { getDate } from '@/app/_utils/utils';
import { sanitize } from 'isomorphic-dompurify';
import Image from 'next/image';
import Link from 'next/link';

const Recipe = ({ ...recipe }: wpRecipe) => {
  const date = getDate(recipe.date);
  return (
    <article className='px-12 pb-12'>
      <h1 className='text-center text-2xl font-semibold m-4 mb-12'>
        {recipe.title.rendered}
      </h1>
      <div className='flex justify-center gap-20 mb-8 py-4 border-y'>
        <Link
          href={recipe._links.author[0].href}
          className='underline hover:opacity-80'
        >
          <p>{recipe.author}</p>
        </Link>
        <p className=''>{date}</p>
      </div>
      <Image
        src={recipe.acm_fields.cover.source_url}
        width={500}
        height={0}
        alt={recipe.acm_fields.cover.alt_text as string}
        className='mx-auto h-auto w-3/5 shadow-card dark:shadow-darkCard'
      />
      <h3 className='text-lg font-semibold m-4 underline'>Ingredients</h3>
      <div
        dangerouslySetInnerHTML={{
          __html: sanitize(recipe.acm_fields.ingredientList),
        }}
      />
      <h3 className='text-lg font-semibold m-4 underline'>Instructions</h3>
      <div
        dangerouslySetInnerHTML={{
          __html: sanitize(recipe.acm_fields.instructions),
        }}
      />
    </article>
  );
};

export default Recipe;
