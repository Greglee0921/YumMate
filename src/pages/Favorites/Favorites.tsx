/* eslint-disable @typescript-eslint/no-unsafe-argument */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    void getFavorites();
  }, []);

  const getFavorites = async () => {
    const check = localStorage.getItem('favoriteRecipes');
    setFavorites(JSON.parse(check));
  };

  return (
    <div className="flex flex-col justify-center items-center px-20 py-10">
      <h1 className="text-5xl text-link-hilight font-black mb-20">Favorites</h1>
      <div className="grid grid-cols-4 gap-10">
        {favorites.map((recipe) => (
          <div className="px-2" key={recipe.id}>
            <Link to={`/recipe/${recipe.id}`} className="group">
              <div className="h-min rounded-lg">
                <div className="overflow-hidden rounded-lg ">
                  <img
                    className="object-cover rounded-lg aspect-square
                 group-hover:scale-125 transition-all duration-250"
                    src={recipe.image}
                  />
                </div>
                <h1 className="text-xl mt-3 group-hover:text-link-hilight">
                  {recipe.title}
                </h1>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};