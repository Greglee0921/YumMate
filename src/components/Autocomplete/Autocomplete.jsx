/* eslint-disable no-negated-condition */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAutoComplete } from '../../queries/recipe';

export const Autocomplete = ({ nav, searchInput }) => {
  const [autocompleteInput, setAutocompleteInput] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      if (searchInput) {
        const data = await getAutoComplete(searchInput);
        setAutocompleteInput(data);
      } else {
        setAutocompleteInput([]);
      }
    })();
    return () => {};
  }, [searchInput]);

  const handleClick = (str) => {
    navigate(`/recipes/${str}`);
    setAutocompleteInput([]);
  };

  console.log('searchInput: ', searchInput);
  console.log('autocompleteInput: ', autocompleteInput);
  return (
    <div
      className={
        autocompleteInput?.length === 0
          ? 'hidden'
          : nav
          ? 'w-[5rem] md:w-[15rem] h-[h-min] bg-mainBg p-[0.75rem] md:p-[1rem] absolute top-[42px] rounded-lg'
          : 'w-[20rem] md:w-[35rem] h-[h-min] p-[1rem] bg-white absolute top-[56px]'
      }
    >
      <ul>
        {autocompleteInput?.map((term, index) => (
          <li
            key={index}
            className="py-1 hover:cursor-pointer hover:bg-[#F4F4F4]"
            onClick={() => handleClick(term.title)}
          >
            {term.title}
          </li>
        ))}
      </ul>
    </div>
  );
};
