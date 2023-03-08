import React, { useState } from 'react';

export const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  const BarStyle = {
    width: '20rem',
    background: '#F0F0F0',
    border: 'none',
    padding: '0.5rem'
  };

  return (
    <>
      <div>Search Bar</div>
      <input
        style={BarStyle}
        key="search-bar"
        value={searchTerm}
        placeholder={'Search Recipe'}
        onChange={handleChange}
      />
    </>
  );
};
