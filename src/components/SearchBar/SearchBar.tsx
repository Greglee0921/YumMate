import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const SearchBar = () => {
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

  const BarStyle = {
    width: '20rem',
    background: '#F0F0F0',
    border: 'none',
    padding: '0.5rem'
  };

  return (
    <>
      <input
        type="search"
        style={BarStyle}
        key="search-bar"
        value={searchInput}
        placeholder={'Search Recipe'}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </>
  );
};
