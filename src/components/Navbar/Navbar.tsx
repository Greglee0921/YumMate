// import AddIcon from '@mui/icons-material/Add';
import { SearchBar } from 'components/SearchBar';
import { Link } from 'react-router-dom';
import cookingAppLogo from '../../assets/cooking-app-logo.png';

export const Navbar = () => (
  <header className="flex h-[75px] justify-between items-center w-full bg-nav px-10 ">
    <Link to={'/'} className="flex items-center gap-2">
      <img
        className="h-[60px] object-cover aspect-square"
        src={cookingAppLogo}
      />
      <h1 className="text-xl text-logo font-black font-['Nunito_Sans']">
        YumMate
      </h1>
    </Link>
    <div className="flex items-center gap-10">
      <Link to={'/favorites'}>
        <p className="font-extrabold text-mainBg hover:text-logo text-xl">
          Favorites
        </p>
        {/* <AddIcon className="text-white" /> */}
      </Link>
      <SearchBar />
    </div>
  </header>
);
