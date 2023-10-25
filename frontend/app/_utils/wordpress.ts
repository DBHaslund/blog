const baseURL = process.env.NEXT_PUBLIC_WP_URL as string;

interface keys {
  slug: string;
}

export const getPosts = async () => {
  const postRes = await fetch(baseURL + '/posts');
  const postArray = await postRes.json();
  const posts = postArray.filter((post: wpPost) => post.slug !== 'intro')
  return posts as wpPost[];
};

export const getPost = async (slug: string) => {
  const posts = await getPosts();
  const postArray = posts.filter((post: wpPost) => post.slug === slug);
  const post = postArray.length > 0 ? postArray[0] : null;
  return post as wpPost;
};

export const getRecipes = async () => {
  const recipesRes = await fetch(baseURL + '/recipes');
  const recipes = await recipesRes.json();
  return recipes as wpRecipe[];
};

export const getRecipe = async (slug: string) => {
  const recipes = await getRecipes();
  const recipeArray = recipes.filter(
    (recipe: wpRecipe) => recipe.slug === slug
  );
  const recipe = recipeArray.length > 0 ? recipeArray[0] : null;
  return recipe as wpRecipe;
};

export const getSlugs = async (type: string) => {
  let elements = [] as wpPost[] | wpRecipe[];
  switch (type) {
    case 'posts':
      elements = await getPosts();
      break;
    case 'recipes':
      elements = await getRecipes();
      break;
  }
  const elementIds = elements.map((element: keys) => {
    return {
      params: {
        slug: element.slug,
      },
    };
  });
  return elementIds;
};
