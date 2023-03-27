const apiKey = import.meta.env.VITE_SPOONACULAR_API_KEY;
const recipeQueryAmount = 12;

export const useSearchRecipesByQuery = async (string, offset) => {
  console.log('offset in query: ', offset);
  const data = await fetch(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${string}&offset=${offset}&addRecipeInformation=false&number=${recipeQueryAmount}`
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
    `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=${recipeQueryAmount}`
  );
  const popularRecipes = await data.json();
  // console.log('popularRecipes: ', popularRecipes);
  return popularRecipes;
};
