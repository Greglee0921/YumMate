// import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
import cookingAppLogo from '../../assets/cooking-app-logo.png';
import { SearchBar } from '../SearchBar';

export const Navbar = () => {
  const nav = true;

  return (
    <header className="flex h-[75px] justify-between items-center w-full bg-nav  px-2 md:px-10">
      <Link to={'/'} className="flex items-center gap-2">
        <img
          className="h-[60px] object-cover aspect-square"
          src={cookingAppLogo}
        />
        <h1 className="text-lg md:text-xl text-logo font-black font-['Nunito_Sans']">
          YumMate
        </h1>
      </Link>
      <div className="flex items-center gap-5">
        <Link to={'/favorites'}>
          <p className="font-extrabold text-mainBg hover:text-logo text-md md:text-xl">
            Favorites
          </p>
          {/* <AddIcon className="text-white" /> */}
        </Link>
        <SearchBar nav={nav} />
      </div>
    </header>
  );
};
