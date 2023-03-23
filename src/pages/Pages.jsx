import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AllRecipes, Favorites, LandingPage, SingleRecipe } from './index.js';

export const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/recipes/:searchTerm" element={<AllRecipes />} />
      <Route path="/recipe/:recipeId" element={<SingleRecipe />} />
    </Routes>
  );
};
