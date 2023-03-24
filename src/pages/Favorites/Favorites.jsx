import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  const getFavorites = async () => {
    const check = localStorage.getItem('favoriteRecipes');
    setFavorites(JSON.parse(check));
  };

  useEffect(() => {
    getFavorites();
  }, []);

  return (
    <div className="bg-mainBg flex flex-col justify-center items-center md:px-20 py-5 md:py-10">
      <h1 className="text-5xl text-link-hilight font-black mb-10 md:mb-20">
        Favorites
      </h1>
      {favorites && favorites.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-4 md:gap-10">
          {favorites.map((recipe) => (
            <div className="px-2 md:mb-0 mb-4" key={recipe.id}>
              <Link to={`/recipe/${recipe.id}`} className="group">
                <div className="h-min rounded-lg">
                  <div className="overflow-hidden rounded-lg ">
                    <img
                      className="object-cover rounded-lg aspect-square
                 group-hover:scale-125 transition-all duration-250"
                      src={recipe.image}
                    />
                  </div>
                  <h1 className="text-xl mt-0 md:mt-3 group-hover:text-link-hilight">
                    {recipe.title}
                  </h1>
                </div>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <h1 className="text-xl font-bold text-nav">
            No recipes saved yet. Search up recipes to add to your favorites!
          </h1>
        </div>
      )}
    </div>
  );
};
