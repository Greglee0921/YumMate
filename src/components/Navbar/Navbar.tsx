import AddIcon from '@mui/icons-material/Add';
import { SearchBar } from 'components/SearchBar';

export const Navbar = () => (
  <header className="flex justify-end items-center w-full p-4 bg-nav gap-x-10">
    <AddIcon className="text-white" />
    <SearchBar />
  </header>
);
