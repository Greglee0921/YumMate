// import {useQuery} from 'react-query'

// import { seed } from "./seed";

//figure out how to add filter args
// export function useSearchRecipesByQuery(string: string) {
//   const getSearchRecipes = async () => {

//     const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=fc4179225f7d4a14826360cf3d3cab35&query=${string}&number=1`);

//     const recipeList = await data.json();
//     console.log('recipeList: ', recipeList);
//     return recipeList;
//     // console.log('Search Term: ', string);
//     // return seed;
//   };
//   return useQuery(['recipe', string], () => getSearchRecipes(), { placeholderData: []});
// }

export const useSearchRecipesByQuery = async (string: string) => {
  const data = await fetch(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=fc4179225f7d4a14826360cf3d3cab35&query=${string}&number=1`
  );

  const recipeList = await data.json();
  console.log('recipeList: ', recipeList);
  return recipeList;
};
