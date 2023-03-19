import { useSearchRecipesByQuery } from 'queries/recipe';
import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom';

export const AllRecipes = () => {
  const params = useParams();

  const { data } = useQuery(
    ['recipe', params.searchTerm],
    () => useSearchRecipesByQuery(params.searchTerm),
    { placeholderData: [], refetchOnWindowFocus: false }
  );

  //build out dropdowns for filters + corresponding state

  return (
    <div className="bg-mainBg">
      <div className="grid grid-cols-4 px-20 gap-10 mt-10 mb-10">
        {data.results?.map((recipe) => (
          <div className="px-2" key={recipe.id}>
            <Link to={`/recipe/${recipe.id}`} className="group">
              <div className="h-min rounded-lg">
                <div className="overflow-hidden rounded-lg ">
                  <img
                    className="object-cover rounded-lg aspect-square
                  group-hover:scale-125 transition-all duration-250"
                    src={recipe.image}
                  />
                </div>
                <h1 className="text-xl mt-3 group-hover:text-link-hilight">
                  {recipe.title}
                </h1>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
