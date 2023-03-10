import { useSearchRecipesByQuery } from 'queries/recipe';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

export const AllRecipes = () => {
  const params = useParams();

  const { data } = useQuery(
    ['recipe', params.searchTerm],
    () => useSearchRecipesByQuery(params.searchTerm),
    { placeholderData: [], refetchOnWindowFocus: false }
  );

  //build out dropdowns for filters + corresponding state

  return (
    <div>
      {data.results?.map((recipe) => (
        // make a new component for individual recipe
        <div key={recipe.id}>
          {/* <Link to={recipe.id}> */}
          <img src={recipe.image} />
          <h1>{recipe.title}</h1>
          {/* </Link> */}
        </div>
      ))}
    </div>
  );
};
