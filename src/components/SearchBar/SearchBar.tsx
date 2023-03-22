import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const SearchBar = ({ nav }) => {
  const [searchInput, setSearchInput] = useState('');
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      navigate(`/recipes/${searchInput}`);
    }
  };

  return (
    <>
      <div className="flex justify-center">
        <input
          className={
            nav
              ? 'w-[15rem] h-10 bg-mainBg p-[0.75rem] rounded-full'
              : 'w-[35rem] h-15 p-[1rem]'
          }
          type="search"
          key="search-bar"
          value={searchInput}
          placeholder={'Search Recipe...'}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
      </div>
    </>
  );
};
