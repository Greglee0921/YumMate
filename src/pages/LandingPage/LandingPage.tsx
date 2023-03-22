import React from 'react';
import { SearchBar } from 'components';
import { Popular } from 'components/Popular';

export const LandingPage = () => {
  return (
    <>
      <div className="bg-hero bg-no-repeat bg-cover bg-center bg-fixed h-[60vh] flex flex-col items-center justify-center ">
        <div className="flex">
          <h3 className="text-mainBg text-7xl font-black mb-20">
            Welcome To&nbsp;
          </h3>
          <p className="text-logo text-7xl font-black mb-20">YumMate!</p>
        </div>
        <h3 className="text-white text-5xl font-extrabold mb-5">
          Start Searching Recipes!
        </h3>
        <SearchBar />
      </div>
      <Popular />
    </>
  );
};
