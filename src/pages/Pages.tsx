import React from 'react';
import { AllRecipes, LandingPage, SingleRecipe } from 'pages';
import { Route, Routes } from 'react-router-dom';

export const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/recipes/:searchTerm" element={<AllRecipes />} />
      <Route path="/recipe/:recipeId" element={<SingleRecipe />} />
    </Routes>
  );
};
