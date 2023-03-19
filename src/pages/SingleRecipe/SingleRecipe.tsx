import React from 'react';
import { useSearchRecipeById } from 'queries/recipe';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

export const SingleRecipe = () => {
  const params = useParams();

  const { data, isSuccess, isError } = useQuery(
    ['recipeInfo', params.recipedId],
    () => useSearchRecipeById(params.recipeId),
    { refetchOnWindowFocus: false }
  );

  console.log('data: ', data);
  console.log('isSuccess: ', isSuccess);
  console.log('isError: ', isError);
  const steps = data.analyzedInstructions[0].steps;
  const servings = data.servings;
  const ingredientsArray = data.extendedIngredients;

  console.log('steps: ', steps);

  return (
    <div className="bg-mainBg px-60 mt-10">
      <div>
        <h1 className="text-5xl font-black">{data?.title}</h1>
      </div>
      <div className="my-5">
        <h3>Total Time</h3>
        <p>{`${data?.readyInMinutes} minutes`}</p>
      </div>
      <div className="my-5">
        <p
          className="leading-7"
          dangerouslySetInnerHTML={{ __html: data?.summary }}
        ></p>
      </div>

      <div className="flex mt-10">
        <div>
          <h2 className="text-xl font-bold">Ingredients</h2>
          <h3 className="mb-2">{`for ${servings} servings`}</h3>
          {ingredientsArray?.map((ingredient) => (
            <div className="mb-2">
              <p>{`${Math.round(ingredient.measures.us.amount * 100) / 100} ${
                ingredient.measures.us.unitShort
              } ${ingredient.nameClean}`}</p>
            </div>
          ))}
        </div>
        <div className="w-1/3 px-10">
          <h2 className="text-xl font-bold mb-2">Preparation</h2>
          {steps?.map((step) => (
            <div className="flex mb-4">
              <p className="font-extrabold text-title-green mr-6">
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
