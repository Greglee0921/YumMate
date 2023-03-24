const apiKey = import.meta.env.VITE_SPOONACULAR_API_KEY;

export const useSearchRecipesByQuery = async (string) => {
  const data = await fetch(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${string}&addRecipeInformation=false&number=12`
  );
  const recipeList = await data.json();
  return recipeList;
};

export const useSearchRecipeById = async (string) => {
  const data = await fetch(
    `https://api.spoonacular.com/recipes/${string}/information?apiKey=${apiKey}&includeNutrition=false`
  );
  const recipeInfo = await data.json();
  return recipeInfo;
};

export const getPopularRecipes = async () => {
  const data = await fetch(
    `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=12`
  );
  const popularRecipes = await data.json();
  // console.log('popularRecipes: ', popularRecipes);
  return popularRecipes;
};
