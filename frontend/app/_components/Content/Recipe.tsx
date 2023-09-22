'use client'

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import DOMPurify from 'dompurify';

import { getRecipe } from '@/app/_utils/wordpress';


const Recipe = () => {
  const [recipe, setRecipe] = useState({} as wpRecipe);
  const [cover, setCover] = useState('' as string);

  const path: string = usePathname().slice(9);

 useEffect(() => {
    const fetchRecipe = async () => {
      const data: wpRecipe = await getRecipe(path);
      setRecipe(data);
      setCover(data.acm_fields.cover.source_url as string);
    };
    fetchRecipe();
  }, [getRecipe]);

  
  const content =
    Object.keys(recipe).length !== 0 ? (
      <>
        <main>
          <h1>{recipe.title.rendered}</h1>
          <p>{recipe.author}</p>
          <p>{recipe.date}</p>
          <Image
            src={cover}
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
      </>
    ) : (
      <p>Loading...</p>
    );
    return <>{content}</>
}

export default Recipe;