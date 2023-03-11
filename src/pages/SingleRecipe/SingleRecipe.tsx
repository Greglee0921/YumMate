import React from 'react';
import { useSearchRecipeById } from 'queries/recipe';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

export const SingleRecipe = () => {
  const params = useParams();

  const { data } = useQuery(
    ['recipeInfo', params.recipedId],
    () => useSearchRecipeById(params.recipeId),
    { refetchOnWindowFocus: false }
  );

  console.log('data: ', data);
  const steps = data.analyzedInstructions[0].steps;
  const servings = data.servings;
  const ingredientsArray = data.extendedIngredients;

  // console.log('steps: ', steps);

  return (
    <div>
      <div>
        <h2>{data.title}</h2>
      </div>
      <div>
        <p dangerouslySetInnerHTML={{ __html: data.summary }}></p>
      </div>
      <div>
        <img src={data.image} />
      </div>
      <div>
        <div>
          <h2>Ingredients</h2>
          <h3>{`for ${servings} servings`}</h3>
          {ingredientsArray.map((ingredient) => (
            <div>
              <p>{ingredient.nameClean}</p>
            </div>
          ))}
        </div>
        <div>
          <h2>Preparation</h2>
          {steps.map((step) => (
            <p>
              {step.number}&nbsp;&nbsp;{step.step}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};
