import React from 'react';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import BookmarkRemoveIcon from '@mui/icons-material/BookmarkRemove';
import { Preloader } from 'components/Preloader';
import { useSearchRecipeById } from 'queries/recipe';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const SingleRecipe = () => {
  const params = useParams();
  // const [favorited, setFavorited] = useState(false);

  const { data, isLoading, isFetching } = useQuery(
    ['recipeInfo', params.recipedId],
    () => useSearchRecipeById(params.recipeId),
    { refetchOnWindowFocus: false }
  );

  console.log('data: ', data);
  const recipeId = Number(params.recipeId);

  if (isLoading || isFetching) {
    return <Preloader />;
  }

  const steps = data.analyzedInstructions[0].steps;
  const servings = data.servings;
  const ingredientsArray = data.extendedIngredients;

  const handleSaveRecipe = () => {
    const check = localStorage.getItem('favoriteRecipes');

    if (check) {
      const favoriteRecipes = JSON.parse(check);
      console.log('favoriteRecipes: ', favoriteRecipes);
      for (let i = 0; i < favoriteRecipes.length; i++) {
        if (favoriteRecipes[i].id === data.id) {
          return;
        }
      }
      favoriteRecipes.push({
        id: data.id,
        title: data.title,
        image: data.image
      });
      toast('Recipe added to favorites!');
      // setFavorited(true);
      localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipes));
    } else {
      const favoriteRecipes = [
        { id: data.id, title: data.title, image: data.image }
      ];
      console.log('favoriteRecipes : ', favoriteRecipes);
      localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipes));
      toast('Recipe added to favorites!');
    }
  };

  const handleDeleteFavorite = (id: number) => {
    const check = localStorage.getItem('favoriteRecipes');
    const favoriteRecipes = JSON.parse(check);
    const arr = favoriteRecipes.filter((current) => {
      console.log('current.id: ', current.id);
      console.log('recipeId: ', id);
      if (current.id != id) {
        return true;
      }
      return false;
    });
    console.log('Edited favoriteRecipes array: ', arr);
    localStorage.setItem('favoriteRecipes', JSON.stringify(arr));
    toast('Recipe succesfully removed from favorites!');
  };

  return (
    <div className="bg-mainBg pb-10">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="flex flex-col xl:flex-row xl:h-[85vh] xl:border-b-[1px] xl:border-link-hilight">
        <div className="flex flex-col items-center justify-center xl:w-[50%] px-5 xl:px-20">
          <div className="flex flex-col h-[50vh] xl:h-auto justify-center items-center">
            <h1 className="text-4xl text-center font-black text-link-hilight xl:mb-5">
              {data?.title}
            </h1>
            <div>
              <div className="flex my-5 xl:mt-5 gap-1 xl:gap-2">
                <BookmarkAddIcon
                  className="hover: cursor-pointer"
                  onClick={handleSaveRecipe}
                />
                <span>Save Recipe</span>
                <div className="xl:ml-5">
                  <BookmarkRemoveIcon
                    className="hover: cursor-pointer"
                    onClick={() => handleDeleteFavorite(recipeId)}
                  />
                  Remove Favorite
                </div>
              </div>
            </div>

            <div className="flex gap-1">
              {data.preparationMinutes >= 0 ? (
                <div className="flex gap-2 border-r-[1px] border-link-hilight">
                  <h3 className="text-sm font-bold text-link-hilight">
                    Preparation Time:
                  </h3>
                  <div className="flex items-center gap-1">
                    <AccessTimeIcon style={{ fontSize: '18' }} />
                    <p className="text-sm mr-2">{`${data?.preparationMinutes} minutes`}</p>
                  </div>
                </div>
              ) : (
                ''
              )}
              <div className="flex gap-2">
                <h3 className="text-sm font-bold text-link-hilight">
                  Total Time:
                </h3>
                <div className="flex items-center gap-1">
                  <AccessTimeIcon style={{ fontSize: '18' }} />
                  <p className="text-sm">{`${data?.readyInMinutes} minutes`}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="my-2 xl:px-10">
            <p
              className="leading-7 text-sm border-t-[1px] border-link-hilight xl:border-0 py-5 xl:py-0"
              dangerouslySetInnerHTML={{ __html: data?.summary }}
            ></p>
          </div>
        </div>

        <div className="order-first xl:order-last xl:w-[50%]">
          <img className="object-cover w-full h-full" src={data?.image} />
        </div>
      </div>

      <div className="flex xl:px-20 px-5">
        <div className="py-5 xl:py-10 md:w-[40%] w-screen border-y-[1px] border-link-hilight xl:border-0">
          <h2 className="text-xl font-bold text-link-hilight xl:border-b-[2px] xl:border-logo">
            Ingredients
          </h2>
          <h3 className="mb-2 xl:my-4 font-bold">{`${servings} servings`}</h3>
          {ingredientsArray?.map((ingredient, index) => (
            <div
              key={index}
              className="flex justify-between mb-2 border-b-[1px] border-link-hilight"
            >
              <span>{`${ingredient.nameClean}`}</span>
              <span>{`${
                Math.round(ingredient.measures.us.amount * 100) / 100
              } ${ingredient.measures.us.unitShort}`}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="py-5 px-5 xl:px-20 xl:w-[80%]">
        <h2 className="text-xl font-bold text-link-hilight mb-2">
          Preparation
        </h2>
        {steps?.map((step, index) => (
          <div key={index} className="flex pb-4">
            <p className="font-extrabold text-link-hilight mr-6">
              {step.number}
            </p>
            <p>{step.step}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
