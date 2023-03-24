import React from 'react';
import { Popular } from '../../components/Popular';
import { SearchBar } from '../../components/SearchBar';

export const LandingPage = () => {
  return (
    <>
      <div className="bg-hero bg-no-repeat bg-cover bg-center bg-fixed h-screen md:h-[60vh] flex flex-col items-center  pt-[40%] md:pt-0 md:justify-center">
        <div className="flex">
          <h3 className="text-mainBg text-3xl md:text-7xl font-black mb-20">
            Welcome To&nbsp;
          </h3>
          <p className="text-logo text-3xl md:text-7xl font-black mb-20">
            YumMate!
          </p>
        </div>
        <h3 className="text-white text-2xl md:text-4xl font-extrabold mb-5">
          Start Searching Recipes!
        </h3>
        <SearchBar />
      </div>
      <Popular />
    </>
  );
};
