//figure out how to add filter args

export const useSearchRecipesByQuery = async (string: string) => {
  const data = await fetch(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=fc4179225f7d4a14826360cf3d3cab35&query=${string}&addRecipeInformation=false&number=12`
  );

  const recipeList = await data.json();
  console.log('recipeList: ', recipeList);
  return recipeList;
};

export const useSearchRecipeById = async (string: string) => {
  const data = await fetch(
    `https://api.spoonacular.com/recipes/${string}/information?apiKey=fc4179225f7d4a14826360cf3d3cab35&includeNutrition=false`
  );

  const recipeInfo = await data.json();
  console.log('recipeInfo: ', recipeInfo);
  return recipeInfo;
};

export const getPopularRecipes = async () => {
  const data = await fetch(
    `https://api.spoonacular.com/recipes/random?apiKey=fc4179225f7d4a14826360cf3d3cab35&number=12`
  );

  const popularList = await data.json();
  console.log('popularList: ', popularList);
  return popularList;
};
