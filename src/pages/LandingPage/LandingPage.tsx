import React from 'react';
import { SearchBar } from 'components';
import { Popular } from 'components/Popular';

export const LandingPage = () => {
  return (
    <>
      <div className="bg-hero bg-no-repeat bg-cover bg-center bg-fixed h-[60vh] flex flex-col items-center pt-40">
        <h3 className="text-white text-7xl font-black mb-10">
          Start Searching Recipes!
        </h3>
        <SearchBar />
      </div>
      <Popular />
    </>
  );
};
