import { useEffect, useState } from 'react';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { Link } from 'react-router-dom';
import { getPopularRecipes } from '../../queries/recipe.js';

export const Popular = () => {
  const [popular, setPopular] = useState([]);
  // const [favorite, setFavorite] = useState(false);

  const getPopular = async () => {
    const check = localStorage.getItem('popular');
    if (check && check.length > 0) {
      setPopular(JSON.parse(check));
    } else {
      const popularRecipes = await getPopularRecipes();
      localStorage.setItem('popular', JSON.stringify(popularRecipes.recipes));
      setPopular(popularRecipes.recipes);
    }
  };

  useEffect(() => {
    getPopular();
  }, []);

  return (
    <div className="bg-mainBg h-screen md:h-[80vh] flex flex-col items-center py-20 px-10">
      <h3 className="text-4xl font-extrabold text-link-hilight mb-10 md:mb-0">
        Popular Picks
      </h3>
      <Splide
        options={{
          perPage: 4,
          breakpoints: {
            640: {
              perPage: 1,
              arrows: false
            }
          },
          arrows: true,
          pagination: false,
          drag: 'free',
          gap: '1rem'
        }}
        className="md:my-10 w-[85%] md:px-10"
      >
        {popular.map((recipe) => (
          <SplideSlide className="" key={recipe.id}>
            <div className="group">
              <div className="h-min max-w-[250px] rounded-lg">
                <div className="rounded-lg overflow-hidden relative">
                  <img
                    className="object-cover rounded-lg aspect-square
                  group-hover:scale-125 transition-all duration-250 h-[250px] w-[250px]"
                    src={recipe.image}
                  />
                  {/* {favorite ? (
                    <FavoriteIcon
                    style={{ fontSize: '2.5rem', fill: 'red'}}
                    className="absolute bottom-2 right-2 hover:cursor-pointer"
                    onClick={() => setFavorite(!favorite)} />
                  ) : (
                    <FavoriteBorderIcon
                      style={{ fontSize: '2.5rem', fill: 'whitesmoke' }}
                      className="absolute bottom-2 right-2 hover:cursor-pointer"
                      onClick={() => setFavorite(!favorite)}
                    />
                  )} */}
                </div>
                <Link to={`/recipe/${recipe.id}`}>
                  <h1 className="text-xl mt-3 group-hover:text-link-hilight">
                    {recipe.title}
                  </h1>
                </Link>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};
