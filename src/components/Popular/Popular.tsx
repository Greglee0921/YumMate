/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { useEffect } from 'react';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
// import { getPopularRecipes } from 'queries/recipe';
// import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';

export const Popular = () => {
  const [popular, setPopular] = useState([]);
  // const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    void getPopular();
  }, []);

  const getPopular = async () => {
    const check = localStorage.getItem('popular');
    if (check) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      setPopular(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=fc4179225f7d4a14826360cf3d3cab35&number=12`
      );
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const data = await api.json();

      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      localStorage.setItem('popular', JSON.stringify(data.recipes));
      setPopular(data.recipes);
      console.log('data: ', data.recipes);
    }
  };

  console.log('favorite: ', favorite);

  // const { data } = useQuery(['recipe'], () => getPopularRecipes(), {
  //   placeholderData: [],
  //   refetchOnWindowFocus: false
  // });
  // console.log('data: ', data.recipes);

  return (
    <div className="bg-mainBg h-[80vh] flex flex-col items-center py-20 px-10">
      <h3 className="text-4xl font-extrabold text-link-hilight">
        Popular Picks
      </h3>
      <Splide
        options={{
          perPage: 4,
          arrows: true,
          pagination: false,
          drag: 'free',
          gap: '1rem'
        }}
        className="my-10 w-[85%] px-10"
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
