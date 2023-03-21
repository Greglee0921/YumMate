import { Preloader } from 'components/Preloader';
import { useSearchRecipesByQuery } from 'queries/recipe';
import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom';

export const AllRecipes = () => {
  const params = useParams();

  const { data, isLoading, isFetching } = useQuery(
    ['recipe', params.searchTerm],
    () => useSearchRecipesByQuery(params.searchTerm),
    { placeholderData: [], refetchOnWindowFocus: false }
  );

  //build out dropdowns for filters + corresponding state

  if (isLoading || isFetching) {
    return <Preloader />;
  }

  return (
    <div className="bg-mainBg px-20 py-10">
      <div className="flex items-end mb-10 ml-3 gap-8">
        <h1 className="text-5xl font-black text-link-hilight">
          {params.searchTerm}
        </h1>
        <h1 className="text-2xl text-totalResults font-bold ">{`${data.totalResults} recipes`}</h1>
      </div>
      <div className="grid grid-cols-4 gap-10">
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
