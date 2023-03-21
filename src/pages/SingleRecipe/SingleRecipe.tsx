import React, { useState } from 'react';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import { Preloader } from 'components/Preloader';
import { useSearchRecipeById } from 'queries/recipe';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const SingleRecipe = () => {
  const params = useParams();
  const [favorited, setFavorited] = useState(false);
  console.log('favorited', favorited);

  const { data, isLoading, isFetching } = useQuery(
    ['recipeInfo', params.recipedId],
    () => useSearchRecipeById(params.recipeId),
    { refetchOnWindowFocus: false }
  );

  console.log('data: ', data);

  if (isLoading || isFetching) {
    return <Preloader />;
  }

  const steps = data.analyzedInstructions[0].steps;
  const servings = data.servings;
  const ingredientsArray = data.extendedIngredients;

  // console.log('steps: ', steps);

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
      setFavorited(true);
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

  // const handleDeleteRecipe = (id) => {
  //   const check = localStorage.getItem('favoriteRecipes');
  //   const favoriteRecipes = JSON.parse(check);
  //   const arr = favoriteRecipes.filter((current) => {
  //     console.log('current.id: ', current.id);
  //     console.log('recipeId: ', id);
  //     if (current.id != id) {
  //       return current;
  //     }
  //   });
  //   console.log('Edited favoriteRecipes array: ', arr);
  //   localStorage.setItem('favoriteRecipes', JSON.stringify(arr));
  //   toast('Recipe succesfully removed from favorites!');
  // };

  return (
    <div className="bg-mainBg px-60 mt-10">
      <div>
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
        <h1 className="text-5xl font-black text-link-hilight">{data?.title}</h1>
      </div>
      <div className="my-5">
        <h3 className="text-l font-bold text-link-hilight mb-1">Total Time:</h3>
        <div className="flex gap-2">
          <AccessTimeIcon />
          <p>{`${data?.readyInMinutes} minutes`}</p>
        </div>
        <div className="flex mt-5 gap-2">
          <BookmarkAddIcon
            className="hover: cursor-pointer"
            onClick={handleSaveRecipe}
          />
          <span>Save Recipe</span>
        </div>
      </div>
      <div className="my-5">
        <p
          className="leading-7"
          dangerouslySetInnerHTML={{ __html: data?.summary }}
        ></p>
      </div>

      <div className="flex mt-10">
        <div>
          <h2 className="text-xl font-bold text-link-hilight">Ingredients</h2>
          <h3 className="mb-2">{`for ${servings} servings`}</h3>
          {ingredientsArray?.map((ingredient) => (
            <div key={ingredient.id} className="mb-2">
              <p>{`${Math.round(ingredient.measures.us.amount * 100) / 100} ${
                ingredient.measures.us.unitShort
              } ${ingredient.nameClean}`}</p>
            </div>
          ))}
        </div>
        <div className="w-1/3 px-10">
          <h2 className="text-xl font-bold text-link-hilight mb-2">
            Preparation
          </h2>
          {steps?.map((step) => (
            <div key={step.number} className="flex mb-4">
              <p className="font-extrabold text-link-hilight mr-6">
                {step.number}
              </p>
              <p>{step.step}</p>
            </div>
          ))}
        </div>

        <div className="max-w-[420px] max-h-[420px] ml-20">
          <img
            className="object-cover rounded-lg aspect-square"
            src={data?.image}
          />
        </div>
      </div>
    </div>
  );
};
