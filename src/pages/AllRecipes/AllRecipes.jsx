import { useEffect, useRef, useState } from 'react';
import { flushSync } from 'react-dom';
import { Link, useParams } from 'react-router-dom';
import { useSearchRecipesByQuery } from '../../queries/recipe';

export const AllRecipes = () => {
  const params = useParams();
  const [allRecipesList, setAllRecipesList] = useState([]);
  const [showMoreClicked, setShowMoreClicked] = useState(false);
  const [totalResults, setTotalResults] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [scrollId, setScrollId] = useState(0);
  const recipeQueryAmount = 12;
  const offset = useRef(0);

  const getAllRecipes = async () => {
    setIsLoading(true);
    const data = await useSearchRecipesByQuery(
      params.searchTerm,
      offset.current
    );
    setAllRecipesList([...allRecipesList, ...data.results]);
    setTotalResults(data.totalResults);
    setIsLoading(false);
    return data;
  };

  useEffect(() => {
    getAllRecipes();
  }, [showMoreClicked]);

  useEffect(() => {
    if (offset.current > 0) {
      const element = document.getElementById(`${scrollId}`);
      element.scrollIntoView({ block: 'start', behavior: 'smooth' });
    }
  }, [allRecipesList]);

  useEffect(() => {
    if (allRecipesList.length > 0) {
      setAllRecipesList((allRecipesList.length = 0));
    }
    offset.current = 0;
    getAllRecipes();
  }, [params.searchTerm]);

  const handleOnClickShowMore = () => {
    flushSync(() => {
      offset.current += recipeQueryAmount;
      setShowMoreClicked(!showMoreClicked);
      setScrollId(offset.current + 1);
    });
  };

  console.log('allRecipesList: ', allRecipesList);

  return (
    <>
      {allRecipesList.length > 0 ? (
        <div className="bg-mainBg sm:px-10 md:px-20 px-2 py-5 md:py-10">
          <div className="flex items-end mb-5 md:mb-10 ml-3 gap-8">
            <h1 className="text-5xl font-black text-link-hilight">
              {params.searchTerm}
            </h1>
            <h1 className="text-2xl text-totalResults font-bold ">{`${totalResults} recipes`}</h1>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-10">
            {allRecipesList?.map((recipe, index) => (
              <div
                id={`${index + 1}`}
                className="px-2 md:mb-0 mb-4"
                key={index}
              >
                <Link to={`/recipe/${recipe.id}`} className="group">
                  <div className="h-min rounded-lg">
                    <div className="overflow-hidden rounded-lg ">
                      <img
                        className="object-cover rounded-lg aspect-square
                group-hover:scale-125 transition-all duration-250"
                        src={recipe.image}
                      />
                    </div>
                    <h1 className="text-xl md:mt-3 group-hover:text-link-hilight">
                      {recipe.title}
                    </h1>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center text-2xl font-extrabold text-link-hilight mt-8">
            {isLoading ? (
              <h1>Loading Recipes...</h1>
            ) : allRecipesList.length === totalResults ? (
              ''
            ) : (
              <h1
                onClick={handleOnClickShowMore}
                className="hover: cursor-pointer"
              >
                Show More
              </h1>
            )}
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center md:px-20 py-5 md:py-10">
          <h1 className="text-2xl text-totalResults font-black text-link-hilight">
            No recipes for &nbsp;
          </h1>
          <h1 className="text-2xl font-black text-link-hilight">
            {params.searchTerm}
          </h1>
          <h1 className="text-2xl text-totalResults font-bold ">
            &nbsp; currently...
          </h1>
        </div>
      )}
    </>
  );
};
