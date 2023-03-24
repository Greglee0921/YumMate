//figure out how to add filter args

export const useSearchRecipesByQuery = async (string) => {
  const data = await fetch(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${
      import.meta.env.VITE_SPOONACULAR_API_KEY
    }&query=${string}&addRecipeInformation=false&number=12`
  );

  const recipeList = await data.json();
  console.log('recipeList: ', recipeList);
  return recipeList;
};

export const useSearchRecipeById = async (string) => {
  const data = await fetch(
    `https://api.spoonacular.com/recipes/${string}/information?apiKey=${
      import.meta.env.VITE_SPOONACULAR_API_KEY
    }&includeNutrition=false`
  );

  const recipeInfo = await data.json();
  console.log('recipeInfo: ', recipeInfo);
  return recipeInfo;
};

export const getPopularRecipes = async () => {
  const data = await fetch(
    `https://api.spoonacular.com/recipes/random?apiKey=${
      import.meta.env.VITE_SPOONACULAR_API_KEY
    }&number=12`
  );

  const popularList = await data.json();
  console.log('popularList: ', popularList);
  return popularList;
};
