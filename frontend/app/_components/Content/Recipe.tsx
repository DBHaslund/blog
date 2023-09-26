'use client';
import Image from 'next/image';
import DOMPurify from 'dompurify';

const Recipe = ({ ...recipe }: wpRecipe) => { 
  return (
  
      <main>
        <h1>{recipe.title.rendered}</h1>
        <p>{recipe.author}</p>
        <p>{recipe.date}</p>
        <Image
          src={recipe.acm_fields.cover.source_url}
          width={300}
          height={200}
          alt={recipe.acm_fields.cover.alt_text as string}
        />
        <p
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(recipe.acm_fields.ingredientList),
          }}
        />
        <p
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(recipe.acm_fields.instructions),
          }}
        />
      </main> 
      )
};

export default Recipe;
