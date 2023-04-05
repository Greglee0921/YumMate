import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Autocomplete } from '../Autocomplete/Autocomplete.jsx';

export const SearchBar = ({ nav }) => {
  const [searchInput, setSearchInput] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  // const handleKeyDown = (e) => {
  //   if (e.key === 'Enter') {
  //     navigate(`/recipes/${searchInput}`);
  //   }
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/recipes/${searchInput}`);
    setSearchInput('');
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex justify-center flex-col relative"
      >
        <input
          className={
            nav
              ? 'w-[5rem] md:w-[15rem] h-[2.5rem] bg-mainBg p-[0.75rem] md:p-[1rem] rounded-full'
              : 'w-[20rem] md:w-[35rem] h-15 p-[1rem]'
          }
          type="search"
          key="search-bar"
          value={searchInput}
          placeholder={'Search Recipe...'}
          onChange={handleChange}
          // onKeyDown={handleKeyDown}
        />
        <Autocomplete nav={nav} searchInput={searchInput} />
      </form>
    </div>
  );
};
