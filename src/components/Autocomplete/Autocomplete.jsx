/* eslint-disable no-negated-condition */
// import React, { useEffect, useState } from 'react';
// import { getAutoComplete } from '../../queries/recipe';

// export const Autocomplete = ({ nav, searchInput }) => {
//   const [autocompleteInput, setAutocompleteInput] = useState([]);

//   useEffect(() => {
//     const data = getAutoComplete(searchInput);
//     setAutocompleteInput(data);
//   }, [searchInput]);

//   console.log('autocompleteInput: ', autocompleteInput)
//   return (
//     <div
//       className={
//         autocompleteInput?.length === 0
//           ? 'hidden'
//           : nav
//           ? 'w-[5rem] md:w-[15rem] h-[2rem] bg-mainBg p-[0.75rem] md:p-[1rem]'
//           : 'w-[20rem] md:w-[35rem] h-15 p-[1rem]'
//       }
//     >
//       {autocompleteInput?.map((term, index) => (
//         <p key={index}>{term.title}</p>
//       ))}
//     </div>
//   );
// };
