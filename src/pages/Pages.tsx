import React from 'react';
import { AllRecipes, LandingPage } from 'pages';
import { Route, Routes } from 'react-router-dom';

export const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/recipe/:searchTerm" element={<AllRecipes />} />
    </Routes>
  );
};
